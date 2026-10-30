import { supabase, isSupabaseConfigured } from '../lib/supabase.js';
import { ARTICLES, AUTHORS, WEEKLY_DROPS } from '../data/mockData.js';
import { INITIAL_HOT_PAUTAS } from '../data/hotFeedsData.js';
import { calculateEditorialScore, calculateCapaWeight } from './rankingEngine.js';

const LOCAL_STORAGE_ARTICLES_KEY = 'radar_custom_articles';
const LOCAL_STORAGE_DROPS_KEY = 'radar_custom_drops';
const LOCAL_STORAGE_SUBSCRIBERS_KEY = 'radar_newsletter_subscribers';
const LOCAL_STORAGE_CONCIERGE_KEY = 'radar_concierge_inquiries';
const LOCAL_STORAGE_VERSION_KEY = 'radar_content_version';
export const CURRENT_CONTENT_VERSION = 'v3.0_1793378568361';

function slugifyArticlePart(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function getHotPautaFallback(slug) {
  const requestedSlug = slugifyArticlePart(slug).replace(/-\d{4}$/, '');
  const pauta = INITIAL_HOT_PAUTAS.find(item => {
    const candidates = [item.suggestedHook, item.originalTitle]
      .filter(Boolean)
      .map(slugifyArticlePart)
      .map(value => value.replace(/-\d{4}$/, ''));
    return candidates.some(candidate => {
      if (
        candidate === requestedSlug ||
        requestedSlug.startsWith(`${candidate}-`) ||
        candidate.startsWith(`${requestedSlug}-`)
      ) {
        return true;
      }

      const requestedTokens = new Set(requestedSlug.split('-').filter(token => token.length >= 4));
      const sharedTokens = candidate
        .split('-')
        .filter(token => token.length >= 4 && requestedTokens.has(token));
      return sharedTokens.length >= 4;
    });
  });

  if (!pauta) return null;

  const contentParagraphs = [
    pauta.summary,
    `O projeto combina ${pauta.specsPreview?.comprimento || 'escala oceânica'} com uma proposta de permanência no mar, aproximando arquitetura naval, autonomia e conforto sem transformar a embarcação em um catálogo de excessos.`,
    `A assinatura da ${pauta.specsPreview?.estaleiro || pauta.source || 'equipe responsável'} aparece na relação entre desenho, eficiência e uso prolongado. A pauta interessa menos pelo tamanho isolado do que pelas decisões que tornam possível viver e circular a bordo por longos períodos.`,
    `O Radar acompanha o desenvolvimento porque o projeto reúne engenharia, design e novos modos de habitar o oceano — um recorte editorial que merece contexto antes de qualquer promessa de exclusividade.`
  ].filter(Boolean);

  return {
    id: `fallback-${pauta.id}`,
    slug,
    title: pauta.suggestedHook || pauta.originalTitle,
    excerpt: pauta.summary,
    contentParagraphs,
    image: pauta.suggestedImage,
    category: pauta.category,
    categorySlug: pauta.categorySlug,
    type: 'article',
    badge: 'PAUTA DO RADAR',
    authorSlug: pauta.authorSlug || 'gabriel-fontes',
    date: pauta.publishedTime || 'Atualização editorial',
    readTime: '4 min de leitura',
    specs: pauta.specsPreview || {},
    sourceUrl: pauta.sourceUrl,
    status: 'published',
    imageFocus: 'center'
  };
}

/**
 * Helper to get locally stored articles
 */
function getLocalArticles() {
  try {
    const currentVersion = localStorage.getItem(LOCAL_STORAGE_VERSION_KEY);
    const saved = localStorage.getItem(LOCAL_STORAGE_ARTICLES_KEY);

    // Se a versão de conteúdo mudou OU se o acervo local está ausente
    if (currentVersion !== CURRENT_CONTENT_VERSION || !saved) {
      let userCreated = [];
      if (saved) {
        try {
          const list = JSON.parse(saved);
          // Preserva apenas matérias criadas manualmente pelo usuário via painel
          userCreated = list.filter(a => a.isUserCreated === true || a.id?.startsWith('user-created-') || a.id?.startsWith('art-') || a.placement || a.isHero);
        } catch (e) {
          userCreated = [];
        }
      }
      const refreshedList = [...userCreated, ...ARTICLES];
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(refreshedList));
      localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, CURRENT_CONTENT_VERSION);
      return refreshedList;
    }

    let list = JSON.parse(saved);

    // 🛡️ DEDUPLICAÇÃO RIGOROSA EM TEMPO REAL (Por Foto, Slug, Título e ID)
    const getPhotoIdHelper = (url) => {
      if (!url) return '';
      const m = url.match(/photo-[a-z0-9\-]+/i);
      return m ? m[0] : '';
    };

    const seenIds = new Set();
    const seenSlugs = new Set();
    const seenPhotoIds = new Set();
    const cleanList = [];

    for (const art of list) {
      if (!art) continue;
      const idKey = (art.id || '').trim();
      const slugKey = (art.slug || '').trim().toLowerCase();
      const photoId = getPhotoIdHelper(art.image);

      if (idKey && seenIds.has(idKey)) continue;
      if (slugKey && seenSlugs.has(slugKey)) continue;
      if (photoId && seenPhotoIds.has(photoId)) continue;

      if (idKey) seenIds.add(idKey);
      if (slugKey) seenSlugs.add(slugKey);
      if (photoId) seenPhotoIds.add(photoId);

      cleanList.push(art);
    }

    if (cleanList.length !== list.length) {
      console.log('🧹 Auto-removidas ' + (list.length - cleanList.length) + ' matérias duplicadas do armazenamento local.');
      list = cleanList;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(cleanList));
    }

    // Verificação de integridade: se a lista local estiver sem os artigos homologados vigentes
    const containsLeadingHomologated = list.some(a => a.slug === ARTICLES[0]?.slug);
    if (!containsLeadingHomologated) {
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(ARTICLES));
      localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, CURRENT_CONTENT_VERSION);
      return ARTICLES;
    }

    // Auto-sanitiza artigos de bilionários/Forbes e calcula rankingScore se ausente
    list = list.map(a => {
      const isBillionaire = (a.title && (a.title.toLowerCase().includes('bilion') || a.title.toLowerCase().includes('forbes'))) || 
                           (a.slug && (a.slug.toLowerCase().includes('bilion') || a.slug.toLowerCase().includes('forbes')));
      let updated = { ...a };
      if (!updated.rankingScore) {
        updated.rankingScore = calculateEditorialScore(updated).totalScore;
      }
      if (updated.image && updated.image.includes('unsplash.com') && updated.image.includes('fit=crop')) {
        updated.image = updated.image.replace('fit=crop', 'fit=max');
      }
      if (!updated.imageFocus) {
        updated.imageFocus = updated.categorySlug === 'supercarros' ? 'bottom' : 'center';
      }
      if (isBillionaire) {
        updated = {
          ...updated,
          authorSlug: 'henrique-vianna',
          author_slug: 'henrique-vianna',
          category: 'Arquitetura',
          categorySlug: 'arquitetura',
          category_slug: 'arquitetura'
        };
      }
      return updated;
    });
    return list;
  } catch (e) {
    return ARTICLES;
  }
}

