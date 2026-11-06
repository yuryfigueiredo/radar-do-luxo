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
    "id": "pauta-live-destinos-mw4rx4gh-qlqx",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 89,
    "rankingTier": "A",
    "originalTitle": "Exclusive | Billionaires can’t find parking for their megayachts — and developers are cashing in - New York Post",
    "suggestedHook": "Exclusive | Billionaires can’t find parking for their megayachts — and developers are cashing in",
    "summary": "Exclusive | Billionaires can’t find parking for their megayachts — and developers are cashing in New York Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOcWFYLTFEY3hRMG0zNXQ5X0pWTl9IcVNJVFNDUVhNOHdCeWdIUkR5TEc4dGZ3X2hnbV9McVZHUFJCZDloUzhMalppMmZxdHNSMHp0NllYWlhEdmtEZTJYV1F2M2Zvb0lXLThodVFoek5GMnN2NlBVSlpnc3hjdkN3VTRHVGdIdURPek5DMjVWb3Y0Zm5nNG80Y1k1X2xuclpHbktoa29qM2prc1ptcHFuUUo4S0gtbWhMME1CSmg5N0o1S29HRlRhUGxR?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.625Z",
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
    "id": "pauta-live-relogios-mw4rx420-t98r",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 88,
    "rankingTier": "A",
    "originalTitle": "Introducing – Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "suggestedHook": "Apresentação: Audemars Piguet Expands Its Supersonnerie Collection with Three New RO and Code 11.59 Models",
    "summary": "Audemars Piguet is putting the minute repeater back in the spotlight with three new Supersonnerie creations. The two Royal Oak models offer contrasting materials and dial colours, while the Code 11.59 takes a more contemporary approach, revealing movement elements beneath a sapphire dial. All three are powered by the",
    "sourceUrl": "https://monochrome-watches.com/audemars-piguet-expands-its-supersonnerie-collection-with-three-new-royal-oak-and-code-11-59-models/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.104Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/2026-Audemars-Piguet-Code-11-59-and-Royal-Oak-Supersonnerie-models-10-600x237.jpg",
    "imageIsFallback": false,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-supercarros-mw4rx42z-iliv",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Conway looks to strike gold one more time in his final Hypercar race for Toyota - RACER - Racing News",
    "suggestedHook": "Hipercarros: Conway looks to strike gold one more time in his final Hypercar race for Toyota - RACER",
    "summary": "Conway looks to strike gold one more time in his final Hypercar race for Toyota RACER - Racing News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQSjJwUi1ReV9UNGRyS1NqYmRJZnZDV1o3dU9DTlVKYWd3WFdrdFZIWlJyaUhOb2Q0bUFfdXJaQWpJYU1sTUEtdk9kSmg5YUFoV1EtOEdiaUpJXzVEYmpCaVEyS2JNNU9XRm82Ui1zdHptcjBPZFNCYTB0dVdNNENrdDkyT2Y5QmVKSnFCWmZuaW5Kc2NiVEZZYmdyeEVNalliQ3N3S0xNLXlpLVdt?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.139Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "published"
  },
  {
    "id": "pauta-live-supercarros-mw4rx486-tqzj",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion - HotCars",
    "suggestedHook": "Hipercarros: How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion",
    "summary": "How A Lower, Farther-Back V12 Turned A Ferrari Into A Three-Time GT Champion HotCars",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQREJpMXRZZnFDWVE5MWQtZkttb1VTczZ6a1lkLWRqSkk3U3ZrWV9hWm1zSEJHYjJvR0tnZ0dqazZaNTNMOVZnWU9PRFRhZVlhaHEzN1VheEgxNS10dG85akFkWVJVTVVNMjI2VzVWZFFYeEdsS2o4OXNtUUlZRFRCU0dRNTFDZw?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.326Z",
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
    "id": "pauta-live-destinos-mw4rx4lu-dwfl",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Belize by superyacht: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond - BOAT International",
    "suggestedHook": "Belize by Superiate: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond",
    "summary": "Belize by superyacht: A seven-day charter aboard Sheergold through the Great Blue Hole and beyond BOAT International",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOLXJrSi1VaFVQbmpvMVc5TzdTMGsweWx5ZDBHZkd4aTZyUXczYnR4cU4yNlJkUkZyU3pQenQ3WWZ0SmR4aUNWUUpuTDhCZ2pqS245R2RfbFloQ3M2OV80bWRlZDFKdnpXVnU4M2ZqOENKczV5NnJ2R0dtYlNxSlFsNG5tcG4wQU1FRmlza0hVTGR6cTh6c1pINUpxcEl2Wi1l?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.818Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw4rx3wt-ukjp",
    "source": "Robb Report Global",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Art Collector Barbara Jakobson’s Famous N.Y.C. Townhouse Can Be Yours for $9 Million",
    "suggestedHook": "Patrimônio & Leilões: Art Collector Barbara Jakobson’s Famous N.Y.C. Townhouse Can Be Yours for $9 Million",
    "summary": "The five-story pad on Manhattan’s Upper East Side is a reflection of the late art aficionado's singular style.",
    "sourceUrl": "https://robbreport.com/shelter/celebrity-homes/barbara-jakobson-former-nyc-townhouse-lists-1238798895/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:03.917Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://robbreport.com/wp-content/uploads/2026/11/167_East74thSt_NYC_14.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw4rx3zs-ofp2",
    "source": "Hodinkee",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "suggestedHook": "Auctions: The 2026 Geneva Fall Auctions Mega-Preview, Part 1 — Christie's and Antiquorum",
    "summary": "Four auction houses. Over 1225 watches. We dig for the gems, covering everything from high-priced indies to vintage deals.",
    "sourceUrl": "https://www.hodinkee.com/articles/the-2026-geneva-fall-auctions-mega-preview-part-1-christies-and-antiquorum",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.024Z",
    "validityHours": 24,
    "specsPreview": {
      "mercado": "Grandes Leilões Internacionais",
      "custodia": "Refúgio de Liquidez Soberana",
      "perfil": "Family Offices & Colecionadores",
      "curadoria": "Henrique Vianna"
    },
    "suggestedImage": "https://hodinkee.imgix.net/uploads/articles/ad7c2fe2-fc29-41bc-a76f-54fbd7f644a6/Untitled-1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=2000",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-arquitetura-mw4rx4zh-4yu8",
    "source": "Sotheby's & Christie's Auctions",
    "sourceCategory": "Arquitetura",
    "badgeColor": "border-sky-500/40 text-sky-400 bg-sky-500/10",
    "category": "Arquitetura",
    "categorySlug": "arquitetura",
    "authorSlug": "henrique-vianna",
    "rankingScore": 86,
    "rankingTier": "B",
    "originalTitle": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "suggestedHook": "Patrimônio & Leilões: Christie’s Unveils Hong Kong Luxury Week Autumn 2026 - Christie's Press",
    "summary": "Christie’s Unveils Hong Kong Luxury Week Autumn 2026 Christie's Press",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNUUZDd1dGV1Y1UVYwY1NvemNxYUhVTXZvMEJZdjRsU3o0bXptTUVpdnFFT20xU1R5dHE3M2RxOE84a2JmYmpoNW5QSXZRWlpfNmdXMkhodEhVWWNlMUVtaTducEVLLTJzYVV6U3Y5Tm41cGRhTVd0NW1SWWRCYm9nY3hHVkhPUDQ?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:05.309Z",
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
    "id": "pauta-live-supercarros-mw4rx454-dz4k",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K - MotorBiscuit",
    "suggestedHook": "Hipercarros: Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K",
    "summary": "Clarkson Gave Away the Ferrari He Called the Greatest Car Ever. It Could Bring $337K MotorBiscuit",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNa2hWMzVobDJHM1dKbDJYcjRMUHcxVS1QMklWVU1HMjBZYV9Id0ZJbm1qd1JTN2JNUzc4VGFqQUtscDB4azd2RzZvbXY2eUdQdzJ6Z2dTbERGbUZnZG16NHNXS2tvRkZ2Rld5Q2JRRDZuOWJ0R0NRbjVNdk90UVZ3U3hFRTByRllhUDhCXzJXRGh0NVlHSzFmaG9vdDhmeEZPbFBocnBvdllQck9iN2hZaFpn?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.216Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw4rx3zv-5o8f",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The Breguet Classique Souscription, now in Platinum",
    "suggestedHook": "Alta Relojoaria: First Look – The Breguet Classique Souscription, now in Platinum",
    "summary": "As most of you might remember, Breguet celebrated its 250th anniversary last year, and did so by releasing rather spectacular watches, from the ultra-elegant 7235, to the compact 38mm Type XX or the Experimentale 1, the range-topping model with its 10Hz high-frequency tourbillon and its constant force magnetic",
    "sourceUrl": "https://monochrome-watches.com/breguet-classique-souscription-platinum-2026pt-review-price/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.027Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Breguet-Classique-Souscription-Platinum-2026PT-review-6-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-relogios-mw4rx401-7t0w",
    "source": "Monochrome Watches",
    "sourceCategory": "Alta Relojoaria",
    "badgeColor": "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    "category": "Alta Relojoaria",
    "categorySlug": "relogios",
    "authorSlug": "clara-meirelles",
    "rankingScore": 85,
    "rankingTier": "B",
    "originalTitle": "First Look – The New Serica Travel Chronometer Golden Green Ref. 8315-3",
    "suggestedHook": "Alta Relojoaria: First Look – The New Serica Travel Chronometer Golden Green Ref. 8315",
    "summary": "Known for its seriously built and vintage-inspired collection of tool watches, French brand Serica is releasing a new edition of its sports GMT model, the Travel Chronometer. This is one of the few watches from the brand that we have never explored, as we’ve already looked at the 6190 Field collection, the highly",
    "sourceUrl": "https://monochrome-watches.com/the-new-serica-travel-chronometer-golden-green-ref-8315-3/",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.033Z",
    "validityHours": 24,
    "specsPreview": {
      "calibre": "Mecânico de alta complicação",
      "acabamento": "Tradição artesanal suíça",
      "curadoria": "Mesa de Alta Horologia",
      "estilo": "Peça de Colecionador"
    },
    "suggestedImage": "https://monochrome-watches.com/app/uploads/2026/11/Serica-Travel-Chronometer-Golden-Green-8315-3-GMT-review-2-600x237.jpg",
    "imageIsFallback": false,
    "status": "available"
  },
  {
    "id": "pauta-live-destinos-mw4rx4lb-o7i6",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Eric Schmidt Paid $67.6M for a 267-Foot Superyacht Abandoned in Antigua - MotorBiscuit",
    "suggestedHook": "Náutica de Elite: Eric Schmidt Paid $67.6M for a 267-Foot Superiate Abandoned in Antigua",
    "summary": "Eric Schmidt Paid $67.6M for a 267-Foot Superyacht Abandoned in Antigua MotorBiscuit",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNcDY4SmR0dE4ydTE1dEtVOERHMENDekx4RU8yVnZyd1RUNVZNTkxTWkZsd0E1SmpLS04zb2x3N01fWm10cnFhUktxNnU1WnFJdTBtTjNOSFBHNWJDWW44S1JnZzVjM1VlTHljY2s5SW5SRmhCZHdJcWU4MG1MaFo1SjZueDcwdm9KVnJGb0E3ZUdmTk9aUXltTjdVNmNOMlI5Zmc?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-06T09:30:04.799Z",
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
    "id": "pauta-live-supercarros-mw3vs3o4-bdci",
    "source": "Google News Motors (Ferrari/Bugatti)",
    "sourceCategory": "Supercarros",
    "badgeColor": "border-amber-500/40 text-amber-400 bg-amber-500/10",
    "category": "Supercarros",
    "categorySlug": "supercarros",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 87,
    "rankingTier": "B",
    "originalTitle": "Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist - Forbes",
    "suggestedHook": "Hipercarros: Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist",
    "summary": "Enzo Ferrari Jr. Talks Design And AI Future With Ferrari Enzo Stylist Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQQ3NlZU9xYW1OVkpWam0zOEZCZzZDV3hnMThYaXZ3MVlOal92TEtNTmxSQlpsWFpocFNPVzlDT1o4TG9RUUptWGZSNW1jaVBfV3Flempwa05JNkdUaG5vZktvVEluR1NfVk4zYXZuZ29tRkVLVXhiOWhsRkFVdmV4M0J3QkE3MXBSN1NyVC1Ec2ZoUG9mdXFidzlYV3dLaUxHZE5nTEtCWVpsTmZURHoyS0pJY0VlTW9TWU9n?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T18:30:22.612Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Hipercarro de Colecionismo",
      "telemetria": "Calibração de pista",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1661311928884-7e36f478109f?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "duplicate"
  },
  {
    "id": "pauta-live-destinos-mw3chpdl-2090",
    "source": "Google News Superyachts",
    "sourceCategory": "Destinos & Iates",
    "badgeColor": "border-purple-500/40 text-purple-400 bg-purple-500/10",
    "category": "Destinos & Iates",
    "categorySlug": "destinos",
    "authorSlug": "gabriel-fontes",
    "rankingScore": 84,
    "rankingTier": "B",
    "originalTitle": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth - Citywealth",
    "suggestedHook": "Beyond Monaco: The Red Sea’s Bid for the World’s Superiate Wealth",
    "summary": "Beyond Monaco: The Red Sea’s Bid for the World’s Superyacht Wealth Citywealth",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNRlc2YUN0T2pQeXJLMlg2TzA5aXVqUnpOblpXVmVWc0txeXc4RTIzOVkzR0xoT3A2RF82Q1FqcjZwN1dxa3F0QW1vWWtSQ3FBd3RYMU9PWGRyZHJ6ek4zQnY3UjZyLWJBbnFqWDhBM0RNVlpFNDZQX2locU5ldDA3N1lWMzMzaGc3UjF1UUdGckhxZHJMak9uZGQwTk9aTy1h?oc=5",
    "publishedTime": "Detectado ao vivo nas últimas 24h",
    "createdAt": "2026-11-05T09:30:24.825Z",
    "validityHours": 24,
    "specsPreview": {
      "categoria": "Superiate Transoceânico",
      "engenharia": "Casco de aço naval e compósitos",
      "curadoria": "Gabriel Fontes"
    },
    "suggestedImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400",
    "imageIsFallback": true,
    "status": "expired"
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
