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
    "id": "pauta-live-supercarros-mw9lj55g-rbtq",
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
    "createdAt": "2026-11-09T18:30:05.524Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mw9lj55k-fjwr",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Jeremy Clarkson’s Ferrari F355 that failed to sell in 2025 returns to auction - The Supercar Blog",
    "suggestedHook": "Hipercarros: Jeremy Clarkson’s Ferrari F355 that failed to sell in 2025 returns to auction",
    "summary": "Jeremy Clarkson’s Ferrari F355 that failed to sell in 2025 returns to auction The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOWkdnOFV1QXdDdDIyZHVzYndGZlByR1RqWnJmRzF1T2FoeWlPeUZsTDZNU1doQWh5aWNOZ25NNVRwWjU5b3hjNDJmamdtM0tNRG45d19UZ2lXQ1o5dk9PY1AweFRYalNHcUJpQ2RBSzF2UnA1bEhYbXFaM2FtdldRellYejY2cUdyNTFlNzFrcWY3MWUxQkFWeEgyRnJYS2VTX2VmRXV4ZWkxcWdZYWc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:05.528Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mw9lj5on-c0gy",
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
    "createdAt": "2026-11-09T18:30:06.215Z",
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
    "id": "pauta-live-supercarros-mw9lj5fw-313z",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari spent €675M buying 2.17 million shares since Jan. 5 - Stock Titan",
    "suggestedHook": "Hipercarros: Ferrari spent €675M buying 2.17 million shares since Jan. 5",
    "summary": "Ferrari spent €675M buying 2.17 million shares since Jan. 5 Stock Titan",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxOUGFDUGlsSDF2dmlYTENmaVBKTWxwX1VacUx1WmtXemVneWFIdmJwRzBMRkxnWHlWX3lPOG9vMGVIZ0xHNXJ1QjV6ckExSkhkY1l6RHpDTEg2RU1nYjMxZldjbWZYdjl5MFJBbm16S0EwbEpTZEI1Qk10TVF1SkZJWVlSbEc0NmlRRUx3dnZHY2RhVlptUFJXQ0RBbmczUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:05.900Z",
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
    "id": "pauta-live-relogios-mw9lj4u2-uvk9",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Phillips’s Latest Watch Auction Just Nabbed a Record $112.3 Million in Sales",
    "suggestedHook": "Alta Relojoaria: Phillips’s Latest Watch Auction Just Nabbed a Record $112.3 Million in Sales",
    "summary": "The Geneva Watch Auction: XXIV sale realized an unprecedented sum, with 24 world records set over two days.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/phillips-highest-grossing-watch-auction-in-history-1238829215/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:05.114Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/f-p-journe-chronometre-a-resonance-regence.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw9lj5j3-l1bk",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "The Ugliest Superyacht in the World Costs $30,000 a Day Even Though It Can't Sail - autoevolution",
    "suggestedHook": "Náutica de Elite: The Ugliest Superiate in the World Costs $30,000 a Day Even Though It Can't Sail",
    "summary": "The Ugliest Superyacht in the World Costs $30,000 a Day Even Though It Can't Sail autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQbDUtQkhvNjFsOW1jT0xqM3k2QzRyMkllZWN1R0hGOW5EVG9zSmZBaDhqTUtrc3BuMGZINVZ3Ym54NzFfbDRnVTZRUWZzVGhSbXlDby1XUWZsNkRCejNxOFhBX0o3LTlxVjV4VDUzQ0syYmQwYzNkcTFLYnNqWm1oTVliUWRMSlJEY1NKSkc3VkRwWms4MjV2aGJkbGZnQkc3c3hwVEYtcDdfZ25xUUpEN3NNN1RJSWJrZ3FsVmxQLXJCWFFl?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:06.015Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw9lj4xa-yhd8",
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
    "createdAt": "2026-11-09T18:30:05.230Z",
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
    "id": "pauta-live-relogios-mw9lj4zz-jlln",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – The New Klokers KLOK03, the Disc Watch Goes Automatic for the First Time",
    "suggestedHook": "Alta Relojoaria: First Look – The New Klokers KLOK03, the Disc Watch Goes Automatic for the First Time",
    "summary": "Come to think of it, there aren’t many watches that are read like a Klokers. The brand has replaced hands with stacked discs and a single line of reading. A slide-ruler-inspired take on time display that was accessibly priced (every Klokers made between 2015 and 2025 ran on quartz) and earned a loyal following, but […]",
    "sourceUrl": "https://monochrome-watches.com/2026-new-klokers-klok03-disc-watch-now-goes-automatic-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:05.327Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Klokers-KLOK03-First-Automatic-Collection-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw9lj5dk-2wp3",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "The Most Expensive Cars Ever Sold at Auction - Autoguide.com",
    "suggestedHook": "Patrimônio & Leilões: The Most Expensive Cars Ever Sold at Auction",
    "summary": "The Most Expensive Cars Ever Sold at Auction Autoguide.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNT1Y3SllzTDRPdmJwSE9NWlZBbXRjUWVVeVBrOFd0M0M0Rl9DR3I4Wm9aV05VSHV1b1E0aXNLTEY0Vml5Uk5PUGJSQ2hQYm4yeHJwRU5rUmhaX1lRQkxfSXFidk5TRVBNZjdkUk9fWHpkdEdIWkpZZ0dlNXpGYjR1ZnFCVjJmNEptRUxZVjFDN1FqOE5IMGZ2TjJuUDIwSDhUX3laY2l2czBfQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:05.816Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw9lj5s0-s08o",
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
    "createdAt": "2026-11-09T18:30:06.336Z",
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
    "id": "pauta-live-arquitetura-mw9lj5u5-eb0y",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Jewellery at auction: luxury that stands the test of time, between collecting, rarity and investment - Daily Nautica",
    "suggestedHook": "Jewellery at auction: luxury that stands the test of time, between collecting, rarity and investment",
    "summary": "Jewellery at auction: luxury that stands the test of time, between collecting, rarity and investment Daily Nautica",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxPSWZUam1CNkszQk9jM1l0X0VGNWhtOWI0el9iUTFxTnF1SUE4UktNYzcweGVVRWc5Tm5uVVlfSTZEb1lJdkFfX1pfYm9EUEVWdEJlUVlCWFJhYy1RbWJ5NHZqay1qdVFOOUlGN3JTWWxReVQ0ZVJBcWNSODdETldCYk96SFNFVUFyaGlhMmVpZ3psVVlMMG5UYjE2OHJ5dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-09T18:30:06.413Z",
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