/**
 * Restaura o acervo para o conjunto homologado equilibrado original
 */
export function purgeDuplicatesAndRestore() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_ARTICLES_KEY);
    localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, CURRENT_CONTENT_VERSION);
    window.dispatchEvent(new CustomEvent('radar-data-changed', { detail: { action: 'purge' } }));
    return ARTICLES;
  } catch (e) {
    return ARTICLES;
  }
}

export function resetToHomologatedArticles() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_ARTICLES_KEY);
    window.dispatchEvent(new CustomEvent('radar-data-changed', { detail: { action: 'reset' } }));
    return ARTICLES;
  } catch (e) {
    return ARTICLES;
  }
}

/**
 * Helper to get locally stored drops
 */
function getLocalDrops() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_DROPS_KEY);
    return saved ? JSON.parse(saved) : WEEKLY_DROPS;
  } catch (e) {
    return WEEKLY_DROPS;
  }
}

/**
 * ============================================================================
 * 1. ARTIGOS & MATÉRIAS
 * ============================================================================
 */

export async function fetchArticles(categorySlug = null) {
  if (isSupabaseConfigured && supabase) {
    try {
      let query = supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (categorySlug && categorySlug !== 'todos') {
        query = query.eq('category_slug', categorySlug);
      }

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        // Map database columns to app schema
        return data.map(item => ({
          ...item,
          categorySlug: item.category_slug,
          authorSlug: item.author_slug,
          readTime: item.read_time,
          isHero: item.is_hero,
          isHeroSecondary: item.is_hero_secondary,
          contentParagraphs: item.content_paragraphs || [],
          inArticleDrop: item.in_article_drop,
          videoUrl: item.video_url,
          videoDuration: item.video_duration
        }));
      }
    } catch (err) {
      console.warn('Falha na consulta ao Supabase, alternando para local:', err);
    }
  }

  // Fallback to local storage / mock
  const articles = getLocalArticles();
  if (categorySlug && categorySlug !== 'todos') {
    return articles.filter(a => a.categorySlug === categorySlug);
  }
  return articles;
}

