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
    "id": "pauta-live-supercarros-mw5b7yu5-55zu",
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
    "createdAt": "2026-11-06T18:30:23.261Z",
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
    "id": "pauta-live-supercarros-mw5b7z98-h3a0",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Yangwang U9 Officially Clobbers Bugatti With Record-Setting 310-MPH Top Speed Run - CarBuzz",
    "suggestedHook": "Hipercarros: Yangwang U9 Officially Clobbers Bugatti With Record-Setting 310-MPH Top Speed Run",
    "summary": "Yangwang U9 Officially Clobbers Bugatti With Record-Setting 310-MPH Top Speed Run CarBuzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPQ2xQUURwVkJ1N2daNWdWMkNFRGhOWmJpazNRcGk5TlI4Vm5XOExKcDJWLUhsQ0x4dDB4UUg1Y1YxSUZaeWJ2YnRXaFpqb3dJZXc2aHJZQXNhTnFFOWxGZURFVk5oaVZHY0gxa0t0Y29oc2FudUc5aUQ3bFdaQnl4dkpn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:23.804Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1610880709844-b97111a986f7?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mw5b7z1d-4mf2",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Introducing – Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "suggestedHook": "Apresentação: Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "summary": "Audemars Piguet is putting the minute repeater back in the spotlight with three new Supersonnerie creations. The two Royal Oak models offer contrasting materials and dial colours, while the Code 11.59 takes a more contemporary approach, revealing movement elements beneath a sapphire dial. All three are powered by the",
    "sourceUrl": "https://monochrome-watches.com/audemars-piguet-expands-its-supersonnerie-collection-with-three-new-royal-oak-and-code-11-59-models/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:23.521Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/2026-Audemars-Piguet-Code-11-59-and-Royal-Oak-Supersonnerie-models-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mw5b7zfs-zm2u",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "503kph on Abu Dhabi's E11: BYD electric hypercar sets astonishing speed record - The National",
    "suggestedHook": "503kph on Abu Dhabi's E11: BYD electric hypercar sets astonishing speed record",
    "summary": "503kph on Abu Dhabi's E11: BYD electric hypercar sets astonishing speed record The National",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQS1JaZks2bnRBc20xR043RWc4UkJJazZpS0paSFp6X2NOTVdYTktCTkdzMFpJYk1DNXdTSWxjdEs5ZTNIc2tVT3JTbWJ6eWhXV3JTVmZIbUhfay1qTEswV0N1Ul9NTVpvQTFDZzRWeDh6dHBPYkxPVzJ1VWdWUWxXcGRBamtpdlR1YjRXeF93S0M4OHRrUk1uLVVBZEx2VEFm?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:24.040Z",
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
    "id": "pauta-live-arquitetura-mw5b801e-xzv8",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "suggestedHook": "Patrimônio & Leilões: Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "summary": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 Christie's Press",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNUUZDd1dGV1Y1UVYwY1NvemNxYUhVTXZvMEJZdjRsU3o0bXptTUVpdnFFT20xU1R5dHE3M2RxOE84a2JmYmpoNW5QSXZRWlpfNmdXMkhodEhVWWNlMUVtaTducEVLLTJzYVV6U3Y5Tm41cGRhTVd0NW1SWWRCYm9nY3hHVkhPUDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:24.818Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mw5b7yz3-xrn0",
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
    "createdAt": "2026-11-06T18:30:23.439Z",
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
    "id": "pauta-live-relogios-mw5b7z0s-77in",
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
    "createdAt": "2026-11-06T18:30:23.500Z",
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
    "id": "pauta-live-destinos-mw5b7zkc-01qz",
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
    "createdAt": "2026-11-06T18:30:24.204Z",
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
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw5b7yty-8ze7",
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
    "createdAt": "2026-11-06T18:30:23.254Z",
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
    "id": "pauta-live-arquitetura-mw5b7zyw-1wqd",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Gold Coast beachfront mansion listed for $47.5m eyes Qld record - AFR",
    "suggestedHook": "Sarasota Record: Cobertura à Beira-Mar de US$ 14,5 Milhões Estabelece Marco Fiduciário Histórico na Costa da Flórida",
    "summary": "A transação monumental confirma o avanço de capitais de family offices em busca de imóveis troféu à beira-mar com ancoragem de concreto maciço e heliponto privativo.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPNEMxSUZsNERUU29USVc5ZGFDX3lWRHFVQW1xWFpWdTZXSUNzWGFqWnBUMGxmeWlGWkotRDlCMzQyZDI3UzJlTjBFaXZlZzFfS203UHlSanVZRDlOSUx2UGg0ZDhVcFFCNGlhNkdRMXZSS0htMmN5UjU0dEIyaWttZDBTc3lGQXl3YzF5ZXVISGlWdXJaeEVyR0pKSWE2N3BaWmZCMVVZMHhSWk1GSG44eGs2TkxBanpYd3VR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T18:30:24.728Z",
    "validityHours": 24,
    "specsPreview": {
      "transacao": "US$ 14.500.000 (Recorde Regional)",
      "tipologia": "Cobertura Penthouse Panorâmica",
      "localizacao": "Costa do Golfo, Flórida",
      "lastro": "Ativo imobiliário troféu de alta liquidez"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw4rx486-tqzj",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion - HotCars",
    "suggestedHook": "Hipercarros: How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion",
    "summary": "How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion HotCars",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQREJpMXRZZnFDWVE5MWQtZkttb1VTczZ6a1lkLWRqSkk3U3ZrWV9hWm1zSEJHYjJvR0tnZ0dqazZaNTNMOVZnWU9PRFRhZVlhaHEzN1VheEgxNS10dG85akFkWVJVTVVNMjI2VzVWZFFYeEdsS2o4OXNtUUlZRFRCU0dRNTFDZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.326Z",
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
    "id": "pauta-live-destinos-mw4rx4lu-dwfl",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Belize by superyacht: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond - BOAT International",
    "suggestedHook": "Belize by Superiate: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond",
    "summary": "Belize by superyacht: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOLXJrSi1VaFVQbmpvMVc5TzdTMGsweWx5ZDBHZkd4aTZyUXczYnR4cU4yNlJkUkZyU3pQenQ3WWZ0SmR4aUNWUUpuTDhCZ2pqS245R2RfbFloQ3M2OV80bWRlZDFKdnpXVnU4M2ZqOENKczV5NnJ2R0dtYlNxSlFsNG5tcG4wQU1FRmlza0hVTGR6cTh6c1pINUpxcEl2Wi1l?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.818Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw4rx454-dz4k",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K - MotorBiscuit",
    "suggestedHook": "Hipercarros: Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K",
    "summary": "Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K MotorBiscuit",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNa2hWMzVobDJHM1dKbDJYcjRMUHcxVS1QMklWVU1HMjBZYV9Id0ZJbm1qd1JTN2JNUzc4VGFqQUtscDB4azd2RzZvbXY2eUdQdzJ6Z2dTbERGbUZnZG16NHNXS2tvRkZ2Rld5Q2JRRDZuOWJ0R0NRbjVNdk90UVZ3U3hFRTByRllhUDhCXzJXRGh0NVlHSzFmaG9vdDhmeEZPbFBocnBvdllQck9iN2hZaFpn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.216Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
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
