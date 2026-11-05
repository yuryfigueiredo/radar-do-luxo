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
    "id": "pauta-live-supercarros-mw3vs3zo-yaw8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari smashes expectations as third-quarter profit surges to €431 million - Mundo Deportivo",
    "suggestedHook": "Hipercarros: Ferrari smashes expectations as third-quarter profit surges to €431 million",
    "summary": "Ferrari smashes expectations as third-quarter profit surges to €431 million Mundo Deportivo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQY3FvM3RhOFMtNXh3dFRFV3dEbVl3UENMU0Q4d3J0RmpVTlhHYTB1SjYtRV9DS3FaWDBTeGdmLWZ2MmVaQi1aUVBsS21mMWlRWVBLRHFrdkN5Ui1DRFFndEpIelNjUmRKdHgzNDNTc0lDWFBjbzRjUnAxVndRckxYQ0hwNzlCS1JXVWQwMTFWdWU5bDlfYnZYX3pIQXRKckVQclRvYUpDN3h6ZE5pcEtrZ3lWamFyVkhoV0JwUkc1U0V3dWVtNVhzVUFxcVJNSEnSAdwBQVVfeXFMTjdkTUVuTFlNTlFCZTM3THlkTDlpeUNUTW5VT2hCQi1EZGN2YTVkdXZJcHA5MV9xSDVaSWxpa1RNUkhJYV9jdVBzZUc3VFRTTm9LNzNaOEdmRlNwOElTY2dsdEZHZ1U3dkl6OG82WXlVWllsUndOYzMtMW5VMnQtcVd4VGVHZEZmZHA3YW1ZQU9taVBPS0xzSmh4XzdDeUYwQ2xJeEQ2ZkFoZUVUalhHa0VvTGlyV0VhaEhpN0Nxd3NuX1h1ZnpYMnVsVWQ5Tjh3R25qeFNBa1dHRWdqVw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:23.028Z",
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
    "id": "pauta-live-supercarros-mw3vs42b-2hzj",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari Spent $1 Million on a Mondial Pace Car. In 2004 It Sold for $85,330. - Yahoo Autos",
    "suggestedHook": "Hipercarros: Ferrari Spent $1 Million on a Mondial Pace Car. In 2004 It Sold for $85,330.",
    "summary": "Ferrari Spent $1 Million on a Mondial Pace Car. In 2004 It Sold for $85,330. Yahoo Autos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQcTNqZjVyWGtTeXN6bmdxVHhkMVV1ejgydHJETm9tMHpCc3pheU5lWFlQa3kzT29iWUtnX21vVksxMnZLVC1zQ2pGUnZkbUtoMWpuZzY0bklUODR2OUpMTHE0TERWamJTMVpfUUJQUHIyMUwwOEw4YWVhcUtfUjRfMnI1VlYxNnNXN3NXdkRQN1pqckphQk1icWFHVnpwYnBJbW1N?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:23.123Z",
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
    "id": "pauta-live-relogios-mw3vs3lg-t7l1",
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
    "createdAt": "2026-11-05T18:30:22.516Z",
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
    "id": "pauta-live-supercarros-mw3vs3o4-bdci",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist - Forbes",
    "suggestedHook": "Hipercarros: Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist",
    "summary": "Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQQ3NlZU9xYW1OVkpWam0zOEZCZzZDV3hnMThYaXZ3MVlOal92TEtNTmxSQlpsWFpocFNPVzlDT1o4TG9RUUptWGZSNW1jaVBfV3Flempwa05JNkdUaG5vZktvVEluR1NfVk4zYXZuZ29tRkVLVXhiOWhsRkFVdmV4M0J3QkE3MXBSN1NyVC1Ec2ZoUG9mdXFidzlYV3dLaUxHZE5nTEtCWVpsTmZURHoyS0pJY0VlTW9TWU9n?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:22.612Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw3vs4b1-h7jy",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The Italian Sea Group reports €58.7 million loss as financial crisis deepens in 2026 - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: The Italian Sea Group reports €58.7 million loss as financial crisis deepens in 2026",
    "summary": "The Italian Sea Group reports €58.7 million loss as financial crisis deepens in 2026 SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQQThUTERwY3p2QnFCMEVBNGNFY2F6bTJfNGhzR2RRQUc0cDktX3dnSGZ3OGg5SmVUcktTMFJ3d0Zya3UtYmdoREo4V2JrSWRxS3JQTkkxYmVMSnNaNld4Z09vXzh3SVF4OHB2OGZGdEM2NGtuTHU0MFVZR0ZFbUhjeE94b0VrTmht?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:23.437Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mw3vs4ba-fwib",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "185 million euro superyacht for sale in Mallorca - Majorca Daily Bulletin",
    "suggestedHook": "Náutica de Elite: 185 million euro Superiate for sale in Mallorca",
    "summary": "185 million euro superyacht for sale in Mallorca Majorca Daily Bulletin",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQNTFRa3dzQ21sbXk1bEhqd3g0YTNaVnZnazNWV0tMd24zSDZrZXVsRkgxSjJfdmVYWEppZDhMTlA2eElPZ0VxTHR4M3MtUmNhSVk1Z0xHaTdYQ1BKM0ZhY3pLRFhUS1pkYXdFbVRVYVE5WHVQS3U2NlE5YlJ6dzR5VlVoLXpEMnAwNWJKazFrc3M4M2ZzanlZWllnYUNsdGxFNkFnclhPM3BRNjJObmd5Tm9zamN3bFnSAbcBQVVfeXFMTmJ6dUNmRGYyVzRrdUZ0d1JKYTBBV0haOW9DdjcxYlNnSEY1MFV4VlZfTDdwWTk0VGgtek1JLW8tRmk5ZktSdGhyNVEteXozR3dXN0pMSUs5SURxbTZOTTFINFg1MXhRMEFkOENXVTR0NDU1RlphM0tLTkV4RzR0a0pBVHdzeHNXaHU2NzFZNGJySEtZM095RHM1azVraUxBM0l6NHN4UDYxbGF0R2JvRUFFNkh4a2E4?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:23.446Z",
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
    "id": "pauta-live-arquitetura-mw3vs3fl-n1v4",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Art Collector Barbara Jakobson’s Famous N.Y.C. Townhouse Can Be Yours for $9 Million",
    "suggestedHook": "Patrimônio & Leilões: Art Collector Barbara Jakobson’s Famous N.Y.C. Townhouse Can Be Yours for $9 Million",
    "summary": "The five-story pad on Manhattan’s Upper East Side is a reflection of the late art aficionado's singular style.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/barbara-jakobson-former-nyc-townhouse-lists-1238798895/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:22.305Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/167_East74thSt_NYC_14.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw3vs3kx-5u45",
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
    "createdAt": "2026-11-05T18:30:22.497Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw3vs4jc-turx",
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
    "createdAt": "2026-11-05T18:30:23.736Z",
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
    "id": "pauta-live-relogios-mw3vs3l6-allg",
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
    "createdAt": "2026-11-05T18:30:22.506Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Serica-Travel-Chronometer-Golden-Green-8315-3-GMT-review-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw3vs3la-cpoy",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The New, Monochromatic Nomos Club Sport Neomatik 34 All Silver",
    "suggestedHook": "Alta Relojoaria: First Look – The New, Monochromatic Nomos Club Sport Neomatik 34 All Silver",
    "summary": "Nomos expands its compact Club Sport neomatik 34 collection with a new monochromatic edition. No, it’s not something we cooked up in collaboration; the new Club Sport Neomatik 34 All Silver strips away the colourful accents (pink, gold and purple) of the inaugural trio in favour of a more restrained combo of silver,",
    "sourceUrl": "https://monochrome-watches.com/nomos-club-sport-neomatik-34-all-silver-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:22.510Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Nomos-Club-Sport-neomatik-34-all-Silver-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-estilo-mw3vs3g8-z6lo",
    "source": "Robb Report Global",
    "sourceCategory": "Alta-Costura",
    "badgeColor": "border-rose-500/40 text-rose-400 bg-rose-500/10",
    "category": "Alta-Costura",
    "categorySlug": "estilo",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Fashion Nova Founder Richard Saghian Just Bought a Manhattan Penthouse for $31 Million",
    "suggestedHook": "Alta-Costura: Fashion Nova Founder Richard Saghian Just Bought a Manhattan Cobertura for $31 Million",
    "summary": "The billionaire retailer and real estate aficionado's full-floor unit features a pair of terraces overlooking the Hudson and East rivers.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/richard-saghian-penthouse-new-york-manhattan-1238810703/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:22.328Z",
    "validityHours": 24,
    "specsPreview": {
      "atelie": "Savoir-faire artesanal europeu",
      "materia_prima": "Couros e tecidos nobres de curtume tradicional",
      "curadoria": "Clara Meirelles"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/RichardSaghianPenthouse_NY_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw3chpop-lop9",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Billionaire David Geffen, 83, Back Together w/ 33 Yr Old Black Husband! - Mediatakeout",
    "suggestedHook": "Patrimônio & Leilões: Billionaire David Geffen, 83, Back Together w/ 33 Yr Old Black Husband!",
    "summary": "Billionaire David Geffen, 83, Back Together w/ 33 Yr Old Black Husband! Mediatakeout",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNX3lMQmViWmphVTZjcFlJTDdYVWpVejMzcTRncmZKQ21IOU40OXpWVERDMUFCV0EzTGF1OW00UERIcEhpWUFvWHpHT3JPU0dOc3ZBbWsybWJMUnkwZzBSSno4Y0loLUZIbXd1MU5SMjZNc2hSMnA1Z19RWXVuR1R4UThGZHVWYVFUS2JURzVaSExSU2NxZ0RlVdIBngFBVV95cUxPUG9UdGwtaENkZlpHX19WLXJuRUFlOE5oMXR3WkUzWGZnNFY4ckJhcFF5b01JYW83dUhRZklfbmg3RHU5cXZFU1Vic3kxcjQ0UWRSWlJObXhmUkpNQzRGRlpJRFBfRUphQmZnTTd0aXlLWkw1NnUwNHYzNTFUcHNKaVJLOEs0TnR3ZjZyTDZwcEFod29fbGJnS01jWXZ5dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T09:30:25.225Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw3chpdl-2090",
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
    "createdAt": "2026-11-05T09:30:24.825Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
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