export async function fetchArticleBySlug(slug) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && data) {
        let cleanImage = data.image || '';
        if (cleanImage.includes('unsplash.com') && cleanImage.includes('fit=crop')) {
          cleanImage = cleanImage.replace('fit=crop', 'fit=max');
        }
        return {
          ...data,
          image: cleanImage,
          imageFocus: data.image_focus || (data.category_slug === 'supercarros' ? 'bottom' : 'center'),
          categorySlug: data.category_slug,
          authorSlug: data.author_slug,
          readTime: data.read_time,
          isHero: data.is_hero,
          isHeroSecondary: data.is_hero_secondary,
          contentParagraphs: data.content_paragraphs || [],
          inArticleDrop: data.in_article_drop,
          videoUrl: data.video_url,
          videoDuration: data.video_duration
        };
      }
    } catch (err) {
      console.warn('Falha na consulta ao Supabase, alternando para local:', err);
    }
  }

  // Fallback
  const articles = getLocalArticles();
  const found = articles.find(a => a.slug === slug);
  if (found) {
    let cleanImage = found.image || '';
    if (cleanImage.includes('unsplash.com') && cleanImage.includes('fit=crop')) {
      cleanImage = cleanImage.replace('fit=crop', 'fit=max');
    }
    return {
      ...found,
      image: cleanImage,
      imageFocus: found.imageFocus || (found.categorySlug === 'supercarros' ? 'bottom' : 'center')
    };
  }

  // Permite abrir links gerados pelo scout enquanto a persistência definitiva
  // no Supabase ou no acervo versionado ainda está sendo concluída.
  return getHotPautaFallback(slug);
}

/**
 * 🛡️ AUDITORIA EXTRA ANTI-DUPLICIDADE
 * Verifica rigorosamente se uma matéria já existe no acervo ou na Capa (Hero)
 * antes de permitir a publicação, analisando:
 * 1. Imagem idêntica (ID Unsplash)
 * 2. Slug ou Título idêntico
 * 3. Colisão temática por palavras-chave (2+ termos substantivos)
 * 4. Colisão direta com a Capa vigente
 */
