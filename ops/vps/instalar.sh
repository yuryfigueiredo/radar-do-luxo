#!/usr/bin/env bash
# Instala o runner e os timers na VPS. Idempotente: rode de novo depois de editar.
#
# De propósito NÃO habilita os timers. Habilitar é o passo que exige desligar as
# crons do GitHub no mesmo movimento — dois escritores em main ao mesmo tempo é o
# único jeito de esta mudança produzir matéria duplicada ou push rejeitado.
set -euo pipefail

REPO="${REPO:-/home/ubuntu/radar-do-luxo}"
DEST=/home/ubuntu/radar-autonomia

mkdir -p "$DEST"
install -m 0755 "$REPO/ops/vps/rodar-ciclo.sh" "$DEST/rodar-ciclo.sh"

sudo install -m 0644 "$REPO"/ops/vps/radar-scout.service /etc/systemd/system/
sudo install -m 0644 "$REPO"/ops/vps/radar-scout.timer /etc/systemd/system/
sudo install -m 0644 "$REPO"/ops/vps/radar-crawler.service /etc/systemd/system/
sudo install -m 0644 "$REPO"/ops/vps/radar-crawler.timer /etc/systemd/system/
sudo systemctl daemon-reload

if [ ! -f "$REPO/.env.vps" ]; then
  install -m 0600 "$REPO/ops/vps/env.vps.exemplo" "$REPO/.env.vps"
  echo "Criei $REPO/.env.vps com placeholders (modo 600). Preencha antes de rodar."
fi

echo
echo "Fuso da máquina (os timers assumem UTC): $(timedatectl show -p Timezone --value 2>/dev/null || date +%Z)"
echo "Instalado e DESABILITADO. Para ligar, depois de desligar as crons do GitHub:"
echo "  sudo systemctl enable --now radar-scout.timer radar-crawler.timer"
