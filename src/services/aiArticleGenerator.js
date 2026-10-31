/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — MOTOR EDITORIAL MULTI-AGENTE & IA DE ALTO PADRÃO
 * ==============================================================================
 * Arquitetura de Redação com Personas Homologadas (SSOT Blueprint v2.5.0):
 * 1. SCOUT & CONTEXTO: Análise semântica de entidades, procedência e gravitas.
 * 2. REDAÇÃO COM PERSONA:
 *    - Henrique Vianna (Patrimônio Dinástico, Silêncio Mineral & Brutalismo)
 *    - Gabriel Fontes (Termodinâmica, Telemetria & Hipercarros)
 *    - Clara Meirelles (Alta Relojoaria, Savoir-Faire & Ateliês)
 * 3. CRÍTICO ANTI-IA & EVALUATOR-OPTIMIZER:
 *    - Auditoria de Blacklist de clichês proibidos (zero tolerância)
 *    - Injeção de Burstiness rítmica (staccato de 4-7 palavras vs legato de até 45)
 *    - Quebra da simetria triádica e eliminação de vacilações passivas (hedging)
 * 4. DUAL-ENGINE: Google Gemini API (gemini-flash-lite-latest / gemini-flash-latest)
 *    com fallback para o Sintetizador Editorial Semântico Local Homologado.
 * ==============================================================================
 */

import { AUTHORS, CATEGORIES } from '../data/mockData.js';
import { calculateEditorialScore } from './rankingEngine.js';

// Chave da API no localStorage, Vite env ou process env
export function getGeminiApiKey() {
  try {
    return (
      (typeof localStorage !== 'undefined' && localStorage.getItem('radar_gemini_api_key')) ||
      (typeof import.meta !== 'undefined' && (import.meta?.env?.VITE_GEMINI_API_KEY || import.meta?.env?.GEMINI_API_KEY)) ||
      (typeof process !== 'undefined' && (process?.env?.VITE_GEMINI_API_KEY || process?.env?.GEMINI_API_KEY)) ||
      ''
    );
  } catch (e) {
    return (
      (typeof import.meta !== 'undefined' && (import.meta?.env?.VITE_GEMINI_API_KEY || import.meta?.env?.GEMINI_API_KEY)) ||
      (typeof process !== 'undefined' && (process?.env?.VITE_GEMINI_API_KEY || process?.env?.GEMINI_API_KEY)) ||
      ''
    );
  }
}

export function saveGeminiApiKey(key) {
  try {
    if (key) {
      localStorage.setItem('radar_gemini_api_key', key.trim());
    } else {
      localStorage.removeItem('radar_gemini_api_key');
    }
    return true;
  } catch (e) {
    return false;
  }
}

// Clichês estritamente banidos da redação do Radar do Luxo
export const BANNED_CLICHES = [
  'revolucionário',
  'de tirar o fôlego',
  'um verdadeiro espetáculo',
  'o que há de melhor',
  'sem dúvidas',
  'uma verdadeira obra de arte',
  'experiência única',
  'luxo sem limites',
  'para ninguém botar defeito',
  'de cair o queixo',
  'de outro mundo',
  'vale destacar',
  'vale ressaltar',
  'é importante notar',
  'em um mundo onde',
  'no cenário atual',
  'mergulhe no universo',
  'embarque nesta jornada',
  'em suma',
  'concluindo',
  'por fim',
  'não apenas... mas também',
  'o epítome de',
  'divisor de águas'
];

// Imagens de acervo selecionadas e verificadas por vertical (fit=max preserva 100% do sujeito sem corte forçado de bordas)
export const HOMOLOGATED_IMAGES = {
  supercarros: [
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=max&q=85&w=1800'
  ],
  relogios: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=max&q=85&w=1800'
  ],
  arquitetura: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=max&q=85&w=1800'
  ],
  wealth: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=max&q=85&w=1800'
  ],
  estilo: [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=max&q=85&w=1800'
  ],
  destinos: [
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=max&q=85&w=1800',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=max&q=85&w=1800'
  ]
};

/**
 * Atribuição editorial inteligente com análise de intenção primária
 */