export function checkArticleDuplicate(candidate, existingArticles = [], currentCapa = null) {
  if (!candidate) return { isDuplicate: false, severity: 'none', reason: '', matchedArticle: null, isCapaCollision: false };

  const getPhotoId = (url) => {
    if (!url) return '';
    const m = url.match(/photo-[a-z0-9\-]+/i);
    return m ? m[0] : '';
  };

  const extractKeywords = (text) => {
    if (!text) return [];
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 5 && !['sobre', 'contra', 'entre', 'pelos', 'pelas', 'muito', 'muita', 'todos', 'todas', 'quando', 'como', 'mais', 'para', 'sendo', 'estao', 'desta'].includes(w));
  };

  const candidatePhotoId = getPhotoId(candidate.image);
  const candidateTitle = (candidate.title || '').trim().toLowerCase();
  const candidateSlug = (candidate.slug || '').trim().toLowerCase();
  const candidateKeywords = extractKeywords(candidateTitle + ' ' + candidateSlug);

  const activeCapa = currentCapa || existingArticles.find(a => a && (a.isHero || a.is_hero));

  // 1. Verificação prioritária com a Capa atual
  if (activeCapa && activeCapa.id !== candidate.id) {
    const capaPhotoId = getPhotoId(activeCapa.image);
    const capaTitle = (activeCapa.title || '').trim().toLowerCase();
    const capaKeywords = extractKeywords(capaTitle);

    if (candidatePhotoId && capaPhotoId && candidatePhotoId === capaPhotoId) {
      return {
        isDuplicate: true,
        severity: 'critical',
        reason: 'Foto idêntica à matéria da Capa Principal',
        matchedArticle: activeCapa,
        isCapaCollision: true
      };
    }

    if (candidateTitle === capaTitle) {
      return {
        isDuplicate: true,
        severity: 'critical',
        reason: 'Título idêntico à matéria da Capa Principal',
        matchedArticle: activeCapa,
        isCapaCollision: true
      };
    }

    const commonCapaKeywords = candidateKeywords.filter(k => capaKeywords.includes(k));
    if (commonCapaKeywords.length >= 2) {
      return {
        isDuplicate: true,
        severity: 'warning',
        reason: `Tema muito semelhante à Capa atual (Termos: ${commonCapaKeywords.join(', ')})`,
        matchedArticle: activeCapa,
        isCapaCollision: true
      };
    }
  }

  // 2. Verificação com o acervo completo do site
  for (const existing of existingArticles) {
    if (!existing || existing.id === candidate.id) continue;

    const existingPhotoId = getPhotoId(existing.image);
    const existingTitle = (existing.title || '').trim().toLowerCase();
    const existingSlug = (existing.slug || '').trim().toLowerCase();

    // Mesma foto
    if (candidatePhotoId && existingPhotoId && candidatePhotoId === existingPhotoId) {
      return {
        isDuplicate: true,
        severity: 'critical',
        reason: 'Mesma imagem já em uso no acervo',
        matchedArticle: existing,
        isCapaCollision: false
      };
    }

    // Mesmo slug ou título exato
    if ((candidateSlug && existingSlug && candidateSlug === existingSlug) || (candidateTitle && existingTitle && candidateTitle === existingTitle)) {
      return {
        isDuplicate: true,
        severity: 'critical',
        reason: 'Título ou slug idêntico a outra matéria do site',
        matchedArticle: existing,
        isCapaCollision: false
      };
    }

    // Sobreposição temática (2+ palavras-chave significativas)
    const existingKeywords = extractKeywords(existingTitle + ' ' + existingSlug);
    const commonKeywords = candidateKeywords.filter(k => existingKeywords.includes(k));
    if (commonKeywords.length >= 2) {
      return {
        isDuplicate: true,
        severity: 'warning',
        reason: `Tema coincidente com matéria já publicada (Termos: ${commonKeywords.join(', ')})`,
        matchedArticle: existing,
        isCapaCollision: false
      };
    }
  }

  return { isDuplicate: false, severity: 'none', reason: '', matchedArticle: null, isCapaCollision: false };
}

