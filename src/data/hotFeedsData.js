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
    "id": "pauta-live-destinos-mwttx6xz-q5f8",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 92,
    "rankingTier": "A",
    "originalTitle": "First Look Inside Japanese Billionaire Yusaku Maezawa’s 375-Foot-Long Superyacht - Forbes",
    "suggestedHook": "Náutica de Elite: First Look Inside Japanese Billionaire Yusaku Maezawa’s 375-Foot-Long Superiate",
    "summary": "First Look Inside Japanese Billionaire Yusaku Maezawa’s 375-Foot-Long Superyacht Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNOWlTQXpuUkd3d0hzTkgtcmFwcjN4WGVoelVLSHRmcm9xZDVvaWViRERrNldxeHo3TGVLOS1taDdQT2lBUm5mbGRtX255cnZnN09XdW5sRmM3ZEtvb0t0STVzYjRURER2c0JUdE51aV9HUzZldXZSRUNvQlVMN0xSQzFKVnFsVWhjb0sxYjVaUjVCa3pXZ2h0QV91V2RidThBYTZHX2RtVHBad3FnWDdGaFlnekxUcnJaelZHcFByZFZtMmJzdDhHMmRLNVFEdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.479Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwttx6kr-wb4h",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Jay Leno Drives the Corvette That Fooled Millions as a Ferrari on Miami Vice - autoevolution",
    "suggestedHook": "Hipercarros: Jay Leno Drives the Corvette That Fooled Millions as a Ferrari on Miami Vice",
    "summary": "Jay Leno Drives the Corvette That Fooled Millions as a Ferrari on Miami Vice autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOTjdiV0JNbUxYX3hIbzdTU1ozRExRempiX1NUNjRZZGhnUDVuMWplR042ZjZrVDV4d2wwcDNqNEVqNXNDOXlJdXh2SU1SVHYtZ2FRZmR5QlhBV011WlhubERyazFVV01ZWkJ5dzFqUXItcS1GR2J3UWRHM2E2UkN6TFBfcjlCQjBQWWc2X3B0azZtWExmRmgwU2x1c1Y1SE1FWUk2N2N1NE9lY1NOTTFVUmN2aWtlcnBERUMyYkZrNlY?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.003Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwttx73l-t7zd",
    "source": "Google News Superyachts",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Top Marques Monaco unveils new supercar gallery making 2027 the largest show to date - BOAT International",
    "suggestedHook": "Hipercarros: Top Marques Monaco unveils new supercar gallery making 2027 the largest show to date",
    "summary": "Top Marques Monaco unveils new supercar gallery making 2027 the largest show to date BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOaUtORGt5ZkhwMHBPTFAyTnRVYmh3a0ZhaXJUQzVSSkk0ZkliWmF3LTNpaWlHMEh6dDI1SDczdzIxU2VuODhxaHlZWk96aDM4dlIzSjdldjJiZWEteWExT25qRzVuNm0zajc4X2lZWU1aNThxRHpYVXFxSU8xVVRvT245V2FZbjVLcU9OeUFsZDRKMEFwZDlRU2ZPLWlEanZDVDBCQmNLNlhzQm90cnhZSW5WY2t2dmRm?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.681Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwttx70o-x8y0",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Opinion - What does €140 million actually buy? - SuperyachtNews.com",
    "suggestedHook": "Náutica de Elite: Opinion - What does €140 million actually buy?",
    "summary": "Opinion - What does €140 million actually buy? SuperyachtNews.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9ocVNwSUV0Y1YzZkVQT2VXRlpVaUNjQ29KVk8tWmhEUngtZHZrYXlMNkFHbzZ2QlVaZWE4UHhtTXozTTlXMUlOUzVQV18yLVp3SU5VU1htM2lxMnh2MFc4QmhWWldEVmhVajhNREVmNnkxcS1BdlpmVnNCUHJOQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.577Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwttx6yw-6kc7",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "SRI Global Wins Auction for The Italian Sea Group - Megayacht News",
    "suggestedHook": "Patrimônio & Leilões: SRI Global Wins Auction for The Italian Sea Group",
    "summary": "SRI Global Wins Auction for The Italian Sea Group Megayacht News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNc1JLSDVLdFRta1VGMnAySmNCQnRKZVAtcl9faGNUZjBNN0F5NENHbjN5WUV5TllMMnlocHM4amp6cHIwWEFqdThCcmZwYThaQ1VRNlE4UlJsOEsxel9iVU1pengxbjlfUXBOYkVDdDViVHc3amVIcDNwbTlJZHVvWm9B?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.512Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1781872324499-e51350ed640e?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwttx6ef-o587",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Introducing – Micromilspec Pilot Worldtimer Single Date Edition, a Simpler Take on the Original Pilot’s Chronograph",
    "suggestedHook": "Apresentação: Micromilspec Pilot Worldtimer Single Date Edition, a Simpler Take on the Original Pilot’s Chronograph",
    "summary": "Micromilspec made its name with military-issued watches (its very first commission was a pilot’s watch built for the Royal Norwegian Air Force), and then added commercially available models to its portfolio. The new Pilot Worldtimer Single Date Edition is an evolution of the existing Pilot Worldtimer, a watch first",
    "sourceUrl": "https://monochrome-watches.com/micromilspec-pilot-worldtimer-single-date-edition-aviation-traveller-chronograph-gmt-titanium-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:20.775Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Micromilspec-Pilot-Worldtimer-Single-Date-21-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwttx6fp-cqk1",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Buying Guide – Six Deep Dive Watches, From Accessible To Luxury",
    "suggestedHook": "Alta Relojoaria: Buying Guide – Six Deep Dive Watches, From Accessible To Luxury",
    "summary": "Did you know we have mapped virtually 100% of the surface of the Moon, yet only about 27% of our ocean floors? Scientists estimate that an astounding 2 million or more underwater creatures have yet to be discovered; such is the vastness of the world’s oceans. And if ever you were planning to do a […]",
    "sourceUrl": "https://monochrome-watches.com/buying-guide-titan-certina-doxa-zrc-omega-panerai-dive-watches-500m-review-specs-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:20.821Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2025/11/2025-omega-seamaster-planet-ocean-600m-4th-generation-dive-watch-price-video-review-5-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwttx77h-thbn",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "A Rare Alexander McQueen Runway Gem Is Headed to Christie’s, and It Still Has the Tag Attached - ELLE",
    "suggestedHook": "A Rare Alexander McQueen Runway Gem Is Headed to Christie’s, and It Still Has the Tag Attached",
    "summary": "A Rare Alexander McQueen Runway Gem Is Headed to Christie’s, and It Still Has the Tag Attached ELLE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOdXNSQ2dzZU1MVEY5TVJ3S2FhdmhqWWdnb0ZKT2RvRlh6eWktNmpaUnlSM2NJMHBjclY5a2dUeFIwY2E5RlZPX3dDQVc1R0FqX0Q5SHdMcXlqeU5iS2hxRWtzZ1Z6TUo3TnF4cTdrXzFZbUxzbzkwTDQ2bzhSMzBHX19NY3JLZ2F0YWZUd1hoTGlUeHZwMG8xOE1SeEtyd2lvOW05d3NWUkREa2NCbERwMndZSl8zN1U?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.821Z",
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
  },
  {
    "id": "pauta-live-supercarros-mwttx68r-1qn9",
    "source": "Robb Report Global",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Ferrari Debuts Two Wild New Prancing Horses. Here’s What to Know.",
    "suggestedHook": "Hipercarros: Ferrari Debuts Two Wild New Prancing Horses. Here’s What to Know.",
    "summary": "The street-legal Ferrari 296 Challenge Stradale and track-only 296 Challenge Evo officially broke cover in Barcelona on Saturday.",
    "sourceUrl": "https://robbreport.com/motors/cars/ferrari-296-challenge-stradale-and-challenge-evo-1238858325/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:20.571Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Ferrari-296-challenge-stradale-challenge-evo-opener.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwttx76x-rctd",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Billionaire Chris Morris pays record $21.5m for Noosa penthouse - The Australian",
    "suggestedHook": "Patrimônio & Leilões: Billionaire Chris Morris pays record $21.5m for Noosa Cobertura",
    "summary": "Billionaire Chris Morris pays record $21.5m for Noosa penthouse The Australian",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOVHBaTWYtejNmbVhwaVpQazNrZVdLakdlck0xQl92Y1NyandvMjVNdmM3RFpmMm54VXJFLXczVVRRaC1DeVQ2Ym9WU3EyZzBVLVVVYk9sYjhYdzM5VWh0eFhhb0R6bThFMm4zMzlTbllHNXdWV1FoaEpmM1NSaEdTVm40c2lWNGlIR0hlWER6YnRjRk5SU19MSU1TR1RXYkxFb0tKVXFCR2JkZC1qb1RJWTZpSFNodGp5WTNOdGhreUF3d0ZMZnozNzZJZnZuTHVnOHBPZUhBSjFMbHp2VGk1SnVEVVVCX0NfV2ZSTUswNXNDN2sxcWlCejVVZV8?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.801Z",
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
    "id": "pauta-live-relogios-mwttx77n-3x77",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Christie’s Presents Important Watches During New York Luxury Week - Christie's Press",
    "suggestedHook": "Alta Relojoaria: Christie’s Presents Important Watches During New York Luxury Week - Christie's Press",
    "summary": "Christie’s Presents Important Watches During New York Luxury Week Christie's Press",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOeGNKSjNMWFZLbF9WT1ZfTFNMOXpVVS1YcllfTnN5ZXVJdjZjM1lad1JuU2xCak13TFJkS3N5TjRSRmRJSU9jTG0yWTZyMFpDTWJIVlQ2TzU4YWdISTBQR2d4R0JJQWtiNndNMTJ0UUVZeHdSSmdheDE2T2VoMC1wNUxSTTZ4NmJZcmN6SmxkNUdWT01GcWNvTw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T22:20:21.827Z",
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
    "id": "pauta-live-supercarros-mwtewva5-40s6",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Ferrari has made its latest supercar less powerful, and it makes total sense - Evo",
    "suggestedHook": "Hipercarros: Ferrari has made its latest supercar less powerful, and it makes total sense",
    "summary": "Ferrari has made its latest supercar less powerful, and it makes total sense Evo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOWmQwUFRNZjZZcEQ0UTZZWVE2eHp1eFYySWg3V1c2Zm90TjdjZldSa0UtMFZQbklISlFHLW9oRDU3cGRZQy1EaVBtRzhNSy1nQlkyMFZrVldvWjIySmQ5Ulh0SERENTJmdTFuUVphel9lbzBNbGw5eDUxY281Ulo3NUd6MTNaa0J2VnY3X3c0RjBtTUdXcHRXcVV5Uks2SlBZSEZsTk1rVGxNRzZLSjM3ZVpjY2tsdVpv?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T15:20:12.126Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwtewvaf-dd0o",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Ferrari bought back more than €17m worth of shares - marketscreener.com",
    "suggestedHook": "Hipercarros: Ferrari bought back more than €17m worth of shares",
    "summary": "Ferrari bought back more than €17m worth of shares marketscreener.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQRlV4UXA5dFJlNGdpVkVFZ1QyVWlVb0pzSTR0XzB4VTBIbENhaGdZSndjeHdhMWszcGdHbGQ0MW91RUNrQjFvelFkV3l2ZkxqdkUwNEpOM3JXV2lManQ2Q01ya3R5cDJ3bmFfeVVOYzh0Z25NZWJ2Q1dLeWZrUlpSdzFacHhwM1BtRGo3T05Xc2l6OXZ0UUl6REIxT3NaMXhDaGdYY3ZqNWdsdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T15:20:12.135Z",
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
    "id": "pauta-live-arquitetura-mwtewv59-8e8f",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "A Hilma af Klint Painting Just Sold for a Record $12.7 Million",
    "suggestedHook": "Patrimônio & Leilões: A Hilma af Klint Painting Just Sold for a Record $12.7 Million",
    "summary": "At least one art historian argued that the work should not have sold.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/hilma-af-klint-painting-record-sale-sweden-1238851962/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T15:20:11.949Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/HKlint_SerIII_Bukowskis_2.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwtewvfw-yf57",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "The 16 Most Expensive Artworks Ever Sold at Auction - ARTnews.com",
    "suggestedHook": "Patrimônio & Leilões: The 16 Most Expensive Artworks Ever Sold at Auction",
    "summary": "The 16 Most Expensive Artworks Ever Sold at Auction ARTnews.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPWUZocG1OM2tPLVBwMDhFZC1qckEzTldkVjFEZkZmeVdRTDh2YlQ3R21NWmVwNGdVamhXNE93RFdNaFZ6QTZEanZ3SkRJNFRtaVFxcm81YUw4WXB0dnJRaXVMNVRQQlZHay0yc2Q3MlJjaDBKRlJvWVJGdTlQdU9SbEhDRDVsYmNvdHFJeUJlNjJrVE15eGFpZmhSMWdFYVppM0Nr?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T15:20:12.332Z",
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
    "id": "pauta-live-arquitetura-mwskwqut-0vwy",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most - Forbes",
    "suggestedHook": "Patrimônio & Leilões: Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most",
    "summary": "Sotheby’s $39.8 Million Jewelry Sale Reveals What Collectors Value Most Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQTFViQlFlbzJER3lJRUJySXhkd2hhSnV5OVlMMm0tSVpZTE5OZkQxcmF4RDVWUzEtV1hXaXlaaTA1bnFqUDFDYVpYN196NkwtQXVFR0lLeHBzQXJ0X2s2VEstS2lOa1BXSF9wNlE0NmZBWFVNTnJQQWYwQkRZZy1EYjRtTHc3bVJCcDVHcVUwdTVnbEF0VkVYdlNaRXJlTThPYkRZWExGM1JNY3dJUGhoS1Z0aEdpbTYtc1hWNlFsNHkzRDg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.909Z",
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
  },
  {
    "id": "pauta-live-arquitetura-mwskwqtq-j5ka",
    "source": "Google News Architecture & Mansions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle - ukwisdom.co.uk",
    "suggestedHook": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle",
    "summary": "Christian Candy: Inside His Billion-Pound Property Empire, Net Worth, Wife and Luxury Lifestyle ukwisdom.co.uk",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE10eklCM29mREtJbzJhRGFQdGpDWGJiSHpGSk9sTndDSXJJbFVqZ0lFQ3hSOGQ3ZllNTDBGOEhxNTRSdlUzVVd5S3dNN2w3dlkzY2Z5UjFMY04yRVBUdXpTajU4WGlzaUE5NEtuanl0UnNzYklfX1JZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.870Z",
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
    "id": "pauta-live-supercarros-mwskwqd4-z3o5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable' - ESPN",
    "suggestedHook": "Hipercarros: Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable'",
    "summary": "Ferrari boss labels Las Vegas collision between Leclerc, Hamilton 'unacceptable' ESPN",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQWVQtdWI0TmtMRV81bjJPRHo5Q2taeDFOTEJPajVIc1JuTndneDZ5QVY5MG9UUmZ6dlF5ZGd4UkI1bjBkU05lT3FLNDdac0lfb0h4aGZlQlg5YUR2OWVYZTNZUUllSUozQXlLcW01dHdCdHVQSGw2c05KUDhQVjA2MmN4bGZvelBiNmVrcHRlei13eDZHRklQOXVFR2w5S1F2UjVCRDFtT1haUno0cW9BQ0d3TQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.272Z",
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
    "id": "pauta-live-supercarros-mwskwqdx-hc17",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Hamilton and His Future at Ferrari: “There Are No Conversations” - Yahoo Sports",
    "suggestedHook": "Hamilton and His Future at Ferrari: “There Are No Conversations”",
    "summary": "Hamilton and His Future at Ferrari: “There Are No Conversations” Yahoo Sports",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNMExCN2p5cmpOSTdoTS11WC1DZmN3UE9ySEU3LXRkS3NsOG1BX3RfbmZSbHYtZElvWEJUQ0J6MjdJZk4waXJ5T0lDRnc0enpvb0U1MG9MOHp6NHYtUTE2Ql9HNW13VUxabUFrQ0NJbGc4TzJVT3dyQmxEMWFuR1VCbkZhTU1obS0yQ3I5T1JrdnNJNHM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.301Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwskwq9x-r8db",
    "source": "Hodinkee",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Dispatch: The Patek Philippe Museum Celebrates 25 Years",
    "suggestedHook": "Dispatch: The Patek Philippe Museum Celebrates 25 Years",
    "summary": "A quarter century after Philippe Stern opened its doors, his son marks the milestone with a tribute to the founder and a look back at 50 years of the Nautilus.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-patek-philippe-museum-celebrates-25-years",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-23T01:20:17.157Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/dd7ef2c8-92cc-4060-82da-2b571f0f4629/1st-Floor_Patek-Philippe-Collection_5.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
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
