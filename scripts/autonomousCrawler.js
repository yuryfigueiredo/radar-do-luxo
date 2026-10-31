/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — ROBÔ EDITORIAL AUTÔNOMO & PUBLICADOR POR COMANDO
 * ==============================================================================
 * Executa sob demanda via comando CLI ou agendamento cron (GitHub Actions):
 *   npm run publish:now   OU   npm run crawl
 *
 * 1. Consome o acervo curado (INITIAL_HOT_PAUTAS) produzido pelo Scout.
 * 2. Monta um POOL de candidatas inéditas, com memória editorial permanente
 *    (publishedArchive.js) + acervo local + Supabase, e deduplicação semântica.
 * 3. Tenta primeiro a fila de regeneração (limitada), depois até N candidatas
 *    frescas, publicando a primeira que passar em todas as auditorias.
 * 4. Marca a pauta como published/duplicate/expired no hotFeedsData.js, para
 *    que o mesmo item bloqueado não seja reavaliado para sempre.
 * 5. Grava no Supabase (se configurado) e no acervo local (mockData.js),
 *    com bumper de versão para atualização imediata do navegador.
 *
 * MODOS DE OPERAÇÃO:
 *   node scripts/autonomousCrawler.js --dry-run   → apenas diagnóstico, não
 *   chama Gemini e não grava arquivos.
 *
 * VARIÁVEIS DE AMBIENTE (opcionais):
 *   MAX_ARTICLES=25                  itens mantidos em mockData.js
 *   MAX_CANDIDATES=4                 candidatas frescas avaliadas por ciclo
 *   MAX_QUEUE_ITEMS=2                itens da fila de retry tentados por ciclo
 *   MAX_RETRY_ATTEMPTS=3             tentativas antes de descartar item da fila
 *   PAUTA_MAX_AGE_HOURS=24           validade de pautas ao vivo (pauta-live-*)
 *   MIN_PUBLICATION_INTERVAL_HOURS=0 intervalo mínimo entre publicações
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { generateLuxuryArticle, HOMOLOGATED_IMAGES } from '../src/services/aiArticleGenerator.js';
import { FALLBACK_CATEGORY_IMAGES } from '../src/services/rssCuratorService.js';
import { INITIAL_HOT_PAUTAS } from '../src/data/hotFeedsData.js';
import { PUBLISHED_ARCHIVE } from '../src/data/publishedArchive.js';
import { calculateEditorialScore, calculateCapaWeight } from '../src/services/rankingEngine.js';
import { ARTICLES } from '../src/data/mockData.js';
import { getPhotoId, sameStory, storyKey, slugify } from '../src/services/editorialDedupe.js';
import { getFilmstripSelection, FILMSTRIP_LIMIT } from '../src/services/feedPolicy.js';
import { resolveCoverImage, auditGalleryImages } from './coverImageAudit.js';
import { findNegativeTerm } from '../src/services/editorialFilters.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const retryQueuePath = path.join(rootDir, 'src', 'data', 'editorialRetryQueue.js');
const hotPautasPath = path.join(rootDir, 'src', 'data', 'hotFeedsData.js');
const archivePath = path.join(rootDir, 'src', 'data', 'publishedArchive.js');
const mockDataPath = path.join(rootDir, 'src', 'data', 'mockData.js');
const radarServicePath = path.join(rootDir, 'src', 'services', 'radarService.js');

// Carrega .env manualmente se necessário
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  });
}

// Configurações de Ambiente
const GEMINI_API_KEY = (
  process.env.GEMINI_API_KEY || 
  process.env.VITE_GEMINI_API_KEY || 
  ''
).trim();

if (GEMINI_API_KEY && !process.env.VITE_GEMINI_API_KEY) {
  process.env.VITE_GEMINI_API_KEY = GEMINI_API_KEY;
}

let rawSupabaseUrl = (
  process.env.SUPABASE_URL || 
  process.env.VITE_SUPABASE_URL || 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 
  ''
).trim();

if (rawSupabaseUrl && !rawSupabaseUrl.startsWith('http://') && !rawSupabaseUrl.startsWith('https://')) {
  rawSupabaseUrl = `https://${rawSupabaseUrl}`;
}
if (rawSupabaseUrl.endsWith('/')) {
  rawSupabaseUrl = rawSupabaseUrl.slice(0, -1);
}
const SUPABASE_URL = rawSupabaseUrl;

const SUPABASE_KEY = (
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.SUPABASE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  ''
).trim();

