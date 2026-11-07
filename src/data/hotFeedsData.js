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
    "id": "pauta-live-supercarros-mw67dgxx-083d",
    "source": "Robb Report Global",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "The Last Mercedes-Benz SLR McLaren Stirling Moss Could Now Fetch Over $6 Million",
    "suggestedHook": "Hipercarros: The Last Mercedes-Benz SLR McLaren Stirling Moss Could Now Fetch Over $6 Million",
    "summary": "One of only 75 made and soon available through RM Sotheby’s, this example was commissioned by royalty and has only 32.9 miles on it.",
    "sourceUrl": "https://robbreport.com/motors/cars/mercedes-slr-mclaren-stirling-moss-rm-sothebys-1238819901/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.717Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/2010-Mercedes-Benz-SLR-McLaren-Stirling-Moss-opener.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw67dhta-mjyy",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Phillips unveils highlights of upcoming Geneva auction - Professional Jeweller",
    "suggestedHook": "Patrimônio & Leilões: Phillips unveils highlights of upcoming Geneva auction",
    "summary": "Phillips unveils highlights of upcoming Geneva auction Professional Jeweller",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9hSm9pOERWVVc1SFBOdEVDTVRrR2dFWDlLR1BLOTJnMWNiUzlTYVd0b1FnbVJUcGdtTlpkME4xUzRoWFNtZ3ZjME9WY3ptcmhkZ0p5SE1wcV84Q0NMY01XMnktZkplZlQ2R0ZZQzF1ZVExakhHQ084NXdWQmQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:28.846Z",
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
    "id": "pauta-live-supercarros-mw67dh6d-gcxp",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Is Hypercar Without BoP Possible For 2030? Ferrari Believes So - dailysportscar.com",
    "suggestedHook": "Hipercarros: Is Hypercar Without BoP Possible For 2030? Ferrari Believes So",
    "summary": "Is Hypercar Without BoP Possible For 2030? Ferrari Believes So dailysportscar.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNdE5DWUF1bDB2eXYxSmRfSGtWS1lwaTM3WUg4U3RwTmlfaHVOUmtWMVd4c3ctTF8wWGlMOFItQmN6Nnc0SF9BbGxOdlhkclNlSFVwYjNsQTMtc0RlT0lCbjljTk94NTRHRXN6S3RudEtjMG45Y0F2SUtuWmRFRHU3MlRXWUdVQjBhTnl3YWFqa180VWNrRnJablVJR3M0VzZ6Q01jdXJOUmtXRHpP?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:28.021Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw67dhbd-hbt8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "A Chinese electric hypercar just smashed the 500 km/h barrier, leaving Bugatti further behind - Digital Trends",
    "suggestedHook": "A Chinese electric hypercar just smashed the 500 km/h barrier, leaving Bugatti further behind",
    "summary": "A Chinese electric hypercar just smashed the 500 km/h barrier, leaving Bugatti further behind Digital Trends",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQYXZUeUs2eXQ5cm9ablJSd2h0WVlLV3VsNFNsY2RrQ3Zsb0RIOC11SW5fc1dnM2FZOWs3Ym5MNF9ranBYV1FDSWRxNG0weTdHLWNjTHlUZVVDbXg3al80VGJ2Q1JZVHRnV3VwLTN6andZUVhPdl9BWkJUVV9LNXBLbTExOEh5NFVqYTEySTE5MjktNjhvNi1hUEs0TlJSWTVwS2ZzQ1QtZmcxNngzRUt5T0RNRDItRWN6RUk4ZjU0TDhMczdhRVFj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:28.201Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1660326040484-fc0cb33d0b23?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw67dh2y-74c5",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The Breguet Classique Souscription, now in Platinum",
    "suggestedHook": "Alta Relojoaria: First Look – The Breguet Classique Souscription, now in Platinum",
    "summary": "As most of you might remember, Breguet celebrated its 250th anniversary last year, and did so by releasing rather spectacular watches, from the ultra-elegant 7235, to the compact 38mm Type XX or the Experimentale 1, the range-topping model with its 10Hz high-frequency tourbillon and its constant force magnetic",
    "sourceUrl": "https://monochrome-watches.com/breguet-classique-souscription-platinum-2026pt-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.898Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Breguet-Classique-Souscription-Platinum-2026PT-review-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mw67dh35-pysn",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The New Serica Travel Chronometer Golden Green Ref. 8315-3",
    "suggestedHook": "Alta Relojoaria: First Look – The New Serica Travel Chronometer Golden Green Ref. 8315",
    "summary": "Known for its seriously built and vintage-inspired collection of tool watches, French brand Serica is releasing a new edition of its sports GMT model, the Travel Chronometer. This is one of the few watches from the brand that we have never explored, as we’ve already looked at the 6190 Field collection, the highly",
    "sourceUrl": "https://monochrome-watches.com/the-new-serica-travel-chronometer-golden-green-ref-8315-3/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.905Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Serica-Travel-Chronometer-Golden-Green-8315-3-GMT-review-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mw67dh39-qmre",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The New, Monochromatic Nomos Club Sport Neomatik 34 All Silver",
    "suggestedHook": "Alta Relojoaria: First Look – The New, Monochromatic Nomos Club Sport Neomatik 34 All Silver",
    "summary": "Nomos expands its compact Club Sport neomatik 34 collection with a new monochromatic edition. No, it’s not something we cooked up in collaboration; the new Club Sport Neomatik 34 All Silver strips away the colourful accents (pink, gold and purple) of the inaugural trio in favour of a more restrained combo of silver,",
    "sourceUrl": "https://monochrome-watches.com/nomos-club-sport-neomatik-34-all-silver-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.909Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Nomos-Club-Sport-neomatik-34-all-Silver-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mw67dhgw-0wne",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "First look inside Mengi Yay's 53m flagship Virtus XP superyacht Gray Wolf - BOAT International",
    "suggestedHook": "Náutica de Elite: First look inside Mengi Yay's 53m flagship Virtus XP Superiate Gray Wolf",
    "summary": "First look inside Mengi Yay's 53m flagship Virtus XP superyacht Gray Wolf BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQUNuTEJucEhYT3o5UnFuWF9UU2RndW5jS3N0bTNZbWpQUFhERS10QWZlcG1PUFUzV1BackM4NDhZWC1QNlZQaUdxVFlXcnZORWZFQlhhMTFvQjlNWU96c05kbkhDY0p2UjFXaFBsODJfdUNSR2JLUzBWX0xoOWxyaXBPS29VTzN4cGQtTTI5bl9nMkhPNlNac3h0dUdrOVc5YTBmaWUtOXg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:28.400Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw67dgx7-w4o7",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A San Francisco Mansion With Ties to a Nobel Laureate and a Brothel Lists for $25 Million",
    "suggestedHook": "A San Francisco Mansão With Ties to a Nobel Laureate and a Brothel Vai a Mercado por $25 Million",
    "summary": "Known as the Verdier Mansion, the six-bedroom residence also appeared in the Netflix series \"The OA.\"",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/verdier-mansion-san-francisco-1238802155/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.691Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Verdier_Mansion_SF_13.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw67dgxt-rtz5",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A Georgia O’Keeffe Painting Sat in a Closet for Nearly 40 Years. Now It’s Heading to Auction.",
    "suggestedHook": "A Georgia O’Keeffe Painting Sat in a Closet for Nearly 40 Years. Now It’s Heading to Auction.",
    "summary": "The painting titled Near Abiquiu, New Mexico I (1930) recently resurfaced after nearly 40 years out of the public eye.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/georgia-okeeffe-painting-christies-auction-1238820829/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T09:30:27.713Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/GOKeeffe_NearAbiquiu_NM2.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw5b7zqs-okfx",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth - Citywealth",
    "suggestedHook": "Beyond Monaco: The Red Sea’s Bid for the World’s Superiate Wealth",
    "summary": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth Citywealth",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNRlc2YUN0T2pQeXJLMlg2TzA5aXVqUnpOblpXVmVWc0txeXc4RTIzOVkzR0xoT3A2RF82Q1FqcjZwN1dxa3F0QW1vWWtSQ3FBd3RYMU9PWGRyZHJ6ek4zQnY3UjZyLWJBbnFqWDhBM0RNVlpFNDZQX2locU5ldDA3N1lWMzMzaGc3UjF1UUdGckhxZHJMak9uZGQwTk9aTy1h?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:24.436Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
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
