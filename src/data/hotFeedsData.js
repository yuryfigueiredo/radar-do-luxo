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
    "id": "pauta-live-supercarros-mvznxj7t-qoy4",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced - The Drive",
    "suggestedHook": "Hipercarros: Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced",
    "summary": "Ferrari Built This One-Off, $1 Million Pace Car in the ’80s. It Just Resurfaced The Drive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOMUdON0lXOGR1SlNPUzhiUlNSa3lJX0c2djBaQ0Zzc1VzWE5waEJSWVNKcDh4LTNIWWx1bFB1WGhsWlFuM3c0Z3d1MkVwSGlETVJkNkhzRGhfUkswSFlrcV9QcmNqdnlqeWc0cUhwdFR6M0U4Z2drT2s4SU5nbmdJRHd6MkxwcHIwWXZXSS13bWJpdjlEZVMzdHFEWXJZVG9kNnNRTGotWDk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.409Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mvznxj63-2qxn",
    "source": "Robb Report Global",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "Pagani’s One-Off Huayra 70 Anima Has a Diamond-Infused Paint Job",
    "suggestedHook": "Hipercarros: Pagani’s One-Off Huayra 70 Anima Has a Diamond",
    "summary": "The new hypercar was made to celebrate Horacio Pagani's 70th birthday.",
    "sourceUrl": "https://robbreport.com/motors/cars/pagani-huayra-70-anima-horacio-pagani-birthday-1238807501/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.347Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/pagani-huayra-70-anima-01.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mvznxj64-rdt0",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "Why Rolex, Audemars Piguet, and Patek Philippe Dominate the $26.6 Billion Secondary Watch Market",
    "suggestedHook": "Why Rolex, Audemars Piguet, and Patek Philippe Dominate the $26.6 Billion Secondary Watch Market",
    "summary": "Their perch is based on demand from some highly in-demand models.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/rolex-patek-audemars-piguet-secondary-watch-market-1238794281/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.348Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2022/12/RR_Rolex_1202_1.jpg",
    "imageIsFallback": false,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mvznxj9c-cb9t",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Sotheby’s Royal & Noble Jewels Geneva Sale 2026 - Salon Prive Magazine",
    "suggestedHook": "Patrimônio & Leilões: Sotheby’s Royal & Noble Jewels Geneva Sale 2026",
    "summary": "Sotheby’s Royal & Noble Jewels Geneva Sale 2026 Salon Prive Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNZzNwQmNHelViT3ZYQmh5SXVLTjN1M0JpTmh3aGhQa0phdVlMRm44UXE1YUhBUnhUd0FOVFpZMkdfeXBmSENNQ2U0Smg3T1p2REFrNFBrTG1KSkJJQ3ZTZnFKNGppakUtekNGRTI4TmlPMzhna0J5Y3RMUExyZ2NBOQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.464Z",
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
    "id": "pauta-live-supercarros-mvznxj7c-opc9",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari F50 With Just 106 Miles Sells for a Record $17 Million - Autoblog",
    "suggestedHook": "Hipercarros: Ferrari F50 With Just 106 Miles É Arrematado por a Record $17 Million",
    "summary": "Ferrari F50 With Just 106 Miles Sells for a Record $17 Million Autoblog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPSU9zNzhobVJneWJqbHRUS3R0R2FoU3RZNDd4bTlWaE8wZ1dWdzFaU2ZzY2toOVpkTGJkMlBRdGhUV3ljZ1ZnSFlRYWdVQTZueWlLVVJQSll4SzBfRW14cmwySHVoV2UzN2doZXNCRXRacjdHWDN0clFBMU1qYTRCanlrM2gwLWRHNi1uZC1IaWRDVllVaGc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.392Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvznxj8f-hiv8",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Inside Lollipop, The Candy-Themed Superyacht That’s Surprisingly Chic - Forbes",
    "suggestedHook": "Náutica de Elite: Inside Lollipop, The Candy-Themed Superiate That’s Surprisingly Chic",
    "summary": "Inside Lollipop, The Candy-Themed Superyacht That’s Surprisingly Chic Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPY2pmel9HTHM5OUhOcEFFX3VGcmhFWG1rWHBHM0ZLcGJfc2dXazU1aDU0RG8xSDhSa2tTZzZLRFl0MHNYX0Qxc2ZfRWJfdGN4WkJvcXZDaEtmS0ZZaUgzMVdoYzZudVA3dmdHQk1jMnc0UW9FQnRjYVBMVTlibkhsUUlxRzhNR2c1V09sQmtrd2JUUlBkVXk0NG9KSlh5QUttenc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.431Z",
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
    "id": "pauta-live-arquitetura-mvznxj6e-0e4s",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "suggestedHook": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "summary": "Four auction houses. Over 1225 watches. We dig for the gems, covering everything from high-priced indies to vintage deals.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-2026-geneva-fall-auctions-mega-preview-part-1-christies-and-antiquorum",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.358Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mvznxj9d-nff4",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "197-Carat 'Romanov Sapphire' Heads to Sotheby’s Geneva - nationaljeweler.com",
    "suggestedHook": "Patrimônio & Leilões: 197-Carat 'Romanov Sapphire' Heads to Sotheby’s Geneva",
    "summary": "197-Carat 'Romanov Sapphire' Heads to Sotheby’s Geneva nationaljeweler.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOWDlqXzJiSDZDVG5qWFdEYm85Zmc2dXJTZVdTMFAzV0lfQm4wNG1uajQtOXMxY2F6V2x2ZUZYa3FoX0cwQ1ZrNDlja1RveEtpblhKSXZZaC1FSGEwLW9VRWNqR3dVTjNNdlpYQXkxQml2dVF6SU5yUWZCYTl6bXZQeXI3LThsSUk0UHV6ZjNFXzVqU0FrR1h6ek5YRQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.465Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mvznxj8e-wk2c",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Inace Superyachts unveils new 130 Aventura model at FLIBS 2026 - BOAT International",
    "suggestedHook": "Náutica de Elite: Inace Superyachts unveils new 130 Aventura model at FLIBS 2026",
    "summary": "Inace Superyachts unveils new 130 Aventura model at FLIBS 2026 BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONFczUHRjNUFuVjlfS041VmZKZkI2Q2l4N1RPbmNvMDlBYmtnanpXd1RfZWE0ZXdnLUswMDJuYS1lWFV0X2lGcndPbFN2RGV4NUZiWHJtNzRTd0VNLU0wZmkxSEJBN0N2QUt2c0E2aU8zQmdkb2xsWEZpWmZjc3Z5S0tSQ2lCMHhHMGdlaEw4cHNPUXhmQ3pjbDl3NzdQOFdR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.430Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvznxj8h-l5c6",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "The perfect accessory for Mark Zuckerberg’s superyacht - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph - Luxurylaunches",
    "suggestedHook": "The perfect accessory for Mark Zuckerberg’s Superiate - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph",
    "summary": "The perfect accessory for Mark Zuckerberg’s superyacht - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFAwSVV5cHRPaWlUNjN3dF9kVzZxaHRqcDNlSFdBUzJtbnp2Zmh1SXJWanJhRXR4RGlCcjEtR3VMbGhNdWV3QUFtLTRyMDJlVE5ZY0NIS1pITlo1ZW1lajNMa3RFWTdUcUYxeXlTakVueWszMV9qNXdJ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.433Z",
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
    "id": "pauta-live-relogios-mvznxj6o-xfmu",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – H. Moser & Cie. Drops Two Heritage Models, Including a new Chronograph",
    "suggestedHook": "Alta Relojoaria: First Look – H. Moser & Cie. Drops Two Heritage Models, Including a new Chronograph",
    "summary": "When thinking about indie brand H. Moser & Cie., you might have either the integrated Streamliner, the sporty Pioneer or the elegant Endeavour collections in mind. There is, however, another range that should be mentioned: a more discreet range with vintage-inspired design cues, the Heritage. Defined by its",
    "sourceUrl": "https://monochrome-watches.com/2026-h-moser-cie-heritage-chronograph-white-fume-and-heritage-centre-seconds-espresso-fume-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.368Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/2026-H-Moser-Cie-Heritage-Chronograph-White-fume-and-Heritage-Centre-Seconds-Espresso-fume-review-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvznxj6l-ka78",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Photo Report: The Watches And Scenes Of Patek Philippe's 2026 Milan Watch Art Grand Exhibition",
    "suggestedHook": "Photo Report: The Watches And Scenes Of Patek Philippe's 2026 Milan Watch Art Grand Exhibition",
    "summary": "The exhibition is over, but for those who couldn't make it, here's what you missed.",
    "sourceUrl": "https://www.hodinkee.com/articles/patek-philippes-2026-milan-watch-art-grand-exhibition",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-02T19:39:34.365Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/7b19a468-3473-484b-8f09-bb9e0de40820/PatekMilanHero.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mvye11c2-ulkw",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club - VnExpress International",
    "suggestedHook": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club",
    "summary": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club VnExpress International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOTnE4ek5lamxXZUNDcTJVSk16UGFXZjQyUDZmQ2lKNzNzMTVpUFQ4RHJ5OXJWMlNxc0s0aG5MQnF4MG5UMk5hOEZNaHFQS2Y2ZGlJZEY3Qkc4ZXdPVTA1SFRRUHpmVWE4QXF4MURjVjNLN1NnUDRJZ1VFeW8xQlRaRnFhTk0xMTg2bmFUaS14Tk5TcEZJT19oZ2VtUUZrODNPdFRPWG5ac2p4bTMzLWRicmw5Y0RESW51czNXdUNvVmtUQTVEcE50SDhIeDBRQW1IWk9ZQ2dieFlWdk54NDNsVEVOaWg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T22:14:35.522Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "expired"
  },
  {
    "id": "pauta-live-destinos-mvye11b7-eba0",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Valve founder Gabe Newell has to pay staggering bill just to refuel his 364ft superyacht Leviathan that's worth $500M - supercarblondie.com",
    "suggestedHook": "Valve founder Gabe Newell has to pay staggering bill just to refuel his 364ft Superiate Leviathan that's worth $500M",
    "summary": "Valve founder Gabe Newell has to pay staggering bill just to refuel his 364ft superyacht Leviathan that's worth $500M supercarblondie.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOU3daN25xLTlMVTJLZURBYlhCMTBUNW9LMV8zcVhEN3VpUDBieHhyUTJtTTRCWmh0TXEwblI0N2hXOElRNUhDTTNIYV93dy1vZDZMSU1mTnpMakpDVDFRVVBzcXdNRWJVR3NpRUoxa1Blank3d1RsLTBnSlU2YzVIa0FLVHlKQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T22:14:35.491Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "expired"
  },
  {
    "id": "pauta-live-relogios-mvye11ae-uu2u",
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
    "summary": "With its Series 8 collection of mechanical watches, Citizen has been delivering rather impressive models over the years, with the GMT collection being possibly the most appealing of them. Not only is it powered by a true GMT automatic movement (something rare in this price range), but Citizen has dared to bring",
    "sourceUrl": "https://monochrome-watches.com/citizen-series-8-gmt-damascus-steel-and-forged-carbon-nb6092-01e-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T22:14:35.462Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Citizen-Series-8-GMT-Damascus-Steel-and-Forged-Carbon-NB6092-01E-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "expired"
  },
  {
    "id": "pauta-live-arquitetura-mvye119v-oozv",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A $30 Million Naples Villa Brings Old-World Grandeur to Florida’s Gulf Coast",
    "suggestedHook": "Patrimônio & Leilões: A $30 Million Naples Villa Brings Old-World Grandeur to Florida’s Gulf Coast",
    "summary": "The Naples residence is embellished with Venetian murals, gold-leaf ceilings, and rich mahogany.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/naples-florida-lavish-estate-1238798763/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T22:14:35.443Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/3200-Green-Dolphin-Lane_Library.jpg",
    "imageIsFallback": false,
    "status": "expired"
  },
  {
    "id": "pauta-live-relogios-mvye11a9-8ylw",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Photo Report: A. Lange & Söhne Brings A Glimpse Of History to New York City",
    "suggestedHook": "Photo Report: A. Lange & Söhne Brings A Glimpse Of History to New York City",
    "summary": "In a special exhibition, A. Lange & Söhne marked the 32nd anniversary of their re-founding by bringing together watches from across their history in a retrospective showcase of the brand's evolution.",
    "sourceUrl": "https://www.hodinkee.com/articles/a-lange-and-sohne-celebrates-32-years-of-german-watchmaking-in-new-york-city",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T22:14:35.457Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/462af331-813e-4070-92a2-d15f044fbb54/P1022711.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
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
