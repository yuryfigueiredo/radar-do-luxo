/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — SCOUT & CURADORIA AUTÔNOMA DE NOVAS PAUTAS (PRÉ-POSTAGEM)
 * ==============================================================================
 * Rastreia as maiores publicações mundiais (Robb Report, Hodinkee, Monochrome,
 * leilões Sotheby's/Christie's, lançamentos de hipercarros e superiates),
 * audita contra duplicidades com o acervo existente e injeta novas pautas
 * frescas e qualificadas na Central de Pautas Quentes do Radar.
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchAllEliteFeeds } from '../src/services/rssCuratorService.js';
import { calculateEditorialScore } from '../src/services/rankingEngine.js';
import { ARTICLES } from '../src/data/mockData.js';
import { INITIAL_HOT_PAUTAS } from '../src/data/hotFeedsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function getPhotoId(url) {
  if (!url) return '';
  const m = url.match(/photo-[a-z0-9\-]+/i);
  return m ? m[0] : '';
}

function keywordsMatch(text1, text2) {
  if (!text1 || !text2) return false;
  const words1 = text1.toLowerCase().replace(/[^a-z0-9áéíóúãõâêîôûç]/g, ' ').split(/\s+/).filter(w => w.length >= 5);
  const words2 = text2.toLowerCase().replace(/[^a-z0-9áéíóúãõâêîôûç]/g, ' ').split(/\s+/).filter(w => w.length >= 5);
  const common = words1.filter(w => words2.includes(w));
  return common.length >= 2;
}

