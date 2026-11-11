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
    "id": "pauta-live-supercarros-mwbx4q78-faj4",
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
    "createdAt": "2026-11-11T09:30:20.708Z",
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
    "id": "pauta-live-destinos-mwbx4qfp-6xmf",
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
    "createdAt": "2026-11-11T09:30:21.013Z",
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
    "id": "pauta-live-supercarros-mwbx4pqy-8r2v",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "BYD electric hypercar achieves a world-record speed over 500 km/h - the-innovation.org",
    "suggestedHook": "Hipercarros: BYD electric hypercar achieves a world-record speed over 500 km/h - the",
    "summary": "BYD electric hypercar achieves a world-record speed over 500 km/h the-innovation.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE85RUMtYVVzX01BTXFWWG9vRmJqLXdfWVl3bU11M0RjeDdvWno1VXVmVGdIZWZwSUN4QmllRFJISUdqSUpEeC1NaVJGenBJeE16aElWbS1STk8wS1hRd2E5bnkzRGliWUplRHRPNy0xaDlrUFc5VGxrc1Zn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T09:30:20.122Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwbx4pzo-i883",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "This Bugatti Tourbillon Miniature Takes 300 Hours To Build and Costs 2027 Honda Civic Money - autoevolution",
    "suggestedHook": "Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista",
    "summary": "A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQZXpCRXZla2tDMWc0ZjU2TkdSakJueHptOG9ESFF0cHIyOHV6ZGVkVFAyMkJqSnd1blQzU1pBSjh6cjU3NDNDcE1rd3U2bVVvdWgtUGs1ZjAzNVZmbklKRmtxQjlEaUN6aGY1V2ZCd0pvTGo2U1g3THpjaFhnUGI0eXVzekJTelVyU2xROEZUUTRUSzBPWnpwZU5aS25KUVdZTGYzSjlGS1hTQlBYbGJxeWN4elNseHJZVkRaaXlpbXVPbEtzaXN4ZEhhMVRDRTlTV09Xeg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T09:30:20.436Z",
    "validityHours": 24,
    "specsPreview": {
      "propulsao": "V16 8.3L Nat. Aspirado + 3 Motores Elétricos",
      "potencia": "1.800 cv combinados (9.000 RPM)",
      "painel": "Instrumentação esqueletizada em titânio e safira",
      "aceleracao": "0-100 km/h em 2,0s (V-Max 445 km/h)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwbx4q9z-ayso",
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
    "createdAt": "2026-11-11T09:30:20.807Z",
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
    "id": "pauta-live-arquitetura-mwbx4pkz-811w",
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
    "createdAt": "2026-11-11T09:30:19.907Z",
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
    "id": "pauta-live-arquitetura-mwbx4pwf-lgno",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "2026 Gooding Christie’s Geneva Sale (Auction Results) - Classic Car Auctions",
    "suggestedHook": "Patrimônio & Leilões: 2026 Gooding Christie’s Geneva Sale (Auction Results)",
    "summary": "2026 Gooding Christie’s Geneva Sale (Auction Results) Classic Car Auctions",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQMGJWSFUwVFBsYTB1S0tFZThvTGdKVkZ3bmJOUG9YZ2lQNGZHbVluc1FJZmlvUmJZeEFjaDlGVFY3VlBIOGJFRTA5cmU0YXFaS29CTzhRUkxlNm54bXlyTHp4aUVtWXZ5Y0Ztb25tUHN4cmF4dWtnNDBQNHpVUU1ydm9XUUhxeUNQRFdoWExCbVlacm91bmNCZHp4UE41WXM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T09:30:20.319Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1660326040484-fc0cb33d0b23?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwbx4pnq-ydz1",
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
    "createdAt": "2026-11-11T09:30:20.006Z",
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
    "id": "pauta-live-relogios-mwbx4pgk-ytpt",
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
    "createdAt": "2026-11-11T09:30:19.748Z",
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
  },
  {
    "id": "pauta-live-relogios-mwbx4qqz-32z6",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Christie's Delivers Its Highest Watch Auction Total Ever Achieving More than CHF 47 Million / US$ 58 Million 221% Versus Previous Year | 100% sold - Christie's Press",
    "suggestedHook": "Christie's Delivers Its Highest Watch Auction Total Ever Achieving More than CHF 47 Million / US$ 58 Million 221% Versus Previous Year | 100% sold - Christie's Press",
    "summary": "Christie's Delivers Its Highest Watch Auction Total Ever Achieving More than CHF 47 Million / US$ 58 Million 221% Versus Previous Year | 100% sold Christie's Press",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNcGFoZUxVNnZxcE50TWgzZW1nWk8td3E5ZUhWejlqYnNhTlVXeERWOXNBWjFpejItMVdVTDJLZ18ycEFILUVnbHNKcXpIdUcxcURTTURvR2pHaGVMSDY3MVJJaGdrMFZyWEM1VXNya0F3bFV2TEtJY2ZJX21xUlU3d0N4ZVYyZDE2ZVBkRkx3Rl9RT0xWaERHQnc4QWF2YUpTUHE0RExVMktFQXlkSjZIaHFrcjJEV0R2NWhRRXYzTnRLRkcwNFdUaWk5WDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T09:30:21.419Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwbx4pic-3aj0",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "This London Water Tower Has Been Turned Into a Contemporary $3.7 Million Residence",
    "suggestedHook": "Patrimônio & Leilões: This London Water Tower Has Been Turned Into a Contemporary $3.7 Million Residence",
    "summary": "Dating to the 1860s, the original structure has been paired with a glass and steel extension.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/london-water-tower-residence-1238820854/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-11T09:30:19.812Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/The-Water-Tower_Exterior-Back.jpg",
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
