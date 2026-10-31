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
    "id": "pauta-live-supercarros-mvwxlm90-q7r8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Exclusive! Ferrari 296 Challenge Stradale debut date & price info - The Supercar Blog",
    "suggestedHook": "Hipercarros: Exclusive! Ferrari 296 Challenge Stradale debut date & price info",
    "summary": "Exclusive! Ferrari 296 Challenge Stradale debut date & price info The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQall3Q1IwbFZsbFNhQWcyblJGYjFiSkdXMUtHRHQzaUQ3MENJbUV6OVllS2FkU2ljQzZHUjJNa1ZSN0Y2clJscy1INjFIS2NJYUFkVmR1QXBMQlhqOEhtSzNwdkZoeC1rZkFrbzlKenhIMDRKYXF2SWhCS3IzMWZuMHE5Q1pEZGxPLW1FZmxNZ0diQkc2TTk5amFfSUZ6Rlln?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.100Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mvwxlm94-knxc",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "AF Corse unveils its Hypercar: the Ferrari 499P for the Asian Le Mans Series - SPEEDWEEK.com",
    "suggestedHook": "AF Corse unveils its Hypercar: the Ferrari 499P for the Asian Le Mans Series",
    "summary": "AF Corse unveils its Hypercar: the Ferrari 499P for the Asian Le Mans Series SPEEDWEEK.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPQVpCdGpSUUc1UEFEQmFJdnVGeHFXVGRIc2JDVW5rUEw2R0Q4UGVLY215aG5iOGcxTWJISXMzaDI1bmxtR3RQWnVPTEgwR2QyTWU1aEtpX01vS3dKRHVqTHNldHhDbXBieE16ZE1QTHFWZlBsQzNVcFhIdzJiQ1BfUTBtTzkta1diVDdiTC1EZ21wN1E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.104Z",
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
    "id": "pauta-live-arquitetura-mvwxlmc1-3ur6",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Russian crown jewel from Romanov dynasty could fetch £1.5m at auction - Ilford Recorder",
    "suggestedHook": "Patrimônio & Leilões: Russian crown jewel from Romanov dynasty could fetch £1.5m at auction",
    "summary": "Russian crown jewel from Romanov dynasty could fetch £1.5m at auction Ilford Recorder",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQb2EwTWFXR3JONjRjOWlHbFIyV3E2ZWVHSndYLVlRZkV2THFmU1hMeU9iUUdja2VrajBBN29aV3o1TVFfYTVYSF9JQ3UwVXBRYi1meDVYUjFmYXQ3T3dRYWh6WXNFajNobTJUU2tKZTU0RmdmcmV0cktDUWdEeVNRcms2V2t5NmRPUXlvTWI2cDJWRlB3VkNydmdDZVNBWjRDLXp3RVBRNDVfdHoxVWQ4bnJ1ZHI?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.209Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mvwxlma9-0uqk",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Injured deck officer's $35,000 pay claim strands a $39 million superyacht in Italy - The Cool Down",
    "suggestedHook": "Náutica de Elite: Injured deck officer's $35,000 pay claim strands a $39 million Superiate in Italy",
    "summary": "Injured deck officer's $35,000 pay claim strands a $39 million superyacht in Italy The Cool Down",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOVmpVcWF2ckY4eGZSQmFQa2VCMDM3bWNVMTVpUmFCaEJXUlFHOVMtWWZ2VjM3THRrTUE2WWZ5TE1qZFVfYzhIXzdSbWdwTTVQYkd6dU1pX2Q2ZGpZVEhFRHIycGVCeS1WUl9PTllNTzRFTDdhYjRaNHBnLWNNZE5vWHN1cTgxNlVvYnBVMnVR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.145Z",
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
    "id": "pauta-live-supercarros-mvwxlm8w-g0mq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "CGI Hypercar ICE Mode: Bugatti Mamba, Pagani Hoonigani, Genesis Revenant Are Unapologetic to EVs - autoevolution",
    "suggestedHook": "CGI Hypercar ICE Mode: Bugatti Mamba, Pagani Hoonigani, Genesis Revenant Are Unapologetic to EVs",
    "summary": "CGI Hypercar ICE Mode: Bugatti Mamba, Pagani Hoonigani, Genesis Revenant Are Unapologetic to EVs autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPVFhleDByUnNjYy0weElWNHVaaGRMcUFmUFpVS2xSUVhmekxBM3lxY19wVnJTX0ozZkFMX1NBLV9McDhwRFh5dkxsbDU3QlUtWFBidm8tak5NTnUwM3Z4bUpRS0tveXhjVWJSb1RVQTVSZU5kemZ3SEtOOEIzbTV6UGlTZ01uVlRySkFrOEZsZXZqNjFWUENGYWczUDdTT2gxOU1CNFhHY3pTVXcxQVdOMW1zbTM3Vk55a1lSMFgxMFQ5em0yREt0WnNqMmRBS3Z6dGZxcDh4QQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.096Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvwxlm87-11p3",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "First Look – Closer Than Ever to the Antiqua, the New Louis Erard x Vianney Halter Collab",
    "suggestedHook": "Alta Relojoaria: First Look – Closer Than Ever to the Antiqua, the New Louis Erard x Vianney Halter Collab",
    "summary": "Geneva Watch Days is always a treat, but 2026 held two collaboration surprises for the MONOCHROME team, both involving maverick French watchmaker Vianney Halter. Bulgari’s collaboration with Vianney Halter produced a bold Antiqua-inspired Octo Finissimo Dual Time. The second, revealed to us as a sneak preview by",
    "sourceUrl": "https://monochrome-watches.com/louis-erard-x-vianney-halter-futur-anterieur-antiqua-inspired-collab-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.071Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/louis-erard-x-vianney-halter-futur-anterieur-antiqua-inspired-collab-review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvwxlm89-oxrl",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Introducing – Citizen Brings Damascus Steel and Forged Carbon to a new Series 8 GMT",
    "suggestedHook": "Apresentação: Citizen Brings Damascus Steel and Forged Carbon to a new Series 8 GMT",
    "summary": "With its Series 8 collection of mechanical watches, Citizen has been delivering rather impressive models over the years, with the GMT collection being possibly the most appealing of them. Not only is it powered by a true GMT automatic movement (something rare in this price range), but Citizen has dared to bring",
    "sourceUrl": "https://monochrome-watches.com/citizen-series-8-gmt-damascus-steel-and-forged-carbon-nb6092-01e-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.073Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Citizen-Series-8-GMT-Damascus-Steel-and-Forged-Carbon-NB6092-01E-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvwxlmby-updp",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A jewel of the Romanovs: Historic 197.80-carat sapphire heads to auction - Qazinform",
    "suggestedHook": "A jewel of the Romanovs: Historic 197.80-carat sapphire heads to auction",
    "summary": "A jewel of the Romanovs: Historic 197.80-carat sapphire heads to auction Qazinform",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSU1tSjhLQ3g1MGVhUmNLSkpOUkVWbDhpcEpWX3lxU0xfbUlUTjU0UENqeDd3cGVKT3ZRNGRXSkpvelp3WkQ1dHdBWWx6MVZ5QVdWNVdxaG00OTJYYmh3ejNxLXBKYWRjQjBnTmlCajJOMnN5YVRXSHI3NW9PanVTUTlEMzJTck9SWDA0RjF3djFNTDFWeTV5ZktlUzljTHpRdkI5QmxzTdIBpwFBVV95cUxNSU1tSjhLQ3g1MGVhUmNLSkpOUkVWbDhpcEpWX3lxU0xfbUlUTjU0UENqeDd3cGVKT3ZRNGRXSkpvelp3WkQ1dHdBWWx6MVZ5QVdWNVdxaG00OTJYYmh3ejNxLXBKYWRjQjBnTmlCajJOMnN5YVRXSHI3NW9PanVTUTlEMzJTck9SWDA0RjF3djFNTDFWeTV5ZktlUzljTHpRdkI5QmxzTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.206Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvwxlm7y-1szc",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Photo Report: The Watches And Scenes Of Patek Philippe's 2026 Milan Watch Art Grand Exhibition",
    "suggestedHook": "Photo Report: The Watches And Scenes Of Patek Philippe's 2026 Milan Watch Art Grand Exhibition",
    "summary": "The exhibition is over, but for those who couldn't make it, here's what you missed.",
    "sourceUrl": "https://www.hodinkee.com/articles/patek-philippes-2026-milan-watch-art-grand-exhibition",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-31T21:46:56.063Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/7b19a468-3473-484b-8f09-bb9e0de40820/PatekMilanHero.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
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