export async function saveArticle(articleData) {
  const id = articleData.id || `art-${Date.now()}`;
  const slug = articleData.slug || articleData.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  // Trata posicionamento granular: 'hero', 'feed', 'pin', 'draft'
  let isHero = Boolean(articleData.isHero);
  let isHeroSecondary = Boolean(articleData.isHeroSecondary);
  let isPinnedHero = Boolean(articleData.isPinnedHero);
  let status = articleData.status || 'published';

  if (articleData.placement === 'feed') {
    isHero = false;
    isHeroSecondary = false;
    isPinnedHero = false;
    status = 'published';
  } else if (articleData.placement === 'hero') {
    isHero = true;
    status = 'published';
  } else if (articleData.placement === 'pin') {
    isHero = true;
    isPinnedHero = true;
    status = 'published';
  } else if (articleData.placement === 'draft') {
    status = 'draft';
    isHero = false;
    isPinnedHero = false;
  }

  // Calcula ou herda o ranking editorial
  const scoreInfo = calculateEditorialScore(articleData);
  const rankingScore = articleData.rankingScore || scoreInfo.totalScore;
  const publishedAt = articleData.publishedAt || (status === 'published' ? new Date().toISOString() : null);

  const formattedArticle = {
    id,
    slug,
    title: articleData.title,
    excerpt: articleData.excerpt,
    content_paragraphs: articleData.contentParagraphs || [],
    image: articleData.image || 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
    category: articleData.category || 'Supercarros',
    category_slug: articleData.categorySlug || 'supercarros',
    type: articleData.type || 'article',
    badge: articleData.badge || 'EDITORIAL VIP',
    author_slug: articleData.authorSlug || 'henrique-vianna',
    date: articleData.date || new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    read_time: articleData.readTime || '5 min de leitura',
    is_hero: isHero,
    is_hero_secondary: isHeroSecondary,
    is_pinned_hero: isPinnedHero,
    ranking_score: rankingScore,
    published_at: publishedAt,
    specs: articleData.specs || {},
    in_article_drop: articleData.inArticleDrop || null,
    video_url: articleData.videoUrl || null,
    video_duration: articleData.videoDuration || null,
    status
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .upsert(formattedArticle, { onConflict: 'slug' })
        .select()
        .single();

      if (error) throw error;
      return { success: true, article: data };
    } catch (err) {
      console.error('Erro ao salvar no Supabase:', err);
      // Fallback to local
    }
  }

  // Local storage persistence
  const articles = getLocalArticles();
  const clientArticle = {
    ...formattedArticle,
    categorySlug: formattedArticle.category_slug,
    authorSlug: formattedArticle.author_slug,
    readTime: formattedArticle.read_time,
    isHero: formattedArticle.is_hero,
    isHeroSecondary: formattedArticle.is_hero_secondary,
    isPinnedHero: formattedArticle.is_pinned_hero,
    rankingScore: formattedArticle.ranking_score,
    publishedAt: formattedArticle.published_at,
    contentParagraphs: formattedArticle.content_paragraphs,
    inArticleDrop: formattedArticle.in_article_drop,
    videoUrl: formattedArticle.video_url,
    videoDuration: formattedArticle.video_duration
  };

  const getPhotoIdSave = (url) => {
    if (!url) return '';
    const m = url.match(/photo-[a-z0-9\-]+/i);
    return m ? m[0] : '';
  };

  const existingIndex = articles.findIndex(a => {
    if (a.id === id || a.slug === slug) return true;
    if (a.title && clientArticle.title && a.title.toLowerCase().trim() === clientArticle.title.toLowerCase().trim()) return true;
    return false;
  });
  let updatedArticles;
  if (existingIndex >= 0) {
    updatedArticles = [...articles];
    updatedArticles[existingIndex] = clientArticle;
  } else {
    updatedArticles = [clientArticle, ...articles];
  }

  // Se este artigo for marcado como Hero (Destaque Principal), desmarque os anteriores
  if (clientArticle.isHero) {
    updatedArticles = updatedArticles.map(a => {
      if (a.id !== clientArticle.id && a.slug !== clientArticle.slug) {
        return a.isHero ? { ...a, isHero: false, isHeroSecondary: true, isPinnedHero: false } : a;
      }
      return a;
    });
  }

  try {
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(updatedArticles));
    window.dispatchEvent(new Event('radar-data-changed'));
  } catch (e) {
    console.error(e);
  }

  return { success: true, article: clientArticle };
}

/**
 * Promove uma matéria imediatamente para Destaque Principal da Capa
 */
