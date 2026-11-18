#!/usr/bin/env node
/**
 * radar-retrofoto.mjs — troca foto reaproveitada por foto inédita, na fonte da matéria.
 *
 * O acervo acumulou fotografia repetida: o post-check hoje fecha a porta para o item
 * NOVO, mas as matérias que já estavam no ar continuam lado a lado com a mesma imagem de
 * outra reportagem. Este script resolve isso com a mesma régua do post-check — `fotoJaUsada`
 * e `resolveCoverImage`, importadas de coverImageAudit.js, nenhuma segunda versão.
 *
 *   node scripts/radar-retrofoto.mjs                     # relatório (não toca no disco)
 *   node scripts/radar-retrofoto.mjs --mapa=/tmp/mapa.json
 *   node scripts/radar-retrofoto.mjs --mapa=/tmp/mapa.json --aplica
 *
 * --mapa é {"<slug>": "<url do artigo real>"}. Existe porque 23 das 25 matérias vivas têm
 * sourceUrl gravada como token de RSS (news.google.com/rss/articles/...): a origem se perdeu
 * e o token não reverte em URL. Quem recupera a página é a apuração (busca pela manchete),
 * quem mede e decide a foto é este script, com a mesma régua do post-check.
 *
 * Candidatos, nesta ordem: og:image, twitter:image, "image" de JSON-LD e os <img> do corpo.
 * Nada de banco homologado aqui: o banco é justamente o que repetiu.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const argv = process.argv.slice(2);
const aplica = argv.includes('--aplica');
const soVertical = (argv.find((a) => a.startsWith('--vertical=')) || '').slice(11);
const limite = Number((argv.find((a) => a.startsWith('--limite=')) || '').slice(9) || 0);
const mapaArq = (argv.find((a) => a.startsWith('--mapa=')) || '').slice(7);
const MAPA = mapaArq ? JSON.parse(fs.readFileSync(mapaArq, 'utf8')) : {};
const ehPerdida = (u) => !u || /news\.google\.com\/rss/i.test(u);
const ehImagem = (u) => /\.(jpe?g|png|webp|avif)(\?|$)/i.test(u);
const CONC = 4;
const MAX_CANDIDATOS = 6;
process.env.COVER_AUDIT_BUDGET_MS = process.env.COVER_AUDIT_BUDGET_MS || '12000';

const { ARTICLES } = await import(path.join(RAIZ, 'src/data/mockData.js'));
const { PUBLISHED_ARCHIVE } = await import(path.join(RAIZ, 'src/data/publishedArchive.js'));
const { resolveCoverImage, fotoJaUsada, chaveFoto, fotoDeStock } = await import(path.join(RAIZ, 'scripts/coverImageAudit.js'));

const tudo = [...(PUBLISHED_ARCHIVE || []), ...ARTICLES];
const { HOMOLOGATED_IMAGES: HOMOLOGATED } = await import(path.join(RAIZ, src/services/aiArticleGenerator.js)).catch(() => ({}));
const escolhidas = new Set();

function candidatos(html, base) {
  const out = [];
  const push = (u) => {
    if (!u) return;
    let abs;
    try { abs = new URL(String(u).replace(/&amp;/g, '&'), base); } catch { return; }
    if (!/^https?:/.test(abs.href)) return;
    if (/\.(svg|ico)(\?|$)/i.test(abs.href)) return;
    if (/gravatar|avatar|logo|sprite|placeholder|blank\.gif|favicon|emoji/i.test(abs.href)) return;
    out.push(abs.href);
  };
  push((html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/i) || [])[1]);
  push((html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) || [])[1]);
  push((html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)/i) || [])[1]);
  for (const m of html.matchAll(/"image"\s*:\s*"([^"]{14,})"/g)) push(m[1].replace(/\\\//g, '/'));
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)) push(m[1]);
  return [...new Set(out)];
}

async function baixar(url) {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,*/*' }, signal: AbortSignal.timeout(20000), redirect: 'follow' });
    if (!r.ok) return { erro: `http ${r.status}` };
    return { html: await r.text() };
  } catch (e) { return { erro: String(e.message || e).split('\n')[0].slice(0, 60) }; }
}

