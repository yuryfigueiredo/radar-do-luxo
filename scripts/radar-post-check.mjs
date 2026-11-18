#!/usr/bin/env node
/**
 * radar-post-check.mjs — a conferência de uma rodada antes do commit.
 *
 * Existe porque a capa ficou parada 27h e porque a matéria pode sair com foto de
 * banco quebrada, clichê de IA ou ficha técnica de três campos. Nada aqui decide
 * editorial: cada porta chama a MESMA função que o acervo já usa, para a régua não
 * ter duas versões.
 *
 *   node scripts/radar-post-check.mjs            # confere o item novo da árvore
 *   node scripts/radar-post-check.mjs --slug=X   # confere um slug declarado
 *   node scripts/radar-post-check.mjs --sem-rede # pula a medição HTTP da imagem
 *
 * saída: uma linha por porta, VERDE ou VERMELHO; exit 0 só com todas verdes.
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const slugArg = (argv.find((a) => a.startsWith('--slug=')) || '').slice(7);
const semRede = argv.includes('--sem-rede');

const { ARTICLES, AUTHORS } = await import(path.join(RAIZ, 'src/data/mockData.js'));
const { PUBLISHED_ARCHIVE } = await import(path.join(RAIZ, 'src/data/publishedArchive.js'));
const { BANNED_CLICHES, HOMOLOGATED_IMAGES } = await import(path.join(RAIZ, 'src/services/aiArticleGenerator.js'));
const { checkArticleDuplicate } = await import(path.join(RAIZ, 'src/services/radarService.js'));
const { resolveCoverImage } = await import(path.join(RAIZ, 'scripts/coverImageAudit.js'));

const falhas = [];
const porta = (nome, ok, motivo) => {
  console.log(`${ok ? 'VERDE' : 'VERMELHO'}  [${nome}] ${motivo}`);
  if (!ok) falhas.push(`${nome}: ${motivo}`);
  return ok;
};

// ── o item novo: o que está na árvore e não está em origin/main ────────────────
const base = execFileSync('git', ['-C', RAIZ, 'show', 'origin/main:src/data/mockData.js'], { encoding: 'utf8' });
const slugsBase = new Set([...base.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]));
const novos = ARTICLES.filter((a) => !slugsBase.has(a.slug));

const umNovo = slugArg ? novos.filter((a) => a.slug === slugArg) : novos;
if (!porta('novo', umNovo.length === 1, `itens novos nesta árvore: ${umNovo.length}${novos.length !== umNovo.length ? ` (declarados: ${novos.map((n) => n.slug).join(', ')})` : ''}`)) {
  process.exit(1);
}
const item = umNovo[0];
const autor = AUTHORS[item.authorSlug] || {};
const texto = [item.title, item.excerpt, ...(item.contentParagraphs || [])].join(' ');

// ── estrutura ──────────────────────────────────────────────────────────────────
const OBRIGATORIOS = ['id', 'slug', 'title', 'category', 'categorySlug', 'authorSlug', 'type', 'badge',
  'date', 'readTime', 'image', 'imageFocus', 'excerpt', 'contentParagraphs', 'specs', 'publishedAt', 'sourceUrl'];
const faltando = OBRIGATORIOS.filter((k) => item[k] === undefined || item[k] === '' || item[k] === null);
porta('campos', faltando.length === 0, faltando.length ? `faltam ${faltando.join(', ')}` : `${OBRIGATORIOS.length} campos presentes`);

const idRepetido = ARTICLES.filter((a) => a.id === item.id).length;
const slugRepetido = ARTICLES.filter((a) => a.slug === item.slug).length;
porta('unico', idRepetido === 1 && slugRepetido === 1, `slug x${slugRepetido}, id x${idRepetido} no acervo de ${ARTICLES.length}`);

const dup = checkArticleDuplicate(item, ARTICLES.filter((a) => a.slug !== item.slug));
porta('duplicata', !dup.isDuplicate, dup.isDuplicate ? `${dup.severity}: ${dup.reason}` : 'nenhum título/foto do acervo colide');

porta('fonte', /^https?:\/\//.test(String(item.sourceUrl || '')), `sourceUrl=${String(item.sourceUrl).slice(0, 70) || 'vazia'}`);

// ── a régua escrita em DIRETRIZES_EDITORIAIS.md ────────────────────────────────
porta('hook', item.title.includes(':') && /\d/.test(item.title), `título com dois-pontos e número extremo: "${item.title.slice(0, 60)}..."`);

const chaoCliche = [...BANNED_CLICHES, ...(autor.forbiddenTerms || [])].filter((c) => new RegExp(`\\b${c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(texto));
porta('cliche', chaoCliche.length === 0, chaoCliche.length ? `achados no texto: ${chaoCliche.slice(0, 5).join(', ')}` : `${BANNED_CLICHES.length} clichês + ${(autor.forbiddenTerms || []).length} termos do autor ausentes`);

const paragrafos = item.contentParagraphs || [];
const chars = paragrafos.join('').length;
porta('texto', paragrafos.length >= 4 && chars >= 1200, `${paragrafos.length} parágrafos, ${chars} caracteres`);

const ficha = Object.entries(item.specs || {}).filter(([, v]) => String(v).trim().length > 3);
porta('ficha', ficha.length >= 4 && ficha.length <= 6, `${ficha.length} campos homologados (exigido 4 a 6)`);

// ── data ───────────────────────────────────────────────────────────────────────
// Duas bordas, não uma distância: publishedAt no futuro entra no ar como "daqui a
// pouco" e desordena a capa, que é a ordem de publicação. Dois minutos de tolerância
// é o desvio de relógio entre esta máquina e o instante gravado.
const idade = Date.now() - new Date(item.publishedAt).getTime();
porta('data', Number.isFinite(idade) && idade > -120_000 && idade < 3 * 3_600_000 && /\b(de|em|de)\b/.test(item.date),
  `publishedAt=${item.publishedAt} (idade ${(idade / 60000).toFixed(0)}min) · date="${item.date}"`);

// ── fotografia: 21:9/16:10 deitada, larga, alcançável ──────────────────────────
let imgVeredito = 'medição de rede pulada (--sem-rede)';
let imgOk = true;
if (!semRede) {
  const banco = HOMOLOGATED_IMAGES[item.categorySlug] || [];
  const audit = await resolveCoverImage(item.image, banco);
  imgOk = Boolean(audit.medida) && audit.origin !== 'banco';
  imgVeredito = `${audit.origin} · ${audit.note} · banco da vertical tem ${banco.length}`;
}
porta('imagem', imgOk, imgVeredito);

// ── janela: o acervo que o dedupe vê tem de caber nos 25 que o site serve ──────
// A poda existia só no crawler de nuvem, agora inerte. Sem ela, a matéria escrita
// pelo agente no 26º lugar sai do ARTICLES mas continua no publishedArchive — e o
// dedupe passa a comparar título contra uma lista que não é mais a lista publicada.
// O número é lido de onde mora, para esta régua não ter duas versões.
const fonteRegua = fs.readFileSync(path.join(RAIZ, 'scripts/autonomousCrawler.js'), 'utf8');
const MAX_ITENS = Number((fonteRegua.match(/MAX_ARTICLES',\s*(\d+)/) || [])[1] || 25);
porta('janela', ARTICLES.length <= MAX_ITENS, `${ARTICLES.length} itens em ARTICLES (máximo ${MAX_ITENS}, lido de autonomousCrawler.js) — o mais antigo sai da janela, não do publishedArchive`);

// ── capa = ordem de publicação (regra do dono, abolida a nota mínima) ──────────
const herois = ARTICLES.filter((a) => a.isHero || a.is_hero);
porta('capa', herois.length === 1 && herois[0].slug === item.slug,
  `heróis no acervo: ${herois.length} (${herois.map((h) => h.slug.slice(0, 28)).join(', ') || 'nenhum'}) · esperado: só o item novo`);

porta('memoria', (PUBLISHED_ARCHIVE || []).some((r) => (r.slug || r) === item.slug),
  `publishedArchive com ${(PUBLISHED_ARCHIVE || []).length} registros`);

if (falhas.length) {
  console.log(`\nVERMELHO: ${falhas.length} porta(s) fechada(s) — nada é commitado.`);
  process.exit(1);
}
console.log('\nVERDE: matéria conferida, pode commitar.');
