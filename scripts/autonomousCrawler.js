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
 *   CAPA_MAX_AGE_HOURS=8             a partir daqui a capa está "velha" e o piso
 *                                    de promoção cai para CAPA_MIN_SCORE
 *   CAPA_MIN_SCORE=80                nota mínima absoluta para coroar capa velha
 *   AI_MODEL_CHAIN=JSON              degraus externos ACRESCENTADOS depois dos 3
 *                                    Google (protocolo openai: base/key por hop, ou
 *                                    AI_OPENAI_BASE_URL / AI_OPENAI_API_KEY p/ todos)
 *
 * ROTAÇÃO DE CAPA (uma por turno de Brasília, antes das 14h e depois das 14h):
 *   A matéria coroada é sempre a de maior nota do ciclo, e só assume se a imagem
 *   passou pela auditoria binária neste run. Capa fixada pelo editor (pino) nunca
 *   é destronada, e o rascunho determinístico sem IA — que existe para o site nunca
 *   acordar sem matéria — publica no feed e nunca abre a cara da revista.
 *   Ver scripts/autonomousCrawler.js :: decideCoverPromotion.
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
import { calculateEditorialScore, calculateCapaWeight, MIN_HERO_PRESTIGE_SCORE, resolvePublishedTimestamp } from '../src/services/rankingEngine.js';
import { ARTICLES } from '../src/data/mockData.js';
import { getPhotoId, sameStory, storyKey, slugify } from '../src/services/editorialDedupe.js';
import { getFilmstripSelection, FILMSTRIP_LIMIT, FLOOR_DRAFT_BADGE, temMancheteForasteira, afirmacoesSemFonte as medirAfirmacoesSemFonte } from '../src/services/feedPolicy.js';
import { resolveCoverImage, auditGalleryImages, SIZE_SUFFIX, AUDIT_BUDGET_MS } from './coverImageAudit.js';
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
const CAPA_MIN_SCORE = Math.max(1, envNumber('CAPA_MIN_SCORE', 80));
const CAPA_MAX_AGE_HOURS = Math.max(1, envNumber('CAPA_MAX_AGE_HOURS', 8));
// Piso de tempo entre coroações, independente do env: duas capas em dois minutos só
// acontecem por disparo manual, e o jitter do publishedAt pode enganar a cota de turno.
const CAPA_MIN_GAP_MS = 2 * 3_600_000;
const MIN_PUBLICATION_INTERVAL_HOURS = Math.max(0, envNumber('MIN_PUBLICATION_INTERVAL_HOURS', 0));

// Rotação forçada: em horários fixos (UTC), se a capa atual tem mais de N horas,
// coroa a matéria mais forte do dia mesmo que não bata o score da capa vigente.
// Default: 03:00 e 13:00 BRT (06:00 e 16:00 UTC), idade mínima 8h.
const ROTACAO_FORCADA_HORAS = (process.env.ROTACAO_FORCADA_HORAS || '6,16')
  .split(',')
  .map(h => Number(h.trim()))
  .filter(h => Number.isFinite(h) && h >= 0 && h < 24);
const ROTACAO_FORCADA_IDADE_MIN_HORA = Number(process.env.ROTACAO_FORCADA_IDADE_MIN_HORA || 8);

// Verticais medidas nesta worktree (aspecto < 1). O auditor de capa as reprova pela
// dimensão quando há rede; aqui elas são barradas também sem medir, porque o degrau de
// rede caída não tem régua nenhuma além do que já sabemos dos arquivos. São fotos boas
// para o CORPO da matéria — continuam em HOMOLOGATED_IMAGES.
const VERTICAIS_MEDIDAS = new Set([
  'photo-1617814076367-b759c7d7e738',
  'photo-1524805444758-089113d48a6d',
  'photo-1547996160-81dfa63595aa',
  'photo-1509042239860-f550ce710b93',
  'photo-1600585154526-990dced4db0d',
  'photo-1506929562872-bb421503ef21',
  'photo-1535632066927-ab7c9ab60908',
  'photo-1599643478518-a784e5dc4c8f'
]);

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
console.log(`⚙️  Parâmetros: MAX_ARTICLES=${MAX_ARTICLES} · MAX_CANDIDATES=${MAX_CANDIDATES} · MAX_QUEUE_ITEMS=${MAX_QUEUE_ITEMS} · PAUTA_MAX_AGE_HOURS=${PAUTA_MAX_AGE_HOURS} · MIN_INTERVAL_HOURS=${MIN_PUBLICATION_INTERVAL_HOURS} · CAPA_VELHA_A_PARTIR_DE=${CAPA_MAX_AGE_HOURS}h (piso ${CAPA_MIN_SCORE} pts)`);

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
  // A data da pauta entra no texto entregue. Sem ela, um modelo que escreve "na
  // temporada 2026" afirma um ano que não está em lugar nenhum do material, e a trava
  // de afirmação queima a pauta por um fato que ela não tinha como saber. O mesmo
  // string é o que a régua lê, então as duas pontas veem a mesma fonte. A guarda de
  // formato é a mesma da fila: 'Publicado em:' escrito por engano num texto de pauta
  // inibiria o anexo correto do item e reabriria a devolução falsa.
  const base = `${candidate.hook}\n\nContexto: ${candidate.summary || ''}\nFonte: ${candidate.sourceUrl || ''}`;
  return comDataDePublicacao(base, candidate.pauta && candidate.pauta.createdAt);
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

/**
 * Anexa a data da pauta ao texto que o modelo e a trava leem. Item gravado na fila antes
 * de 'Publicado em:' não traz data nenhuma, e sem ela uma manchete sobre o ano corrente
 * ('os reis do mercado em 2026') é acusada de fabricar um ano que a pauta sempre contém
 * — e a devolução falsa custa a pauta no segundo ciclo. Só anexar: retirar apoio do texto
 * nunca é correção, é acusação nova.
 * @param {string} promptInput texto já entregue à geração, ou o resíduo antigo dele
 * @param {string} [dia] createdAt da pauta (ISO) — data do item quando a pauta saiu da oferta
 * @returns {string}
 */
export function comDataDePublicacao(promptInput, dia) {
  const texto = String(promptInput || '');
  const diaCurto = String(dia || '').slice(0, 10);
  if (/Publicado em:/.test(texto) || !/^\d{4}-\d{2}-\d{2}$/.test(diaCurto)) return texto;
  return `${texto}\nPublicado em: ${diaCurto}`;
}

