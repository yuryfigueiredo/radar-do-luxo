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
    "id": "pauta-live-supercarros-mwv0s7wn-bzps",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Photos: Ferrari unveils two new 296 supercars with 670 hp and 700 hp V-6 engines - Yahoo",
    "suggestedHook": "Photos: Ferrari unveils two new 296 supercars with 670 hp and 700 hp V-6 engines",
    "summary": "Photos: Ferrari unveils two new 296 supercars with 670 hp and 700 hp V-6 engines Yahoo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPRjFNQ2lrRmxNdFBhSTBUWkVnRHdfSDZPUGhqeE02VWxLRWlua2d4RUlPa1VlcjJlZ1U5V2JxX2FpaFl6Xy1UTGpTM3JlamhUbF96T0t0WTEyM09nQ0QzeXdvcHpZOFVKUXN6b1NtUXRqa3pvZzFxckYxMEZpUXF3MzFJZEhXcGJ1b0xj?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:12.935Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-relogios-mwv0s7s8-qvgl",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "First Look – The Holthinrichs Signature Ornament Heritage Hand Engraved Collection",
    "suggestedHook": "Alta Relojoaria: First Look – The Holthinrichs Signature Ornament Heritage Hand Engraved Collection",
    "summary": "A well-established member of the Dutch independent watchmaking scene, Holthinrichs has made a name for itself when its founder, Michiel, presented singularly designed watches with 3D-printed cases made in all sorts of materials (including steel, titanium, bronze or gold). Watchmaking skills were not left on the side",
    "sourceUrl": "https://monochrome-watches.com/holthinrichs-signature-ornament-heritage-hand-engraved-collection-new-hand-applied-dial-textures-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:12.776Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Holthinrichs-Signature-Ornament-Heritage-Hand-Engraved-Review-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwv0s7zz-rq23",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Steve Jobs' billionaire widow Laurene topped her $120 million Venus superyacht with 30 tons of diesel in Las Palmas, Spain and then sailed the vessel off for a 4,000 mile long journey to Florida - Luxurylaunches",
    "suggestedHook": "Steve Jobs' billionaire widow Laurene topped her $120 million Venus Superiate with 30 tons of diesel in Las Palmas, Spain and then sailed the vessel off for a 4,000 mile long journey to Florida",
    "summary": "Steve Jobs' billionaire widow Laurene topped her $120 million Venus superyacht with 30 tons of diesel in Las Palmas, Spain and then sailed the vessel off for a 4,000 mile long journey to Florida Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPNFV3cThpTExicjYwLU5XdENGUEI3dTNsMkVTNFpHbXEwbmlUVmticVltWElLUjVrRlhZR09vXzlvelltUGp4cWxZV2ZyaW5saWMyejUwMVgzMHYwMjVueU5hd1ZoTnFTdmxyQmFsN1RyWE5SZDJzNHZ0Y25yajRKcnN2T1lRb21SS0xTUGJhN0hVRjJhUE5xdmtDWWZoN2Nt?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:13.055Z",
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
    "id": "pauta-live-supercarros-mwv0s7wq-08py",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Bugatti: Molsheim to the Tourbillon - Sports Car Digest",
    "suggestedHook": "Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista",
    "summary": "A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBoOGtEYUhTY2hvUzlwclc2SVpFUGtNMDVqQ053cWczX2pLNHVEZTVwWkUteWIxWmpubnNqcTVSRUlrVEVvcUxvN0ZYejNodE5DbzZXMkNxMA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:12.938Z",
    "validityHours": 24,
    "specsPreview": {
      "propulsao": "V16 8.3L Nat. Aspirado + 3 Motores Elétricos",
      "potencia": "1.800 cv combinados (9.000 RPM)",
      "painel": "Instrumentação esqueletizada em titânio e safira",
      "aceleracao": "0-100 km/h em 2,0s (V-Max 445 km/h)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1650444684180-3f72abb15263?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwv0s815-szfk",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "His parents borrowed $800 for a boat, but their son went on to become China's Jeff Bezos and bought a $400 million superyacht for his family so big that it refused to be dwarfed even by a 19-deck, 3,660-passenger cruise shi - Luxurylaunches",
    "suggestedHook": "His parents borrowed $800 for a boat, but their son went on to become China's Jeff Bezos and bought a $400 million Superiate for his family so big that it refused to be dwarfed even by a 19-deck, 3,660-passenger cruise shi",
    "summary": "His parents borrowed $800 for a boat, but their son went on to become China's Jeff Bezos and bought a $400 million superyacht for his family so big that it refused to be dwarfed even by a 19-deck, 3,660-passenger cruise shi Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONTZGTmd3Y1JvZi1ySTdKMXJhZFk3cDVLajJOa2xiNElXTkd0RllSTzZsN1RwNmpqVnI2VnBLczFzLVQ5emhoTThJVXJnMEQxWTE5b0xrc2JKNGdLNzhEVzBkNHRpV2FTa1JmMVJ0ZEVnQ1RBeldmODQzcUtOTUZ6ak9CTmRsVFlRSVVQajBKZ0hUSklqems4MHpOWUJPaWNM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:13.097Z",
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
    "id": "pauta-live-destinos-mwv0s84l-j8na",
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
    "createdAt": "2026-11-24T18:20:13.221Z",
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
    "id": "pauta-live-arquitetura-mwv0s82q-qf4i",
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
    "createdAt": "2026-11-24T18:20:13.154Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1783408360163-3ad59ed27c25?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwv0s7z7-cwrw",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "This Hand-Formed Ferrari 250 Testa Rossa Re-Creation Runs a 330 GT V12, and It’s Live on PCARMARKET - Yahoo Autos",
    "suggestedHook": "This Hand-Formed Ferrari 250 Testa Rossa Re-Creation Runs a 330 GT V12, and It’s Live on PCARMARKET",
    "summary": "This Hand-Formed Ferrari 250 Testa Rossa Re-Creation Runs a 330 GT V12, and It’s Live on PCARMARKET Yahoo Autos",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNV01VQzJqQXRmMnVPTm95cnppM3JEd0xoRFM0T0ZjNWJwREs4LUxURkpNTnIzSXdORHU3cE5hdG9mSnVkYV80N0VBU3BvT2dEN1ZpN1BkbldrSFU2X09nVmVIM0NOM3plX0F1OGZIazhTZ0J3dmxQVk9uamc1c0Iyb2ZJOXh4V2NTdG1BeEdIeTJma1RCekxqbnA1bVJXN0k5?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T18:20:13.027Z",
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
    "id": "pauta-live-relogios-mwv0s7so-e2db",
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
    "createdAt": "2026-11-24T18:20:12.792Z",
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
    "id": "pauta-live-relogios-mwv0s7t0-hofi",
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
    "createdAt": "2026-11-24T18:20:12.804Z",
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
    "id": "pauta-live-arquitetura-mwv0s886-uni0",
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
    "createdAt": "2026-11-24T18:20:13.350Z",
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
    "id": "pauta-live-arquitetura-mwv0s87f-csxr",
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
    "createdAt": "2026-11-24T18:20:13.323Z",
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
    "id": "pauta-live-supercarros-mwuls4nr-tn8e",
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
    "createdAt": "2026-11-24T11:20:14.487Z",
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
    "id": "pauta-live-supercarros-mwuls4sv-ettf",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Costco Sells This Bugatti Electric Scooter For Under $1,000 - SlashGear",
    "suggestedHook": "Hipercarros: Costco Sells This Bugatti Electric Scooter For Under $1,000",
    "summary": "Costco Sells This Bugatti Electric Scooter For Under $1,000 SlashGear",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNbmxmNFBkSGVLWjloSmZpNmxoUjQxWUJ1QXJpcy15MGpaYlJ6b3JUQWRhZDNJWWN0LXR3YmU1RHh6MnFteEdQTE51SlNUejJQRU5ES2g1TFUxR3JWX1VudGJta1VRcXZUbzFGOThwSlZpTk9WSHhjWTdTcDB2MFAtYlFmVjRUWFlCVGxZ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T11:20:14.671Z",
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
    "id": "pauta-live-relogios-mwuls4p7-8h2p",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "In-Depth – The Blancpain Carrousel Incliné, a New Angle on Chronometric Precision (Incl. Video)",
    "suggestedHook": "In-Depth – The Blancpain Carrousel Incliné, a New Angle on Chronometric Precision (Incl. Video)",
    "summary": "You’re certainly familiar with the tourbillon regulator, the device patented by Abraham-Louis Breguet, which helps counteract the negative effects of gravity by constantly rotating the regulating organ on its own axis. The tourbillon, while the most familiar system, isn’t the only one to perform this task. The",
    "sourceUrl": "https://monochrome-watches.com/blancpain-carrousel-incline-inclined-carrousel-regulating-organ-sapphire-case-video-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-24T11:20:14.539Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/blancpain-carrousel-incline-inclined-carrousel-regulating-organ-sapphire-case-video-review-11-600x237.jpg",
    "imageIsFallback": false,
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