function decodeHtml(html) {
  if (!html) return '';
  return html
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

const NEGATIVE_TERMS = [
  'soccer', 'football', 'basketball', 'baseball', 'softball', 'volleyball',
  'high school', 'wrap:', 'scores:', 'game wrap', 'podcast', 'concert',
  'birthday party', 'arrested', 'crash', 'police', 'shooting', 'recipe'
];

function generatePortugueseHook(rawTitle, category) {
  let clean = decodeHtml(rawTitle).replace(/\s*-\s*[A-Za-z0-9\s.]+$/, '').trim();

  clean = clean
    .replace(/^exclusive:\s*/i, 'Exclusivo: ')
    .replace(/^introducing\s*[-–:]*\s*/i, 'Apresentação: ')
    .replace(/^first look:\s*/i, 'Primeiro Olhar: ')
    .replace(/^first drive:\s*/i, 'Teste de Pista: ')
    .replace(/^in-depth:\s*/i, 'Análise de Alta Relojoaria: ')
    .replace(/^hands-on:\s*/i, 'Ao Vivo no Pulso: ')
    .replace(/^auctions:\s*/i, 'Grande Leilão: ')
    .replace(/\bheads to auction\b/gi, 'Vai a Leilão Histórico')
    .replace(/\bunveils\b/gi, 'Revela')
    .replace(/\breveals\b/gi, 'Apresenta')
    .replace(/\bworth over\b/gi, 'Avaliado em Mais de')
    .replace(/\bsuperyacht\b/gi, 'Superiate')
    .replace(/\bmegayacht\b/gi, 'Megaiate')
    .replace(/\bhypercar\b/gi, 'Hipercarro')
    .replace(/\bsupercar\b/gi, 'Superesportivo')
    .replace(/\bmansion\b/gi, 'Mansão')
    .replace(/\bpenthouse\b/gi, 'Cobertura');

  return clean;
}

const BADGE_COLORS = {
  supercarros: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  relogios: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  arquitetura: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
  destinos: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  estilo: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
};

export async function runScoutAndCurate() {
  console.log('💎 ==============================================================================');
  console.log('💎 RADAR DO LUXO — SCOUT GLOBAL & CURADORIA DE PRÉ-POSTAGEM');
  console.log('💎 ==============================================================================');
  console.log('⏰ Horário UTC:', new Date().toISOString());

  const existingPhotoIds = new Set(ARTICLES.map(a => getPhotoId(a.image)).filter(Boolean));
  const existingTitles = ARTICLES.map(a => (a.title || '').toLowerCase());
  const existingSlugs = ARTICLES.map(a => (a.slug || '').toLowerCase());

  console.log('🌐 [Scout] Rastreando feeds internacionais ao vivo (Robb Report, Hodinkee, Monochrome, Google News)...');
  const feedItems = await fetchAllEliteFeeds();
  console.log(`📊 [Scout] Itens brutos capturados na rede mundial: ${feedItems.length}`);

  const candidatesByCategory = {
    supercarros: [],
    relogios: [],
    destinos: [],
    arquitetura: [],
    estilo: []
  };

  const seenTitles = new Set();

  for (const item of feedItems) {
    const rawTitle = decodeHtml((item.originalTitle || '').trim());
    if (!rawTitle || rawTitle.length < 15) continue;

    const lower = rawTitle.toLowerCase();

    // Filtro de termos negativos (esportes colegiais, notícias locais irrelevantes)
    if (NEGATIVE_TERMS.some(neg => lower.includes(neg))) {
      continue;
    }

    const normalizedKey = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seenTitles.has(normalizedKey)) continue;
    seenTitles.add(normalizedKey);

    // Auditoria Anti-Duplicidade contra o site
    const photoId = getPhotoId(item.image);
    const hasPhoto = photoId && existingPhotoIds.has(photoId);
    const hasTopic = existingTitles.some(t => keywordsMatch(rawTitle, t)) || existingSlugs.some(s => keywordsMatch(rawTitle, s));

    if (hasPhoto || hasTopic) {
      continue;
    }

    const scoreData = calculateEditorialScore({
      title: rawTitle,
      summary: item.summary,
      specs: item.specs || {}
    });

    if (scoreData.totalScore >= 82) {
      const hook = generatePortugueseHook(rawTitle, item.categorySlug);
      const catSlug = item.categorySlug || 'supercarros';

      const candidate = {
        id: `pauta-live-${catSlug}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
        source: item.source || 'Scout Internacional',
        sourceCategory: item.category,
        badgeColor: BADGE_COLORS[catSlug] || 'border-lux-gold/40 text-lux-gold bg-lux-gold/10',
        category: item.category,
        categorySlug: catSlug,
        authorSlug: item.authorSlug,
        rankingScore: scoreData.totalScore,
        rankingTier: scoreData.tier,
        originalTitle: rawTitle,
        suggestedHook: hook,
        summary: item.summary || 'Tema internacional de alta relevância selecionado para pré-postagem.',
        sourceUrl: item.sourceUrl,
        publishedTime: 'Detectado ao vivo nas últimas 24h',
        createdAt: new Date().toISOString(),
        validityHours: 24,
        specsPreview: {
          fonte: item.source,
          curadoria: 'Protocolo Scout 24h',
          tier: scoreData.tier
        },
        suggestedImage: item.image,
        status: 'available'
      };

      if (!candidatesByCategory[catSlug]) candidatesByCategory[catSlug] = [];
      candidatesByCategory[catSlug].push(candidate);
    }
  }

  // Ordena cada categoria por score
  Object.keys(candidatesByCategory).forEach(cat => {
    candidatesByCategory[cat].sort((a, b) => b.rankingScore - a.rankingScore);
  });

  // Seleção equilibrada: pega os melhores de cada vertical editorial
  const balancedSelection = [];
  const quotaPerCat = {
    supercarros: 4,
    relogios: 4,
    destinos: 4,
    arquitetura: 4,
    estilo: 2
  };

  Object.entries(quotaPerCat).forEach(([cat, count]) => {
    const list = candidatesByCategory[cat] || [];
    balancedSelection.push(...list.slice(0, count));
  });

  // Ordena a seleção final por rankingScore decrescente
  balancedSelection.sort((a, b) => b.rankingScore - a.rankingScore);

  console.log(`\n🎯 [Scout] Pautas equilibradas e qualificadas para pré-postagem: ${balancedSelection.length}`);
  balancedSelection.forEach((p, idx) => {
    console.log(`   ${idx + 1}. [Score: ${p.rankingScore} | ${p.category}] ${p.suggestedHook.slice(0, 70)}...`);
  });

  if (balancedSelection.length > 0) {
    // Mescla mantendo as novas no topo e as originais em seguida
    const combinedPautas = [...balancedSelection, ...INITIAL_HOT_PAUTAS];
    
    // Deduplica lista combinada por título
    const finalUniquePautas = [];
    const pautaKeys = new Set();
    for (const p of combinedPautas) {
      const key = (p.suggestedHook || p.originalTitle || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!pautaKeys.has(key)) {
        pautaKeys.add(key);
        finalUniquePautas.push(p);
      }
    }

    const hotFeedsPath = path.join(rootDir, 'src', 'data', 'hotFeedsData.js');
    let fileContent = fs.readFileSync(hotFeedsPath, 'utf8');

    const startMarker = 'export const INITIAL_HOT_PAUTAS = [';
    const endMarker = 'const LOCAL_STORAGE_HOT_PAUTAS_KEY =';

    const startIdx = fileContent.indexOf(startMarker);
    const endIdx = fileContent.indexOf(endMarker);

    if (startIdx !== -1 && endIdx !== -1) {
      const before = fileContent.slice(0, startIdx);
      const after = fileContent.slice(endIdx);
      const newArrayCode = 'export const INITIAL_HOT_PAUTAS = ' + JSON.stringify(finalUniquePautas, null, 2) + ';\n\n';
      fs.writeFileSync(hotFeedsPath, before + newArrayCode + after, 'utf8');
      console.log(`\n✅ [hotFeedsData.js] Atualizado no disco com sucesso! Total de pautas no banco: ${finalUniquePautas.length}.`);
    } else {
      console.warn('⚠️ Não foi possível localizar os marcadores em hotFeedsData.js.');
    }
  }

  return balancedSelection;
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('curateHotFeeds.js')) {
  runScoutAndCurate().catch(err => {
    console.error('❌ Erro no ciclo de curadoria:', err);
    process.exit(1);
  });
}