function candidateFromQueueItem(item) {
  const key = item.pautaId || item.id || null;
  // A curadoria derruba pautas velhas do pool, então o item pode ser a única cópia que
  // ainda carrega uma data. O queuedAt licencia um ano só — o do dia em que a pauta
  // estava em jogo — que é o erro do lado da concessão, direção declarada da régua.
  const pautaNaOferta = INITIAL_HOT_PAUTAS.find(p => p && p.id === key);
  const promptInput = comDataDePublicacao(
    item.promptInput,
    (pautaNaOferta && pautaNaOferta.createdAt) || item.queuedAt
  );
  const hook = item.hook || promptInput.split('\n')[0] || 'Pauta em regeneração';
  return {
    sourceType: 'Retry Queue',
    key,
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

// As duas contagens da fila medem causas diferentes e não podem ser confundidas:
//   attempts   — tentativas em que nenhuma IA respondeu. É infraestrutura.
//   devolucoes — matérias devolvidas pelas travas de TEXTO (idioma, afirmação sem
//                fonte). É evidência sobre a pauta, e só ela decide o destino dela.
// Na rodada anterior eu li as duas como uma só: o item que expirava por apaguão de IA
// era descartado, a leitura seguinte não o encontrava, e "-1" virava "as tentativas
// acabaram" — queimando na PRIMEIRA devolução uma pauta legítima, dentro da janela de
// IA instável que é justamente a razão de existir do piso determinístico.
const TETO_DE_DEVOLUCAO = 2;

/**
 * Soma a devolução de texto no item da fila. Recebe o array pronto para que a máquina
 * de estados seja testável sem tocar em disco; quem chama decide persistir.
 * @param {{pautaId?: string, id?: string, devolucoes?: number}[]} queue
 * @param {string} key
 * @returns {{vezes: number, presente: boolean, queimada: boolean}}
 */
export function registrarDevolucaoNaFila(queue, key) {
  const index = (Array.isArray(queue) ? queue : [])
    .findIndex(item => item && (item.pautaId || item.id) === key);
  // Item ausente = a fila o descartou por apaguão de IA, não por texto. A contagem
  // recomeça (o chamador acabou de reenfileirar a pauta) e nada queima: queda de IA
  // não é culpa da pauta. O teto dura mesmo assim — sem IA a fila não acumula
  // devoluções, e o TTL de 24h da pauta põe o teto de qualquer forma.
  if (index === -1) return { vezes: 1, presente: false, queimada: false };
  const vezes = (Number(queue[index].devolucoes) || 0) + 1;
  queue[index].devolucoes = vezes;
  return { vezes, presente: true, queimada: vezes >= TETO_DE_DEVOLUCAO };
}

/**
 * Separa a fila pelo veredito que o pool já deu sobre a pauta. Id fora do pool
 * permanece na fila: a curadoria derruba pautas velhas, e isso não é juízo sobre o
 * texto — descartar por aqui seria perder a pauta sem veredito nenhum.
 * @param {{pautaId?: string, id?: string}[]} queue
 * @param {Map<string, string>} statusNoPool
 * @returns {{viva: object[], expurgada: object[]}}
 */
export function expurgarFilaPorStatus(queue, statusNoPool) {
  const viva = [];
  const expurgada = [];
  for (const item of Array.isArray(queue) ? queue : []) {
    const status = statusNoPool.get((item && (item.pautaId || item.id)) || '');
    (status && status !== 'available' ? expurgada : viva).push(item);
  }
  return { viva, expurgada };
}

/**
 * A composição dos dois arquivos: fila de regeneração + pool curado → quem escreve
 * neste ciclo. Vive separada porque o defeito morava exatamente aqui (item com
 * veredito que continuava sendo escrito, blindagem da fila inteira que escondia o
 * item parado fora do limite), e só lendo a composição os dois ramos apareciam.
 * @param {object[]} queueBruta itens como estão em editorialRetryQueue.js
 * @param {object[]} candidates pool já ordenado por nota, saído de buildCandidatePool
 * @param {Map<string, string>} statusNoPool id → status, lido de hotFeedsData.js
 * @param {{maxQueue?: number, maxFresh?: number}} [limites]
 * @returns {{frescas: object[], emFila: object[], expurgada: object[], viva: object[]}}
 */
export function planejarTentativas(queueBruta, candidates, statusNoPool, limites = {}) {
  const maxQueue = Number(limites.maxQueue) || MAX_QUEUE_ITEMS;
  const maxFresh = Number(limites.maxFresh) || MAX_CANDIDATES;
  const { viva, expurgada } = expurgarFilaPorStatus(queueBruta, statusNoPool);
  // Só os itens que de fato disputam um slot blindam o slot fresco. Blindasse a fila
  // inteira, um item parado além do limite ficaria invisível dos dois lados — nem
  // tentado, nem renovável — e expiraria pelo TTL sem veredito nenhum.
  const filaTentada = viva.slice(0, maxQueue);
  const naFila = new Set(filaTentada.map(item => item.pautaId || item.id));
  const frescas = (Array.isArray(candidates) ? candidates : [])
    .filter(candidate => !naFila.has(candidate.key))
    .slice(0, maxFresh)
    .map(candidate => ({ candidate, fromQueue: false, queueItem: null }));
  const emFila = filaTentada
    .map(item => ({
      candidate: candidateFromQueueItem(item),
      fromQueue: true,
      queueItem: item
    }));
  return { frescas, emFila, expurgada, viva };
}

function registrarDevolucao(key) {
  if (!key) return { vezes: 0, queimada: false };
  const queue = readRetryQueue();
  const { vezes, presente, queimada } = registrarDevolucaoNaFila(queue, key);
  if (queimada) removeFromRetryQueue(key);
  else if (presente) writeRetryQueue(queue);
  return { vezes, queimada };
}

// -----------------------------------------------------------------------------
// Memória editorial (arquivo permanente + acervo local + Supabase)
// -----------------------------------------------------------------------------

/**
 * Chave que identifica A FOTOGRAFIA de uma matéria, não o arquivo dela. Para o
 * Unsplash é o id da foto; para qualquer outra origem (asset do repositório,
 * imagem do próprio veículo) vale o nome do arquivo SEM o sufixo de miniatura:
 * `-600x237.jpg` e `.jpg` são a mesma fotografia, e contá-las como duas capas
 * permitia publicar por cima de uma matéria visível. `getPhotoId` devolve vazio
 * fora do Unsplash, e era por isso que duas matérias podiam sair com a mesma capa
 * de jornal sem o robô perceber nada.
 */
export function fotoChave(url) {
  const id = getPhotoId(url);
  if (id) return id;
  // O sufixo de tamanho sai ANTES de cortar a query: `a-600x237?crop=1` é a miniatura
  // de `a.jpg`, e a alternativa `\?` do SIZE_SUFFIX só existe para esse formato. Cortar
  // a query primeiro dava chave própria à miniatura e a foto escapava da guarda.
  const semTamanho = String(url || '').replace(SIZE_SUFFIX, '').split('?')[0];
  const semProtocolo = semTamanho.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '');
  const barra = semProtocolo.indexOf('/');
  // Host sem caminho (`https://example.com`) não é arquivo: sem esta barra o host
  // virava chave e duas fotografias diferentes dividiam a mesma entrada da tela.
  if (barra < 0) return '';
  const seg = semProtocolo.slice(barra + 1).split('/').pop().toLowerCase();
  if (!seg) return '';
  // O piso de 6 caracteres existe para não inventar chave a partir de um segmento que
  // não é arquivo (`x`, `12`). O efeito colateral era descartar `a.jpg`: sem chave a
  // foto nunca entra em tela, e a mesma fotografia local coroava duas matérias
  // seguidas. Nome com extensão é arquivo, curto ou não; sem extensão só vale o longo.
  return /\.[a-z0-9]{2,5}$/.test(seg) || seg.length > 6 ? seg : '';
}

/**
 * O que proíbe repetir capa é a foto estar EM TELA, não ter existido um dia.
 * O acervo permanente cresce para sempre e cada banco de categoria tem 12-14
 * fotos: contando o acervo inteiro, o banco zerava em poucas semanas e o robô
 * publicava por cima de uma capa visível — e o dedupeArticles do site derrubava
 * uma das duas matérias em silêncio (foi assim que a Australian Superyachts
 * sumiu do feed quando a Brabus herdou a foto dela).
 *
 * "Em tela" é o que aquela função do site vê, e isso depende da fonte:
 *  - Supabase configurado e lido  -> as linhas dele (o site consulta sem limite)
 *    ∪ o acervo local, que é o que aparece quando o banco não devolve nada;
 *  - Supabase configurado e ilegível -> a tela é desconhecida: entra também o
 *    acervo permanente. Errar para o conservador custa uma matéria sem coroa de
 *    capa; errar para o outro lado apaga conteúdo do ar;
 *  - Supabase não configurado (é o caso da produção hoje, medido no bundle
 *    publicado em 2026-11-03) -> o acervo local, com a poda de MAX_ARTICLES,
 *    que é literalmente a lista que o dedupe recebe.
 */
export function montarGuardaDeCapas({ articles = [], capasDoBanco = [], bancoLido = false, supabaseConfigurado = false, arquivo = [], pautas = [] }) {
  const chaves = new Set();
  const semear = (lista) => lista.forEach(r => {
    const key = fotoChave(r && r.image);
    if (key) chaves.add(key);
  });
  semear(articles);
  // A imagem sugerida de uma pauta do pool também é tela: enquanto a persistência da
  // matéria não chega, o link gerado pelo scout abre pela fallback de hotFeedsData.js
  // (radarService.js :: getHotPautaFallback), que renderiza exatamente essa foto para
  // quem a abriu de manhã. É o único caso em que a "tela" não é a lista de matérias —
  // e é local, então vale nos três regimes acima, com ou sem Supabase.
  pautas.forEach(pauta => {
    const key = fotoChave(pauta && pauta.suggestedImage);
    if (key) chaves.add(key);
  });
  if (bancoLido) {
    semear(capasDoBanco);
    return { chaves, conservador: false, descricao: `feed do Supabase (${capasDoBanco.length} linhas) + acervo local` };
  }
  if (supabaseConfigurado) {
    semear(arquivo);
    return { chaves, conservador: true, descricao: 'acervo local + permanente (Supabase ilegível)' };
  }
  return { chaves, conservador: false, descricao: 'acervo local (Supabase não configurado no site)' };
}

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

  // "Em tela" tem que ser o que o dedupeArticles do site realmente vê. Ele consulta
  // a tabela inteira, sem limite — ler só as 500 mais novas deixaria uma capa antiga
  // fora da guarda e a repetição voltaria a derrubar matéria.
  let bancoLido = false;
  const capasDoBanco = [];
  if (supabaseClient) {
    try {
      const PAGINA = 1000;
      for (let inicio = 0; inicio < 5 * PAGINA; inicio += PAGINA) {
        const { data, error } = await supabaseClient
          .from('articles')
          .select('slug, title, image, category_slug, published_at')
          .order('published_at', { ascending: false })
          .range(inicio, inicio + PAGINA - 1);
        if (error) throw error;
        (data || []).forEach(row => capasDoBanco.push({
          slug: row.slug,
          title: row.title,
          image: row.image,
          categorySlug: row.category_slug,
          publishedAt: row.published_at
        }));
        if (!data || data.length < PAGINA) break;
      }
      bancoLido = true;
    } catch (err) {
      console.warn(`⚠️ [Memória] Supabase indisponível para leitura (${err.message}). Usando arquivo + acervo local.`);
    }
  }

  capasDoBanco.forEach(addRecord);
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
    const key = fotoChave(r.image);
    if (key) photoLastUsed.set(key, Math.max(photoLastUsed.get(key) || 0, r.publishedAt || 0));
  });
  const tela = montarGuardaDeCapas({
    articles: ARTICLES,
    capasDoBanco,
    bancoLido,
    supabaseConfigurado: Boolean(supabaseClient),
    arquivo: PUBLISHED_ARCHIVE,
    pautas: INITIAL_HOT_PAUTAS
  });
  if (tela.conservador) {
    console.warn('::warning::Supabase configurado mas ilegível neste ciclo: a tela é desconhecida, então a guarda de capas entra também pelo acervo permanente.');
  }
  const fotosEmTela = tela.chaves;
  const recentCategories = records.filter(r => r.categorySlug).slice(0, 5).map(r => r.categorySlug);
  const latestPublishedAt = records.reduce((max, r) => Math.max(max, r.publishedAt), 0);

  console.log(`🧠 [Memória] ${records.length} matérias conhecidas (${PUBLISHED_ARCHIVE.length} no arquivo permanente, ${ARTICLES.length} no acervo local), ${fotosEmTela.size} capas em tela — ${tela.descricao}.`);
  return { existingSlugs, existingTitles, existingSourceUrls, fotosEmTela, photoLastUsed, recentCategories, latestPublishedAt };
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

  const imagemOrigem = candidate.image || articleData.image;
  const chaveOrigem = fotoChave(imagemOrigem);
  const idOrigem = getPhotoId(imagemOrigem);
  if (chaveOrigem && (!idOrigem || !GENERIC_PHOTO_IDS.has(idOrigem)) && meta.fotosEmTela.has(chaveOrigem)) {
    return 'imagem de origem já utilizada em outra matéria';
  }

  return null;
}