export function analyzeEditorialContext(rawInput) {
  const text = rawInput.toLowerCase();

  const isAuctionOrMarket = 
    text.includes('leilão') || text.includes('leilao') || text.includes('sotheby') ||
    text.includes('christie') || text.includes('phillips') || text.includes('arrematado') ||
    text.includes('recorde') || text.includes('milhões') || text.includes('milhoes') ||
    text.includes('us$') || text.includes('€') || text.includes('patrimônio');

  const isWealthAndBillionaires = 
    text.includes('bilion') || text.includes('forbes') || text.includes('fortuna') ||
    text.includes('capital') || text.includes('investimento') || text.includes('patrimonio') ||
    text.includes('patrimônio') || text.includes('lemann') || text.includes('family office') ||
    text.includes('wealth') || text.includes('dinastia') || text.includes('finanças');

  const isWatch = 
    text.includes('relógio') || text.includes('relogio') || text.includes('watch') ||
    text.includes('patek') || text.includes('rolex') || text.includes('audemars') ||
    text.includes('vacheron') || text.includes('lange') || text.includes('richard mille') ||
    text.includes('turbilhão') || text.includes('tourbillon') || text.includes('cronógrafo') ||
    text.includes('complica') || text.includes('calibre') || text.includes('diamante') ||
    text.includes('safira') || text.includes('genebra') || text.includes('joia') ||
    text.includes('horologia') || text.includes('chronomètre') || text.includes('gmt');

  const isAutomotive = 
    text.includes('carro') || text.includes('ferrari') || text.includes('porsche') ||
    text.includes('aston martin') || text.includes('lamborghini') || text.includes('mclaren') ||
    text.includes('bugatti') || text.includes('pagani') || text.includes('koenigsegg') ||
    text.includes('motor') || text.includes('v12') || text.includes('v8') || text.includes('v16') ||
    text.includes('biturbo') || text.includes('cv') || text.includes('cavalos') ||
    text.includes('downforce') || text.includes('telemetria') || text.includes('nürburgring') ||
    text.includes('nordschleife') || text.includes('iate') || text.includes('yacht') ||
    text.includes('riva') || text.includes('lürssen') || text.includes('náutico');

  const isArchitecture = 
    text.includes('vila') || text.includes('villa') || text.includes('casa') ||
    text.includes('arquitetura') || text.includes('penthouse') || text.includes('mansão') ||
    text.includes('mansao') || text.includes('brutalista') || text.includes('concreto');

  const isFashion = 
    text.includes('hermès') || text.includes('hermes') || text.includes('birkin') ||
    text.includes('bolsa') || text.includes('costura') || text.includes('alfaiataria') ||
    text.includes('moynat') || text.includes('ateliê de couro');

  if (isWealthAndBillionaires) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: 'Arquitetura',
      categorySlug: 'arquitetura',
      themeType: 'wealth',
      reasoning: 'Atribuído a Henrique Vianna: Centros de gravidade do capital global, governança dinástica, family offices e soberania patrimonial.'
    };
  }

  if (isAuctionOrMarket && !isWatch) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: isAutomotive ? 'Supercarros' : 'Arquitetura',
      categorySlug: isAutomotive ? 'supercarros' : 'arquitetura',
      themeType: 'auction',
      reasoning: 'Atribuído a Henrique Vianna: Dinâmica de leilões internacionais fechados, liquidez e peso de patrimônio imune.'
    };
  }

  if (isWatch) {
    return {
      authorSlug: 'clara-meirelles',
      author: AUTHORS['clara-meirelles'],
      category: 'Alta Relojoaria',
      categorySlug: 'relogios',
      themeType: 'watch',
      reasoning: 'Atribuído a Clara Meirelles: Microengenharia suíça, acabamento manual de calibres e tradição de manufatura de alta complicação.'
    };
  }

  if (isAutomotive) {
    const isMarine = text.includes('iate') || text.includes('yacht') || text.includes('riva') || text.includes('lürssen') || text.includes('náutico');
    return {
      authorSlug: 'gabriel-fontes',
      author: AUTHORS['gabriel-fontes'],
      category: isMarine ? 'Destinos & Iates' : 'Supercarros',
      categorySlug: isMarine ? 'destinos' : 'supercarros',
      themeType: 'automotive',
      reasoning: 'Atribuído a Gabriel Fontes: Dinâmica inercial de alta velocidade, aerodinâmica de Venturi e telemetria mecânica pura.'
    };
  }

  if (isArchitecture) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: 'Arquitetura',
      categorySlug: 'arquitetura',
      themeType: 'architecture',
      reasoning: 'Atribuído a Henrique Vianna: Espacialidade monumental, luz natural, rocha calcária e o silêncio mineral.'
    };
  }

  if (isFashion) {
    return {
      authorSlug: 'clara-meirelles',
      author: AUTHORS['clara-meirelles'],
      category: 'Alta-Costura',
      categorySlug: 'estilo',
      themeType: 'fashion',
      reasoning: 'Atribuído a Clara Meirelles: O saber-fazer manual dos ateliês históricos parisienses e a costura selê com linho encerado.'
    };
  }

  return {
    authorSlug: 'henrique-vianna',
    author: AUTHORS['henrique-vianna'],
    category: 'Supercarros',
    categorySlug: 'supercarros',
    themeType: 'general',
    reasoning: 'Atribuído a Henrique Vianna: Crônica editorial de alto valor e relevância macro na mesa do Radar.'
  };
}

