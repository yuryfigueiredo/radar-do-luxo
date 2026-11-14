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
    "id": "pauta-live-supercarros-mwfuv4p7-ppyq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 95,
    "rankingTier": "S+",
    "originalTitle": "Ferrari built Eric Clapton a $4.7 million custom car: Today, his SP12 EC stands as one of the rarest supercars - Diario AS",
    "suggestedHook": "Ferrari built Eric Clapton a $4.7 million custom car: Today, his SP12 EC stands as one of the rarest supercars",
    "summary": "Ferrari built Eric Clapton a $4.7 million custom car: Today, his SP12 EC stands as one of the rarest supercars Diario AS",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxORy02ZGt3VnJVYnk3bGVWZUxxdHhCUTE2RGxjVjlIWVo2ZDlUMV9iYkd0akRnQ3VGc0Nvdlc1cUpxTkxZZnpIdm1sbkQ2LXJwZ0RBU3JCbkFZSUd4ZWMzR2ZmMk1heDVTaVdkbHFkOXhCUVpwYllkZ0ZTNHlwX2FOa0lLSlpaeW9pU0tHRURUWnhnbVRxQ2NjWDk5OWJJb0pHNXU4a0dMNG9EM2E1QWQwUkxvRWZ2QkY1NFAzeTJYdDYyc1RDTnV2N0VSNUY2VGZOZWgzd2lCRl84R1RLc0kyWG1OWldnZ0hYem5HX0lzY0tDMjVX0gGIAkFVX3lxTFBsbzFLdUc2YTVQZW9Ma1NfbVN6WkJGdnU0dENWVHNXVE4xSWx5MGJvYmxDdjhpci1lTzNsdV8teW91M3JRUzJ0dDg5NGUzVjB3Y3o4RDI4bjdIWlVCb1RSbnFkdUY1VEd0Ri1EUHJiNU1DUGkxUW1pWjdJYXBITXBSTEIxYVJCQUlVZVI4QXlZQjZUSlFlRnVZcXdVVDJ0b1ZpQjlkQ2VGM1dqOUo4VE1oZXZiRnBGa0t6R1FIS240cVVLWDg1a0p4ZGozZl9wM1hQbVFLUkRtX0ppbVd1N190cUFXckl5NlhQOWMzdFNZY1A4LVRKRUoxR05BWEJRaWYtYzVGdGk1NA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.411Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwfuv4wi-9vqy",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "A Greek shipping billionaire was so impressed by his new 154-foot superyacht that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom - Luxurylaunches",
    "suggestedHook": "A Greek shipping billionaire was so impressed by his new 154-foot Superiate that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom",
    "summary": "A Greek shipping billionaire was so impressed by his new 154-foot superyacht that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3AJBVV95cUxOVFN1Wi11NDlmZUJjUm1QWnRpNnVidy1hUDdNMGpXRFI3VUcxLTl5QkZ0WUlsRE1ZQmR5RWF2THc4LXdqTU84NmVYVWZJRW1Zcll3bERqcjM3c2otOU44QnBPODNNbVJzQUJub24wWkNzaUdzOFBnU0lfaWgzVFF4Q3VMRjg3d21hS0x3eUZrS3Y4TkY1UHRHcDhpdy0zRzlIS3p5dUQzVnhhUHR0aDRrcjcyelo1Xy1CY0xZQ3NYaWl5czNRSFk2eHlIT3N2cGxXNThtdVRYdDVUUmNpRW5qWmRjZ1hzQnVDTWl4RTZUYk1CTE91SlZyTU1ybWFnUVloWTFsRjVITVNGWkxrSHE2cHBpel9ELWU0ZnYxdlo2MGJ2bUh2MHhUQUR3M05WVl9qYmx1M3hFbEdOVDZwZ0dPdm9ocTJLTk4xS0lNZ09semR0TGRVYUx4VE8wbmo?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.674Z",
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
    "id": "pauta-live-destinos-mwfuv4zk-1hjz",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Superyacht owned by British billionaire John Caudwell docks in Arrecife - Gazette Life",
    "suggestedHook": "Náutica de Elite: Superiate owned by British billionaire John Caudwell docks in Arrecife",
    "summary": "Superyacht owned by British billionaire John Caudwell docks in Arrecife Gazette Life",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPWTVXaGEyX1U5alpmNUN2THN2MGNsS2RSSVR6ZHZvcmJtTU1XUXFBVUFHSFp1aks3WThCdFUzSFJRRmxBeUNvZHVZZnRKZzhaWDJqYUhPU0VkNDE1YURkSFREU0daOG9VMnhMZGJHV3RuZno4Yk5tMEpRMEQ1TnZmUTYwQ2N4NVJvYXlGQUp0bnZLRmhZaXIzM3NpbVZITU9uM0xv?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.784Z",
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
    "id": "pauta-live-destinos-mwfuv505-yerf",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Bayesian superyacht sinking was caused by 'crew's incompetence': Italian investigators say design flaws were not to blame for the disaster that killed 7 including billionaire Mike Lynch - Daily Mail",
    "suggestedHook": "Bayesian Superiate sinking was caused by 'crew's incompetence': Italian investigators say design flaws were not to blame for the disaster that killed 7 including billionaire Mike Lynch",
    "summary": "Bayesian superyacht sinking was caused by 'crew's incompetence': Italian investigators say design flaws were not to blame for the disaster that killed 7 including billionaire Mike Lynch Daily Mail",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNUmdGYmN4eTBILXN3VWg3T29yb0wwaURXZ3BKN21sNEFhVi1sX3RCSUVteGlGMmNNOXZlcnY4QVNUQWtzUjY5aDVuSU1OcDFGVnRfcjV6TF82ZVpKczl3eGhZbXM3ODdIR1pTUnZqbHc2T0hqNWZxcjFuSi11aTkybW14cWJxNF9MTDlQbTF6bWJscVgyeG1TWmpQdjRfMWxUejh5X05COHpicjRMeVNUZ2dnZ0ZOblpPdVRpTTYxSkM1QdIBxwFBVV95cUxNQlUyX05oTVJVenRrZ1V2RnYzeUVqQ191X0E5WWRiajQ2TjJNUFFZRmxIQ1pNbnpxLTUzTjVHcmhXLWlBNVBqTEhuNFVvNVgyX25DMjZOckdSdjhvVFFPME1NM2hlci1iV2tBcDZCUDQydjZHTlNidlV1ei1JWExXaGRQc2JrMWFwSGJDWmNUZEcxQkRjSkF3SEduVlJNQVo5UGpJZXAxWUMtUnJmbGpJWFNJcnkzUWNpdHpoeUVpSWhPRGdRZWJ3?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.805Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwfuv4o9-5k1b",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Someone Paid Nearly $10 Million for a Ferrari They Can’t Take Home - Autoblog",
    "suggestedHook": "Hipercarros: Someone Paid Nearly $10 Million for a Ferrari They Can’t Take Home",
    "summary": "Someone Paid Nearly $10 Million for a Ferrari They Can’t Take Home Autoblog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOQzJOVlZIR3E4azRiVU95amVGWXN1dHEwRmFLVC1kV2l4U2NOckktMlFvSXA5N0JYRFhSUEhyaHZWZTRyanNacEhxYUZaM3pCV0pra2RUTk9pMTdpQWdJV0FWanF4T19ZdXdraFhfcHgtRHp4Szk4TGtDVS1ySTRNSGFaTER4aDNqaE01bjM2bUpiblNVV1l5UnJB?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.377Z",
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
    "id": "pauta-live-supercarros-mwfuv4q1-u8vz",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Ferrari Luce Wins Golden Steering Wheel Innovation Award 2026 - Ferrari",
    "suggestedHook": "Ferrari Luce: O Dilema de US$ 500k entre a Nova Era Híbrida e a Tradição dos Motores V12 Aspirados",
    "summary": "A Ferrari coloca em teste o apetite de seus clientes tradicionais em uma encruzilhada mecânica onde o rugido de 12 cilindros em 9.000 RPM permanece como o supremo refúgio tátil.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOZTU3ZzBnQm5hZW9USThpTWZ0NURBbjBwZllMTWFVazRZWFdUMnJERlViNU5aVC1tdzFZMnRxbzNsckhXX1NKaHMzUTQ3TDhtT1NVLXVvOThNVExlUFpscXJxRmdXRUFuV0VGM01rc0hLMmdDZXYyX3VSRXB2Y2lkV3lfdUV1dEZqM1F1LUhmRnlnTEdqZmdkTnpEcVk3c2c0bzF3V1h3MA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.441Z",
    "validityHours": 24,
    "specsPreview": {
      "avaliacao": "Faixa de US$ 450.000 a US$ 550.000",
      "arquitetura": "V12 aspirado clássico vs. Híbrido avançado",
      "peso": "Alívio extensivo com fibra de carbono",
      "telemetria": "Maranello Pure Dynamics"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwfuv4gi-4n6m",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s November Watch Auction Hits a Record $59 Million",
    "suggestedHook": "Alta Relojoaria: Christie’s November Watch Auction Hits a Record $59 Million",
    "summary": "The auction house is holding its luxury week in Geneva, and while it hasn't released final totals, early returns appear to be very good.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/christies-rare-watches-magnificent-jewels-1238838351/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.098Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Christies_MagJewels_Geneva.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwfuv4i9-wb1n",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Art Dealer Rena Bransten’s Longtime San Francisco Home Hits the Market for $8.8 Million",
    "suggestedHook": "Patrimônio & Leilões: Art Dealer Rena Bransten’s Longtime San Francisco Home Hits the Market for $8.8 Million",
    "summary": "The late gallery owner's Presidio Heights residence sits on a rare double lot featuring terraced gardens and Golden Gate Bridge views.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/rena-bransten-house-san-francisco-1238836641/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.161Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/RenaBranstenHouse_SF_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwfuv52o-yf1s",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "suggestedHook": "Patrimônio & Leilões: Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "summary": "Romanov sapphire bracelet exceeds auction estimates in Geneva Kursiv Media Узбекистан",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9tYWJTUDFUSDhZRXNjWTZYV2g3TWQ5SzBUOXpyQVZrSW5UVHZWbjhzc1VYb243Q2NOYWN5TFdPLWJRQVBCcWhkbm5BYWMtVXkwR2FvVldvZHpoZVd0c0F3LUQydjhQMUx4RC1JLWRVdmE4bUdxYTBV?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.896Z",
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
    "id": "pauta-live-relogios-mwfuv4lb-3ll1",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "suggestedHook": "Alta Relojoaria: Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "summary": "Richemont, the Swiss luxury powerhouse, pursues its 2026 fiscal year on a strong note. For the first semester ended 30 September 2026, the group reported sales of EUR 12.3 billion, up by 17% at constant rates (+16% actual). The second quarter growth was sustained at +13% after a particularly strong first quarter in",
    "sourceUrl": "https://monochrome-watches.com/richemont-reports-strong-first-semester-2026-sales-up-by-17-industry-news/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.271Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/07/richemont-group-results-sales-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwfuv4l4-sddt",
    "source": "Monochrome Watches",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – ArtyA Presents the Purity Curvy HMS Sapphire Sport Edition",
    "suggestedHook": "Patrimônio & Leilões: First Look – ArtyA Presents the Purity Curvy HMS Sapphire Sport Edition",
    "summary": "Yvan Arpa continues the brand’s strategy of pairing ultra-transparent sapphire crystal cases and openworked movements, with no limits imposed on colour. The latest offering from ArtyA follows the path of the Purity Tourbillon Sport Editions with configurable features released earlier this year. While the new Purity",
    "sourceUrl": "https://monochrome-watches.com/artya-purity-curvy-hms-sapphire-sport-edition-first-look-hands-on-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.264Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Artya-Purity-Curvy-HMS-Sapphire-Sport-Edition-review-9-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwfuv4kx-9bzp",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Introducing – Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "suggestedHook": "Apresentação: Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "summary": "Founded by Richard Benc, British brand Studio Underd0g launched in 2020 with a design-led series that broke from the watch industry’s usual conventions. Its colourful chronographs, fun dial designs, and collaborations have helped it establish its identity, while accessible prices have attracted a growing following. As",
    "sourceUrl": "https://monochrome-watches.com/studio-underd0g-04series-calendar-collection-retrograde-date-weekend-indicator-new-seagull-movement-value-proposition-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T03:37:58.257Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Studio-Underd0g-04Series-calendar-Weekend-Indicator-6-600x237.jpg",
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
