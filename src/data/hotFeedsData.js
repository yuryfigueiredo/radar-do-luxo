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
    "id": "pauta-live-supercarros-mwi668l9-r04h",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Real-life GTA 6 Grotti Cheetah (Ferrari Testarossa) replica on sale for £1M - The Supercar Blog",
    "suggestedHook": "Hipercarros: Real-life GTA 6 Grotti Cheetah (Ferrari Testarossa) replica on sale for £1M",
    "summary": "Real-life GTA 6 Grotti Cheetah (Ferrari Testarossa) replica on sale for £1M The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNUExSMjJVZE9wZnZ2NHoxa0ZCbjV6X3JaRUVuYTNMUFN2Y2V5MXZBNG9oQmttMndBWHdfZWlOYjhJN2l0bUp4M1hXZFQyVThwWkNKWVN5VGRyRjQ5cjNDalByS01zQlVmTHF0MFdERTFhUE1lVmdoa2ktX0psRklMbC1uaGFQa1pScDFyRmNNQ2Y3Sm9Tck1TN01zTFZRMlppNE5HSHYwUzU?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-15T18:30:04.797Z",
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
    "id": "pauta-live-destinos-mwi668zl-bqch",
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
    "createdAt": "2026-11-15T18:30:05.313Z",
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
    "id": "pauta-live-destinos-mwi668zw-csl3",
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
    "createdAt": "2026-11-15T18:30:05.324Z",
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
    "id": "pauta-live-arquitetura-mwi6690b-kurx",
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
    "createdAt": "2026-11-15T18:30:05.339Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwi668ij-fofu",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Bugatti's new US CEO talks manuals, electric hypercars and the business of tariffs - ABC News - Breaking News, Latest News and Videos",
    "suggestedHook": "Bugatti's new US CEO talks manuals, electric hypercars and the business of tariffs - ABC News - Breaking News, Latest News and Videos",
    "summary": "Bugatti's new US CEO talks manuals, electric hypercars and the business of tariffs ABC News - Breaking News, Latest News and Videos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPLU9SbDUwcnpQUVo5UWY2YVZ4MUZRQmtwOTN0OGl2RGc2ZHdMSUJZamQ0SnVXTGF5N25MU3dJVnFsNWtZNXRjdzJzY1lfTEZ6cm5EeFdMUDV2NENlckZid3BRaHJJcWFyWHk0N2hOcjM5Y0d3NDZwc0Znemg5aUVHS3dobWJVUElRc1Y1QXZSc0E3dGx5NnY2TTd2dmdzYmZVLUHSAacBQVVfeXFMTUpkclluQkdXS2JhUE1wSjNFQklwYW5kZmR2RWhib1lQaEp0U0ptUHdXSFUwNl9oVXFfZkJEeDJ3aDE2V2dVMVJwMElCWnFQdlo2S0Jma2VNRmg1QmNKUnVQOHRTSHI0aDNIeklaWlltTUNNeTlWNkJyVGdKY2hncGhTbWNORU5qUDZsVVJfMjRSSGZjVHV0b2RzMjduYlRGTGxtaW9iR0U?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-15T18:30:04.699Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwi668mc-lr1e",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "GWM’s Chairman Tests His Hybrid V8 Supercar Against a Ferrari, Then Admits It Loses - Character Media",
    "suggestedHook": "Hipercarros: GWM’s Chairman Tests His Hybrid V8 Supercar Against a Ferrari, Then Admits It Loses",
    "summary": "GWM’s Chairman Tests His Hybrid V8 Supercar Against a Ferrari, Then Admits It Loses Character Media",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPNHhnV0hvdHRnbDcyQTFwcjByU1d3UkNsc2ZPZGFINHFKcEI5Z1VXNWNGcF9uWkRsaEtGNG94ODUyZDAyZEdiZ0dYWFhZdEZTQnhhLXM5Yjh4ZUVMRm5nVk4zdjBPUFA4UXNCbWtHVFVtR2hPT0VuMHlBdGJfWnBrX3ZJeEJMR1RqQjhXOWV4UHVXTlB4dVNqT1hFdDRfanFYc1RZLXp6VlBDQmo2T3c?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-15T18:30:04.836Z",
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
    "id": "pauta-live-relogios-mwi668aa-uapc",
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
    "createdAt": "2026-11-15T18:30:04.402Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Christies_MagJewels_Geneva.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwi669ag-f2h0",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Sotheby’s Geneva Auction Makes History With Record-Breaking Luxury Watch Sales - Outlook Luxe",
    "suggestedHook": "Alta Relojoaria: Sotheby’s Geneva Auction Makes History With Record-Breaking Luxury Watch Sales",
    "summary": "Sotheby’s Geneva Auction Makes History With Record-Breaking Luxury Watch Sales Outlook Luxe",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPOGN2dWRWeklkVFhoYVJBVXpEbVFzN2VpOUhxc3FmWWl3QmU5dUdrYVBOZ3BSZGxrYWNFQmFtMklWUHZTREZTU1JCRHJOYXJOZHU3ZW1SVWZrZGJZbVl4QXJZd3FSOFN6S3lWdHhwMkh4UUd1eFBjTEgtNWdSRjl6X1JHeXBwQVJDTEN1eTloVlJIMDROaFVSWm9DZmM5MnNjQVNVXzFIYXdRRjlzXy1JMTJBWGl6VzhzcnZSZ1ppYzhpMVVrQ09jWkpMOXRsS1FhTERjdEh6TTNWTWfSAdsBQVVfeXFMTzhjdnVkVnpJZFRYaGFSQVV6RG1RczdlaTlIcXNxZllpd0JlOXVHa2FQTmdwUmRsa2FjRUJhbTJJVlB2U0RGU1NSQkRyTmFyTmR1N2VtUlVma2RiWW1ZeEFyWXdxUjhTekt5VnR4cDJIeFFHdXhQY0xILTVnUkY5el9SR3lwcEFSQ0xDdXk5aFZSSDA0TmhVUlpvQ2ZjOTJzY0FTVV8xSGF3UUY5c18tSTEyQVhpelc4c3J2UmdaaWM4aTFVa0NPY1pKTDl0bEtRYUxEY3RIek0zVk1n?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-15T18:30:05.704Z",
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
    "id": "pauta-live-arquitetura-mwi669bd-76z8",
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
    "createdAt": "2026-11-15T18:30:05.737Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mwi668ge-q8bn",
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
    "createdAt": "2026-11-15T18:30:04.622Z",
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
    "id": "pauta-live-arquitetura-mwi66880-30or",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "High Jewelry Is Warming Up With ’70s-Style Designs and Earthy Tones",
    "suggestedHook": "Patrimônio & Leilões: High Jewelry Is Warming Up With ’70s",
    "summary": "Sultry citrines, rare mandarin garnets, yellow and brown diamonds, and an abundance of gold raise temperatures this season.",
    "sourceUrl": "https://robbreport.com/style/jewelry/best-new-jewels-paris-couture-1238779775/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-15T18:30:04.320Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/RR_PC_Jewelry_1.jpg",
    "imageIsFallback": false,
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
