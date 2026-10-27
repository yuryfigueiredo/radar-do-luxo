/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — ROBÔ EDITORIAL AUTÔNOMO & PUBLICADOR POR COMANDO
 * ==============================================================================
 * Executa sob demanda via comando CLI ou agendamento cron (GitHub Actions):
 *   npm run publish:now   OU   npm run crawl
 *
 * 1. Consome exclusivamente o acervo curado (INITIAL_HOT_PAUTAS), produzido
 *    pelo workflow de Scout antes deste ciclo.
 * 2. Avalia TODAS as pautas não publicadas e calcula a NOTA GERAL (rankingScore).
 * 3. Seleciona estritamente a pauta de MAIOR NOTA GERAL.
 * 4. Redige o ensaio com a persona oficial correspondente (Henrique, Gabriel, Clara)
 *    aplicando engenharia anti-detecção, burstiness e ficha técnica.
 * 5. Avalia Gravidade da Capa (decadência temporal de meia-vida de 24h):
 *    Se o score superar o peso da capa atual, é promovida a CAPA PRINCIPAL (Hero 👑).
 * 6. Grava no Supabase (se configurado) E no acervo oficial (mockData.js / localStorage),
 *    deixando a matéria instantaneamente disponível no site tanto em dev quanto em prod.
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { generateLuxuryArticle } from '../src/services/aiArticleGenerator.js';
import { INITIAL_HOT_PAUTAS } from '../src/data/hotFeedsData.js';
import { calculateEditorialScore, calculateCapaWeight } from '../src/services/rankingEngine.js';
import { ARTICLES, FILMSTRIP_ITEMS } from '../src/data/mockData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const retryQueuePath = path.join(rootDir, 'src', 'data', 'editorialRetryQueue.js');

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

console.log('💎 ==============================================================================');
console.log('💎 RADAR DO LUXO — PUBLICADOR AUTÔNOMO DE ALTA PERFORMANCE EDITORIAL');
console.log('💎 ==============================================================================');
console.log('⏰ Horário UTC:', new Date().toISOString());
console.log('📡 Supabase:', SUPABASE_URL ? `Ativo (${SUPABASE_URL.substring(0, 24)}...)` : 'Modo Local Primário (mockData.js)');
console.log('🤖 Motor de Redação:', GEMINI_API_KEY ? 'Google Gemini Flash Ativo' : 'Sintetizador Semântico Homologado');

/**
 * 1. Coleta metadados de artigos já publicados para evitar rigorosamente qualquer duplicidade
 */
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
  return common.length >= 3;
}

function readRetryQueue() {
  if (!fs.existsSync(retryQueuePath)) return [];
  const content = fs.readFileSync(retryQueuePath, 'utf8');
  const match = content.match(/export const EDITORIAL_RETRY_QUEUE = (\[[\s\S]*\]);/);
  if (!match) throw new Error('Fila de reprocessamento editorial inválida.');
  return JSON.parse(match[1]);
}

function writeRetryQueue(queue) {
  fs.writeFileSync(
    retryQueuePath,
    `export const EDITORIAL_RETRY_QUEUE = ${JSON.stringify(queue, null, 2)};\n`,
    'utf8'
  );
}

function enqueueForRegeneration(pauta, promptInput) {
  const queue = readRetryQueue();
  if (!queue.some(item => item.pautaId === pauta.id)) {
    queue.push({
      pautaId: pauta.id,
      promptInput,
      authorSlug: pauta.authorSlug,
      category: pauta.category,
      categorySlug: pauta.categorySlug,
      sourceUrl: pauta.sourceUrl,
      image: pauta.image,
      queuedAt: new Date().toISOString(),
      attempts: 1
    });
    writeRetryQueue(queue);
  }
}

