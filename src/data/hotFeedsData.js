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
    "id": "pauta-live-relogios-mwl125if-jo74",
    "source": "Robb Report Global",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 91,
    "rankingTier": "A",
    "originalTitle": "A Rare Richard Mille x Rafael Nadal Watch From 2017 May Fetch Up to $400,000 at Auction",
    "suggestedHook": "Alta Relojoaria: A Rare Richard Mille x Rafael Nadal Watch From 2017 May Fetch Up to $400,000 at Auction",
    "summary": "The RM 35-02 in black Carbon TPT originally retailed for around $145,000.",
    "sourceUrl": "https://robbreport.com/style/watch-collector/richard-mille-rafael-nadal-watch-bonhams-auction-1238844068/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:14.631Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/richard-mille-ref-rm35-02-ca-rafael-nadal.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mwl125vl-c2id",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Ettore Bugatti’s Type 41 Royale elephant mascot heads to auction - Magneto magazine",
    "suggestedHook": "Hipercarros: Ettore Bugatti’s Type 41 Royale elephant mascot heads to auction",
    "summary": "Ettore Bugatti’s Type 41 Royale elephant mascot heads to auction Magneto magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNclMwLXNPRVp5TUJ1aTJEcENHS2E2eHRjclc0QkRoMXdIRWtjel9hZFE1OXlYR2ZZd04tUW4zRHZVT1J0eGZ1RHVaSDV3czd3S01KOHVDdHRzWVVzZjRNdE9WY0hzLTRCZlFVcHBGU1JoR19NMVpQR1R5SFNlTG5iTXRKeEVxaE0?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:15.105Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1610880709844-b97111a986f7?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-destinos-mwl1269a-v6so",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Billionaire CEO Gabe Newell can play 'GTA 6' with 14 friends in his superyacht's gaming room - Business Insider",
    "suggestedHook": "Náutica de Elite: Billionaire CEO Gabe Newell can play 'GTA 6' with 14 friends in his Superiate's gaming room",
    "summary": "Billionaire CEO Gabe Newell can play 'GTA 6' with 14 friends in his superyacht's gaming room Business Insider",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNVmpYRGVLcllfa3d0XzVGQmR4OGdFQ1pwNGU4RnVGWWEzc1ZmOUl4ZktUMlFhYTRLaU5Wem5JQzlPeGhKX2I2bGRKSVQ2ZGlraDJ2N0pnQnpIT1Byb1o2Z19NT0QxN1dKS200SURkeG5uMS1GNWxyaVdIekVMZk1kUnJiRDFvMnc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:15.598Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-arquitetura-mwl126cf-suef",
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
    "createdAt": "2026-11-17T18:30:15.711Z",
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
    "id": "pauta-live-supercarros-mwl125zg-4qti",
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
    "createdAt": "2026-11-17T18:30:15.244Z",
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
    "id": "pauta-live-supercarros-mwl1261l-l4c8",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari - CarBuzz",
    "suggestedHook": "Hipercarros: Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari",
    "summary": "Here's Why You'll Never Be Able To Afford The Final Naturally Aspirated V8 Ferrari CarBuzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB3OHBQeElYSFRSTkUxU1o5SGFnRjFId1JnX1ozbkQ1ZS04M2pPSS05aXp1ZmJDZ0JSX0JtVWVQRDlzQTFpcVdNY096LXNqeWRETk9DRHl2MUdlZDRfbmctS3FHSnpxQlJFaVRZWGRZOA?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:15.321Z",
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
    "id": "pauta-live-relogios-mwl125qc-ha07",
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
    "createdAt": "2026-11-17T18:30:14.916Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/TimeTide-TAG-Heuer-Aquaracer-Professional-300-Sundowner-II-Titanium-Dive-Watch-review-4-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mwl125qh-22yp",
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
    "createdAt": "2026-11-17T18:30:14.921Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Kurono-Tokyo-Structure-Chronograph-S1-40mm-Sports-Chronograph-Automatic-1-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mwl126fw-086k",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Strong early interest as The Superyacht Cup Palma Richard Mille opens entries for 2027 - Sail-World.com",
    "suggestedHook": "Strong early interest as The Superiate Cup Palma Richard Mille opens entries for 2027 - Sail",
    "summary": "Strong early interest as The Superyacht Cup Palma Richard Mille opens entries for 2027 Sail-World.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNa2tkUjZIMU50d1ZFVmp2R0NCb1RHREMzX05GdnJIVGZuWXBjYmJrUEZXUDM5TWJjZ1RHb1hCUXhmYjA5V0hLSjhFbUJ0Sl9JeS1hZXdGOVp5QVQ0OWQxc21qYi0tajc3OFVsdnBVVWhBS0FxMURpWUFQNGd6UHpodnJDRWl6SXlTVTNTR2F0VkNtMEk?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:15.836Z",
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
    "id": "pauta-live-arquitetura-mwl126ns-i4yh",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags - Hypebeast",
    "suggestedHook": "Patrimônio & Leilões: Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags",
    "summary": "Christie’s to Auction Rare Louis Vuitton Artist Collaboration Bags Hypebeast",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNQkZkcDNiUGV5ZDVuUEUycExVYXFqdEFNSncxcWZwVUxWdC0wWTl4cGFuX2tnNjRlM1RZN1dTTnJNdG9vdXdRVE9lRk9lLWw5WlVfd3VFdTVhNzVLVGVoUHFRSmhtbG5qN21XTV81LUVrdzJoWmhfM2JrdnQ3S0xjbXY2NElZeW9MclotbTFBVEtOaVpfcmdLc3NuVTB2aW01NXl4UGg0c2laR3RGaEpoMnV3c0tVdk8xN3hFQ2dYbXJKVV9LLTJ2aW1PZEQ4eDhuaWk0TGQ4TzV5dTg?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:16.120Z",
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
    "id": "pauta-live-arquitetura-mwl126oh-viko",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It - Fashion Times UK",
    "suggestedHook": "Patrimônio & Leilões: Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It",
    "summary": "Queen Mary's £327,000 Diamond Necklace Has a Royal Feud and Unsolved Mystery Behind It Fashion Times UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQaHo4M3gyQ0EtdGF3cllWTmNSb2dxdEktM3doTHVvY09abUFvX2lWUzZzbHVUc3FsQ3hQajFweGRkNHo3ZExwT09Wd2w5S2Jwbjd6RkFaZ2NIdkpTOG54LW5Idy1aNy12bkt1dWNKZWpMSDJOT2VBOVl4a2huQktmNkJSWkV2UQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T18:30:16.145Z",
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
    "id": "pauta-live-supercarros-mwkhri6f-oic6",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million - WeRSM",
    "suggestedHook": "Hipercarros: Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million",
    "summary": "Rockstar Is Selling A Real-Life GTA VI Supercar For £1 Million WeRSM",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5iQm9LOUxPdFlDdGpfRW5lOG5HeDhYZU85WjhtTXIxQTd0UWFYaTdudTdBbmhLc2dhYkl6bzAyTy1kM2FQVldsYkFlQm9wWFJXX0J5TjBZTXFmNk9TLU92UFdwOXpyLVdvRUk2WQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:05.127Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1577735138919-91b6848511c8?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-supercarros-mwkhribn-h82h",
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
    "createdAt": "2026-11-17T09:30:05.315Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwkhrhky-stzp",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "Mortgage Mogul Anthony Hsieh Lists His Orange County Mansion at a Record-Breaking $125 Million",
    "suggestedHook": "Mortgage Mogul Anthony Hsieh Lists His Orange County Mansão at a Record-Breaking $125 Million",
    "summary": "The loanDepot founder’s ocean-view home in Newport Coast includes a wellness wing and two garages with room for up to 16 vehicles.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/anthony-hsieh-house-orange-county-newport-coast-1238841546/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.354Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/AnthonyHeiehHouse_NC_FI.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mwkhrhn4-k5tn",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 83,
    "rankingTier": "B",
    "originalTitle": "This 1958 Willem de Kooning Painting Could Fetch $18 Million",
    "suggestedHook": "Patrimônio & Leilões: This 1958 Willem de Kooning Painting Could Fetch $18 Million",
    "summary": "The painting was once owned by the museum's former president, David Solinger.",
    "sourceUrl": "https://robbreport.com/shelter/art-collectibles/whitney-museum-willem-de-kooning-sale-1238844072/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-17T09:30:04.432Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/Whitney_deKooning_Christies.jpg",
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
