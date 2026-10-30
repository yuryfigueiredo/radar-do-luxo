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
    "id": "pauta-live-supercarros-mvvjt8v5-vo9t",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "Koenigsegg's Latest $3.6 Million Hypercar Has Just Been Recalled - CarScoops",
    "suggestedHook": "Hipercarros: Koenigsegg's Latest $3.6 Million Hypercar Has Just Been Recalled",
    "summary": "Koenigsegg's Latest $3.6 Million Hypercar Has Just Been Recalled CarScoops</f",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE80WXAwX1NPSFc1WUF1TjFncGlLbFZOMWNTakFGa1hIS1UyZktiWnFxRXR6TVRBUFN6NndCV21yTFFfNEV2SFhTLVlIT1NQQWN1REtnbnJJaTYzdGFUVVlPU0tzN3dqTG00alE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.201Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mvvjt8v3-4u71",
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
    "summary": "Exclusive! Ferrari 296 Challeng",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQall3Q1IwbFZsbFNhQWcyblJGYjFiSkdXMUtHRHQzaUQ3MENJbUV6OVllS2FkU2ljQzZHUjJNa1ZSN0Y2clJscy1INjFIS2NJYUFkVmR1QXBMQlhqOEhtSzNwdkZoeC1rZkFrbzlKenhIMDRKYXF2SWhCS3IzMWZuMHE5Q1pEZGxPLW1FZmxNZ0diQkc2TTk5amFfSUZ6Rlln?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.199Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista homologada",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mvvjt8xj-8fif",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Billionaire’s $300m superyacht spotted in Cairns - The Cairns Post",
    "suggestedHook": "Náutica de Elite: Billionaire’s $300m Superiate spotted in Cairns",
    "summary": "Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNVW1BZUg3TVpabWtJS0xUVFZISkZNN1BwZjRrR2tUWlR5V1RNekdGTUpsblBOYnN4VjVEeGp1SWNDcFdYRS1hQUJrZk96VFZKVFhWVGVud0VQTFdiWFhmaXMxWWhPUjhWY2l2ckJPVk1OVVRCTzV0MzV6UC00RFIxODJkeDQxZnJEM19YNC1GeWswM2pHdDZuNXVqb1FZcFNJZUN6MDFqRTIwbnQxd1d4ZUI2bDk0aGxoQWozMHEtUkxoX0RLTFVrTGNSSE5fVlZqRUJuSWVPTzdjNDQwdDNzZnNVclFBMWVfUnZ2cDNzdU4?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.287Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mvvjt900-rly1",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Russian crown jewel from Romanov dynasty could fetch £1.5m at auction - AOL.co.uk",
    "suggestedHook": "Patrimônio & Leilões: Russian crown jewel from Romanov dynasty could fetch £1.5m at auction",
    "summary": "Russian crown jewel from Romanov dynasty could fetch £1.5m at a",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPa0NXMjNaUHN3NGlFLWZRczFoQlY1c3RkVUpwZ2x5SXpmOElqU29ObEZpQl9IY2tjMkxRU3FyREVkYy1IM3EtZVNTU2xqSzRUcFhGMFlGN3d5M2I0UHQ5QVVLakZBbmZ2a3k4RlAxZnBsdDNBQ3A2V3N1MjktQzB2bzNNUGk5NWxy?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.376Z",
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
    "id": "pauta-live-destinos-mvvjt8zn-fgao",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Venduto da Royal Yacht International un nuovo Benetti Motopanfilo 37M - SuperYacht24",
    "suggestedHook": "Náutica de Elite: Venduto da Royal Yacht International un nuovo Benetti Motopanfilo 37M",
    "summary": "Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNN0dSZDBpMXFfUFI3V2dNRVFHRHJpRVF5WFl0T0JLR2lGRmtrT05NSWgtekFDUDZuZFM3UzR3Y3dLOU5TdmRUSDZTOHRRWkdRaFgySFVRZnBhR3NFbFVzYko4dGxtUFY1bW1xbVlrNFN6bUJXSVRDTzFiTkJWb0xJR0ZFeVAyM3NLeHJZWmZQMmtpaUNEZVZjUDBUUU1SeS03cmV6bi1PM0RrTzU3VVFJUdIBugFBVV95cUxObFVxM08yUDZaVmloY003V2NnWlNqUWUtUF9uYzlJSUk2WWx1TjE5RWVFYkFJME5mdVpwUkFDV2V3TXY4NXpMX1Z6eVBqS0hyYmNBX21FSVpKclkzUFRuQjRmZjI1RXhPQWE2ZTYtY3U1NVltSjVOWXBYOTVsaTI0c1p2YUowTzdWX1BJeHE3VEJDUG9fazJ1Zm1LQVRVMjc5YUVUNFFSUnQ3Z3AwcVJCckxBREkwNXBBdkE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.363Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mvvjt8ug-ibib",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Hands-on – The O&#038;HoraPictor Smoked Ocean Volcano Grey Explores Enamelling, at a Fair Price",
    "suggestedHook": "Hands-on – The O&#038;HoraPictor Smoked Ocean Volcano Grey Explores Enamelling, at a Fair Price",
    "summary": "While O&#38;HoraPictor might be a young brand we only discovered recently, our first experience with one of their watches left us very content with what they have to offer. The brand takes the centuries-old tradition of enamelling and gives it a new spin with fresh textures and colours, at attainable prices. This isn&#",
    "sourceUrl": "https://monochrome-watches.com/hands-on-review-o-horapictor-smoked-ocean-volcano-grey-enamel-dial-sellita-sw200-specs-price-live-pics/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.176Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/HoraPictor-Smoked-Ocean-Volcano-Grey-Enamel-Dial-Accessible-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvvjt8ui-2wl1",
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
    "summary": "Geneva Watch Days is always a treat, but 2026 held two collaboration surprises for the MONOCHROME team, both involving maverick French watchmaker Vianney Halter. Bulgari’s collaboration with Vianney Halter produced a bold Antiqua-inspired Octo Finissimo Dual Time. The second, revealed to us as a sneak preview by Manuel",
    "sourceUrl": "https://monochrome-watches.com/louis-erard-x-vianney-halter-futur-anterieur-antiqua-inspired-collab-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.178Z",
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
    "id": "pauta-live-relogios-mvvjt8uj-j1gn",
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
    "summary": "With its Series 8 collection of mechanical watches, Citizen has been delivering rather impressive models over the years, with the GMT collection being possibly the most appealing of them. Not only is it powered by a true GMT automatic movement (something rare in this price range), but Citizen has dared to bring singula",
    "sourceUrl": "https://monochrome-watches.com/citizen-series-8-gmt-damascus-steel-and-forged-carbon-nb6092-01e-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.179Z",
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
    "id": "pauta-live-arquitetura-mvvjt8zw-4di3",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Sotheby’s to Auction Pauline Karpidas’ $10 Million Jewelry Collection - WWD",
    "suggestedHook": "Patrimônio & Leilões: Sotheby’s to Auction Pauline Karpidas’ $10 Million Jewelry Collection",
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNWnFOQ25JbnpweWlPamVXeERiX2labjNFcW1VQ2pNbTlIMG5tYWhQNFI0d3M2RnRxcmF2MXBKdi01X05iaHZBSXljRjZ4MUJicF80VENDMWhkOXJTaWpCOHBScWl3YVJ4OHNCbUJvUWdINVdJeHNOQkxNWWRTLTRkeHlNRlM0bXNCSVprc2gxcmZtSUFudHpXN3lGUmFiZEhJZ0xDMWU0eFA3dTVG?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.372Z",
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
    "id": "pauta-live-arquitetura-mvvjt8zy-1vaa",
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
    "summary": "Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSU1tSjhLQ3g1MGVhUmNLSkpOUkVWbDhpcEpWX3lxU0xfbUlUTjU0UENqeDd3cGVKT3ZRNGRXSkpvelp3WkQ1dHdBWWx6MVZ5QVdWNVdxaG00OTJYYmh3ejNxLXBKYWRjQjBnTmlCajJOMnN5YVRXSHI3NW9PanVTUTlEMzJTck9SWDA0RjF3djFNTDFWeTV5ZktlUzljTHpRdkI5QmxzTdIBpwFBVV95cUxNSU1tSjhLQ3g1MGVhUmNLSkpOUkVWbDhpcEpWX3lxU0xfbUlUTjU0UENqeDd3cGVKT3ZRNGRXSkpvelp3WkQ1dHdBWWx6MVZ5QVdWNVdxaG00OTJYYmh3ejNxLXBKYWRjQjBnTmlCajJOMnN5YVRXSHI3NW9PanVTUTlEMzJTck9SWDA0RjF3djFNTDFWeTV5ZktlUzljTHpRdkI5QmxzTQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-30T22:33:11.374Z",
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