// Última recurso quando nem o feed nem o banco entregam uma capa auditável
// (rede fora, limite de requisição estourado). É arquivo do próprio repositório,
// 1600x1066, verificado no build — nunca um banner de feed que a auditoria acabou
// de reprovar, que é como a capa 600x237 voltava para o hero.
const REPO_FALLBACK_COVER = '/images/a-lange-datograph-honeygold-lumen.jpg';

/**
 * A capa indicada pela origem é publicável quando o auditor leu as dimensões e a
 * fotografia não está em tela. Exportada como função separada porque o ramo que a
 * chama é curto-circuitado por `sourceIsFresh` em quase toda URL real: sem teste
 * direto, nenhuma asserção exercitaria esta checagem (Reserva 4 da revisão sênior).
 */
export function origemPublicavel(audit, fotosEmTela) {
  if (!audit.medida) return false;
  const chave = fotoChave(audit.url);
  // Sem chave não existe como provar que a foto não está em tela, e a invariante
  // "coroa => não está em tela" não pode depender de o nome do arquivo ser comprido
  // o bastante. URL de origem irreconhecível vai para o banco, que é reconhecível.
  return chave ? !fotosEmTela.has(chave) : false;
}

export async function pickArticleImage(candidate, meta) {
  const source = String(candidate.image || '').trim();
  const sourceId = getPhotoId(source);
  const sourceKey = fotoChave(source);
  const sourceIsFresh = source && (sourceId
    ? !GENERIC_PHOTO_IDS.has(sourceId) && !meta.fotosEmTela.has(sourceKey)
    : !meta.fotosEmTela.has(sourceKey));

  // O banco de CAPA é o único com a garantia editorial de que toda foto é deitada (o
  // retrato mora em HOMOLOGATED_IMAGES, onde ele ilustra o corpo da matéria). Nos
  // degraus que NÃO medem na rede a escolha prefere esse banco e descarta as verticais
  // já medidas: uma vertical sem medir cortaria o assunto no recorte do herói, e o
  // banco fino demais (wealth não tem banco de capa) não pode empurrar a matéria para
  // o asset repetido do repositório.
  const deitadaDeCapa = (url) => Object.values(FALLBACK_CATEGORY_IMAGES)
    .some(banco => (banco || []).includes(url));
  const verticalConhecida = (url) => VERTICAIS_MEDIDAS.has(fotoChave(url));
  const publicavelSemMedir = (urls) => {
    const livres = urls.filter(url => !isTaken(url) && !verticalConhecida(url));
    return livres.find(deitadaDeCapa) || livres[0];
  };

  // Registra a chave da URL que vai SER publicada, não só a que o feed indicou.
  const registrar = (url) => {
    const key = fotoChave(url);
    if (key) meta.fotosEmTela.add(key);
  };
  const isTaken = (url) => {
    const key = fotoChave(url);
    return Boolean(key) && meta.fotosEmTela.has(key);
  };
  // Livre primeiro; entre os que já apareceram, o usado há mais tempo (distribui o
  // acervo). A isenção de "imagem genérica" — que só existe para não bloquear
  // publicação — não se aplica aqui: o banco é escolhido de propósito, então a
  // escolha é sempre responsável pela repetição.
  const ordenar = (urls) => urls.sort((a, b) => {
    if (isTaken(a) !== isTaken(b)) return isTaken(a) ? 1 : -1;
    return (meta.photoLastUsed.get(fotoChave(a)) || 0) - (meta.photoLastUsed.get(fotoChave(b)) || 0);
  });

  // Um orçamento de rede por matéria, dividido entre as auditorias (origem, banco
  // da categoria e empréstimo). Com orçamento por chamada, uma matéria podia gastar
  // 60 s dos dez minutos que o ciclo inteiro tem para escrever e publicar.
  const orcamento = Date.now() + AUDIT_BUDGET_MS;

  if (sourceIsFresh) {
    const audit = await resolveCoverImage(source, [], orcamento);
    if (audit.origin === 'origem' || audit.origin === 'local') {
      if (origemPublicavel(audit, meta.fotosEmTela)) {
        console.log(`🖼️ [Capa] ${audit.note}.`);
        registrar(source);
        registrar(audit.url);
        return { url: audit.url.replace('fit=crop', 'fit=max'), audited: true };
      }
      // Miniatura promovida e arquivo inteiro são a MESMA fotografia de uma matéria
      // visível: devolvê-la daqui coroa no herói e, sendo Unsplash, apaga a outra.
      // O aviso nomeia o motivo REAL: dizer "não teve dimensão conferida" de uma foto
      // que o auditor mediu 1400x800 e que só não tem chave é o log mentir — e log
      // mentiroso faz caçar o defeito no lugar errado.
      const chaveOrigem = fotoChave(audit.url);
      const motivo = !audit.medida ? 'não teve dimensão conferida'
        : !chaveOrigem ? 'não é uma fotografia identificável (não há como provar que não está em tela)'
        : meta.fotosEmTela.has(chaveOrigem) ? 'é a mesma fotografia de uma matéria em tela'
        : 'não pôde ser liberada para o herói';
      console.warn(`::warning::A capa da origem (${audit.note}) ${motivo}; não coroa, trocando pelo banco da categoria.`);
    } else {
      console.warn(`🖼️ [Capa] ${audit.note}. Substituindo pelo banco da categoria.`);
    }
  }

  // Capa tem que ser IDENTIFICÁVEL, não só livre: uma URL sem chave não entra em
  // `fotosEmTela` (não há o que registrar) e `isTaken` responde "livre" para sempre,
  // então a MESMA foto coroaria duas matérias seguidas pela porta do banco — o buraco
  // que `origemPublicavel` acabou de fechar na origem. Os bancos reais são Unsplash,
  // então este filtro não custa nenhuma foto hoje; custa só irreconhecíveis.
  const bancoBruto = [...new Set([
    ...(HOMOLOGATED_IMAGES[candidate.categorySlug] || []),
    ...(FALLBACK_CATEGORY_IMAGES[candidate.categorySlug] || [])
  ])];
  const gallery = ordenar(bancoBruto.filter(url => fotoChave(url)));

  if (gallery.length) {
    const audit = await auditGalleryImages(gallery, 8, orcamento);
    if (audit.url && !isTaken(audit.url)) {
      console.log(`🖼️ [Capa] ${audit.note}.`);
      registrar(audit.url);
      // A coroa exige medida: um AVIF/HEIF cujo cabeçalho a janela não alcança é capa
      // publicável (cartão), mas não se afirma herói sem saber o recorte.
      return { url: audit.url.replace('fit=crop', 'fit=max'), audited: audit.medida === true };
    }
    if (audit.url) {
      // Sem afirmar que era "a única": mais de uma capa podia ter passado e estar em
      // tela, e o log que inventa escassez faz o dono tomar decisão de banco com base
      // num dado que ninguém mediu.
      console.warn(`::warning::A capa do banco que passou na auditoria (${audit.note}) já está em tela; procurando foto livre.`);
    } else {
      console.log(`🖼️ [Capa] ${audit.note}.`);
    }
    // Banco reprovado quase sempre quer dizer rede indisponível no executor, e não
    // banco ruim. Devolver a capa do feed seria publicar exatamente o banner que a
    // auditoria acabou de reprovar (600x237 esticado no hero). Na falta de capa
    // auditável preferimos a foto livre do próprio banco, mesmo sem medir.
    const livre = publicavelSemMedir(gallery);
    if (livre) {
      console.warn('🖼️ [Capa] Sem capa auditável na rede; publicando com foto homologada livre do banco (sem medir).');
      registrar(livre);
      return { url: livre.replace('fit=crop', 'fit=max'), audited: false };
    }
  } else {
    console.warn(bancoBruto.length
      ? `🖼️ [Capa] Categoria "${candidate.categorySlug}" tem ${bancoBruto.length} imagem${bancoBruto.length === 1 ? '' : 's'} no banco, mas nenhuma é uma fotografia identificável.`
      : `🖼️ [Capa] Categoria "${candidate.categorySlug}" não tem banco de imagens.`);
  }

  // Categoria exaurida (toda foto dela já está em tela): empresta de outra categoria
  // antes de repetir capa. Repetir é o que faz o dedupeArticles do site derrubar uma
  // das duas matérias em silêncio — foi assim que a Australian Superyachts sumiu.
  const emprestadas = ordenar([...new Set(
    [...new Set([...Object.keys(FALLBACK_CATEGORY_IMAGES), ...Object.keys(HOMOLOGATED_IMAGES)])]
      .filter(categoria => categoria !== candidate.categorySlug)
      .flatMap(categoria => [...(FALLBACK_CATEGORY_IMAGES[categoria] || []), ...(HOMOLOGATED_IMAGES[categoria] || [])])
  )]).filter(url => fotoChave(url) && !isTaken(url));
  if (emprestadas.length) {
    const audit = await auditGalleryImages(emprestadas, 8, orcamento);
    const escolhida = audit.url || publicavelSemMedir(emprestadas);
    if (escolhida) {
      console.warn(`::warning::Banco de "${candidate.categorySlug}" sem capa utilizável (nada livre na tela, nada identificável); emprestando capa livre de outra categoria (${audit.url ? 'medida' : 'sem medir'}).`);
      registrar(escolhida);
      // audited:false de propósito: uma foto de outra categoria pode ser capa medida,
      // mas não é o retrato da matéria — e o herói da home é o retrato.
      return { url: escolhida.replace('fit=crop', 'fit=max'), audited: false };
    }
  }

  // Nada livre em banco nenhum. O asset do repositório é o único resto, e ele pode
  // ser uma capa já visível — repetição que NÃO derruba matéria (o dedupe do site só
  // compara fotografias do Unsplash), mas que o leitor vê. Por isso o aviso.
  console.warn(`::warning::Nenhum banco deixou capa livre (em tela ou não identificável); publicando com o asset do repositório (${REPO_FALLBACK_COVER}), repetindo a capa dele se já estiver visível.`);
  registrar(REPO_FALLBACK_COVER);
  return { url: REPO_FALLBACK_COVER, audited: false };
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

// Turno editorial em horário de Brasília: a madrugada é de quem abre o site antes
// do almoço, a tarde é de quem volta depois. UM coroamento por turno — sem esse
// teto, com runs a cada 2-4h e a maioria das matérias acima de 88, a capa trocava
// ~6,5 vezes ao dia e quase nada sobrava para o feed.
const TURNO_LIMITE_BRT = 14;
const BRT_OFFSET_MS = -3 * 3_600_000;

export function turnoKey(ms) {
  const brt = new Date(ms + BRT_OFFSET_MS);
  const dia = brt.toISOString().slice(0, 10);
  return `${dia}:${brt.getUTCHours() < TURNO_LIMITE_BRT ? 'manha' : 'tarde'}`;
}

// Uma leitura de tempo só (o parser do motor de decaimento), mas com PRECISÃO TOTAL:
// hoursElapsed vem arredondado a 0,1h e recuar 3 min uma coroação das 14h01 para as
// 13h58 reabre o turno da tarde e rende a terceira capa do dia.
function idadeCapaMs(hero, now = Date.now()) {
  return Math.max(0, now - resolvePublishedTimestamp(hero, now));
}

// A capa está livre para ser trocada neste ciclo? Pino manual do editor nunca libera.
export function coverTurnoLivre(hero, now = Date.now()) {
  if (!hero) return true;
  if (hero.is_pinned_hero || hero.isPinnedHero) return false;
  return turnoKey(now - idadeCapaMs(hero, now)) !== turnoKey(now);
}

// A capa vigente é uma só para as duas decisões do ciclo. Antes, o veredito de publicação
// lia o Supabase e a decisão ANTERIOR (este ciclo é de capa?) lia o mockData.js: com o
// pino manual feito no painel, as duas discordavam e a melhor pauta do dia era reservada
// para uma capa que o veredito depois recusava.
async function capaVivaDoAr(supabaseClient) {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('articles')
        .select('*')
        .eq('is_hero', true)
        .order('published_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      if (data) return data;
    } catch (err) {
      console.warn(`⚠️ [Capa] Supabase indisponível para a leitura da capa (${err.message}): decide o acervo local.`);
    }
  }
  return ARTICLES.find(a => a.isHero || a.is_hero) || null;
}

