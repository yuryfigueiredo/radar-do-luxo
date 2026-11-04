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
    "id": "pauta-live-relogios-mw2gcd5v-5mjm",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Introducing – Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "suggestedHook": "Apresentação: Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "summary": "Audemars Piguet is putting the minute repeater back in the spotlight with three new Supersonnerie creations. The two Royal Oak models offer contrasting materials and dial colours, while the Code 11.59 takes a more contemporary approach, revealing movement elements beneath a sapphire dial. All three are powered by the",
    "sourceUrl": "https://monochrome-watches.com/audemars-piguet-expands-its-supersonnerie-collection-with-three-new-royal-oak-and-code-11-59-models/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:28.003Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/2026-Audemars-Piguet-Code-11-59-and-Royal-Oak-Supersonnerie-models-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mw2gcdxs-k4vt",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "$200 million superyacht with a glass-bottom pool anchors 2,000 feet off Spain's coast - The Cool Down",
    "suggestedHook": "Náutica de Elite: $200 million Superiate with a glass-bottom pool anchors 2,000 feet off Spain's coast",
    "summary": "$200 million superyacht with a glass-bottom pool anchors 2,000 feet off Spain's coast The Cool Down",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNeVczRkVBV1hQS3JyS0p3dWR5NmNMa1JFTnhodW50NVZVOFZCajkxOGFodzVKQ24yUXV3SWNEV1RFVl8teWdnZ294amUybHIxV3JNME9YeDUydzBISTNjWTZQSXNYUmxwTmtxSzRUR25BMFVKeUVJS1daSWtGUkpydEpJeFE0bk11SFpj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:29.008Z",
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
    "id": "pauta-live-supercarros-mw2gcde8-c7c9",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Bugatti Celebrates 20 Years in America With 21 Hypercars at Wynn Las Vegas - Supercars.net",
    "suggestedHook": "Hipercarros: Bugatti Celebrates 20 Years in America With 21 Hypercars at Wynn Las Vegas",
    "summary": "Bugatti Celebrates 20 Years in America With 21 Hypercars at Wynn Las Vegas Supercars.net",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNck9wU3NuZy1DZUVCbVhMelA3MnRGWEdaVkJ1YXF5R09kM3BjNThWZ0t5YTJmYnZYcnMxR2FRY2didjFuRzdta2VDbTZjdzd0eXhCdERWVl91a05jT1FVQmJENFhGeURxVXUyTHZmXzRqLTZ5ZTVNcU5YeXFLcXJOUTJXak9qTk5TeVVnNnFVTEtndE93OVlBYjBWVjFBdUoxWjh4eUVoR2Ffdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:28.304Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw2gcd3a-0b5m",
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
    "createdAt": "2026-11-04T18:30:27.910Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mw2gcebq-k8t4",
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
    "createdAt": "2026-11-04T18:30:29.510Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mw2gcexm-n2a6",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "suggestedHook": "Patrimônio & Leilões: Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "summary": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 Christie's Press",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNUUZDd1dGV1Y1UVYwY1NvemNxYUhVTXZvMEJZdjRsU3o0bXptTUVpdnFFT20xU1R5dHE3M2RxOE84a2JmYmpoNW5QSXZRWlpfNmdXMkhodEhVWWNlMUVtaTducEVLLTJzYVV6U3Y5Tm41cGRhTVd0NW1SWWRCYm9nY3hHVkhPUDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:30.298Z",
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
    "id": "pauta-live-supercarros-mw2gcdps-1m5q",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Ferrari (RACE) Target Price Raised by Deutsche Bank Amid Strong Q3 Performance - GuruFocus",
    "suggestedHook": "Hipercarros: Ferrari (RACE) Target Price Raised by Deutsche Bank Amid Strong Q3 Performance",
    "summary": "Ferrari (RACE) Target Price Raised by Deutsche Bank Amid Strong Q3 Performance GuruFocus",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQR2ZRUWEwMVpOelR4UWNuVTk2bnVOdG0tUkpzQW9sQ3JOMl9kNlNIS0NraVMxV2w5b0VYVGJBVXdQcUlXZ29Nc0ZCWThoVU45VVZ2NFJVR05DQ3R3cEdBZGRYN2FXUkNaZGxCREkyU0d3YjBubHFhSE93eTh1Z1Fpdy1RMWlTekdONnRkc3lSUzhaU2Nrb0Y0QlVqeTV6eW01endZQ1dsM0NETjZLTGIzVy1yeURjUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:28.720Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mw2gce0k-0m7u",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth - Citywealth",
    "suggestedHook": "Beyond Monaco: The Red Sea’s Bid for the World’s Superiate Wealth",
    "summary": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth Citywealth",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNRlc2YUN0T2pQeXJLMlg2TzA5aXVqUnpOblpXVmVWc0txeXc4RTIzOVkzR0xoT3A2RF82Q1FqcjZwN1dxa3F0QW1vWWtSQ3FBd3RYMU9PWGRyZHJ6ek4zQnY3UjZyLWJBbnFqWDhBM0RNVlpFNDZQX2locU5ldDA3N1lWMzMzaGc3UjF1UUdGckhxZHJMak9uZGQwTk9aTy1h?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:29.108Z",
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
    "id": "pauta-live-supercarros-mw2gcd8s-fuha",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Rydquist And Ferrari Named On 2026 Silver Waves Media Top Support Staff List - University of San Francisco Athletics",
    "suggestedHook": "Hipercarros: Rydquist And Ferrari Named On 2026 Silver Waves Media Top Support Staff List",
    "summary": "Rydquist And Ferrari Named On 2026 Silver Waves Media Top Support Staff List University of San Francisco Athletics",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOZzhzT284eEgzMEhDcDJNY1oxSnF2SEJxd3R0b01Nc1hSbmhna0FtajF1bXNxSXZzWXVFQjRjQkNvNlB4c1VjaWVUdGZEZjZkUjBUMWo3U3pWZU9DM1JtdnIzZUlzMmVLM2hYakZ0MGRiZUJCb1RfMV9SaFJhTzJQZzdrUXNDQzZuVG5Yc2VWOFhxWU41MEU0emhXbzRKUTlkUkZNMDRCeFg1QkhxWDlRcGtsaEJPUnlyRzZFZWxobFZsa1VmN3c?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-04T18:30:28.108Z",
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