const VALID_AUTHOR_SLUGS = ['henrique-vianna', 'gabriel-fontes', 'clara-meirelles'];

/**
 * Usa a persona atribuída pela pauta como fonte única quando ela foi informada.
 * A análise semântica continua sendo o fallback para o gerador usado diretamente
 * no painel administrativo, sem uma pauta previamente curada.
 */
function resolveEditorialContext(rawInput, authorSlug) {
  const analyzedContext = analyzeEditorialContext(rawInput);
  if (!VALID_AUTHOR_SLUGS.includes(authorSlug)) {
    return analyzedContext;
  }

  const author = AUTHORS[authorSlug];
  const themeType = authorSlug === 'clara-meirelles'
    ? 'watch'
    : authorSlug === 'gabriel-fontes'
      ? 'automotive'
      : 'wealth';

  return {
    ...analyzedContext,
    authorSlug,
    author,
    themeType,
    reasoning: `Persona editorial previamente atribuída pela curadoria: ${author.name}. ${author.role}.`
  };
}

/**
 * Avalia o nível de gravidade e cadência narrativa (Gravitas)
 */
export function assessEditorialGravitas(topic) {
  const text = topic.toLowerCase();
  const isHistoric = text.includes('recorde') || text.includes('51m') || text.includes('leilão') || text.includes('sotheby') || text.includes('christie');
  const isDeepCraft = text.includes('artesanal') || text.includes('calibre') || text.includes('manufatura') || text.includes('anglage') || text.includes('costura');

  if (isHistoric) {
    return {
      mode: 'impact',
      densityName: 'Pulso de Mercado & Recorde de Leilão',
      paragraphCount: 4,
      readTime: '5 min de leitura',
      tempo: 'Cirúrgico, aristocrático e definitivo. Cada número fiduciário carrega peso de patrimônio histórico.'
    };
  }

  if (isDeepCraft) {
    return {
      mode: 'contemplative',
      densityName: 'Crônica de Manufatura & Savoir-Faire',
      paragraphCount: 5,
      readTime: '6 min de leitura',
      tempo: 'Literário, íntimo e contemplativo. A matéria-prima nobre e a paciência do ateliê ditam a respiração do texto.'
    };
  }

  return {
    mode: 'dynamic',
    densityName: 'Revelação Técnica & Engenharia Cinética',
    paragraphCount: 4,
    readTime: '5 min de leitura',
    tempo: 'Acelerado, matemático e sensorial. Alterne dados de telemetria com o impacto físico inercial.'
  };
}

/**
 * Extrai entidades essenciais para síntese determinística
 */
function extractEntities(rawInput) {
  let firstLine = (rawInput.split('\n')[0] || rawInput).trim();
  let title = firstLine;

  if (title.startsWith('http://') || title.startsWith('https://')) {
    try {
      const url = new URL(title);
      const segment = url.pathname.split('/').filter(Boolean).pop() || '';
      title = decodeURIComponent(segment).replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    } catch (e) {
      title = 'Lançamento Editorial da Curadoria Radar';
    }
  }

  const moneyMatch = rawInput.match(/(?:US\$|R\$|€|£|\$)\s*[\d.,]+\s*(?:milhões|milhoes|m|bi)?/i);
  const money = moneyMatch ? moneyMatch[0] : null;

  const yearMatch = rawInput.match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? yearMatch[0] : null;

  const auctionHouseMatch = rawInput.match(/\b(Sotheby's|Christie's|Phillips|Bonhams|Gooding)\b/i);
  const auctionHouse = auctionHouseMatch ? auctionHouseMatch[0] : null;

  const cityMatch = rawInput.match(/\b(Nova York|Genebra|Paris|Londres|Mônaco|Capri|Tóquio|Maranello|Stuttgart|Molsheim|Zurique)\b/i);
  const city = cityMatch ? cityMatch[0] : null;

  return { title, money, year, auctionHouse, city };
}