// -----------------------------------------------------------------------------
// Parâmetros de operação
// -----------------------------------------------------------------------------
function envNumber(name, fallback) {
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const DRY_RUN = process.env.DRY_RUN === '1' || process.argv.includes('--dry-run');
const MAX_ARTICLES = envNumber('MAX_ARTICLES', 25);
const MAX_CANDIDATES = Math.max(1, envNumber('MAX_CANDIDATES', 4));
const MAX_QUEUE_ITEMS = Math.max(0, envNumber('MAX_QUEUE_ITEMS', 2));
const MAX_RETRY_ATTEMPTS = Math.max(1, envNumber('MAX_RETRY_ATTEMPTS', 3));
const PAUTA_MAX_AGE_HOURS = Math.max(1, envNumber('PAUTA_MAX_AGE_HOURS', 24));
const MIN_PUBLICATION_INTERVAL_HOURS = Math.max(0, envNumber('MIN_PUBLICATION_INTERVAL_HOURS', 0));

// Imagens de banco (genéricas) não identificam uma história: nunca bloqueiam publicação.
const GENERIC_PHOTO_IDS = new Set();
[FALLBACK_CATEGORY_IMAGES, HOMOLOGATED_IMAGES].forEach(source => {
  Object.values(source || {}).forEach(gallery => {
    (gallery || []).forEach(url => {
      const id = getPhotoId(url);
      if (id) GENERIC_PHOTO_IDS.add(id);
    });
  });
});

console.log('💎 ==============================================================================');
console.log('💎 RADAR DO LUXO — PUBLICADOR AUTÔNOMO DE ALTA PERFORMANCE EDITORIAL');
console.log('💎 ==============================================================================');
console.log('⏰ Horário UTC:', new Date().toISOString());
console.log('📡 Supabase:', SUPABASE_URL ? `Ativo (${SUPABASE_URL.substring(0, 24)}...)` : 'Modo Local Primário (mockData.js)');
console.log('🤖 Motor de Redação:', GEMINI_API_KEY ? 'Google Gemini Flash Ativo' : 'Sintetizador Semântico Homologado');
if (DRY_RUN) {
  console.log('🧪 MODO DRY-RUN: nenhuma chamada ao Gemini e nenhuma gravação em disco.');
}
console.log(`⚙️  Parâmetros: MAX_ARTICLES=${MAX_ARTICLES} · MAX_CANDIDATES=${MAX_CANDIDATES} · MAX_QUEUE_ITEMS=${MAX_QUEUE_ITEMS} · PAUTA_MAX_AGE_HOURS=${PAUTA_MAX_AGE_HOURS} · MIN_INTERVAL_HOURS=${MIN_PUBLICATION_INTERVAL_HOURS}`);

// -----------------------------------------------------------------------------
// Utilidades
// -----------------------------------------------------------------------------
function parseDateMs(value) {
  if (!value) return 0;
  if (value instanceof Date) return value.getTime();
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getPautaKey(pauta) {
  return (pauta && (pauta.pautaId || pauta.id)) || null;
}

function isLivePauta(pauta) {
  return Boolean(pauta && String(pauta.id || '').startsWith('pauta-live-'));
}

function isPautaExpired(pauta) {
  if (!isLivePauta(pauta)) return false;
  const created = parseDateMs(pauta.createdAt);
  if (!created) return false; // sem data confiável, não expira por engano
  const maxAgeHours = Number(pauta.validityHours) > 0 ? Number(pauta.validityHours) : PAUTA_MAX_AGE_HOURS;
  return (Date.now() - created) / 3_600_000 > maxAgeHours;
}

function tierFor(score) {
  if (score >= 94) return 'S+';
  if (score >= 88) return 'A';
  return 'B';
}

function promptForCandidate(candidate) {
  return `${candidate.hook}\n\nContexto: ${candidate.summary || ''}\nFonte: ${candidate.sourceUrl || ''}`;
}

function announceNoPublication(reason) {
  const message = `Nenhuma matéria publicada neste ciclo: ${reason}`;
  console.log(`::warning::${message}`);
  console.log(`ℹ️ ${message}`);
}

// -----------------------------------------------------------------------------
// Fila de regeneração
// -----------------------------------------------------------------------------
function readRetryQueue() {
  if (!fs.existsSync(retryQueuePath)) return [];
  const content = fs.readFileSync(retryQueuePath, 'utf8');
  const match = content.match(/export const EDITORIAL_RETRY_QUEUE = (\[[\s\S]*\]);/);
  if (!match) {
    console.warn('⚠️ [Retry Queue] Arquivo sem marcador reconhecível; assumindo fila vazia.');
    return [];
  }
  try {
    const parsed = JSON.parse(match[1]);
    return Array.isArray(parsed) ? parsed.map(item => ({ ...item, pautaId: item.pautaId || item.id || null })) : [];
  } catch (err) {
    console.warn(`⚠️ [Retry Queue] JSON inválido (${err.message}); assumindo fila vazia.`);
    return [];
  }
}

function writeRetryQueue(queue) {
  if (DRY_RUN) return;
  fs.writeFileSync(
    retryQueuePath,
    `export const EDITORIAL_RETRY_QUEUE = ${JSON.stringify(queue, null, 2)};\n`,
    'utf8'
  );
}

function candidateFromQueueItem(item) {
  const promptInput = item.promptInput || '';
  const hook = item.hook || promptInput.split('\n')[0] || 'Pauta em regeneração';
  return {
    sourceType: 'Retry Queue',
    key: item.pautaId || null,
    hook,
    category: item.category || 'Supercarros',
    categorySlug: item.categorySlug || 'supercarros',
    authorSlug: item.authorSlug || 'henrique-vianna',
    summary: item.summary || '',
    image: item.image || '',
    specs: item.specs || {},
    sourceUrl: item.sourceUrl || '',
    score: Number(item.score) || 90,
    tier: tierFor(Number(item.score) || 90),
    promptInput,
    attempts: Number(item.attempts) || 1,
    pauta: null
  };
}

function enqueueForRegeneration(candidate, promptInput) {
  if (DRY_RUN) return;
  const key = candidate.key;
  if (!key) {
    console.warn('⚠️ [Retry Queue] Candidata sem identificador; não será enfileirada.');
    return;
  }

  const queue = readRetryQueue();
  const index = queue.findIndex(item => (item.pautaId || item.id) === key);
  const record = {
    pautaId: key,
    promptInput,
    hook: candidate.hook,
    summary: candidate.summary,
    score: candidate.score,
    authorSlug: candidate.authorSlug,
    category: candidate.category,
    categorySlug: candidate.categorySlug,
    sourceUrl: candidate.sourceUrl,
    image: candidate.image,
    specs: candidate.specs || {},
    lastAttemptAt: new Date().toISOString()
  };

  if (index >= 0) {
    queue[index] = {
      ...queue[index],
      ...record,
      attempts: (Number(queue[index].attempts) || 1) + 1
    };
  } else {
    queue.push({ ...record, queuedAt: new Date().toISOString(), attempts: 1 });
  }
  writeRetryQueue(queue);
  console.log(`🗂️  [Retry Queue] Pauta "${candidate.hook.slice(0, 50)}..." enfileirada para regeneração.`);
}

function registerQueueFailure(queueItem) {
  if (!queueItem) return;
  const queue = readRetryQueue();
  const key = queueItem.pautaId || queueItem.id;
  if (!key) return;
  const index = queue.findIndex(item => (item.pautaId || item.id) === key);
  if (index === -1) return;

  const attempts = (Number(queue[index].attempts) || 1) + 1;
  if (attempts >= MAX_RETRY_ATTEMPTS) {
    queue.splice(index, 1);
    console.warn(`⚠️ [Retry Queue] Pauta ${key} descartada após ${attempts} tentativas sem IA.`);
  } else {
    queue[index].attempts = attempts;
    queue[index].lastAttemptAt = new Date().toISOString();
    console.warn(`⚠️ [Retry Queue] Nova falha na pauta ${key} (tentativa ${attempts}/${MAX_RETRY_ATTEMPTS}).`);
  }
  writeRetryQueue(queue);
}

function removeFromRetryQueue(key) {
  if (!key) return;
  const queue = readRetryQueue();
  const filtered = queue.filter(item => (item.pautaId || item.id) !== key);
  if (filtered.length !== queue.length) {
    writeRetryQueue(filtered);
    console.log('✅ [Retry Queue] Item removido da fila.');
  }
}

// -----------------------------------------------------------------------------
// Memória editorial (arquivo permanente + acervo local + Supabase)
// -----------------------------------------------------------------------------
async function getExistingArticlesMetadata(supabaseClient) {
  const records = [];
  const seenSlugs = new Set();

  const addRecord = record => {
    const slug = String(record.slug || '').toLowerCase().trim();
    if (slug) {
      if (seenSlugs.has(slug)) return;
      seenSlugs.add(slug);
    }
    records.push({
      slug,
      title: String(record.title || '').trim(),
      image: record.image || '',
      sourceUrl: String(record.sourceUrl || '').trim(),
      categorySlug: record.categorySlug || '',
      publishedAt: parseDateMs(record.publishedAt)
    });
  };

  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('articles')
        .select('slug, title, image, category_slug, published_at')
        .order('published_at', { ascending: false })
        .limit(500);
      if (error) throw error;
      (data || []).forEach(row => addRecord({
        slug: row.slug,
        title: row.title,
        image: row.image,
        categorySlug: row.category_slug,
        publishedAt: row.published_at
      }));
    } catch (err) {
      console.warn(`⚠️ [Memória] Supabase indisponível para leitura (${err.message}). Usando arquivo + acervo local.`);
    }
  }

  PUBLISHED_ARCHIVE.forEach(addRecord);
  ARTICLES.forEach(article => addRecord({
    ...article,
    publishedAt: article.publishedAt || article.published_at
  }));

  records.sort((a, b) => b.publishedAt - a.publishedAt);

  const existingSlugs = new Set(records.map(r => r.slug).filter(Boolean));
  const existingTitles = records.map(r => r.title).filter(Boolean);
  const existingSourceUrls = new Set(records.map(r => r.sourceUrl).filter(Boolean));
  const photoLastUsed = new Map();
  records.forEach(r => {
    const id = getPhotoId(r.image);
    if (id) photoLastUsed.set(id, Math.max(photoLastUsed.get(id) || 0, r.publishedAt || 0));
  });
  const usedPhotoIds = new Set(photoLastUsed.keys());
  const recentCategories = records.filter(r => r.categorySlug).slice(0, 5).map(r => r.categorySlug);
  const latestPublishedAt = records.reduce((max, r) => Math.max(max, r.publishedAt), 0);

  console.log(`🧠 [Memória] ${records.length} matérias conhecidas (${PUBLISHED_ARCHIVE.length} no arquivo permanente, ${ARTICLES.length} no acervo local).`);
  return { existingSlugs, existingTitles, existingSourceUrls, usedPhotoIds, photoLastUsed, recentCategories, latestPublishedAt };
}

