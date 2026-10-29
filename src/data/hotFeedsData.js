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
    "id": "pauta-live-supercarros-mvtqzlcn-vqfc",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "Ferrari value nears jaw-dropping $20 billion as crucial report released - RacingNews365",
    "suggestedHook": "Hipercarros: Ferrari value nears jaw-dropping $20 billion as crucial report released",
    "summary": "Ferrari value nears jaw-dropping $20",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNXzJERWdrUmYzOGRxZ0RkUnpZNS11R0RNd19zSEQxRVhwdlY0OERkUnJRU2NFT0R1V0VFNURZQ2Fzb3BtcW1sb0wxbnl3SUFZaHpMQVM1YUsyRE95bldhOGtaQkZzNWJURnhJajVid29ZWUhUTG5yRnlXb1RkQUlGbUctR0RXT0UtMC1LSVFVMWNCanRtWHNqZFlZLUc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.279Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
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
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvtqzle9-olgs",
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
    "createdAt": "2026-10-29T16:18:32.337Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mvtqzleb-bylt",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Inside the 249-foot wellness superyacht concept boasting NASA-inspired biohacking pods and IV lounges, the ultimate sea toy for billionaires like Bryan Johnson who are obsessed with living longer - Luxurylaunches",
    "suggestedHook": "Inside the 249-foot wellness Superiate concept boasting NASA-inspired biohacking pods and IV lounges, the ultimate sea toy for billionaires like Bryan Johnson who are obsessed with living longer",
    "summary": "Inside the 249-foot wellness superyacht concept boasting NASA-inspired bioha",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCQTBRNG1adHRQTzdXUjgzU3NrZnNxZ0d5OGprUE53TWFpbHFUYWlUUHZwbHM3V1dKeUNldzJYamlqYVdDOEFwaXRSdk9qS2tSZnhxNWNrMW1jWGNwTlA3MXZGTlhDTXJ4aUNGZWs3Rld6R1QxUTlSS1lnY2htZ0E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.339Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mvtqzlh7-fvvw",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Russian crown jewel from Romanov dynasty could fetch £1.5m at auction - Weston Mercury",
    "suggestedHook": "Patrimônio & Leilões: Russian crown jewel from Romanov dynasty could fetch £1.5m at auction",
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOakw5Ny0xeGRzV1pjcGlfUGpteUwxZmM3RTNWckE0WDNCZ2ZBX0lfeWJHVzVEbDN2d0htQzBHMVpkVmpsSnJoOWd6U1lvSTk1eWIzSFEzZXFLdFFCYzdJdlNyMmxXNDVkbVE5VWNsdldUazFvREVFNkhCNlROUWx0N1g2S2R6WHZPTDJEMGJqaXo1SVl1ZEpEWVBlM3A2Qlo4QUhDVTl0VVZvbVQ1VlZoa0JyMHl4NVk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.443Z",
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
    "id": "pauta-live-supercarros-mvtqzldr-ydyq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Bugatti Doesn’t Rule Out A Manual Transmission Tourbillon - AUTOJOSH",
    "suggestedHook": "Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista",
    "summary": "A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOQVBCUnc3akpjVmc0WW11anhwLVNQZ2FzZVVJNHpCV2E4MG5malFnTXU1eGVzem5lYjdtbXZhRVBJSWlMSENrc3RpMW9ldUlzeDVRRFUxMEdEdnJLOENaYmE2YlpMU1dzQllPY05WVVJtU2tHTWtPbEVZRmEzcEZDUVZSSm4?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-29T16:18:32.319Z",
    "validityHours": 24,
    "specsPreview": {
      "propulsao": "V16 8.3L Nat. Aspirado + 3 Motores Elétricos",
      "potencia": "1.800 cv combinados (9.000 RPM)",
      "painel": "Instrumentação esqueletizada em titânio e safira",
      "aceleracao": "0-100 km/h em 2,0s (V-Max 445 km/h)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
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
    "id": "pauta-live-relogios-mvtqzlca-u3u7",
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
    "createdAt": "2026-10-29T16:18:32.266Z",
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
    "id": "pauta-live-relogios-mvtqzlcc-rc2z",
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
    "createdAt": "2026-10-29T16:18:32.268Z",
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
  },
  {
    "id": "pauta-live-supercarros-mvspbx4m-ocih",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "In 2010, a collector paid $7.36 million for a 2,000-year-old Roman emperor's marble torso; after years on - The Times of India",
    "suggestedHook": "Hipercarros: In 2010, a collector paid $7.36 million for a 2,000-year-old Roman emperor's marble torso; after years on",
    "summary": "Engenharia de precisão, telemetria inercial e desempenho de pista sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiANBVV95cUxNLWVxWlRXQ3lWcGJnX1dOS1BpVUhRM2JOYUh3WGd1bGNQNk0wRmthRjFfZVEwMWJLVmZUX3loNnlJOWo5MjVHQ0hnTU1yY3RsNG5SSWc0ZzVUd1RIeHpYOEpOd0M3NlFFbHJvN3VHLVdDRE9YaDNQeng0M1ZEMlFoSV83UVZ1SjdTNkhkSVFSLU9pUkxabHRmWm9YcEp2RS1VdjA2cmlKV0w3WVdNM0RqYmh3RjQtNHZBM0xyNUNaTy1CUWwwZEstenVjSFUwekU0V0ZubnBZLTB4Q2VXdFV1VGdzNzdiSllYaTNtRmlmWWJZTjZSbVBVVW8xWkVDTnF5bnpqX3YycU1wcUlxdzVUaUxyaFdDTlpDUV9YT0RHZVVsY2VGdElMY3NMMDB1aGNTTnFwWmdwMXF1Vm0zYjF3TWVISDhlQ18xWkRIVVdVWVVtTUd4d2xqcF9lcEF4S3Z2Z25CNUozZV9TbTlON003RUVBNzFrVFA1VkNSSDdGSmNkLV92blpjZtIBjgNBVV95cUxPTHR1aHJxT0Y4UDJVWi1ZWVlOSHp5dlZpVEctYk1tMnZSSzFvY3dTTzI1NWhyS0xVallGU0psVEIzdzhacDVCbjRCbnV6LUhPbWJnYkQwdmY5aEt5V2RPb181b0xLOXZMZzkzRlBOa0NHNWxfRm9QSXk5Q3FXV01uXzFnUTFmcUc1RXJZeVl3VmVDSFJ0ZHJkN09ia2NGQkkyYmNKSVktbnVJQ3Q0QWdhT0EzZGwzS3oybzJhOGVDYlViSjJIcHc2cUk3U2pLajcxS05zeTBHSWRjOW5ZSHMtM3RwVnNhMFFrYWdWaHVNWnVreVpjVzhPV2pmc2JXUmFlczI3MFBKZ0VZS00wT1l3eEd1NUJQbTBweHBEbFY4a2JYSzdSaGdJNE1PRE93UF93bWoxUkJDWVpyX3VpRFZad0tUT0FzejB3ZVB6ODhUM0l6RTIxR2ZHMkJXTG1YZDZ6aEVpZE9Qb3hTckg5ZWQ3a0VycVFsWEpYVUtpdVNBTWhGOG02YngtaXZyYkRwdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:22.006Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvspbx49-99bc",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Venduto da Royal Yacht International un nuovo Benetti Motopanfilo 37M - SuperYacht24",
    "suggestedHook": "Venduto da Royal Yacht International un nuovo Benetti Motopanfilo 37M",
    "summary": "Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNN0dSZDBpMXFfUFI3V2dNRVFHRHJpRVF5WFl0T0JLR2lGRmtrT05NSWgtekFDUDZuZFM3UzR3Y3dLOU5TdmRUSDZTOHRRWkdRaFgySFVRZnBhR3NFbFVzYko4dGxtUFY1bW1xbVlrNFN6bUJXSVRDTzFiTkJWb0xJR0ZFeVAyM3NLeHJZWmZQMmtpaUNEZVZjUDBUUU1SeS03cmV6bi1PM0RrTzU3VVFJUdIBugFBVV95cUxObFVxM08yUDZaVmloY003V2NnWlNqUWUtUF9uYzlJSUk2WWx1TjE5RWVFYkFJME5mdVpwUkFDV2V3TXY4NXpMX1Z6eVBqS0hyYmNBX21FSVpKclkzUFRuQjRmZjI1RXhPQWE2ZTYtY3U1NVltSjVOWXBYOTVsaTI0c1p2YUowTzdWX1BJeHE3VEJDUG9fazJ1Zm1LQVRVMjc5YUVUNFFSUnQ3Z3AwcVJCckxBREkwNXBBdkE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:21.993Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvspbx2f-e50u",
    "source": "Robb Report Global",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "This 1956 Jaguar D-Type Is a Veteran Racer That Could Now Fetch $7 Million at Auction",
    "suggestedHook": "Hipercarros: This 1956 Jaguar D-Type Is a Veteran Racer That Could Now Fetch $7 Million at Auction",
    "summary": "Engenharia de precisão, telemetria inercial e desempenho de pista sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://robbreport.com/motors/cars/1956-jaguar-d-type-gooding-christies-auction-1238795342/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:21.927Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/1956-Jaguar-D-Type-opener.jpg",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvspbx4i-l5qt",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Sotheby’s Collectors’ Week Returns to Abu Dhabi With Fine Art Auction - CairoScene",
    "suggestedHook": "Sotheby’s Collectors’ Week Returns to Abu Dhabi With Fine Art Auction",
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOX1FLUWxvZWkxMkdDSmdhLTdtOGs2VFdZQnI5ZkpJRWFLUG1yRVRPenZ1Um4zejg1clpnV3llWWpPWjVLYkZjSDVEUi1FT2d1bVJneEJBUVRxaWhleUQ0ci1Hb2hwX1ZXS2NoU2RyeFU2UXJwMzRrTEZmNzBpeHJYTnpaYU9OYzRxNU1tOGZUaGJxdzZ4a1ZQTWphM0RIQlh3RzN3N3hhTUozUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:22.002Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvspbx4j-pazb",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "From $14.7M to $80M: Rare Klimt Landscape Headlines Christie’s Evening Sale - ArtDependence",
    "suggestedHook": "From $14.7M to $80M: Rare Klimt Landscape Headlines Christie’s Evening Sale",
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQaWdoUGlnRkNZczM1WmZTVDZWdjVrNGhUQmVUclNwN1dKRGxMcGxrcUpIMEkzM255RGdVSG1xTm9TM2hJajJwc2tOSktDS0JYWmpvbzA3Y0hDMldBMW8tOGY4cWxnR1ZPcW5fSExhaUNnSmV3YkFMcTkzejRCVzQyTnNCWlJDWmNXRE9kMkxNa3YxLThsYjVWamxOVkJGLTJPQ0hqTFBFRlFBYTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:22.003Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvspbx2a-trdz",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Former L.A. Dodgers Owner Frank McCourt Asks $125 Million for His Boca Raton Mansion",
    "suggestedHook": "Former L.A. Dodgers Owner Frank McCourt Asks $125 Million for His Boca Raton Mansão",
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/frank-mccourt-house-south-florida-boca-raton-1238793613/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-28T22:44:21.922Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/10/FrankMcCourtHouse_FL_FI.jpg",
    "status": "available"
  },
  {
    "id": "pauta-forbes-1",
    "source": "Forbes Money",
    "sourceCategory": "Wealth",
    "badgeColor": "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 94,
    "originalTitle": "Billionaire Family Offices Boost Physical Gold and Art Allocations to Historic High",
    "suggestedHook": "O Relatório Reservado de Family Offices 2026: Por Que Fortunas Soberanas Estão Aumentando em 35% a Guarda de Ouro Físico e Peças Únicas",
    "summary": "Com a volatilidade dos mercados de dívida soberana e a erosão cambial, os maiores gestores de fortunas multigeracionais de Zurique, Londres e São Paulo migram posições para cofres de segurança máxima.",
    "sourceUrl": "https://forbes.com/billionaires/family-offices-wealth-preservation-report",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 08:00",
    "createdAt": "2026-10-25T18:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "alocacao": "Ativos Físicos tangíveis em alta de +35%",
      "jurisdicoes": "Suíça, Cingapura e Liechtenstein",
      "estrategia": "Preservação de capital multigeracional",
      "fonte": "Global Family Office Wealth Benchmark"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
    "status": "duplicate"
  },
  {
    "id": "pauta-boat-1",
    "source": "Boat International",
    "sourceCategory": "Marine",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "rankingScore": 95,
    "originalTitle": "Lürssen Delivers 122m Megayacht Kismet With Two Helipads and Cryotherapy Chamber",
    "suggestedHook": "Lürssen Kismet: O Megaiate de 122 Metros e US$ 3 Milhões por Semana com Heliponto Duplo e Câmara de Crioterapia Submarina",
    "summary": "Entregue pelo histórico estaleiro alemão de Bremen, a nova embarcação redefine a navegação transoceânica com design assinado pela Nuvolari Lenard e autonomia para cruzar o globo sem reabastecimento.",
    "sourceUrl": "https://www.boatinternational.com/yachts/news/lurssen-kismet-superyacht-delivery",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Hoje às 10:15",
    "createdAt": "2026-10-25T20:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "comprimento": "122 metros (400 ft)",
      "estaleiro": "Lürssen Werft, Bremen, Alemanha",
      "locacao": "A partir de € 3.000.000 / semana + despesas",
      "diferencial": "Spa balinês completo e câmara de crioterapia a -110°C"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1400",
    "status": "duplicate"
  },
  {
    "id": "pauta-boat-2",
    "source": "Superyacht Times",
    "sourceCategory": "Marine",
    "badgeColor": "border-blue-400/40 text-blue-300 bg-blue-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "rankingScore": 93,
    "originalTitle": "Feadship 84m Obsidian: The Hybrid Eco-Superyacht with Carbon-Neutral Cruising",
    "suggestedHook": "Feadship Obsidian: O Monstro Híbrido de 84 Metros com Casco Otimizado por Inteligência Artificial e Baterias de 4.5 MWh na Holanda",
    "summary": "O estaleiro de Haarlem combinou geradores a biodiesel HVO com um banco de baterias equivalente a 45 carros elétricos, navegando 35 milhas náuticas em silêncio absoluto sem emitir um grama de fumaça.",
    "sourceUrl": "https://www.superyachttimes.com/yacht-news/feadship-obsidian-84m",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Ontem às 16:00",
    "createdAt": "2026-10-25T09:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "comprimento": "84.2 metros",
      "estaleiro": "Feadship, Holanda",
      "baterias": "4.5 MWh em fosfato de ferro-lítio",
      "autonomia": "5.500 milhas náuticas a 12 nós"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400",
    "status": "duplicate"
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
