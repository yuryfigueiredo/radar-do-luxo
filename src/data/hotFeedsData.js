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
    "id": "pauta-live-supercarros-mwngkta6-qs2y",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 94,
    "rankingTier": "S+",
    "originalTitle": "65 Equity Partners marks US$2 billion investment milestone as it announces investment in Swedish hypercar manufacturer, Koenigsegg Automotive - PR Newswire",
    "suggestedHook": "65 Equity Partners marks US$2 billion investment milestone as it announces investment in Swedish hypercar manufacturer, Koenigsegg Automotive",
    "summary": "65 Equity Partners marks US$2 billion investment milestone as it announces investment in Swedish hypercar manufacturer, Koenigsegg Automotive PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAJBVV95cUxNbmN3ekdFbURKX2J0czN5Uk94V1NaUXpmZXBlWHFhdmJwVkh6RWUxWktzZG1xMVcyRFZ4bWJTbXBUMjBFb0pQMWtfX1NicVhOaEpXaWI1Q1Vmc3Q1eGp0Vk9tN0xGM0xzaHF2MnVib1FvdkF0TzBJcVFuMXdHaS0xdFZuRVFVRjdZV0hVTjYtRm1rSXZZTmJaZzFzaE5jZVJ5akd6cVlYcjNKZ1JFX0hZMVF5UlRuMXNnSHN2MmEyZ0psXy1OOVNMYnJRRVc5QU9zMWwwQkRfZFVZLXUxQUVYQ1RlRktYUE5neDNsLTFaU2VYM09CUjlGV29kcjU0aV9UbjRCZHNfamdKZF9TQ0pId1g0c2pFbE1IVW5sMmpFSno?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:11.838Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwngkte3-qggk",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "This german shipyard has made buying its 229-foot Aruby superyacht like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne - Luxurylaunches",
    "suggestedHook": "This german shipyard has made buying its 229-foot Aruby Superiate like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne",
    "summary": "This german shipyard has made buying its 229-foot Aruby superyacht like ordering a Corvette from the factory. So a well-heeled billionaire can now skip the wait and enjoy two swimming pools, a sea-level beach club, and a 90-square-meter master suite by ne Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA1OEI5YmN6dFE2OVJmTGRGa1J6ZkpYZUNjN1JNVlJvUXJ5QjcyMG1LRFFDWWJIUFo5b09tVktnMjNuMzVQbndUZ3ZYdlVYdEZWaUJKZkg0MjY3ZXgtNEpnbFF1WTE3dTBTOV91U0tiYnc0cUFIaEdhY2w4ZW1xa1U?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:11.979Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwngktjl-b6t1",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Abu Dhabi to lure world’s superyacht owners with premium experiences to boost billionaire tourism - Arabian Business",
    "suggestedHook": "Abu Dhabi to lure world’s Superiate owners with premium experiences to boost billionaire tourism",
    "summary": "Abu Dhabi to lure world’s superyacht owners with premium experiences to boost billionaire tourism Arabian Business",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOa0JhMkNyTjE1Ymtva09RUUxlblpMOTN3N2MwdG5odUxudktoRTFTLTdsbE5SbG0tLVN3U01kRzVaRjJQc180c0dMd2xvTWFwbDhiQUNENDBxLW0tZnc0VXRVVjRzeWc4dVY2VzJMc0FET1NkeGZmdHJmUzR1WEpsR3FvUm1CX0Q2STk4RXZkdTdDQ3RVNWozNzhnc280akl6NHJvWnhlbjJIYjNVRXFUSzJjNHZWcnAyV1E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.177Z",
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
    "id": "pauta-live-supercarros-mwngkt93-f8du",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "“We Just Blew Half a Million Dollars”: Man Watches Ferrari Burn in Texas Cornfield - Yahoo Autos",
    "suggestedHook": "“We Just Blew Half a Million Dollars”: Man Watches Ferrari Burn in Texas Cornfield",
    "summary": "“We Just Blew Half a Million Dollars”: Man Watches Ferrari Burn in Texas Cornfield Yahoo Autos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxPUS1oYVZVOEE3ejJwZjlrcWFmaTAzT0MwVnI0bDFaRG11SGM0QnhibEJiT1R0dFdzeUVTek9aU3pRUjV6dHpqWTNyQTYtdU8tNEVRVDBrajNzQzRCeTlCSzFtbG9PSDdVNTYwd2tHd1NTMEJkYmRtbG1hVFdRSUpURGJoQ3FyWTVKMjlfRVlBWU1JSVpZamRWaXRzVzFEUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:11.799Z",
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
    "id": "pauta-live-destinos-mwngkthl-b2bc",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' - IGN Nordic",
    "suggestedHook": "Slideshow: Photos From Gabe Newell's $500 Million Superiate 'Leviathan'",
    "summary": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' IGN Nordic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQT3Azd0JzcGFzRFBjN3BSSlV5WG9UWTUwUDNwQV9oUW5vMHE3SDA4Y2RmR2owZWZaLXZKRHVZLUxZNlJBSENrT2k3UndtaE9ubjNkLUh4dTlidXFjODNBejRvel9BbXFIeW52bVJlbHNlaEZRWjJ2LXRkaTZIbExUYk5Oa25CY2lXbWpqU2lPR2RVbzBXeWlFdFc5V2Z6eXIxYmgwUHFkLTc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.105Z",
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
    "id": "pauta-live-arquitetura-mwngktfi-jke5",
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
    "createdAt": "2026-11-19T11:20:12.030Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783344422200-a5493824bcb9?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwngkt7q-x46r",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Bugatti’s avg customer is now 42, but nobody is asking for an electric Bugatti - The Supercar Blog",
    "suggestedHook": "Hipercarros: Bugatti’s avg customer is now 42, but nobody is asking for an electric Bugatti",
    "summary": "Bugatti’s avg customer is now 42, but nobody is asking for an electric Bugatti The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPODdjNW02UjhuTTdvNERiVlAzRk5zNU1ocU1sakt1LTN1RUlOcXNreHdtWDlxS2NSWWFzekFqdkk1cGJ6bjVsOHhIU2hCSjlubU5idVQwQW1CTDM2YWVQYlhPSnlpMHZRWmUtYzJ5RXQxZmJuYlJlS3dwbWI2ZTlpZ2hXLUVIRlpNNXRROHIwS3dFQ3k2eTNMMnI2Vk5PaTdESzZUVlA3Mkt4ZmlZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:11.750Z",
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
    "id": "pauta-live-relogios-mwngktmx-2oar",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s sets watch auction record in Geneva - Jeweller Magazine",
    "suggestedHook": "Alta Relojoaria: Christie’s sets watch auction record in Geneva",
    "summary": "Christie’s sets watch auction record in Geneva Jeweller Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOSlFBdEtJV29EN3RMY0Z3a2psQmFhV2JYbXRKUFdkWTRRX2lnRzBRbmUxNGs5U1NxXy1mWi12S3JzbzJZOUEzbkFzTVRHREVDbGtBVTh6Ny14QUJqcHBqOGE3MW5pem84UzVfT2lTbG42M1MwcWRhMGs5cGloTHNZejFNYWxpQm9UUFJmZzNlanZyU0VqMmcw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.297Z",
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
    "id": "pauta-live-relogios-mwngktod-dv1q",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million - صوت الإمارات",
    "suggestedHook": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million - صوت الإمارات",
    "summary": "Christie's auction heats up... Rare watches fetch $8.2 million and a diamond ring $14.8 million صوت الإمارات",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPU1g3QzN6dE0zVldSNXRsLVVzNnhtRFRqS0Z0S0hMUEVYcEd5U1JjQzRSUElERDRaWU9zUjJlQWs1cFloWHNvU1FuRlJsWHA1emVKcm9QQm9GMlFGZDBIcWRxdWc3WWZzWXpONHFUdUFGZ0pQaUJWVnI1QjBwaDdBTy1QQVpWcGFJckNpOGVXUkFpSnZaVFBRdVBxb3ZNeTIzQ0h0VUhPSjlma3VhalhMNU9oSVFKdTQ2VW1NRk5lY3VxUTVyenRUZG9nTThwTFdVVVJuRnBCS2E4Qm5KaHRj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.349Z",
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
    "id": "pauta-live-arquitetura-mwngktmi-vuc8",
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
    "createdAt": "2026-11-19T11:20:12.282Z",
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
    "id": "pauta-live-arquitetura-mwngktoi-u974",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It - Fashion Times UK",
    "suggestedHook": "Patrimônio & Leilões: Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It",
    "summary": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It Fashion Times UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQaHo4M3gyQ0EtdGF3cllWTmNSb2dxdEktM3doTHVvY09abUFvX2lWUzZzbHVUc3FsQ3hQajFweGRkNHo3ZExwT09Wd2w5S2Jwbjd6RkFaZ2NIdkpTOG54LW5Idy1aNy12bkt1dWNKZWpMSDJOT2VBOVl4a2huQktmNkJSWkV2UQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:12.354Z",
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
    "id": "pauta-live-relogios-mwngkt6e-we27",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "First Look – Oris Welcomes Another Famous Character to Its Collection with the Doraemon Limited Edition (Incl. Video)",
    "suggestedHook": "First Look – Oris Welcomes Another Famous Character to Its Collection with the Doraemon Limited Edition (Incl. Video)",
    "summary": "What’s not to love about Oris‘ playful tradition of collaborating with characters from popular culture? It began with Kermit the Frog in 2023, whose appearance in the date window of the ProPilot X Calibre 400 brought a dose of humour to the titanium pilot’s watch. Miss Piggy followed in a smaller, pink-dial ProPilot",
    "sourceUrl": "https://monochrome-watches.com/oris-doraemon-limited-edition-big-crown-pointer-date-manga-inspired-video-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T11:20:11.702Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Oris-Doraemon-Limited-Edition-Big-Crown-Pointer-Date-Japanese-Manga-Inspired-video-review-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwmv58bf-wwab",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class - CarBuzz",
    "suggestedHook": "Hipercarros: Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class",
    "summary": "Ferrari's Forgotten V12 Family Car Costs Less Than A Brand-New Mercedes S-Class CarBuzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9PNVNRSU45VjdUYmJKbkFMMExfUU5vTlFDZW8xMW1HWHg5aktJNGh4eVQ4WHItNGxlaUhpZEtyOTByOVctUnhzQS1vMW1SN0lQZG9pd1l4ZjRxY1VmMG93RXltWGwzOG5qakxUZk02eDdyRW80dWxlWUozTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T01:20:12.891Z",
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
    "id": "pauta-live-supercarros-mwmv58c1-69eu",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI - CBT News",
    "suggestedHook": "Hipercarros: SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI",
    "summary": "SUPERCARS, SCANDALS & OFF-ROAD WARS! BUGATTI, GM & HYUNDAI CBT News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5yWnVMY3N1d0FEWlM2ZGw5by0waEd5TXp3aDdFN3JJWm93ajJoc1NKVmhybzAxSU9CdnB5dVlCS2wya0dZWE45RERRdHRQcWxLTVNvNUFfOEV1YVpRS0hLT2Z3S0s1TldY?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T01:20:12.913Z",
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
    "id": "pauta-live-relogios-mwmv58ba-niqe",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "suggestedHook": "Alta Relojoaria: Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "summary": "The original TAG Heuer Aquaracer Solargraph x Time+Tide Sundowner, launched in 2024, was an interesting take on the Aquaracer Professional 200. With its sandblasted titanium case, warm rose-gold accents and khaki textile strap, it captured the spirit of the Australian outback. Powered by a solar quartz movement, this",
    "sourceUrl": "https://monochrome-watches.com/time-and-tide-x-tag-heuer-aquaracer-professional-300-sundowner-ii-titanium-dive-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-19T01:20:12.886Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/TimeTide-TAG-Heuer-Aquaracer-Professional-300-Sundowner-II-Titanium-Dive-Watch-review-4-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwmg53hq-6wt9",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "This Shelby Cobra Was Developed by Racing Legend Ken Miles. Now It Could Fetch $25 Million at Auction.",
    "suggestedHook": "This Shelby Cobra Was Developed by Racing Legend Ken Miles. Now It Could Fetch $25 Million at Auction.",
    "summary": "The one-off 1964 Shelby 427 Prototype Factory Team Cobra will be offered through Mecum Auctions on January 16.",
    "sourceUrl": "https://robbreport.com/motors/cars/1964-shelby-427-cobra-prototype-mecum-auctions-1238846946/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T18:20:12.398Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/1964-Shelby-427-Prototype-Factory-Team-Cobra-opener.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwmg53na-u7up",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection - The Supercar Blog",
    "suggestedHook": "Hipercarros: 33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection",
    "summary": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQRkRoN0I4Mk5uUV9HOXktMmJjS2xMUnlEX2pFc3daMGtwMlhKSU1QbzFLUjFSLWsyMFVDTFJLamlQbFZEejdoVVhtLWJIbnRkcjdEd1dhQjk5NFZiaXlHQzR4cVdwMm1iS0Rib0xoYnhTUDdqYnFWN2ZIZzNIT2Y2Z2twS204Ml9CbWlUYkt6cGZCeFZoMHBQZm5VeWVBdy00SEIyT0FjLUw5RlEw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T18:20:12.599Z",
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
    "id": "pauta-live-arquitetura-mwmg53zt-c0p9",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags - Hypebeast",
    "suggestedHook": "Patrimônio & Leilões: Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags",
    "summary": "Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags Hypebeast",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNQkZkcDNiUGV5ZDVuUEUycExVYXFqdEFNSncxcWZwVUxWdC0wWTl4cGFuX2tnNjRlM1RZN1dTTnJNdG9vdXdRVE9lRk9lLWw5WlVfd3VFdTVhNzVLVGVoUHFRSmhtbG5qN21XTV81LUVrdzJoWmhfM2JrdnQ3S0xjbXY2NElZeW9MclotbTFBVEtOaVpfcmdLc3NuVTB2aW01NXl4UGg0c2laR3RGaEpoMnV3c0tVdk8xN3hFQ2dYbXJKVV9LLTJ2aW1PZEQ4eDhuaWk0TGQ4TzV5dTg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T18:20:13.049Z",
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