/**
 * SINTETIZADOR EDITORIAL LOCAL HOMOLOGADO (Fallback Determinístico de Alto Padrão)
 */
function synthesizeLocally(rawInput, context, gravitas) {
  const { title, money, year, auctionHouse, city } = extractEntities(rawInput);
  
  let formattedTitle = title;
  if (!formattedTitle.includes(':') && formattedTitle.length < 50) {
    if (context.themeType === 'watch') {
      formattedTitle = `${formattedTitle}: A Mecânica de Alta Complicação que Rejeitou as Telas Digitais por Calibres Manuais`;
    } else if (context.themeType === 'automotive') {
      formattedTitle = `${formattedTitle}: O Bólido de Engenharia Pura que Pulverizou Limites com Telemetria e Tolerância de Mícrons`;
    } else {
      formattedTitle = `${formattedTitle}: O Refúgio de Soberania Patrimonial que Reafirma o Silêncio Mineral Contra a Volatilidade`;
    }
  }

  let excerpt = '';
  let paragraphs = [];
  let specs = {};

  if (context.themeType === 'watch') {
    excerpt = `Com micromeânica ajustada em tolerâncias microscópicas e acabamento manual em bancadas suíças, a análise de ${title} revela o contraponto supremo à efemeridade contemporânea.`;
    paragraphs = [
      `Há um abismo filosófico intransponível entre dispositivos eletrônicos destinados ao descarte precoce e a microescultura mecânica preservada em ${title}. Nas bancadas silenciosas de ateliês centenários no Jura suíço, onde o único som audível é a cadência respiratória do mestre sob a lupa binocular, esta criação ergue-se como um manifesto de paciência e rigor humanista.`,
      `O trem de engrenagens do calibre opera em frequências rigorosamente calibradas para anular as distorções da gravidade sobre a mola espiral. Cada ponte de ouro recebeu chanframentos angulares executados manualmente com pontas de madeira de sabugueiro silvestre e pastas diamantadas finas — um método tátil que nenhuma máquina CNC de cinco eixos consegue replicar com o mesmo reflexo orgânico da luz natural.`,
      `A platina maciça da caixa repousa no pulso com a densidade mineral que somente as ligas mais nobres oferecem. Através da safira com tratamento antirreflexo duplo, o mostrador facetado dialoga com a luz ambiente em sombras sutis, revelando detalhes que permanecem como um pacto silencioso compartilhado apenas com quem domina os códigos da alta horologia.`,
      `Para o colecionador de pulso treinado, ${title} não configura um capricho efêmero, mas uma âncora patrimonial duradoura. Em um século marcado por obsolescências programadas, portar uma máquina mecânica concebida para continuar pulsando com precisão daqui a duzentos anos é a maior declaração de soberania possível.`
    ];
    specs = {
      calibre: 'Manufatura Mecânica de Corda Manual com Balanço Compensado',
      manufatura: title,
      caixa: 'Platina 950 com Safira Dupla e Fundo Transparente',
      reservaDeMarcha: 'Mínimo de 65 horas de reserva ininterrupta',
      distribuicao: 'Alocação restrita a clientes homologados da maison'
    };
  } else if (context.themeType === 'automotive') {
    excerpt = `Forjado nos limites da aerodinâmica ativa e da termodinâmica de pista, ${title} traduz a busca obsessiva pela aderência inercial e pelo feedback mecânico puro.`;
    paragraphs = [
      `Quando a equipe de engenharia encarregada de ${title} recebeu o mandato de ignorar concessões industriais de larga escala para focar unicamente na física estequiométrica da velocidade, o resultado transcendeu as fronteiras convencionais do automobilismo esportivo. Não se trata de cavalos de força brutos para catálogos comerciais, mas de uma coreografia milimétrica entre pressão aerodinâmica de Venturi e controle inercial dinâmico.`,
      `A estrutura monocoque em carbo-titânio curada em autoclave aeroespacial a 6 bar canaliza os vórtices de ar com a mesma precisão cirúrgica de uma aeronave de caça. Em velocidades de curva elevada, os atuadores ativos ajustam os difusores traseiros em frações de segundo, gerando carga vertical suficiente para colar os compostos de borracha ao asfalto sob forças laterais implacáveis.`,
      `O coletor de escape usinado em ligas de titânio e Inconel 625 entrega uma assinatura acústica pura, incandescente e desprovida de simuladores sintéticos de cabine. Cada estalo metálico do trambulador ao engrenar marchas atesta que a telemetria não substitui a emoção mecânica; ela a eleva ao patamar da arte cinestésica.`,
      `Com homologação limitada e tiragem rigorosamente numerada para o circuito internacional de clientes convidados, ${title} estabelece um divisor de águas técnico antes que a eletrificação homogeneíze as sensações táteis de pilotagem.`
    ];
    specs = {
      propulsao: 'Engenharia de Alta Resposta Térmica Aspirada / Híbrida Pura',
      chassi: 'Monocoque Integral em Carbo-Titânio com Subchassis em Alumínio',
      downforce: 'Aerodinâmica ativa de efeito solo com canais de Venturi',
      alocacao: 'Tiragem limitada estrita sob convite da fábrica'
    };
  } else {
    excerpt = `Uma radiografia da soberania patrimonial e do silêncio mineral em ${title}, onde a discrição supera qualquer ruído especulativo do mercado.`;
    paragraphs = [
      `A análise dos centros de gravidade do capital privado contemporâneo não é um mero exercício contábil; trata-se do mapeamento das forças materiais que desenham a perenidade histórica. O panorama registrado em torno de ${title} evidencia a solidez de um estrato patrimonial que opera inteiramente à margem das oscilações voláteis do pregão diário.`,
      `No topo da pirâmide, a preservação dos impérios familiares se sustenta na escolha criteriosa de ativos físicos dotados de imunidade temporal. A alocação desses recursos migra silenciosamente para enclaves protegidos por rocha calcária, travertino romano de corte ancestral e peças museológicas catalogadas cuja proveniência documental é incontestável.`,
      `O prestígio autêntico deste circuito fechado não busca validação midiática performática; ele se manifesta na autonomia sobre o próprio tempo, na discrição fiduciária e na capacidade de edificar estruturas concebidas para atravessar séculos sem depender da aprovação efêmera das massas.`,
      `A mensagem que emerge deste monumento é inequívoca: enquanto o consumo barulhento seduz os observadores superficiais, os guardiões do capital soberano permanecem fiéis ao ativo mais raro do planeta — o silêncio mineral das obras imunes à passagem das eras.`
    ];
    specs = {
      ativo: title,
      localizacao: city || 'Circuito Financeiro Suíço / Genebra / Mayfair',
      patrimonio: 'Ativo Troféu com Custódia Fiduciária e Prova de Proveniência',
      governanca: 'Alocação Estratégica para Preservação Multigeracional'
    };
  }

  const catKey = context.categorySlug || 'supercarros';
  const gallery = HOMOLOGATED_IMAGES[catKey] || HOMOLOGATED_IMAGES.supercarros;
  const image = gallery[Math.floor(Math.random() * gallery.length)];

  const slug = formattedTitle
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return {
    title: formattedTitle,
    slug: `${slug}-${Date.now().toString().slice(-4)}`,
    category: context.category,
    categorySlug: context.categorySlug,
    authorSlug: context.authorSlug,
    authorName: context.author.name,
    authorRole: context.author.role,
    reasoning: context.reasoning,
    gravitasInfo: gravitas,
    excerpt,
    contentParagraphs: paragraphs,
    specs,
    image,
    type: 'article',
    badge: 'CURADORIA RADAR',
    readTime: gravitas.readTime,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    status: 'published',
    rankingScore: 94,
    imageFocus: context.categorySlug === 'supercarros' ? 'bottom' : 'center',
    engineSource: 'local-synthesizer'
  };
}

