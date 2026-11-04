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
    "id": "pauta-live-supercarros-mw1x1plh-w46f",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 90,
    "rankingTier": "A",
    "originalTitle": "Ferrari's Q3 net revenue up 7% to €1.9 billion - AzerNews",
    "suggestedHook": "Hipercarros: Ferrari's Q3 net revenue up 7% to €1.9 billion",
    "summary": "Ferrari's Q3 net revenue up 7% to €1.9 billion AzerNews",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE02NC1rR2tZUEo4WFdDd2dTZktUeGluMGpvNkNUNzIxN1Vsekp4bWRZTU82VHZ5MW43V1lZSTNjSm4tRnM1RGZKM0ptek15QWI1VjItSw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.197Z",
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
    "id": "pauta-live-supercarros-mw1x1piy-vbty",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari Sets $18m Record in Las Vegas Auction - Arts & Collections",
    "suggestedHook": "Hipercarros: Ferrari Sets $18m Record in Las Vegas Auction - Arts & Collections",
    "summary": "Ferrari Sets $18m Record in Las Vegas Auction Arts & Collections",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOV0JRWks0c1JDN0lYX3QtT0luS2hJMHBoU05BM1hyOVBvOWRZSmRmWk9sUTNkY3V2dU1yWkM1WFJwdlREX0RfLWZkcGMyQW9TRGZ2UUN2OVNvRlZCMy11U2FZTjYzMm1BcHlUald2eFpoT1VfRDZEWEZ3NXJjLXRuY2pDc3JULUE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.106Z",
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
    "id": "pauta-live-destinos-mw1x1pv9-0ui7",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "TISG selects SRI's €220 million restructuring offer - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: TISG selects SRI's €220 million restructuring offer",
    "summary": "TISG selects SRI's €220 million restructuring offer SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxONFRUWkpXTWpHazIwQmZWVDI2aGtmajNfeS15dnUzcGNBaHdGelB5Wlg2dDN0STZZTmRvMkhVYjh3cjMxTS01OFFNM0JNWHBuWElEcVBCRWw3NnFELVBLa3R2M1JkeG9XSGEzLWF0TFVBVGlEN0JkTlVVc3VIOU03bGJzbEZpUWY5WUE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.549Z",
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
    "id": "pauta-live-arquitetura-mw1x1p7v-5p8s",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "suggestedHook": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "summary": "Four auction houses. Over 1225 watches. We dig for the gems, covering everything from high-priced indies to vintage deals.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-2026-geneva-fall-auctions-mega-preview-part-1-christies-and-antiquorum",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:17.707Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw1x1pp4-ni47",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "The Six Most Ambitious Superyachts Currently Under Construction - Forbes España",
    "suggestedHook": "Patrimônio & Leilões: The Six Most Ambitious Superyachts Currently Under Construction - Forbes España",
    "summary": "The Six Most Ambitious Superyachts Currently Under Construction Forbes España",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPcnUzXzBNYXJGalpNU2tvSzB4OXlqN3d2OXl3YWhLejJ0c3kyU1M5ZUM3WElSR19IcmZrV0RIVklDX3VrUXVpT1J2X183QTA2YkRvYld0Ym9senhxX3pPc0pxaDNOSm9TUHJyNk5BZ3U0ZGRWZktmVndBMEdYZVBIOEVqM1dKNy1FOVgxaG4tdE9vNmhudkFjNl9SQkx4ZVl5OHZpNkh1VTFoMWlKOFE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.328Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw1x1pm8-dma2",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "The biggest superyacht price drops of October 2026 - BOAT International",
    "suggestedHook": "Náutica de Elite: The biggest Superiate price drops of October 2026",
    "summary": "The biggest superyacht price drops of October 2026 BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNRG9FVkRWY1hRRjB2bkdCemRfbHZkbzNGNm5pNDhmc2x1UmRqS0VzRkhKbFFYdE5kc3BybUl1ZGhFSDBGVmRuT1ZkS1BhVW5qODFKYmQyMnRnd0JCOXNZa0lCcW54M1VWbHNQbTAxWnJSM2JMWER4NGw1YmVFbTdSY0tTVDBCRG41QlhRWDFVQ3JfeVZ4OW1xWEtvVDQxanpiWWJOalFRUWFIWjJpc2lPNXJlaTN0dXJiYThjeTlDVzJPZ29QV0VJcWdweGg4aVg2?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.224Z",
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
    "id": "pauta-live-destinos-mw1x1pr9-n3v5",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht - SuperYacht Times",
    "suggestedHook": "Náutica de Elite: INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht",
    "summary": "INACE Superyachts unveils 40m ISY 130 Aventura explorer yacht SuperYacht Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYjlUaS0wa1JlUjZOX0o5RHptdC00QXprR3JjLXVnZ0ZZWDUyOVdzdENPMWdBOWtCeHA1cHkzb3ZyRGhmV1hQNjNGZGxWcW1QUzdoMGJDQzBHZW9OXzUyN0hHcDZJcmVieUlVSjVRS1pqWEJ3SEYwM25rN0NlWWxuaUZZcGpxbUF2RE50YzZR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:18.405Z",
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
    "id": "pauta-live-arquitetura-mw1x1p50-ehv1",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "The Beverly Hills Home of a Late Real Estate Power Broker Lists for $23.5 Million",
    "suggestedHook": "Patrimônio & Leilões: The Beverly Hills Home of a Late Real Estate Power Broker Vai a Mercado por $23.5 Million",
    "summary": "The Hollywood Regency-inspired villa was owned by the architectural historian and his wife Lori for over two decades.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/jeff-hyland-house-beverly-hills-trousdale-estates-1238807220/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:17.604Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/JeffHylandHouse_BH_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw1x1p8e-hvcd",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Introducing – Audemars Piguet Adds Obsidian and Onyx Dials to the 38mm Code 11.59",
    "suggestedHook": "Apresentação: Audemars Piguet Adds Obsidian and Onyx Dials to the 38mm Code 11.59",
    "summary": "Audemars Piguet added a time-and-date 38mm Code 11.59 watch to the collection in 2023, a more compact, slimmer, and redesigned version of the original series launched in 2019. The first 38mm models came with stamped dials featuring a signature ripple pattern in light blue, “Bleu Nuit, Nuage 50”, green and black, in",
    "sourceUrl": "https://monochrome-watches.com/2026-audemars-piguet-code-11-59-selfwinding-38mm-obsidian-and-onyx-dials-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T09:30:17.726Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/2026-Audemars-Piguet-38-mm-Code-11.59-stone-dials-obsidian-and-onyx-1-600x237.jpg",
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
