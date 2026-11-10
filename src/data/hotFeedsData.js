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
    "id": "pauta-live-supercarros-mwahokwa-dlkj",
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
    "createdAt": "2026-11-10T09:30:06.922Z",
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
    "id": "pauta-live-destinos-mwaholfj-mkhm",
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
    "createdAt": "2026-11-10T09:30:07.615Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1604737637145-48cc31d160eb?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwaholj1-w4pj",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold - Yahoo Finance Singapore",
    "suggestedHook": "Alta Relojoaria: Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold",
    "summary": "Phillips’ Geneva Watch Auction Broke 24 Records and the $100M Threshold Yahoo Finance Singapore",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQVlkxSWdpeHZ3d3NoVzNfNHNTWVJJVzBoZ2QtSHdIME9zeE9yMllINVV3aWVnb0Q1bjN0Q2ZYSGFjWWRVblpPVUp0NkFUTkdGdkx6ZUZfWGlJbmpTQXk2aTFkd2YxYXk4M2NxYUdWcHUzZ2xGOVVwd2ZTYl90Q19rTE5nRUI1UmRpMXVkOA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.741Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwahoktc-mkif",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Interview: Bugatti Americas COO Sascha Doering On 20 Years In The U.S. Market - Forbes",
    "suggestedHook": "Interview: Bugatti Americas COO Sascha Doering On 20 Years In The U.S. Market",
    "summary": "Interview: Bugatti Americas COO Sascha Doering On 20 Years In The U.S. Market Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPNVpoRlFaTXJGWFNNUTJ5Q1Z0cVZURmE4aF9oSkdld2dpUExVcTF3cGtNdFJ5bFhmNnpwV1NOejZjaHNVRzgwMGJHbzNzc2trZUNVdGVfRGJUeXJWMW83cmNva0VLZnRZVUVSWXJKakdTU19LUFhKTk12V3lJM1pqbUcwZ0hJVUNodEVzWjZ3ZURYVnBsNHEyblQwekpvR0NvWmlWR1hFc1hwWVNrWmVGNUpWcExvTWZOSjlnRTE4VTM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:06.816Z",
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
    "id": "pauta-live-destinos-mwahol75-jkil",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "After supplying parts for Cristiano Ronaldo’s superyacht, Tunisia’s boatbuilders grow exports to $558 million and target twice as much by 2030 - Business Insider Africa",
    "suggestedHook": "After supplying parts for Cristiano Ronaldo’s Superiate, Tunisia’s boatbuilders grow exports to $558 million and target twice as much by 2030",
    "summary": "After supplying parts for Cristiano Ronaldo’s superyacht, Tunisia’s boatbuilders grow exports to $558 million and target twice as much by 2030 Business Insider Africa",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPcW9yT2pJRUh4N3BKb21Oa2NDZDdTSk41U0oyY25oLWI2VmhWd09KcjhJa1pwLVE4OWxLS19ndHZzVnpseXZWTko1LUNsSHhrQXl5eDNVdXkyaFIwYVNvRUExTUFleHJhV2g3TG1GWWpiREZiQjFGUHpDV2gxTWNuSmdydnF2MTVBQXBGX0NnWjNVZXhuUnBSYzltOS1wa3ZVR3lBdnJxMTZReTRmMTd6a3dmbUxMVzI3SmpYd3BZRTZQTk5lc3JwazI1dkNOZFlOYXpHYWhB?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.313Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwahokqp-idoz",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Taiwan’s second Ferrari F80 has been officially unveiled - The Supercar Blog",
    "suggestedHook": "Hipercarros: Taiwan’s second Ferrari F80 has been officially unveiled",
    "summary": "Taiwan’s second Ferrari F80 has been officially unveiled The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNeDJkUVRZQXNZODM2aEFNTnFQMnpMdXJUUFN1OVhMQnZ0RmpuSkFwNGxRR2otSF82VTcwVjl2dkt6VEdaNU9jUEFVM2MwY2tZZjI3S1BQaGVRdk1MalBMRGRVdk42UHpCS1FGbl9ZS2Ezdi1kaVNCN3pTVDJmWFJXUnhfU0FJTkNqWmZ5NmFFazBVZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:06.721Z",
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
    "id": "pauta-live-destinos-mwahol7m-ayaq",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Monaco installs new superyacht moorings to protect marine biodiversity - Riviera Radio",
    "suggestedHook": "Náutica de Elite: Monaco installs new Superiate moorings to protect marine biodiversity",
    "summary": "Monaco installs new superyacht moorings to protect marine biodiversity Riviera Radio",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNNjRjT3ZyQkJDLWpheGMwWWRUa19Xbk9QcnpqeENwaW5ONWFLRUlCbHlYSVVzR2pZd2hUdjA5TEpaeXB3RC1CX0VLMEJ2elBGczdwcHdsUWhzX1E0Ty1MNnhwY3ZZXzNMdFRwbmNldXV1VDNxNnhOODFzNDJUMldlQTAxMm9zYlBoX200OEtkRlRhMXFpVV9sQmJwM0V4UkNGbm5vRHBuOURaMGVuSks4UlNPbGVSaG9k?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.330Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwahokno-om0g",
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
    "createdAt": "2026-11-10T09:30:06.612Z",
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
    "id": "pauta-live-relogios-mwaholit-dxe9",
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
    "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9BZm1CeGpZOUhUb0ZnSDdzN3kxUDlfTGltNlBscFg4Yk5ycUlHMmlZbXlKeTFVbDVZSGN4eVdNWjNKS3RlS0hPWDR1UE9odw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.733Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwahoktw-l6d3",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "2026 Broad Arrow Zurich Sale (Auction Results) - Classic Car Auctions",
    "suggestedHook": "Patrimônio & Leilões: 2026 Broad Arrow Zurich Sale (Auction Results)",
    "summary": "2026 Broad Arrow Zurich Sale (Auction Results) Classic Car Auctions",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOVjhfZ0lNS2g4OVh2SWNKOHZDMzk1UDVUdlRjVWZGcEtuRzVyV2NVcUJzSTVFWjhsUTdTcGRkRnVOZlBQRmtJaV9OcXNjTEJrTmRjZy1yWWQ3WjZ6ckFiaFFvYjRWLVY5emllZVB2dWNueVBNTlF6bWwyV1M0Z2hKS2h3RW1YNDNPV3BDWFdsTmVwbFZrNjBj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:06.836Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwahol7v-4434",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Canadian singer The Weeknd bought a $50 million Florida waterfront mansion on a Coral Gables peninsula, w - The Times of India",
    "suggestedHook": "Canadian singer The Weeknd bought a $50 million Florida waterfront Mansão on a Coral Gables peninsula, w",
    "summary": "Canadian singer The Weeknd bought a $50 million Florida waterfront mansion on a Coral Gables peninsula, w The Times of India",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9AJBVV95cUxQWUJPMjJNLXZJVUpSYUFicFl3SnZhdDR2a2w5ci1RcVBDT0N3S1RjdURDOHRJX2pTQmt1cEc2bXBvcWJNeWp5UnZiNDFVREJ0Vkh6Tm9iZTJGVHZPMjZUSUdOWmxSVkJXSkpZeHFIbU1sTFpmOFRfbVVadWZucmlCZDVKNURyODdFUG5RSzE0VUN4WS12VEVFNFNFOWYxSzdFckVYV3NJd2hWaDAwUEx1SkJRdF9uaFYzNVVkOUVzUmhpbnUwWG1nLVR0ZlBnUmtjV1VybW9rM2xLR0xSLThaZFVNT1pKQWJvVXUyNnEtbTQyd0RFdVRiM2hDWkFxTnZydmlyVmo4NlM1dTBnUXVKb3F1WnJvRVZLNVdMNHN5OWo4SkpTU3V5V2RqRWE0dUhwVnNTSEF5MDlES1RyeTR0WXRncmk5MzRGZ3NYcHBJaGFzM2NyclRWOE1PTEQ1ZzR5Ulc2WkJiaHNyc1VoQTZlTXpaQWPSAfoCQVVfeXFMT05HR1NIWmdmR3lpQ1hfOW5SaEFxTWtGUWNKVnRnNFc2LUFJWEp0N25vSzhMLWlVbDlQb21DZUxNYTBoZU54M3NMczZ3elgwc21EbXk4ejMzM0pFMDNRZU9FZjV2bUUzdVh1a2VKc0pvcWxJekp2NXE1UXV2REJ6OERnZFhfaThWejZEeEtLQ29GYnJ6M1FQZVNpT29SQU41UnZNM1pjdWtScktPZ0hDd3FsTTJHREhIQWl4LUwwdXJ2TnJJc3NPVTd6LTVyaTlkTDhrUnZUQTJfNm4zRGlUNUVpT01pVjA4eUlGNlVVZ29LcHh0eUloSWd4eG42NmFMejVVLXNXLW94N1psTjJTUFZZSE9wMkQtWTVuNElCUk10M3B4a01mVXNMSHRURGswd1BOY0xPY2dsUEhDM1VUbEM4TlJkNkNaQzktdi1LbGxZOGhPdnlyZ2dXZUVJaGVkWXFNQmhqTEFsVklpLWoySTNMekpyV29vN1RB?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-10T09:30:07.339Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwaholif-z2ng",
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
    "createdAt": "2026-11-10T09:30:07.719Z",
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
