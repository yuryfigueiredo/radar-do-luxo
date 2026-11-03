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
    "id": "pauta-live-supercarros-mw10wet2-azu8",
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
    "createdAt": "2026-11-03T18:30:23.222Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mw10weyk-sa95",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Gabe Newell Celebrates His 64th Birthday: Billions on Steam, Superyachts, and Valve's Business Empire - UA.NEWS",
    "suggestedHook": "Gabe Newell Celebrates His 64th Birthday: Billions on Steam, Superyachts, and Valve's Business Empire",
    "summary": "Gabe Newell Celebrates His 64th Birthday: Billions on Steam, Superyachts, and Valve's Business Empire UA.NEWS",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPVS1tSTVtYVVRbVNmaklHRmd5QW1JWjJOa3ZWNDNGLUp0UlBfUmNIb0RLWWxGZVdzUmdwb2w3SDNqQUh2bExXWVFJQ1RkYmpZVVMzaGcxYnRaWVg4R1V5RmN4SlB3NkJfQmktNlpzMjIybWVtclZrNjAxLTJSenFQMzR0cE1BV2hYc1kwdkFVcjZnR3JmYjNKRVNmbTRhZVliV1ZKU3VYbVZwZFlsU1RBdm8wZjZKT3daZzd4TQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T18:30:23.420Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw10wekq-szog",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari F50 Sets New Auction Record With $18.7 Million Sale - Motor1.com",
    "suggestedHook": "Hipercarros: Ferrari F50 Sets New Auction Record With $18.7 Million Sale",
    "summary": "Ferrari F50 Sets New Auction Record With $18.7 Million Sale Motor1.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBGUk80eGZQcmRiM1gyNWdUR283Y0VTQy1JdGJuTHEyQTVZVlhlcmQzUkZjSm1ZbjdoM2RNNHp0LWRWakl6YXBoS3d3VU1wYUhpblppdl9DTVIySVpBUDRiS0p3MHdtVnJVRkt3UWdkdHE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T18:30:22.922Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw10wf4a-andr",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Yacht ODESSA 2 (240 feet) owned by Len Blavatnik - 2016-12-30 - Superyachts in St. Bart's for New Years 2016 - Forbes",
    "suggestedHook": "Yacht ODESSA 2 (240 feet) owned by Len Blavatnik - 2016-12-30 - Superyachts in St. Bart's for New Years 2016",
    "summary": "Yacht ODESSA 2 (240 feet) owned by Len Blavatnik - 2016-12-30 - Superyachts in St. Bart's for New Years 2016 Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBrUzBYb1lOUWVjZE9qUDJUNE5iNGl6MkRqdEplaG5KcFFZLXRZZVVtZkFoVHJ4emI2ekhGbmI2OWxoWkRuWXFWZjN2TXFzNGFZSEdvS1pTV1pHd1h2c00xRnJyaFdZWEwzY3VnNTQxbjJuM2s2UXc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T18:30:23.626Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw10wef7-wnc0",
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
    "createdAt": "2026-11-03T18:30:22.723Z",
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
    "id": "pauta-live-arquitetura-mw10wevi-rbdk",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Are Superyachts Steering Back To An Analog Age? - Forbes España",
    "suggestedHook": "Patrimônio & Leilões: Are Superyachts Steering Back To An Analog Age? - Forbes España",
    "summary": "Are Superyachts Steering Back To An Analog Age? Forbes España",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQamxydm04N3pRQW5BMFJienRWeEM5c1hsaGZ6cXdjcVprSHQ0ekxUbldHRDlHX2U4NTdNTEtTZXhiVkZGY1pjRWhFZmk5dGFCR0hfYmRPYzI0QkFBcUttQVB4N1RlMmQzT2NhVElJT29MVi13WjJRWWdSQlZQQjNBM19zMUJmZDIySzBSNGtPX0pLOXFKeFMw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T18:30:23.310Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1604737637145-48cc31d160eb?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw10wetn-usqh",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht",
    "summary": "INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYjlUaS0wa1JlUjZOX0o5RHptdC00QXprR3JjLXVnZ0ZZWDUyOVdzdENPMWdBOWtCeHA1cHkzb3ZyRGhmV1hQNjNGZGxWcW1QUzdoMGJDQzBHZW9OXzUyN0hHcDZJcmVieUlVSjVRS1pqWEJ3SEYwM25rN0NlWWxuaUZZcGpxbUF2RE50YzZR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-03T18:30:23.243Z",
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
    "id": "pauta-live-arquitetura-mw10wf6e-c1sh",
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
    "createdAt": "2026-11-03T18:30:23.702Z",
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
