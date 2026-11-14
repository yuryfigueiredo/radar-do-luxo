#!/usr/bin/env bash
# Instala o runner e os timers no Mac (Linux Mint), como units de USUÁRIO.
# Idempotente: rode de novo depois de editar. Não precisa de sudo.
#
# De propósito NÃO habilita os timers. Habilitar é o passo que exige desligar os
# timers da outra máquina no mesmo movimento — dois escritores em main ao mesmo
# tempo é o único jeito de esta mudança produzir matéria duplicada ou push rejeitado.
set -euo pipefail

REPO="${REPO:-/home/yury/Documentos/Projeto/radardoluxo}"
DEST="$HOME/Documentos/Projeto/radar-autonomia"
U="$HOME/.config/systemd/user"

mkdir -p "$DEST" "$U" "$HOME/.cache"
install -m 0755 "$REPO/ops/vps/rodar-ciclo.sh" "$DEST/rodar-ciclo.sh"

for n in scout crawler; do
  install -m 0644 "$REPO/ops/mac/radar-$n.service" "$U/"
  install -m 0644 "$REPO/ops/mac/radar-$n.timer"  "$U/"
done
systemctl --user daemon-reload

if [ ! -f "$REPO/.env.vps" ]; then
  install -m 0600 "$REPO/ops/vps/env.vps.exemplo" "$REPO/.env.vps"
  echo "Criei $REPO/.env.vps com placeholders (modo 600). Preencha antes de rodar."
fi

echo
echo "Fuso da máquina (os alarmes trazem sufixo UTC, então este número é só informativo):"
echo "  $(timedatectl show -p Timezone --value 2>/dev/null || date +%Z)"
echo "Linger (o agendador precisa viver sem sessão de terminal aberta):"
echo "  $(loginctl show-user "$(id -un)" 2>/dev/null | grep ^Linger || echo loginctl indisponível)"
echo "Instalado e DESABILITADO. Para ligar, depois de desligar os timers da outra máquina:"
echo "  systemctl --user enable --now radar-scout.timer radar-crawler.timer"