// Decide ANTES de escrever se este ciclo é um ciclo de capa, com a capa que o leitor vê.
// As MESMAS travas do veredito (turno + intervalo mínimo de 2h): sem a segunda, um alarme
// logo depois de uma coroação reservava a maior pauta do dia para uma capa que o veredito
// recusava em seguida, e a pauta queimava no feed.
export function capaLivreParaCoroar(hero, now = Date.now()) {
  if (!coverTurnoLivre(hero, now)) return false;
  // Sem capa vigente não há o que esperar: o intervalo entre coroações só se aplica a quem
  // já foi coroada, e a home não pode ficar sem rosto por causa dele.
  if (!hero) return true;
  return idadeCapaMs(hero, now) >= CAPA_MIN_GAP_MS;
}

async function coverIsDue(supabaseClient) {
  return capaLivreParaCoroar(await capaVivaDoAr(supabaseClient));
}

// Última barreira antes de gravar: um modelo que ignorou o idioma devolve a manchete crua da
// RSS. A matéria não sobe — e a pauta não queima, porque o texto é o problema, não a pauta.
export function mancheteSemTraducao(articleData) {
  const title = String(articleData?.title || '').trim();
  return temMancheteForasteira(title) ? title : null;
}

// Fato concreto que a pauta não diz — um lugar do beat ou um ano inventado. É o modo
// de falha medido no ciclo de 02/11 ("GP de Mônaco" numa pauta de pace car dos anos
// 80). Nome próprio fora da pauta e ênfase sem fonte ficam em 'apoio': a régua não
// distingue conhecimento de mundo correto de invenção, então esses termos custam a
// capa, nunca a publicação.
export function fatosInventadosSuspeitas(suspeitas) {
  const fabricadas = (Array.isArray(suspeitas) ? suspeitas : []).filter(a => a && a.tipo === 'fabricada');
  return fabricadas.length ? fabricadas.map(a => a.termo) : null;
}

