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
    "id": "pauta-live-destinos-mwfbara9-lzbv",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Because billionaires hate waiting, Lürssen has opened a permanent repair base in Spain where a 24/7 rapid-response team can fly specialists to any ailing superyacht in the Mediterranean, offering immediate repairs and spare parts for vessels up to 525 feet l - Luxurylaunches",
    "suggestedHook": "Because billionaires hate waiting, Lürssen has opened a permanent repair base in Spain where a 24/7 rapid-response team can fly specialists to any ailing Superiate in the Mediterranean, offering immediate repairs and spare parts for vessels up to 525 feet l",
    "summary": "Because billionaires hate waiting, Lürssen has opened a permanent repair base in Spain where a 24/7 rapid-response team can fly specialists to any ailing superyacht in the Mediterranean, offering immediate repairs and spare parts for vessels up to 525 feet l Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOYldvMWo5YVpGSGc0SHFkclV4X0NndnhuX0EwamNLb2k5d1g3bWkxanRiTkhkcjlXQWNmZjlldnBZV2JScVJVMkc4c0RFNzhjY1lfR0ZBVGh2bGpyOW4yRHEyUWlKcWs3cGRrS0lZMl9ZOWIyZV9ITXpHZm1IV2Uwbk9SVWw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T18:30:15.201Z",
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
    "id": "pauta-live-destinos-mwfbargc-fp6e",
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
    "createdAt": "2026-11-13T18:30:15.420Z",
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
    "id": "pauta-live-destinos-mwfbaroh-zxqg",
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
    "createdAt": "2026-11-13T18:30:15.713Z",
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
    "id": "pauta-live-supercarros-mwfbaqx2-kl2d",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Someone Paid Nearly $10 Million for a Ferrari They Can't Take Home - Yahoo Autos",
    "suggestedHook": "Hipercarros: Someone Paid Nearly $10 Million for a Ferrari They Can't Take Home",
    "summary": "Someone Paid Nearly $10 Million for a Ferrari They Can't Take Home Yahoo Autos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQdVFzUVRwbkFtWTNIdXVTdVlLNkQ0dVVibjE1T3lkOGRqVGlFajlmY0dCb0ZHblFaZWVnZ1NSVXdOSUhQZDJIOUhoRWJRR21aU0ptNHBQeDFuLVBJdWpQeUJyN0F5ZDdxTmNYZFE0M3drT0RWRDNqSmV4SGRwU2k1WEFZTVh2VTRidjUtaUw1dzQ5ZTU5QmNIMmV6U1FwWkN0bXc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T18:30:14.726Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1610880709844-b97111a986f7?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwfbaqzv-74vv",
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
    "createdAt": "2026-11-13T18:30:14.827Z",
    "validityHours": 24,
    "specsPreview": {
      "avaliacao": "Faixa de US$ 450.000 a US$ 550.000",
      "arquitetura": "V12 aspirado clássico vs. Híbrido avançado",
      "peso": "Alívio extensivo com fibra de carbono",
      "telemetria": "Maranello Pure Dynamics"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwfbar22-abg4",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Opinion: The age of chasing hypercar top-speed records is over - Top Gear Philippines",
    "suggestedHook": "Opinion: The age of chasing hypercar top-speed records is over",
    "summary": "Opinion: The age of chasing hypercar top-speed records is over Top Gear Philippines",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQX0RJeTAxRnBNZHl3TmRVX2tlM3ZGd2pZSGU0STFzbDhfbVJGNDh5QVhyeGJrQXp5SUM5MDFjY3FLOURtQ3BxOTg5ckVnN0p5OFpxeVJrbndxdjJSRk5mVVl2cm9XWGVUZEdWV1E5WWFUeG45dl9DVFhzRDBfaGFzbFl5Z3g4UnBmN0hyWTQxTEk4MUZwb1RsTTk3bmgydkR2VHZpOC1udGNKTGM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T18:30:14.906Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwfbaruu-ki0o",
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
    "createdAt": "2026-11-13T18:30:15.942Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwfbaqqq-ud7j",
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
    "createdAt": "2026-11-13T18:30:14.498Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/07/richemont-group-results-sales-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwfbaqp0-h62i",
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
    "createdAt": "2026-11-13T18:30:14.436Z",
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
    "id": "pauta-live-arquitetura-mwfbarv2-h9mt",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "The ‘Mona Lisa of pink diamonds’ is one of the rarest on Earth — and just sold for $14.6M - New York Post",
    "suggestedHook": "Patrimônio & Leilões: The ‘Mona Lisa of pink diamonds’ is one of the rarest on Earth — and just sold for $14.6M",
    "summary": "The ‘Mona Lisa of pink diamonds’ is one of the rarest on Earth — and just sold for $14.6M New York Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNbWNYSTlUYXlNUEYxRDRWbGxVQWx4VlpCa1hCTnZxbWNaVmlZRWpQc1Uzcmc2anBXZnJTUDFQTkZQeVVWRGxQYk04cjM0QzQwZ1lmZzY2YU5QOFI2NTl3TmtRd0lqY0ZUblIxa0prbVhRdDZGS0VXSzgxZURPUUlRTXJFbXZ3ZExCU3V0MExxSDR1aWdHcmkw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T18:30:15.950Z",
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
    "id": "pauta-live-relogios-mwfbaqlj-bbjl",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Zenith and J.N. Shapiro Teamed Up on Gorgeous New G.F.J. Calibre 135",
    "suggestedHook": "Alta Relojoaria: Zenith and J.N. Shapiro Teamed Up on Gorgeous New G.F.J. Calibre 135",
    "summary": "The Swiss brand courts new collectors with a G.F.J. Double Signed featuring the American watchmaker.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/zenith-jn-shapiro-gfj-calibre-135-double-signed-1238837306/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T18:30:14.311Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/zenith-j-n-shapiro-watch.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwfbaqot-d0ix",
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
    "createdAt": "2026-11-13T18:30:14.429Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Studio-Underd0g-04Series-calendar-Weekend-Indicator-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwes0b23-2yi5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The new records set by Toyota's Hypercar trio with WEC 2026 title - Motorsport.com",
    "suggestedHook": "Hipercarros: The new records set by Toyota's Hypercar trio with WEC 2026 title",
    "summary": "The new records set by Toyota's Hypercar trio with WEC 2026 title Motorsport.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOdklISkxoRzRRZ1RsSmZVOTgwc3BDX3lyeHF4VHBOc2ZEVTd6X2dxcVRVOEc0bVRhcl9laFJsRF94b0J2XzRvbWt3Q05MQlBsU25oTEIzRXVONFRvOUZWbE8taGliSW4wQ2tKRmJ5WVByUGRlNDBMNE9oMVRYTEJPdmtISGttdnpJbHZIZ01Odmk1TWhNdm8tSGFTeFY5T2lielJOSnlXRktlc3JqSzJn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.907Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
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
