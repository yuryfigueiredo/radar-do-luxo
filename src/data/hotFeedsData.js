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
    "id": "pauta-live-destinos-mw7mt8u2-9em8",
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
    "createdAt": "2026-11-08T09:30:24.122Z",
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
    "id": "pauta-live-destinos-mw7mt8zf-ztja",
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
    "createdAt": "2026-11-08T09:30:24.315Z",
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
    "id": "pauta-live-supercarros-mw7mt8ot-l9pa",
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
    "createdAt": "2026-11-08T09:30:23.933Z",
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
    "id": "pauta-live-supercarros-mw7mt8ig-70sv",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Careless Ferrari F40 driver nearly gets T-boned, bus driver saves the day - The Supercar Blog",
    "suggestedHook": "Hipercarros: Careless Ferrari F40 driver nearly gets T-boned, bus driver saves the day",
    "summary": "Careless Ferrari F40 driver nearly gets T-boned, bus driver saves the day The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOUk9hWElsdUs0b3hBWlNyZlpTaGhaVVZNZzVIZlRXd3JFZ185dm1rMi0zTnNra2dmSHVhcU5nNGYydWNzbS1hMHNMa2dyWEN1bHRYNGFudHhVblJfZEw2YXdQUjBNejM1dm1SdWlyOEhCdmw0MG5HRTlEcE4tR3dXWS1nUGFUc0NXblk5WnNCYmhtMmpOeEtUSzBHeG92RWh1cTFCSjdqWDk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T09:30:23.704Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1660326040484-fc0cb33d0b23?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mw7mt8ol-ljry",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "BMW M5 Touring vs Ferrari FF, Family Wagon vs V12 Supercar - Yahoo",
    "suggestedHook": "Hipercarros: BMW M5 Touring vs Ferrari FF, Family Wagon vs V12 Supercar",
    "summary": "BMW M5 Touring vs Ferrari FF, Family Wagon vs V12 Supercar Yahoo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCRXNSWVF5aUhhdzlBNm9OOTgyVG9DVUpncnE5MFM5YVhyYWxGSG01MU9KYlhpcG8zMlZrR05sWWMwS2RxSC00U2N3bnpqcXJnSUV6RC1oMjN4X19sMkExSTdxeXUtSk51ZEdlYkg0dDFfamJBN21HaVBqOENsSVk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T09:30:23.925Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1577735138919-91b6848511c8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw7mt8fr-6of4",
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
    "createdAt": "2026-11-08T09:30:23.607Z",
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
    "id": "pauta-live-relogios-mw7mt8g0-4qsu",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The New Serica Travel Chronometer Golden Green Ref. 8315-3",
    "suggestedHook": "Alta Relojoaria: First Look – The New Serica Travel Chronometer Golden Green Ref. 8315",
    "summary": "Known for its seriously built and vintage-inspired collection of tool watches, French brand Serica is releasing a new edition of its sports GMT model, the Travel Chronometer. This is one of the few watches from the brand that we have never explored, as we’ve already looked at the 6190 Field collection, the highly",
    "sourceUrl": "https://monochrome-watches.com/the-new-serica-travel-chronometer-golden-green-ref-8315-3/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T09:30:23.616Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Serica-Travel-Chronometer-Golden-Green-8315-3-GMT-review-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw7mt86r-ka81",
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
    "createdAt": "2026-11-08T09:30:23.283Z",
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
    "id": "pauta-live-destinos-mw7mt8tu-xh0d",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Anguilla Courts the Superyacht Market in Monaco as Port Nimara Takes Shape - www.allatsea.net",
    "suggestedHook": "Náutica de Elite: Anguilla Courts the Superiate Market in Monaco as Port Nimara Takes Shape",
    "summary": "Anguilla Courts the Superyacht Market in Monaco as Port Nimara Takes Shape www.allatsea.net",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE10cWlndVYtYTNqMFhRVi1CaXd5Wll5REtBZURCbHpDcjlweU5QVnNwa1JzUnU0MG90cXRNcU5US1RQZ0xuekstQkdDc1gzOUotUTRCT3MyVmxqalptQVNzR0pOUlViMHZmWm9PWnYzRThqUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T09:30:24.114Z",
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
    "id": "pauta-live-arquitetura-mw7mt87k-6z5q",
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
    "createdAt": "2026-11-08T09:30:23.312Z",
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
    "id": "pauta-live-arquitetura-mw7mt8a0-zc85",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A Georgia O’Keeffe Painting Sat in a Closet for Nearly 40 Years. Now It’s Heading to Auction.",
    "suggestedHook": "A Georgia O’Keeffe Painting Sat in a Closet for Nearly 40 Years. Now It’s Heading to Auction.",
    "summary": "The painting titled Near Abiquiu, New Mexico I (1930) recently resurfaced after nearly 40 years out of the public eye.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/georgia-okeeffe-painting-christies-auction-1238820829/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-08T09:30:23.400Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/GOKeeffe_NearAbiquiu_NM2.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw7mt953-xl8y",
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
    "createdAt": "2026-11-08T09:30:24.519Z",
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
