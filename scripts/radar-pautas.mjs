#!/usr/bin/env node
/**
 * radar-pautas.mjs — a fila de pautas do turno, lida de onde ela mora.
 *
 * A lista vem de INITIAL_HOT_PAUTAS (curada pelo scout) e é cruzada com o
 * publishedArchive: pauta cuja URL ou título já saiu não volta como novidade,
 * e foi assim que uma matéria quase se repetiu no ar.
 *
 *   node scripts/radar-pautas.mjs            # até 6 candidatas, por nota
 *   node scripts/radar-pautas.mjs --escolhe  # a melhor, em uma linha (KEY=valor)
 */
import path from 'path';
import { fileURLToPath } from 'url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { INITIAL_HOT_PAUTAS } = await import(path.join(RAIZ, 'src/data/hotFeedsData.js'));
const { PUBLISHED_ARCHIVE } = await import(path.join(RAIZ, 'src/data/publishedArchive.js'));

const ARTICLES_SRC = path.join(RAIZ, 'src/data/mockData.js');
const { ARTICLES } = await import(ARTICLES_SRC);

const normaliza = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const palavras = (t) => normaliza(t).split(' ').filter((w) => w.length >= 5);
const sobreposicao = (a, b) => {
  const A = new Set(palavras(a)), B = new Set(palavras(b));
  if (!A.size || !B.size) return 0;
  let iguais = 0;
  for (const w of A) if (B.has(w)) iguais++;
  return iguais / Math.min(A.size, B.size);
};

const publicadas = [...PUBLISHED_ARCHIVE, ...ARTICLES];
const urlsSaidas = new Set(publicadas.map((p) => String(p.source_url || p.sourceUrl || '').replace(/\/+$/, '')));

const agora = Date.now();
// O status que o crawler grava é inglês e minúsculo (published/duplicate/burned);
// a idade vem de createdAt, porque publishedTime aqui é frase humana
// ("Detectado ao vivo nas últimas 24h"), não data.
const CONSUMIDA = ['published', 'duplicate', 'burned', 'consumed', 'queimada', 'duplicada', 'publicada'];
const avaliadas = INITIAL_HOT_PAUTAS.map((p) => {
  const publicada = urlsSaidas.has(String(p.sourceUrl || '').replace(/\/+$/, ''))
    || publicadas.some((a) => sobreposicao(a.title || a.titulo || '', p.originalTitle) >= 0.72);
  const emitida = CONSUMIDA.includes((p.status || '').toLowerCase());
  const criado = new Date(p.createdAt || 0).getTime();
  const idadeH = Number.isFinite(criado) ? (agora - criado) / 3_600_000 : 999;
  const vencida = idadeH > (p.validityHours || 48);
  return { p, publicada, emitida, idadeH, vencida, nota: Number(p.rankingScore) || 0 };
});

const vivas = avaliadas
  .filter((x) => !x.publicada && !x.vencida && !x.emitida)
  .sort((a, b) => b.nota - a.nota);

if (process.argv.includes('--escolhe')) {
  const melhor = vivas[0];
  if (!melhor) {
    console.log('sem_pauta=true');
    process.exit(3);
  }
  console.log(`pauta_id=${melhor.p.id}`);
  console.log(`nota=${melhor.nota}`);
  console.log(`autor=${melhor.p.authorSlug}`);
  console.log(`vertical=${melhor.p.categorySlug}`);
  console.log(`titulo_fonte=${melhor.p.originalTitle}`);
  console.log(`url=${melhor.p.sourceUrl}`);
  console.log(`idade_h=${melhor.idadeH.toFixed(1)}`);
  process.exit(0);
}

console.log(`fila: ${INITIAL_HOT_PAUTAS.length} pautas do scout → ${vivas.length} utilizáveis\n`);
for (const x of avaliadas.sort((a, b) => b.nota - a.nota).slice(0, 8)) {
  const estado = x.publicada ? 'JÁ SAIU' : x.vencida ? 'VENCIDA' : x.emitida ? 'CONSUMIDA' : 'livre';
  console.log(`${String(x.nota).padStart(3)}  ${estado.padEnd(9)}  ${x.p.authorSlug.padEnd(16)}  ${x.idadeH.toFixed(0).padStart(3)}h  ${x.p.originalTitle.slice(0, 74)}`);
}
