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
    "id": "pauta-live-supercarros-mvv619xz-5ins",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "The CEO of Bugatti also made the mistake of not removing the key, losing his multi-million dollar supercar. - Vietnam.vn",
    "suggestedHook": "The CEO of Bugatti also made the mistake of not removing the key, losing his multi-million dollar supercar.",
    "summary": "The CEO of Bugatti also made the mistake of not r",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOZExSYnlhaW1fY2Zxd2E1Z1VNOG1ocHBSZ0gwMkJSQzhySHNETjI5VzktQk54SzF3aTJWbVJ5YXNjanhpR1ZzeWZ0U21kc2xuYUNSYS00LXpyUWZzdkhPbkgtaXBtT2didXhnYjliZF9leWNJa0ZGU0dvNy1wXy1vSW1GaEhHcDdnN3FXMUtfdWxJUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.223Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mvv619ww-zkdn",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Cetilar unveils blue Ferrari 499P ahead of Hypercar debut - Motorsport.com",
    "suggestedHook": "Hipercarros: Cetilar unveils blue Ferrari 499P ahead of Hypercar debut",
    "summary": "Cetilar unveils blue Ferrari 499P ah",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMWdoRzZMbUVYb01ua2Y0VHdCYlZmYXJOM0tYXy1sT3RDNGE5ZmVKSUdqeHZNOV9NaUNiNWxqZkxpVTFqbHUyUlhZbEZSN09UNklzTW52RWE0bks1bm9tSy1obWVYaWlDMTFiWVBtUXVndlZaajBWTE1YUDg4WF9lZnQyMll1bXp3ZVBCU0JhVVV4aENDMVlZZ2pWX24?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.184Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mvv619yu-pa4c",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Billionaire’s $300m superyacht spotted in Cairns - The Cairns Post",
    "suggestedHook": "Náutica de Elite: Billionaire’s $300m Superiate spotted in Cairns",
    "summary": "Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNVW1BZUg3TVpabWtJS0xUVFZISkZNN1BwZjRrR2tUWlR5V1RNekdGTUpsblBOYnN4VjVEeGp1SWNDcFdYRS1hQUJrZk96VFZKVFhWVGVud0VQTFdiWFhmaXMxWWhPUjhWY2l2ckJPVk1OVVRCTzV0MzV6UC00RFIxODJkeDQxZnJEM19YNC1GeWswM2pHdDZuNXVqb1FZcFNJZUN6MDFqRTIwbnQxd1d4ZUI2bDk0aGxoQWozMHEtUkxoX0RLTFVrTGNSSE5fVlZqRUJuSWVPTzdjNDQwdDNzZnNVclFBMWVfUnZ2cDNzdU4?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.254Z",
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
    "id": "pauta-live-arquitetura-mvv61a07-5dfw",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Russian crown jewel from Romanov dynasty could fetch £1.5m at auction - AOL.co.uk",
    "suggestedHook": "Patrimônio & Leilões: Russian crown jewel from Romanov dynasty could fetch £1.5m at auction",
    "summary": "Russian crown jewel from Romanov dynasty could fetch £1.5m at a",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPa0NXMjNaUHN3NGlFLWZRczFoQlY1c3RkVUpwZ2x5SXpmOElqU29ObEZpQl9IY2tjMkxRU3FyREVkYy1IM3EtZVNTU2xqSzRUcFhGMFlGN3d5M2I0UHQ5QVVLakZBbmZ2a3k4RlAxZnBsdDNBQ3A2V3N1MjktQzB2bzNNUGk5NWxy?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.303Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mvv619wh-l50c",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Hands-on – The O&#038;HoraPictor Smoked Ocean Volcano Grey Explores Enamelling, at a Fair Price",
    "suggestedHook": "Hands-on – The O&#038;HoraPictor Smoked Ocean Volcano Grey Explores Enamelling, at a Fair Price",
    "summary": "While O&#38;HoraPictor might be a young brand we only discovered recently, our first experience with one of their watches left us very content with what they have to offer. The brand takes the centuries-old tradition of enamelling and gives it a new spin with fresh textures and colours, at attainable prices. This isn&#",
    "sourceUrl": "https://monochrome-watches.com/hands-on-review-o-horapictor-smoked-ocean-volcano-grey-enamel-dial-sellita-sw200-specs-price-live-pics/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.169Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/HoraPictor-Smoked-Ocean-Volcano-Grey-Enamel-Dial-Accessible-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvv619wi-cgo9",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – Closer Than Ever to the Antiqua, the New Louis Erard x Vianney Halter Collab",
    "suggestedHook": "Alta Relojoaria: First Look – Closer Than Ever to the Antiqua, the New Louis Erard x Vianney Halter Collab",
    "summary": "Geneva Watch Days is always a treat, but 2026 held two collaboration surprises for the MONOCHROME team, both involving maverick French watchmaker Vianney Halter. Bulgari’s collaboration with Vianney Halter produced a bold Antiqua-inspired Octo Finissimo Dual Time. The second, revealed to us as a sneak preview by Manuel",
    "sourceUrl": "https://monochrome-watches.com/louis-erard-x-vianney-halter-futur-anterieur-antiqua-inspired-collab-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T16:07:31.170Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/louis-erard-x-vianney-halter-futur-anterieur-antiqua-inspired-collab-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvv619wj-wjkk",
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
    "createdAt": "2026-10-30T16:07:31.171Z",
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
    "id": "pauta-live-arquitetura-mvv619w3-32tm",
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
    "createdAt": "2026-10-30T16:07:31.155Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/2115-River-Oaks-Boulevard_Pavilion.jpg",
    "imageIsFallback": false,
    "status": "published"
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
    "status": "published"
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
    "status": "expired"
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
    "status": "expired"
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
