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
  // ==========================================
  // 1. HIPERCARROS & VELOCIDADE (Gabriel Fontes)
  // ==========================================
  {
    id: 'pauta-rr-1',
    source: 'Robb Report Motors',
    sourceCategory: 'Motors',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    rankingScore: 96,
    originalTitle: 'Koenigsegg Jesko Absolut Crushes 0-400-0 km/h World Record in 27.83 Seconds',
    suggestedHook: 'Koenigsegg Jesko Absolut: O Monstro Sueco de 1.600 cv que Pulverizou o Recorde Mundial de 0-400-0 km/h em 27,83 Segundos',
    summary: 'Christian von Koenigsegg colocou o Jesko Absolut na pista militar sueca e aniquilou a marca da Rimac por quase 1 segundo inteiro, utilizando combustível E85 e aerodinâmica de coeficiente 0.278.',
    sourceUrl: 'https://robbreport.com/motors/cars/koenigsegg-jesko-absolut-0-400-0-record-1235661000/',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Hoje às 14:10',
    createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      potencia: '1.600 cv (em E85)',
      recorde: '0-400-0 km/h em 27,83s',
      cambio: 'LST Light Speed Transmission de 9 marchas sem embreagem',
      coeficiente: 'Cx 0.278'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-rr-2',
    source: 'Classic Driver',
    sourceCategory: 'Motors',
    badgeColor: 'border-red-500/40 text-red-400 bg-red-500/10',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    rankingScore: 93,
    originalTitle: 'Gordon Murray Automotive Unveils T.50s Niki Lauda with 12,100 RPM V12',
    suggestedHook: 'GMA T.50s Niki Lauda: O Bólido de Pista de 852 kg com Turbina de Vácuo Traseira e V12 Cosworth que Gira a 12.100 RPM',
    summary: 'Apenas 25 felizardos mundiais terão o monstro de Gordon Murray. Uma ventoinha de 400 mm suga o ar sob o assoalho gerando 1.500 kg de efeito solo sem a necessidade de asas gigantescas.',
    sourceUrl: 'https://www.classicdriver.com/en/article/cars/gordon-murray-t50s-niki-lauda',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Hoje às 11:45',
    createdAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      motor: 'Cosworth V12 3.9L Naturalmente Aspirado',
      rotacao: '12.100 RPM',
      peso: '852 kg',
      tiragem: '25 exemplares numerados'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-rr-3',
    source: 'Evo Magazine',
    sourceCategory: 'Motors',
    badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    rankingScore: 95,
    originalTitle: 'Pagani Huayra R Evo Unveiled with 900 HP V12 and Longtail Aero',
    suggestedHook: 'Pagani Huayra R Evo: O Monstro Longtail de 900 cv com V12 Aspirado de 9.200 RPM que Gera 1.000 kg de Downforce a 320 km/h',
    summary: 'Horacio Pagani esticou a carroceria do Huayra em 19 centímetros inspirando-se nos protótipos de Le Mans dos anos 1970, instalando monocoque de Carbo-Titânio HP62 G2.',
    sourceUrl: 'https://www.evo.co.uk/pagani/huayra-r-evo',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Hoje às 09:15',
    createdAt: new Date(Date.now() - 7 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      motor: 'V12-R Evo 6.0L Aspirado HWA',
      potencia: '900 cv a 8.750 RPM',
      chassi: 'Carbo-Titânio HP62 G2 em autoclave a 6 bar',
      downforce: '1.000 kg a 320 km/h'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=max&q=85&w=1800',
    imageFocus: 'bottom',
    status: 'available'
  },
  {
    id: 'pauta-rr-4',
    source: 'Top Gear UK',
    sourceCategory: 'Motors',
    badgeColor: 'border-zinc-500/40 text-zinc-300 bg-zinc-500/10',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    rankingScore: 94,
    originalTitle: 'Porsche 911 GT3 RS with Manthey Kit Sets 6:43 Lap at the Ring',
    suggestedHook: 'Porsche 911 GT3 RS Manthey Racing: A Máquina de 6min43s em Nürburgring com Calhas de Venturi em Carbono e Amortecedores de 4 Vias',
    summary: 'Em Meuspath, a divisão de competição da Porsche refinou a telemetria do GT3 RS adicionando calotas aerodinâmicas de fibra de carbono nas rodas traseiras e suspensão recalibrada para compressão milimétrica.',
    sourceUrl: 'https://www.topgear.com/car-news/supercars/manthey-porsche-911-gt3-rs',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Ontem às 18:30',
    createdAt: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      tempoRing: '6:43.90 no Nordschleife',
      downforce: '1.000 kg a 285 km/h',
      amortecedores: 'Coilover Manthey regulável em 4 vias',
      homologacao: 'Certificação de corrida FIA'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },

  // ==========================================
  // 2. ALTA RELOJOARIA & ATELIÊS (Clara Meirelles)
  // ==========================================
  {
    id: 'pauta-hod-1',
    source: 'Hodinkee',
    sourceCategory: 'Watches',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    rankingScore: 94,
    originalTitle: 'Hands-On With The F.P. Journe Chronomètre Bleu Byblos In Tantalum',
    suggestedHook: 'F.P. Journe Chronomètre Bleu: A Rara Caixa de Tântalo com Mostrador Azul Espelhado que Disparou 400% no Mercado Secundário',
    summary: 'O metal tântalo funde a 3.000 graus e destrói brocas convencionais. François-Paul Journe domou o material para criar uma das peças mais cobiçadas pelos colecionadores mais discretos do planeta.',
    sourceUrl: 'https://www.hodinkee.com/articles/fp-journe-chronometre-bleu-hands-on',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Hoje às 09:30',
    createdAt: new Date(Date.now() - 7 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      caixa: 'Tântalo polido de alta densidade',
      calibre: '1304 em Ouro Rosa 18k sólido',
      reserva: '56 horas com duplo tambor',
      cotacao: 'US$ 95.000 (mercado secundário)'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-hod-2',
    source: 'Monochrome Watches',
    sourceCategory: 'Watches',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    rankingScore: 95,
    originalTitle: 'A. Lange & Söhne Datograph Perpetual Tourbillon Honeygold Lumen',
    suggestedHook: 'A. Lange & Söhne Datograph Honeygold Lumen: A Obra-Prima Saxônica de 516 Componentes que Brilha no Escuro sob Safira Fosforescente',
    summary: 'A manufatura de Glashütte uniu sua exclusiva liga de Honeygold com o tratamento luminescente integral do mostrador de safira fumê e um turbilhão com parada de segundos patenteada.',
    sourceUrl: 'https://monochrome-watches.com/a-lange-sohne-datograph-perpetual-tourbillon-honeygold-lumen/',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Ontem às 21:00',
    createdAt: new Date(Date.now() - 11 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      liga: 'Honeygold 18k patenteado (mais duro que ouro comum)',
      calibre: 'L952.4 manufaturado à mão',
      complicacoes: 'Cronógrafo Flyback, Calendário Perpétuo e Turbilhão',
      tiragem: 'Limitado a 50 exemplares mundiais'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-hod-3',
    source: 'The Naked Watchmaker',
    sourceCategory: 'Watches',
    badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    rankingScore: 97,
    originalTitle: 'Deconstruction of the Vacheron Constantin Les Cabinotiers Solaria',
    suggestedHook: 'Vacheron Constantin Les Cabinotiers: A Mecânica de 40 Complicações em Platina que Exigiu 8 Anos de Cálculo Astronômico em Genebra',
    summary: 'Criado no departamento fechado de encomendas sob medida da mais antiga manufatura contínua do mundo, o relógio calcula o tempo sideral, equações solares e marés gravitacionais lunares.',
    sourceUrl: 'https://www.vacheron-constantin.com/cabinotiers-solaria',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Hoje às 10:45',
    createdAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      complicacoes: '40 complicações astronômicas',
      caixa: 'Platina 950 com gravura manual burilada',
      componentes: '1.120 peças acabadas à mão',
      tiragem: 'Peça Única (Pièce Unique)'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-hod-4',
    source: 'Quill & Pad',
    sourceCategory: 'Watches',
    badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    rankingScore: 93,
    originalTitle: 'Rexhep Rexhepi Chronomètre Contemporain II in Rose Gold',
    suggestedHook: 'Rexhep Rexhepi Chronomètre Contemporain II: O Ateliê Independente de Genebra com Lista de Espera de 7 Anos e Chanfro Manual Absoluto',
    summary: 'Aos 36 anos, Rexhep Rexhepi comanda o ateliê Akrivia e esculpe pontes com medula de sabugueiro silvestre, atraindo comitês de bilionários que trocaram marcas consagradas pela pureza de sua bancada.',
    sourceUrl: 'https://quillandpad.com/rexhep-rexhepi-ccii',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Hoje às 08:30',
    createdAt: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      calibre: 'RR02 de corda manual com segundos mortos',
      mostrador: 'Esmalte Grand Feu branco queimado a 820°C',
      caixa: 'Ouro Rosa 18k manufaturada por Jean-Pierre Hagmann',
      reserva: '82 horas'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },

  // ==========================================
  // 3. PATRIMÔNIO, DINASTIAS & LEILÕES (Henrique Vianna)
  // ==========================================
  {
    id: 'pauta-soth-1',
    source: 'RM Sotheby\'s',
    sourceCategory: 'Auctions',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    rankingScore: 97,
    originalTitle: 'The White Collection: Over 50 Rare Porsche Models Fetch Record $30 Million',
    suggestedHook: 'RM Sotheby\'s The White Collection: O Acervo Secreto de 56 Porsches Brancos Intactos que Arrematou US$ 30,5 Milhões em Houston',
    summary: 'Um colecionador anônimo passou 25 anos adquirindo apenas exemplares brancos imaculados, incluindo um 918 Spyder Weissach com interior azul iate arrematado por quase US$ 4 milhões.',
    sourceUrl: 'https://rmsothebys.com/en/auctions/wc23',
    authorSlug: 'henrique-vianna',
    publishedTime: 'Hoje às 15:20',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      volumeTotal: 'US$ 30.540.000 sob o martelo',
      loteEstrela: 'Porsche 918 Spyder Weissach Package',
      procedencia: 'Acervo privado sem uso mantido em ambiente climatizado',
      leiloeira: 'RM Sotheby\'s Houston'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-forbes-1',
    source: 'Forbes Money',
    sourceCategory: 'Wealth',
    badgeColor: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    rankingScore: 94,
    originalTitle: 'Billionaire Family Offices Boost Physical Gold and Art Allocations to Historic High',
    suggestedHook: 'O Relatório Reservado de Family Offices 2026: Por Que Fortunas Soberanas Estão Aumentando em 35% a Guarda de Ouro Físico e Peças Únicas',
    summary: 'Com a volatilidade dos mercados de dívida soberana e a erosão cambial, os maiores gestores de fortunas multigeracionais de Zurique, Londres e São Paulo migram posições para cofres de segurança máxima.',
    sourceUrl: 'https://forbes.com/billionaires/family-offices-wealth-preservation-report',
    authorSlug: 'henrique-vianna',
    publishedTime: 'Hoje às 08:00',
    createdAt: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      alocacao: 'Ativos Físicos tangíveis em alta de +35%',
      jurisdicoes: 'Suíça, Cingapura e Liechtenstein',
      estrategia: 'Preservação de capital multigeracional',
      fonte: 'Global Family Office Wealth Benchmark'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-chris-1',
    source: 'Christie\'s Geneva',
    sourceCategory: 'Auctions',
    badgeColor: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    rankingScore: 96,
    originalTitle: 'The Blue Royal Diamond Sells for $44 Million at Christie\'s Geneva',
    suggestedHook: 'Christie\'s Genebra: O Diamante Azul Royal de 17.61 Quilates Arrematado por US$ 44 Milhões após Duelo Telefônico de 7 Minutos',
    summary: 'Uma das gemas mais perfeitas já catalogadas pelo Instituto Gemológico da América (GIA), o Blue Royal repousava em cofre particular há cinco décadas antes de reaparecer nas margens do Lago Léman.',
    sourceUrl: 'https://www.christies.com/the-blue-royal-diamond',
    authorSlug: 'henrique-vianna',
    publishedTime: 'Hoje às 12:00',
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      peso: '17.61 quilates Fancy Vivid Blue',
      pureza: 'Internally Flawless (IF)',
      arremate: 'US$ 43.800.000 sob o martelo',
      procedencia: 'Coleção privada suíça mantida intacta por 50 anos'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },

  // ==========================================
  // 4. ARQUITETURA BRUTALISTA & MANSÕES (Henrique Vianna)
  // ==========================================
  {
    id: 'pauta-ad-1',
    source: 'Architectural Digest',
    sourceCategory: 'Architecture',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    rankingScore: 91,
    originalTitle: 'Inside John Lautner\'s Restored Sheats-Goldstein Residence in Beverly Hills',
    suggestedHook: 'Sheats-Goldstein Residence: A Joia Brutalista de Concreto Angular e Vidro em Los Angeles Avaliada em US$ 100 Milhões',
    summary: 'A lendária obra de John Lautner suspensa sobre os cânions de Beverly Hills com teto perfurado por 750 pequenos discos de vidro que capturam a luz da Califórnia como constelações.',
    sourceUrl: 'https://www.architecturaldigest.com/story/sheats-goldstein-residence-john-lautner',
    authorSlug: 'henrique-vianna',
    publishedTime: 'Hoje às 13:00',
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      arquiteto: 'John Lautner (Discípulo de Frank Lloyd Wright)',
      concepcao: 'Concreto protendido e vidro estrutural sem caixilhos',
      localizacao: 'Crestwood Hills, Beverly Hills, EUA',
      patrimonio: 'Doada ao LACMA para preservação perpétua'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-ad-2',
    source: 'Wallpaper*',
    sourceCategory: 'Architecture',
    badgeColor: 'border-stone-400/40 text-stone-300 bg-stone-500/10',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    rankingScore: 92,
    originalTitle: 'Clifftop Minimalist Retreat in Mallorca by Studio MK27',
    suggestedHook: 'Villa sa Caleta em Maiorca: O Refúgio de Travertino e Concreto Esculpido na Falésia Balear Avaliado em € 38 Milhões',
    summary: 'Uma laje monolítica de 45 metros flutua sobre as águas turquesa das Ilhas Baleares, combinando brises em madeira teca e pátios sombreados por ciprestes e oliveiras centenárias.',
    sourceUrl: 'https://www.wallpaper.com/architecture/villa-mallorca-clifftop',
    authorSlug: 'henrique-vianna',
    publishedTime: 'Hoje às 07:15',
    createdAt: new Date(Date.now() - 9 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      area: '1.850 m² construídos em 8.000 m² de falésia',
      materiais: 'Travertino Navona e concreto aparente lavado',
      privacidade: 'Acesso privativo por túnel na rocha e heliponto',
      avaliacao: '€ 38.000.000'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },

  // ==========================================
  // 5. NÁUTICA, SUPERIATES & DESTINOS (Gabriel Fontes)
  // ==========================================
  {
    id: 'pauta-boat-1',
    source: 'Boat International',
    sourceCategory: 'Marine',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    rankingScore: 95,
    originalTitle: 'Lürssen Delivers 122m Megayacht Kismet With Two Helipads and Cryotherapy Chamber',
    suggestedHook: 'Lürssen Kismet: O Megaiate de 122 Metros e US$ 3 Milhões por Semana com Heliponto Duplo e Câmara de Crioterapia Submarina',
    summary: 'Entregue pelo histórico estaleiro alemão de Bremen, a nova embarcação redefine a navegação transoceânica com design assinado pela Nuvolari Lenard e autonomia para cruzar o globo sem reabastecimento.',
    sourceUrl: 'https://www.boatinternational.com/yachts/news/lurssen-kismet-superyacht-delivery',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Hoje às 10:15',
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      comprimento: '122 metros (400 ft)',
      estaleiro: 'Lürssen Werft, Bremen, Alemanha',
      locacao: 'A partir de € 3.000.000 / semana + despesas',
      diferencial: 'Spa balinês completo e câmara de crioterapia a -110°C'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-boat-2',
    source: 'Superyacht Times',
    sourceCategory: 'Marine',
    badgeColor: 'border-blue-400/40 text-blue-300 bg-blue-500/10',
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    rankingScore: 93,
    originalTitle: 'Feadship 84m Obsidian: The Hybrid Eco-Superyacht with Carbon-Neutral Cruising',
    suggestedHook: 'Feadship Obsidian: O Monstro Híbrido de 84 Metros com Casco Otimizado por Inteligência Artificial e Baterias de 4.5 MWh na Holanda',
    summary: 'O estaleiro de Haarlem combinou geradores a biodiesel HVO com um banco de baterias equivalente a 45 carros elétricos, navegando 35 milhas náuticas em silêncio absoluto sem emitir um grama de fumaça.',
    sourceUrl: 'https://www.superyachttimes.com/yacht-news/feadship-obsidian-84m',
    authorSlug: 'gabriel-fontes',
    publishedTime: 'Ontem às 16:00',
    createdAt: new Date(Date.now() - 17 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      comprimento: '84.2 metros',
      estaleiro: 'Feadship, Holanda',
      baterias: '4.5 MWh em fosfato de ferro-lítio',
      autonomia: '5.500 milhas náuticas a 12 nós'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },

  // ==========================================
  // 6. ALTA-COSTURA & MAISONS HISTÓRICAS (Clara Meirelles)
  // ==========================================
  {
    id: 'pauta-fash-1',
    source: 'Vogue Business',
    sourceCategory: 'Fashion',
    badgeColor: 'border-rose-400/40 text-rose-300 bg-rose-500/10',
    category: 'Alta-Costura',
    categorySlug: 'estilo',
    rankingScore: 94,
    originalTitle: 'Inside Hermès Secret Saddlery Workshop at 24 Rue du Faubourg Saint-Honoré',
    suggestedHook: 'Hermès Faubourg: O Ateliê Secreto em Paris Onde 30 Mestres Costuram Selas em Couro Barenia sob Linho Encerado a Mão desde 1837',
    summary: 'Sob a claraboia do lendário endereço parisiense, artesãos aplicam cera virgem de abelha em fios de linho e utilizam o ponto selê de duas agulhas cruzadas que nenhuma máquina industrial foi capaz de replicar.',
    sourceUrl: 'https://www.voguebusiness.com/fashion/inside-hermes-secret-saddlery',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Hoje às 11:00',
    createdAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      couro: 'Box Calf e Barenia com curtimento vegetal de carvalho',
      tecnica: 'Point sellier manual com linha de linho encerada',
      tempoManufatura: 'Mínimo de 32 horas de montagem por artesão',
      procedencia: 'Ateliê histórico de Pantin e Faubourg Saint-Honoré, Paris'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
  },
  {
    id: 'pauta-fash-2',
    source: 'BoF',
    sourceCategory: 'Fashion',
    badgeColor: 'border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/10',
    category: 'Alta-Costura',
    categorySlug: 'estilo',
    rankingScore: 92,
    originalTitle: 'Maison Moynat Reissues Archival 1902 Limousine Trunk with Curved Wood Frame',
    suggestedHook: 'Moynat Malle Limousine: O Baú Curvo de Madeira de 1902 Forjado sob Medida para o Teto dos Primeiros Torpedos Automotivos',
    summary: 'A lendária malleterie francesa recuperou moldes centenários em madeira de álamo vaporizada e revestimento em lona vegetal impermeabilizada com gutapercha, celebrando o nascimento das viagens motorizadas.',
    sourceUrl: 'https://www.businessoffashion.com/luxury/moynat-archival-trunks',
    authorSlug: 'clara-meirelles',
    publishedTime: 'Hoje às 09:00',
    createdAt: new Date(Date.now() - 7 * 3600 * 1000).toISOString(),
    validityHours: 24,
    specsPreview: {
      madeira: 'Álamo curvo sob vapor manual e ferragens em latão maciço',
      tecido: 'Lona impermeabilizada com laca vegetal histórica',
      tiragem: '12 peças numeradas por ano',
      procedencia: 'Ateliê Moynat, Paris'
    },
    suggestedImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400',
    status: 'available'
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
