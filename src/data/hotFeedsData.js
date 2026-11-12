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
    "id": "pauta-live-supercarros-mwdck8ud-d4a7",
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
    "createdAt": "2026-11-12T09:30:05.125Z",
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
    "id": "pauta-live-destinos-mwdck97t-r5jc",
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
    "createdAt": "2026-11-12T09:30:05.609Z",
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
    "id": "pauta-live-relogios-mwdck9gd-pmnf",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Patek Philippe Ref. 3970 Sells For CHF 2Million At Sotheby’s Auction - Outlook Luxe",
    "suggestedHook": "Monaco Legend Group: O Leilão de Outono que Reúne Peças Históricas da Patek Philippe e Rolex Vintage",
    "summary": "O principado de Mônaco recebe colecionadores globais para um pregão com lotes de proveniência intocada, incluindo referências raras de cronógrafos dos anos 1950.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPVjlUUHFzZ09YdEJTcWxRRnNJN0lxallSdExNdko0XzFPNzlNUTNQRVRlRWU0dzRiczJHcG9BdFRvYXJGTFl2cm1GbFdBejVydlhSTG9IRjQtN3dlRU5KVXd2WTZOV3pJR0FCWlIzQ3lER1JYeDFzUkVfN0NmaTVwTDhUam55VlJmaFlWWXBfN29kU29wUE8tQnNBckw0eFJFM3pZSTRON0g2ZjhVeXZDTVZqUFU1N3NKai0wSXpPVdIBzAFBVV95cUxOUVFZcDRPSkdNbzlRUlpYU2pOYWluSEo1cWZUZUx6X3hyVnF1MWhjYkdqYWpaOERGeFdreVljWGlJaEhiMXFGcldNSWxzRno2MGpFM1FPaVgyZWt1SVU2WDZGamFhT0RYNVJfbnlEN2Q2ckVsZnJmLURGdERUQm1vVlpaQVY1Z0I1SHhrQXQwNzZBM1hwSy1Panl6SUFUZVBTSUFkYnRfMW9yVjZIWXFFbXNVUjdEMTZVQU1TUHdUZng5bC0zMUV4WElWdU8?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:05.917Z",
    "validityHours": 24,
    "specsPreview": {
      "pregao": "Monaco Legend Group Fall Auction",
      "lotes_estrela": "Patek Philippe & Rolex Pré-Daytona",
      "proveniencia": "Coleções privadas de alta estirpe",
      "local": "Hotel Hermitage, Mônaco"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwdck8fw-5pv8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "FERRARI LUCE WINS THE 2026 GOLDEN STEERING WHEEL IN THE “BEST INNOVATION” - Ferrari",
    "suggestedHook": "Ferrari Luce: O Dilema de US$ 500k entre a Nova Era Híbrida e a Tradição dos Motores V12 Aspirados",
    "summary": "A Ferrari coloca em teste o apetite de seus clientes tradicionais em uma encruzilhada mecânica onde o rugido de 12 cilindros em 9.000 RPM permanece como o supremo refúgio tátil.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQcF9pMTRQRlFYUUptc3c1Zm5HQTdUanNIMmNZMnROR1MtTDhOdEJibmpLRV8wS0pqZUZLTjRCd3BRWmdlcUpZYnU3RkF5dWYxRjZfWlZtc3ZXdWNnTDJTeF9ManVRSjRRMWN3TXZRa0ZCVkNZSkVjaEg3c3NkNkVFREYtVUk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:04.604Z",
    "validityHours": 24,
    "specsPreview": {
      "avaliacao": "Faixa de US$ 450.000 a US$ 550.000",
      "arquitetura": "V12 aspirado clássico vs. Híbrido avançado",
      "peso": "Alívio extensivo com fibra de carbono",
      "telemetria": "Maranello Pure Dynamics"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwdck8ih-xp94",
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
    "createdAt": "2026-11-12T09:30:04.697Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwdck8wg-7kq6",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "You Need A $4 Million Membership To Set Sail On Mercedes-Maybach's New 508 ft Megayacht - Man of Many",
    "suggestedHook": "Náutica de Elite: You Need A $4 Million Membership To Set Sail On Mercedes-Maybach's New 508 ft Megaiate",
    "summary": "You Need A $4 Million Membership To Set Sail On Mercedes-Maybach's New 508 ft Megayacht Man of Many",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQNmNjWnJBTzdwcms2dTNENUpNMENSalhDUXExdXZDVVE3VVZSWHo4cG9xMWVxN1lZcmtKWGpibl9WYVE0YXZqUWZ5U29ISG45QkxGdmttaXlheFl2MlJzWE4tZV9qZnZWY3pJQlo1b0lSRF9xcFFZeGhzUWVCSnhqVA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:05.200Z",
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
    "id": "pauta-live-relogios-mwdck881-miu6",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Introducing: The TAG Heuer Aquaracer Professional 300 x Time+Tide 'Sundowner II'",
    "suggestedHook": "Apresentação: The TAG Heuer Aquaracer Professional 300 x Time+Tide 'Sundowner II'",
    "summary": "A combination of warm rose gold and cold sandblasted titanium makes its way to the second Aquaracer in this series of collaborations.",
    "sourceUrl": "https://www.hodinkee.com/articles/time-tide-sundowner-ii",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:04.321Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/2076ff2e-42d9-4359-93d3-1d12648c0d7a/timetidesuncdownder2heading.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwdck8ad-11m5",
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
    "createdAt": "2026-11-12T09:30:04.405Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/b1d62720-f7ce-4967-a24a-865a952b92f1/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwdck9dy-ms9x",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Royal links add ever more lustre to jewellery sale prices - Financial Times",
    "suggestedHook": "Patrimônio & Leilões: Royal links add ever more lustre to jewellery sale prices",
    "summary": "Royal links add ever more lustre to jewellery sale prices Financial Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1KYUU1cnpJYTJQR0pOLWJlM2VUc2NOc2F4RDZUR0o2bktvTkNPMXMyUUlPUFh3N2gxY051eUZYWGdsYnF2VGNyZERNb1FhdTY3YzhxTmJfYks5bWRvOUNJZGo4NlhfZDR3MmQzemJSaVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:05.830Z",
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
    "id": "pauta-live-arquitetura-mwdck9e3-7i8g",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "A Romanov sapphire bracelet sells for $4.9 million at a Geneva auction - Bozeman Daily Chronicle",
    "suggestedHook": "Patrimônio & Leilões: A Romanov sapphire bracelet É Arrematado por $4.9 million at a Geneva auction",
    "summary": "A Romanov sapphire bracelet sells for $4.9 million at a Geneva auction Bozeman Daily Chronicle",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAJBVV95cUxNTkhELVE2WnZYdVFiSG5ZYXV3SjRiQXVhV0VvRE1pSXRmaXZvWVZEMEd0M3NwUlRzQUFMNDFWbTNkVW5rVVlZdVZtWXdGWGFRb2Y0M3M0bmhtM1U2XzhxZHN0QURtd2FRa0ZzRWJ3eDFubDl6RDc0eFB2ZHNoREstV2lDZUtuVlI3WTJ2bFl4VUdiMWo4U2hJNHJyeVdsVGlRczJCX2UyWllXeUpqM2xMbnhmS3NtUjFtYm55c0s4eHZ6cGROMFNJYWx2NzFULVBYa1QzU2VzSUpUVURfT2cyU3JNYjNRMzR2Y2FubkxJNkdmUlZpMm1EVnpFb0loRWI4?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-12T09:30:05.835Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwdck8dk-xw7i",
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
    "createdAt": "2026-11-12T09:30:04.520Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Angelier-Watches-Kickstarter-Accessible-37mm-Automatic-Vintage-Calatrava-Style-Dress-Watch-Review-12-600x237.jpg",
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
