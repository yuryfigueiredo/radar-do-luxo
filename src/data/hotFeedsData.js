/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — CENTRAL DE PAUTAS QUENTES (HOT FEEDS 24H)
 * ==============================================================================
 * Feeds curados das principais fontes internacionais de luxo e patrimônio:
 * - Robb Report (Motors, Watches, Marine, Aviation, Real Estate, Art)
 * - Forbes Money & Bilionários (Grandes Fortunas & Capital Soberano)
 * - Hodinkee & Monochrome (Alta Relojoaria & Independents)
 * - RM Sotheby's & Christie's (Leilões Recordes & Arte Colecionável)
 * - Architectural Digest & Dezeen (Mansões & Brutalismo)
 * - Boat International (Megaiates & Estaleiros)
 *
 * Cada pauta possui validade de 24 horas a partir da detecção.
 * O usuário ou robô pode com 1 clique: [ ✦ Importar & Redigir com IA ]
 * ==============================================================================
 */

import { calculateEditorialScore } from '../services/rankingEngine.js';

export const INITIAL_HOT_PAUTAS = [
  {
    "id": "pauta-live-supercarros-mw0hljx0-m14f",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Ferrari Supercars take top honors at Broad Arrow’s Las Vegas auction - Old Cars Weekly",
    "suggestedHook": "Hipercarros: Ferrari Supercars take top honors at Broad Arrow’s Las Vegas auction",
    "summary": "Ferrari Supercars take top honors at Broad Arrow’s Las Vegas auction Old Cars Weekly",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPbnVncWp1c0Z1dFU0WFAwN0NxMDZJc3Via2Y1ZW5CVmY1NlNtVFY2RzBZcFBQQnJQdHN4Q2ZSdUFPRlVzTkNkZHc3a1ZmbnF4SDROdTBuSFR0bnB0cDdsckxxLXhiZWRzNjRkaTVtMWdySTM0M2wxdlVVb2NtaWdxOWdXM1h3QzdZa0VLMHo4T3dvNjNXM1E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:03.924Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw0hljz2-kb4c",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced - The Drive",
    "suggestedHook": "Hipercarros: Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced",
    "summary": "Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced The Drive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOMUdON0lXOGR1SlNPUzhiUlNSa3lJX0c2djBaQ0Zzc1VzWE5waEJSWVNKcDh4LTNIWWx1bFB1WGhsWlFuM3c0Z3d1MkVwSGlETVJkNkhzRGhfUkswSFlrcV9QcmNqdnlqeWc0cUhwdFR6M0U4Z2drT2s4SU5nbmdJRHd6MkxwcHIwWXZXSS13bWJpdjlEZVMzdHFEWXJZVG9kNnNRTGotWDk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:03.998Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1610880709844-b97111a986f7?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mw0hljr3-hvvn",
    "source": "Robb Report Global",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "Pagani’s One-Off Huayra 70 Anima Has a Diamond-Infused Paint Job",
    "suggestedHook": "Hipercarros: Pagani’s One-Off Huayra 70 Anima Has a Diamond",
    "summary": "The new hypercar was made to celebrate Horacio Pagani's 70th birthday.",
    "sourceUrl": "https://robbreport.com/motors/cars/pagani-huayra-70-anima-horacio-pagani-birthday-1238807501/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:03.711Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/pagani-huayra-70-anima-01.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw0hlkcx-g979",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Sotheby’s Royal & Noble Jewels Geneva Sale 2026 - Salon Privé Magazine",
    "suggestedHook": "Patrimônio & Leilões: Sotheby’s Royal & Noble Jewels Geneva Sale 2026 - Salon Privé Magazine",
    "summary": "Sotheby’s Royal & Noble Jewels Geneva Sale 2026 Salon Privé Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNZzNwQmNHelViT3ZYQmh5SXVLTjN1M0JpTmh3aGhQa0phdVlMRm44UXE1YUhBUnhUd0FOVFpZMkdfeXBmSENNQ2U0Smg3T1p2REFrNFBrTG1KSkJJQ3ZTZnFKNGppakUtekNGRTI4TmlPMzhna0J5Y3RMUExyZ2NBOQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:04.497Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw0hlk7m-o2ry",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "TISG selects SRI's €220 million restructuring offer - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: TISG selects SRI's €220 million restructuring offer",
    "summary": "TISG selects SRI's €220 million restructuring offer SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxONFRUWkpXTWpHazIwQmZWVDI2aGtmajNfeS15dnUzcGNBaHdGelB5Wlg2dDN0STZZTmRvMkhVYjh3cjMxTS01OFFNM0JNWHBuWElEcVBCRWw3NnFELVBLa3R2M1JkeG9XSGEzLWF0TFVBVGlEN0JkTlVVc3VIOU03bGJzbEZpUWY5WUE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:04.306Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw0hljrd-b7ej",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "suggestedHook": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "summary": "Four auction houses. Over 1225 watches. We dig for the gems, covering everything from high-priced indies to vintage deals.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-2026-geneva-fall-auctions-mega-preview-part-1-christies-and-antiquorum",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:03.721Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw0hlk58-mfrw",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "74m Amels superyacht Nome in Monaco - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: 74m Amels Superiate Nome in Monaco",
    "summary": "74m Amels superyacht Nome in Monaco SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1DdVJ0YU1EU2hjbm13aEVvM0tIRDlfQlY0a0NVWTZ6ZXZIc3VKMDFRQUx6bG5oUGtoT04zUDhsSWZUN1M2akJLLUNkV24tTTNyZThlaWo2eHdyYTNpUkxuYklQTWJMN2wxV29GcTJMZlpuYVgxYmo4cw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:04.220Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw0hlk5q-w73v",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Inace Superyachts unveils new 130 Aventura model at FLIBS 2026 - BOAT International",
    "suggestedHook": "Náutica de Elite: Inace Superyachts unveils new 130 Aventura model at FLIBS 2026",
    "summary": "Inace Superyachts unveils new 130 Aventura model at FLIBS 2026 BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONFczUHRjNUFuVjlfS041VmZKZkI2Q2l4N1RPbmNvMDlBYmtnanpXd1RfZWE0ZXdnLUswMDJuYS1lWFV0X2lGcndPbFN2RGV4NUZiWHJtNzRTd0VNLU0wZmkxSEJBN0N2QUt2c0E2aU8zQmdkb2xsWEZpWmZjc3Z5S0tSQ2lCMHhHMGdlaEw4cHNPUXhmQ3pjbDl3NzdQOFdR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:04.238Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw0hlkb7-gxgq",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Christie’s First Fine Art Auction in Abu Dhabi Totals $8.94 M. - ARTnews.com",
    "suggestedHook": "Patrimônio & Leilões: Christie’s First Fine Art Auction in Abu Dhabi Totals $8.94 M.",
    "summary": "Christie’s First Fine Art Auction in Abu Dhabi Totals $8.94 M. ARTnews.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdHJZV2ZTMlJEc21tTEJJQXF1T1R2UGdabG5wQWE0eGo1ZkpfT0s2QXpWNDJPRkM1elVSMGJKRTNBYlpTZDZMUnZmQWUzeTl4bEFIejhvbnJvVkcxa0dfRV9EaTB3Z2phTTBkVnZId3VhNVZFbFVXOVhHMTZhYVhnOE8xNy1QTFhzRG1objYxVWl1b0phRVhkMmZWeUw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T09:30:04.435Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  }
];

const LOCAL_STORAGE_HOT_PAUTAS_KEY = 'radar_hot_pautas_feeds';

/**
 * Retorna as pautas quentes com cálculo dinâmico de validade 24h e ranking multidimensional
 */
export function getHotPautas() {
  try {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_HOT_PAUTAS_KEY) : null;
    const list = saved ? JSON.parse(saved) : INITIAL_HOT_PAUTAS;
    const now = Date.now();

    return list.map(item => {
      const created = new Date(item.createdAt).getTime();
      const diffMs = now - created;
      const hoursRemaining = Math.max(0, Math.floor((24 * 3600 * 1000 - diffMs) / (3600 * 1000)));
      const minutesRemaining = Math.max(0, Math.floor(((24 * 3600 * 1000 - diffMs) % (3600 * 1000)) / (60 * 1000)));
      const isExpired = hoursRemaining === 0 && minutesRemaining === 0;

      // Ranking Editorial Automático Multidimensional
      const rankingInfo = calculateEditorialScore(item);

      return {
        ...item,
        rankingScore: item.rankingScore || rankingInfo.totalScore,
        rankingTier: rankingInfo.tier,
        rankingTierLabel: rankingInfo.tierLabel,
        rankingBadge: rankingInfo.tierBadge,
        rankingBreakdown: rankingInfo.breakdown,
        hoursRemaining,
        minutesRemaining,
        isExpired,
        validityLabel: isExpired ? 'Janela Expirada (Renovar)' : `Válido por ${hoursRemaining}h ${minutesRemaining}m`
      };
    });
  } catch (e) {
    return INITIAL_HOT_PAUTAS;
  }
}

/**
 * Salva ou atualiza o status de uma pauta quente (ex: quando importada)
 */
export function updateHotPautaStatus(pautaId, status = 'imported') {
  try {
    const current = getHotPautas();
    const updated = current.map(p => p.id === pautaId ? { ...p, status } : p);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_HOT_PAUTAS_KEY, JSON.stringify(updated));
    }
    return updated;
  } catch (e) {
    return null;
  }
}

/**
 * Reseta os feeds de pautas para a lista curada original
 */
export function resetHotPautasFeeds() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(LOCAL_STORAGE_HOT_PAUTAS_KEY);
    }
    return INITIAL_HOT_PAUTAS;
  } catch (e) {
    return INITIAL_HOT_PAUTAS;
  }
}
