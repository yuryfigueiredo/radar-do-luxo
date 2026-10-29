/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — SERVIÇO DE INGESTÃO E CURADORIA DE RSS DE ELITE
 * ==============================================================================
 * Monitora e normaliza feeds oficiais das maiores publicações globais de luxo:
 * - Robb Report (Motors, Watches, Marine, Real Estate, Art)
 * - Monochrome & Hodinkee
 * Funciona de forma isomórfica em Node.js (scripts) e no Browser (Vite).
 * ==============================================================================
 */

// Feeds homologados por vertical editorial (Endpoints Oficiais Ativos)
export const ELITE_RSS_FEEDS = [
  {
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    source: 'Robb Report Global',
    imageOffset: 0,
    url: 'https://robbreport.com/feed/'
  },
  {
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    source: 'Hodinkee',
    imageOffset: 0,
    url: 'https://www.hodinkee.com/articles/rss.xml'
  },
  {
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    source: 'Monochrome Watches',
    imageOffset: 1,
    url: 'https://monochrome-watches.com/feed/'
  },
  {
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    source: 'Google News Motors (Ferrari/Bugatti)',
    imageOffset: 1,
    url: 'https://news.google.com/rss/search?q=hypercar+OR+Ferrari+OR+Bugatti+when:3d&hl=en-US&gl=US&ceid=US:en'
  },
  {
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    authorSlug: 'gabriel-fontes',
    source: 'Google News Superyachts',
    imageOffset: 0,
    url: 'https://news.google.com/rss/search?q=superyacht+OR+megayacht+when:3d&hl=en-US&gl=US&ceid=US:en'
  },
  {
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    source: 'Google News Architecture & Mansions',
    imageOffset: 0,
    url: 'https://news.google.com/rss/search?q=mansion+architecture+penthouse+record+when:3d&hl=en-US&gl=US&ceid=US:en'
  },
  {
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    source: 'Sotheby\'s & Christie\'s Auctions',
    imageOffset: 1,
    url: 'https://news.google.com/rss/search?q=Sothebys+OR+Christies+auction+record+jewel+when:3d&hl=en-US&gl=US&ceid=US:en'
  }
];

// Banco de imagens de alta resolução curadas por categoria (Garantidamente exclusivas)
export const FALLBACK_CATEGORY_IMAGES = {
  supercarros: [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400'
  ],
  relogios: [
    'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=80&w=1400'
  ],
  arquitetura: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400'
  ],
  destinos: [
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400'
  ],
  estilo: [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1400'
  ]
};

/**
 * Limpa tags HTML de strings RSS
 */
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

/**
 * Extrai itens de um XML RSS através de regex leve compatível com Node e Web
 */
function parseRssXml(xmlText) {
  const items = [];
  const itemMatches = xmlText.match(/<item>([\s\S]*?)<\/item>/gi) || [];

  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i);
    const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/i);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);

    // Extração de imagem via enclosure ou media:content
    let imageUrl = null;
    const enclosureMatch = itemXml.match(/<enclosure[^>]*url=["']([^"']+)["']/i);
    if (enclosureMatch) {
      imageUrl = enclosureMatch[1];
    } else {
      const mediaMatch = itemXml.match(/<media:content[^>]*url=["']([^"']+)["']/i);
      if (mediaMatch) {
        imageUrl = mediaMatch[1];
      }
    }

    const title = titleMatch ? stripHtml(titleMatch[1]) : '';
    const link = linkMatch ? stripHtml(linkMatch[1]) : '';
    const description = descMatch ? stripHtml(descMatch[1]) : '';
    const pubDate = pubDateMatch ? stripHtml(pubDateMatch[1]) : '';

    if (title && link) {
      items.push({ title, link, description, pubDate, imageUrl });
    }
  }

  return items;
}

/**
 * Busca e analisa um feed RSS com timeout
 */
export async function fetchFeedItems(feedConfig, timeoutMs = 8000) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    let fetchUrl = feedConfig.url;

    // Se estiver no browser e não tiver proxy direto, tenta com proxy de fallback
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      fetchUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedConfig.url)}`;
    }

    const res = await fetch(fetchUrl, {
      signal: controller.signal,
      headers: { 'Accept': 'application/rss+xml, application/xml, text/xml, */*' }
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Status ${res.status}`);
    }

    const xml = await res.text();
    const rawItems = parseRssXml(xml);

    return rawItems.map((item, index) => {
      // Seleciona imagem de galeria se não vier no feed
      const catKey = feedConfig.categorySlug || 'supercarros';
      const gallery = FALLBACK_CATEGORY_IMAGES[catKey] || FALLBACK_CATEGORY_IMAGES.supercarros;
      const fallbackImg = gallery[(index + (feedConfig.imageOffset || 0)) % gallery.length];

      return {
        id: `rss-${feedConfig.categorySlug}-${Date.now().toString(36)}-${index}`,
        source: feedConfig.source,
        sourceUrl: item.link,
        category: feedConfig.category,
        categorySlug: feedConfig.categorySlug,
        authorSlug: feedConfig.authorSlug,
        originalTitle: item.title,
        suggestedHook: item.title,
        summary: item.description ? item.description.slice(0, 320) : 'Lançamento internacional homologado pela mesa do Radar.',
        publishedTime: item.pubDate || new Date().toISOString(),
        image: item.imageUrl || fallbackImg,
        imageIsFallback: !item.imageUrl
      };
    });
  } catch (err) {
    console.warn(`⚠️ [RSS Curator] Não foi possível ler feed ${feedConfig.source}: ${err.message}`);
    return [];
  }
}

/**
 * Ingestão agregada de todos os feeds com ordenação e deduplicação
 */
export async function fetchAllEliteFeeds() {
  const promises = ELITE_RSS_FEEDS.map(f => fetchFeedItems(f));
  const results = await Promise.all(promises);
  const flattened = results.flat();

  // Deduplicação básica por título normalizado
  const seen = new Set();
  const uniqueItems = [];

  for (const item of flattened) {
    const key = item.originalTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key)) {
      seen.add(key);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}
