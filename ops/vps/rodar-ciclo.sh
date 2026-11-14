#!/usr/bin/env bash
# Um ciclo do robô editorial fora do GitHub Actions. Espelha os dois workflows:
# `scout` roda a curadoria de pautas e `crawler` roda a publicação, cada um com o
# mesmo commit e a mesma lista de arquivos que o passo "💾 Publicar" do Actions usa.
#
# O flock existe porque os dois modos escrevem no mesmo branch. No Actions quem faz
# esse papel é o concurrency group `radar-editorial`; aqui é um arquivo de lock, e sem
# ele um scout das 09h30 e um crawler das 10h15 que se alongasse brigariam pelo push.
set -uo pipefail

MODO="${1:-}"
# Argumentos extras vão direto para o node: `rodar-ciclo.sh crawler --dry-run` é o
# teste seguro. DRY_RUN como variável só aceita '1' — 'true' não é reconhecido pelo
# crawler e publica de verdade.
EXTRA=("${@:2}")
REPO="${REPO:-/home/ubuntu/radar-do-luxo}"
ENV_FILE="${ENV_FILE:-$REPO/.env.vps}"
LOCK="${LOCK:-/run/lock/radar-editorial.lock}"
# Fora do clone de propósito: um arquivo solto no repo aparece em todo git status.
HASH_NPM="${HASH_NPM:-/var/tmp/radar-npm-ci.hash}"

if [ "$MODO" != "scout" ] && [ "$MODO" != "crawler" ]; then
  echo "uso: rodar-ciclo.sh {scout|crawler}" >&2
  exit 2
fi

if [ ! -f "$ENV_FILE" ]; then
  echo "FALTA_ENV: $ENV_FILE não existe. Copie ops/vps/env.vps.exemplo, preencha e chmod 600." >&2
  exit 3
fi

# set -a exporta tudo que o arquivo define: é assim que GEMINI_API_KEY, SUPABASE_* e
# AI_MODEL_CHAIN chegam ao node sem aparecer na linha de comando (ps não mostra).
set -a
# shellcheck disable=SC1090
. "$ENV_FILE"
set +a

# Supabase é OPCIONAL: sem as credenciais o crawler entra em "Modo Local Primário"
# e publica pelo acervo em mockData.js, que é exatamente o que o site em produção
# renderiza. Exigir aqui bloquearia um ciclo perfeitamente válido.
if [ -n "${SUPABASE_URL:-}" ] && [ -n "${SUPABASE_SERVICE_ROLE_KEY:-}" ]; then
  echo "Supabase: ativo (escrita dupla, acervo + banco)"
else
  echo "Supabase: ausente — Modo Local Primário (só acervo em mockData.js)"
fi
# Rodar sem nenhuma IA não é neutro: o ciclo publicaria rascunho do sintetizador
# local com selo "REDIGIDA SEM IA" em vez de matéria. Melhor parar aqui.
if [ -z "${GEMINI_API_KEY:-}" ] && [ -z "${AI_MODEL_CHAIN:-}" ]; then
  echo "FALTA_CREDENCIAL: nem GEMINI_API_KEY nem AI_MODEL_CHAIN — não haveria IA nenhuma." >&2
  exit 12
fi

SECO=0
if [ "${DRY_RUN:-0}" = "1" ]; then SECO=1; fi
for a in ${EXTRA+"${EXTRA[@]}"}; do
  [ "$a" = "--dry-run" ] && SECO=1
done
[ "$SECO" = "1" ] && echo "MODO SECO: nada será commitado nem publicado."

mkdir -p "$(dirname "$LOCK")"
exec 9>"$LOCK"
if ! flock -w 900 9; then
  echo "LOCK_ESGOTADO: outro ciclo ainda escrevia em main depois de 15min." >&2
  exit 4
fi

cd "$REPO" || exit 5
echo "=== ciclo $MODO $(date -u '+%F %T UTC') ==="

