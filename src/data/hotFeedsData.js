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
    "id": "pauta-live-destinos-mwes0bdj-2gj3",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "A Greek shipping billionaire was so impressed by his new 154-foot superyacht that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom - Luxurylaunches",
    "suggestedHook": "A Greek shipping billionaire was so impressed by his new 154-foot Superiate that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom",
    "summary": "A Greek shipping billionaire was so impressed by his new 154-foot superyacht that he immediately dropped a massive $54.5 million on a 197-foot replacement featuring a crazy glass-bottom pool that functions as a skylight for the master bedroom Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3AJBVV95cUxOVFN1Wi11NDlmZUJjUm1QWnRpNnVidy1hUDdNMGpXRFI3VUcxLTl5QkZ0WUlsRE1ZQmR5RWF2THc4LXdqTU84NmVYVWZJRW1Zcll3bERqcjM3c2otOU44QnBPODNNbVJzQUJub24wWkNzaUdzOFBnU0lfaWgzVFF4Q3VMRjg3d21hS0x3eUZrS3Y4TkY1UHRHcDhpdy0zRzlIS3p5dUQzVnhhUHR0aDRrcjcyelo1Xy1CY0xZQ3NYaWl5czNRSFk2eHlIT3N2cGxXNThtdVRYdDVUUmNpRW5qWmRjZ1hzQnVDTWl4RTZUYk1CTE91SlZyTU1ybWFnUVloWTFsRjVITVNGWkxrSHE2cHBpel9ELWU0ZnYxdlo2MGJ2bUh2MHhUQUR3M05WVl9qYmx1M3hFbEdOVDZwZ0dPdm9ocTJLTk4xS0lNZ09semR0TGRVYUx4VE8wbmo?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:15.319Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwes0bm8-ni33",
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
    "createdAt": "2026-11-13T09:30:15.632Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwes0bsb-v8hq",
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
    "createdAt": "2026-11-13T09:30:15.851Z",
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
    "id": "pauta-live-supercarros-mwes0auh-dibq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Ferrari Luce Wins Golden Steering Wheel Innovation Award 2026 - Ferrari",
    "suggestedHook": "Ferrari Luce: O Dilema de US$ 500k entre a Nova Era Híbrida e a Tradição dos Motores V12 Aspirados",
    "summary": "A Ferrari coloca em teste o apetite de seus clientes tradicionais em uma encruzilhada mecânica onde o rugido de 12 cilindros em 9.000 RPM permanece como o supremo refúgio tátil.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSzJncGVqMkwtNjBnTmhIX2RxQ01IQTJtVkdHbGZ1TURVenl1dm5FdkZRZk50OUQ2bDVSbTNNOEpqYkNrTEFUY2NNQmdrUWpEcm93S0YzcDFzeXJ5S0ZtQ0J4REJodUtGV0JMUVJ0Q1RvZ05zbENQb0JaaWVPNHdjdlowWlI1RU9RLWU2YVV1RGpVNDI5N2JfMlc2VTcySlVHbFMzeFVrVQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.633Z",
    "validityHours": 24,
    "specsPreview": {
      "avaliacao": "Faixa de US$ 450.000 a US$ 550.000",
      "arquitetura": "V12 aspirado clássico vs. Híbrido avançado",
      "peso": "Alívio extensivo com fibra de carbono",
      "telemetria": "Maranello Pure Dynamics"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwes0azz-jbxv",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "This Chinese Hypercar Just Set The Record For The World’s Fastest Production Automobile - Maxim",
    "suggestedHook": "Hipercarros: This Chinese Hypercar Just Set The Record For The World’s Fastest Production Automobile",
    "summary": "This Chinese Hypercar Just Set The Record For The World’s Fastest Production Automobile Maxim",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxORHJ3ODZwQ0otNjhwY3pLNEpVMHN2RWlwQkNxbk9kOUwzT1dpRkwyQmRYLTRZM3loWnBuOUZlU3A4WWVDTm1NS0JkTWxjMHNGTDRXaWZjQXFyUEFZY1JZNWtlVlRsUldCQXZ0NmZmSXJrN2FPMG9FbzlvWW5NSlNxc2NLVXoyMFV6R3Fib21BajBULXNmSU9HaDFpUEF1endwc0lpX3NyMHU0SmM0?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.831Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1766353134008-bb3b8b99ddd2?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwes0b23-2yi5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The new records set by Toyota's Hypercar trio with WEC 2026 title - Motorsport.com",
    "suggestedHook": "Hipercarros: The new records set by Toyota's Hypercar trio with WEC 2026 title",
    "summary": "The new records set by Toyota's Hypercar trio with WEC 2026 title Motorsport.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOdklISkxoRzRRZ1RsSmZVOTgwc3BDX3lyeHF4VHBOc2ZEVTd6X2dxcVRVOEc0bVRhcl9laFJsRF94b0J2XzRvbWt3Q05MQlBsU25oTEIzRXVONFRvOUZWbE8taGliSW4wQ2tKRmJ5WVByUGRlNDBMNE9oMVRYTEJPdmtISGttdnpJbHZIZ01Odmk1TWhNdm8tSGFTeFY5T2lielJOSnlXRktlc3JqSzJn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.907Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwes0af7-xos7",
    "source": "Robb Report Global",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Audi Reveals How Much Its Nuvolari Supercar Will Cost",
    "suggestedHook": "Nuvolari Lenard 380: O Gigante Transoceânico de 115 Metros Projetado para Expedições Autônomas de Longo Curso",
    "summary": "O renomado estaleiro italiano apresenta um conceito naval monumental de 380 pés com casco de deslocamento de aço, spa privativo e autonomia transatlântica ininterrupta.",
    "sourceUrl": "https://robbreport.com/motors/cars/audi-nuvolari-price-us-availability-revealed-1238837476/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.083Z",
    "validityHours": 24,
    "specsPreview": {
      "comprimento": "380 pés (115 metros)",
      "estaleiro": "Nuvolari Lenard (Itália)",
      "autonomia": "Mais de 6.000 milhas náuticas",
      "propulsao": "Diesel-elétrica de baixa emissão acústica"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/audi-nuvolari-01.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwes0al9-o219",
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
    "createdAt": "2026-11-13T09:30:14.301Z",
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
    "id": "pauta-live-arquitetura-mwes0aln-rh61",
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
    "createdAt": "2026-11-13T09:30:14.315Z",
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
    "id": "pauta-live-arquitetura-mwes0br9-ipzw",
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
    "createdAt": "2026-11-13T09:30:15.813Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mwes0anz-m6j8",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "suggestedHook": "Alta Relojoaria: Industry News – Richemont Reports Strong First Semester 2026, Sales up by 17%",
    "summary": "Richemont, the Swiss luxury powerhouse, pursues its 2026 fiscal year on a strong note. For the first semester ended 30 September 2026, the group reported sales of EUR 12.3 billion, up by 17% at constant rates (+16% actual). The second quarter growth was sustained at +13% after a particularly strong first quarter in",
    "sourceUrl": "https://monochrome-watches.com/richemont-reports-strong-first-semester-2026-sales-up-by-17-industry-news/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:14.399Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/07/richemont-group-results-sales-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwes0brg-p1kx",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "A rare 24-carat Bulgari Pink diamond that had remained with the same family since the 1950s has sold for - The Times of India",
    "suggestedHook": "A rare 24-carat Bulgari Pink diamond that had remained with the same family since the 1950s has sold for",
    "summary": "A rare 24-carat Bulgari Pink diamond that had remained with the same family since the 1950s has sold for The Times of India",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggNBVV95cUxQSmo0QVpYLWRQZXJxdW5GWEV2NUo3UWREOVZJTm1ZYzd5em9LUTFnRFJYMWVOaXJ1M2FJN3hhR0xFSUlmRHlnNDg5ZjdLakY2S2Z2UlljZEYybS1MQ3JLcktnRnFZNEUwREVyTUZsODZWMl9OVkZiY1A5U3N6bGhBVmlKeHdWOThCam10SEZZdnN1NEhRVzhndU01OWV2dVFLSVlIMlFsZ3hzWHEzTjQzRWlHeDVVeVRLYnFqcHF3STVoVUs1WUlWTE5tWDlqSnBGTWpfNWNuaFVCU3gtdW4xTHFEREl6Ynh4ZTVXUmhKaGdXeEM5Zkx1QnNqb2MyenFtblY3cTA1M3JpbHhlMFRwS0ZtU3NXSTJLbXM4NlFfcUNQS05yeXZ2NHhYWHpfb0tNUS13emFDemlZOHlGRzBrelhjdHMwcmVMRjR5ZDM4UlpoYWRLLXB4RmozRFEySnBHSm96T01iVWFTN1hsdTFhQmc0TFhVa283N0FBcWY1S0xhQdIBhwNBVV95cUxONTV4SXBIN3VOaHFEN2lvUVpQdlJkUTl2N0MzZ183M1FKbjdOVkdkdTZCMzdsbk9mLVF3TVljbHBSeU9iMzBEZk1IRkFJYU9CZlhHaUluT3J1eV8yTTl0U1ZOemNxY1JrSmF3RVV1eDMzZTJWNnliQW9CNGhVWVZfenQtRDlQQlZVVXU0NmVCaE1USnUxcUxha21hZHNJY3ZoRUVtcTZFeVpQY2VGY2EyUmRzdnVSMDB6MG01MThrRTVTUWxORXhmd0l3R085WW9PdkFVb2FRazBVU1ZSM2VkbHBGZVljSEYzM1hWRXE5OUF1aFpHVHdHLUlUWWVEQnVIbDVfTmtmaWdkODF5TlpvY3pvbzNwY21HaDB0V1k0U2xpWkJrTEcwaEJ4SkZxQ3otdmxUSTR1ajFxVF9reUVXQUR3eXJqZHpaM0dSUXNqTjhxRG94MFR6aTIyRjBZaUViblBiaGJ3eGluX2RleF9jd0dqazA4SU9lTTZmMDFDTWJRb1pERVFZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-13T09:30:15.820Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
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
