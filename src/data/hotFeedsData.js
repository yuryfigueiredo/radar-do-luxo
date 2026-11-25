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
    "id": "pauta-live-destinos-mwvfsc7g-tci7",
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
    "createdAt": "2026-11-25T01:20:12.748Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwvfsc2e-jwgr",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "1965 Ferrari 275 GTS Spent Over 40 Years in Hiding, Sells for Nearly $1 Million - autoevolution",
    "suggestedHook": "Hipercarros: 1965 Ferrari 275 GTS Spent Over 40 Years in Hiding, É Arrematado por Nearly $1 Million",
    "summary": "1965 Ferrari 275 GTS Spent Over 40 Years in Hiding, Sells for Nearly $1 Million autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQVy1FMUtud3JxYXNocHhpSHhOSk0zcl9WcnhZVW9xYXA4R0I1S0RLaURxZWVZOUtrZF9zWjRjUG96VzhUbUJsY0N2aEMtd3pKMW5MV2VWMEJTZlJUekxkbGQ4R3diLWczWVhYQm92ZUczR1g0QVpUN0hrWWp6ODZQUU84ME9DcHUtUFV6dmJBVU1HbU5KaU05Z01NYUJFdHU2c3l0VnNWZGhPaHR5MXEwVnIyYWVScFJBTzAtdVJfZFpmQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-25T01:20:12.566Z",
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
    "id": "pauta-live-supercarros-mwvfsc53-kic8",
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
    "createdAt": "2026-11-25T01:20:12.663Z",
    "validityHours": 24,
    "specsPreview": {
      "propulsao": "V16 8.3L Nat. Aspirado + 3 Motores Elétricos",
      "potencia": "1.800 cv combinados (9.000 RPM)",
      "painel": "Instrumentação esqueletizada em titânio e safira",
      "aceleracao": "0-100 km/h em 2,0s (V-Max 445 km/h)"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwvfsc8w-cyp5",
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
    "createdAt": "2026-11-25T01:20:12.800Z",
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
    "id": "pauta-live-arquitetura-mwvfsc9m-qvyt",
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
    "createdAt": "2026-11-25T01:20:12.826Z",
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
    "id": "pauta-live-relogios-mwvfsc0v-9tke",
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
    "createdAt": "2026-11-25T01:20:12.511Z",
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
    "id": "pauta-live-relogios-mwvfsc18-prx4",
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
    "createdAt": "2026-11-25T01:20:12.524Z",
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
    "id": "pauta-live-arquitetura-mwvfsceq-x8dn",
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
    "createdAt": "2026-11-25T01:20:13.010Z",
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
    "id": "pauta-live-relogios-mwvfsc0l-jnu3",
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
    "createdAt": "2026-11-25T01:20:12.501Z",
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
    "id": "pauta-live-arquitetura-mwvfscf0-ac0n",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "The US$2.4 billion art auction week: big sales, bigger expectations - The Business Times",
    "suggestedHook": "The US$2.4 billion art auction week: big sales, bigger expectations",
    "summary": "The US$2.4 billion art auction week: big sales, bigger expectations The Business Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNR3lNTWFGTzVLZnBuOGNRcjJwd3lXbVE2RjI4blFYenN3ME93RHJ6UlBYSUJPZmNLVmZ3ZFo5aGZMSS1jbTllb29iN29ONWIzWVl5WTNsRmpRajA0eVVRcjNudjE2QlllM1RYbWhLWGFqOFdGeURqNEpSSHk1NC12dlRfY2hMV2pIWXdncldSNTlKYmxBdDQtYktiXzNJSHRzZjd5V1hKdlk5YmM?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-25T01:20:13.020Z",
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
    "id": "pauta-live-destinos-mwvfsc70-eoe0",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "First look on board 114m Lürssen superyacht Nausicaä designed by Marc Newson - BOAT International",
    "suggestedHook": "Náutica de Elite: First look on board 114m Lürssen Superiate Nausicaä designed by Marc Newson",
    "summary": "First look on board 114m Lürssen superyacht Nausicaä designed by Marc Newson BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNTE5iejBRMWZ0MFM2NENYOThkUG55bV9mbUM0SEVkRlRRZm0yM3NNRzBwYmxRWlFUWnNDQldHYlZ2VnlYVmNpOW0tS19VYVNjd2ZnM19CN2puWC0wMGN4S2F3RDVCYm9fUnY3dG5PS2VtYmdLSk9HNVdLUnZPX1hMODlZemJwNC1hYUdyckpsT21jeVpHMFZxbHBLNGFxNFZUSVdxaERnMkZxcHpKZE9J?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-25T01:20:12.732Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwvfsc1i-71v2",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 82,
    "rankingTier": "B",
    "originalTitle": "Is the most absurd race the best race? Plus: Ferrari feud hits its breaking point - The Athletic - The New York Times",
    "suggestedHook": "Is the most absurd race the best race? Plus: Ferrari feud hits its breaking point - The Athletic",
    "summary": "Is the most absurd race the best race? Plus: Ferrari feud hits its breaking point - The Athletic The New York Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQUVNXRWdYNll0Z2ZYdm9lYTVuR041QUlzZWJIX0xCYnpwVC0wYzhLd3kydkFISEVuZHlQTm9iLXRpdnk0VTExQmRmV0VmMnZYNV9lS1ZOV0N5ejZlMWlrMEJBUndUWUJtVE52Q0ttZlZyRmE5UXZoSkVZbVhzaUs5UG9KYzQ0TGlPSHJ3Qjl1c1pKUQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-25T01:20:12.534Z",
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
