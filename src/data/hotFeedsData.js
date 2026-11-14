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
    "id": "pauta-live-destinos-mwgqqlyj-kr9u",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Kansas billionaire's 235-foot superyacht inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million - Luxurylaunches",
    "suggestedHook": "Kansas billionaire's 235-foot Superiate inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million",
    "summary": "Kansas billionaire's 235-foot superyacht inspired by the Porsche 911 gets a staggering $14.5 million price cut as the Feadship vessel goes on sale for $150 million Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOTG9CbjdndU5fdjlLMU9Nbi00Q3RKWV9VeTl5RURrMDFiZG1PTHQtWlc4MXREbktUbF9TVDVIbV9DYjZvcVZZRFgxa2k0dWQ4d0FnMnhhb3ZoSEVVUzNES0RBWTVaa3R3V3JxM0J5cmRLM2p0dDFFWk91am1XN3dmNGNIUW1Fc1hvdDlN?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:15.211Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwgqqlyw-752o",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Russian billionaire’s $600 million high-tech superyacht, dubbed ugliest in the world, is ‘stuck’ in Italy - The Times of India",
    "suggestedHook": "Russian billionaire’s $600 million high-tech Superiate, dubbed ugliest in the world, is ‘stuck’ in Italy",
    "summary": "Russian billionaire’s $600 million high-tech superyacht, dubbed ugliest in the world, is ‘stuck’ in Italy The Times of India",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2AJBVV95cUxNWEJNNS01bFFrU3ZSV2dzZGJqd2R4TGpYZXJZcERLdXdzVlJCV0tmTmJ0WHpkcHFNY0UySkJGZkgwVUFHLU9mN2NuNmJTZzlGSlhtbFltRVRNM1J2T20yTWxNd2RBSWl5Tkk0SXBzSGd2aERPN3BWck1iVnFKWmVVNDV2TXhlRWRwdmVNbzdhUjFYdmJVYXQxeFRZZ0gxcjdYeG10Y3p6dzlmVmZhUFllam5YYVREMUhVS3NDYnk3ZzN0SVRBLW9mZDJ1TVdxUXM0UXhxQV8tTW5HZ0NJODlubVZrMExiUFB3cTIxTEh3T3pxcXNDNXFBWEJlMDExWUREaXktaWs1RFVheXFveWRxamMwdnl0Tmw0MWl2NVdaa3JTX0NoVmpTMDdyMFRfV3l1d3o2NFYzdzVrSmpDUzRfb21vWU5BRTQ0Sl9odlE3Q2IxeDRfcWZKTtIB3gJBVV95cUxPa1VCTVU5Rjh6ZEFLZThBNUE2U2FMVnlETy1aeHREOW9FTUV4TlcyZUk1NGtMYXhWYzFBeXVXYkZwY0NCTXVtelNEbmNzR2JwMjBERTN0SjVNb2xTZ0x3N2ZoSFhFQmxjaWFxVHoxUjJhRUNnMjlDTEF5Tkh0THowdkh6MVRhVEx1c2JpdlZPOEZHMHZaRUNxVnNPSF91VVRJaldBSURUVTRhQTh4TDNXemphbkFIOTJ5bmZtVDNTalFUbkI3YVAxQkhQcHI1MlliZ2d3Y1RlOFNibWNta2FHR2FsdTR3YUVCUTlpSWRVN3dlOWdUQ0NwQUdNXzNtUWUzNFE2LXdkVHZaRW9pTWRjN2xyYUNnY3Rpc1dwRnE3Vl9lMlFqM3ZtSzRZNVUtbm9rS2p6NnFjdmhGeDQyYndVSEtWMHNhOW1ZR3VFMEg3T1VveXEtZHNJOUlTNkEydw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:15.224Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwgqqlzb-cxu7",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "US billionaire's $300m superyacht spotted in Auckland - NZ Herald",
    "suggestedHook": "Náutica de Elite: US billionaire's $300m Superiate spotted in Auckland",
    "summary": "US billionaire's $300m superyacht spotted in Auckland NZ Herald",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQR1NCM2Q3MnVUbTltU2lJTTUzX0ZSMFhTeXlWdFFoR1JPR1dlcVQzMzhqNWg5Zmx1bXBSU3J4d0FuVWxXeVRyR2I3RTZvOUhuNEZOdjBuV2dmeGN3bnk0eXc1UkNidVhFd2RNSEliMS1FckxZWENwcHB4NVpzSmFLM2NCNFd2NXpIRTk0SDlYNUJTbHR3bURqeGRjN0k4bnl5RjJKWFVIN2FtbGN5NVhSbGw3dTdJQ2trN0RfeG1EdDVWX3VlQmloQ092bHJXVGRS?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:15.239Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwgqqltg-er8u",
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
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSzJncGVqMkwtNjBnTmhIX2RxQ01IQTJtVkdHbGZ1TURVenl1dm5FdkZRZk50OUQ2bDVSbTNNOEpqYkNrTEFUY2NNQmdrUWpEcm93S0YzcDFzeXJ5S0ZtQ0J4REJodUtGV0JMUVJ0Q1RvZ05zbENQb0JaaWVPNHdjdlowWlI1RU9RLWU2YVV1RGpVNDI5N2JfMlc2VTcySlVHbFMzeFVrVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:15.028Z",
    "validityHours": 24,
    "specsPreview": {
      "avaliacao": "Faixa de US$ 450.000 a US$ 550.000",
      "arquitetura": "V12 aspirado clássico vs. Híbrido avançado",
      "peso": "Alívio extensivo com fibra de carbono",
      "telemetria": "Maranello Pure Dynamics"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwgqqlyp-ld0i",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The Italian Sea Group Auction Set for November 16 - Megayacht News",
    "suggestedHook": "Patrimônio & Leilões: The Italian Sea Group Auction Set for November 16",
    "summary": "The Italian Sea Group Auction Set for November 16 Megayacht News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9PTEplNVRTa0pLUDhOdk0xclRaVzN4NVctOUhUcnBaenhJekM5ZFU4SGt6S3BrWVlCMzE2SUQ3cXJOYXlUc3d5Tnk3djl2R1dIcGRTWGE3Vl9hVlhvMDhXOUl6blFHeGNibklZWm1qZ3R6dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:15.217Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwgqqlkw-c4ww",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Cristiano Ronaldo’s Bugatti Centodieci spotted in Germany - The Supercar Blog",
    "suggestedHook": "Hipercarros: Cristiano Ronaldo’s Bugatti Centodieci spotted in Germany",
    "summary": "Cristiano Ronaldo’s Bugatti Centodieci spotted in Germany The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPd2FRQlo4aFJnX2cxTElUM0lhdGVRUmpJV1FQVEd6Zld6R3c4bi1Xb1FuaHpVOXNVZXJ1Ulg4bk13dDdpQXNlenJMZlpPSzBjd1FWV2FGcUhaUFIyS2l0bEdpeGxXMWFVQTFrV2pWY2U1ejVZSUk3WTJDVk93QlhLd1J2Uk1YZE0yMjFVRE1RN1RXQ2c?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:14.720Z",
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
    "id": "pauta-live-supercarros-mwgqqlqs-kn4k",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Cetilar, AF Corse Ferrari Hypercars split pole positions for ALMS Paul Ricard season opener - DIVEBOMB Motorsport",
    "suggestedHook": "Hipercarros: Cetilar, AF Corse Ferrari Hypercars split pole positions for ALMS Paul Ricard season opener",
    "summary": "Cetilar, AF Corse Ferrari Hypercars split pole positions for ALMS Paul Ricard season opener DIVEBOMB Motorsport",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPZjJ3WWp5WC1nRnlQZG9hN2hiWlY5T2FIdmtGal9KVS02Yko2T0hRR3ppSmNUbDZvT2FMaTFnUXEydDV2NmtCdkJjM3hiS0tUaG93Q3Rtc1hFcl9PX2tZRjRxaDR5bWxiMDVCNXR1RWRSZEw5dFFvYjNSbEtuenZHNE1oZ19DdGkzbTNFZWo0S05pSUliRExjdUdScFlRMFh3LVI2aTg0U1gxTWRGdXAwZ1RqNGlOX1ZlU1ViMDJ3djVJWElYT0xoX2pvWFV3Skk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-14T18:30:14.932Z",
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
    "id": "pauta-live-relogios-mwgqql7f-d7w0",
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
    "createdAt": "2026-11-14T18:30:14.235Z",
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
    "id": "pauta-live-arquitetura-mwgqql9j-ywo0",
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
    "createdAt": "2026-11-14T18:30:14.311Z",
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
    "id": "pauta-live-arquitetura-mwgqqmi4-ze7j",
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
    "createdAt": "2026-11-14T18:30:15.916Z",
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
    "id": "pauta-live-relogios-mwgqqlhm-mj2k",
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
    "createdAt": "2026-11-14T18:30:14.602Z",
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
    "id": "pauta-live-relogios-mwgqqlf7-1k00",
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
    "createdAt": "2026-11-14T18:30:14.515Z",
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