function getDuplicateReason(pauta, meta) {
  const hook = (pauta.suggestedHook || pauta.originalTitle || '').trim();
  const original = (pauta.originalTitle || hook).trim();
  if (!hook) return 'pauta sem título';

  const candidateUrl = (pauta.sourceUrl || '').trim();
  if (candidateUrl && meta.existingSourceUrls.has(candidateUrl)) {
    return 'URL de origem já publicada';
  }

  const candidateSlug = slugify(hook);
  if (candidateSlug && meta.existingSlugs.has(candidateSlug)) {
    return `slug já publicado (${candidateSlug})`;
  }

  const titleHit = meta.existingTitles.find(title => sameStory(hook, title) || sameStory(original, title));
  if (titleHit) {
    return `tema já publicado ("${titleHit.slice(0, 60)}...")`;
  }

  return null;
}

/**
 * Monta o pool de candidatas frescas, com deduplicação semântica e diversidade.
 */
function buildCandidatePool(meta) {
  const candidates = [];
  const duplicateKeys = [];
  const expiredKeys = [];
  const rejectedKeys = [];
  const internalStories = [];

  console.log('\n📚 [Pool] Analisando pautas curadas de alto prestígio...');

  for (const pauta of INITIAL_HOT_PAUTAS) {
    if (!pauta || !pauta.id) continue;
    if (pauta.status && pauta.status !== 'available') continue;

    if (isPautaExpired(pauta)) {
      expiredKeys.push(pauta.id);
      continue;
    }

    const hook = (pauta.suggestedHook || pauta.originalTitle || '').trim();
    if (!hook) {
      duplicateKeys.push(pauta.id);
      continue;
    }

    // Defesa em profundidade: o Publicador repete o crivo negativo do Scout.
    // Se o Scout falhar ou o acervo tiver resíduos antigos, nada impróprio passa.
    const negativeHit = findNegativeTerm(`${hook} ${pauta.originalTitle || ''}`);
    if (negativeHit) {
      console.log(`🚫 [Pool] Descartada por termo negativo ("${negativeHit}"): ${hook.slice(0, 70)}...`);
      rejectedKeys.push(pauta.id);
      continue;
    }

    const duplicateReason = getDuplicateReason(pauta, meta);
    if (duplicateReason) {
      duplicateKeys.push(pauta.id);
      continue;
    }

    const story = storyKey(hook) || hook.toLowerCase();
    if (internalStories.some(existing => sameStory(existing, hook) || storyKey(existing) === story)) {
      duplicateKeys.push(pauta.id);
      continue;
    }
    internalStories.push(hook);

    const baseScore = Number(pauta.rankingScore) || calculateEditorialScore({
      title: hook,
      specs: pauta.specsPreview || {},
      summary: pauta.summary
    }).totalScore;

    // Diversidade: valoriza categoria que não ocupou as duas últimas publicações
    const score = baseScore + (meta.recentCategories.slice(0, 2).includes(pauta.categorySlug) ? 0 : 3);

    candidates.push({
      sourceType: 'Curated Hot Feed',
      key: pauta.id,
      hook,
      category: pauta.category || 'Supercarros',
      categorySlug: pauta.categorySlug || 'supercarros',
      authorSlug: pauta.authorSlug || 'henrique-vianna',
      summary: pauta.summary || '',
      image: pauta.suggestedImage || '',
      specs: pauta.specsPreview || {},
      sourceUrl: pauta.sourceUrl || '',
      score,
      tier: tierFor(score),
      promptInput: '',
      attempts: 0,
      pauta
    });
  }

  candidates.sort((a, b) => b.score - a.score);

  console.log(`📊 [Pool] ${candidates.length} elegíveis · ${duplicateKeys.length} bloqueadas por duplicidade · ${rejectedKeys.length} fora do padrão · ${expiredKeys.length} expiradas.`);

  if (candidates.length) {
    console.log('\n📊 [LEADERBOARD EDITORIAL] Top 4 Pautas Qualificadas no Radar:');
    candidates.slice(0, 4).forEach((c, idx) => {
      console.log(`   ${idx + 1}. [Score: ${c.score} pts | Tier ${c.tier}] ${c.hook.slice(0, 55)}... (${c.authorSlug})`);
    });
  }

  return { candidates, duplicateKeys, expiredKeys, rejectedKeys };
}

