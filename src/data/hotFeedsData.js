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
    "id": "pauta-live-destinos-mwjlmb6g-4pv1",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Docked for more than a month alone in New Zealand, Jeff Bezos’ $500 million superyacht Koru finally has company, as Starbucks billionaire Howard Schultz’s $300 million Feadship Pi sails in and berths right alongside at Auckland’s Silo Marina - Luxurylaunches",
    "suggestedHook": "Docked for more than a month alone in New Zealand, Jeff Bezos’ $500 million Superiate Koru finally has company, as Starbucks billionaire Howard Schultz’s $300 million Feadship Pi sails in and berths right alongside at Auckland’s Silo Marina",
    "summary": "Docked for more than a month alone in New Zealand, Jeff Bezos’ $500 million superyacht Koru finally has company, as Starbucks billionaire Howard Schultz’s $300 million Feadship Pi sails in and berths right alongside at Auckland’s Silo Marina Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTVZQX2RyRWUyVG42ZDlVV2pxbXdxZkdPUXVXc1dwa0pKQTdhWXplLW5QbEFCU1prOTlXSklFLUZ0V3d1QUFIVUJpelVlb0oxQlN1OUpiRk9YRnVoUm5zeWVhRUVkQkNaN0o0Skd4Mmx5LWZ5clZpWGdXRm1aVE92VmozcEtpX3kxbmtlM1dKMklhWVd1VGZXamlhVmQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:15.064Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mwjlmaos-c7uq",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine - Luxurylaunches",
    "suggestedHook": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine",
    "summary": "Cristiano Ronaldo's $9 million Bugatti Centodieci is thousands of miles away from home in Germany for an alleged workshop visit that could involve a staggering 65-hour repair to its mighty W16 engine Luxurylaunches",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPck5LRE1oZGNycFdXanU2MHYyaEVXTVQ0ZmhVa0Uyd1RiZVJndG5jbkFOcE5pYUx4Zm9FSTByV01ReXNNbkQ5SEhhSkV4VFM1ZUJyandpb2VvU3RuZWozNjRHNWo5cVdCd2QwdHpIVElnSzZXRFM4TEdpMlp6dm5nTkpMRURWLTU0cDMtd0t0NGlNaGVGLVZGaDNFRnp4Rjd5?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.428Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1731770758454-9d283a702306?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwjlmax7-sl7d",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display - Vogue Arabia",
    "suggestedHook": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display",
    "summary": "YANGWANG Celebrates Record-Breaking Electric Hypercar in the UAE With Spectacular Burj Khalifa Display Vogue Arabia",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNdUpDSmxhNjNTSExaa2NqSlFCQ25XcDRIWlp5ZlRkeHVUVFhOUmZUbzVJb0lxUWpNWlQ2N1VnRDFWTF84Zklnc0RCckQzZ0dpSG1sRmlTYUF6di1LbkFXZ0xzaHYza29zZElrb25oeUdsbWhNdGRtcG1OWjhSTXFxbkhaZU5vS3JlTUE?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.731Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mwjlmbb6-c0bg",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Bill Gates' $3.9 million-a-week superyacht has one rule that forces guests off for six hours - MARCA",
    "suggestedHook": "Náutica de Elite: Bill Gates' $3.9 million-a-week Superiate has one rule that forces guests off for six hours",
    "summary": "Bill Gates' $3.9 million-a-week superyacht has one rule that forces guests off for six hours MARCA",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPRVlCX1RQVV9icGViSEU3RDlWSVhncnVyNDBHMTdTSW1wSGVEVmVsamZLMW8tM0JqUFJvV19ISnRITExVcDB3cldYN0N0MzZYQkJVZ0VyY3RwNWhiTURDNEdQdEFPM05UZEdBUUw0Wnl2MG9jRzQ0TEFaUGdhN3V1ekFfTlZRbnRsTm55S29BZms0UjZQZ29UUEtldzlJdThFNUtDdDAwUHVHeXJQbU9QYXEwNUp1OVdDcDhONFEyRlZrcVRKalhfR2FQNkNkZUdpVVhiR01CY09DVUhhVWZSV25BV0VDd9IB5gFBVV95cUxPRVlCX1RQVV9icGViSEU3RDlWSVhncnVyNDBHMTdTSW1wSGVEVmVsamZLMW8tM0JqUFJvV19ISnRITExVcDB3cldYN0N0MzZYQkJVZ0VyY3RwNWhiTURDNEdQdEFPM05UZEdBUUw0Wnl2MG9jRzQ0TEFaUGdhN3V1ekFfTlZRbnRsTm55S29BZms0UjZQZ29UUEtldzlJdThFNUtDdDAwUHVHeXJQbU9QYXEwNUp1OVdDcDhONFEyRlZrcVRKalhfR2FQNkNkZUdpVVhiR01CY09DVUhhVWZSV25BV0VDdw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:15.234Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwjlmbad-ctr4",
    "source": "Google News Superyachts",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "The Italian Sea Group Auction Set for November 16 - Megayacht News",
    "suggestedHook": "Patrimônio & Leilões: The Italian Sea Group Auction Set for November 16",
    "summary": "The Italian Sea Group Auction Set for November 16 Megayacht News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9PTEplNVRTa0pLUDhOdk0xclRaVzN4NVctOUhUcnBaenhJekM5ZFU4SGt6S3BrWVlCMzE2SUQ3cXJOYXlUc3d5Tnk3djl2R1dIcGRTWGE3Vl9hVlhvMDhXOUl6blFHeGNibklZWm1qZ3R6dw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:15.205Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwjlmao2-mkm5",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection - The Supercar Blog",
    "suggestedHook": "Hipercarros: 33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection",
    "summary": "33-year-old adds a Bugatti Chiron to his Pokémon-themed supercar collection The Supercar Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQRkRoN0I4Mk5uUV9HOXktMmJjS2xMUnlEX2pFc3daMGtwMlhKSU1QbzFLUjFSLWsyMFVDTFJLamlQbFZEejdoVVhtLWJIbnRkcjdEd1dhQjk5NFZiaXlHQzR4cVdwMm1iS0Rib0xoYnhTUDdqYnFWN2ZIZzNIT2Y2Z2twS204Ml9CbWlUYkt6cGZCeFZoMHBQZm5VeWVBdy00SEIyT0FjLUw5RlEw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.402Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwjlmaik-uz4e",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "suggestedHook": "Alta Relojoaria: Hands-on – Time+Tide’s Cool TAG Heuer Aquaracer Professional 300 Sundowner II",
    "summary": "The original TAG Heuer Aquaracer Solargraph x Time+Tide Sundowner, launched in 2024, was an interesting take on the Aquaracer Professional 200. With its sandblasted titanium case, warm rose-gold accents and khaki textile strap, it captured the spirit of the Australian outback. Powered by a solar quartz movement, this",
    "sourceUrl": "https://monochrome-watches.com/time-and-tide-x-tag-heuer-aquaracer-professional-300-sundowner-ii-titanium-dive-watch-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.204Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/TimeTide-TAG-Heuer-Aquaracer-Professional-300-Sundowner-II-Titanium-Dive-Watch-review-4-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-relogios-mwjlmaip-r3eh",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Introducing – Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "suggestedHook": "Apresentação: Kurono Tokyo Unveils the New and Sportier Structure Chronograph S1",
    "summary": "The Japanese watch brand Kurono Tokyo was founded in 2019 by independent master watchmaker and product designer Hajime Asaoka. Acclaimed for his high-end, handmade pieces, Asaoka wanted to bring his sophisticated and distinctive design language to a wider audience at more accessible prices. With a strong focus on",
    "sourceUrl": "https://monochrome-watches.com/kurono-tokyo-structure-chronograph-s1-sports-chronograph-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.209Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Kurono-Tokyo-Structure-Chronograph-S1-40mm-Sports-Chronograph-Automatic-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-arquitetura-mwjlmb1u-nmua",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Rare seven-digit number plates up for auction - AFR",
    "suggestedHook": "Patrimônio & Leilões: Rare seven-digit number plates up for auction",
    "summary": "Rare seven-digit number plates up for auction AFR",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOT3F4bW9YNjZlLWhrRHlYeGlHYmFtNXpiOVhEWDI4SGg1RXlKcU5UT0xYaHozNU1RWm5GaG04dWlLZGxtUWRGVzlDQnBFa3FDUWpIMmFZMGdrWjJyLUxDTmhXZU1vZ05hSFhrdUNoVjFKTHpVT2Y1bHlXeG9saE1ya0J0MU53NDVfdmtLUkFTVy0ySS1EdW1wYkVFcjB4djg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.898Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1635488591151-c7a12939669b?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwjlmbfz-1c2j",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Doubts Loom Over a van Gogh as Auctions Aim for a $2.8 Billion Week - The New York Times",
    "suggestedHook": "Patrimônio & Leilões: Doubts Loom Over a van Gogh as Auctions Aim for a $2.8 Billion Week",
    "summary": "Doubts Loom Over a van Gogh as Auctions Aim for a $2.8 Billion Week The New York Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQbERpeUVvVjhEOGRQTjZHVkdIWnNQbnc1NU9ncnVlWFVQaFVyZUtIR1I3YllQdGtzdDR6NTZNdlhQTllsbmZkeDlhd3ZwVW5WWWZuUFhHeU5rSzZud00yOUdGMDh6U0lTYXZPVmdZT3JkVFJSSG9iZjJwNWpKeEFNbWZ5eGt5bGdlLTJQLWRySFBSLTZVblR6ZWpFUE1CSk9QMGF4RA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:15.407Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwjlmaln-m7yu",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Introducing – Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "suggestedHook": "Apresentação: Studio Underd0g Launches the 04SERIES Calendar with a Clever Weekend Indicator",
    "summary": "Founded by Richard Benc, British brand Studio Underd0g launched in 2020 with a design-led series that broke from the watch industry’s usual conventions. Its colourful chronographs, fun dial designs, and collaborations have helped it establish its identity, while accessible prices have attracted a growing following. As",
    "sourceUrl": "https://monochrome-watches.com/studio-underd0g-04series-calendar-collection-retrograde-date-weekend-indicator-new-seagull-movement-value-proposition-introducing-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T18:30:14.315Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Studio-Underd0g-04Series-calendar-Weekend-Indicator-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwj2by0f-njos",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "suggestedHook": "Patrimônio & Leilões: Romanov sapphire bracelet exceeds auction estimates in Geneva - Kursiv Media Узбекистан",
    "summary": "Romanov sapphire bracelet exceeds auction estimates in Geneva Kursiv Media Узбекистан",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE1rakZ6emRzeEFRaUpUc0ZIODR0aEZfNzAyNXB4QTlxRmF1bXp0TVcyV1g4ODBvWHcxNWk1WFFOU2otMzJLN01lUVdpZlN2Vmxwa0ZUZzZ0cHNWTVB3T1RWVUpRTDVuWmVfdlFLQkNVSUtmQQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-16T09:30:18.735Z",
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
