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
    "id": "pauta-live-supercarros-mwow0nj5-tlxr",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 95,
    "rankingTier": "S+",
    "originalTitle": "Clarkson’s Ferrari not only finds new owner, but also sets auction record - The Supercar Blog",
    "suggestedHook": "Hipercarros: Clarkson’s Ferrari not only finds new owner, but also sets auction record",
    "summary": "Clarkson’s Ferrari not only finds new owner, but also sets auction record The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQZFlpWXZwSGNtMVJzUmVUUFFNVmdaeVhzV3pmRUdoYV85SVlXMnlEX0lVXzE4VGtIWXllOVJ2OEN0NUJfZUdhWXlSSGdGT2tabzMyVEVyZlppQTVuQ1ZWeFMtMXo0dkkzbTR4R0JtTG90NGxiQ1M5XzZLbUgwaU1raENTNkpRZmNLVmpqamZDT0o0RmRWTlRvWHJKeVpSaXlUOUFfV00ydw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.297Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwow0npo-itak",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "This german shipyard has made buying its 229-foot Aruby superyacht like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne - Luxurylaunches",
    "suggestedHook": "This german shipyard has made buying its 229-foot Aruby Superiate like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne",
    "summary": "This german shipyard has made buying its 229-foot Aruby superyacht like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA1OEI5YmN6dFE2OVJmTGRGa1J6ZkpYZUNjN1JNVlJvUXJ5QjcyMG1LRFFDWWJIUFo5b09tVktnMjNuMzVQbndUZ3ZYdlVYdEZWaUJKZkg0MjY3ZXgtNEpnbFF1WTE3dTBTOV91U0tiYnc0cUFIaEdhY2w4ZW1xa1U?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.532Z",
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
    "id": "pauta-live-supercarros-mwow0nmy-55h0",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Crashed Ferrari 296 GTS up for auction at Turners - Auto Trader NZ",
    "suggestedHook": "Hipercarros: Crashed Ferrari 296 GTS up for auction at Turners",
    "summary": "Crashed Ferrari 296 GTS up for auction at Turners Auto Trader NZ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQd1Y0QWpqNGtCcFAwc1ZXMTItMlRiZ1hfaFdyYmF1aUozSmtER2w3NnJxUFJvT0FieEZ6al9FMVdXb1ptdXhSdlE0dE8wejdDZXJIbl9KOWZmSnk5LTNkd0R4V3NiZVMzNlVxQ2E4ZjhIc0xxNFlkVGExb0JKb3FNdWtkNFhNUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.434Z",
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
    "id": "pauta-live-destinos-mwow0ngk-yfds",
    "source": "Robb Report Global",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "You Can Park Your 100-Foot Yacht Behind This $39 Million Fort Lauderdale Mansion",
    "suggestedHook": "Náutica de Elite: You Can Park Your 100-Foot Yacht Behind This $39 Million Fort Lauderdale Mansão",
    "summary": "The property has deep-water frontage with a private dock, along with two outdoor kitchens, a Turkish bath, and a rooftop deck with a hot tub.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/fort-lauderdale-39-million-waterfront-mansion-1238846643/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.204Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/725-Middle-River-Drive-5.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwow0nnt-0wbh",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "A $750 Million Hydrogen Superyacht Needs More Than Fuel Cells: It Needs Places to Refuel - EVWORLD.COM",
    "suggestedHook": "A $750 Million Hydrogen Superiate Needs More Than Fuel Cells: It Needs Places to Refuel",
    "summary": "A $750 Million Hydrogen Superyacht Needs More Than Fuel Cells: It Needs Places to Refuel EVWORLD.COM",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOWEpNQUE3Ykl2R05VLTRINDVwZTVVLVFkWG9BeVpUT3dzbmpkSXZWYVJ5ZnNibVlfTkU5Ti0wbHRLNnNFSWpBMVlnNHBxSTRXWFJzMEpOV3I0dko4ZzhSMktNVTBobmU4NmQ2ZTR3NXhFV0NxZDYxWnc1ZFVRQzFONDM5dU5xZWxYQ18zdFl3dnBscWR5dWVRaXVhQ1c3VjlHQ0IzODBYWTJUa1JQSU1MRVBJXzIyalZKMFlsNWNVMTBpM2E5LUZTWldn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.466Z",
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
    "id": "pauta-live-arquitetura-mwow0nnc-pmpb",
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
    "createdAt": "2026-11-20T11:20:11.448Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwow0nkw-3t5k",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "No self-driving Bugatti for the next 20 years, says brand’s US boss - The Supercar Blog",
    "suggestedHook": "Hipercarros: No self-driving Bugatti for the next 20 years, says brand’s US boss",
    "summary": "No self-driving Bugatti for the next 20 years, says brand’s US boss The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOWW9STnFLNzM3MEZ5bTBZT2k5TFNydzE2bGZaSUxLaUN1MF8yMzNrNVJ1aWZLOWtDeENvT3d4NmdfWEpIQkV1U1Vod3VGSDBMRVdNNGJEbmYzTWJBd3plUVZqbUxhTmZWVVI1M21KaTlLVG56N3Y1YjdabVM1TXo0b0FlSUdmR0hpd1d3VmFGZ0plcTA4emJGbDlsc2d5bFU?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.360Z",
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
    "id": "pauta-live-arquitetura-mwow0nz3-r1h1",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Romanov Sapphire Sells for $4.9 Million at Sotheby's Geneva - Haute Living",
    "suggestedHook": "Patrimônio & Leilões: Romanov Sapphire É Arrematado por $4.9 Million at Sotheby's Geneva",
    "summary": "Romanov Sapphire Sells for $4.9 Million at Sotheby's Geneva Haute Living",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOM29QOGUxb2duRGtUUWgyZ2k5VjZvUDctdzdKdnVWZUlRQXNzajF4WjVwZmFiMFBmRXlVYjlmR0V1NWlCUnRFMzRmV2dxR2JjbEx5Q1ItTE5wOFZrU2ZsNFJlZndHNzZIaHhVbndLUHVLRnJyNDZpaEtVd0NIbzROVml5VVpmTlZzZXM1dlZQT1ZfSC1n?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.871Z",
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
    "id": "pauta-live-arquitetura-mwow0o0y-i7lv",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It - Fashion Times UK",
    "suggestedHook": "Patrimônio & Leilões: Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It",
    "summary": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It Fashion Times UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQaHo4M3gyQ0EtdGF3cllWTmNSb2dxdEktM3doTHVvY09abUFvX2lWUzZzbHVUc3FsQ3hQajFweGRkNHo3ZExwT09Wd2w5S2Jwbjd6RkFaZ2NIdkpTOG54LW5Idy1aNy12bkt1dWNKZWpMSDJOT2VBOVl4a2huQktmNkJSWkV2UQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.938Z",
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
    "id": "pauta-live-relogios-mwow0ngy-tohf",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Introducing: The Roger W. Smith Series 7 Annual Calendar Tourbillon",
    "suggestedHook": "Apresentação: The Roger W. Smith Series 7 Annual Calendar Tourbillon",
    "summary": "To celebrate 25 years of his brand, Smith unveils a complicated watch, thoroughly grounded in his past and his mentor George Daniels' legacy.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-roger-w-smith-series-7-annual-calendar-tourbillon",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.218Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/images/8ca685ea-dfd0-4836-b76f-604c15a4f586/RWSSeriesSevenFront.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwow0nhw-e4pq",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – Nomos Goes Black-and-Gold with the new Noir Series",
    "suggestedHook": "Alta Relojoaria: First Look – Nomos Goes Black-and",
    "summary": "When you think about Nomos, in particular some of its most emblematic models, you might picture a steel watch with compact dimensions and a Bauhaus-inspired silver-plated dial, time read with blued hands and black printed markers – something like this. And yes, this is true for the timeless Tangente, the classic",
    "sourceUrl": "https://monochrome-watches.com/nomos-noir-series-tangente-ludwig-tertra-hand-wound-steel-or-gold-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.252Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/nomos-noir-series-tangente-ludwig-tertra-hand-wound-steel-or-gold-review-13-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwow0ni4-wkna",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "First Look – Oris Welcomes Another Famous Character to Its Collection with the Doraemon Limited Edition (Incl. Video)",
    "suggestedHook": "First Look – Oris Welcomes Another Famous Character to Its Collection with the Doraemon Limited Edition (Incl. Video)",
    "summary": "What’s not to love about Oris‘ playful tradition of collaborating with characters from popular culture? It began with Kermit the Frog in 2023, whose appearance in the date window of the ProPilot X Calibre 400 brought a dose of humour to the titanium pilot’s watch. Miss Piggy followed in a smaller, pink-dial ProPilot",
    "sourceUrl": "https://monochrome-watches.com/oris-doraemon-limited-edition-big-crown-pointer-date-manga-inspired-video-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T11:20:11.260Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Oris-Doraemon-Limited-Edition-Big-Crown-Pointer-Date-Japanese-Manga-Inspired-video-review-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwoal8tx-6ydp",
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
    "createdAt": "2026-11-20T01:20:20.469Z",
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
    "id": "pauta-live-destinos-mwoal91r-viem",
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
    "createdAt": "2026-11-20T01:20:20.751Z",
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
    "id": "pauta-live-supercarros-mwoal8o0-88ix",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class - CarBuzz",
    "suggestedHook": "Hipercarros: Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class",
    "summary": "Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class CarBuzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9PNVNRSU45VjdUYmJKbkFMMExfUU5vTlFDZW8xMW1HWHg5aktJNGh4eVQ4WHItNGxlaUhpZEtyOTByOVctUnhzQS1vMW1SN0lQZG9pd1l4ZjRxY1VmMG93RXltWGwzOG5qakxUZk02eDdyRW80dWxlWUozTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T01:20:20.256Z",
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
    "id": "pauta-live-supercarros-mwoal8r7-5p9o",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI - CBT News",
    "suggestedHook": "Hipercarros: SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI",
    "summary": "SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI CBT News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5yWnVMY3N1d0FEWlM2ZGw5by0waEd5TXp3aDdFN3JJWm93ajJoc1NKVmhybzAxSU9CdnB5dVlCS2wya0dZWE45RERRdHRQcWxLTVNvNUFfOEV1YVpRS0hLT2Z3S0s1TldY?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T01:20:20.371Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwoal96m-t1jl",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s sets watch auction record in Geneva - Jeweller Magazine",
    "suggestedHook": "Alta Relojoaria: Christie’s sets watch auction record in Geneva",
    "summary": "Christie’s sets watch auction record in Geneva Jeweller Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOSlFBdEtJV29EN3RMY0Z3a2psQmFhV2JYbXRKUFdkWTRRX2lnRzBRbmUxNGs5U1NxXy1mWi12S3JzbzJZOUEzbkFzTVRHREVDbGtBVTh6Ny14QUJqcHBqOGE3MW5pem84UzVfT2lTbG42M1MwcWRhMGs5cGloTHNZejFNYWxpQm9UUFJmZzNlanZyU0VqMmcw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T01:20:20.926Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwoal98a-dmxt",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million - صوت الإمارات",
    "suggestedHook": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million - صوت الإمارات",
    "summary": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million صوت الإمارات",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPU1g3QzN6dE0zVldSNXRsLVVzNnhtRFRqS0Z0S0hMUEVYcEd5U1JjQzRSUElERDRaWU9zUjJlQWs1cFloWHNvU1FuRlJsWHA1emVKcm9QQm9GMlFGZDBIcWRxdWc3WWZzWXpONHFUdUFGZ0pQaUJWVnI1QjBwaDdBTy1QQVpWcGFJckNpOGVXUkFpSnZaVFBRdVBxb3ZNeTIzQ0h0VUhPSjlma3VhalhMNU9oSVFKdTQ2VW1NRk5lY3VxUTVyenRUZG9nTThwTFdVVVJuRnBCS2E4Qm5KaHRj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T01:20:20.986Z",
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
    "id": "pauta-live-arquitetura-mwoal8hm-q0dz",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "This $25 Million Tribeca Penthouse Has a Rooftop Terrace That Covers the Entire Building",
    "suggestedHook": "Patrimônio & Leilões: This $25 Million Tribeca Cobertura Has a Rooftop Terrace That Covers the Entire Building",
    "summary": "The top-floor loft is being offered publicly for the first time since the building was completed in 1920.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/tribeca-penthouse-with-rooftop-terrace-1238847765/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-20T01:20:20.026Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/427-Washington-Street-PH11.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwnvl02w-9ht1",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Bob’s Watches C.E.O. Paul Altieri Reveals His Incredible Vintage Rolex Collection in a New Book",
    "suggestedHook": "Bob’s Watches C.E.O. Paul Altieri Reveals His Incredible Vintage Rolex Collection in a New Book",
    "summary": "His 134 exceptional timepieces are collectively valued at more than $10 million.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/paul-altieri-vintage-rolex-collection-book-1238849455/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T18:20:14.888Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/not-for-sale-a-private-collection-of-vintage-rolex-watches-1.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwnvl17t-2d58",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Penthouse breaks Queensland apartment record in $34m sale - AFR",
    "suggestedHook": "Patrimônio & Leilões: Cobertura breaks Queensland apartment record in $34m sale",
    "summary": "Penthouse breaks Queensland apartment record in $34m sale AFR",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNZHFTVVVuR0I3YkdyNEswZDZuZENIVU9QdGcwajJtY0NRc1F3LTdUTERmUFU3c0t3VDI5Z09McTQ3NFhyUTBsWmlZbWxLYXhJcTBYdjQ1QjFmSGdZbTBpcGlqekN5NS1wMWlzOEphamRRVVJ4TlJ6ZkY0SW1LTVl6UnUxWXJlay0yU1h5eld6cWlXVlZfME9ZcnBsZDB5UVB0ZnJSWWpLU1gxeDFhOFVmRVR5Zjc0S2Zv?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T18:20:16.361Z",
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
    "id": "pauta-live-destinos-mwngkthl-b2bc",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' - IGN Nordic",
    "suggestedHook": "Slideshow: Photos From Gabe Newell's $500 Million Superiate 'Leviathan'",
    "summary": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' IGN Nordic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQT3Azd0JzcGFzRFBjN3BSSlV5WG9UWTUwUDNwQV9oUW5vMHE3SDA4Y2RmR2owZWZaLXZKRHVZLUxZNlJBSENrT2k3UndtaE9ubjNkLUh4dTlidXFjODNBejRvel9BbXFIeW52bVJlbHNlaEZRWjJ2LXRkaTZIbExUYk5Oa25CY2lXbWpqU2lPR2RVbzBXeWlFdFc5V2Z6eXIxYmgwUHFkLTc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.105Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
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
