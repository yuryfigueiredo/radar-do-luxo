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
    "id": "pauta-live-destinos-mwrqwdmz-nskj",
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
    "createdAt": "2026-11-22T11:20:12.299Z",
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
    "id": "pauta-live-destinos-mwrqwdkh-ptsg",
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
    "createdAt": "2026-11-22T11:20:12.209Z",
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
    "id": "pauta-live-arquitetura-mwrqwdmn-hfok",
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
    "createdAt": "2026-11-22T11:20:12.287Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mwrqwdg7-a9ge",
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
    "createdAt": "2026-11-22T11:20:12.055Z",
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
    "id": "pauta-live-arquitetura-mwrqwdqs-1ym7",
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
    "createdAt": "2026-11-22T11:20:12.436Z",
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
    "id": "pauta-live-arquitetura-mwrqwdqa-e66f",
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
    "createdAt": "2026-11-22T11:20:12.418Z",
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
    "id": "pauta-live-relogios-mwrqwdgv-8bf9",
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
    "createdAt": "2026-11-22T11:20:12.079Z",
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
    "id": "pauta-live-supercarros-mwrqwdhi-krv3",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Ferrari boss Frederic Vasseur blames Charles Leclerc for 'unacceptable' collision with Lewis Hamilton in Las Vegas GP - Sky Sports",
    "suggestedHook": "Ferrari boss Frederic Vasseur blames Charles Leclerc for 'unacceptable' collision with Lewis Hamilton in Las Vegas GP",
    "summary": "Ferrari boss Frederic Vasseur blames Charles Leclerc for 'unacceptable' collision with Lewis Hamilton in Las Vegas GP Sky Sports",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQc3F0ZGx2dXN4UVhOVW1vbkh0YnZNZFVpV0stYUVKT3puM1pJbV9kazdxYi1YUUVCeGdycnFQWHRoSjhUN0NqMFJQbzUtc1JnMzdhZ0hfQkJRZjR3NmVmMUZRQ2otZGE4Qy1ma3liUGtCd3doU0d1VzZFTkpFRkdWeVZIVXphMi1vVjdhbkE5cFpsME93NWNfaTJFNWNwMW1HMlZORnNtUWlXWjhiWEZtSGQtcFVOMDZpMXB5cHRvci1tZUw2aTNzanJ1OVJwYjlSM0ZfNGhnUF96YUgyY082Z1VsWVMwRjZSNmpxNXVYVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-22T11:20:12.102Z",
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
  },
  {
    "id": "pauta-live-supercarros-mwr5grn5-kyuu",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari’s new hardcore supercar ditches the 296’s most controversial feature - Car Magazine",
    "suggestedHook": "Hipercarros: Ferrari’s new hardcore supercar ditches the 296’s most controversial feature",
    "summary": "Ferrari’s new hardcore supercar ditches the 296’s most controversial feature Car Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQaVNqOGRoV2d1TnpYUmNxVEhjRDhCSkxMZjZBaVRJQUdURVdPMTVQMlU2WWpRc1NGcWxzZ1REelhlQUlYLTJtamxOMzdjQjZVQTViQjk5ZzRSbVlrdC1CTU84QkxjZGE5UEVKS2xieTVXbHJJblMwalA2X3dySFlNQmdvRkgyTEZXdDhXekRjeUowb1R2NjZBb2xBN0phaWxGZEhPVm9fYnZkRGs?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-22T01:20:12.017Z",
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
    "id": "pauta-live-arquitetura-mwr5grxi-yp9s",
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
    "createdAt": "2026-11-22T01:20:12.390Z",
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
    "id": "pauta-live-relogios-mwr5grje-86sm",
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
    "createdAt": "2026-11-22T01:20:11.882Z",
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
    "id": "pauta-live-relogios-mwr5grjz-5i2v",
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
    "createdAt": "2026-11-22T01:20:11.903Z",
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
