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

// Feeds homologados por vertical editorial
export const ELITE_RSS_FEEDS = [
  {
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    source: 'Robb Report Automobiles',
    url: 'https://robbreport.com/rss-automobiles'
  },
  {
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    source: 'Robb Report Watches',
    url: 'https://robbreport.com/rss-watches'
  },
  {
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    authorSlug: 'gabriel-fontes',
    source: 'Robb Report Boating & Yachting',
    url: 'https://robbreport.com/rss-boating-yachting'
  },
  {
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    source: 'Robb Report Real Estate',
    url: 'https://robbreport.com/rss-real-estate'
  },
  {
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    source: 'Robb Report Art & Collectibles',
    url: 'https://robbreport.com/rss-art-collectibles'
  }
];

// Banco de imagens de alta resolução curadas por categoria
const FALLBACK_CATEGORY_IMAGES = {
  supercarros: [
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1400'
  ],
  relogios: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1400'
  ],
  arquitetura: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400'
  ],
  destinos: [
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1400'
  ],
  estilo: [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400'
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
      const fallbackImg = gallery[index % gallery.length];

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
        image: item.imageUrl || fallbackImg
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