// Termos que tiram a matéria do rosto do site. 'anotado' fica de fora de propósito: é o
// nome próprio que a régua não sabe julgar, medido em 7 de 22 matérias corretas.
function termosQueCustamCapa(suspeitas) {
  return (Array.isArray(suspeitas) ? suspeitas : [])
    .filter(a => a && a.tipo !== 'anotado')
    .map(a => a.termo);
}

// Jitter de publicação (parece orgânico) tem uma armação embutida: a regra de capa lê
// publishedAt para saber em que turno a coroação aconteceu. Recuar 15 minutos um alarme
// das 14h10 grava 13h58 = turno manha, deixa a tarde aberta e rende 3 capas no dia.
// Então o jitter só vale dentro do turno do instante real; atravessar a fronteira não.
export function jitteredPublishTime(nowMs = Date.now()) {
  const recuado = nowMs - (Math.floor(Math.random() * 15) + 1) * 60_000;
  return turnoKey(recuado) === turnoKey(nowMs) ? recuado : nowMs;
}

// Veredito da capa em função separada: é a decisão que define a cara do site, e
// o que se testa aqui é o código que roda no executor, não uma cópia dele.
export function decideCoverPromotion({ finalScore, capaAnalysis, coverAudited, pinned, turnoLivre, idadeCapaMs = null, floorDraft = false, afirmacoesSemFonte = [], horaUtc = null }, cfg = {}) {
  const capaMaxAge = Number.isFinite(cfg.capaMaxAgeHours) ? cfg.capaMaxAgeHours : CAPA_MAX_AGE_HOURS;
  const capaMinScore = Number.isFinite(cfg.capaMinScore) ? cfg.capaMinScore : CAPA_MIN_SCORE;

  // Rotação forçada por horário: se a capa está velha o suficiente e estamos numa janela
  // de troca (03:00 ou 13:00 BRT = 06:00 ou 16:00 UTC), coroa a melhor matéria disponível
  // mesmo que não supere o peso da capa vigente. Garante 2 trocas mínimas por dia.
  const idadeMinMs = ROTACAO_FORCADA_IDADE_MIN_HORA * 3_600_000;
  const rotacaoForcada = horaUtc !== null
    && ROTACAO_FORCADA_HORAS.includes(horaUtc)
    && Number.isFinite(idadeCapaMs)
    && idadeCapaMs >= idadeMinMs;

  if (pinned) {
    return { isHero: false, capaVelha: false, piso: null, motivo: 'capa fixada manualmente pelo editor' };
  }
  // Rascunho escrito sem IA é o piso de feed: nunca disputa a capa. Não dá para resolver
  // por nota, porque finalScore sai de Math.max(nota do rascunho, nota da pauta) e a nota
  // da pauta (82–85) atropela os 79 pts marcados no rascunho.
  if (floorDraft) {
    return { isHero: false, capaVelha: false, piso: null, motivo: 'rascunho determinístico sem IA, publicado apenas no feed' };
  }
  if (!turnoLivre && !rotacaoForcada) {
    return { isHero: false, capaVelha: false, piso: null, motivo: 'a capa deste turno já foi escolhida' };
  }
  // Piso de 2h entre coroações: dispara quando o editor roda o ciclo à mão (workflow_dispatch
  // ou workflow_run do Scout) logo depois de uma capa recém-escolhida. A cota de turno cuida
  // dos alarmes; este guarda o intervalo entre dois gatilhos do mesmo turno.
  // Rotação forçada bypassa esta trava: o objetivo é trocar a capa em horários fixos,
  // independente de quando a capa atual foi coroada.
  if (Number.isFinite(idadeCapaMs) && idadeCapaMs < CAPA_MIN_GAP_MS && !rotacaoForcada) {
    return { isHero: false, capaVelha: false, piso: null, motivo: `capa coroada há ${(idadeCapaMs / 3_600_000).toFixed(1)}h (mínimo 2h)` };
  }
  // A manchete promete o que a pauta não disse? Ela ainda é publicada — o que perde é a
  // capa, o lugar mais visível da revista. Medido em 2026-11-02: a fonte falava num
  // "One-Off, $1 Million Pace Car in the '80s" e o resumo publicado garantiu "construído
  // para liderar o GP de Mônaco". Mônaco não existia em lugar nenhum.
  // Rotação forçada bypassa esta trava: a capa precisa trocar no horário fixo, e a
  // afirmação sem fonte já foi publicada no feed (não é o caso de suprimir a matéria).
  const queCustamCapa = rotacaoForcada ? [] : termosQueCustamCapa(afirmacoesSemFonte);
  if (queCustamCapa.length) {
    return {
      isHero: false,
      capaVelha: false,
      piso: null,
      motivo: `afirmação sem fonte na manchete (${queCustamCapa.slice(0, 3).join(', ')})`
    };
  }
  // Último consumidor do hoursElapsed arredondado a 0,1h: com ele, uma capa de 7h58m20s
  // vira "8,0h" e o piso cai para 80 pts até 3 minutos antes da hora. A idade exata já
  // foi medida acima para o gap de 2h; aqui ela é a mesma leitura, não uma segunda conta.
  const idadeMs = Number.isFinite(idadeCapaMs) ? idadeCapaMs : capaAnalysis.hoursElapsed * 3_600_000;
  const capaVelha = idadeMs >= capaMaxAge * 3_600_000;
  const piso = capaVelha ? capaMinScore : MIN_HERO_PRESTIGE_SCORE;
  if (!coverAudited) {
    return { isHero: false, capaVelha, piso, motivo: 'imagem não foi medida neste ciclo (sem rede no executor)' };
  }
  // Rotação forçada bypassa o piso de score: a capa precisa trocar no horário fixo,
  // e a melhor matéria disponível (mesmo abaixo do piso normal) assume a capa.
  if (!rotacaoForcada && finalScore < piso) {
    return { isHero: false, capaVelha, piso, motivo: `nota ${finalScore} abaixo do piso ${piso}` };
  }
  if (!rotacaoForcada && finalScore <= capaAnalysis.currentWeight) {
    return { isHero: false, capaVelha, piso, motivo: `capa vigente ainda pesa ${capaAnalysis.currentWeight} pts` };
  }
  const motivo = rotacaoForcada
    ? `capa por rotação forçada (${finalScore} pts, capa com ${(idadeCapaMs / 3_600_000).toFixed(1)}h)`
    : `capa por mérito (${finalScore} > ${capaAnalysis.currentWeight})`;
  return { isHero: true, capaVelha, piso, motivo };
}

