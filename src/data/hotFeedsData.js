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
    "id": "pauta-live-destinos-mw928ogj-5m8e",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "As a boy, a swimming scholarship was his only way to get into college. Now, this California billionaire has taken his brand-new $200 million superyacht, with its signature Dolphin Blue paint, massive owner’s deck, and 21-foot glass-bottomed pool, to the coast - Luxurylaunches",
    "suggestedHook": "As a boy, a swimming scholarship was his only way to get into college. Now, this California billionaire has taken his brand-new $200 million Superiate, with its signature Dolphin Blue paint, massive owner’s deck, and 21-foot glass-bottomed pool, to the coast",
    "summary": "As a boy, a swimming scholarship was his only way to get into college. Now, this California billionaire has taken his brand-new $200 million superyacht, with its signature Dolphin Blue paint, massive owner’s deck, and 21-foot glass-bottomed pool, to the coast Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5IdFVONmVCWU9ic2J1RHBmOUQ4UDBUTkI3bGZTUUMzTHdLMndjbGZUT0JiYjFWNWNGYzFYOGxMSGxsMGc3WDQ2MnpUSXJEaGp0cjk0UnVkZzdOMk5JVkwxdmZXOGp3eEprVTRmejl5czBWQWY0T0E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.627Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1604737637145-48cc31d160eb?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mw928o20-gwrn",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Very rare two-tone Ferrari 12Cilindri with elegant looks spotted in Monaco - The Supercar Blog",
    "suggestedHook": "Hipercarros: Very rare two-tone Ferrari 12Cilindri with elegant looks spotted in Monaco",
    "summary": "Very rare two-tone Ferrari 12Cilindri with elegant looks spotted in Monaco The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPSjRIU0ZsOFQzSmwzc3FlOU5Kb1VrVnpHMkVpa185QlF4cFFoLTBuVzFEZGVSTGgycENFdE50aUpSWHEyYm9hUTFUcXVvSGZ4aGJhd011ZXdGa3FXZmJGS295TGotNk5ONUNrNXo3bmVFZFNuZ3djZEJBX2FISlUxVHRSTnpMRmRYVC1kRUgwWXBwMFFtb25GNGthT3lhZFNRT1gzWEpDZ1lKcXM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.104Z",
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
    "id": "pauta-live-destinos-mw928oe6-bdu0",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Billionaires Can’t Find Parking for Their Megayachts — and Developers Are Cashing In - Realtor.com",
    "suggestedHook": "Náutica de Elite: Billionaires Can’t Find Parking for Their Megayachts — and Developers Are Cashing In",
    "summary": "Billionaires Can’t Find Parking for Their Megayachts — and Developers Are Cashing In Realtor.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQeHZ0ZWMyV3d5QXozZm8wbDlqTGlvSTljUENvN1E3LVhJRV94bmRPY29VbVdsOS10RFVVcGNueFAzZTlWeXVWWnBQSGxtVThYLXZYd2VlNllhVDEwcU1waEVoTXo4eFB2VWIxU2lMU1B1NGtIZHlaaHI4bmJ0UUpGYXhKWk9wWkhwTjc3WmlVVG42TDN3N3FHdmFDeDdoV2FFVjZKWW9lcGlobTljSENJ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.542Z",
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
    "id": "pauta-live-destinos-mw928oih-cq9d",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Valve billionaire Gabe Newell refitted a 236-foot support yacht into a floating helicopter base for his $500 million research mothership - supercarblondie.com",
    "suggestedHook": "Valve billionaire Gabe Newell refitted a 236-foot support yacht into a floating helicopter base for his $500 million research mothership",
    "summary": "Valve billionaire Gabe Newell refitted a 236-foot support yacht into a floating helicopter base for his $500 million research mothership supercarblondie.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOOHR2VUtSQWo1RnBPREliZE5QSUlZNHYxYjdnelRiQ2ZCRzJRWGlWTEdLLVZDR3d1Uk9mU3Y5Zy1kLTk4SGswQkNYT1ZiZDFqRnNoaHp1QVI1MjdJcy04S3VTeTV2Zl8xVlZNVlZyaDBieHBma1JKcGljenpId1R5UkpvblhMQmszcTZCb3ZnWQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.697Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783344422200-a5493824bcb9?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mw928o4o-e31z",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "7 Million People Watched a Late Owner’s $1M Ferrari Get Cleaned for His Granddaughter - MotorBiscuit",
    "suggestedHook": "Hipercarros: 7 Million People Watched a Late Owner’s $1M Ferrari Get Cleaned for His Granddaughter",
    "summary": "7 Million People Watched a Late Owner’s $1M Ferrari Get Cleaned for His Granddaughter MotorBiscuit",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOeTluUi1ldXVzT2prV2JqdXBtRzdWMUJLUEdGOGRVeWh3dGtCZEg3VGRrOE8yTmVCZWljZjhOUEVLRVRFQTFKamlhSkdYejM1eG8yaE50ZnExUjhYdUpqQVhFM1FoNmJmU2FfMDVQMktKWWdrQ1piSkZUaW1VWDBydFd0NDhtYmlYZWVjcnFxbGw5VlVLTndzZUVnTGRsSHdoNXg3R2RQNTRxQmRYUGlTZUYtTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.200Z",
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
    "id": "pauta-live-estilo-mw928olx-8a7c",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta-Costura",
    "badgeColor": "border-rose-500/40 text-rose-400 bg-rose-500/10",
    "category": "Alta-Costura",
    "categorySlug": "estilo",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "A Hermès Birkin once owned by Jane Birkin is up for auction - Robb Report Singapore",
    "suggestedHook": "Alta-Costura: A Hermès Birkin once owned by Jane Birkin is up for auction",
    "summary": "A Hermès Birkin once owned by Jane Birkin is up for auction Robb Report Singapore",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNbXphV0VWUnp6OVhmRC05dmhTaFh6alBBd0poWDRDZHRXT0RiOHdYVU1abWd0ZUl1RWNKUWZ2VzMzRWgwNGxZLTV4SzJPWFZCZWE2QkZzSmdlM3BYWnJ0eGlWNmJfVXhTeFUtbm1KN2J0Nmc4cjh2UWx6Yk4zLXVVaTZwQnpiR2ZITE9PcDBTRQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.821Z",
    "validityHours": 24,
    "specsPreview": {
      "atelie": "Savoir-faire artesanal europeu",
      "materia_prima": "Couros e tecidos nobres de curtume tradicional",
      "curadoria": "Clara Meirelles"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw928o57-qobf",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "BYD’s Electric Hypercar Hits 312 MPH, But Its World Record Has an Asterisk - Autoblog",
    "suggestedHook": "Hipercarros: BYD’s Electric Hypercar Hits 312 MPH, But Its World Record Has an Asterisk",
    "summary": "BYD’s Electric Hypercar Hits 312 MPH, But Its World Record Has an Asterisk Autoblog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNd2hCNkpSOXd1dTI3dTVmempvWVhna3ZXU1JFekd1V0h4RFpxNmtHRTl1U2JEMS1DVEhDSzdCRURzYXZNSE52d2R1UzM4dmlZMGV0Nmh6NzNTSDJXTTlLY0JFU1ctQ1o2anFRUGk4VDlwRGctdkp6Y0hFNTk0SUloRXV0Z1oyd19lOThITTB4SURNd3E4d3EyYnloYXpvQ2hHLTM5UQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.219Z",
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
    "id": "pauta-live-relogios-mw928nz2-c7mw",
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
    "createdAt": "2026-11-09T09:30:03.998Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Breguet-Classique-Souscription-Platinum-2026PT-review-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw928nqw-o2h4",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "I Bought My First Rolex Aboard a Cruise Ship—Without a Waitlist",
    "suggestedHook": "Alta Relojoaria: I Bought My First Rolex Aboard a Cruise Ship—Without a Waitlist",
    "summary": "One watch novice discovered an unlikely shortcut to buying a Rolex at retail: Book a luxury cruise.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/first-rolex-watch-no-waitlist-explora-iii-1238779767/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:03.704Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/RR_ROLEX5.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw928nu4-hndy",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Auctions: Our Top Picks From The Watches For ELA Charity Auction",
    "suggestedHook": "Auctions: Our Top Picks From The Watches For ELA Charity Auction",
    "summary": "Some standouts from the Watches for ELA charity auction at Christie’s, led by Zinédine Zidane’s first Cartier.",
    "sourceUrl": "https://www.hodinkee.com/articles/our-picks-from-the-watches-for-ela-charity-auction",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:03.820Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/1b980be6-feda-4bd3-a7da-633a5d1c2af3/hero-4.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw928nrf-d56d",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A San Francisco Mansion With Ties to a Nobel Laureate and a Brothel Lists for $25 Million",
    "suggestedHook": "A San Francisco Mansão With Ties to a Nobel Laureate and a Brothel Vai a Mercado por $25 Million",
    "summary": "Known as the Verdier Mansion, the six-bedroom residence also appeared in the Netflix series \"The OA.\"",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/verdier-mansion-san-francisco-1238802155/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:03.723Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Verdier_Mansion_SF_13.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw928ojs-5j2h",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Jewellery and more: hunting for bargains at auction amongst lots worth millions - Il Sole 24 ORE",
    "suggestedHook": "Jewellery and more: hunting for bargains at auction amongst lots worth millions",
    "summary": "Jewellery and more: hunting for bargains at auction amongst lots worth millions Il Sole 24 ORE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNZ0lCbnNhVmstNkJFS3BtMHVSZE12QXQwUFFOZWtGUEtSTnU3MUF1dEU3ZDlDQkxhaDhzUGh6aUFUM0lGRDVhUW9kZlRWMGRSMGFQMjQ2Nnd4R242OFBFTEVfbi1vSzI4RWNzWUM1a3VBVTZlYThlV0hGY3lVMWlhU054X0cxWXl2Y2tyRzMzSXlXc2tJU2Zza2lJMTZuRHhjLW1ldHFzeHdKRWpiSWFodA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.744Z",
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
    "id": "pauta-live-arquitetura-mw928ols-f8sm",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Jewellery at auction: luxury that endures over time - Daily Nautica",
    "suggestedHook": "Jewellery at auction: luxury that endures over time",
    "summary": "Jewellery at auction: luxury that endures over time Daily Nautica",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxPSWZUam1CNkszQk9jM1l0X0VGNWhtOWI0el9iUTFxTnF1SUE4UktNYzcweGVVRWc5Tm5uVVlfSTZEb1lJdkFfX1pfYm9EUEVWdEJlUVlCWFJhYy1RbWJ5NHZqay1qdVFOOUlGN3JTWWxReVQ0ZVJBcWNSODdETldCYk96SFNFVUFyaGlhMmVpZ3psVVlMMG5UYjE2OHJ5dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T09:30:04.816Z",
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