/**
 * PÓS-PROCESSADOR & AUDITOR DE QUALIDADE CRÍTICA (EVALUATOR-OPTIMIZER ANTI-IA)
 * Executa uma passada rigorosa de lapidação eliminando clichês e auditando ritmo.
 */
export function auditAndCleanArticle(articleData, authorSlug = 'henrique-vianna') {
  if (!articleData) return null;

  let cleanedTitle = (articleData.title || '').trim();
  let cleanedExcerpt = (articleData.excerpt || '').trim();
  let paragraphs = Array.isArray(articleData.contentParagraphs) ? [...articleData.contentParagraphs] : [];

  // 1. Substituição de clichês proibidos por substantivos e verbos nobres
  const replacements = [
    { regex: /revolucionário/gi, rep: 'singular' },
    { regex: /de tirar o fôlego/gi, rep: 'de impacto monumental' },
    { regex: /um verdadeiro espetáculo/gi, rep: 'uma demonstração de maestria física' },
    { regex: /o que há de melhor/gi, rep: 'o ápice da manufatura' },
    { regex: /sem dúvidas/gi, rep: 'inequivocamente' },
    { regex: /uma verdadeira obra de arte/gi, rep: 'um artefato de proporções esculturais' },
    { regex: /experiência única/gi, rep: 'experiência reservada a poucos' },
    { regex: /luxo sem limites/gi, rep: 'precisão construtiva absoluta' },
    { regex: /para ninguém botar defeito/gi, rep: 'com rigor impecável' },
    { regex: /de cair o queixo/gi, rep: 'surpreendente' },
    { regex: /vale destacar que/gi, rep: 'nota-se que' },
    { regex: /vale ressaltar que/gi, rep: 'evidencia-se que' },
    { regex: /é importante notar que/gi, rep: 'constata-se que' },
    { regex: /em suma/gi, rep: 'em veredito' },
    { regex: /mergulhe no universo/gi, rep: 'explore o ateliê' },
    { regex: /não apenas(.*?)mas também/gi, rep: '$1 e simultaneamente' }
  ];

  paragraphs = paragraphs.map(p => {
    let clean = p;
    for (const item of replacements) {
      clean = clean.replace(item.regex, item.rep);
    }
    return clean;
  });

  for (const item of replacements) {
    cleanedTitle = cleanedTitle.replace(item.regex, item.rep);
    cleanedExcerpt = cleanedExcerpt.replace(item.regex, item.rep);
  }

  // 2. Garante a fórmula do Hook se o título for morno
  if (!cleanedTitle.includes(':') && cleanedTitle.length < 50) {
    cleanedTitle = `${cleanedTitle}: A Nova Fronteira de Engenharia e Valor Fiduciário`;
  }

  // 3. Cálculo de pontuação editorial
  const rankingResult = calculateEditorialScore({
    title: cleanedTitle,
    excerpt: cleanedExcerpt,
    specs: articleData.specs || {},
    authorSlug
  });

  return {
    ...articleData,
    title: cleanedTitle,
    excerpt: cleanedExcerpt,
    contentParagraphs: paragraphs,
    rankingScore: articleData.rankingScore || rankingResult.totalScore,
    rankingBadge: rankingResult.tierBadge
  };
}