async function publishArticle(articleData, candidate, meta, supabaseClient, suspeitas) {
  console.log(`✓ Ensaio Concluído: "${articleData.title}"`);
  console.log(`✓ Autor: ${articleData.authorName || candidate.authorSlug} (${articleData.authorSlug || candidate.authorSlug})`);

  // Sem 94 inventado: rascunho que volta sem nota herda a nota da pauta, e não um valor
  // que fica acima do piso de capa (88) e coroa por mérito um texto que ninguém avaliou.
  const finalScore = Math.max(Number(articleData.rankingScore) || 0, Number(candidate.score) || 0);
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

  // Jitter temporal para parecer orgânico, dentro do turno (ver jitteredPublishTime).
  const now = new Date();
  const publishDate = new Date(jitteredPublishTime(now.getTime()));
  const publishedAt = publishDate.toISOString();
  const formattedDate = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const articleId = `art-${slug.slice(0, 32)}-${Date.now().toString().slice(-4)}`;

  // Avaliação de Gravidade da Capa (meia-vida de 24h) — a MESMA capa que decidiu o turno
  // acima: uma leitura só, com o pino manual e o publishedAt que a home renderiza.
  const currentHero = await capaVivaDoAr(supabaseClient);

  // A imagem é escolhida ANTES do veredito: coroar também é uma promessa visual, e
  // uma capa que não chegou a ser medida (rede fora do ar no executor) não pode
  // virar a cara do site só porque a nota passou.
  const cover = await pickArticleImage(candidate, meta);

  // Dois sinais de "este texto não foi escrito por IA": a flag do ciclo que publicou o
  // piso determinístico e o engineSource gravado pelo gerador. Basta um para travar a capa.
  const floorDraft = Boolean(articleData.floorDraft) || articleData.engineSource === 'local-synthesizer';
  const custamCapa = termosQueCustamCapa(suspeitas);

  let isHero = false;
  if (currentHero) {
    const capaAnalysis = calculateCapaWeight(currentHero);
    const veredito = decideCoverPromotion({
      finalScore,
      capaAnalysis,
      coverAudited: cover.audited,
      pinned: Boolean(currentHero.is_pinned_hero || currentHero.isPinnedHero),
      turnoLivre: coverTurnoLivre(currentHero),
      idadeCapaMs: idadeCapaMs(currentHero),
      floorDraft,
      afirmacoesSemFonte: suspeitas,
      horaUtc: new Date().getUTCHours()
    });
    isHero = veredito.isHero;
    if (!isHero && veredito.motivo.startsWith('imagem')) {
      console.warn('::warning::Capa bloqueada só pela medição da imagem neste ciclo.');
    }
    console.log('\n⚖️  [Julgamento da Capa]:');
    console.log(`   Capa Vigente: "${(currentHero.title || '').slice(0, 35)}..."`);
    console.log(`   Peso Atual: ${Math.round(capaAnalysis.currentWeight)} pts (${capaAnalysis.hoursElapsed.toFixed(1)}h no ar, Base: ${capaAnalysis.baseScore} pts)`);
    console.log(`   Nota da Nova Matéria: ${finalScore} pts · piso deste ciclo: ${veredito.piso === null ? 'n/a' : `${veredito.piso} pts`}${veredito.capaVelha ? ' (capa velha)' : ''}`);
    console.log(`   ${isHero ? '👑 VEREDITO: PROMOVIDA A CAPA PRINCIPAL (Hero)' : '📰 VEREDITO: alocada no Feed Geral de Destaques'} — ${veredito.motivo}.`);
  } else {
    // Sem capa no acervo a home não fica sem rosto (feedPolicy cai em list[0]), mas
    // fica sem selo de Destaque. Image não medida não vira rosto do site aqui tampoco,
    // e rascunho sem IA jamais abre a cara da revista. Sem capa vigente este é o único
    // lugar onde a trava de afirmação existe, então ela é repetida aqui de propósito.
    isHero = cover.audited && !floorDraft && !custamCapa.length && finalScore >= MIN_HERO_PRESTIGE_SCORE;
    if (!isHero && custamCapa.length) {
      console.warn(`🛡️  [Capa] Manchete com afirmação sem fonte (${custamCapa.slice(0, 3).join(', ')}): matéria publicada no feed, sem abrir a revista.`);
    }
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
    // O selo é o ÚNICO sinal que sobrevive à home Supabase-first (o payload do banco não
    // leva engineSource), então é aqui que o leitor descobre que a matéria não passou por
    // modelo nenhum. Rascunho de piso nunca é capa, por isso a checagem vem antes.
    badge: floorDraft
      ? FLOOR_DRAFT_BADGE
      : (isHero ? 'DESTAQUE MUNDIAL' : (articleData.badge || 'EDITORIAL VIP')),
    date: formattedDate,
    readTime: articleData.readTime || '5 min de leitura',
    read_time: articleData.readTime || '5 min de leitura',
    image: cover.url,
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
    engineSource: articleData.engineSource || 'desconhecido',
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

    // O veredito de capa é calculado ANTES do intervalo mínimo. Os alarmes de capa
    // ficam a 1h30–1h50 um do outro: um gate de 2h acima dessa decisão mataria
    // justamente as duas coroações do dia, que são o objetivo da mudança.
    const cicloDeCapa = await coverIsDue(supabaseClient);

    // Intervalo mínimo entre publicações (0 = desativado)
    if (MIN_PUBLICATION_INTERVAL_HOURS > 0 && meta.latestPublishedAt && !cicloDeCapa) {
      const elapsedHours = (Date.now() - meta.latestPublishedAt) / 3_600_000;
      if (elapsedHours < MIN_PUBLICATION_INTERVAL_HOURS) {
        announceNoPublication(`intervalo mínimo de ${MIN_PUBLICATION_INTERVAL_HOURS}h não atingido (última publicação há ${elapsedHours.toFixed(1)}h)`);
        return null;
      }
    }

    const queueBruta = readRetryQueue();
    const { candidates, duplicateKeys, expiredKeys, rejectedKeys = [] } = buildCandidatePool(meta);

    // A fila é lida de um arquivo e o veredito das pautas de outro. Sem este crivo,
    // uma pauta queimada ('rejected') continuava sendo escrita pelo slot de retry e,
    // se saísse limpa, era publicada com o rótulo desligado.
    const statusNoPool = new Map(INITIAL_HOT_PAUTAS
      .filter(p => p && p.id && p.status)
      .map(p => [p.id, p.status]));
    const planejamento = planejarTentativas(queueBruta, candidates, statusNoPool);
    const { expurgada } = planejamento;
    if (expurgada.length) {
      console.warn(`🧹 [Retry Queue] ${expurgada.length} item(ns) expurgado(s): a pauta já tem veredito no pool.`);
      writeRetryQueue(planeamento.viva);
    }

    duplicateKeys.forEach(key => statusUpdates.set(key, 'duplicate'));
    expiredKeys.forEach(key => statusUpdates.set(key, 'expired'));
    rejectedKeys.forEach(key => statusUpdates.set(key, 'rejected'));

    // O pool já vem ordenado por nota e as duas listas conservam a ordem delas: em
    // ciclo de capa a melhor pauta escrita PRIMEIRO é a que vira a cara do site, e a
    // fila de retry (nota menor) não pode furar essa fila. Fora de ciclo de capa a
    // fila passa na frente, porque regenerar o que já falhou vale mais que estrear
    // uma pauta nova.
    const attempts = cicloDeCapa
      ? [...planejamento.frescas, ...planejamento.emFila]
      : [...planejamento.emFila, ...planejamento.frescas];

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
    let frescasBloqueadas = false;

    // Devolver a matéria é barato; perder a pauta é caro — e o contrário também é
    // verdade: uma pauta que devolve todo ciclo come uma geração por alarme até o TTL.
    // A contagem por ciclo não fechava isso (só chegava a 2 quando a pauta ocupava os
    // dois slots do mesmo turno), então o total vive no arquivo da fila. AQUI só conta
    // a devolução de texto: queda de IA não é evidência sobre a pauta.
    const devolver = (candidato, fromQueue, pauta) => {
      if (!fromQueue) enqueueForRegeneration(candidato, pauta);
      const { vezes, queimada } = registrarDevolucao(candidato.key);
      if (queimada) {
        statusUpdates.set(candidato.key, 'rejected');
        console.warn(`⚠️ [Devolução] Pauta ${candidato.key} queimada após ${vezes} devoluções de texto: sai da oferta e da fila.`);
      } else {
        console.warn(`🔁 [Devolução] ${vezes}/${TETO_DE_DEVOLUCAO} da pauta ${candidato.key}; regenerada no próximo ciclo.`);
      }
    };

    for (const attempt of attempts) {
      const { candidate, fromQueue, queueItem } = attempt;
      if (frescasBloqueadas && !fromQueue) continue;
      console.log(`\n🖋️  [Redação] Tentando ${fromQueue ? 'fila de retry' : 'candidata fresca'}: "${candidate.hook.slice(0, 70)}..."`);

      let articleData;
      const pautaEntregue = candidate.promptInput || promptForCandidate(candidate);
      try {
        articleData = await generateLuxuryArticle(pautaEntregue, {
          authorSlug: candidate.authorSlug
        });
      } catch (err) {
        console.warn(`⚠️ [Redação] Falha ao gerar matéria: ${err.message}`);
        articleData = { needsRegeneration: true, generationStatus: 'error' };
      }
      generatedAttempts += 1;

      const semIA = articleData.needsRegeneration
        || articleData.generationStatus === 'fallback_pending'
        || articleData.generationStatus === 'error';

      // O sintetizador determinístico redige a matéria inteira sem nenhuma IA. Descartá-la
      // deixava o site sem publicação em todo apagão do Gemini tendo texto pronto em mãos.
      const temPisoPublicável = articleData.engineSource === 'local-synthesizer'
        && Array.isArray(articleData.contentParagraphs)
        && articleData.contentParagraphs.length >= 4;

      if (semIA && temPisoPublicável) {
        // Trava explícita de capa: baixar a nota não bastava, porque finalScore é
        // Math.max(nota do rascunho, nota da pauta) e a pauta (82–85) atropelava o rascunho.
        articleData.floorDraft = true;
        console.warn('🩹 [Piso] IA indisponível: publicando o texto determinístico no feed, sem disputar a capa.');
      } else if (semIA) {
        if (fromQueue) {
          registerQueueFailure(queueItem);
          continue;
        }
        enqueueForRegeneration(candidate, promptForCandidate(candidate));
        console.warn('⚠️ Gemini indisponível: pauta enfileirada para regeneração. Encerrando as tentativas frescas deste ciclo.');
        frescasBloqueadas = true;
        continue;
      }

      const semTraducao = mancheteSemTraducao(articleData);
      if (semTraducao) {
        console.warn(`🛑 [Idioma] Manchete na língua da fonte: "${semTraducao.slice(0, 58)}…". Devolvida para regeneração.`);
        devolver(candidate, fromQueue, promptForCandidate(candidate));
        continue;
      }

      // Comparado com exatamente o texto entregue ao modelo (hook + contexto + fonte).
      // Contra qualquer outra coisa nasceria suspeita onde a pauta até dizia o fato.
      const suspeitas = medirAfirmacoesSemFonte({
        title: articleData.title,
        excerpt: articleData.excerpt,
        corpo: articleData.contentParagraphs,
        fonte: pautaEntregue
      });
      // O piso determinístico fica fora desta trava: é boilerplate nosso, revisado à mão,
      // já selado como 'REDIGIDA SEM IA' e nunca abre a revista. Devolvê-lo deixaria o site
      // sem publicação justamente no apagão de IA — a única situação para a qual ele existe.
      // O que a régua não sabe julgar vai para o log em vez de para a tesoura: é a lista
      // que um editor humano leria antes de assinar a capa.
      const anotados = suspeitas.filter(a => a.tipo === 'anotado').map(a => a.termo);
      if (anotados.length) {
        console.log(`📝 [Fonte] Nomes próprios fora da pauta (sem juízo da régua, sem custo de capa): ${anotados.slice(0, 6).join(', ')}`);
      }
      const inventados = articleData.floorDraft ? null : fatosInventadosSuspeitas(suspeitas);
      if (inventados) {
        console.warn(`🛑 [Fonte] Matéria devolvida: a manchete afirma ${inventados.slice(0, 4).join(', ')} e nada disso está na pauta.`);
        devolver(candidate, fromQueue, pautaEntregue);
        continue;
      }

      const conflict = findPublicationConflict(articleData, candidate, meta);
      if (conflict) {
        console.warn(`🛑 [Bloqueio Editorial] Matéria abortada: ${conflict}.`);
        if (candidate.key) statusUpdates.set(candidate.key, 'duplicate');
        if (fromQueue) removeFromRetryQueue(candidate.key);
        continue;
      }
      console.log('✅ [Auditoria Aprovada] Nenhuma colisão com o acervo, arquivo permanente ou Capa.');

      published = await publishArticle(articleData, candidate, meta, supabaseClient, suspeitas);

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

// Só executa quando chamado como script. Sem essa trava, importar o módulo para
// testar a regra da capa dispararia uma publicação real (Gemini + gravação em main).
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runPublicationCycle();
} else if (process.env.GITHUB_ACTIONS) {
  // Modo de falha a evitar: job verde sem publicação porque o loader não reconheceu
  // o caminho do script (symlink no runner). Sem isto, o passo morre calado.
  console.warn('::warning::autonomousCrawler.js foi carregado como biblioteca; nenhum ciclo executado.');
}