async function getExistingArticlesMetadata(supabaseClient) {
  const existingSlugs = new Set();
  const existingTitles = [];
  const existingPhotoIds = new Set();
  const existingSourceUrls = new Set();
  const recentCategories = [];

  // Da base local mockData.js
  ARTICLES.forEach((a, idx) => {
    if (a.slug) existingSlugs.add(a.slug.toLowerCase().trim());
    if (a.title) existingTitles.push(a.title.toLowerCase().trim());
    const pid = getPhotoId(a.image);
    if (pid) existingPhotoIds.add(pid);
    if (a.sourceUrl) existingSourceUrls.add(a.sourceUrl.trim());
    if (idx < 5 && a.categorySlug) recentCategories.push(a.categorySlug);
  });

  // Do Supabase (se disponível)
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('articles').select('slug, title, image, category_slug').limit(200);
      if (error) throw error;
      if (data) {
        data.forEach((a, idx) => {
          if (a.slug) existingSlugs.add(a.slug.toLowerCase().trim());
          if (a.title) existingTitles.push(a.title.toLowerCase().trim());
          const pid = getPhotoId(a.image);
          if (pid) existingPhotoIds.add(pid);
          if (idx < 5 && a.category_slug) recentCategories.push(a.category_slug);
        });
      }
    } catch (e) {
      // Ignora erro de rede
    }
  }

  return { existingSlugs, existingTitles, existingPhotoIds, existingSourceUrls, recentCategories };
}

/**
 * 2. Seleciona rigorosamente a pauta com a MAIOR NOTA GERAL e DIVERSIDADE EDITORIAL
 */
async function selectHighestScoringPauta(supabaseClient) {
  const meta = await getExistingArticlesMetadata(supabaseClient);
  const candidates = [];

  // Coleta pautas do acervo curado INITIAL_HOT_PAUTAS
  console.log('📚 [Scout] Analisando pautas curadas de alto prestígio...');
  for (const pauta of INITIAL_HOT_PAUTAS) {
    if (pauta.status && pauta.status !== 'available') {
      continue;
    }
    const hookKey = (pauta.suggestedHook || '').toLowerCase().trim();
    const origKey = (pauta.originalTitle || '').toLowerCase().trim();
    const photoId = getPhotoId(pauta.suggestedImage);

    const hasExact = meta.existingSlugs.has(hookKey) || meta.existingSlugs.has(origKey);
    const hasPhoto = photoId && meta.existingPhotoIds.has(photoId);
    const hasTopic = meta.existingTitles.some(t => keywordsMatch(hookKey, t) || keywordsMatch(origKey, t));
    const hasUrl = pauta.sourceUrl && meta.existingSourceUrls.has(pauta.sourceUrl.trim());

    const isAlreadyPublished = hasExact || hasPhoto || hasTopic || hasUrl;

    if (!isAlreadyPublished) {
      let score = pauta.rankingScore || calculateEditorialScore({
        title: pauta.suggestedHook || pauta.originalTitle,
        specs: pauta.specsPreview || {},
        summary: pauta.summary
      }).totalScore;

      // Bônus de diversidade: Se a categoria não foi publicada recentemente, valoriza a alternância
      if (!meta.recentCategories.slice(0, 2).includes(pauta.categorySlug)) {
        score += 3;
      }

      candidates.push({
        sourceType: 'Curated Hot Feed',
        sourceName: pauta.source || 'Alta Curadoria',
        hook: pauta.suggestedHook || pauta.originalTitle,
        category: pauta.category,
        categorySlug: pauta.categorySlug,
        authorSlug: pauta.authorSlug,
        summary: pauta.summary,
        image: pauta.suggestedImage,
        specs: pauta.specsPreview || {},
        sourceUrl: pauta.sourceUrl,
        score: score,
        tier: score >= 94 ? 'S+' : (score >= 88 ? 'A' : 'B')
      });
    }
  }

  if (candidates.length === 0) {
    console.log('ℹ️ Nenhuma pauta inédita disponível neste ciclo.');
    return null;
  }

  const finalPool = candidates;

  // Ordena rigorosamente do MAIOR SCORE GERAL para o menor
  finalPool.sort((a, b) => b.score - a.score);

  console.log('\n📊 [LEADERBOARD EDITORIAL] Top 4 Pautas Qualificadas no Radar:');
  finalPool.slice(0, 4).forEach((c, idx) => {
    console.log(`   ${idx + 1}. [Score: ${c.score} pts | Tier ${c.tier}] ${c.hook.slice(0, 55)}... (${c.authorSlug})`);
  });

  const bestCandidate = finalPool[0];
  console.log(`\n🎯 [ESCOLHA DO MOTOR] Pauta Selecionada com Maior Nota Geral:`);
  console.log(`   Título: "${bestCandidate.hook}"`);
  console.log(`   Nota Geral: ${bestCandidate.score} / 100 pts`);
  console.log(`   Autor Atribuído: ${bestCandidate.authorSlug} | Categoria: ${bestCandidate.category}`);

  return bestCandidate;
}

