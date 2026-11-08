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
    "id": "pauta-live-supercarros-mw6qne76-cu3c",
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
    "createdAt": "2026-11-07T18:30:03.426Z",
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
    "id": "pauta-live-supercarros-mw6qnei3-syyk",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Gordon Ramsay spotted driving his red Ferrari F40 in London - The Supercar Blog",
    "suggestedHook": "Hipercarros: Gordon Ramsay spotted driving his red Ferrari F40 in London",
    "summary": "Gordon Ramsay spotted driving his red Ferrari F40 in London The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOWEFQQXJvRzZwWmlBMlhVYThFd2ZQNWpyWTZHYjZuYWhLV0tiTk9LS1Z0eVVWUUo2a08zOE5ia2VjOWlrbzM5dVl5bmQxLWw2V3hEOVY3UDdQenBUUlczYWVvSEU0YzJsak9aRXJaQllDZWRjbGdDVjNQWS1naGg0ZnZHLWVaSDNtNWdzdjd4TXAtaDFOdTQ0?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T18:30:03.819Z",
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
    "id": "pauta-live-relogios-mw6qnecq-yer5",
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
    "createdAt": "2026-11-07T18:30:03.626Z",
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
    "id": "pauta-live-relogios-mw6qnecy-6uri",
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
    "createdAt": "2026-11-07T18:30:03.634Z",
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
    "id": "pauta-live-relogios-mw6qned2-wtq9",
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
    "createdAt": "2026-11-07T18:30:03.638Z",
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
    "id": "pauta-live-destinos-mw6qnenp-enoz",
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
    "createdAt": "2026-11-07T18:30:04.021Z",
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
    "id": "pauta-live-arquitetura-mw6qne61-sq4m",
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
    "createdAt": "2026-11-07T18:30:03.385Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Verdier_Mansion_SF_13.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw6qne71-omnz",
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
    "createdAt": "2026-11-07T18:30:03.421Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/GOKeeffe_NearAbiquiu_NM2.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw6qneyj-2qe0",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Gold Coast mansion listed for $47.5m in bid to smash Queensland house record - Real Estate",
    "suggestedHook": "Patrimônio & Leilões: Gold Coast Mansão listed for $47.5m in bid to smash Queensland house record",
    "summary": "Gold Coast mansion listed for $47.5m in bid to smash Queensland house record Real Estate",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNdUl6WDExeFh2NkRzSGYzd0NlaFZLal9lSjJuTnBQY19RVlNUbDFZX2xNTHljUFY4N2tpQ2lLSmdaV3p1Z3dmRkxwYUJDSGhqZmhITVdHejV6Y0Y3MlRjSkJIRjJmQklGa1V2UXRjLW8zTnIwRmhpTFVZeVBndnZ4UlVndUpHUFVEbTFPcFo0X2liWVNWdk10ODZZb2tyTTc1dDFXd0RWVWZWQmtUWTd5TV9VVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T18:30:04.411Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw6qneep-2tut",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Ferrari secures home pole at WEC season finale - RACER - Racing News",
    "suggestedHook": "Hipercarros: Ferrari secures home pole at WEC season finale - RACER",
    "summary": "Ferrari secures home pole at WEC season finale RACER - Racing News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQeWVYaWxTcFE2c1JHY3BkWUlvVjQzbDk1VTNmangya3dXUV9YYUxPc2NsVGJuZlE1SjRFa1hGYUdzUVhUZWJMay14WV9UMk5KVTVMMGJCRUFRX1dsRThVVW9EZHhMTGd3RW03b2gyUEp3TWFIaEd0SWsyeDdIb2d1SA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-07T18:30:03.697Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
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
    "status": "published"
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
    "status": "expired"
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