# Publicar exige uma chave de escrita no repo (deploy key com acesso de escrita).
# Sem ela o ciclo ainda roda e ainda commita localmente — mas nada chega ao site,
# então o log diz PUBLICACAO_PULADA em vez de fingir sucesso. A chave vai por
# GIT_SSH_COMMAND: um token dentro da URL apareceria em `ps` e no remote do clone.
publicar() {
  local destino="git@github.com:yuryfigueiredo/radar-do-luxo.git"
  if [ -z "${DEPLOY_KEY:-}" ] || [ ! -f "${DEPLOY_KEY:-/inexistente}" ]; then
    echo "PUBLICACAO_PULADA: DEPLOY_KEY ausente. Commit ficou só neste clone." >&2
    return 0
  fi
  # IdentityAgent=none nao e enfeite: sob systemd o SSH_AUTH_SOCK da sessao desktop esta
  # alcancavel, as duas deploy keys do Mac chegam pela ordem do agente, e o GitHub
  # aceita a primeira como credencial. Se ela for a chave de outro repo, o ssh nem
  # tenta a segunda e o push morre em "denied to deploy key".
  export GIT_SSH_COMMAND="ssh -i $DEPLOY_KEY -o IdentitiesOnly=yes -o IdentityAgent=none -o StrictHostKeyChecking=accept-new"
  git pull --rebase --autostash origin main --quiet || {
    echo "REBASE_FALHOU: main andou e o rebase não resolveu sozinho." >&2
    git rebase --abort >/dev/null 2>&1
    return 9
  }
  if git push "$destino" HEAD:main; then
    echo "publicado em main: $(git rev-parse --short HEAD)"
  else
    echo "PUSH_FALHOU: a chave não tem escrita ou o repo moveu." >&2
    return 10
  fi
}

# Clone de automação: nenhuma edição local é esperada aqui, então acompanhar o
# origin/main é o equivalente do `actions/checkout` com ref: main. Ignorados
# (o .env.vps) sobrevivem porque não usamos clean.
git fetch --quiet origin main || { echo "FETCH_FALHOU" >&2; exit 6; }
git reset --hard origin/main || { echo "RESET_FALHOU" >&2; exit 7; }

LOCK_ANTIGO="$(cat "$HASH_NPM" 2>/dev/null || echo)"
LOCK_NOVO="$(sha1sum package-lock.json | cut -d' ' -f1)"
if [ "$LOCK_ANTIGO" != "$LOCK_NOVO" ]; then
  npm ci --no-audit --no-fund || { echo "NPM_CI_FALHOU" >&2; exit 8; }
  printf '%s' "$LOCK_NOVO" > "$HASH_NPM"
fi

if [ "$MODO" = "scout" ]; then
  node scripts/curateHotFeeds.js ${EXTRA+"${EXTRA[@]}"}
  CODIGO=$?
  ARQUIVOS="src/data/hotFeedsData.js"
  MENSAGEM="chore(curation): scout global luxury feeds"
  AUTOR="Radar Curator Scout <curator@radardoluxo.com.br>"
else
  node scripts/autonomousCrawler.js ${EXTRA+"${EXTRA[@]}"}
  CODIGO=$?
  ARQUIVOS="src/data/mockData.js src/services/radarService.js src/data/editorialRetryQueue.js src/data/hotFeedsData.js src/data/publishedArchive.js"
  MENSAGEM="chore(editorial): publica matéria autônoma e atualiza memória editorial"
  AUTOR="Radar Editorial Bot <editorial@radardoluxo.com.br>"
fi
echo "node saiu com código $CODIGO"

# shellcheck disable=SC2086
git add $ARQUIVOS
if [ "$SECO" = "1" ]; then
  git reset --quiet
  echo "DRY_RUN: acervo intocado, nada commitado."
elif git diff --cached --quiet; then
  echo "NADA_A_PUBLICAR: o ciclo não alterou o acervo."
else
  git -c user.name="${AUTOR%% <*}" -c user.email="${AUTOR##*<}" commit -m "$MENSAGEM" --quiet
  echo "commit criado: $(git rev-parse --short HEAD)"
  # Se o push falhar, o commit fica neste clone até o próximo ciclo — que faz
  # reset --hard e o descarta. A matéria escrita se perde, e quem cobre o buraco
  # é o alarme reserva seguinte. É o mesmo comportamento do job do Actions morrendo
  # depois de escrever: não existe fila de retries de push, e criar uma aqui seria
  # um segundo escritor em main.
  publicar
fi

# O workflow_run do Actions vira isto: scout bom dispara o crawler. Nunca em modo
# seco — um teste do scout não pode puxar uma publicação de verdade.
if [ "$MODO" = "scout" ] && [ "$SECO" = "0" ] && [ "$CODIGO" -eq 0 ] && command -v systemctl >/dev/null; then
  systemctl start radar-crawler.service && echo "crawler disparado após o scout"
fi

exit $CODIGO