export async function promoteToHero(articleId) {
  const articles = getLocalArticles();
  const updatedArticles = articles.map(a => {
    if (a.id === articleId) {
      return { ...a, isHero: true, status: 'published' };
    }
    return a.isHero ? { ...a, isHero: false, isHeroSecondary: true, isPinnedHero: false } : a;
  });
  try {
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(updatedArticles));
    window.dispatchEvent(new Event('radar-data-changed'));
    return { success: true };
  } catch (e) {
    return { success: false, error: e };
  }
}

/**
 * Alterna a fixação manual da Capa (Pin)
 */
export async function togglePinHero(articleId) {
  const articles = getLocalArticles();
  const target = articles.find(a => a.id === articleId);
  const willPin = !target?.isPinnedHero;

  const updatedArticles = articles.map(a => {
    if (a.id === articleId) {
      return {
        ...a,
        isPinnedHero: willPin,
        isHero: willPin ? true : a.isHero
      };
    }
    // Se fixou este, garante que outros percam o pin
    return willPin ? { ...a, isPinnedHero: false } : a;
  });

  try {
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(updatedArticles));
    window.dispatchEvent(new Event('radar-data-changed'));
    return { success: true, isPinned: willPin };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function deleteArticle(articleId) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);
      if (error) throw error;
    } catch (err) {
      console.error('Erro ao deletar no Supabase:', err);
    }
  }

  // Update local storage
  const articles = getLocalArticles().filter(a => a.id !== articleId);
  try {
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error(e);
  }

  return { success: true };
}

/**
 * ============================================================================
 * 2. DROPS DA SEMANA & COTAÇÕES RÁPIDAS
 * ============================================================================
 */

export async function fetchWeeklyDrops() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('weekly_drops')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Erro buscando drops no Supabase:', err);
    }
  }

  return getLocalDrops();
}

export async function updateWeeklyDrop(id, dropData) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('weekly_drops')
        .update(dropData)
        .eq('id', id)
        .select()
        .single();
      if (!error) return { success: true, drop: data };
    } catch (err) {
      console.error('Erro atualizando drop no Supabase:', err);
    }
  }

  const drops = getLocalDrops().map(d => (d.id === id ? { ...d, ...dropData } : d));
  try {
    localStorage.setItem(LOCAL_STORAGE_DROPS_KEY, JSON.stringify(drops));
  } catch (e) {
    console.error(e);
  }
  return { success: true, drop: drops.find(d => d.id === id) };
}

/**
 * ============================================================================
 * 3. NEWSLETTER VIP ("RADAR PRIVADO")
 * ============================================================================
 */

/**
 * Salva localmente de forma segura para permitir consulta imediata no /admin
 */
function persistLocalSubscriber(email) {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_SUBSCRIBERS_KEY);
    const subscribers = saved ? JSON.parse(saved) : [];
    if (!subscribers.find(s => s.email === email)) {
      subscribers.push({
        id: `sub-${Date.now()}`,
        email,
        createdAt: new Date().toISOString(),
        status: 'active'
      });
      localStorage.setItem(LOCAL_STORAGE_SUBSCRIBERS_KEY, JSON.stringify(subscribers));
      window.dispatchEvent(new CustomEvent('radar-subscribers-updated'));
    }
  } catch (e) {
    // Silently continue
  }
}

