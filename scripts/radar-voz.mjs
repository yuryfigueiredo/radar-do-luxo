#!/usr/bin/env node
/**
 * radar-voz.mjs — imprime o briefing de quem assina a matéria.
 *
 * A personalidade não é inventada aqui nem na conversa: é lida de `AUTHORS`
 * (mockData.js), do manual de diretrizes e do classificador que o acervo já usa.
 * Rodar isto antes de escrever é o que faz a matéria sair com a voz do editor
 * em vez de sair com voz de robô.
 *
 *   node scripts/radar-voz.mjs gabriel-fontes
 *   node scripts/radar-voz.mjs --pauta="RM Sotheby's arremata Ferrari 250 GTO por US$ 51,7 milhões"
 *   node scripts/radar-voz.mjs --lista
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { ARTICLES, AUTHORS } = await import(path.join(RAIZ, 'src/data/mockData.js'));
const { BANNED_CLICHES, HOMOLOGATED_IMAGES, analyzeEditorialContext } = await import(path.join(RAIZ, 'src/services/aiArticleGenerator.js'));

const arg = process.argv.slice(2);
if (arg.includes('--lista')) {
  for (const [slug, a] of Object.entries(AUTHORS)) {
    const noAr = ARTICLES.filter((x) => x.authorSlug === slug).length;
    console.log(`${slug} · ${a.name} · ${a.role} · ${noAr} matéria(s) no acervo`);
  }
  process.exit(0);
}

let slug = arg.find((x) => !x.startsWith('--'));
const pautaIx = arg.findIndex((x) => x.startsWith('--pauta='));
if (pautaIx >= 0 && !slug) {
  const pauta = arg[pautaIx].slice(8);
  const contexto = analyzeEditorialContext(pauta);
  slug = contexto.authorSlug;
  console.log(`pauta classificada: vertical=${contexto.categorySlug || contexto.category} autor=${slug} (analyzeEditorialContext)`);
}
const a = AUTHORS[slug || ''];
if (!a) {
  console.error(`autor desconhecido: "${slug || '(vazio)'}" — opções: ${Object.keys(AUTHORS).join(', ')}`);
  process.exit(2);
}

const diretrizes = fs.readFileSync(path.join(RAIZ, 'DIRETRIZES_EDITORIAIS.md'), 'utf8');
const secao = (titulo) => {
  const i = diretrizes.indexOf(titulo);
  if (i < 0) return '';
  return diretrizes.slice(i, diretrizes.indexOf('\n## ', i + 10) > 0 ? diretrizes.indexOf('\n## ', i + 10) : i + 1400).trim();
};

console.log(`\n═══ ${a.name} — ${a.role} ═══`);
console.log(`\nVOZ (voiceManifesto):\n  ${a.voiceManifesto}`);
console.log(`\nFILOSOFIA:\n  ${a.philosophy}`);
console.log(`\nTESES ASSINADAS:`);
(a.essentialTheses || []).forEach((t) => console.log(`  · ${t}`));
console.log(`\nSABER FAZER (o que este editor sabe medir/afirmar):`);
(a.knowHow || []).forEach((t) => console.log(`  · ${t}`));
console.log(`\nESPECIALIDADES: ${(a.specialties || []).join(' · ')}`);
console.log(`\nTERMOS VETADOS DESTE EDITOR: ${(a.forbiddenTerms || []).join(', ')}`);
console.log(`CLICHÊS DE IA VETADOS (lista do acervo, ${BANNED_CLICHES.length}): ${BANNED_CLICHES.slice(0, 12).join(', ')} …`);
console.log(`\nBANCO DE IMAGENS HOMOLOGADAS por vertical (só quando a fonte não dá foto):`);
for (const [v, urls] of Object.entries(HOMOLOGATED_IMAGES)) console.log(`  ${v}: ${urls.length}`);
console.log(`\n${secao('## 2. A Fórmula Homologada')}`);
console.log(`\n${secao('## 5. A Ficha Técnica Homologada')}`);
console.log(`\n${secao('## 6. Fotografia')}`);
