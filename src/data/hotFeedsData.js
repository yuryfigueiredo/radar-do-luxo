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
    "id": "pauta-live-supercarros-mvy13pid-kke1",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 94,
    "rankingTier": "S+",
    "originalTitle": "Ferrari’s brand value rises 14% to $17.7 billion in 2026 - The Supercar Blog",
    "suggestedHook": "Hipercarros: Ferrari’s brand value rises 14% to $17.7 billion in 2026",
    "summary": "Ferrari’s brand value rises 14% to $17.7 billion in 2026 The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOYnhVU1lzalVCZ0Q2cVVsZlFHdGpJOTdLLXlHMW5ucGVyc0xjVEZEcFI2WThqWXFwUTdHUkFBQjVoNWRueHNlS2p1Q0RVTDM2RjJxbFk1WG1mekJQaklSc0NLVlFtSEpYUS1XWEpEdzlVTzdLYUJVUklON2x4c1ZmTGM4V01xNUE1MmV2SUZR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.157Z",
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
    "id": "pauta-live-supercarros-mvy13pih-dzgj",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ferrari reveals luxury $4,300 fountain pen inspired by its bespoke supercars - Motorsport.com",
    "suggestedHook": "Hipercarros: Ferrari reveals luxury $4,300 fountain pen inspired by its bespoke supercars",
    "summary": "Ferrari reveals luxury $4,300 fountain pen inspired by its bespoke supercars Motorsport.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPT0p0UlZITnJoVTMyNXZ6cmNaUjhVSE50a2RKQzcxLVZ5NDF1SnhYdlFhaUtyMEpLd3lhTWJ2di1DRUZlZ01OcWlpSEwtbmNYRF9kbVJIcHhRQnY5blptOXA5XzRMV0xJenM0V1VlVDlNNVRFLTRCQUtfQXdveVVBZEw5OHNJcFBEbFBILVpYTzNIWmdIblByMUFFa0NaSTRxcExHTFRnZ0xoRlhOc1VHTnJGUXB6SEVVZGZn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.161Z",
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
    "id": "pauta-live-supercarros-mvy13pij-v5k7",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Floyd Mayweather to lose Bugatti and Ferrari cars after failing to pay $2.4million - AOL.com",
    "suggestedHook": "Hipercarros: Floyd Mayweather to lose Bugatti and Ferrari cars after failing to pay $2.4million",
    "summary": "Floyd Mayweather to lose Bugatti and Ferrari cars after failing to pay $2.4million AOL.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPbERwT2VidTFLV2N6N05qMVFObmdHNUNSdnpIRVg2UTByMGNjTkRFNGpIRUoxUVBVVnRWckRMN1pqcXRHYUJyMWVRd2FqQVdxUThacjBiaEs0MUJUeFF3RG0wUWZyT09RTWFoNENBT0tLTVdLNEFUbVg4SGJ0RVVXcWlZRmJqakJG?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.163Z",
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
    "id": "pauta-live-destinos-mvy13pjj-cfsb",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "This Candy-Themed Superyacht Is Surprisingly Chic - Forbes",
    "suggestedHook": "Náutica de Elite: This Candy-Themed Superiate Is Surprisingly Chic",
    "summary": "This Candy-Themed Superyacht Is Surprisingly Chic Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPY2pmel9HTHM5OUhOcEFFX3VGcmhFWG1rWHBHM0ZLcGJfc2dXazU1aDU0RG8xSDhSa2tTZzZLRFl0MHNYX0Qxc2ZfRWJfdGN4WkJvcXZDaEtmS0ZZaUgzMVdoYzZudVA3dmdHQk1jMnc0UW9FQnRjYVBMVTlibkhsUUlxRzhNR2c1V09sQmtrd2JUUlBkVXk0NG9KSlh5QUttenc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.199Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mvy13plm-xumf",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Legendary Art Collector Pauline Karpidas Is Auctioning Off Her Incredible Jewelry - Robb Report",
    "suggestedHook": "Patrimônio & Leilões: Legendary Art Collector Pauline Karpidas Is Auctioning Off Her Incredible Jewelry",
    "summary": "Legendary Art Collector Pauline Karpidas Is Auctioning Off Her Incredible Jewelry Robb Report",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNbXB0ZF9uRVQteTdkR1FVc3FDNjktemhNaVZaT3ZLeGlHb3pXZTlQNkRlVC1mVFFPN1IzT1EyVEJCY0RTWmN4VWRweUZFWURlVFd5TTd3T3lIbk1fLTZxNFBsWGhlUW5za0MzZDF1bUxSc0Izd2RxLTQwTGRqcmlLVWFaeWlsRFpMM25DdXMzdGRTNzd6MVpNajBUUzUteE91anc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.274Z",
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
    "id": "pauta-live-arquitetura-mvy13pky-7gbo",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club - VnExpress International",
    "suggestedHook": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club",
    "summary": "The ultra-lavish lifestyle of Saudi Crown Prince and billionaire who controls Ronaldo's club VnExpress International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOTnE4ek5lamxXZUNDcTJVSk16UGFXZjQyUDZmQ2lKNzNzMTVpUFQ4RHJ5OXJWMlNxc0s0aG5MQnF4MG5UMk5hOEZNaHFQS2Y2ZGlJZEY3Qkc4ZXdPVTA1SFRRUHpmVWE4QXF4MURjVjNLN1NnUDRJZ1VFeW8xQlRaRnFhTk0xMTg2bmFUaS14Tk5TcEZJT19oZ2VtUUZrODNPdFRPWG5ac2p4bTMzLWRicmw5Y0RESW51czNXdUNvVmtUQTVEcE50SDhIeDBRQW1IWk9ZQ2dieFlWdk54NDNsVEVOaWg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.250Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mvy13pjg-qt8a",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "The perfect accessory for Mark Zuckerberg’s superyacht - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph - Luxurylaunches",
    "suggestedHook": "The perfect accessory for Mark Zuckerberg’s Superiate - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph",
    "summary": "The perfect accessory for Mark Zuckerberg’s superyacht - Brabus has created a $20,490 electric hydrofoil that flies above the water at 28 mph Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFAwSVV5cHRPaWlUNjN3dF9kVzZxaHRqcDNlSFdBUzJtbnp2Zmh1SXJWanJhRXR4RGlCcjEtR3VMbGhNdWV3QUFtLTRyMDJlVE5ZY0NIS1pITlo1ZW1lajNMa3RFWTdUcUYxeXlTakVueWszMV9qNXdJ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.196Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvy13pi6-5s9w",
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
    "createdAt": "2026-11-01T16:12:45.150Z",
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
    "id": "pauta-live-relogios-mvy13pi8-zzlr",
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
    "createdAt": "2026-11-01T16:12:45.152Z",
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
    "id": "pauta-live-arquitetura-mvy13ph2-hg3j",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A $30 Million Naples Villa Brings Old-World Grandeur to Florida’s Gulf Coast",
    "suggestedHook": "Patrimônio & Leilões: A $30 Million Naples Villa Brings Old-World Grandeur to Florida’s Gulf Coast",
    "summary": "The Naples residence is embellished with Venetian murals, gold-leaf ceilings, and rich mahogany.",
    "sourceUrl": "https://robbreport.com/shelter/homes-for-sale/naples-florida-lavish-estate-1238798763/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-01T16:12:45.110Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/3200-Green-Dolphin-Lane_Library.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mvy13phx-jsdk",
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
    "createdAt": "2026-11-01T16:12:45.141Z",
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
