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
    "id": "pauta-live-supercarros-mvomj6r8-otus",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 91,
    "rankingTier": "A",
    "originalTitle": "Bugatti becomes the latest supercar brand to bet on Miami real estate - IslanderNews.com",
    "suggestedHook": "Bugatti becomes the latest Superesportivo brand to bet on Miami real estate",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMi8AFBVV95cUxNdXRWVV9WWVJMZ3Q0ZUxmTHZwbDcxR3kxS1BPS0l5V1E5ZGQwUW5LWXYzdFRST251THV6dXh6TVFya1NmMHRfcGltNDZuaktZQTFDcjEwTTVMbHo3bm44NmVMSVVXdzdSTUxheWxUYmVpR0c0S2wwODFTcHZuR2RoeHREVjI5SGlhc3U3Vmd1RmpSMHVCb1N1Z1U4RWFkdHh6cmF2dll1bnRLOXVVOXdGWFNEOGNMcTNzZkhILTFONFZXSUM4WFdqeF",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNdXRWVV9WWVJMZ3Q0ZUxmTHZwbDcxR3kxS1BPS0l5V1E5ZGQwUW5LWXYzdFRST251THV6dXh6TVFya1NmMHRfcGltNDZuaktZQTFDcjEwTTVMbHo3bm44NmVMSVVXdzdSTUxheWxUYmVpR0c0S2wwODFTcHZuR2RoeHREVjI5SGlhc3U3Vmd1RmpSMHVCb1N1Z1U4RWFkdHh6cmF2dll1bnRLOXVVOXdGWFNEOGNMcTNzZkhILTFONFZXSUM4WFdqeFVOMWRlRWMtZGxCZVNkZkY1aXNKSDNoX1FlaXBQTW5udjJ4dWs2Mms?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.524Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvomj6r6-458s",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less - CarBuzz",
    "suggestedHook": "Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiaEFVX3lxTE5BSnJxV3c1U1lBSkN6eTVYaEZaNFExVHQxTUFRdTE1TVRGMHp4VUdLbGUwbU9ZU3BYem1SSndSbGVkYVVOY0Q5OEp3bjVaeWltVnlTSUdOdE93N3U0V0ZSZnNXMHlLbFpm?oc=5\" target=\"_blank\">Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less</a>  <font color=\"#6f",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5BSnJxV3c1U1lBSkN6eTVYaEZaNFExVHQxTUFRdTE1TVRGMHp4VUdLbGUwbU9ZU3BYem1SSndSbGVkYVVOY0Q5OEp3bjVaeWltVnlTSUdOdE93N3U0V0ZSZnNXMHlLbFpm?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.522Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvomj6rq-sg9x",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ferrari’s First EV Costs $560,800—$122,000 More Than Its V12 SUV - MotorBiscuit",
    "suggestedHook": "Ferrari’s First EV Costs $560,800—$122,000 More Than Its V12 SUV",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMikwFBVV95cUxQQy1hVVdJWmlraFpSNk1vNEpDckRCekw3U2xlNmEta3Fta2VLMm1jVWlfa2VZd3BOcVFabXE2NkVKTW9JRjdjc083eHBySGJJelduQUhYZWFkdmtYMUlKeTNKYVRiZ1lIYXowNGY1ck9WNUZhekRrSzk3WHJrM0xlY1RBb3ZMTW1BWkxNSlFORFpXT0E?oc=5\" target=\"_blank\">Ferrari’s First EV Costs $560,800—$122,000 More ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQQy1hVVdJWmlraFpSNk1vNEpDckRCekw3U2xlNmEta3Fta2VLMm1jVWlfa2VZd3BOcVFabXE2NkVKTW9JRjdjc083eHBySGJJelduQUhYZWFkdmtYMUlKeTNKYVRiZ1lIYXowNGY1ck9WNUZhekRrSzk3WHJrM0xlY1RBb3ZMTW1BWkxNSlFORFpXT0E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.542Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvomj6rt-ear9",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Nuvolari Lenard Unveils New 380-Foot Superyacht Designed For Life At Sea - Forbes",
    "suggestedHook": "Nuvolari Lenard Revela New 380-Foot Superiate Designed For Life At Sea",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMixAFBVV95cUxOR0lZcFo5dGozRnhwT0dVT1NWNll0b0dtSDlGa21UNUktMXBOZGxvaGI0Zjdack9uWnllX1diRWFRSTQ2Ukt3VzdRbHhaRk9TS0hFMHRVS0d6RmFxQ3hLR0tsY2FLM3BpYVppU0hyc0E3MGFrQVJzVWt1RnIwNlpLamdSb3hhb21MbTY0MS1UbVhnR25FRklIZXcyYmNmUVhQYmxhSnRWdVpMVFlvVnhCSFJLa1NxUTdnNkpKY3NoX2xKX3VE?oc=5\"",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOR0lZcFo5dGozRnhwT0dVT1NWNll0b0dtSDlGa21UNUktMXBOZGxvaGI0Zjdack9uWnllX1diRWFRSTQ2Ukt3VzdRbHhaRk9TS0hFMHRVS0d6RmFxQ3hLR0tsY2FLM3BpYVppU0hyc0E3MGFrQVJzVWt1RnIwNlpLamdSb3hhb21MbTY0MS1UbVhnR25FRklIZXcyYmNmUVhQYmxhSnRWdVpMVFlvVnhCSFJLa1NxUTdnNkpKY3NoX2xKX3VE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.545Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvomj6ru-hrzw",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Designed specifically for a billionaire family who cruises the high seas for months, this 380-foot superyacht concept comes with a mammoth owner’s deck, spa, beach club and a pickleball court for dinking - Luxurylaunches",
    "suggestedHook": "Designed specifically for a billionaire family who cruises the high seas for months, this 380-foot Superiate concept comes with a mammoth owner’s deck, spa, beach club and a pickleball court for dinking",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMihwFBVV95cUxPRnRVekpwQnRpd1Q2dnJjcS1mUFByUjkwWTBJaFVDVzJnNnFIbmJuRnNMRFd2OFNtTndFejYwZk5VUzFiaGZfYkI1Skw1dzduRE1QbGtZb1Y4bXBPdzRwTk45al9kVXpSZG1JVGdmN0I4NXJmWTZnSXZqT0R0QkR1Z0IwWWNsSDQ?oc=5\" target=\"_blank\">Designed specifically for a billionaire family who cruises the h",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPRnRVekpwQnRpd1Q2dnJjcS1mUFByUjkwWTBJaFVDVzJnNnFIbmJuRnNMRFd2OFNtTndFejYwZk5VUzFiaGZfYkI1Skw1dzduRE1QbGtZb1Y4bXBPdzRwTk45al9kVXpSZG1JVGdmN0I4NXJmWTZnSXZqT0R0QkR1Z0IwWWNsSDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.546Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvomj6rw-2j54",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "\"I will sell the first €1 BILLION superyacht!\" | Tommy Chiabra on yacht brokerage - SuperYacht Times",
    "suggestedHook": "\"I will sell the first €1 BILLION Superiate!\" | Tommy Chiabra on yacht brokerage",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMif0FVX3lxTFBZMGJOLXhrU09BbEIteXhLdHhEaFJvZVIzXzlTRFRxWC12NDVoNGl4dHJkSzdGS2dBUEhBbEF1dml5VElpN2d3eVFTTkc2ekRiWTdMYWJUWlBNQkRGYzJXb01DN0NraUdzaHhMVkliTmp0Nlg2YWJlOHpTcjB6d0k?oc=5\" target=\"_blank\">\"I will sell the first €1 BILLION superyacht!\" | Tommy Chiabra on yacht brok",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBZMGJOLXhrU09BbEIteXhLdHhEaFJvZVIzXzlTRFRxWC12NDVoNGl4dHJkSzdGS2dBUEhBbEF1dml5VElpN2d3eVFTTkc2ekRiWTdMYWJUWlBNQkRGYzJXb01DN0NraUdzaHhMVkliTmp0Nlg2YWJlOHpTcjB6d0k?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.548Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvomj6ri-r9pc",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Think It'll Fetch? - InsideEVs",
    "suggestedHook": "Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Think It'll Fetch?",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMidEFVX3lxTE9tNEtoLUUzbEZUV2g3Rmd1d2VhS3ZGeVM3S2d2OGpuMW9reFMxa1ZVQWlRY2hqNWxUUlMzN3RKYWlaS2dkRFFiOTdpWGJLbXVSOGxkeXFFWkpramkzd0dvVTY4UnNtOU8wVVQ3aDZrTTh0NFZo?oc=5\" target=\"_blank\">Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Thin",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9tNEtoLUUzbEZUV2g3Rmd1d2VhS3ZGeVM3S2d2OGpuMW9reFMxa1ZVQWlRY2hqNWxUUlMzN3RKYWlaS2dkRFFiOTdpWGJLbXVSOGxkeXFFWkpramkzd0dvVTY4UnNtOU8wVVQ3aDZrTTh0NFZo?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.534Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvomj6r5-jv0u",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Introducing – Chinese Brand Atelier Mephalie Launches its Minute Repeater Collection, Priced to a Tenth of What Europe Does&#8230;",
    "suggestedHook": "Apresentação: Chinese Brand Atelier Mephalie Launches its Minute Repeater Collection, Priced to a Tenth of What Europe Does&#8230;",
    "summary": "Let&#8217;s have a quick overview of minute repeaters recently launched. Gérald Genta Geneva Minute Repeater: about CHF 320,000. Piaget Polo Minute Repeater: about EUR 400,000. Bulgari Octo Finissimo Minute Repeater 37mm: EUR 195,000. And while we can continue this list forever, you won&#8217;t be able to find much und",
    "sourceUrl": "https://monochrome-watches.com/introducing-chinese-brand-atelier-mephalie-launches-its-minute-repeater-collection-priced-to-a-tenth-of-what-europe-does/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.521Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Monochrome Watches",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Chinese-Brand-Atelier-Mephalie-Minute-Repeater-Collection-Accessible-5-600x237.jpg",
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvomj6r2-pe1a",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: Monaco Legend Group's Fall Auction Is A Return To The Classics",
    "suggestedHook": "Grande Leilão: Monaco Legend Group's Fall Auction Is A Return To The Classics",
    "summary": "It seems like everyone is chasing modern indies and big ticket numbers these days, but Monaco is where the vintage deals (and grails) are still around.",
    "sourceUrl": "https://www.hodinkee.com/articles/auction-monaco-legend-group-fall-2026",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.518Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Hodinkee",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/images/7f1b4a89-60e9-46c1-a972-865a7abe1dac/Hero_MLG.jpg?ixlib=rails-1.1.0&amp;fm=jpg&amp;q=55&amp;auto=format&amp;usm=12&amp;w=2000",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvomj6s2-ez7h",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Kim Jong-un's $100M mega-yacht with giant waterslides spotted off North Korea - Daily Express US",
    "suggestedHook": "Kim Jong-un's $100M mega-yacht with giant waterslides spotted off North Korea",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMijgFBVV95cUxPRXkyRnVaRld5UzE1UGRNTGZka3gyRVVJUmhIUmdfVUFMb2txcmpzN2x5aTNJMVdrZHg1a0FQcVhjU0duN19XTXlSaHdtb1lsNGY4dFMzbHpTYmZaQjRRT3pKMWhacy1udElLRFdMbVEzRXR4U0J5Y2dxVHBSWld5NHVNZVJPbkY1NlZGeXZn0gGTAUFVX3lxTE5KUDY5QnRERFlyblhERmlWdUpMUmhndWo4TGM1b01BZ3NYajRDMnUwMlM3NDFsRl",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPRXkyRnVaRld5UzE1UGRNTGZka3gyRVVJUmhIUmdfVUFMb2txcmpzN2x5aTNJMVdrZHg1a0FQcVhjU0duN19XTXlSaHdtb1lsNGY4dFMzbHpTYmZaQjRRT3pKMWhacy1udElLRFdMbVEzRXR4U0J5Y2dxVHBSWld5NHVNZVJPbkY1NlZGeXZn0gGTAUFVX3lxTE5KUDY5QnRERFlyblhERmlWdUpMUmhndWo4TGM1b01BZ3NYajRDMnUwMlM3NDFsRlkzZTI3OG9NTnFXdmZNQnlzb0oxYlBfQUYzUFI3RW1EeG5YOEl4eUVUWkJPSmF2TVFyZkhVa2psX0dSX29VQlR5Umo0UnBrdXFhOWhFLWVpSm9xNV9GUjFwSndsdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.554Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvomj6r3-bp7v",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Auctions: Ten Watches I Actually Care About This Fall Auction Season",
    "suggestedHook": "Grande Leilão: Ten Watches I Actually Care About This Fall Auction Season",
    "summary": "I'm not saying I'll be bidding, but there are some gems coming up over the next few months – and a few of them start at literally 1 Swiss Franc.",
    "sourceUrl": "https://www.hodinkee.com/articles/ten-watches-i-actually-care-about-this-fall-auction-season",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.519Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Hodinkee",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/images/bf0b60f5-cd4a-4585-80d8-729b5a797374/b10-h.jpg?ixlib=rails-1.1.0&amp;fm=jpg&amp;q=55&amp;auto=format&amp;usm=12&amp;w=2000",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvomj6s3-7q9b",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "$14.5 Million Beachfront Penthouse Sets Condo Record in Sarasota, Florida - Mansion Global",
    "suggestedHook": "$14.5 Million Beachfront Cobertura Sets Condo Record in Sarasota, Florida",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVG1HN0dxRHVhcDhNVTFWdTBDSDljXzFkbGUxR21aOFhOZmRKVXFWOVhxZFFiZXd1dkI0RVM4eEZfSDNDS3N4ZHYtRGw1bzZCTXlFRE5HbVRhLTg3cGlTX2I2eURWTHR5OWR2RGFhaGhQS3MydUFqRDZyS0xxdzRIZGpjRFM5OHhmM0dSeUpTZ2RIc1FpQ25uM2FtM3Q2WTRKRlM0SXNLVXFGQ091b0ROMDVNQ1BYbWlPbmMw0gHAAUFVX3lxTE56en",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVG1HN0dxRHVhcDhNVTFWdTBDSDljXzFkbGUxR21aOFhOZmRKVXFWOVhxZFFiZXd1dkI0RVM4eEZfSDNDS3N4ZHYtRGw1bzZCTXlFRE5HbVRhLTg3cGlTX2I2eURWTHR5OWR2RGFhaGhQS3MydUFqRDZyS0xxdzRIZGpjRFM5OHhmM0dSeUpTZ2RIc1FpQ25uM2FtM3Q2WTRKRlM0SXNLVXFGQ091b0ROMDVNQ1BYbWlPbmMw0gHAAUFVX3lxTE56enpxZ1pnT0tia1R2SzVQR001TUY0dlM4WTNldjlITlUyWDFiOUtqTXdXMVBSeEVhaU5JanZOd1NmYW5NVjJnYnFGMlhVb0M2SG8ydjAyeGtsM1RtcWdZc2VBU0l5eXlyTm9sVjRNanZEZk5Day1wbzIwQk4tX1FuZ3FqRmNZUG1wMnROWEhFR0xOTDdYWnBXVS1CU0FmbDJ1WHV1clhYUWtaemI2c0RkaDJEbUJXSkVodzlSRTRBWg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.555Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Architecture & Mansions",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvomj6s3-p6ji",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A Monet Painting Never Shown in Public Sells for $56 Million in Paris - Town & Country Magazine",
    "suggestedHook": "A Monet Painting Never Shown in Public Sells for $56 Million in Paris - Town & Country Magazine",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiywFBVV95cUxQUWUzOEVTT2tmZ3VMeUNPVzhseEF2eEtzUkdHbWs1ZHNoaGYxSUxIVHVLUmhOSnhSSUFEdllPLTl4UmNJWXhqMVlwYTUycjdydU9aUFRjODhOaURYdk1uLTUybWFPd0tQendIY0FUWFNUVzdCV2NvSFNFQWZKOW00N1ZQOUFhS1E5ZkVfREhhTmZNU2RSZjczSjg1SEVhRi1yZ0NveExvX3JTS3g0bmViak5aTDlrZ1ZmWFZMbGNpQVlrck5jbExNdV",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQUWUzOEVTT2tmZ3VMeUNPVzhseEF2eEtzUkdHbWs1ZHNoaGYxSUxIVHVLUmhOSnhSSUFEdllPLTl4UmNJWXhqMVlwYTUycjdydU9aUFRjODhOaURYdk1uLTUybWFPd0tQendIY0FUWFNUVzdCV2NvSFNFQWZKOW00N1ZQOUFhS1E5ZkVfREhhTmZNU2RSZjczSjg1SEVhRi1yZ0NveExvX3JTS3g0bmViak5aTDlrZ1ZmWFZMbGNpQVlrck5jbExNdVJ4dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.555Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Sotheby's & Christie's Auctions",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvomj6s3-2k75",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Never-exhibited Monet painting sells for US$56 million at Sotheby’s - The Business Times",
    "suggestedHook": "Never-exhibited Monet painting sells for US$56 million at Sotheby’s",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiswFBVV95cUxOaVZFWnRhbU44Y2RwcDM1aVJXNmpBSzFkY0RiMDBRNUlxYjBGbEpEaVk5ZGxjdl9vYVNWLW5ZNFJ0RXFMT0otZlY2WlExOGtLcThoVmdMVU5sMlVfZ2gxTkl1R1NDclFqUkJRcnNLNl94b0wxdkhCbHhMMnR1aWkyVnBLQkt1aFVZQXVEazNzeEluMnF3NEJzZzU1RWtTUU5fc0ZXVnctSXFmYnZYdWhoQmtJbw?oc=5\" target=\"_blank\">Never",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOaVZFWnRhbU44Y2RwcDM1aVJXNmpBSzFkY0RiMDBRNUlxYjBGbEpEaVk5ZGxjdl9vYVNWLW5ZNFJ0RXFMT0otZlY2WlExOGtLcThoVmdMVU5sMlVfZ2gxTkl1R1NDclFqUkJRcnNLNl94b0wxdkhCbHhMMnR1aWkyVnBLQkt1aFVZQXVEazNzeEluMnF3NEJzZzU1RWtTUU5fc0ZXVnctSXFmYnZYdWhoQmtJbw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.555Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Sotheby's & Christie's Auctions",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvomj6s4-e5rg",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "€50 million for a Monet: ‘Iris’ sets French auction record after decades in hiding - The Times of India",
    "suggestedHook": "€50 million for a Monet: ‘Iris’ sets French auction record after decades in hiding",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMi6AFBVV95cUxQQlBjejlkWnRDbWpTOUw5TzloTk5PVm1vOWVjc3libXZuSmxjRmN6d3owT3d2eWdJQUJQckhNaFdoRm90dEtqR0loSlZEUWtXR1RPSVhhMDh1dG1IODhxTXJ3aTREbXpLbHpGSFpjU21mZnpQQ21teHc2SmNfb3l2YXVuUHAyeER1ZFBOZlM2VEgtUEU0NXd0YkFSdU5EYkJ4NWJNVFI0d3Q3YjdabmNpZGg0LXIzY1UzZHVINVJtRnY4ajhTQ3F2ZD",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQQlBjejlkWnRDbWpTOUw5TzloTk5PVm1vOWVjc3libXZuSmxjRmN6d3owT3d2eWdJQUJQckhNaFdoRm90dEtqR0loSlZEUWtXR1RPSVhhMDh1dG1IODhxTXJ3aTREbXpLbHpGSFpjU21mZnpQQ21teHc2SmNfb3l2YXVuUHAyeER1ZFBOZlM2VEgtUEU0NXd0YkFSdU5EYkJ4NWJNVFI0d3Q3YjdabmNpZGg0LXIzY1UzZHVINVJtRnY4ajhTQ3F2ZDdKMWFMc0l3X2lWMERxUEN3V0Q1YURlb0w3TjZfYXg50gHuAUFVX3lxTE9rVGlFUnBkREhNSUpoRHdCaTJmaHpoNU1FVS1Jd3F6cExWbDM2YzBzUzc2R2NpSDdyc19tdFo4SFZ6V213bUs0cDJBSjg2MTU0ZGV4dDMzRHJ1VUc0aFFMQm9uQmpYMGpKVHNZVUVtUmxoeVBXUVRYNThIUFhnTjhWbVMwTVF3d3dwRXFZMzFzVEctZHl0YTVQLTE2cjJLVVhqRmk4M1lEcFJ0dHhHM2MtbGo5eTByYXNkMzNZLW5SX2g3MXQ4RzlVVkdLdDJCLTIzMWhzVTJVdVU4b3NmNkhDT2o5RThoZlJfcldlZXc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:14:57.556Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Sotheby's & Christie's Auctions",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombspw-13",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 91,
    "rankingTier": "A",
    "originalTitle": "Bugatti becomes the latest supercar brand to bet on Miami real estate - IslanderNews.com",
    "suggestedHook": "Bugatti becomes the latest supercar brand to bet on Miami real estate - IslanderNews.com",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMi8AFBVV95cUxNdXRWVV9WWVJMZ3Q0ZUxmTHZwbDcxR3kxS1BPS0l5V1E5ZGQwUW5LWXYzdFRST251THV6dXh6TVFya1NmMHRfcGltNDZuaktZQTFDcjEwTTVMbHo3bm44NmVMSVVXdzdSTUxheWxUYmVpR0c0S2wwODFTcHZuR2RoeHREVjI5SGlhc3U3Vmd1RmpSMHVCb1N1Z1U4RWFkdHh6cmF2dll1bnRLOXVVOXdGWFNEOGNMcTNzZkhILTFONFZXSUM4WFdqeF",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNdXRWVV9WWVJMZ3Q0ZUxmTHZwbDcxR3kxS1BPS0l5V1E5ZGQwUW5LWXYzdFRST251THV6dXh6TVFya1NmMHRfcGltNDZuaktZQTFDcjEwTTVMbHo3bm44NmVMSVVXdzdSTUxheWxUYmVpR0c0S2wwODFTcHZuR2RoeHREVjI5SGlhc3U3Vmd1RmpSMHVCb1N1Z1U4RWFkdHh6cmF2dll1bnRLOXVVOXdGWFNEOGNMcTNzZkhILTFONFZXSUM4WFdqeFVOMWRlRWMtZGxCZVNkZkY1aXNKSDNoX1FlaXBQTW5udjJ4dWs2Mms?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.740Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombspu-8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less - CarBuzz",
    "suggestedHook": "Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less - CarBuzz",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiaEFVX3lxTE5BSnJxV3c1U1lBSkN6eTVYaEZaNFExVHQxTUFRdTE1TVRGMHp4VUdLbGUwbU9ZU3BYem1SSndSbGVkYVVOY0Q5OEp3bjVaeWltVnlTSUdOdE93N3U0V0ZSZnNXMHlLbFpm?oc=5\" target=\"_blank\">Ferrari Luce Gets A US Price Tag, And We'd Rather Have Its V12 Sibling For $100k Less</a>  <font color=\"#6f",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5BSnJxV3c1U1lBSkN6eTVYaEZaNFExVHQxTUFRdTE1TVRGMHp4VUdLbGUwbU9ZU3BYem1SSndSbGVkYVVOY0Q5OEp3bjVaeWltVnlTSUdOdE93N3U0V0ZSZnNXMHlLbFpm?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.738Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsqf-85",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ferrari’s First EV Costs $560,800—$122,000 More Than Its V12 SUV - MotorBiscuit",
    "suggestedHook": "Ferrari’s First EV Costs $560,800—$122,000 More Than Its V12 SUV - MotorBiscuit",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMikwFBVV95cUxQQy1hVVdJWmlraFpSNk1vNEpDckRCekw3U2xlNmEta3Fta2VLMm1jVWlfa2VZd3BOcVFabXE2NkVKTW9JRjdjc083eHBySGJJelduQUhYZWFkdmtYMUlKeTNKYVRiZ1lIYXowNGY1ck9WNUZhekRrSzk3WHJrM0xlY1RBb3ZMTW1BWkxNSlFORFpXT0E?oc=5\" target=\"_blank\">Ferrari’s First EV Costs $560,800—$122,000 More ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQQy1hVVdJWmlraFpSNk1vNEpDckRCekw3U2xlNmEta3Fta2VLMm1jVWlfa2VZd3BOcVFabXE2NkVKTW9JRjdjc083eHBySGJJelduQUhYZWFkdmtYMUlKeTNKYVRiZ1lIYXowNGY1ck9WNUZhekRrSzk3WHJrM0xlY1RBb3ZMTW1BWkxNSlFORFpXT0E?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.759Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvombsqj-96",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Nuvolari Lenard Unveils New 380-Foot Superyacht Designed For Life At Sea - Forbes",
    "suggestedHook": "Nuvolari Lenard Unveils New 380-Foot Superyacht Designed For Life At Sea - Forbes",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMixAFBVV95cUxOR0lZcFo5dGozRnhwT0dVT1NWNll0b0dtSDlGa21UNUktMXBOZGxvaGI0Zjdack9uWnllX1diRWFRSTQ2Ukt3VzdRbHhaRk9TS0hFMHRVS0d6RmFxQ3hLR0tsY2FLM3BpYVppU0hyc0E3MGFrQVJzVWt1RnIwNlpLamdSb3hhb21MbTY0MS1UbVhnR25FRklIZXcyYmNmUVhQYmxhSnRWdVpMVFlvVnhCSFJLa1NxUTdnNkpKY3NoX2xKX3VE?oc=5\"",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOR0lZcFo5dGozRnhwT0dVT1NWNll0b0dtSDlGa21UNUktMXBOZGxvaGI0Zjdack9uWnllX1diRWFRSTQ2Ukt3VzdRbHhaRk9TS0hFMHRVS0d6RmFxQ3hLR0tsY2FLM3BpYVppU0hyc0E3MGFrQVJzVWt1RnIwNlpLamdSb3hhb21MbTY0MS1UbVhnR25FRklIZXcyYmNmUVhQYmxhSnRWdVpMVFlvVnhCSFJLa1NxUTdnNkpKY3NoX2xKX3VE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.763Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvombsqk-98",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Designed specifically for a billionaire family who cruises the high seas for months, this 380-foot superyacht concept comes with a mammoth owner’s deck, spa, beach club and a pickleball court for dinking - Luxurylaunches",
    "suggestedHook": "Designed specifically for a billionaire family who cruises the high seas for months, this 380-foot superyacht concept comes with a mammoth owner’s deck, spa, beach club and a pickleball court for dinking - Luxurylaunches",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMihwFBVV95cUxPRnRVekpwQnRpd1Q2dnJjcS1mUFByUjkwWTBJaFVDVzJnNnFIbmJuRnNMRFd2OFNtTndFejYwZk5VUzFiaGZfYkI1Skw1dzduRE1QbGtZb1Y4bXBPdzRwTk45al9kVXpSZG1JVGdmN0I4NXJmWTZnSXZqT0R0QkR1Z0IwWWNsSDQ?oc=5\" target=\"_blank\">Designed specifically for a billionaire family who cruises the h",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPRnRVekpwQnRpd1Q2dnJjcS1mUFByUjkwWTBJaFVDVzJnNnFIbmJuRnNMRFd2OFNtTndFejYwZk5VUzFiaGZfYkI1Skw1dzduRE1QbGtZb1Y4bXBPdzRwTk45al9kVXpSZG1JVGdmN0I4NXJmWTZnSXZqT0R0QkR1Z0IwWWNsSDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.764Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvombsqm-100",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "\"I will sell the first €1 BILLION superyacht!\" | Tommy Chiabra on yacht brokerage - SuperYacht Times",
    "suggestedHook": "\"I will sell the first €1 BILLION superyacht!\" | Tommy Chiabra on yacht brokerage - SuperYacht Times",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMif0FVX3lxTFBZMGJOLXhrU09BbEIteXhLdHhEaFJvZVIzXzlTRFRxWC12NDVoNGl4dHJkSzdGS2dBUEhBbEF1dml5VElpN2d3eVFTTkc2ekRiWTdMYWJUWlBNQkRGYzJXb01DN0NraUdzaHhMVkliTmp0Nlg2YWJlOHpTcjB6d0k?oc=5\" target=\"_blank\">\"I will sell the first €1 BILLION superyacht!\" | Tommy Chiabra on yacht brok",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBZMGJOLXhrU09BbEIteXhLdHhEaFJvZVIzXzlTRFRxWC12NDVoNGl4dHJkSzdGS2dBUEhBbEF1dml5VElpN2d3eVFTTkc2ekRiWTdMYWJUWlBNQkRGYzJXb01DN0NraUdzaHhMVkliTmp0Nlg2YWJlOHpTcjB6d0k?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.766Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Superyachts",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvombspt-7",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Introducing &#8211; Chinese Brand Atelier Mephalie Launches its Minute Repeater Collection, Priced to a Tenth of What Europe Does&#8230;",
    "suggestedHook": "Introducing &#8211; Chinese Brand Atelier Mephalie Launches its Minute Repeater Collection, Priced to a Tenth of What Europe Does&#8230;",
    "summary": "Let&#8217;s have a quick overview of minute repeaters recently launched. Gérald Genta Geneva Minute Repeater: about CHF 320,000. Piaget Polo Minute Repeater: about EUR 400,000. Bulgari Octo Finissimo Minute Repeater 37mm: EUR 195,000. And while we can continue this list forever, you won&#8217;t be able to find much und",
    "sourceUrl": "https://monochrome-watches.com/introducing-chinese-brand-atelier-mephalie-launches-its-minute-repeater-collection-priced-to-a-tenth-of-what-europe-does/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.737Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Monochrome Watches",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/10/Chinese-Brand-Atelier-Mephalie-Minute-Repeater-Collection-Accessible-5-600x237.jpg",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsq6-52",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Think It'll Fetch? - InsideEVs",
    "suggestedHook": "Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Think It'll Fetch? - InsideEVs",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMidEFVX3lxTE9tNEtoLUUzbEZUV2g3Rmd1d2VhS3ZGeVM3S2d2OGpuMW9reFMxa1ZVQWlRY2hqNWxUUlMzN3RKYWlaS2dkRFFiOTdpWGJLbXVSOGxkeXFFWkpramkzd0dvVTY4UnNtOU8wVVQ3aDZrTTh0NFZo?oc=5\" target=\"_blank\">Ferrari Is Auctioning Off The First Example Of its First Electric Car. How Much Do You Thin",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9tNEtoLUUzbEZUV2g3Rmd1d2VhS3ZGeVM3S2d2OGpuMW9reFMxa1ZVQWlRY2hqNWxUUlMzN3RKYWlaS2dkRFFiOTdpWGJLbXVSOGxkeXFFWkpramkzd0dvVTY4UnNtOU8wVVQ3aDZrTTh0NFZo?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.750Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsq8-60",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Kimi Antonelli on the verge of the World Championship title: Vettel’s record missed – when will he drive for Ferrari? - SPEEDWEEK.com",
    "suggestedHook": "Kimi Antonelli on the verge of the World Championship title: Vettel’s record missed – when will he drive for Ferrari? - SPEEDWEEK.com",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMi5gFBVV95cUxOYlpSWGRFOGpWRFV6MkotYndkSFhtQW15RXp0b0o1UXpwZk1XcGMwUXgxWWRFNW13NjRualkxcU9KOUtmLTMwX3J6NmdNcEw3SWF5WFRHakRvdjJmazhfVm1pVWVZNG5ma0I1bW1hWTJ0NWFIWFZqT0ppZ09TUllzZkRIYnRmbGw3MnFmNng3SXJsX3NLa1ZrYm12bUxlN0xwcm5kOV9aQl9iZndzc2t3RWdpVHRibi0yUF9zcEtpZkhfbHZHTk45Vm",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOYlpSWGRFOGpWRFV6MkotYndkSFhtQW15RXp0b0o1UXpwZk1XcGMwUXgxWWRFNW13NjRualkxcU9KOUtmLTMwX3J6NmdNcEw3SWF5WFRHakRvdjJmazhfVm1pVWVZNG5ma0I1bW1hWTJ0NWFIWFZqT0ppZ09TUllzZkRIYnRmbGw3MnFmNng3SXJsX3NLa1ZrYm12bUxlN0xwcm5kOV9aQl9iZndzc2t3RWdpVHRibi0yUF9zcEtpZkhfbHZHTk45Vmx1VWFxUEl4V25CbDJiRnhKZWVZUmR3UkdieDhNZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.752Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsqb-71",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "F1 United States GP: Ferrari completes perfect practice record as Hamilton tops FP3 - Autosport",
    "suggestedHook": "F1 United States GP: Ferrari completes perfect practice record as Hamilton tops FP3 - Autosport",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiiAFBVV95cUxPOF9zdDJhWnZYU3dRQUotSjlvRXRUZDhXZksxVm9naFU3b29ydGlKSzZOTXUxWXpRQVMzbWl4WXd4eFhBMUlzbV91RzI4ZU1RMVJFVFlBUGFydjFla0VMa0ZtYXBsYUxhaXZiX0FzODR0NkwwV1JSM0xRQVhWYUw3QWNtSklrOGdK?oc=5\" target=\"_blank\">F1 United States GP: Ferrari completes perfect practice record ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPOF9zdDJhWnZYU3dRQUotSjlvRXRUZDhXZksxVm9naFU3b29ydGlKSzZOTXUxWXpRQVMzbWl4WXd4eFhBMUlzbV91RzI4ZU1RMVJFVFlBUGFydjFla0VMa0ZtYXBsYUxhaXZiX0FzODR0NkwwV1JSM0xRQVhWYUw3QWNtSklrOGdK?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.755Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsqd-79",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "A Ferrari F50 nearly 30 years old is still worth over $20 million. - Vietnam.vn",
    "suggestedHook": "A Ferrari F50 nearly 30 years old is still worth over $20 million. - Vietnam.vn",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiiAFBVV95cUxQZC1CQVMxNlgwY0dCVzlubU43RWRTUk5oX3REemptNHBvZm1DelVnWTEyUElMMXlkeU5mVmdhWU44c2xsZnpWQm42cHhyYlZuWnFkb2tiV2llX0xxbFAtRk1ldjladkVLeFhUYURocUQyWnJqZDBfX05MWlVBbURJRFYyTjNkbXpP?oc=5\" target=\"_blank\">A Ferrari F50 nearly 30 years old is still worth over $20 milli",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQZC1CQVMxNlgwY0dCVzlubU43RWRTUk5oX3REemptNHBvZm1DelVnWTEyUElMMXlkeU5mVmdhWU44c2xsZnpWQm42cHhyYlZuWnFkb2tiV2llX0xxbFAtRk1ldjladkVLeFhUYURocUQyWnJqZDBfX05MWlVBbURJRFYyTjNkbXpP?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.757Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsqg-87",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Drake celebrates 40th birthday with Backstreet Boys performance, Ferrari and $1 million giveaway - The Express Tribune",
    "suggestedHook": "Drake celebrates 40th birthday with Backstreet Boys performance, Ferrari and $1 million giveaway - The Express Tribune",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiywFBVV95cUxOUmxZWE9ncnY1aC14a0syR3hSckUtNnItYU9uNUc4dFJoUGVtZUZfdWpqY2NuMzMzUUtGZ3pLeG1FWUhFMmVlVko3OHFoTkllSFhkVEM3SEcxS05zZ0cwNE11Uktjc3VpNzluX0hpM1cxQkJrejN2ekowZTY3Y1hTbE8ycVdkMkxiNGUtQU83OUZXT2lDbjJDb1hoOUhzVTBrSG1SRHpEYWU1YlFxaXZvTTVBX1hnZkRWQjFkNHJuRVVKaGUyU2Uwcz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOUmxZWE9ncnY1aC14a0syR3hSckUtNnItYU9uNUc4dFJoUGVtZUZfdWpqY2NuMzMzUUtGZ3pLeG1FWUhFMmVlVko3OHFoTkllSFhkVEM3SEcxS05zZ0cwNE11Uktjc3VpNzluX0hpM1cxQkJrejN2ekowZTY3Y1hTbE8ycVdkMkxiNGUtQU83OUZXT2lDbjJDb1hoOUhzVTBrSG1SRHpEYWU1YlFxaXZvTTVBX1hnZkRWQjFkNHJuRVVKaGUyU2UwczkzOA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.760Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsqh-90",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Barely Driven Ferrari 499P Modificata Heads To Auction For Over $8 Million - Motor1.com",
    "suggestedHook": "Barely Driven Ferrari 499P Modificata Heads To Auction For Over $8 Million - Motor1.com",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiggFBVV95cUxOWGp2R2pDcFFSS3Bjbzg5aW51NE9CREx5NkJHaXRTZ1M3WTNRbkJVb1ZGRUVxNl9YaXc4ZzE3c3I5RGpacG5PYlRRSDFxOWx3WXRBeW9qU0xvcjJCQV9KOHc3SXQ5TXE4UVFaSWlSeXVzT3dtRlh5NkpWS0hyd1hLZVhR?oc=5\" target=\"_blank\">Barely Driven Ferrari 499P Modificata Heads To Auction For Over $8 Mill",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOWGp2R2pDcFFSS3Bjbzg5aW51NE9CREx5NkJHaXRTZ1M3WTNRbkJVb1ZGRUVxNl9YaXc4ZzE3c3I5RGpacG5PYlRRSDFxOWx3WXRBeW9qU0xvcjJCQV9KOHc3SXQ5TXE4UVFaSWlSeXVzT3dtRlh5NkpWS0hyd1hLZVhR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.761Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "A"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombspz-25",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Exclusive: TG rides shotgun in the Bugatti Tourbillon Reviews 2026 - Top Gear",
    "suggestedHook": "Exclusive: TG rides shotgun in the Bugatti Tourbillon Reviews 2026 - Top Gear",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiggFBVV95cUxNaVJIWVBTV2VXZHppX3g1TFpwTDFhRGtWc1RMYmFkWGk4UzBEZE8wNFFjSzlTTmNsSE1PVXZ2OXYxSndIak1VN0pyazFTVTR1T2ZBakFMQkdBNmtqOGJibkxMcTlkaFlfZzgyNUhHQ1NBTWpTU3FMa2hJcDVGMC1qLWd3?oc=5\" target=\"_blank\">Exclusive: TG rides shotgun in the Bugatti Tourbillon Reviews 2026</a> ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNaVJIWVBTV2VXZHppX3g1TFpwTDFhRGtWc1RMYmFkWGk4UzBEZE8wNFFjSzlTTmNsSE1PVXZ2OXYxSndIak1VN0pyazFTVTR1T2ZBakFMQkdBNmtqOGJibkxMcTlkaFlfZzgyNUhHQ1NBTWpTU3FMa2hJcDVGMC1qLWd3?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.743Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mvombsq7-58",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Saturday Girls' Soccer Wrap: Phillips, Ferrari lead Churchville-Chili to Class AA semifinals; Peters scores overtime golden goal for Brighton - Pickin' Splinters",
    "suggestedHook": "Saturday Girls' Soccer Wrap: Phillips, Ferrari lead Churchville-Chili to Class AA semifinals; Peters scores overtime golden goal for Brighton - Pickin' Splinters",
    "summary": "<a href=\"https://news.google.com/rss/articles/CBMiiAJBVV95cUxPQlM2NnVqLXlkV2N2eTNYSkZaaktsaTRtQ2ozMjhjX1NPYm5NMXRxSE9rZzVwc0xPWkRHMFNQcUlBTmMzWmloY1Vzd3FlZG5ESGgtcWhFcGR3U3NQTjR1RG94eWV4SDFpUUZuMkhudG43WWVsdjFvWndaZmZRNGo0Wm1GU3hLakR6RHRPUWg3aGtXY3FZS1B6aWxiMmF1NU1JTWptRS0tUUhRcnVIcTN2aG4wajAzOHVrNUNZZ2lQNHY0WXJOaHNrRk",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPQlM2NnVqLXlkV2N2eTNYSkZaaktsaTRtQ2ozMjhjX1NPYm5NMXRxSE9rZzVwc0xPWkRHMFNQcUlBTmMzWmloY1Vzd3FlZG5ESGgtcWhFcGR3U3NQTjR1RG94eWV4SDFpUUZuMkhudG43WWVsdjFvWndaZmZRNGo0Wm1GU3hLakR6RHRPUWg3aGtXY3FZS1B6aWxiMmF1NU1JTWptRS0tUUhRcnVIcTN2aG4wajAzOHVrNUNZZ2lQNHY0WXJOaHNrRkkyWXJ5YWdBTmQwYjcxRmR6YXlMeTdsZTl1X0taelJsbWtNOFU2QktQS1A3cV8tZTFDZmhIVm54alh4YklidFE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.751Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Google News Motors (Ferrari/Bugatti)",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvombspo-5",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: Monaco Legend Group's Fall Auction Is A Return To The Classics",
    "suggestedHook": "Auctions: Monaco Legend Group's Fall Auction Is A Return To The Classics",
    "summary": "It seems like everyone is chasing modern indies and big ticket numbers these days, but Monaco is where the vintage deals (and grails) are still around.",
    "sourceUrl": "https://www.hodinkee.com/articles/auction-monaco-legend-group-fall-2026",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-10-26T02:09:12.732Z",
    "validityHours": 24,
    "specsPreview": {
      "fonte": "Hodinkee",
      "curadoria": "Protocolo Scout 24h",
      "tier": "B"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/images/7f1b4a89-60e9-46c1-a972-865a7abe1dac/Hero_MLG.jpg?ixlib=rails-1.1.0&amp;fm=jpg&amp;q=55&amp;auto=format&amp;usm=12&amp;w=2000",
    "status": "available"
  },
  {
    "id": "pauta-rr-1",
    "source": "Robb Report Motors",
    "sourceCategory": "Motors",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "rankingScore": 96,
    "originalTitle": "Koenigsegg Jesko Absolut Crushes 0-400-0 km/h World Record in 27.83 Seconds",
    "suggestedHook": "Koenigsegg Jesko Absolut: O Monstro Sueco de 1.600 cv que Pulverizou o Recorde Mundial de 0-400-0 km/h em 27,83 Segundos",
    "summary": "Christian von Koenigsegg colocou o Jesko Absolut na pista militar sueca e aniquilou a marca da Rimac por quase 1 segundo inteiro, utilizando combustível E85 e aerodinâmica de coeficiente 0.278.",
    "sourceUrl": "https://robbreport.com/motors/cars/koenigsegg-jesko-absolut-0-400-0-record-1235661000/",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Hoje às 14:10",
    "createdAt": "2026-10-25T23:09:11.731Z",
    "validityHours": 24,
    "specsPreview": {
      "potencia": "1.600 cv (em E85)",
      "recorde": "0-400-0 km/h em 27,83s",
      "cambio": "LST Light Speed Transmission de 9 marchas sem embreagem",
      "coeficiente": "Cx 0.278"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-rr-2",
    "source": "Classic Driver",
    "sourceCategory": "Motors",
    "badgeColor": "border-red-500/40 text-red-400 bg-red-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "rankingScore": 93,
    "originalTitle": "Gordon Murray Automotive Unveils T.50s Niki Lauda with 12,100 RPM V12",
    "suggestedHook": "GMA T.50s Niki Lauda: O Bólido de Pista de 852 kg com Turbina de Vácuo Traseira e V12 Cosworth que Gira a 12.100 RPM",
    "summary": "Apenas 25 felizardos mundiais terão o monstro de Gordon Murray. Uma ventoinha de 400 mm suga o ar sob o assoalho gerando 1.500 kg de efeito solo sem a necessidade de asas gigantescas.",
    "sourceUrl": "https://www.classicdriver.com/en/article/cars/gordon-murray-t50s-niki-lauda",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Hoje às 11:45",
    "createdAt": "2026-10-25T21:09:11.731Z",
    "validityHours": 24,
    "specsPreview": {
      "motor": "Cosworth V12 3.9L Naturalmente Aspirado",
      "rotacao": "12.100 RPM",
      "peso": "852 kg",
      "tiragem": "25 exemplares numerados"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-rr-3",
    "source": "Evo Magazine",
    "sourceCategory": "Motors",
    "badgeColor": "border-orange-500/40 text-orange-400 bg-orange-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "rankingScore": 95,
    "originalTitle": "Pagani Huayra R Evo Unveiled with 900 HP V12 and Longtail Aero",
    "suggestedHook": "Pagani Huayra R Evo: O Monstro Longtail de 900 cv com V12 Aspirado de 9.200 RPM que Gera 1.000 kg de Downforce a 320 km/h",
    "summary": "Horacio Pagani esticou a carroceria do Huayra em 19 centímetros inspirando-se nos protótipos de Le Mans dos anos 1970, instalando monocoque de Carbo-Titânio HP62 G2.",
    "sourceUrl": "https://www.evo.co.uk/pagani/huayra-r-evo",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Hoje às 09:15",
    "createdAt": "2026-10-25T19:09:11.731Z",
    "validityHours": 24,
    "specsPreview": {
      "motor": "V12-R Evo 6.0L Aspirado HWA",
      "potencia": "900 cv a 8.750 RPM",
      "chassi": "Carbo-Titânio HP62 G2 em autoclave a 6 bar",
      "downforce": "1.000 kg a 320 km/h"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=max&q=85&w=1800",
    "imageFocus": "bottom",
    "status": "available"
  },
  {
    "id": "pauta-rr-4",
    "source": "Top Gear UK",
    "sourceCategory": "Motors",
    "badgeColor": "border-zinc-500/40 text-zinc-300 bg-zinc-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "rankingScore": 94,
    "originalTitle": "Porsche 911 GT3 RS with Manthey Kit Sets 6:43 Lap at the Ring",
    "suggestedHook": "Porsche 911 GT3 RS Manthey Racing: A Máquina de 6min43s em Nürburgring com Calhas de Venturi em Carbono e Amortecedores de 4 Vias",
    "summary": "Em Meuspath, a divisão de competição da Porsche refinou a telemetria do GT3 RS adicionando calotas aerodinâmicas de fibra de carbono nas rodas traseiras e suspensão recalibrada para compressão milimétrica.",
    "sourceUrl": "https://www.topgear.com/car-news/supercars/manthey-porsche-911-gt3-rs",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Ontem às 18:30",
    "createdAt": "2026-10-25T12:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "tempoRing": "6:43.90 no Nordschleife",
      "downforce": "1.000 kg a 285 km/h",
      "amortecedores": "Coilover Manthey regulável em 4 vias",
      "homologacao": "Certificação de corrida FIA"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-hod-1",
    "source": "Hodinkee",
    "sourceCategory": "Watches",
    "badgeColor": "border-blue-500/40 text-blue-400 bg-blue-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "rankingScore": 94,
    "originalTitle": "Hands-On With The F.P. Journe Chronomètre Bleu Byblos In Tantalum",
    "suggestedHook": "F.P. Journe Chronomètre Bleu: A Rara Caixa de Tântalo com Mostrador Azul Espelhado que Disparou 400% no Mercado Secundário",
    "summary": "O metal tântalo funde a 3.000 graus e destrói brocas convencionais. François-Paul Journe domou o material para criar uma das peças mais cobiçadas pelos colecionadores mais discretos do planeta.",
    "sourceUrl": "https://www.hodinkee.com/articles/fp-journe-chronometre-bleu-hands-on",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Hoje às 09:30",
    "createdAt": "2026-10-25T19:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "caixa": "Tântalo polido de alta densidade",
      "calibre": "1304 em Ouro Rosa 18k sólido",
      "reserva": "56 horas com duplo tambor",
      "cotacao": "US$ 95.000 (mercado secundário)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-hod-2",
    "source": "Monochrome Watches",
    "sourceCategory": "Watches",
    "badgeColor": "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "rankingScore": 95,
    "originalTitle": "A. Lange & Söhne Datograph Perpetual Tourbillon Honeygold Lumen",
    "suggestedHook": "A. Lange & Söhne Datograph Honeygold Lumen: A Obra-Prima Saxônica de 516 Componentes que Brilha no Escuro sob Safira Fosforescente",
    "summary": "A manufatura de Glashütte uniu sua exclusiva liga de Honeygold com o tratamento luminescente integral do mostrador de safira fumê e um turbilhão com parada de segundos patenteada.",
    "sourceUrl": "https://monochrome-watches.com/a-lange-sohne-datograph-perpetual-tourbillon-honeygold-lumen/",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Ontem às 21:00",
    "createdAt": "2026-10-25T15:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "liga": "Honeygold 18k patenteado (mais duro que ouro comum)",
      "calibre": "L952.4 manufaturado à mão",
      "complicacoes": "Cronógrafo Flyback, Calendário Perpétuo e Turbilhão",
      "tiragem": "Limitado a 50 exemplares mundiais"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-hod-3",
    "source": "The Naked Watchmaker",
    "sourceCategory": "Watches",
    "badgeColor": "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "rankingScore": 97,
    "originalTitle": "Deconstruction of the Vacheron Constantin Les Cabinotiers Solaria",
    "suggestedHook": "Vacheron Constantin Les Cabinotiers: A Mecânica de 40 Complicações em Platina que Exigiu 8 Anos de Cálculo Astronômico em Genebra",
    "summary": "Criado no departamento fechado de encomendas sob medida da mais antiga manufatura contínua do mundo, o relógio calcula o tempo sideral, equações solares e marés gravitacionais lunares.",
    "sourceUrl": "https://www.vacheron-constantin.com/cabinotiers-solaria",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Hoje às 10:45",
    "createdAt": "2026-10-25T21:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "complicacoes": "40 complicações astronômicas",
      "caixa": "Platina 950 com gravura manual burilada",
      "componentes": "1.120 peças acabadas à mão",
      "tiragem": "Peça Única (Pièce Unique)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-hod-4",
    "source": "Quill & Pad",
    "sourceCategory": "Watches",
    "badgeColor": "border-amber-400/40 text-amber-300 bg-amber-400/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "rankingScore": 93,
    "originalTitle": "Rexhep Rexhepi Chronomètre Contemporain II in Rose Gold",
    "suggestedHook": "Rexhep Rexhepi Chronomètre Contemporain II: O Ateliê Independente de Genebra com Lista de Espera de 7 Anos e Chanfro Manual Absoluto",
    "summary": "Aos 36 anos, Rexhep Rexhepi comanda o ateliê Akrivia e esculpe pontes com medula de sabugueiro silvestre, atraindo comitês de bilionários que trocaram marcas consagradas pela pureza de sua bancada.",
    "sourceUrl": "https://quillandpad.com/rexhep-rexhepi-ccii",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Hoje às 08:30",
    "createdAt": "2026-10-25T18:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "RR02 de corda manual com segundos mortos",
      "mostrador": "Esmalte Grand Feu branco queimado a 820°C",
      "caixa": "Ouro Rosa 18k manufaturada por Jean-Pierre Hagmann",
      "reserva": "82 horas"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-soth-1",
    "source": "RM Sotheby's",
    "sourceCategory": "Auctions",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 97,
    "originalTitle": "The White Collection: Over 50 Rare Porsche Models Fetch Record $30 Million",
    "suggestedHook": "RM Sotheby's The White Collection: O Acervo Secreto de 56 Porsches Brancos Intactos que Arrematou US$ 30,5 Milhões em Houston",
    "summary": "Um colecionador anônimo passou 25 anos adquirindo apenas exemplares brancos imaculados, incluindo um 918 Spyder Weissach com interior azul iate arrematado por quase US$ 4 milhões.",
    "sourceUrl": "https://rmsothebys.com/en/auctions/wc23",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 15:20",
    "createdAt": "2026-10-26T00:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "volumeTotal": "US$ 30.540.000 sob o martelo",
      "loteEstrela": "Porsche 918 Spyder Weissach Package",
      "procedencia": "Acervo privado sem uso mantido em ambiente climatizado",
      "leiloeira": "RM Sotheby's Houston"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-forbes-1",
    "source": "Forbes Money",
    "sourceCategory": "Wealth",
    "badgeColor": "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 94,
    "originalTitle": "Billionaire Family Offices Boost Physical Gold and Art Allocations to Historic High",
    "suggestedHook": "O Relatório Reservado de Family Offices 2026: Por Que Fortunas Soberanas Estão Aumentando em 35% a Guarda de Ouro Físico e Peças Únicas",
    "summary": "Com a volatilidade dos mercados de dívida soberana e a erosão cambial, os maiores gestores de fortunas multigeracionais de Zurique, Londres e São Paulo migram posições para cofres de segurança máxima.",
    "sourceUrl": "https://forbes.com/billionaires/family-offices-wealth-preservation-report",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 08:00",
    "createdAt": "2026-10-25T18:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "alocacao": "Ativos Físicos tangíveis em alta de +35%",
      "jurisdicoes": "Suíça, Cingapura e Liechtenstein",
      "estrategia": "Preservação de capital multigeracional",
      "fonte": "Global Family Office Wealth Benchmark"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-chris-1",
    "source": "Christie's Geneva",
    "sourceCategory": "Auctions",
    "badgeColor": "border-teal-500/40 text-teal-300 bg-teal-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 96,
    "originalTitle": "The Blue Royal Diamond Sells for $44 Million at Christie's Geneva",
    "suggestedHook": "Christie's Genebra: O Diamante Azul Royal de 17.61 Quilates Arrematado por US$ 44 Milhões após Duelo Telefônico de 7 Minutos",
    "summary": "Uma das gemas mais perfeitas já catalogadas pelo Instituto Gemológico da América (GIA), o Blue Royal repousava em cofre particular há cinco décadas antes de reaparecer nas margens do Lago Léman.",
    "sourceUrl": "https://www.christies.com/the-blue-royal-diamond",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 12:00",
    "createdAt": "2026-10-25T20:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "peso": "17.61 quilates Fancy Vivid Blue",
      "pureza": "Internally Flawless (IF)",
      "arremate": "US$ 43.800.000 sob o martelo",
      "procedencia": "Coleção privada suíça mantida intacta por 50 anos"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-ad-1",
    "source": "Architectural Digest",
    "sourceCategory": "Architecture",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 91,
    "originalTitle": "Inside John Lautner's Restored Sheats-Goldstein Residence in Beverly Hills",
    "suggestedHook": "Sheats-Goldstein Residence: A Joia Brutalista de Concreto Angular e Vidro em Los Angeles Avaliada em US$ 100 Milhões",
    "summary": "A lendária obra de John Lautner suspensa sobre os cânions de Beverly Hills com teto perfurado por 750 pequenos discos de vidro que capturam a luz da Califórnia como constelações.",
    "sourceUrl": "https://www.architecturaldigest.com/story/sheats-goldstein-residence-john-lautner",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 13:00",
    "createdAt": "2026-10-25T22:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "arquiteto": "John Lautner (Discípulo de Frank Lloyd Wright)",
      "concepcao": "Concreto protendido e vidro estrutural sem caixilhos",
      "localizacao": "Crestwood Hills, Beverly Hills, EUA",
      "patrimonio": "Doada ao LACMA para preservação perpétua"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-ad-2",
    "source": "Wallpaper*",
    "sourceCategory": "Architecture",
    "badgeColor": "border-stone-400/40 text-stone-300 bg-stone-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "rankingScore": 92,
    "originalTitle": "Clifftop Minimalist Retreat in Mallorca by Studio MK27",
    "suggestedHook": "Villa sa Caleta em Maiorca: O Refúgio de Travertino e Concreto Esculpido na Falésia Balear Avaliado em € 38 Milhões",
    "summary": "Uma laje monolítica de 45 metros flutua sobre as águas turquesa das Ilhas Baleares, combinando brises em madeira teca e pátios sombreados por ciprestes e oliveiras centenárias.",
    "sourceUrl": "https://www.wallpaper.com/architecture/villa-mallorca-clifftop",
    "authorSlug": "henrique-vianna",
    "publishedTime": "Hoje às 07:15",
    "createdAt": "2026-10-25T17:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "area": "1.850 m² construídos em 8.000 m² de falésia",
      "materiais": "Travertino Navona e concreto aparente lavado",
      "privacidade": "Acesso privativo por túnel na rocha e heliponto",
      "avaliacao": "€ 38.000.000"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-boat-1",
    "source": "Boat International",
    "sourceCategory": "Marine",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "rankingScore": 95,
    "originalTitle": "Lürssen Delivers 122m Megayacht Kismet With Two Helipads and Cryotherapy Chamber",
    "suggestedHook": "Lürssen Kismet: O Megaiate de 122 Metros e US$ 3 Milhões por Semana com Heliponto Duplo e Câmara de Crioterapia Submarina",
    "summary": "Entregue pelo histórico estaleiro alemão de Bremen, a nova embarcação redefine a navegação transoceânica com design assinado pela Nuvolari Lenard e autonomia para cruzar o globo sem reabastecimento.",
    "sourceUrl": "https://www.boatinternational.com/yachts/news/lurssen-kismet-superyacht-delivery",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Hoje às 10:15",
    "createdAt": "2026-10-25T20:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "comprimento": "122 metros (400 ft)",
      "estaleiro": "Lürssen Werft, Bremen, Alemanha",
      "locacao": "A partir de € 3.000.000 / semana + despesas",
      "diferencial": "Spa balinês completo e câmara de crioterapia a -110°C"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-boat-2",
    "source": "Superyacht Times",
    "sourceCategory": "Marine",
    "badgeColor": "border-blue-400/40 text-blue-300 bg-blue-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "rankingScore": 93,
    "originalTitle": "Feadship 84m Obsidian: The Hybrid Eco-Superyacht with Carbon-Neutral Cruising",
    "suggestedHook": "Feadship Obsidian: O Monstro Híbrido de 84 Metros com Casco Otimizado por Inteligência Artificial e Baterias de 4.5 MWh na Holanda",
    "summary": "O estaleiro de Haarlem combinou geradores a biodiesel HVO com um banco de baterias equivalente a 45 carros elétricos, navegando 35 milhas náuticas em silêncio absoluto sem emitir um grama de fumaça.",
    "sourceUrl": "https://www.superyachttimes.com/yacht-news/feadship-obsidian-84m",
    "authorSlug": "gabriel-fontes",
    "publishedTime": "Ontem às 16:00",
    "createdAt": "2026-10-25T09:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "comprimento": "84.2 metros",
      "estaleiro": "Feadship, Holanda",
      "baterias": "4.5 MWh em fosfato de ferro-lítio",
      "autonomia": "5.500 milhas náuticas a 12 nós"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-fash-1",
    "source": "Vogue Business",
    "sourceCategory": "Fashion",
    "badgeColor": "border-rose-400/40 text-rose-300 bg-rose-500/10",
    "category": "Alta-Costura",
    "categorySlug": "estilo",
    "rankingScore": 94,
    "originalTitle": "Inside Hermès Secret Saddlery Workshop at 24 Rue du Faubourg Saint-Honoré",
    "suggestedHook": "Hermès Faubourg: O Ateliê Secreto em Paris Onde 30 Mestres Costuram Selas em Couro Barenia sob Linho Encerado a Mão desde 1837",
    "summary": "Sob a claraboia do lendário endereço parisiense, artesãos aplicam cera virgem de abelha em fios de linho e utilizam o ponto selê de duas agulhas cruzadas que nenhuma máquina industrial foi capaz de replicar.",
    "sourceUrl": "https://www.voguebusiness.com/fashion/inside-hermes-secret-saddlery",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Hoje às 11:00",
    "createdAt": "2026-10-25T21:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "couro": "Box Calf e Barenia com curtimento vegetal de carvalho",
      "tecnica": "Point sellier manual com linha de linho encerada",
      "tempoManufatura": "Mínimo de 32 horas de montagem por artesão",
      "procedencia": "Ateliê histórico de Pantin e Faubourg Saint-Honoré, Paris"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400",
    "status": "available"
  },
  {
    "id": "pauta-fash-2",
    "source": "BoF",
    "sourceCategory": "Fashion",
    "badgeColor": "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/10",
    "category": "Alta-Costura",
    "categorySlug": "estilo",
    "rankingScore": 92,
    "originalTitle": "Maison Moynat Reissues Archival 1902 Limousine Trunk with Curved Wood Frame",
    "suggestedHook": "Moynat Malle Limousine: O Baú Curvo de Madeira de 1902 Forjado sob Medida para o Teto dos Primeiros Torpedos Automotivos",
    "summary": "A lendária malleterie francesa recuperou moldes centenários em madeira de álamo vaporizada e revestimento em lona vegetal impermeabilizada com gutapercha, celebrando o nascimento das viagens motorizadas.",
    "sourceUrl": "https://www.businessoffashion.com/luxury/moynat-archival-trunks",
    "authorSlug": "clara-meirelles",
    "publishedTime": "Hoje às 09:00",
    "createdAt": "2026-10-25T19:09:11.732Z",
    "validityHours": 24,
    "specsPreview": {
      "madeira": "Álamo curvo sob vapor manual e ferragens em latão maciço",
      "tecido": "Lona impermeabilizada com laca vegetal histórica",
      "tiragem": "12 peças numeradas por ano",
      "procedencia": "Ateliê Moynat, Paris"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400",
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