// -----------------------------------------------------------------------------
// Auditoria pós-redação
// -----------------------------------------------------------------------------
function findPublicationConflict(articleData, candidate, meta) {
  const title = String(articleData.title || '').trim();
  if (!title) return 'matéria sem título';

  const url = (candidate.sourceUrl || '').trim();
  if (url && meta.existingSourceUrls.has(url)) {
    return 'URL de origem já publicada';
  }

  const currentHero = ARTICLES.find(a => a.isHero || a.is_hero);
  if (currentHero && sameStory(title, currentHero.title)) {
    return `conflito temático com a Capa vigente ("${currentHero.title.slice(0, 60)}...")`;
  }

  const titleHit = meta.existingTitles.find(existing => sameStory(title, existing));
  if (titleHit) {
    return `tema já publicado ("${titleHit.slice(0, 60)}...")`;
  }

  const candidatePhotoId = getPhotoId(candidate.image || articleData.image);
  if (candidatePhotoId && !GENERIC_PHOTO_IDS.has(candidatePhotoId) && meta.usedPhotoIds.has(candidatePhotoId)) {
    return 'imagem de origem já utilizada em outra matéria';
  }

  return null;
}

// Última recurso quando nem o feed nem o banco entregam uma capa auditável
// (rede fora, limite de requisição estourado). É arquivo do próprio repositório,
// 1600x1066, verificado no build — nunca um banner de feed que a auditoria acabou
// de reprovar, que é como a capa 600x237 voltava para o hero.
const REPO_FALLBACK_COVER = '/images/a-lange-datograph-honeygold-lumen.jpg';