/**
 * 3. Ciclo Principal de Execução
 */
async function runPublicationCycle() {
  try {
    let supabaseClient = null;
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
      } catch (err) {
        console.warn('⚠️ Falha ao instanciar Supabase:', err.message);
      }
    }

    // Atraso orgânico real sem travar a execução no GitHub Actions
    if (!process.env.CI_TEST_NO_DELAY) {
      const organicDelaySeconds = process.env.GITHUB_ACTIONS ? 5 : Math.floor(Math.random() * 20) + 5;
      console.log(`⏱️ Sincronizando pulso editorial com ateliês internacionais (+${organicDelaySeconds}s)...`);
      await new Promise(r => setTimeout(r, organicDelaySeconds * 1000));
    }

    // Seleciona a melhor pauta
    const retryQueue = readRetryQueue();
    const queuedPauta = retryQueue[0];
    const pauta = queuedPauta || await selectHighestScoringPauta(supabaseClient);
    if (!pauta) return null;

    // Redige a matéria com IA e persona
    console.log('\n🖋️  [Redação] Agente Escritor redigindo matéria com tom aristocrático e anti-detecção...');
    const promptInput = queuedPauta
      ? queuedPauta.promptInput
      : `${pauta.hook}\n\nContexto: ${pauta.summary || ''}\nFonte: ${pauta.sourceUrl || ''}`;
    const articleData = await generateLuxuryArticle(promptInput, {
      authorSlug: pauta.authorSlug
    });

    if (articleData.needsRegeneration || articleData.generationStatus === 'fallback_pending') {
      enqueueForRegeneration(pauta, promptInput);
      console.warn('⚠️ Gemini indisponível: matéria mantida na fila para regeneração posterior.');
      return null;
    }

    console.log(`✓ Ensaio Concluído: "${articleData.title}"`);
    console.log(`✓ Autor: ${articleData.authorName} (${articleData.authorSlug})`);
    
    // Garante que o score final seja consistente com a pauta e o motor
    const finalScore = Math.max(Number(articleData.rankingScore) || 94, pauta.score || 94);
    console.log(`✓ Nota Geral Consolidada: ${finalScore} pts | Badge: ${articleData.badge || 'EDITORIAL VIP'}`);

    const slug = articleData.slug || articleData.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // 🛡️ VERIFICAÇÃO EXTRA DE DUPLICIDADE (Site & Capa Atual)
    console.log('\n🛡️  [Auditoria Extra Anti-Duplicidade] Verificando se já existe matéria similar no site ou na Capa...');
    const candidatePhotoId = getPhotoId(pauta.image || articleData.image);
    const candidateTitle = (articleData.title || '').trim().toLowerCase();
    
    // 1. Verifica contra a Capa atual
    let currentHero = ARTICLES.find(a => a.isHero || a.is_hero);
    if (currentHero) {
      const heroPhotoId = getPhotoId(currentHero.image);
      const heroTitle = (currentHero.title || '').trim().toLowerCase();
      if ((candidatePhotoId && heroPhotoId && candidatePhotoId === heroPhotoId) || keywordsMatch(candidateTitle, heroTitle)) {
        console.warn(`🛑 [Bloqueio Editorial] Matéria abortada! Conflito temático/visual com a Capa vigente: "${currentHero.title}".`);
        console.log('🔄 O robô preserva a exclusividade da Capa e não publicará redundâncias.');
        return;
      }
    }

    // 2. Verifica contra todo o acervo do site
    const conflictArticle = ARTICLES.find(a => {
      const aPhotoId = getPhotoId(a.image);
      const aTitle = (a.title || '').trim().toLowerCase();
      return (candidatePhotoId && aPhotoId && candidatePhotoId === aPhotoId) || keywordsMatch(candidateTitle, aTitle);
    });

    if (conflictArticle) {
      console.warn(`🛑 [Bloqueio Editorial] Matéria abortada! Matéria similar já existente no site: "${conflictArticle.title}".`);
      console.log('🔄 O robô preserva o acervo limpo e não publicará redundâncias.');
      return;
    }
    console.log('✅ [Auditoria Aprovada] Nenhuma colisão com o acervo ou com a Capa.');

    // Jitter temporal para parecer orgânico (espalhamento em janela de até 15 minutos)
    const publishDate = new Date();
    const randomJitterMinutes = Math.floor(Math.random() * 15) + 1;
    publishDate.setMinutes(publishDate.getMinutes() - randomJitterMinutes);
    const publishedAt = publishDate.toISOString();
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    const articleId = `art-${slug.slice(0, 32)}-${Date.now().toString().slice(-4)}`;

    // Avaliação de Gravidade da Capa (Capa Weight Decay com Meia-Vida de 24h)
    let isHero = false;
    if (supabaseClient) {
      try {
        const { data: heroData } = await supabaseClient
          .from('articles')
          .select('*')
          .eq('is_hero', true)
          .single();
        if (heroData) currentHero = heroData;
      } catch (e) {
        // Fallback para currentHero local
      }
    }

    if (currentHero) {
      if (currentHero.is_pinned_hero || currentHero.isPinnedHero) {
        console.log('📌 A Capa atual está FIXADA MANUALMENTE pelo editor. Nova matéria publicada no Feed Geral.');
        isHero = false;
      } else {
        const capaAnalysis = calculateCapaWeight(currentHero);
        const currentHeroWeight = Math.round(capaAnalysis.currentWeight);
        const hoursElapsed = capaAnalysis.hoursElapsed;
        const heroBaseScore = capaAnalysis.baseScore;

        console.log(`\n⚖️  [Julgamento da Capa]:`);
        console.log(`   Capa Vigente: "${(currentHero.title || '').slice(0, 35)}..."`);
        console.log(`   Peso Atual da Capa Vigente: ${currentHeroWeight} pts (${hoursElapsed.toFixed(1)}h no ar, Base: ${heroBaseScore} pts)`);
        console.log(`   Nota da Nova Matéria: ${finalScore} pts`);

        if (finalScore >= 88 && finalScore > currentHeroWeight) {
          console.log('   👑 VEREDITO: Nova matéria superou a Capa atual! PROMOVIDA A CAPA PRINCIPAL (Hero).');
          isHero = true;
        } else {
          console.log('   📰 VEREDITO: Nova matéria alocada no Feed Geral de Destaques.');
          isHero = false;
        }
      }
    } else {
      isHero = finalScore >= 88;
    }

    // Monta o objeto completo do artigo compatível com DB e Frontend
    const newArticle = {
      id: articleId,
      slug,
      title: articleData.title,
      category: pauta.category || articleData.category,
      categorySlug: pauta.categorySlug || articleData.categorySlug,
      category_slug: pauta.categorySlug || articleData.categorySlug,
      authorSlug: pauta.authorSlug || articleData.authorSlug,
      author_slug: pauta.authorSlug || articleData.authorSlug,
      type: 'article',
      badge: isHero ? 'DESTAQUE MUNDIAL' : (articleData.badge || 'EDITORIAL VIP'),
      date: formattedDate,
      readTime: articleData.readTime || '5 min de leitura',
      read_time: articleData.readTime || '5 min de leitura',
      image: (pauta.image || articleData.image || '').replace('fit=crop', 'fit=max'),
      imageFocus: pauta.imageFocus || (pauta.categorySlug === 'supercarros' ? 'bottom' : 'center'),
      image_focus: pauta.imageFocus || (pauta.categorySlug === 'supercarros' ? 'bottom' : 'center'),
      excerpt: articleData.excerpt,
      contentParagraphs: articleData.contentParagraphs,
      content_paragraphs: articleData.contentParagraphs,
      specs: articleData.specs || pauta.specs || {},
      status: 'published',
      isHero: isHero,
      is_hero: isHero,
      isHeroSecondary: false,
      is_hero_secondary: false,
      isPinnedHero: false,
      is_pinned_hero: false,
      rankingScore: finalScore,
      ranking_score: finalScore,
      publishedAt: publishedAt,
      published_at: publishedAt,
      sourceUrl: pauta.sourceUrl,
      source_url: pauta.sourceUrl
    };

    // 4. Persistência Dual

    // A. Gravação no Supabase (se disponível)
    if (supabaseClient) {
      try {
        if (isHero) {
          await supabaseClient
            .from('articles')
            .update({ is_hero: false, is_hero_secondary: true })
            .eq('is_hero', true);
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
          console.log(`✅ [Supabase] Artigo persistido no banco de dados na nuvem.`);
        }
      } catch (err) {
        console.warn('⚠️ Supabase não respondeu:', err.message);
      }
    }

    // B. Gravação no Acervo Local (src/data/mockData.js)
    try {
      const mockDataPath = path.join(rootDir, 'src', 'data', 'mockData.js');
      const mockContent = fs.readFileSync(mockDataPath, 'utf-8');
      const articlesStartIdx = mockContent.indexOf('export const ARTICLES = [');

      if (articlesStartIdx !== -1) {
        const beforeArticles = mockContent.slice(0, articlesStartIdx);

        // Prepara a lista atualizada de artigos
        const updatedArticles = [...ARTICLES];
        if (isHero) {
          updatedArticles.forEach(a => {
            if (a.isHero || a.is_hero) {
              a.isHero = false;
              a.is_hero = false;
              a.isHeroSecondary = true;
              a.is_hero_secondary = true;
            }
          });
        }
        // Insere a nova matéria no topo
        updatedArticles.unshift(newArticle);

        // Limita a 25 artigos para manter performance excelente
        const trimmedArticles = updatedArticles.slice(0, 25);

        // Mantém FILMSTRIP atualizado com a novidade se for relevante
        const filmstripCode = `\nexport const FILMSTRIP_ITEMS = [
  {
    id: 'film-1',
    category: '${(newArticle.categorySlug || 'NEWS').toUpperCase()}',
    title: '${newArticle.title.replace(/'/g, "\\'").slice(0, 38)}...',
    image: '${newArticle.image}',
    tag: '${newArticle.badge}',
    slug: '${newArticle.slug}'
  },
  {
    id: 'film-2',
    category: 'HYPERCARS',
    title: 'Koenigsegg Jesko Absolut 1.600 cv',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=600',
    tag: 'RECORDE MUNDIAL',
    slug: 'koenigsegg-jesko-absolut-o-monstro-aerodinamico-de-1600-cv-que-esmagou-o-marco-0-400-0-kmh-em-2783-segundos-com-tolerancias-de-microns'
  },
  {
    id: 'film-3',
    category: 'HOROLOGY',
    title: 'F.P. Journe Chronomètre Bleu Tântalo',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    tag: 'OURO ROSA 18K',
    slug: 'fp-journe-chronometre-bleu-a-alquimia-do-tantalo-e-ouro-rosa-18k-que-redefiniu-a-alta-horologia-independente-com-listas-de-espera-de-sete-anos'
  },
  {
    id: 'film-4',
    category: 'VILLAS',
    title: 'Villa sa Caleta em Maiorca',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
    tag: 'TRAVERTINO NAVONA',
    slug: 'villa-sa-caleta-maiorca-o-refugio-brutalista-ancorado-em-rocha-calcaria-venda-privada-45m'
  },
  {
    id: 'film-5',
    category: 'CIRCUITO',
    title: 'GMA T.50s Niki Lauda 12.100 RPM',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    tag: 'COSWORTH V12',
    slug: 'gma-t50s-niki-lauda-o-bolido-de-pista-de-852-kg-com-turbina-de-vacuo-traseira-e-v12-cosworth-de-12100-rpm-que-resgata-a-era-de-ouro-do-automobilismo'
  },
  {
    id: 'film-6',
    category: 'WEALTH',
    title: 'Family Offices & Ouro Físico Suíço',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    tag: 'CAPITAL SOBERANO',
    slug: 'o-relatorio-reservado-de-family-offices-por-que-as-dinastias-globais-estao-trocando-ativos-digitais-por-ouro-fisico-em-bunkers-suicos'
  }
];\n`;

        const newArticlesCode = `export const ARTICLES = ${JSON.stringify(trimmedArticles, null, 2)};\n` + filmstripCode;
        fs.writeFileSync(mockDataPath, beforeArticles + newArticlesCode, 'utf-8');
        console.log(`✅ [mockData.js] Acervo atualizado com sucesso no disco! Total de matérias: ${trimmedArticles.length}.`);

        // Bumper de Versão para forçar atualização imediata do LocalStorage no navegador
        const radarServicePath = path.join(rootDir, 'src', 'services', 'radarService.js');
        if (fs.existsSync(radarServicePath)) {
          let serviceContent = fs.readFileSync(radarServicePath, 'utf-8');
          const newVersion = `v3.0_${Date.now()}`;
          serviceContent = serviceContent.replace(
            /export const CURRENT_CONTENT_VERSION = ['"][^'"]+['"];/,
            `export const CURRENT_CONTENT_VERSION = '${newVersion}';`
          );
          fs.writeFileSync(radarServicePath, serviceContent, 'utf-8');
          console.log(`⚡ [Cache Bumper] Versão de conteúdo atualizada para '${newVersion}'.`);
        }

        if (queuedPauta) {
          writeRetryQueue(retryQueue.filter(item => item.pautaId !== queuedPauta.pautaId));
          console.log('✅ [Retry Queue] Pauta regenerada com Gemini e removida da fila.');
        }
      } else {
        throw new Error('Marcador ARTICLES não encontrado em mockData.js');
      }
    } catch (fsErr) {
      console.error('❌ Erro ao atualizar arquivos locais:', fsErr.message);
      throw fsErr;
    }

    console.log('\n==============================================================================');
    console.log(`🎉 MATÉRIA PUBLICADA COM SUCESSO!`);
    console.log(`📌 Título: "${newArticle.title}"`);
    console.log(`🏆 Posição: ${isHero ? '👑 CAPA PRINCIPAL (Hero)' : '📰 Feed Geral de Destaques'}`);
    console.log(`⭐ Pontuação Editorial: ${newArticle.rankingScore} / 100 pts`);
    console.log(`🔗 Slug: /artigo/${newArticle.slug}`);
    console.log('==============================================================================\n');

    return newArticle;
  } catch (err) {
    console.error('❌ Erro no ciclo de publicação:', err.message || err);
    process.exitCode = 1;
    return null;
  }
}

runPublicationCycle();