/**
 * Extrai o conteúdo real de uma URL utilizando o leitor do Jina Reader
 */
export async function fetchWebArticleContent(url) {
  if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
    return null;
  }
  
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    
    const res = await fetch(`https://r.jina.ai/${url}`, {
      headers: { 'Accept': 'text/plain' },
      signal: controller.signal
    });
    
    clearTimeout(timeout);
    if (!res.ok) return null;
    
    const text = await res.text();
    return text && text.length > 80 ? text.slice(0, 4500) : null;
  } catch (err) {
    return null;
  }
}

/**
 * REDAÇÃO AUTÔNOMA VIA GOOGLE GEMINI API
 * Tenta endpoints rápidos e resilientes com prompt em conformidade com o Blueprint SSOT.
 */
async function generateViaGemini(rawInput, context, gravitas, apiKey) {
  const authorName = context.author.name;
  const authorRole = context.author.role;

  const systemInstruction = `
Você é o motor de inteligência artificial de alta redação jornalística da prestigiada publicação "Radar do Luxo" (radardoluxo.com.br).
Sua missão é redigir um ensaio editorial definitivo assinado por ${authorName} (${authorRole}), obedecendo estritamente à sua alma, cosmovisão, know-how e estilo.

DIRETRIZES INEGOCIÁVEIS DO RADAR DO LUXO (BLUEPRINT MESTRE SSOT):

1. A FÓRMULA OBRIGATÓRIA DA CHAMADA MAGNÉTICA (O HOOK):
   O segredo da revista é o título imponente com peso de patrimônio histórico.
   REGRA ABSOLUTA PARA O "title":
   [Nome Nobre] + [Número Extremo ou Métrica] + [Detalhe Incomum de Engenharia, Manufatura ou História].
   Exemplo Correto: "Bugatti Tourbillon: O Monstro Híbrido V16 de 1.800 cv que Rejeitou as Telas Digitais por Relógios Suíços"
   Exemplo Errado: "Bugatti lança novo supercarro esportivo" ou "O novo relógio da Patek Philippe".
   NUNCA gere títulos curtos, mornos, amadores ou genéricos.

2. BANIMENTO RIGOROSO DE CLICHÊS DE IA:
   É expressamente proibido usar palavras vazias como: "revolucionário", "de tirar o fôlego", "um verdadeiro espetáculo", "o que há de melhor", "experiência única", "luxo sem limites", "para ninguém botar defeito", "de cair o queixo", "sem dúvidas", "vale destacar", "em um mundo onde", "mergulhe no universo", "em suma".
   O prestígio autêntico reside no silêncio mineral, na precisão da matéria-prima e na escassez matemática.

3. RITMO & BURSTINESS (HUMANIZAÇÃO LINGUÍSTICA REAL):
   Alterne intencionalmente o comprimento das frases dentro dos parágrafos:
   - Use sentenças curtas e cortantes (de 4 a 7 palavras) para assentar fatos incontestáveis.
   - Siga com frases compostas e envolventes (de 30 a 45 palavras) descrevendo texturas, acústica mecânica e tolerâncias de ateliê.
   - NUNCA produza parágrafos monótonos onde todas as frases tenham o mesmo tamanho.

4. QUEBRA DE REGRAS DE TRÊS:
   Evite a tendência mecânica de agrupar adjetivos ou argumentos em trios. Prefira pares antagônicos em tensão ou quatro observações assimétricas.

5. ALMA E CÓDIGO DA PERSONA ASSINANTE:
   - Se Henrique Vianna (Editor-Chefe / Patrimônio, Grandes Leilões, Family Offices & Arquitetura Brutalista):
     * Tese: "O dinheiro recente faz ruído; o patrimônio dinástico busca o silêncio mineral."
     * Tom: Aristocrático, unhurried, sóbrio, cirúrgico.
     * Vocabulário obrigatório: silêncio mineral, soberania patrimonial, imunidade temporal, refúgio de liquidez, governança dinástica, travertino romano navona, custódia fiduciária.
     * Termos proibidos: "ostentação", "chique", "badalado", "hype", "influenciador", "status symbol", "lifestyle".

   - Se Gabriel Fontes (Editor de Hipercarros & Engenharia Naval):
     * Tese: "Em uma era de telas táteis reluzentes destinadas ao descarte em cinco anos, o verdadeiro ato de rebeldia humana é um motor V16 aspirado rugindo a 9.000 RPM."
     * Tom: Visceral, urgente, cinético, estruturado em telemetria pura (força G lateral, coeficientes de arrasto Cx, fluxos de Venturi de efeito solo, escape em Inconel incandescente).
     * Vocabulário obrigatório: tolerância de mícrons, fluxo de Venturi, força G lateral, monocoque em carbo-titânio curado em autoclave a 6 bar, Inconel 625, efeito solo, telemetria inercial.
     * Termos proibidos: "possante", "nave", "carrão", "máquina dos sonhos", "confortável como uma nuvem", "tecnologia de ponta".

   - Se Clara Meirelles (Editora de Alta Relojoaria & Alta-Costura):
     * Tese: "O tempo do luxo não é utilitário; é a mais nobre das telas mecânicas esculpidas por mãos humanas."
     * Tom: Sensorial, lírico, íntimo, atento à luz natural e ao silêncio paciente dos ateliês suíços de Le Brassus e Vallée de Joux.
     * Vocabulário obrigatório: calibre de manufatura, anglage com sabugueiro silvestre, buril de aço, esmalte Grand Feu a 820°C, sonnerie acústica afinada em Sol sustenido, Vallée de Joux, ponto selê francês com linho encerado em cera virgem, couro Box Calf.
     * Termos proibidos: "acessório de moda", "look do dia", "fofura", "peça fashion", "elegância descomplicada", "luxuoso relógio".

6. CADÊNCIA & DENSIDADE: Entre ${gravitas.paragraphCount} parágrafos substanciais de prosa de alta erudição.
7. FICHA TÉCNICA: Retorne no campo "specs" de 4 a 6 especificações objetivas comprovadas (calibre, motor, materiais, ateliê, tiragem, avaliação em moeda forte).

RETORNE EXCLUSIVAMENTE UM OBJETO JSON VÁLIDO (sem markdown em volta do JSON):
{
  "title": "Nome Nobre: Número Extremo com Detalhe Incomum de Engenharia, Manufatura ou História",
  "excerpt": "Lead ou resumo executivo de 2 a 3 linhas com densidade patrimonial e vocabulário nobre",
  "contentParagraphs": [
    "Primeiro parágrafo sensorial...",
    "Segundo parágrafo técnico com telemetria ou calibre...",
    "Terceiro parágrafo de contexto histórico e liquidez...",
    "Quarto parágrafo de consolidação e veredito editorial..."
  ],
  "specs": {
    "especificacao_1": "valor técnico",
    "especificacao_2": "valor técnico",
    "especificacao_3": "valor técnico",
    "especificacao_4": "valor técnico"
  },
  "badge": "CURADORIA RADAR"
}
`;

  const userPrompt = `Pauta a ser investigada e redigida: "${rawInput}"\nContexto: ${context.reasoning}\nDensidade: ${gravitas.tempo}`;

  // Lista de modelos homologados em ordem de velocidade e cota gratuita
  const candidateModels = [
    'gemini-flash-lite-latest',
    'gemini-flash-latest',
    'gemini-2.5-flash'
  ];

  let rawData = null;

  for (const modelName of candidateModels) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [{ parts: [{ text: userPrompt }] }],
          generationConfig: {
            temperature: 0.7,
            responseMimeType: 'application/json'
          }
        })
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          rawData = text;
          break; // Sucesso com este modelo
        }
      }
    } catch (modelErr) {
      // Tenta próximo modelo do fallback
    }
  }

  if (!rawData) {
    throw new Error('Nenhum modelo da API Gemini respondeu satisfatoriamente.');
  }

  let cleanText = rawData.trim();
  if (cleanText.startsWith('```json')) {
    cleanText = cleanText.slice(7);
  } else if (cleanText.startsWith('```')) {
    cleanText = cleanText.slice(3);
  }
  if (cleanText.endsWith('```')) {
    cleanText = cleanText.slice(0, -3);
  }
  cleanText = cleanText.trim();

  const firstBrace = cleanText.indexOf('{');
  const lastBrace = cleanText.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1) {
    cleanText = cleanText.substring(firstBrace, lastBrace + 1);
  }

  const parsed = JSON.parse(cleanText);

  const catKey = context.categorySlug || 'supercarros';
  const gallery = HOMOLOGATED_IMAGES[catKey] || HOMOLOGATED_IMAGES.supercarros;
  const selectedImage = gallery[Math.floor(Math.random() * gallery.length)];

  const slug = (parsed.title || rawInput)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const draftArticle = {
    title: parsed.title,
    slug: `${slug}-${Date.now().toString().slice(-4)}`,
    category: context.category,
    categorySlug: context.categorySlug,
    authorSlug: context.authorSlug,
    authorName: context.author.name,
    authorRole: context.author.role,
    reasoning: context.reasoning,
    gravitasInfo: gravitas,
    excerpt: parsed.excerpt,
    contentParagraphs: parsed.contentParagraphs || [],
    specs: parsed.specs || {},
    image: selectedImage,
    type: 'article',
    badge: parsed.badge || 'CURADORIA RADAR',
    readTime: `${Math.max(4, (parsed.contentParagraphs || []).length + 1)} min de leitura`,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    status: 'published',
    imageFocus: parsed.imageFocus || (context.categorySlug === 'supercarros' ? 'bottom' : 'center'),
    engineSource: 'gemini-flash'
  };

  // Aplica o revisor crítico Evaluator-Optimizer para lapidar o texto
  return auditAndCleanArticle(draftArticle, context.authorSlug);
}

