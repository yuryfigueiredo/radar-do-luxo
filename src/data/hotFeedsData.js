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
    "id": "pauta-live-relogios-mvu53tif-62b4",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The Girard-Perragaux Laureato Fifty Three Gold Bridges, with New Gold Accents",
    "suggestedHook": "Alta Relojoaria: First Look – The Girard-Perragaux Laureato Fifty Three Gold Bridges, with New Gold Accents",
    "summary": "Girard-Perregaux released the Laureato collection in 1975 to meet the growing demand for integrated-style sports watches. Debuting just three years after the 1972 blueprint for the genre, it remains one of the earliest examples of a luxury sports watch. Following the classic time-and-date Laureato Fifty released to cel",
    "sourceUrl": "https://monochrome-watches.com/2026-girard-perragaux-laureato-fifty-three-gold-bridges-permanent-collection-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T22:53:44.103Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Girard-Perragaux-Laureato-Fifty-Three-Gold-Bridges-permanent-collection-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvu53tih-bnmh",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The Laurent Ferrier Grand Sport Tourbillon Iceberg",
    "suggestedHook": "Alta Relojoaria: First Look – The Laurent Ferrier Grand Sport Tourbillon Iceberg",
    "summary": "While the more compact and accessible Sport Auto and Sport Traveller are often seen as the cool kids on the block, we tend to forget that Laurent Ferrier’s integrated sports watch style began with a far more complex and larger watch: the Grand Sport Tourbillon. Born from Mr Ferrier’s passion for motorsport",
    "sourceUrl": "https://monochrome-watches.com/laurent-ferrier-grand-sport-tourbillon-iceberg-titanium-integrated-sports-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T22:53:44.105Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Laurent-Ferrier-Grand-Sport-Tourbillon-Iceberg-Titanium-review-8-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvu53tib-g6ac",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Introducing – Citizen Brings Damascus Steel and Forged Carbon to a new Series 8 GMT",
    "suggestedHook": "Apresentação: Citizen Brings Damascus Steel and Forged Carbon to a new Series 8 GMT",
    "summary": "With its Series 8 collection of mechanical watches, Citizen has been delivering rather impressive models over the years, with the GMT collection being possibly the most appealing of them. Not only is it powered by a true GMT automatic movement (something rare in this price range), but Citizen has dared to bring singula",
    "sourceUrl": "https://monochrome-watches.com/citizen-series-8-gmt-damascus-steel-and-forged-carbon-nb6092-01e-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T22:53:44.099Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Citizen-Series-8-GMT-Damascus-Steel-and-Forged-Carbon-NB6092-01E-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvu53thw-7dsb",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Inside a $21.9 Million Houston Mansion That Once Hosted Bond-Style Parties",
    "suggestedHook": "Patrimônio & Leilões: Inside a $21.9 Million Houston Mansão That Once Hosted Bond",
    "summary": "The Neoclassical property once belonged to Baron Enrico di Portanova, who installed a massive glass-enclosed pool pavilion and entertaining space.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/baron-ricky-di-portanova-houston-mansion-1238796678/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T22:53:44.084Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/2115-River-Oaks-Boulevard_Pavilion.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvtqzld4-v5xf",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Alfa Romeo's Forgotten Supercar Is A Rare Ferrari And Maserati Love Child - HotCars",
    "suggestedHook": "Hipercarros: Alfa Romeo's Forgotten Supercar Is A Rare Ferrari And Maserati Love Child",
    "summary": "Alfa Romeo's Forgotten Supercar Is A Rare F",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPel9oaVZtdjk1NkpzanljMkhrRFZPVWVWUktZZWNYam15V0tlZU1RZ2dVanppUEZ6Z3J1X3dTNWt2WmtlZUdLeV8tWkhVU0I1RzJlYTNGdk5GRHgzenRGWFpWQlhNVGhKRDMwMXYzcFcyODFxenQza2ZpcGZfM1RPZzd4d2t2R2lDMVpuVDZDaWc5RmNZYkFJ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.296Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mvtqzlez-qwzh",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Australian Superyachts Establishes New Home at the Royal Motor Yacht Club, Newport - Marine Business News",
    "suggestedHook": "Náutica de Elite: Australian Superyachts Establishes New Home at the Royal Motor Yacht Club, Newport",
    "summary": "Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOcC1IUzZTcjNZZmRVa2dUQTU0cU50cmtuQXRSMVFIa3Q4bllJQ2FWOFJCZDhCZmxWeVIxUVZRaVVXelcyOXpoS3NIdzZtU05kVl9UN2NuVU1RaHJfNXI5ak9QWkc0OUtjOEd0RjdlVHdoS3I0QU5HRnFZZlgycFAzREdSa3RERURzMkRCR2toVnNiTEVtRHp4c3lMbUhIc2ZJam1ObG02djR5ODlabUh0MjNLRGNFQTlBX0VFZU5STWZfMEFXNXdv?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.363Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvtqzlcd-d24o",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – The New Nomos Club 38, a Fan’s Favourite Gets a Larger Variant",
    "suggestedHook": "Alta Relojoaria: First Look – The New Nomos Club 38, a Fan’s Favourite Gets a Larger Variant",
    "summary": "While the Tangente hand-wound undoubtedly remains the most emblematic watch you can get from Nomos, and one of the most accessible models too, there’s another fairly priced option from the brand that has long been a fan’s favourite: the Club. A simple, fresher, sportier take on the brand’s watchmaking",
    "sourceUrl": "https://monochrome-watches.com/2026-nomos-club-38-collection-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.269Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Nomos-Club-38-new-larger-size-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvtqzlbu-laz3",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "The Rolling Stones Recruitment Letter Brian Jones Sent Charlie Watts Is up for Auction",
    "suggestedHook": "Patrimônio & Leilões: The Rolling Stones Recruitment Letter Brian Jones Sent Charlie Watts Is up for Auction",
    "summary": "“We are looking for a good drummer,” Jones wrote to Watts in 1962.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/rolling-stones-letter-brian-jones-charlie-watts-1238798553/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.250Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/the-rolling-stones-recruitment-letter-brian-jones-charlie-watts-3.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvtqzlbv-9qzr",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "David Hasselhoff’s K.I.T.T. Replica From ‘Knight Rider’ Is Heading to Auction",
    "suggestedHook": "Patrimônio & Leilões: David Hasselhoff’s K.I.T.T. Replica From ‘Knight Rider’ Is Heading to Auction",
    "summary": "The modified Pontiac Firebird looks like the car used in the show.",
    "sourceUrl": "https://robbreport.com/motors/cars/david-hasselhoff-knight-rider-car-auction-1238797110/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.251Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/david-hasselhoff-kitt-tour-car-01.jpg",
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
