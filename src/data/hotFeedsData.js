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
    "id": "pauta-live-destinos-mwj2bxn0-kj91",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Kansas billionaire's 235-foot superyacht inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million - Luxurylaunches",
    "suggestedHook": "Kansas billionaire's 235-foot Superiate inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million",
    "summary": "Kansas billionaire's 235-foot superyacht inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOTG9CbjdndU5fdjlLMU9Nbi00Q3RKWV9VeTl5RURrMDFiZG1PTHQtWlc4MXREbktUbF9TVDVIbV9DYjZvcVZZRFgxa2k0dWQ4d0FnMnhhb3ZoSEVVUzNES0RBWTVaa3R3V3JxM0J5cmRLM2p0dDFFWk91am1XN3dmNGNIUW1Fc1hvdDlN?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.252Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwj2bxtv-kk0p",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "US billionaire's $300m superyacht spotted in Auckland - NZ Herald",
    "suggestedHook": "Náutica de Elite: US billionaire's $300m Superiate spotted in Auckland",
    "summary": "US billionaire's $300m superyacht spotted in Auckland NZ Herald",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQR1NCM2Q3MnVUbTltU2lJTTUzX0ZSMFhTeXlWdFFoR1JPR1dlcVQzMzhqNWg5Zmx1bXBSU3J4d0FuVWxXeVRyR2I3RTZvOUhuNEZOdjBuV2dmeGN3bnk0eXc1UkNidVhFd2RNSEliMS1FckxZWENwcHB4NVpzSmFLM2NCNFd2NXpIRTk0SDlYNUJTbHR3bURqeGRjN0k4bnl5RjJKWFVIN2FtbGN5NVhSbGw3dTdJQ2trN0RfeG1EdDVWX3VlQmloQ092bHJXVGRS?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.499Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwj2by0l-kmaa",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Nearly 200-Carat Sapphire Once Owned by Russian Royals Sells for $4.9 Million at Geneva Auction - Fashion Times UK",
    "suggestedHook": "Nearly 200-Carat Sapphire Once Owned by Russian Royals É Arrematado por $4.9 Million at Geneva Auction",
    "summary": "Nearly 200-Carat Sapphire Once Owned by Russian Royals Sells for $4.9 Million at Geneva Auction Fashion Times UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNV1lFQXFzTmlWTUw1NENfcnY2TXRwRTNtZnFmUkdabk1rV1dxVVptbjRmdXFfNFRNWkQyVEQxb2dlOXFyZURPd3FVTnc2YWFLZno1N2MtZzVaQ25JSXRISmlrUWIxcGtZM0IzM2czc1N2R2RQSjlJeURBbUtUcmFJZ1Nnb1FCdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.741Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwj2bx8t-s3ue",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari F12tdf Hits $3.83 Million on duPont REGISTRY Live, as 812 Competizione leads upcoming week - duPont REGISTRY News",
    "suggestedHook": "Ferrari F12tdf Hits $3.83 Million on duPont REGISTRY Live, as 812 Competizione leads upcoming week",
    "summary": "Ferrari F12tdf Hits $3.83 Million on duPont REGISTRY Live, as 812 Competizione leads upcoming week duPont REGISTRY News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5ZNkZGbjVxZVF2UU9iR25vN09HdU02amVseW82aWdySGpsaklYZlRBLUJaWk5hTnhyTi1pTmpGZmlKT0M1NnBPZEhySnJKSElNLUgzWGFQU2RwSjdwNU5qYWR1cw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.741Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwj2bxp1-ldp7",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The Italian Sea Group Auction Set for November 16 - Megayacht News",
    "suggestedHook": "Patrimônio & Leilões: The Italian Sea Group Auction Set for November 16",
    "summary": "The Italian Sea Group Auction Set for November 16 Megayacht News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9PTEplNVRTa0pLUDhOdk0xclRaVzN4NVctOUhUcnBaenhJekM5ZFU4SGt6S3BrWVlCMzE2SUQ3cXJOYXlUc3d5Tnk3djl2R1dIcGRTWGE3Vl9hVlhvMDhXOUl6blFHeGNibklZWm1qZ3R6dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.325Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783344422200-a5493824bcb9?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwj2bx5e-akj5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari 499P sweeps Le Castellet in an all-Ferrari Hypercar class - AutoNext.co",
    "suggestedHook": "Hipercarros: Ferrari 499P sweeps Le Castellet in an all-Ferrari Hypercar class",
    "summary": "Ferrari 499P sweeps Le Castellet in an all-Ferrari Hypercar class AutoNext.co",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNMnVYTnNiQ3VIcjJIak1pRURuNzFhV1gyMjc0YXBmMUJiOEFnajlwZ1NGcktwMjdUVDMyQTVIR25wU0RzUTE0YlFiRjNNekpVYm1tNkZsVEpLaldWUTUzRW1BTGZyeVFsNml3OUhfNTRhR3RBQzg0SkRpcktHcVNSbw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.618Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1577735138919-91b6848511c8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwj2bx7x-9rtd",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection - The Supercar Blog",
    "suggestedHook": "Hipercarros: 33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection",
    "summary": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQRkRoN0I4Mk5uUV9HOXktMmJjS2xMUnlEX2pFc3daMGtwMlhKSU1QbzFLUjFSLWsyMFVDTFJLamlQbFZEejdoVVhtLWJIbnRkcjdEd1dhQjk5NFZiaXlHQzR4cVdwMm1iS0Rib0xoYnhTUDdqYnFWN2ZIZzNIT2Y2Z2twS204Ml9CbWlUYkt6cGZCeFZoMHBQZm5VeWVBdy00SEIyT0FjLUw5RlEw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.709Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwj2bwx0-5g85",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s November Watch Auction Hits a Record $59 Million",
    "suggestedHook": "Alta Relojoaria: Christie’s November Watch Auction Hits a Record $59 Million",
    "summary": "The auction house is holding its luxury week in Geneva, and while it hasn't released final totals, early returns appear to be very good.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/christies-rare-watches-magnificent-jewels-1238838351/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.316Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Christies_MagJewels_Geneva.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwj2by0f-njos",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "suggestedHook": "Patrimônio & Leilões: Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "summary": "Romanov sapphire bracelet exceeds auction estimates in Geneva Kursiv Media Узбекистан",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE1rakZ6emRzeEFRaUpUc0ZIODR0aEZfNzAyNXB4QTlxRmF1bXp0TVcyV1g4ODBvWHcxNWk1WFFOU2otMzJLN01lUVdpZlN2Vmxwa0ZUZzZ0cHNWTVB3T1RWVUpRTDVuWmVfdlFLQkNVSUtmQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.735Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwj2bx4w-yfoj",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "suggestedHook": "Alta Relojoaria: Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "summary": "Richemont, the Swiss luxury powerhouse, pursues its 2026 fiscal year on a strong note. For the first semester ended 30 September 2026, the group reported sales of EUR 12.3 billion, up by 17% at constant rates (+16% actual). The second quarter growth was sustained at +13% after a particularly strong first quarter in",
    "sourceUrl": "https://monochrome-watches.com/richemont-reports-strong-first-semester-2026-sales-up-by-17-industry-news/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.600Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/07/richemont-group-results-sales-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwj2bx2o-wjm1",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Introducing – Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "suggestedHook": "Apresentação: Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "summary": "Founded by Richard Benc, British brand Studio Underd0g launched in 2020 with a design-led series that broke from the watch industry’s usual conventions. Its colourful chronographs, fun dial designs, and collaborations have helped it establish its identity, while accessible prices have attracted a growing following. As",
    "sourceUrl": "https://monochrome-watches.com/studio-underd0g-04series-calendar-collection-retrograde-date-weekend-indicator-new-seagull-movement-value-proposition-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:17.520Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Studio-Underd0g-04Series-calendar-Weekend-Indicator-6-600x237.jpg",
    "imageIsFallback": false,
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