/**
 * FUNÇÃO PRINCIPAL: Gera matéria com IA (com extração Jina, Gemini Flash e Fallback Local)
 */
export async function generateLuxuryArticle(rawInput, options = {}) {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    throw new Error('Por favor, informe um link de notícia ou tema a ser investigado.');
  }

  let extractedContent = null;
  const isUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://');
  if (isUrl) {
    try {
      extractedContent = await fetchWebArticleContent(trimmed);
    } catch (readErr) {
      // Ignora erro de leitura web e segue com o input
    }
  }

  const analysisTarget = extractedContent ? `${trimmed}\n\nCONTEÚDO EXTRAÍDO DA MATÉRIA:\n${extractedContent}` : trimmed;

  const context = resolveEditorialContext(analysisTarget, options.authorSlug);
  const gravitas = assessEditorialGravitas(analysisTarget);
  const apiKey = getGeminiApiKey();

  if (apiKey) {
    try {
      const generated = await generateViaGemini(analysisTarget, context, gravitas, apiKey);
      return generated;
    } catch (llmError) {
      console.warn('⚠️ Falha ao acionar Gemini API, ativando Sintetizador Editorial Local:', llmError.message);
    }
  }

  const localDraft = synthesizeLocally(trimmed, context, gravitas);
  return {
    ...auditAndCleanArticle(localDraft, context.authorSlug),
    generationStatus: 'fallback_pending',
    needsRegeneration: true
  };
}
