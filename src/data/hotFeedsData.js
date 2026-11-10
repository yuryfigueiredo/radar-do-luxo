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
    "id": "pauta-live-supercarros-mwb0yzo7-fy5b",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Why did someone pay 10 million dollars for a Le Mans Ferrari that can’t race? - Classic Driver",
    "suggestedHook": "Hipercarros: Why did someone pay 10 million dollars for a Le Mans Ferrari that can’t race?",
    "summary": "Why did someone pay 10 million dollars for a Le Mans Ferrari that can’t race? Classic Driver",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxONkFiUjJqbnQzQkswbUVQbTZpN3l4RVBMd2FFdzZ3eXZzZHZDMVVndWlJTVN2aUQ5RlpyeEd0WlRTdVVOVUdnT1FNMlptanNlb3JPelphU093d2t3cUhISWhtR2JhZmJSeHVtMVZqRGVnbnc4SXhHSHNad2k0bkNPZFg2eTItNTZKWnM1V1BrVUU2QmRYT3VnMlZDRjVmUWI5Z01PYjI2Y0FJOHpQR1RGSkJISjVXeGM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:05.335Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1660326040484-fc0cb33d0b23?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwb0z04i-5eyo",
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
    "createdAt": "2026-11-10T18:30:05.922Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwb0z07k-9w81",
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
    "createdAt": "2026-11-10T18:30:06.032Z",
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
    "id": "pauta-live-relogios-mwb0z0ab-yphy",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold - Yahoo Finance Singapore",
    "suggestedHook": "Alta Relojoaria: Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold",
    "summary": "Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold Yahoo Finance Singapore",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQVlkxSWdpeHZ3d3NoVzNfNHNTWVJJVzBoZ2QtSHdIME9zeE9yMllINVV3aWVnb0Q1bjN0Q2ZYSGFjWWRVblpPVUp0NkFUTkdGdkx6ZUZfWGlJbmpTQXk2aTFkd2YxYXk4M2NxYUdWcHUzZ2xGOVVwd2ZTYl90Q19rTE5nRUI1UmRpMXVkOA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:06.131Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwb0yzcs-rly9",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "This Bugatti Tourbillon Miniature Takes 300 Hours To Build and Costs 2027 Honda Civic Money - autoevolution",
    "suggestedHook": "Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista",
    "summary": "A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQZXpCRXZla2tDMWc0ZjU2TkdSakJueHptOG9ESFF0cHIyOHV6ZGVkVFAyMkJqSnd1blQzU1pBSjh6cjU3NDNDcE1rd3U2bVVvdWgtUGs1ZjAzNVZmbklKRmtxQjlEaUN6aGY1V2ZCd0pvTGo2U1g3THpjaFhnUGI0eXVzekJTelVyU2xROEZUUTRUSzBPWnpwZU5aS25KUVdZTGYzSjlGS1hTQlBYbGJxeWN4elNseHJZVkRaaXlpbXVPbEtzaXN4ZEhhMVRDRTlTV09Xeg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:04.924Z",
    "validityHours": 24,
    "specsPreview": {
      "propulsao": "V16 8.3L Nat. Aspirado + 3 Motores Elétricos",
      "potencia": "1.800 cv combinados (9.000 RPM)",
      "painel": "Instrumentação esqueletizada em titânio e safira",
      "aceleracao": "0-100 km/h em 2,0s (V-Max 445 km/h)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwb0yztk-bivn",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Beau Wrigley’s Original US-Built Superyacht Sold for $23 Million - autoevolution",
    "suggestedHook": "Náutica de Elite: Beau Wrigley’s Original US-Built Superiate Sold for $23 Million",
    "summary": "Beau Wrigley’s Original US-Built Superyacht Sold for $23 Million autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQMF9CVVhfa2NJUmRWLUs3UVZ1TnFTUTlfOG9qNEo4WWRDTVN1V2h5TTBMMk5OZW1rUkF3dGN6emZ6Z0h4aTN1U1lFakFYUVFBZEprQnF6MXNIMmVsRk5iRHVjRUd0U3FaMFk3RFB6VUxZVE91Zll2emE2WTY4RzVGZmdrMVFvQkJleUFwbE80V1lGckJvSWNjTjdmX3dvbmpTUnVSdXRsRElMTEUwcHc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:05.528Z",
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
    "id": "pauta-live-supercarros-mwb0yzfn-4ojd",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Taiwan’s second Ferrari F80 has been officially unveiled - The Supercar Blog",
    "suggestedHook": "Hipercarros: Taiwan’s second Ferrari F80 has been officially unveiled",
    "summary": "Taiwan’s second Ferrari F80 has been officially unveiled The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNeDJkUVRZQXNZODM2aEFNTnFQMnpMdXJUUFN1OVhMQnZ0RmpuSkFwNGxRR2otSF82VTcwVjl2dkt6VEdaNU9jUEFVM2MwY2tZZjI3S1BQaGVRdk1MalBMRGRVdk42UHpCS1FGbl9ZS2Ezdi1kaVNCN3pTVDJmWFJXUnhfU0FJTkNqWmZ5NmFFazBVZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:05.027Z",
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
    "id": "pauta-live-relogios-mwb0z0af-mufh",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Phillips Geneva Watch Auction XXIV Tops $112 Million - Haute Time",
    "suggestedHook": "Alta Relojoaria: Phillips Geneva Watch Auction XXIV Tops $112 Million",
    "summary": "Phillips Geneva Watch Auction XXIV Tops $112 Million Haute Time",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA1eHVpdE43NnlUTHBodVQ5R2NRdENEMUlkVGFabnlSSTBYRlBPYkJkUmMwT2JjeG5UX0pQUmZfOWhmZzYwT1NFUXFWd0VsRGMzOHgxTDZfVGp2OUdIOFp1X2E4bmp2Yl9tc011YmtCVzk4XzU2OU1DRE1wS1JZSk0?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:06.135Z",
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
    "id": "pauta-live-arquitetura-mwb0yz74-vz3j",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: Three Big Takeaways From The Geneva Fall Auction Season",
    "suggestedHook": "Auctions: Three Big Takeaways From The Geneva Fall Auction Season",
    "summary": "Who is up, who is down, and who is confused. Including the author.",
    "sourceUrl": "https://www.hodinkee.com/articles/three-takeaways-from-the-geneva-fall-auction-season",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:04.720Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/b1d62720-f7ce-4967-a24a-865a952b92f1/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwb0yzew-b81m",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "2026 Gooding Christie’s Geneva Sale (Auction Results) - www.classic-car-auctions.info",
    "suggestedHook": "Patrimônio & Leilões: 2026 Gooding Christie’s Geneva Sale (Auction Results) - www.classic-car",
    "summary": "2026 Gooding Christie’s Geneva Sale (Auction Results) www.classic-car-auctions.info",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQMGJWSFUwVFBsYTB1S0tFZThvTGdKVkZ3bmJOUG9YZ2lQNGZHbVluc1FJZmlvUmJZeEFjaDlGVFY3VlBIOGJFRTA5cmU0YXFaS29CTzhRUkxlNm54bXlyTHp4aUVtWXZ5Y0Ztb25tUHN4cmF4dWtnNDBQNHpVUU1ydm9XUUhxeUNQRFdoWExCbVlacm91bmNCZHp4UE41WXM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:05.000Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwb0yz9v-i2bq",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – Angelier Launches on Kickstarter with an Accessible Calatrava-Styled Dress Watch",
    "suggestedHook": "Alta Relojoaria: First Look – Angelier Launches on Kickstarter with an Accessible Calatrava",
    "summary": "Angelier’s story began with a collector’s search for the ideal dress watch. Having owned and studied watches from the likes of Patek Philippe, Vacheron Constantin, and A. Lange & Söhne, founder Paul Angelier eventually decided to create the watch he could not find: a slim, understated piece inspired by the design",
    "sourceUrl": "https://monochrome-watches.com/angelier-on-kickstarter-accessible-37mm-vintage-calatrava-automatic-dress-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:04.819Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Angelier-Watches-Kickstarter-Accessible-37mm-Automatic-Vintage-Calatrava-Style-Dress-Watch-Review-12-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwb0yz41-0163",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Martin Luther King Jr’s Handwritten Draft of His ‘I Have a Dream’ Speech May Fetch $10 Million at Auction",
    "suggestedHook": "Martin Luther King Jr’s Handwritten Draft of His ‘I Have a Dream’ Speech May Fetch $10 Million at Auction",
    "summary": "Christie's will offer the manuscript, estimated to fetch $10 million, in a single-lot sale in January.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/martin-luther-king-speech-draft-auction-1238831209/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T18:30:04.609Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Martin_LutherKing_LDN.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwahol7v-4434",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Canadian singer The Weeknd bought a $50 million Florida waterfront mansion on a Coral Gables peninsula, w - The Times of India",
    "suggestedHook": "Canadian singer The Weeknd bought a $50 million Florida waterfront Mansão on a Coral Gables peninsula, w",
    "summary": "Canadian singer The Weeknd bought a $50 million Florida waterfront mansion on a Coral Gables peninsula, w The Times of India",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9AJBVV95cUxQWUJPMjJNLXZJVUpSYUFicFl3SnZhdDR2a2w5ci1RcVBDT0N3S1RjdURDOHRJX2pTQmt1cEc2bXBvcWJNeWp5UnZiNDFVREJ0Vkh6Tm9iZTJGVHZPMjZUSUdOWmxSVkJXSkpZeHFIbU1sTFpmOFRfbVVadWZucmlCZDVKNURyODdFUG5RSzE0VUN4WS12VEVFNFNFOWYxSzdFckVYV3NJd2hWaDAwUEx1SkJRdF9uaFYzNVVkOUVzUmhpbnUwWG1nLVR0ZlBnUmtjV1VybW9rM2xLR0xSLThaZFVNT1pKQWJvVXUyNnEtbTQyd0RFdVRiM2hDWkFxTnZydmlyVmo4NlM1dTBnUXVKb3F1WnJvRVZLNVdMNHN5OWo4SkpTU3V5V2RqRWE0dUhwVnNTSEF5MDlES1RyeTR0WXRncmk5MzRGZ3NYcHBJaGFzM2NyclRWOE1PTEQ1ZzR5Ulc2WkJiaHNyc1VoQTZlTXpaQWPSAfoCQVVfeXFMT05HR1NIWmdmR3lpQ1hfOW5SaEFxTWtGUWNKVnRnNFc2LUFJWEp0N25vSzhMLWlVbDlQb21DZUxNYTBoZU54M3NMczZ3elgwc21EbXk4ejMzM0pFMDNRZU9FZjV2bUUzdVh1a2VKc0pvcWxJekp2NXE1UXV2REJ6OERnZFhfaThWejZEeEtLQ29GYnJ6M1FQZVNpT29SQU41UnZNM1pjdWtScktPZ0hDd3FsTTJHREhIQWl4LUwwdXJ2TnJJc3NPVTd6LTVyaTlkTDhrUnZUQTJfNm4zRGlUNUVpT01pVjA4eUlGNlVVZ29LcHh0eUloSWd4eG42NmFMejVVLXNXLW94N1psTjJTUFZZSE9wMkQtWTVuNElCUk10M3B4a01mVXNMSHRURGswd1BOY0xPY2dsUEhDM1VUbEM4TlJkNkNaQzktdi1LbGxZOGhPdnlyZ2dXZUVJaGVkWXFNQmhqTEFsVklpLWoySTNMekpyV29vN1RB?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.339Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwaholif-z2ng",
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
    "createdAt": "2026-11-10T09:30:07.719Z",
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
