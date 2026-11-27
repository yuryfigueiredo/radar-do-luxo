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
    "id": "pauta-live-supercarros-mwzb3vb3-vl0h",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 91,
    "rankingTier": "A",
    "originalTitle": "An ultra-rare Bugatti Bolide with just 70 miles on the clock is heading to auction beneath the Louvre. It is expected to fetch $4.7 million, but there's a catch that could push its price beyond $6 million - Luxurylaunches",
    "suggestedHook": "An ultra-rare Bugatti Bolide with just 70 miles on the clock is heading to auction beneath the Louvre. It is expected to fetch $4.7 million, but there's a catch that could push its price beyond $6 million",
    "summary": "An ultra-rare Bugatti Bolide with just 70 miles on the clock is heading to auction beneath the Louvre. It is expected to fetch $4.7 million, but there's a catch that could push its price beyond $6 million Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQZk9CaThlZTExNkRTeUxtbFJyYXRuQ09VLWk1N05odG56UGVmdGhfODFPYU41Qkk1MXJ3Vi13V095N2QxTW1SV0MtNGItR0VkeGZwS3A3b0hQVS1Jel8wVDJMcjh4QzVjVkNOdmtYbWp0czlPVi1WMlFVQWhmWklQTXYxRXJPaUJKU050WFMwbWJMTzY3?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.343Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwzb3veu-uzlb",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "An ultra-secretive UK billionaire has taken delivery of his brand-new $220 million superyacht, Love, four years in the making. Stretching 262 feet and pairing Sinot-designed interiors with sprawling outdoor decks, the vessel is now sailing at full speed to Gibralt - Luxurylaunches",
    "suggestedHook": "An ultra-secretive UK billionaire has taken delivery of his brand-new $220 million Superiate, Love, four years in the making. Stretching 262 feet and pairing Sinot-designed interiors with sprawling outdoor decks, the vessel is now sailing at full speed to Gibralt",
    "summary": "An ultra-secretive UK billionaire has taken delivery of his brand-new $220 million superyacht, Love, four years in the making. Stretching 262 feet and pairing Sinot-designed interiors with sprawling outdoor decks, the vessel is now sailing at full speed to Gibralt Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9JOE0yNHNxOWlkYnY2NWF2U2NoRlNHTGxwM1lwZmFISEtyRk1ocWNzZnFvTjFMYjJjQTZXZlNTaEE5RDZjcFYzLVdCeW5lTGMwdzJCazdzUzhwNGo1TVJRUVRzQjlWQVNmRUdCN3RSU3NTVjdmVzNLSGlkMHdrQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.478Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwzb3vl1-03p0",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ice-breaker style €300m superyacht boasting a beach club and helipad linked to British-American billionaire behind Warner Music docks in Gibraltar - Olive Press News Spain",
    "suggestedHook": "Ice-breaker style €300m Superiate boasting a beach club and helipad linked to British-American billionaire behind Warner Music docks in Gibraltar",
    "summary": "Ice-breaker style €300m superyacht boasting a beach club and helipad linked to British-American billionaire behind Warner Music docks in Gibraltar Olive Press News Spain",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQakdVWk43V21VSEs5eWljTDN3SEpYLXB0VDhobW5EaW45dlZBTW40WVRZUUI2NWNiSTRsUzhvT2pGdkJaRGJmTWpOLXlCUjlJVXVEVFNJOGloZHlwZ3RsY3Etc21BcUVPaDA4Q0pzZkNlOUl2UkhIUmVHeE5rWkVwbW1ERlZ0amtLdEc5UUNDMzMtWnV0XzBObTFseVBDUUdHeERvR0JqNnJVdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.701Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwzb3vhs-cq1x",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Superyacht worth £75 million spotted in Elizabeth Harbour - Jersey Evening Post",
    "suggestedHook": "Náutica de Elite: Superiate worth £75 million spotted in Elizabeth Harbour",
    "summary": "Superyacht worth £75 million spotted in Elizabeth Harbour Jersey Evening Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNVS1OMXZvTFFKdzVIb2p2Mmo5b0pkSGdSdm51TlZvTmVEbzVpcHdnQnhHNm1QTXROdlhWVS04c1hqVnptVS1jTElKT0ZZSjMxWU5MZlNZVFdaTERJaTVkYklHb3lyVXcyY0hjSk9sU01VOXVFTC1SZllmMkRzclJZbFpmR2hKUjRXVjRjN0VZQkdFMFVBX0I1QXREaS1NMDJPUkk4dDFn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.584Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwzb3vh6-553m",
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
    "createdAt": "2026-11-27T18:20:17.562Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwzb3v9v-92yh",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ford takes aim at Ferrari with new GT41 Hypercar ahead of Le Mans return - The American Bazaar",
    "suggestedHook": "Hipercarros: Ford takes aim at Ferrari with new GT41 Hypercar ahead of Le Mans return",
    "summary": "Ford takes aim at Ferrari with new GT41 Hypercar ahead of Le Mans return The American Bazaar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNM3VXMDNqcHRSNXc0Q1R4MDBXU3ZPYXBSYUQ5ZnRSbldsZVU3TEpseUVhQlduRXNUa1ZpTVNWSlV6ZkhzT1VOSnlDaWVWNGFVbk5IYUo3UjNPbFM3d042RTZmWFRka0YtT09mdGtTdXlnMng4WU9HNk1ucEd6TTF2R19hQW5QQVlGdVFMdDVRaDM3RzdZTS1pWGt2VW1VcTVHMWc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.299Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwzb3v70-unwg",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Inside a $12 Million L.A. Estate That Once Belonged to Legendary Cartoonist Joseph Barbera",
    "suggestedHook": "Patrimônio & Leilões: Inside a $12 Million L.A. Estate That Once Belonged to Legendary Cartoonist Joseph Barbera",
    "summary": "The late animator's Studio City residence spans nearly two acres and includes a collector's garage for more than 25 cars.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/joseph-barbera-house-los-angeles-studio-city-1238859717/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.196Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/JosephBarberaHouse_LA_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwzb3vak-t7od",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Charles Leclerc makes rare contract declaration over Ferrari number one status - RacingNews365",
    "suggestedHook": "Hipercarros: Charles Leclerc makes rare contract declaration over Ferrari number one status",
    "summary": "Charles Leclerc makes rare contract declaration over Ferrari number one status RacingNews365",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQMWJ3bnQweGNlWEIxNXpvaEJNdzd5MGdRV1huVk53UVhBV2g4ckkzb0V0TF8wbzBTdFVCZ2dfdHBaVmdFQXVmSnJmSHE4QTFkckVrVUVvWUY4dl9qR05wSVZuTkdSVkJYY2tWUUFfdEZoUE91S09nbVRRNWVabE41YjlGeklxcEV0bUNVZlEzTXJOd2FUeE95MmF2NmZRMUpsVUt3bjN2QQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.324Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwzb3vqc-syqe",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Christie's New York Tops $1 Billion in Sales - Wisevoter",
    "suggestedHook": "Patrimônio & Leilões: Christie's New York Tops $1 Billion in Sales",
    "summary": "Christie's New York Tops $1 Billion in Sales Wisevoter",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQUUpSZVJyLVFpcEg4ZmFqbmdUVVlrOGtSQW44YzByeGZIZHo5VVJReUdWRkVlQWstR2l1SEcwSHVRaFhHS0YxdjdIOVVjWGZjNVo4bGVLOXJTZHBYY0ZobEd2MXBvcTlPSS12U3d0SVVTNlpoRkgxUGdOblF6YkxUUHUzNmJBRTJHZ1RYVGF0QmszVk85NEJNeHUzZlRqOXc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.892Z",
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
  },
  {
    "id": "pauta-live-relogios-mwzb3vqh-d5kb",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Phillips to Hold Record-Setting Watch Auction in December - Wisevoter",
    "suggestedHook": "Alta Relojoaria: Phillips to Hold Record-Setting Watch Auction in December",
    "summary": "Phillips to Hold Record-Setting Watch Auction in December Wisevoter",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNaUFpUlhyaDAyZzgzWnJyYkh1TkllV3N3Sm9lMWJKODJZMXRhblVCSnVHTmhINkpueWs2T2R5X2YzM2JPSGxSbWJndXNzdE1tZDV3ajFVeFhQakdFWFRXaUY4cGtXekF1bGtqQks4WW1uc25iZ0R1N1VGUEZueGZVd3RjXzVXbXpDMkRCeTdETEptcEdnM3lmZVpiZjU4S19Bd0E3OGRwbw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.897Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwzb3v8w-up1e",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Introducing – The Jaeger-LeCoultre Reverso Classic Monoface Small Seconds in a New Mid-Size Gold Case",
    "suggestedHook": "Apresentação: The Jaeger-LeCoultre Reverso Classic Monoface Small Seconds in a New Mid",
    "summary": "Jaeger-LeCoultre’s famous swivelling Reverso watch was born in 1931 on the polo fields of British colonial India, following a request by army officers for a watch tough enough to survive a match without shattering its glass. Immediately recognisable by its sleek Art Deco silhouette and reversible case, the Reverso",
    "sourceUrl": "https://monochrome-watches.com/jaeger-lecoultre-reverso-classic-monoface-small-seconds-in-a-new-mid-size-gold-case-q3862520-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.264Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Jaeger-LeCoultre-Reverso-Classic-Monoface-Small-Seconds-Pink-Gold-New-Size-2026-reference-Q3862520-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-estilo-mwzb3v8m-lo7o",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta-Costura",
    "badgeColor": "border-rose-500/40 text-rose-400 bg-rose-500/10",
    "category": "Alta-Costura",
    "categorySlug": "estilo",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Introducing – The Lyrical Slim d’Hermès Sous le Charme d’Orphée",
    "suggestedHook": "Apresentação: The Lyrical Slim d’Hermès Sous le Charme d’Orphée",
    "summary": "Characterised by impeccable artisanship and a refreshing dose of poetic licence, Hermès frequently borrows design cues from one product line to reimagine them on another. Watches are no exception, and like a host of earlier equestrian-themed models, the latest Slim d’Hermès Sous le Charme d’Orphée reference borrows",
    "sourceUrl": "https://monochrome-watches.com/slim-d-hermes-sous-le-charme-d-orphee-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T18:20:17.254Z",
    "validityHours": 24,
    "specsPreview": {
      "atelie": "Savoir-faire artesanal europeu",
      "materia_prima": "Couros e tecidos nobres de curtume tradicional",
      "curadoria": "Clara Meirelles"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Hermes-Slim-Sous-le-Charme-dOrphee-enamel-miniature-painting-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwyw3pwk-pk5a",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Exclusive: Lilou Wadoux on her WEC Hypercar goal, representing Ferrari and her remarkable decade-long journey - DIVEBOMB Motorsport",
    "suggestedHook": "Exclusivo: Lilou Wadoux on her WEC Hypercar goal, representing Ferrari and her remarkable decade-long journey",
    "summary": "Exclusive: Lilou Wadoux on her WEC Hypercar goal, representing Ferrari and her remarkable decade-long journey DIVEBOMB Motorsport",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPNFZ6SVhydVo4b055OVBNY1FWZWJvSkF1clRHVmFDMUltRFIzbThiMF8yLTJod1BwNWxBd1dkOWw0di0wWUR2eHNSUlpaZjlaLWp2UHpuVkpRRnNYMWlsVnZqc1lEZnlZbUlhYWNhX1hMX1pEOTFyTnpCVWxXQXd2YjlvX0FLN0NYVEhkRmRXSFVMeW85SC1kcEJ5eEJHYXRWcUE1dlQ3X2FKWGpBWk9wVy1hYnBYU0lRcG1odUdpZ29WbGw3blJIUzJfQ3E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-27T11:20:16.100Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwy48nql-xgr8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Saturday night vibes at Armature Works by the river — cruising in a Bugatti and Ferrari 🏎️✨ #Tampa #Bugatti #Ferrari #Supercar #NightOut - NewsBreak: Local News & Alerts",
    "suggestedHook": "Saturday night vibes at Armature Works by the river — cruising in a Bugatti and Ferrari 🏎️✨ #Tampa #Bugatti #Ferrari #Supercar #NightOut - NewsBreak: Local News & Alerts",
    "summary": "Saturday night vibes at Armature Works by the river — cruising in a Bugatti and Ferrari 🏎️✨ #Tampa #Bugatti #Ferrari #Supercar #NightOut NewsBreak: Local News & Alerts",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgJBVV95cUxQb1hPc1pMRDhKTUhIYnozUDB2cThsNDA5UXR6aGNIVk1hWUxEeDNiS3FOZ3B6M0ZlbUdZTWpBOHNqSllXdW5EeW9pNGxwQWlvSlNCQndnRm53VGx3YjdodE5xbWJTT3JmS1R2UnQ1Qkw4UXJPLWlVQmEwMGtoU29iWFBxaWpocGFUWTB6cW82bjVNNDRVck1DVzBRak9TYW51TTVZVHJtc1czSE1DNlQ2ZXVIbW9jTUMzRFFQUW1XU2JaMjZIZGZfczdzRDlNc3hZNS1LUkxsMEhlUC11NU9uTENCZk9oNTBtQ2pGZTJxTUpkWlNWS3ZQMXF6NHdDWURlQlN4VWVkMl9hUktFbHV5M1c2Ml91dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-26T22:20:17.325Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwy48o3z-ujkd",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "A Rare Alexander McQueen Gem Is Coming To Auction - ELLE India",
    "suggestedHook": "Patrimônio & Leilões: A Rare Alexander McQueen Gem Is Coming To Auction",
    "summary": "A Rare Alexander McQueen Gem Is Coming To Auction ELLE India",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOYkdUeFlmTTlxemxfWXVNZ3RHejEtc28xd1BNYlhYWTJsTHpQcFhjbmVxZzJCSnl0S2lEOGxESEtaaEk0TVZtTkIyZks4bW5FR3hPSGRGNFJDb2xiYWhwbzV3aHFtZ1VpWjRfcmIzcktDR1ZlMjlMb0ZaSFExVjhSa2FhY1R0OXZ6RWc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-26T22:20:17.807Z",
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