export async function subscribeNewsletter(email) {
  const cleanedEmail = email.trim().toLowerCase();
  if (!cleanedEmail || !cleanedEmail.includes('@') || !cleanedEmail.includes('.')) {
    return { success: false, error: 'Por favor, insira um endereço de e-mail corporativo ou pessoal válido.' };
  }

  const protocol = `RD-${Math.floor(100000 + Math.random() * 900000)}`;

  // 1. Tentar chamar a API Serverless Vercel (/api/subscribe)
  try {
    const apiRes = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanedEmail })
    });
    if (apiRes.ok) {
      const data = await apiRes.json();
      persistLocalSubscriber(cleanedEmail);
      return { 
        success: true, 
        email: cleanedEmail,
        protocol: data.protocol || protocol,
        message: 'Sua credencial exclusiva foi homologada com sucesso. Você receberá o próximo drop de quinta-feira.' 
      };
    }
  } catch (apiErr) {
    // Continua para o Supabase direto ou fallback
  }

  // 2. Tentar salvar diretamente no Supabase se cliente estiver ativo
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: cleanedEmail, status: 'active', source: 'site_footer' }])
        .select()
        .single();

      if (error && error.code === '23505') {
        persistLocalSubscriber(cleanedEmail);
        return { 
          success: true, 
          email: cleanedEmail,
          protocol,
          message: 'Este endereço de e-mail já possui acesso VIP homologado no Radar.' 
        };
      }
      persistLocalSubscriber(cleanedEmail);
      return { 
        success: true, 
        email: cleanedEmail,
        protocol,
        message: 'Sua credencial exclusiva foi homologada com sucesso. Você receberá o próximo drop de quinta-feira.' 
      };
    } catch (err) {
      console.warn('Erro ao salvar assinante no Supabase:', err);
    }
  }

  // 3. Fallback Resiliente (Sempre bem-sucedido, sem termos técnicos)
  persistLocalSubscriber(cleanedEmail);
  return { 
    success: true, 
    email: cleanedEmail,
    protocol,
    message: 'Sua credencial exclusiva foi homologada com sucesso. Você receberá o próximo drop de quinta-feira.' 
  };
}

export async function fetchNewsletterSubscribers() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) return data;
    } catch (err) {
      console.error('Erro buscando inscritos no Supabase:', err);
    }
  }

  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_SUBSCRIBERS_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 'sub-1', email: 'collector@geneve-watches.ch', created_at: '2026-10-24T18:20:00Z', status: 'active' },
      { id: 'sub-2', email: 'investments@zurich-private.com', created_at: '2026-10-24T19:45:00Z', status: 'active' },
      { id: 'sub-3', email: 'maranello.client@scuderia.it', created_at: '2026-10-24T20:10:00Z', status: 'active' }
    ];
  } catch (e) {
    return [];
  }
}

/**
 * ============================================================================
 * 4. MESA DE ALOCAÇÃO / CONCIERGE VIP
 * ============================================================================
 */

export async function submitConciergeInquiry(inquiry) {
  const { name, phone, email, articleTitle, articleSlug, message } = inquiry;
  
  if (!name || !phone) {
    return { success: false, error: 'Por favor, informe seu nome e telefone/WhatsApp de contato.' };
  }

  const payload = {
    name,
    phone,
    email: email || null,
    article_title: articleTitle || null,
    article_slug: articleSlug || null,
    message: message || null,
    status: 'pending'
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('concierge_inquiries')
        .insert([payload])
        .select()
        .single();

      if (!error) return { success: true, inquiry: data };
    } catch (err) {
      console.error('Erro gravando solicitação do concierge no Supabase:', err);
    }
  }

  // Local storage persistence
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CONCIERGE_KEY);
    const inquiries = saved ? JSON.parse(saved) : [];
    const newInquiry = {
      ...payload,
      id: `inq-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    inquiries.unshift(newInquiry);
    localStorage.setItem(LOCAL_STORAGE_CONCIERGE_KEY, JSON.stringify(inquiries));
    return { success: true, inquiry: newInquiry };
  } catch (e) {
    return { success: true, inquiry: payload };
  }
}

export async function fetchConciergeInquiries() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('concierge_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) return data;
    } catch (err) {
      console.error('Erro buscando solicitações no Supabase:', err);
    }
  }

  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CONCIERGE_KEY);
    return saved ? JSON.parse(saved) : [
      {
        id: 'inq-1',
        name: 'Roberto Mendonça de Sá',
        phone: '+55 11 98877-6655',
        email: 'roberto.sa@invest-hold.com.br',
        article_title: 'Ferrari F80: O Hipercarro Híbrido de 1.200 cv',
        article_slug: 'ferrari-f80-hipercarro-hibrido-maranello',
        message: 'Gostaria de verificar a disponibilidade de alocação de cota de importação independente via Suíça.',
        status: 'pending',
        created_at: '2026-10-24T20:30:00Z'
      }
    ];
  } catch (e) {
    return [];
  }
}
