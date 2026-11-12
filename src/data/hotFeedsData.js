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
    "id": "pauta-live-supercarros-mwcgf5ny-fgaq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Renault-Geely’s Horse unveils V-8 for Lotus supercar aimed at Ferrari, Lamborghini - Automotive News",
    "suggestedHook": "Hipercarros: Renault-Geely’s Horse unveils V-8 for Lotus supercar aimed at Ferrari, Lamborghini",
    "summary": "Renault-Geely’s Horse unveils V-8 for Lotus supercar aimed at Ferrari, Lamborghini Automotive News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBSbHNFY3RLRVZmenVKT0tEal8yaHBBbWtHMlE4Uy1jeU1jS1JWaHBkSTRnbXk3SzVhcVpnaFZQSjg5ZlVZam5PTk0xRWo5dGhzQlZBOHYtaF84VTFaWjV3TDhQV215VG1FWXh5NG1Wa1ZtRVhW?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:20.014Z",
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
    "id": "pauta-live-supercarros-mwcgf5om-ko68",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Gordon Ramsay makes a young fan's day by inviting him to sit inside his $4M Ferrari F40 - Supercar Blondie",
    "suggestedHook": "Hipercarros: Gordon Ramsay makes a young fan's day by inviting him to sit inside his $4M Ferrari F40",
    "summary": "Gordon Ramsay makes a young fan's day by inviting him to sit inside his $4M Ferrari F40 Supercar Blondie",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFAyRHYzeFlyMkNiLTBjVFJ3UVp2Sm9ZR1czX3Jyam5uMWNOSGpoQ3VUTmJMelpNVzhVRkVZMDZjekZkZktaakFxaG5QRWtaODYxZllSX0V4V3RnUnVRTUF4bGliM3luV1A4R0JWQVlkdnN4dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:20.038Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwcgf69y-7ei6",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Superyacht owned by British billionaire John Caudwell docks in Arrecife - Gazette Life",
    "suggestedHook": "Náutica de Elite: Superiate owned by British billionaire John Caudwell docks in Arrecife",
    "summary": "Superyacht owned by British billionaire John Caudwell docks in Arrecife Gazette Life",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPWTVXaGEyX1U5alpmNUN2THN2MGNsS2RSSVR6ZHZvcmJtTU1XUXFBVUFHSFp1aks3WThCdFUzSFJRRmxBeUNvZHVZZnRKZzhaWDJqYUhPU0VkNDE1YURkSFREU0daOG9VMnhMZGJHV3RuZno4Yk5tMEpRMEQ1TnZmUTYwQ2N4NVJvYXlGQUp0bnZLRmhZaXIzM3NpbVZITU9uM0xv?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:20.806Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwcgf5ii-063n",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "LaFerrari leads difficult Broad Arrow Zürich 2026 auction results as Veyron struggles to hit estimate - Magneto magazine",
    "suggestedHook": "LaFerrari leads difficult Broad Arrow Zürich 2026 auction results as Veyron struggles to hit estimate",
    "summary": "LaFerrari leads difficult Broad Arrow Zürich 2026 auction results as Veyron struggles to hit estimate Magneto magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPSlU5ZDhRQkk5b3NsMHlQMTUxOHAyUUxvYml4QVZtLUU1RFItcnlKSXhtTVJiR1NFWjNRVWJ6emcyaWg2bVFxNnUxaFo4RDI2YWFsZ0dSTWNKVVdjbTU3NEJrc1JTM3MwOXZUTThUMXlXeHd1X09rQUFTS1FlcVRteDB0TUxhSHg3UXF2RHFMRkNwTkFE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:19.818Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwcgf5hx-bg8z",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Ferrari Investors Shrug Aside Negatives As Shares Regain Momentum - Forbes",
    "suggestedHook": "Hipercarros: Ferrari Investors Shrug Aside Negatives As Shares Regain Momentum",
    "summary": "Ferrari Investors Shrug Aside Negatives As Shares Regain Momentum Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNYW5pOTQxaE5SN3hPaloxQkF5dHExaEt0TVJBS0ZUSE9wWkc3UXZZdFNkLUprdmVvaHROYTNDQ3ZkUlVnbllhQ3dWQ2xTUUtzZE9JU2tiTjJyMy1RZS1yNkl4bGNLc3BwZllPVjl1RXBjNzVCUEVkaWlBblpua183MUJxeTY0REVIa0dtRk9VMWNOMXlLVGEyaUcyX05YTFJEOFd5SDFZTWhvUWZuczVwLW51TlhYMW9L?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:19.797Z",
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
    "id": "pauta-live-destinos-mwcgf621-x7kw",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Mercedes-Maybach Debuts 508-Foot \"Beyond Horizons\" Megayacht With $4 Million USD Buy-In - Hypebeast",
    "suggestedHook": "Náutica de Elite: Mercedes-Maybach Debuts 508-Foot \"Beyond Horizons\" Megaiate With $4 Million USD Buy-In",
    "summary": "Mercedes-Maybach Debuts 508-Foot \"Beyond Horizons\" Megayacht With $4 Million USD Buy-In Hypebeast",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNLUFGMGxqQkhkWmZtNFhobERBcm9OUW5BdWEzYU80SGMtaGI1amd0djN4QnRwcEpRbGQzTHhTZE4yQUpQOUsyc3JOaURaUW1ZdUZpcHdtV04wUDc2NHZEYUZELTNfN1lLeEg2YmJwazlZRTBPaVdmNEY2UGtyby1VdkJRSUd0VlZLOU84aDRuWWd0VjVMUTAzbzRldFMwYWdWYTdyMHE0c0RZcnZFbkxGMWNvSnY?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:20.521Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1604737637145-48cc31d160eb?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwcgf6le-3djz",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Younger collectors flock to record Christie’s watch auction - Something About Rocks",
    "suggestedHook": "Alta Relojoaria: Younger collectors flock to record Christie’s watch auction",
    "summary": "Younger collectors flock to record Christie’s watch auction Something About Rocks",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOVE1SdXc1UWt2VWRJa2RpMldic2FkYTBRd1hnYTNuLV80TUIybjBSdEh0a29aREFQZXY3RU4wSnhHNmJRU25HdTc3Mk5tOFZnaVo4aTBhUVpmZDJqNWxmUmlrQ1hGRGFENDJYSEJ4cVljamRxOWZwWDNQRmgtanpKb01ZM0FDTUhnVUtIWkk5MmtrNzRWTVE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:21.218Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwcgf5ae-gqzx",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: Three Big Takeaways From The Geneva Fall Auction Season",
    "suggestedHook": "Auctions: Three Big Takeaways From The Geneva Fall Auction Season",
    "summary": "Who is up, who is down, and who is confused. Including the author.",
    "sourceUrl": "https://www.hodinkee.com/articles/three-takeaways-from-the-geneva-fall-auction-season",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:19.526Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/b1d62720-f7ce-4967-a24a-865a952b92f1/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwcgf6jb-8cli",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "The Bulgari Pink Diamond Ring: A 24-Carat Highlight At Christie’s Geneva - Outlook Luxe",
    "suggestedHook": "The Bulgari Pink Diamond Ring: A 24-Carat Highlight At Christie’s Geneva",
    "summary": "The Bulgari Pink Diamond Ring: A 24-Carat Highlight At Christie’s Geneva Outlook Luxe",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPMURmNXc1Tkt1SkhlZVdrbDZ1QWZnYW9IMkdyeWxoOWhNbFJhNXVjZ3ZmYzFrVVh4RkF1SHh6MDYzZVpsRlNmYlhDdGNIclVGZFBCbURCMjFMRTBBNzRubW1XSHJZYmQxdmIyRjdfYWRUNTVCQVh5c1hyRkdPLXFpSWZjMGVBZ0tpd1dud0VOM0hTbFBfSVltNnNadUJOdjdqWERzVi13bjhXSUdYOGM2b1QwR2FDQUVOSGF0aDExcTc0UUd1Y21J0gHUAUFVX3lxTE9PQUVZdE5SdVJ6ZUd2aUNiMHI1VzRjMjZjVW5sODEzNkt1cWxRRXhqLUlnMEt3ZGNWa3lpRjJaU2RBRHgxNHNYU28xQVVjd2ZuaTdreHp4Y1JOSzNsaUdLalptWXRMSXBCbENqemxCRDE0UC1zcnV3Q0l1YkFJSTQ3NXZUX3V0RVMwTTdIa2JaeTJPNTNhelBzeUVVMjI1OG52LVE5VmZLUUdPaFo1TWNwaXJwakxOamI5TGxRZzNQaHFvZ0MxaFIzUm53ektMdkt3Z21V?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:21.143Z",
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
    "id": "pauta-live-relogios-mwcgf5fj-h2el",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – Angelier Launches on Kickstarter with an Accessible Calatrava-Styled Dress Watch",
    "suggestedHook": "Alta Relojoaria: First Look – Angelier Launches on Kickstarter with an Accessible Calatrava",
    "summary": "Angelier’s story began with a collector’s search for the ideal dress watch. Having owned and studied watches from the likes of Patek Philippe, Vacheron Constantin, and A. Lange & Söhne, founder Paul Angelier eventually decided to create the watch he could not find: a slim, understated piece inspired by the design",
    "sourceUrl": "https://monochrome-watches.com/angelier-on-kickstarter-accessible-37mm-vintage-calatrava-automatic-dress-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:19.711Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Angelier-Watches-Kickstarter-Accessible-37mm-Automatic-Vintage-Calatrava-Style-Dress-Watch-Review-12-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwcgf59p-2dr4",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A 1920s Seattle Tudor Blends Old-World Details With Modern Flourishes for $9.7 Million",
    "suggestedHook": "Alta Relojoaria: A 1920s Seattle Tudor Blends Old-World Details With Modern Flourishes for $9.7 Million",
    "summary": "The Washington Park home features a stone arch the sellers won in a bidding war against Cher.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/former-microsoft-executive-seattle-home-lists-1238820856/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T18:30:19.501Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/530_36AvenueE_Seattle_28.jpg",
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
