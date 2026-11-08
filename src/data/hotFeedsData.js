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
    "id": "pauta-live-destinos-mw863dsh-gzcb",
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
    "createdAt": "2026-11-08T18:30:09.809Z",
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
    "id": "pauta-live-supercarros-mw863dht-4bsn",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Bugatti Who? This Chinese Car Just Blew Away the Top Speed Record - Yahoo",
    "suggestedHook": "Hipercarros: Bugatti Who? This Chinese Car Just Blew Away the Top Speed Record",
    "summary": "Bugatti Who? This Chinese Car Just Blew Away the Top Speed Record Yahoo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNWTc4REF1cU1rZWxoUVkyRG5neG1hZnNwQml0NjdnSG96cW43RWxLd1VydjNHbXg4RFBpT3VSZ0NJTnl5NlFXeGFEUlVqcnJCeG1wZlo3WEVkQ2VIOC1ObjAtMF9iT2dPSkVkUEQwYnlTenFYNVU0V29SSUJOdHdmcjZQVXI0OVU?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:09.425Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw863dq2-6di4",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Bugatti CEO Chases His Stolen Multi-Million Chiron Across Borders in a Porsche 911 - Yahoo Autos",
    "suggestedHook": "Hipercarros: Bugatti CEO Chases His Stolen Multi-Million Chiron Across Borders in a Porsche 911",
    "summary": "Bugatti CEO Chases His Stolen Multi-Million Chiron Across Borders in a Porsche 911 Yahoo Autos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOcUJoUXYzMXJQSDdjcUgxX09SUXBHdExLM24wVjF2T0tJNEhKLUxzaVBRdEt0UGZOaUF0UjYwTWlFa3lnbE10UjJrYUsxbHpEZzFVSGVrMldEVFA0SlluVTctTlRwTkphQUlMc0JOaGFQZ05NWnQtYmdMRXYyUEFzYXhPb3lKODVZTERSY29TeUtfMmo0QlRPbTB1ZlJHZEE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:09.722Z",
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
    "id": "pauta-live-supercarros-mw863dep-7zhj",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Aston Martin Cuts Losses, But Ferrari Ambition Looks Illusory - Forbes",
    "suggestedHook": "Hipercarros: Aston Martin Cuts Losses, But Ferrari Ambition Looks Illusory",
    "summary": "Aston Martin Cuts Losses, But Ferrari Ambition Looks Illusory Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQRFJhdzdoN3lpejFBX0VSZU9JSUk1ajY4d1BRVlgwNFBvU0ZLRUoxT1NlQ1hhZHRHTVluZG5Hd20wcUtyV3g5RmRkZDJINE03OFV2NU0wSElDUEZ3Y1lKWTRUZ3RJLU5sNURuWU5YeUJLWWpyRDl2SGJmZDh4LUVxX2EyWU1Ca1BrSGM0cmh1eUZOdWdPU3VEWDA0VkZpX3VURDNqdk1qdnFydXR5cjVjVFR3?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:09.313Z",
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
    "id": "pauta-live-relogios-mw863dei-r327",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The Breguet Classique Souscription, now in Platinum",
    "suggestedHook": "Alta Relojoaria: First Look – The Breguet Classique Souscription, now in Platinum",
    "summary": "As most of you might remember, Breguet celebrated its 250th anniversary last year, and did so by releasing rather spectacular watches, from the ultra-elegant 7235, to the compact 38mm Type XX or the Experimentale 1, the range-topping model with its 10Hz high-frequency tourbillon and its constant force magnetic",
    "sourceUrl": "https://monochrome-watches.com/breguet-classique-souscription-platinum-2026pt-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:09.306Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Breguet-Classique-Souscription-Platinum-2026PT-review-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw863d76-gcas",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "I Bought My First Rolex Aboard a Cruise Ship—Without a Waitlist",
    "suggestedHook": "Alta Relojoaria: I Bought My First Rolex Aboard a Cruise Ship—Without a Waitlist",
    "summary": "One watch novice discovered an unlikely shortcut to buying a Rolex at retail: Book a luxury cruise.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/first-rolex-watch-no-waitlist-explora-iii-1238779767/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:09.042Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/RR_ROLEX5.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw863dq9-oqez",
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
    "createdAt": "2026-11-08T18:30:09.729Z",
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
    "id": "pauta-live-relogios-mw863dbk-g0e5",
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
    "createdAt": "2026-11-08T18:30:09.200Z",
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
    "id": "pauta-live-arquitetura-mw863d8z-4dbi",
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
    "createdAt": "2026-11-08T18:30:09.107Z",
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
  },
  {
    "id": "pauta-live-arquitetura-mw863e0i-1zl2",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Gold Coast mansion listed for $47.5m in bid to smash Queensland house record - Real Estate",
    "suggestedHook": "Patrimônio & Leilões: Gold Coast Mansão listed for $47.5m in bid to smash Queensland house record",
    "summary": "Gold Coast mansion listed for $47.5m in bid to smash Queensland house record Real Estate",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNdUl6WDExeFh2NkRzSGYzd0NlaFZLal9lSjJuTnBQY19RVlNUbDFZX2xNTHljUFY4N2tpQ2lLSmdaV3p1Z3dmRkxwYUJDSGhqZmhITVdHejV6Y0Y3MlRjSkJIRjJmQklGa1V2UXRjLW8zTnIwRmhpTFVZeVBndnZ4UlVndUpHUFVEbTFPcFo0X2liWVNWdk10ODZZb2tyTTc1dDFXd0RWVWZWQmtUWTd5TV9VVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:10.098Z",
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
    "id": "pauta-live-arquitetura-mw863e0o-poeg",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Jewellery at auction: luxury that endures over time - Daily Nautica",
    "suggestedHook": "Jewellery at auction: luxury that endures over time",
    "summary": "Jewellery at auction: luxury that endures over time Daily Nautica",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxPSWZUam1CNkszQk9jM1l0X0VGNWhtOWI0el9iUTFxTnF1SUE4UktNYzcweGVVRWc5Tm5uVVlfSTZEb1lJdkFfX1pfYm9EUEVWdEJlUVlCWFJhYy1RbWJ5NHZqay1qdVFOOUlGN3JTWWxReVQ0ZVJBcWNSODdETldCYk96SFNFVUFyaGlhMmVpZ3psVVlMMG5UYjE2OHJ5dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T18:30:10.104Z",
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