async function resolver(item) {
  const usada = fotoJaUsada(item.image, tudo, item.slug);
  if (!usada.usada) return { item, status: 'ok', usada };
  const dada = MAPA[item.slug] || '';
  const fonte = ehImagem(dada) ? '' : (dada || (ehPerdida(item.sourceUrl) ? '' : item.sourceUrl));
  if (!fonte && !ehImagem(dada)) return { item, status: 'sem fonte (sourceUrl é token de RSS e o mapa não traz a página)', usada };
  const pagina = dada && !ehImagem(dada) ? { url: dada } : null;
  let lista;
  if (ehImagem(dada)) lista = [dada];
  else {
    const pag = await baixar(fonte);
    if (pag.erro) return { item, status: `fonte ${pag.erro}`, usada };
    lista = candidatos(pag.html, fonte);
  }
  if (!lista.length && dada) lista = [dada];
  const vistos = [];
  for (const cand of lista.slice(0, MAX_CANDIDATOS)) {
    const k = chaveFoto(cand);
    if (!k || escolhidas.has(k) || vistos.includes(k)) continue;
    vistos.push(k);
    if (fotoJaUsada(cand, tudo, item.slug).usada) continue;
    const audit = await resolveCoverImage(cand, []);
    if (!audit.medida || audit.origin !== 'origem') continue;
    escolhidas.add(k);
    return { item, status: 'nova', usada, escolhida: cand, novaFonte: pagina ? pagina.url : '', nota: audit.note };
  }
  return { item, status: `sem candidata (${vistos.length} testadas)`, usada };
}

// Alvo = o que a régua de hoje reprovaria: foto repetida OU banco de imagem genérica.
// Medido em 17/11: das 23 capas do Unsplash, 19 nem estavam no banco homologado — era stock
// avulso. Comparar só com a lista deixaria essas 19 no ar com o mesmo aspecto de banco.
const reprovavel = (a) => fotoJaUsada(a.image, tudo, a.slug).usada || fotoDeStock(a.image) || (HOMOLOGATED?.[a.categorySlug] || []).map(chaveFoto).includes(chaveFoto(a.image));
const alvos = ARTICLES.filter((a) => (!soVertical || a.categorySlug === soVertical) && reprovavel(a));
console.log(`${alvos.length} matérias vivas com foto reaproveitada · modo ${aplica ? 'APLICANDO' : 'relatório (disco intocado)'}\n`);
const resultados = [];
for (let i = 0; i < alvos.length; i += CONC) {
  const lote = alvos.slice(i, i + (limite || CONC));
  resultados.push(...await Promise.all(lote.map(resolver)));
  if (limite && resultados.length >= limite) break;
}
const trocas = new Map();
for (const r of resultados) {
  console.log(`${r.status === 'nova' ? 'TROCA ' : '  ---  '} ${r.item.categorySlug.padEnd(11)} reaproveitada ${String(r.usada.quantas).padStart(2)}x · ${r.item.title.slice(0, 46)}${r.status === 'nova' ? `\n           → ${r.escolhida.slice(0, 108)}\n             ${r.nota}` : `\n           ${r.status}`}`);
  if (r.status === 'nova') trocas.set(r.item.slug, { image: r.escolhida, sourceUrl: r.novaFonte });
}
console.log(`\nresolvidas: ${trocas.size}/${resultados.length}`);

if (!aplica || !trocas.size) process.exit(0);
const mp = path.join(RAIZ, 'src/data/mockData.js');
let m = fs.readFileSync(mp, 'utf8');
for (const [slug, novo] of trocas) {
  const i = m.indexOf(`"slug": "${slug}"`);
  if (i < 0) throw new Error(`slug ${slug} não achado em mockData.js`);
  const campos = novo.sourceUrl ? ['image', 'sourceUrl', 'source_url'] : ['image'];
  for (const chave of campos) {
    const j = m.indexOf(`"${chave}": "`, i);
    if (j < 0 || j - i > 9000) { if (chave === 'image') throw new Error(`campo ${chave} não achado para ${slug}`); continue; }
    const fim = m.indexOf('"', j + chave.length + 5);
    m = m.slice(0, j) + `"${chave}": "${chave === 'image' ? novo.image : novo.sourceUrl}"` + m.slice(fim + 1);
  }
}
fs.writeFileSync(mp, m);
const ap = path.join(RAIZ, 'src/data/publishedArchive.js');
let a = fs.readFileSync(ap, 'utf8');
for (const [slug, novo] of trocas) {
  const i = a.indexOf(`"slug": "${slug}"`);
  if (i < 0) continue;
  const j = a.indexOf('"image": "', i);
  if (j < 0 || j - i > 4000) continue;
  const fim = a.indexOf('"', j + 10);
  a = a.slice(0, j) + `"image": "${novo.image}"` + a.slice(fim + 1);
  if (novo.sourceUrl) {
    const k = a.indexOf('"sourceUrl": "', i);
    if (k > 0 && k - i < 4000) {
      const l = a.indexOf('"', k + 14);
      a = a.slice(0, k) + `"sourceUrl": "${novo.sourceUrl}"` + a.slice(l + 1);
    }
  }
}
fs.writeFileSync(ap, a);
console.log(`\naplicado em ${trocas.size} matérias (mockData.js + publishedArchive.js)`);
