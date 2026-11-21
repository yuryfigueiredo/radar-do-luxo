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
    "id": "pauta-live-destinos-mwqqgnqu-dlyd",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Abu Dhabi targets billionaire tourists with superyacht push - TravelMole",
    "suggestedHook": "Náutica de Elite: Abu Dhabi targets billionaire tourists with Superiate push",
    "summary": "Abu Dhabi targets billionaire tourists with superyacht push TravelMole",
    "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBNR1hqSDVxOERnWGdYd24yM2xOM2czWFB2Z1NvZG5RaDBtS294S0Q0Y2kxSUp6Zi1ZRDJIUjNqMU95VTlKWHd3TEtFejdMNzB0Q0VpbmZYUlFWUlJvRUhXX19zdXRhWDYweE1KeHNRTVNRZkFSU2ZDRQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.726Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwqqgnle-g72u",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "A worried call from his mother put a CEO behind the wheel of a $3 million Bugatti Chiron at 88 mph in a 56 mph zone, but the judge also had his five previous traffic convictions to consider - Luxurylaunches",
    "suggestedHook": "A worried call from his mother put a CEO behind the wheel of a $3 million Bugatti Chiron at 88 mph in a 56 mph zone, but the judge also had his five previous traffic convictions to consider",
    "summary": "A worried call from his mother put a CEO behind the wheel of a $3 million Bugatti Chiron at 88 mph in a 56 mph zone, but the judge also had his five previous traffic convictions to consider Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPbDZIdU9KNHFwTU44QlZRVk1BeWNfYXpmWEJFdTJLU2Rzc2xIVENMelh0TGlFZV9yWGU2NG9QZEl6MlZITVMxVVpBczZJTHhvR0FCUEgydjktcWJsWVYzWkIwXzVqcmlKTWpnUzQxS3RiY2tjRzVYNDJvOVV1bXZhYjdmNVhvSktVZDhoUlRLWQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.530Z",
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
    "id": "pauta-live-destinos-mwqqgnp4-pvgx",
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
    "createdAt": "2026-11-21T18:20:12.664Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwqqgnqa-aoka",
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
    "createdAt": "2026-11-21T18:20:12.706Z",
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
    "id": "pauta-live-supercarros-mwqqgnna-emj4",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Why GTA 6 doesn’t feature real Ferrari, Lamborghini or BMW cars - The Supercar Blog",
    "suggestedHook": "Hipercarros: Why GTA 6 doesn’t feature real Ferrari, Lamborghini or BMW cars",
    "summary": "Why GTA 6 doesn’t feature real Ferrari, Lamborghini or BMW cars The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNSkwwY053S08wU2xBWXA1aENqMENON00zM3RfSUxETDd5RmFaVS1GSmRKcjlLSnRjcHV6bzdEaUFYbmhCMjRIeGhmUnF1c0NQX3FMdXZxaDJnSV9jQUU2SUQ3OUZIRzI2Z3dKX1E0MVJ3aHFzQUdxM2g4Nm44VTNMY21LODlGWTlMTHZNY3I3NkFpa3dmSXFzbm53?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.598Z",
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
    "id": "pauta-live-arquitetura-mwqqgnxi-hn0k",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most - Forbes",
    "suggestedHook": "Patrimônio & Leilões: Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most",
    "summary": "Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQTFViQlFlbzJER3lJRUJySXhkd2hhSnV5OVlMMm0tSVpZTE5OZkQxcmF4RDVWUzEtV1hXaXlaaTA1bnFqUDFDYVpYN196NkwtQXVFR0lLeHBzQXJ0X2s2VEstS2lOa1BXSF9wNlE0NmZBWFVNTnJQQWYwQkRZZy1EYjRtTHc3bVJCcDVHcVUwdTVnbEF0VkVYdlNaRXJlTThPYkRZWExGM1JNY3dJUGhoS1Z0aEdpbTYtc1hWNlFsNHkzRDg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.966Z",
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
    "id": "pauta-live-arquitetura-mwqqgnxt-kmso",
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
    "createdAt": "2026-11-21T18:20:12.977Z",
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
    "id": "pauta-live-supercarros-mwqqgnjt-r8wd",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Steve McQueen’s Ferrari NART Spider Sells for $18.9M - Hagerty",
    "suggestedHook": "Hipercarros: Steve McQueen’s Ferrari NART Spider É Arrematado por $18.9M",
    "summary": "Steve McQueen’s Ferrari NART Spider Sells for $18.9M Hagerty",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOY0lBU1ZZRFBENmFPNzgtdVUxQXdNSFlETEppY19mcnNvZnIxZnVtT3J5bU9nMXpVek9JTEZoSThSa2pha2lQMk5mbjg4SlFZVW9pSUp4WXF5cFZEcW5VUEJ1eVdmMFFhZXF2NTV3bUJsZDV3eU9fRU5IQ0drb2JSZ0hoNlJ0MGRPX1JEaVFJaGpTZVE5b2xZbDNIaWFsamw5UFJScC1fdGwzd1Vsa05WSzFZUzJlNkNjZ0Rwclh2UVNVRkw5bktZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.473Z",
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
    "id": "pauta-live-relogios-mwqqgnj7-r4w3",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – Brellum’s new Pilot 39 Power Reserve Black DLC, a More Compact Take on the Aviation Chronograph",
    "suggestedHook": "First Look – Brellum’s new Pilot 39 Power Reserve Black DLC, a More Compact Take on the Aviation Chronograph",
    "summary": "Independent Swiss brand Brellum, a specialist in chronographs with a capped yearly production, adds a new reference to its aviation-inspired Pilot collection and, for the first time, presents the model in its 39mm Duobox case, offering a more compact take on its cockpit-instrument-inspired chronograph. The new Pilot",
    "sourceUrl": "https://monochrome-watches.com/brellums-pilot-39-power-reserve-black-dlc-chronograph-more-compact-aviation-chronograph-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.451Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Brellum-Pilot-39-Power-Reserve-Black-DLC-Chronometer-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwqqgni5-p9zs",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Dispatch: The Patek Philippe Museum Celebrates 25 Years",
    "suggestedHook": "Dispatch: The Patek Philippe Museum Celebrates 25 Years",
    "summary": "A quarter century after Philippe Stern opened its doors, his son marks the milestone with a tribute to the founder and a look back at 50 years of the Nautilus.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-patek-philippe-museum-celebrates-25-years",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.413Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/dd7ef2c8-92cc-4060-82da-2b571f0f4629/1st-Floor_Patek-Philippe-Collection_5.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwqqgnip-qhb9",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "The Petrolhead Corner – The Mechatronik M SEC, The 1980s Super-Coupe Reborn",
    "suggestedHook": "Alta Relojoaria: The Petrolhead Corner – The Mechatronik M SEC, The 1980s Super",
    "summary": "If, like me, you were around in the 1980s and early 1990s, the era wasn’t always known to be refined or subtle. It was a time of flaunting your wealth and success, the era of Wall Street ‘golden boys’, Miami Vice, and the boom of technology. Just go over some of the cars that were […]",
    "sourceUrl": "https://monochrome-watches.com/the-petrolhead-corner-mechatronik-m-sec-mercedes-benz-w126-restomod-v8-specs/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-21T18:20:12.433Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Mechatronik-M-SEC-Mercedes-Benz-W126-SEC-restomod-Featured-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwqbgj3x-y67s",
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
    "createdAt": "2026-11-21T11:20:12.477Z",
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
    "id": "pauta-live-supercarros-mwpq15sr-fary",
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
    "createdAt": "2026-11-21T01:20:23.451Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
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
