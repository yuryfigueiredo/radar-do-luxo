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
    "id": "pauta-live-relogios-mwkhrhml-dxo0",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 91,
    "rankingTier": "A",
    "originalTitle": "A Rare Richard Mille x Rafael Nadal Watch From 2017 May Fetch Up to $400,000 at Auction",
    "suggestedHook": "Alta Relojoaria: A Rare Richard Mille x Rafael Nadal Watch From 2017 May Fetch Up to $400,000 at Auction",
    "summary": "The RM 35-02 in black Carbon TPT originally retailed for around $145,000.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/richard-mille-rafael-nadal-watch-bonhams-auction-1238844068/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.413Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/richard-mille-ref-rm35-02-ca-rafael-nadal.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwkhrii6-sm5x",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Abu Dhabi to lure world’s superyacht owners with premium experiences to boost billionaire tourism - Arabian Business",
    "suggestedHook": "Abu Dhabi to lure world’s Superiate owners with premium experiences to boost billionaire tourism",
    "summary": "Abu Dhabi to lure world’s superyacht owners with premium experiences to boost billionaire tourism Arabian Business",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOa0JhMkNyTjE1Ymtva09RUUxlblpMOTN3N2MwdG5odUxudktoRTFTLTdsbE5SbG0tLVN3U01kRzVaRjJQc180c0dMd2xvTWFwbDhiQUNENDBxLW0tZnc0VXRVVjRzeWc4dVY2VzJMc0FET1NkeGZmdHJmUzR1WEpsR3FvUm1CX0Q2STk4RXZkdTdDQ3RVNWozNzhnc280akl6NHJvWnhlbjJIYjNVRXFUSzJjNHZWcnAyV1E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.550Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwkhrijz-c6vp",
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
    "createdAt": "2026-11-17T09:30:05.615Z",
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
    "id": "pauta-live-destinos-mwkhrimh-f0ji",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "US billionaire's $300m superyacht spotted in Auckland - Newstalk ZB",
    "suggestedHook": "Náutica de Elite: US billionaire's $300m Superiate spotted in Auckland",
    "summary": "US billionaire's $300m superyacht spotted in Auckland Newstalk ZB",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPVGpRV3dTMWpKM2NqMmNpRmRvOXA2bTNjV09kc2FvYXBrdzRyVlRKdjhtQ0h2Tm9wZmNMTjVQdk12WUVrVnlua0V0RUxGeGc1ZUdwVzB5Q0pEMUVNdG9QcEFlai03Z0lrT1V6X0RXSnJsS1B6bWp0ZDVCdjdFYnhJaVZWbUpfSndlSU1nVl95RGItSUxGTVhYaVRrOFNYUHAzZm5hekVDekhSaE9ES3hxc2F0QQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.705Z",
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
    "id": "pauta-live-supercarros-mwkhri1d-4x2v",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine - Luxurylaunches",
    "suggestedHook": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine",
    "summary": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPck5LRE1oZGNycFdXanU2MHYyaEVXTVQ0ZmhVa0Uyd1RiZVJndG5jbkFOcE5pYUx4Zm9FSTByV01ReXNNbkQ5SEhhSkV4VFM1ZUJyandpb2VvU3RuZWozNjRHNWo5cVdCd2QwdHpIVElnSzZXRFM4TEdpMlp6dm5nTkpMRURWLTU0cDMtd0t0NGlNaGVGLVZGaDNFRnp4Rjd5?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.945Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwkhri6f-oic6",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million - WeRSM",
    "suggestedHook": "Hipercarros: Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million",
    "summary": "Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million WeRSM",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5iQm9LOUxPdFlDdGpfRW5lOG5HeDhYZU85WjhtTXIxQTd0UWFYaTdudTdBbmhLc2dhYkl6bzAyTy1kM2FQVldsYkFlQm9wWFJXX0J5TjBZTXFmNk9TLU92UFdwOXpyLVdvRUk2WQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.127Z",
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
    "id": "pauta-live-supercarros-mwkhribn-h82h",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display - Vogue Arabia",
    "suggestedHook": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display",
    "summary": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display Vogue Arabia",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNdUpDSmxhNjNTSExaa2NqSlFCQ25XcDRIWlp5ZlRkeHVUVFhOUmZUbzVJb0lxUWpNWlQ2N1VnRDFWTF84Zklnc0RCckQzZ0dpSG1sRmlTYUF6di1LbkFXZ0xzaHYza29zZElrb25oeUdsbWhNdGRtcG1OWjhSTXFxbkhaZU5vS3JlTUE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.315Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwkhriff-12c2",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "SRI Global Wins Auction for The Italian Sea Group - Megayacht News",
    "suggestedHook": "Patrimônio & Leilões: SRI Global Wins Auction for The Italian Sea Group",
    "summary": "SRI Global Wins Auction for The Italian Sea Group Megayacht News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNc1JLSDVLdFRta1VGMnAySmNCQnRKZVAtcl9faGNUZjBNN0F5NENHbjN5WUV5TllMMnlocHM4amp6cHIwWEFqdThCcmZwYThaQ1VRNlE4UlJsOEsxel9iVU1pengxbjlfUXBOYkVDdDViVHc3amVIcDNwbTlJZHVvWm9B?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.451Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwkhrhsk-ekjz",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "suggestedHook": "Alta Relojoaria: Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "summary": "The original TAG Heuer Aquaracer Solargraph x Time+Tide Sundowner, launched in 2024, was an interesting take on the Aquaracer Professional 200. With its sandblasted titanium case, warm rose-gold accents and khaki textile strap, it captured the spirit of the Australian outback. Powered by a solar quartz movement, this",
    "sourceUrl": "https://monochrome-watches.com/time-and-tide-x-tag-heuer-aquaracer-professional-300-sundowner-ii-titanium-dive-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.628Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/TimeTide-TAG-Heuer-Aquaracer-Professional-300-Sundowner-II-Titanium-Dive-Watch-review-4-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwkhrhso-l94o",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Introducing – Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "suggestedHook": "Apresentação: Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "summary": "The Japanese watch brand Kurono Tokyo was founded in 2019 by independent master watchmaker and product designer Hajime Asaoka. Acclaimed for his high-end, handmade pieces, Asaoka wanted to bring his sophisticated and distinctive design language to a wider audience at more accessible prices. With a strong focus on",
    "sourceUrl": "https://monochrome-watches.com/kurono-tokyo-structure-chronograph-s1-sports-chronograph-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.632Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Kurono-Tokyo-Structure-Chronograph-S1-40mm-Sports-Chronograph-Automatic-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwkhrhky-stzp",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Mortgage Mogul Anthony Hsieh Lists His Orange County Mansion at a Record-Breaking $125 Million",
    "suggestedHook": "Mortgage Mogul Anthony Hsieh Lists His Orange County Mansão at a Record-Breaking $125 Million",
    "summary": "The loanDepot founder’s ocean-view home in Newport Coast includes a wellness wing and two garages with room for up to 16 vehicles.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/anthony-hsieh-house-orange-county-newport-coast-1238841546/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.354Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/AnthonyHeiehHouse_NC_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwkhrhn4-k5tn",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "This 1958 Willem de Kooning Painting Could Fetch $18 Million",
    "suggestedHook": "Patrimônio & Leilões: This 1958 Willem de Kooning Painting Could Fetch $18 Million",
    "summary": "The painting was once owned by the museum's former president, David Solinger.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/whitney-museum-willem-de-kooning-sale-1238844072/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.432Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Whitney_deKooning_Christies.jpg",
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
