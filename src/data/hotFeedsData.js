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
    "id": "pauta-live-destinos-mwskwqo1-hqbw",
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
    "createdAt": "2026-11-23T01:20:17.665Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwskwqmn-jcv2",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Most superyacht crews quit within nine months, but Gabe Newell's stay over four years, and one look inside his $500 million Leviathan, where staff get the main deck and five-star cabins, explains why - Luxurylaunches",
    "suggestedHook": "Most Superiate crews quit within nine months, but Gabe Newell's stay over four years, and one look inside his $500 million Leviathan, where staff get the main deck and five-star cabins, explains why",
    "summary": "Most superyacht crews quit within nine months, but Gabe Newell's stay over four years, and one look inside his $500 million Leviathan, where staff get the main deck and five-star cabins, explains why Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPclFQTkd5aVNZcjREdFBtQjlyaVpsTDBEOU5EMWNsbWFPbUwtYUhMdmVIY3dITUQ2RHBSTHNmTlRIci1qOXphT0h2SXI4VnBaTTd1VXYyeFFwMWs1SjRDb1AwclZTZ3RxeTdRQVZmOXZOSDBDaC1MYWU0eE5lQ1RlckwzSGpUSHN5aUZFMQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.615Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783344422200-a5493824bcb9?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwskwqps-wnlg",
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
    "createdAt": "2026-11-23T01:20:17.728Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwskwqea-yqje",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari’s New V6 Supercar Ditches Hybrid Power for the Street - Autoblog",
    "suggestedHook": "Hipercarros: Ferrari’s New V6 Supercar Ditches Hybrid Power for the Street",
    "summary": "Ferrari’s New V6 Supercar Ditches Hybrid Power for the Street Autoblog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOaHBLVnBwM08yWTNXUEJPM09sMTVZT1M3WHVycFduUDFoZnpVWFVxQm42cFpUVmhoUTNnMlc4OHJsWUFscUhvc2tZNmxkRkotWDgtVGF4cDE5eXVzM2xyRjB4M01KcEdxMWs1M0YwcUtsT09Ta0hrOHRHX2R2R01ya3NFZGdESko0UWJ2S09aTi1KMUFi?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.314Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1610880709844-b97111a986f7?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwskwqan-wtce",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Buying Guide – Six Deep Dive Watches, From Accessible To Luxury",
    "suggestedHook": "Alta Relojoaria: Buying Guide – Six Deep Dive Watches, From Accessible To Luxury",
    "summary": "Did you know that we have mapped virtually 100% of the surface of the Moon, yet have only mapped about 27% of our ocean floors? Scientists estimate that an astounding 2 million or more underwater creatures have yet to be discovered; such is the vastness of the world’s oceans. And if ever you were planning […]",
    "sourceUrl": "https://monochrome-watches.com/buying-guide-titan-certina-doxa-zrc-omega-panerai-dive-watches-500m-review-specs-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.183Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2025/11/2025-omega-seamaster-planet-ocean-600m-4th-generation-dive-watch-price-video-review-5-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwskwqut-0vwy",
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
    "createdAt": "2026-11-23T01:20:17.909Z",
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
    "id": "pauta-live-arquitetura-mwskwqtq-j5ka",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle - ukwisdom.co.uk",
    "suggestedHook": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle",
    "summary": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle ukwisdom.co.uk",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE10eklCM29mREtJbzJhRGFQdGpDWGJiSHpGSk9sTndDSXJJbFVqZ0lFQ3hSOGQ3ZllNTDBGOEhxNTRSdlUzVVd5S3dNN2w3dlkzY2Z5UjFMY04yRVBUdXpTajU4WGlzaUE5NEtuanl0UnNzYklfX1JZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.870Z",
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
    "id": "pauta-live-relogios-mwskwqc1-wppv",
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
    "createdAt": "2026-11-23T01:20:17.233Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Brellum-Pilot-39-Power-Reserve-Black-DLC-Chronometer-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwskwqd4-z3o5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable' - ESPN",
    "suggestedHook": "Hipercarros: Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable'",
    "summary": "Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable' ESPN",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQWVQtdWI0TmtMRV81bjJPRHo5Q2taeDFOTEJPajVIc1JuTndneDZ5QVY5MG9UUmZ6dlF5ZGd4UkI1bjBkU05lT3FLNDdac0lfb0h4aGZlQlg5YUR2OWVYZTNZUUllSUozQXlLcW01dHdCdHVQSGw2c05KUDhQVjA2MmN4bGZvelBiNmVrcHRlei13eDZHRklQOXVFR2w5S1F2UjVCRDFtT1haUno0cW9BQ0d3TQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.272Z",
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
    "id": "pauta-live-supercarros-mwskwqdx-hc17",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Hamilton and His Future at Ferrari: “There Are No Conversations” - Yahoo Sports",
    "suggestedHook": "Hamilton and His Future at Ferrari: “There Are No Conversations”",
    "summary": "Hamilton and His Future at Ferrari: “There Are No Conversations” Yahoo Sports",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNMExCN2p5cmpOSTdoTS11WC1DZmN3UE9ySEU3LXRkS3NsOG1BX3RfbmZSbHYtZElvWEJUQ0J6MjdJZk4waXJ5T0lDRnc0enpvb0U1MG9MOHp6NHYtUTE2Ql9HNW13VUxabUFrQ0NJbGc4TzJVT3dyQmxEMWFuR1VCbkZhTU1obS0yQ3I5T1JrdnNJNHM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.301Z",
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
    "id": "pauta-live-relogios-mwskwq9x-r8db",
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
    "createdAt": "2026-11-23T01:20:17.157Z",
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
    "id": "pauta-live-relogios-mwrqwdqe-qahq",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Watch: Moment Van Gogh painting sells for record $190.4m (£144.8m) - BBC",
    "suggestedHook": "Watch: Moment Van Gogh painting É Arrematado por record $190.4m (£144.8m)",
    "summary": "Watch: Moment Van Gogh painting sells for record $190.4m (£144.8m) BBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1od1d2VEJBVWdPRUVxSm82SEUzNE5ydlVaYlhmb2FDSkhlZjhlSTBBb2t4LTdDY0lGYVl5a3BlVmtsc09qXzhZTldwNk5vRElhRjF2MnoyeFk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-22T11:20:12.422Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwrqwdhr-8f16",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Imola to host the 2027 Finali Mondiali Ferrari - Ferrari",
    "suggestedHook": "Hipercarros: Imola to host the 2027 Finali Mondiali Ferrari",
    "summary": "Imola to host the 2027 Finali Mondiali Ferrari Ferrari",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQVkg5RnZTQmtuVl94b3lVZW95WEVKN0FqYXFNM0R4YmVOanM3cE1ZYW5XSE5VTElIV3hhcFNZc3lNLXRMSmdFZm5WUDBzbkpMU1cxek90b0QtQ3ROMkFNT043NWo3NDExUHdLMUlNbnFOLWFTcUhqWXlJT2xnYVFDa3pFZjI3QQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-22T11:20:12.111Z",
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
    "id": "pauta-live-supercarros-mwrqwdi3-7i8d",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Ferrari SP Modulo and Spider Come From Behind the CGI Curtain as Fantasy Land's New Special Projects - autoevolution",
    "suggestedHook": "Ferrari SP Modulo and Spider Come From Behind the CGI Curtain as Fantasy Land's New Special Projects",
    "summary": "Ferrari SP Modulo and Spider Come From Behind the CGI Curtain as Fantasy Land's New Special Projects autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQN2tnVjRTVmlNSV85dkFiRE5NM2UtcUJ2ODdwUnZJdmdIQVMxUXB0eEEzXzVhcGZyZms5UWFybWlrdUc5Zy00T19ORjdxS3NYMHFob1pzRnVUVGkycXU5NjFWR2VYdjhKQ243MWFRa1hHdVVBckZEYXh4UWNnUHZsd244US1hdDliRG5uYm1EanFtc2h4R3Q1blJjZWdLbm9rR1JlM3VkMmJvcG5CSVR4U3EyVTFHelhnMGxGU1EycWI5RURHQ3FqMDRnTzhUeGw2TnRjQlZTWDdrbEpVaVlVZg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-22T11:20:12.123Z",
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