async function pickArticleImage(candidate, meta) {
  const source = String(candidate.image || '').trim();
  const sourceId = getPhotoId(source);
  const sourceIsFresh = source && (sourceId
    ? !GENERIC_PHOTO_IDS.has(sourceId) && !meta.usedPhotoIds.has(sourceId)
    : true);

  if (sourceIsFresh) {
    const audit = await resolveCoverImage(source, []);
    if (audit.origin === 'origem' || audit.origin === 'local') {
      console.log(`🖼️ [Capa] ${audit.note}.`);
      if (sourceId) meta.usedPhotoIds.add(sourceId);
      return audit.url.replace('fit=crop', 'fit=max');
    }
    console.warn(`🖼️ [Capa] ${audit.note}. Substituindo pelo banco da categoria.`);
  }

  const gallery = [...new Set([
    ...(HOMOLOGATED_IMAGES[candidate.categorySlug] || []),
    ...(FALLBACK_CATEGORY_IMAGES[candidate.categorySlug] || [])
  ])];
  if (!gallery.length) {
    console.warn('🖼️ [Capa] Banco da categoria vazio; usando o asset do repositório.');
    return REPO_FALLBACK_COVER;
  }

  // Ordena o banco pela foto usada há mais tempo (distribui melhor o acervo) e
  // com as já em uso no fim da fila: se a matéria herda uma capa repetida, o
  // dedupe do site derruba uma das duas publicações em silêncio. Aqui o banco é
  // escolhido de propósito, então a isenção de "imagem genérica" (que só serve
  // para não bloquear publicação) não se aplica.
  const isTaken = (url) => {
    const id = getPhotoId(url);
    return Boolean(id) && meta.usedPhotoIds.has(id);
  };
  const ordered = gallery.sort((a, b) => {
    if (isTaken(a) !== isTaken(b)) return isTaken(a) ? 1 : -1;
    const usedA = meta.photoLastUsed.get(getPhotoId(a)) || 0;
    const usedB = meta.photoLastUsed.get(getPhotoId(b)) || 0;
    return usedA - usedB;
  });

  const audit = await auditGalleryImages(ordered);
  console.log(`🖼️ [Capa] ${audit.note}.`);
  if (audit.url) {
    const chosenId = getPhotoId(audit.url);
    if (chosenId) meta.usedPhotoIds.add(chosenId);
    return audit.url.replace('fit=crop', 'fit=max');
  }
  // Banco reprovado quase sempre quer dizer rede indisponível no executor, e não
  // banco ruim. Devolver a capa do feed seria publicar exatamente o banner que a
  // auditoria acabou de reprovar (600x237 esticado no hero). Na falta de capa
  // auditável preferimos a foto homologada livre do próprio banco, que é curada e
  // do tamanho de capa, e só então o asset do repositório.
  const lastResort = ordered.find(url => !isTaken(url));
  const chosen = lastResort || REPO_FALLBACK_COVER;
  console.warn(`🖼️ [Capa] Sem capa auditável na rede; publicando com ${lastResort ? 'foto homologada livre (sem medir)' : 'asset do repositório'}.`);
  const chosenId = getPhotoId(chosen);
  if (chosenId) meta.usedPhotoIds.add(chosenId);
  return chosen.replace('fit=crop', 'fit=max');
}

// -----------------------------------------------------------------------------
// Escrita de estado (pautas e arquivo permanente)
// -----------------------------------------------------------------------------
function readHotPautasArray(content) {
  const start = content.indexOf('export const INITIAL_HOT_PAUTAS = [');
  if (start === -1) return null;
  const arrayStart = content.indexOf('[', start);
  const endMarker = content.indexOf('const LOCAL_STORAGE_HOT_PAUTAS_KEY', start);
  const end = endMarker === -1 ? content.length : endMarker;
  const arrayEnd = content.lastIndexOf(']', end);
  if (arrayStart === -1 || arrayEnd === -1) return null;
  return {
    arrayStart,
    arrayEnd: arrayEnd + 1,
    list: JSON.parse(content.slice(arrayStart, arrayEnd + 1))
  };
}

function flushStatusUpdates(statusUpdates) {
  if (DRY_RUN || !statusUpdates || statusUpdates.size === 0) return;
  if (!fs.existsSync(hotPautasPath)) return;

  const content = fs.readFileSync(hotPautasPath, 'utf8');
  const parsed = readHotPautasArray(content);
  if (!parsed) {
    console.warn('⚠️ [hotFeedsData] Marcador INITIAL_HOT_PAUTAS não encontrado; status não gravado.');
    return;
  }

  let changed = 0;
  parsed.list.forEach(pauta => {
    const nextStatus = statusUpdates.get(pauta.id);
    if (nextStatus && pauta.status !== nextStatus) {
      pauta.status = nextStatus;
      changed += 1;
    }
  });

  if (!changed) return;
  const updated = `${content.slice(0, parsed.arrayStart)}${JSON.stringify(parsed.list, null, 2)}${content.slice(parsed.arrayEnd)}`;
  fs.writeFileSync(hotPautasPath, updated, 'utf8');
  console.log(`✅ [hotFeedsData] ${changed} pauta(s) marcada(s) com novo status.`);
}

