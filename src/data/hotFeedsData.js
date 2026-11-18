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
    "id": "pauta-live-destinos-mwm14ykv-lbg5",
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
    "createdAt": "2026-11-18T11:20:11.791Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwm14yga-oz0j",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari Reports €13.2 Million Share Buyback Purchases Through Nov. 13 - The Globe and Mail",
    "suggestedHook": "Hipercarros: Ferrari Reports €13.2 Million Share Buyback Purchases Through Nov. 13",
    "summary": "Ferrari Reports €13.2 Million Share Buyback Purchases Through Nov. 13 The Globe and Mail",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOZEgwOXhOYjFJeDhodkp4SlM4Njg1ZjdLdUZGdjhha2twbmI1dU1UTjNpaERYSlZ4dVdLYTRRZ0VFQ2E1N2p4THphMzRnblFlZkN2Vzc2Vl9rY21MUG41djRvV1pnX3BhZGxrMEVGTTRLMGdTQ24xc08tdUhfd09YT1k5M2Y0eVpkNUI5cmxoWGJwcGMzajE3QktaUTk0MWVFeGw0MzVGU2VudHRGNXVNLVZHcHlzcHpMdzFwbi0xRVB1b08wUVBub3pMTEtlNmlFVHZJSkFvWjNhdEY5MUxxdzJFcWxyZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-18T11:20:11.626Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
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
    "id": "pauta-live-arquitetura-mwm14yh8-a14l",
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
    "createdAt": "2026-11-18T11:20:11.660Z",
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
    "id": "pauta-live-supercarros-mwm14ybm-9eji",
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
    "createdAt": "2026-11-18T11:20:11.458Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
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
    "id": "pauta-live-relogios-mwm14yb1-rai2",
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
    "createdAt": "2026-11-18T11:20:11.437Z",
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
    "id": "pauta-live-relogios-mwm14ynf-t2hh",
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
    "createdAt": "2026-11-18T11:20:11.883Z",
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
    "id": "pauta-live-arquitetura-mwm14ynz-4d4d",
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
    "createdAt": "2026-11-18T11:20:11.903Z",
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
    "id": "pauta-live-supercarros-mwlfvvbi-ay8d",
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
    "createdAt": "2026-11-18T01:25:15.726Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
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
