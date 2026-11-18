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
    "id": "pauta-live-destinos-mwmg53qj-b2mc",
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
    "createdAt": "2026-11-18T18:20:12.715Z",
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
    "id": "pauta-live-destinos-mwmg53v8-ph9z",
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
    "createdAt": "2026-11-18T18:20:12.884Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783344422200-a5493824bcb9?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwmg53wj-kfyr",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Family on Bayesian superyacht had to 'scramble to safety on their own' with little help from the crew in disaster that killed billionaire Mike Lynch, court told - Daily Mail",
    "suggestedHook": "Family on Bayesian Superiate had to 'scramble to safety on their own' with little help from the crew in disaster that killed billionaire Mike Lynch, court told",
    "summary": "Family on Bayesian superyacht had to 'scramble to safety on their own' with little help from the crew in disaster that killed billionaire Mike Lynch, court told Daily Mail",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxQemhLYXhZSWszZDF0bFFGbllKR3NXd20xX0k5SDJXV29BUTIxb3ZSbVc4WldydC1Qd2tfaEZzOEFsc051aTVLbjNpV3ZrcjcybXUzVDAxSTYzRFFHaXBBOVQwYk1hcnpZZ2dKd2Jna0VoVFdKLVlxZFNHWFpYRFEzYm5XY2hDNDEtUjJSNE1JX0U3c1d1YTB1d2tXZjhrYnE2ZE01Z0pRa3VkVUx5NnhEYUZPeF9MNFJWeURCdWxmalRUd1BpUloxZkE0MWlic193c2hNeEdCMlBPNWowZnBhclV2N3R4STMxVXFNTllfT25VRXE20gH6AUFVX3lxTE9ZWEttN0RxVE5wdmVnLVQ3MFBoSmhVUmpJaWt4RDNXNldSSlFHZXBKZ1daM0dBNFhrQm5LaDU4Q3pySVRxSXZKR2lXV1B6VjNFLTZiZ2E2d09CekJvY0lTeU8tTm9WQ29iOHA4ckVBNkRORlpQLVJydzgtVElMTnNXX3owR0hNVnA4dzVCWWFRWldjZ1VSUG9mLVVRN1ZValUyUHZ4VS15aUMtLW45TVlQeHFmb0gyMFlEMVdIOHdSZ196akxfQUJSNXM1RURTeDIzT0E5MUx3dTVRNXFRVHlUeVJ4RUtLQk5QSEh3ODZ3Rm1qWm92RWp6dWc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T18:20:12.931Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
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
    "id": "pauta-live-arquitetura-mwmg53re-t38i",
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
    "createdAt": "2026-11-18T18:20:12.746Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwmg53kh-n8zt",
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
    "createdAt": "2026-11-18T18:20:12.497Z",
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
    "id": "pauta-live-supercarros-mwmg53kv-ph8i",
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
    "createdAt": "2026-11-18T18:20:12.511Z",
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
    "id": "pauta-live-relogios-mwmg53ka-8th4",
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
    "createdAt": "2026-11-18T18:20:12.490Z",
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
    "id": "pauta-live-relogios-mwmg53yz-lb4t",
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
    "createdAt": "2026-11-18T18:20:13.019Z",
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
    "id": "pauta-live-relogios-mwmg540f-bxhs",
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
    "createdAt": "2026-11-18T18:20:13.071Z",
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
  },
  {
    "id": "pauta-live-destinos-mwm14yhj-0alx",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' - IGN",
    "suggestedHook": "Slideshow: Photos From Gabe Newell's $500 Million Superiate 'Leviathan'",
    "summary": "Slideshow: Photos From Gabe Newell's $500 Million Superyacht 'Leviathan' IGN",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPdGJ6ZEdyY2ZxVVVLb0ZXQk9TZ0RJSjZvZjY3UVRaWXZyZkowWGdyU2t0LWtCNEtoQ25lZFY4RlN5VnB0RU02c0hLemFjdzNaUTJqWjdFYk5PREl6eDd1UGV5M0VkV2RYSWp2NDlXYktqVERZTnhXUjF0RjhUNmJVN2hDSkZ2dXo3ckhrX21CUjYwWTBJSU5uUGMyZk9fVjRBZ1E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T11:20:11.671Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwm14ylg-3og2",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "30m Sanlorenzo motor yacht D Mare up for auction - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: 30m Sanlorenzo motor yacht D Mare up for auction",
    "summary": "30m Sanlorenzo motor yacht D Mare up for auction SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPeS1BMGRmTndCWDh2bGs3XzAtTV85U09UMTJLWjlQd3dTcDU3TlFTWFd3MnV2LVN6TERvX0lnRFRtRmxMZWFpX3R4RE5MUkFLeHRvSU95aHZfcHFOcjZCUEFVUVJFRkxHTk05bm1ScTUtV2I0dGhIMHZMSEpENUxQdE0td3VmMFRS?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T11:20:11.812Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwm14yby-je0p",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "NOVITEC Gives the Ferrari 12Cilindri an Elegant Carbon Fiber N-Largo Widebody Kit - Hypebeast",
    "suggestedHook": "Hipercarros: NOVITEC Gives the Ferrari 12Cilindri an Elegant Carbon Fiber N-Largo Widebody Kit",
    "summary": "NOVITEC Gives the Ferrari 12Cilindri an Elegant Carbon Fiber N-Largo Widebody Kit Hypebeast",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5hTm5GNFUyNURSbnV6MXRneE1JOGo4NFgwMWFnZ0dwSzRBem5tMFdic01aRE0yS1dBSWY1SDJvUF9jcEo2UGI1NWZ6Z2RuMXdRaXBhcHkzYUZncFYwZ0VrVWFtaGF1QnVfT2Vvd1VsNGdCVV9IQzkzcW9B?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T11:20:11.470Z",
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
    "id": "pauta-live-relogios-mwm14yb4-nnrh",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Introducing – Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "suggestedHook": "Apresentação: Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "summary": "The Japanese watch brand Kurono Tokyo was founded in 2019 by independent master watchmaker and product designer Hajime Asaoka. Acclaimed for his high-end, handmade pieces, Asaoka wanted to bring his sophisticated and distinctive design language to a wider audience at more accessible prices. With a strong focus on",
    "sourceUrl": "https://monochrome-watches.com/kurono-tokyo-structure-chronograph-s1-sports-chronograph-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T11:20:11.440Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Kurono-Tokyo-Structure-Chronograph-S1-40mm-Sports-Chronograph-Automatic-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwm14yoq-7pga",
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
    "createdAt": "2026-11-18T11:20:11.930Z",
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
    "id": "pauta-live-destinos-mwlfvvfu-11vx",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "219-Foot-Long Benetti Superyacht Doubles Down On Style And Sustainability - Forbes España",
    "suggestedHook": "Náutica de Elite: 219-Foot-Long Benetti Superiate Doubles Down On Style And Sustainability - Forbes España",
    "summary": "219-Foot-Long Benetti Superyacht Doubles Down On Style And Sustainability Forbes España",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNc3R1ZzU4VnA3cTMtc3g1bmRSYnlkUWJjZzd0Tld2SVF6OUtVU0tWWGpNakdLVmU5OGM0aXROYkJWRnJKZ25OMGl2WU1OeE5QejVVc0sxalNWc0RBNDAzVzJ0aW5qTDAtbE1uMUY2cndvaU04MkFRbWxhaVl4N1R0dUFWUlRGa3M0V05YNi1VVWNpU1BLdUJjb1ZfcS1Ha1pwUlU3aEdEZV83WTc2OEIxMVVGa3BNNloteWtJ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T01:25:15.882Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwlfvviu-wk20",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Strong early interest as The Superyacht Cup Palma Richard Mille opens entries for 2027 - Sail-World.com",
    "suggestedHook": "Strong early interest as The Superiate Cup Palma Richard Mille opens entries for 2027 - Sail",
    "summary": "Strong early interest as The Superyacht Cup Palma Richard Mille opens entries for 2027 Sail-World.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNa2tkUjZIMU50d1ZFVmp2R0NCb1RHREMzX05GdnJIVGZuWXBjYmJrUEZXUDM5TWJjZ1RHb1hCUXhmYjA5V0hLSjhFbUJ0Sl9JeS1hZXdGOVp5QVQ0OWQxc21qYi0tajc3OFVsdnBVVWhBS0FxMURpWUFQNGd6UHpodnJDRWl6SXlTVTNTR2F0VkNtMEk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T01:25:15.990Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwl1261l-l4c8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari - CarBuzz",
    "suggestedHook": "Hipercarros: Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari",
    "summary": "Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari CarBuzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB3OHBQeElYSFRSTkUxU1o5SGFnRjFId1JnX1ozbkQ1ZS04M2pPSS05aXp1ZmJDZ0JSX0JtVWVQRDlzQTFpcVdNY096LXNqeWRETk9DRHl2MUdlZDRfbmctS3FHSnpxQlJFaVRZWGRZOA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:15.321Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
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