function appendToPublishedArchive(article) {
  if (DRY_RUN) return;
  const entry = {
    id: article.id,
    slug: article.slug,
    title: article.title,
    image: article.image,
    sourceUrl: article.sourceUrl || '',
    categorySlug: article.categorySlug,
    authorSlug: article.authorSlug,
    publishedAt: article.publishedAt
  };

  try {
    const content = fs.readFileSync(archivePath, 'utf8');
    const match = content.match(/export const PUBLISHED_ARCHIVE = (\[[\s\S]*\]);/);
    if (!match) {
      console.warn('⚠️ [Arquivo Editorial] Marcador PUBLISHED_ARCHIVE não encontrado; registro não gravado.');
      return;
    }
    const list = JSON.parse(match[1]);
    if (!list.some(item => item.slug === entry.slug)) {
      list.unshift(entry);
      fs.writeFileSync(archivePath, content.replace(match[0], `export const PUBLISHED_ARCHIVE = ${JSON.stringify(list, null, 2)};`), 'utf8');
      console.log(`🗄️  [Arquivo Editorial] ${list.length} matérias na memória permanente.`);
    }
  } catch (err) {
    console.warn(`⚠️ [Arquivo Editorial] Falha ao registrar publicação: ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// Publicação
// -----------------------------------------------------------------------------
async function publishArticle(articleData, candidate, meta, supabaseClient) {
  console.log(`✓ Ensaio Concluído: "${articleData.title}"`);
  console.log(`✓ Autor: ${articleData.authorName || candidate.authorSlug} (${articleData.authorSlug || candidate.authorSlug})`);

  const finalScore = Math.max(Number(articleData.rankingScore) || 94, candidate.score || 94);
  console.log(`✓ Nota Geral Consolidada: ${finalScore} pts | Badge: ${articleData.badge || 'EDITORIAL VIP'}`);

  let slug = String(articleData.slug || slugify(articleData.title)).trim().replace(/^-+|-+$/g, '');
  if (!slug) slug = `artigo-${Date.now()}`;
  let uniqueSlug = slug;
  let suffix = 2;
  while (meta.existingSlugs.has(uniqueSlug) || ARTICLES.some(a => a.slug === uniqueSlug)) {
    uniqueSlug = `${slug}-${suffix}`;
    suffix += 1;
  }
  slug = uniqueSlug;

  // Jitter temporal para parecer orgânico (espalhamento em janela de até 15 minutos)
  const publishDate = new Date();
  const randomJitterMinutes = Math.floor(Math.random() * 15) + 1;
  publishDate.setMinutes(publishDate.getMinutes() - randomJitterMinutes);
  const publishedAt = publishDate.toISOString();
  const now = new Date();
  const formattedDate = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const articleId = `art-${slug.slice(0, 32)}-${Date.now().toString().slice(-4)}`;

  // Avaliação de Gravidade da Capa (meia-vida de 24h)
  let currentHero = ARTICLES.find(a => a.isHero || a.is_hero) || null;
  if (supabaseClient) {
    try {
      const { data: heroData } = await supabaseClient
        .from('articles')
        .select('*')
        .eq('is_hero', true)
        .maybeSingle();
      if (heroData) currentHero = heroData;
    } catch {
      // Fallback para a capa local
    }
  }

  let isHero = false;
  if (currentHero) {
    if (currentHero.is_pinned_hero || currentHero.isPinnedHero) {
      console.log('📌 A Capa atual está FIXADA MANUALMENTE pelo editor. Nova matéria publicada no Feed Geral.');
      isHero = false;
    } else {
      const capaAnalysis = calculateCapaWeight(currentHero);
      console.log('\n⚖️  [Julgamento da Capa]:');
      console.log(`   Capa Vigente: "${(currentHero.title || '').slice(0, 35)}..."`);
      console.log(`   Peso Atual: ${Math.round(capaAnalysis.currentWeight)} pts (${capaAnalysis.hoursElapsed.toFixed(1)}h no ar, Base: ${capaAnalysis.baseScore} pts)`);
      console.log(`   Nota da Nova Matéria: ${finalScore} pts`);
      isHero = finalScore >= 88 && finalScore > capaAnalysis.currentWeight;
      console.log(`   ${isHero ? '👑 VEREDITO: PROMOVIDA A CAPA PRINCIPAL (Hero).' : '📰 VEREDITO: alocada no Feed Geral de Destaques.'}`);
    }
  } else {
    isHero = finalScore >= 88;
  }

  const categorySlug = candidate.categorySlug || articleData.categorySlug || 'supercarros';

  const newArticle = {
    id: articleId,
    slug,
    title: articleData.title,
    category: candidate.category || articleData.category,
    categorySlug,
    category_slug: categorySlug,
    authorSlug: candidate.authorSlug || articleData.authorSlug,
    author_slug: candidate.authorSlug || articleData.authorSlug,
    type: 'article',
    badge: isHero ? 'DESTAQUE MUNDIAL' : (articleData.badge || 'EDITORIAL VIP'),
    date: formattedDate,
    readTime: articleData.readTime || '5 min de leitura',
    read_time: articleData.readTime || '5 min de leitura',
    image: await pickArticleImage(candidate, meta),
    imageFocus: candidate.pauta?.imageFocus || (categorySlug === 'supercarros' ? 'bottom' : 'center'),
    image_focus: candidate.pauta?.imageFocus || (categorySlug === 'supercarros' ? 'bottom' : 'center'),
    excerpt: articleData.excerpt,
    contentParagraphs: articleData.contentParagraphs,
    content_paragraphs: articleData.contentParagraphs,
    specs: articleData.specs || candidate.specs || {},
    status: 'published',
    isHero,
    is_hero: isHero,
    isHeroSecondary: false,
    is_hero_secondary: false,
    isPinnedHero: false,
    is_pinned_hero: false,
    rankingScore: finalScore,
    ranking_score: finalScore,
    publishedAt,
    published_at: publishedAt,
    sourceUrl: candidate.sourceUrl,
    source_url: candidate.sourceUrl
  };

  // A. Supabase (se configurado)
  if (supabaseClient) {
    try {
      if (isHero) {
        // Supabase não lança em erro de request: é preciso ler { error } de cada chamada,
        // senão um rebaixamento perdido deixa duas matérias como capa principal.
        // Só troca o selo que o próprio robô deu antes; um badge escrito à mão
        // no painel sobrevive à promoção da nova capa.
        const badgeReset = await supabaseClient
          .from('articles')
          .update({ badge: 'CURADORIA RADAR' })
          .eq('is_hero', true)
          .eq('badge', 'DESTAQUE MUNDIAL');
        if (badgeReset.error) console.warn('⚠️ [Supabase] selo da capa anterior:', badgeReset.error.message);

        const demotion = await supabaseClient
          .from('articles')
          .update({ is_hero: false, is_hero_secondary: true })
          .eq('is_hero', true);
        if (demotion.error) console.warn('⚠️ [Supabase] rebaixamento da capa anterior:', demotion.error.message);
      }
      const databaseArticle = {
        id: newArticle.id,
        slug: newArticle.slug,
        title: newArticle.title,
        category: newArticle.category,
        category_slug: newArticle.category_slug,
        author_slug: newArticle.author_slug,
        type: newArticle.type,
        badge: newArticle.badge,
        date: newArticle.date,
        read_time: newArticle.read_time,
        image: newArticle.image,
        excerpt: newArticle.excerpt,
        content_paragraphs: newArticle.content_paragraphs,
        specs: newArticle.specs,
        status: newArticle.status,
        is_hero: newArticle.is_hero,
        is_hero_secondary: newArticle.is_hero_secondary,
        is_pinned_hero: newArticle.is_pinned_hero,
        ranking_score: newArticle.ranking_score,
        published_at: newArticle.published_at
      };
      const { error } = await supabaseClient
        .from('articles')
        .upsert([databaseArticle], { onConflict: 'slug' });
      if (error) {
        console.warn('⚠️ Supabase warning:', error.message);
      } else {
        console.log('✅ [Supabase] Artigo persistido no banco de dados na nuvem.');
      }
    } catch (err) {
      console.warn('⚠️ Supabase não respondeu:', err.message);
    }
  }

  // B. Acervo local (mockData.js) + bumper de versão
  const mockContent = fs.readFileSync(mockDataPath, 'utf-8');
  const articlesStartIdx = mockContent.indexOf('export const ARTICLES = [');
  if (articlesStartIdx === -1) {
    throw new Error('Marcador ARTICLES não encontrado em mockData.js');
  }

  const beforeArticles = mockContent.slice(0, articlesStartIdx);
  const updatedArticles = [...ARTICLES];
  if (isHero) {
    // Só a capa vigente pode reivindicar "destaque mundial"; rebaixar sem trocar o
    // selo deixava meia dúzia de matérias antigas com o mesmo rótulo na home.
    updatedArticles.forEach(a => {
      if (a.isHero || a.is_hero) {
        a.isHero = false;
        a.is_hero = false;
        a.isHeroSecondary = true;
        a.is_hero_secondary = true;
        if (/DESTAQUE MUNDIAL/i.test(String(a.badge || ''))) a.badge = 'CURADORIA RADAR';
      }
    });
  }
  updatedArticles.unshift(newArticle);
  const trimmedArticles = updatedArticles.slice(0, MAX_ARTICLES);

  // A roleta de destaques só pode apontar para matérias que existem no acervo:
  // entradas fixas ficavam para trás quando o item saía dos 25 mais recentes.
  // E ela precisa ignorar o que a home já consome (capa, faixa e feed);
  // sem isso a mesma matéria aparecia três vezes na mesma tela.
  const filmstripPicks = getFilmstripSelection(trimmedArticles, FILMSTRIP_LIMIT);
  // JSON.stringify em vez de escape manual: título com quebra de linha ou crase
  // publicava um mockData.js sintaticamente quebrado.
  const filmstripCode = `\nexport const FILMSTRIP_ITEMS = [\n${filmstripPicks.map((item, index) => `  ${JSON.stringify({
    id: `film-${index + 1}`,
    category: (item.categorySlug || 'DESTAQUES').toUpperCase(),
    title: `${String(item.title || '').slice(0, 38)}...`,
    image: item.image,
    tag: item.badge || 'CURADORIA RADAR',
    slug: item.slug
  }, null, 2).replace(/\n/g, '\n  ')}`).join(',\n')}\n];\n`;

  // Preserva qualquer conteúdo que exista DEPOIS do array de filmstrip.
  // Sem isso, uma futura exportação adicionada ao fim do mockData.js seria
  // silenciosamente apagada pelo robô em produção.
  const filmstripStart = mockContent.indexOf('export const FILMSTRIP_ITEMS = [');
  let trailingContent = '\n';
  if (filmstripStart !== -1) {
    // O término é o "];" do próprio array, encostado na coluna zero. Procurar o
    // primeiro "];" à frente cortaria o arquivo dentro de um título qualquer.
    const afterStart = mockContent.slice(filmstripStart);
    const closing = afterStart.match(/\n\];[^\n]*\n/);
    trailingContent = closing ? afterStart.slice(closing.index + closing[0].length) : '';
  } else {
    console.warn('⚠️ [mockData.js] FILMSTRIP_ITEMS não encontrado; conteúdo posterior pode ser preservado apenas parcialmente.');
  }

  const newArticlesCode = `export const ARTICLES = ${JSON.stringify(trimmedArticles, null, 2)};\n` + filmstripCode;
  fs.writeFileSync(mockDataPath, beforeArticles + newArticlesCode + trailingContent, 'utf-8');
  console.log(`✅ [mockData.js] Acervo atualizado no disco! Total de matérias: ${trimmedArticles.length}.`);

  if (fs.existsSync(radarServicePath)) {
    const serviceContent = fs.readFileSync(radarServicePath, 'utf-8');
    const newVersion = `v3.0_${Date.now()}`;
    const updatedService = serviceContent.replace(
      /export const CURRENT_CONTENT_VERSION = ['"][^'"]+['"];/,
      `export const CURRENT_CONTENT_VERSION = '${newVersion}';`
    );
    if (updatedService === serviceContent) {
      // Sem casar o padrão, o site continuaria servindo a versão velha e os
      // leitores ficariam com a edição anterior no cache — sem ninguém avisado.
      console.warn('⚠️ [Cache Bumper] CURRENT_CONTENT_VERSION não foi encontrado em radarService.js; cache não invalidado.');
    } else {
      fs.writeFileSync(radarServicePath, updatedService, 'utf-8');
      console.log(`⚡ [Cache Bumper] Versão de conteúdo atualizada para '${newVersion}'.`);
    }
  }

  console.log('\n==============================================================================');
  console.log('🎉 MATÉRIA PUBLICADA COM SUCESSO!');
  console.log(`📌 Título: "${newArticle.title}"`);
  console.log(`🏆 Posição: ${isHero ? '👑 CAPA PRINCIPAL (Hero)' : '📰 Feed Geral de Destaques'}`);
  console.log(`⭐ Pontuação Editorial: ${newArticle.rankingScore} / 100 pts`);
  console.log(`🔗 Slug: /artigo/${newArticle.slug}`);
  console.log('==============================================================================\n');

  return newArticle;
}

// -----------------------------------------------------------------------------
// Ciclo principal
// -----------------------------------------------------------------------------
async function runPublicationCycle() {
  let statusUpdates = new Map();

  try {
    let supabaseClient = null;
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
      } catch (err) {
        console.warn('⚠️ Falha ao instanciar Supabase:', err.message);
      }
    }

    if (!DRY_RUN && !process.env.CI_TEST_NO_DELAY) {
      const organicDelaySeconds = process.env.GITHUB_ACTIONS ? 5 : Math.floor(Math.random() * 20) + 5;
      console.log(`⏱️ Sincronizando pulso editorial com ateliês internacionais (+${organicDelaySeconds}s)...`);
      await new Promise(resolve => setTimeout(resolve, organicDelaySeconds * 1000));
    }

    const meta = await getExistingArticlesMetadata(supabaseClient);

    // Intervalo mínimo entre publicações (0 = desativado)
    if (MIN_PUBLICATION_INTERVAL_HOURS > 0 && meta.latestPublishedAt) {
      const elapsedHours = (Date.now() - meta.latestPublishedAt) / 3_600_000;
      if (elapsedHours < MIN_PUBLICATION_INTERVAL_HOURS) {
        announceNoPublication(`intervalo mínimo de ${MIN_PUBLICATION_INTERVAL_HOURS}h não atingido (última publicação há ${elapsedHours.toFixed(1)}h)`);
        return null;
      }
    }

    const queue = readRetryQueue();
    const queueCandidates = queue.slice(0, MAX_QUEUE_ITEMS).map(candidateFromQueueItem);
    const { candidates, duplicateKeys, expiredKeys, rejectedKeys = [] } = buildCandidatePool(meta);

    duplicateKeys.forEach(key => statusUpdates.set(key, 'duplicate'));
    expiredKeys.forEach(key => statusUpdates.set(key, 'expired'));
    rejectedKeys.forEach(key => statusUpdates.set(key, 'rejected'));

    const attempts = [
      ...queueCandidates.map(candidate => ({ candidate, fromQueue: true, queueItem: queue.find(item => item.pautaId === candidate.key) })),
      ...candidates.slice(0, MAX_CANDIDATES).map(candidate => ({ candidate, fromQueue: false, queueItem: null }))
    ];

    if (!attempts.length) {
      announceNoPublication('nenhuma pauta inédita disponível (fila vazia, acervo todo publicado ou pautas expiradas)');
      return null;
    }

    if (DRY_RUN) {
      console.log('\n🧪 [DRY RUN] Candidatas que seriam tentadas neste ciclo:');
      attempts.forEach(({ candidate, fromQueue }, idx) => {
        console.log(`   ${idx + 1}. ${fromQueue ? '[RETRY] ' : ''}[${candidate.score} pts | ${candidate.categorySlug}] ${candidate.hook.slice(0, 70)}... (${candidate.authorSlug})`);
      });
      console.log(`   Pautas marcadas como duplicate: ${duplicateKeys.length}`);
      console.log(`   Pautas marcadas como rejected: ${rejectedKeys.length}`);
      console.log(`   Pautas marcadas como expired: ${expiredKeys.length}`);
      console.log('🧪 [DRY RUN] Nada foi gerado ou gravado.');
      return null;
    }

    let published = null;
    let generatedAttempts = 0;

    for (const attempt of attempts) {
      const { candidate, fromQueue, queueItem } = attempt;
      console.log(`\n🖋️  [Redação] Tentando ${fromQueue ? 'fila de retry' : 'candidata fresca'}: "${candidate.hook.slice(0, 70)}..."`);

      let articleData;
      try {
        articleData = await generateLuxuryArticle(candidate.promptInput || promptForCandidate(candidate), {
          authorSlug: candidate.authorSlug
        });
      } catch (err) {
        console.warn(`⚠️ [Redação] Falha ao gerar matéria: ${err.message}`);
        articleData = { needsRegeneration: true, generationStatus: 'error' };
      }
      generatedAttempts += 1;

      if (articleData.needsRegeneration || articleData.generationStatus === 'fallback_pending' || articleData.generationStatus === 'error') {
        if (fromQueue) {
          registerQueueFailure(queueItem);
          continue;
        }
        enqueueForRegeneration(candidate, promptForCandidate(candidate));
        console.warn('⚠️ Gemini indisponível: pauta enfileirada para regeneração. Encerrando as tentativas frescas deste ciclo.');
        break;
      }

      const conflict = findPublicationConflict(articleData, candidate, meta);
      if (conflict) {
        console.warn(`🛑 [Bloqueio Editorial] Matéria abortada: ${conflict}.`);
        if (candidate.key) statusUpdates.set(candidate.key, 'duplicate');
        if (fromQueue) removeFromRetryQueue(candidate.key);
        continue;
      }
      console.log('✅ [Auditoria Aprovada] Nenhuma colisão com o acervo, arquivo permanente ou Capa.');

      published = await publishArticle(articleData, candidate, meta, supabaseClient);

      if (published) {
        if (candidate.key) statusUpdates.set(candidate.key, 'published');
        if (fromQueue) removeFromRetryQueue(candidate.key);
        appendToPublishedArchive(published);
        break;
      }
    }

    if (!published) {
      announceNoPublication(`todas as ${generatedAttempts} tentativas foram bloqueadas ou falharam`);
    }

    return published;
  } catch (err) {
    console.error('❌ Erro no ciclo de publicação:', err.message || err);
    process.exitCode = 1;
    return null;
  } finally {
    flushStatusUpdates(statusUpdates);
  }
}

runPublicationCycle();
