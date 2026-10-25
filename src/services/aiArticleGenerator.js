/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — MOTOR EDITORIAL DE INTELIGÊNCIA ARTIFICIAL (DUAL-ENGINE)
 * ==============================================================================
 * 1. SUPORTE A GEMINI API (Redação autônoma via LLM real quando configurada chave)
 * 2. SINTETIZADOR EDITORIAL SEMÂNTICO LOCAL (Gera matérias sob medida mesmo sem API)
 * 3. O MÉTODO DO JULGAMENTO HUMANO:
 *    - Gravitas e densidade narrativa (parágrafos proporcionais à relevância histórica)
 *    - Banimento absoluto de clichês amadores
 *    - Sensorialidade tátil, auditiva e mecânica
 *    - Atribuição editorial cirúrgica (Henrique, Clara ou Gabriel)
 * ==============================================================================
 */

import { AUTHORS, CATEGORIES } from '../data/mockData.js';

// Chave da API no localStorage, Vite env ou process env
export function getGeminiApiKey() {
  try {
    return (
      (typeof localStorage !== 'undefined' && localStorage.getItem('radar_gemini_api_key')) ||
      (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_GEMINI_API_KEY) ||
      (typeof process !== 'undefined' && process?.env?.VITE_GEMINI_API_KEY) ||
      ''
    );
  } catch (e) {
    return (
      (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_GEMINI_API_KEY) ||
      (typeof process !== 'undefined' && process?.env?.VITE_GEMINI_API_KEY) ||
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

// Clichês estritamente banidos
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
  'de outro mundo'
];

// Imagens de acervo selecionadas e verificadas (sem links quebrados ou temas incorretos)
export const HOMOLOGATED_IMAGES = {
  supercarros: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1400',
  relogios: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
  arquitetura: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
  wealth: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400',
  estilo: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400',
  destinos: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400'
};


/**
 * Atribuição editorial inteligente com análise de intenção primária
 */
export function analyzeEditorialContext(rawInput) {
  const text = rawInput.toLowerCase();

  // 1. LEILÕES, RECORDES DE MERCADO E MACROECONOMIA DO LUXO ➔ Henrique Vianna
  const isAuctionOrMarket = 
    text.includes('leilão') || text.includes('leilao') || text.includes('sotheby') ||
    text.includes('christie') || text.includes('phillips') || text.includes('arrematado') ||
    text.includes('recorde') || text.includes('milhões') || text.includes('milhoes') ||
    text.includes('us$') || text.includes('€') || text.includes('patrimônio');

  // BILIONÁRIOS, FORBES, GRANDES FORTUNAS E CAPITAL PRIVADO ➔ Henrique Vianna
  const isWealthAndBillionaires = 
    text.includes('bilion') || text.includes('forbes') || text.includes('fortuna') ||
    text.includes('capital') || text.includes('investimento') || text.includes('patrimonio') ||
    text.includes('patrimônio') || text.includes('lemann') || text.includes('family office') ||
    text.includes('wealth') || text.includes('dinastia') || text.includes('finanças');

  // 2. ALTA RELOJOARIA & ALTA JOALHERIA ➔ Clara Meirelles
  const isWatch = 
    text.includes('relógio') || text.includes('relogio') || text.includes('watch') ||
    text.includes('patek') || text.includes('rolex') || text.includes('audemars') ||
    text.includes('vacheron') || text.includes('lange') || text.includes('richard mille') ||
    text.includes('turbilhão') || text.includes('tourbillon') || text.includes('cronógrafo') ||
    text.includes('complica') || text.includes('calibre') || text.includes('diamante') ||
    text.includes('safira') || text.includes('genebra') || text.includes('joia');

  // 3. HIPERCARROS, VELOCIDADE & ENGENHARIA NAVAL ➔ Gabriel Fontes
  const isAutomotive = 
    text.includes('carro') || text.includes('ferrari') || text.includes('porsche') ||
    text.includes('aston martin') || text.includes('lamborghini') || text.includes('mclaren') ||
    text.includes('bugatti') || text.includes('pagani') || text.includes('koenigsegg') ||
    text.includes('motor') || text.includes('v12') || text.includes('v8') || text.includes('biturbo') ||
    text.includes('cv') || text.includes('cavalos') || text.includes('downforce') ||
    text.includes('telemetria') || text.includes('nürburgring') || text.includes('iate') ||
    text.includes('yacht') || text.includes('riva') || text.includes('náutico');

  // 4. ARQUITETURA & ALTA-MODA
  const isArchitecture = 
    text.includes('vila') || text.includes('casa') || text.includes('arquitetura') ||
    text.includes('penthouse') || text.includes('mansão') || text.includes('brutalista');

  const isFashion = 
    text.includes('hermès') || text.includes('hermes') || text.includes('birkin') ||
    text.includes('bolsa') || text.includes('costura') || text.includes('alfaiataria');

  // Priorização baseada na tese da pauta:
  if (isWealthAndBillionaires) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: 'Arquitetura',
      categorySlug: 'arquitetura',
      themeType: 'wealth',
      reasoning: 'Atribuído a Henrique Vianna: Análise dos centros de gravidade do capital global, governança dinástica, family offices e poder patrimonial.'
    };
  }
  if (isAuctionOrMarket && !isWatch) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: isAutomotive ? 'Supercarros' : 'Arquitetura',
      categorySlug: isAutomotive ? 'supercarros' : 'arquitetura',
      themeType: 'auction',
      reasoning: 'Atribuído a Henrique Vianna: Pauta focada na dinâmica de leilões internacionais, liquidez de ativos colecionáveis e peso patrimonial da peça.'
    };
  }

  if (isWatch) {
    return {
      authorSlug: 'clara-meirelles',
      author: AUTHORS['clara-meirelles'],
      category: 'Alta Relojoaria',
      categorySlug: 'relogios',
      themeType: 'watch',
      reasoning: 'Atribuído a Clara Meirelles: Investigação da microengenharia suíça, acabamento manual de calibres e tradição secular de manufatura.'
    };
  }

  if (isAutomotive) {
    return {
      authorSlug: 'gabriel-fontes',
      author: AUTHORS['gabriel-fontes'],
      category: text.includes('iate') || text.includes('yacht') ? 'Destinos & Iates' : 'Supercarros',
      categorySlug: text.includes('iate') || text.includes('yacht') ? 'destinos' : 'supercarros',
      themeType: 'automotive',
      reasoning: 'Atribuído a Gabriel Fontes: Análise de dinâmica inercial de alta velocidade, aerodinâmica visceral e telemetria de pista.'
    };
  }

  if (isArchitecture) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: 'Arquitetura',
      categorySlug: 'arquitetura',
      themeType: 'architecture',
      reasoning: 'Atribuído a Henrique Vianna: Estudo da espacialidade contemporânea, luz natural monumental e privacidade como luxo silencioso.'
    };
  }

  if (isFashion) {
    return {
      authorSlug: 'henrique-vianna',
      author: AUTHORS['henrique-vianna'],
      category: 'Alta-Costura',
      categorySlug: 'estilo',
      themeType: 'fashion',
      reasoning: 'Atribuído a Henrique Vianna: Crônica do saber-fazer manual histórico, couros nobres e escassez deliberada de ateliês europeus.'
    };
  }

  // Fallback padrão sofisticado
  return {
    authorSlug: 'henrique-vianna',
    author: AUTHORS['henrique-vianna'],
    category: 'Supercarros',
    categorySlug: 'supercarros',
    themeType: 'general',
    reasoning: 'Atribuído a Henrique Vianna: Matéria com relevância macro editorial e posicionamento na mesa de tendências do Radar.'
  };
}

/**
 * Avalia o peso de gravidade (Gravitas) e determina a densidade orgânica
 */
export function assessEditorialGravitas(topic) {
  const text = topic.toLowerCase();
  const isHistoric = text.includes('recorde') || text.includes('51m') || text.includes('1962') || text.includes('1518') || text.includes('sotheby');
  const isDeepCraft = text.includes('artesanal') || text.includes('ouro') || text.includes('manufatura') || text.includes('safira');

  if (isHistoric) {
    return {
      mode: 'impact',
      densityName: 'Pulso de Mercado & Recorde de Leilão',
      paragraphCount: 4,
      readTime: '5 min de leitura',
      tempo: 'Cirúrgico, afiado e fulminante. Cada dado técnico e financeiro tem peso de patrimônio histórico.'
    };
  }

  if (isDeepCraft) {
    return {
      mode: 'contemplative',
      densityName: 'Crônica de Manufatura & Savoir-Faire',
      paragraphCount: 5,
      readTime: '6 min de leitura',
      tempo: 'Literário e reflexivo. A matéria-prima e o ateliê silencioso conduzem o ritmo das frases.'
    };
  }

  return {
    mode: 'dynamic',
    densityName: 'Revelação Técnica & Engenharia',
    paragraphCount: 4,
    readTime: '4 min de leitura',
    tempo: 'Equilibrado e sensorial. Alterne dados de telemetria e mecânica com a experiência tátil de uso.'
  };
}

/**
 * Extrai entidades chave para síntese editorial orgânica
 */
function extractEntities(rawInput) {
  let title = rawInput.trim();

  // Tratamento se for URL
  if (title.startsWith('http://') || title.startsWith('https://')) {
    try {
      const url = new URL(title);
      const segment = url.pathname.split('/').filter(Boolean).pop() || '';
      title = segment.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    } catch (e) {
      title = 'Lançamento Editorial Homologado pelo Radar';
    }
  }

  // Detectar valores monetários
  const moneyMatch = rawInput.match(/(?:US\$|R\$|€|£|\$)\s*[\d.,]+\s*(?:milhões|milhoes|m|bi)?/i);
  const money = moneyMatch ? moneyMatch[0] : null;

  // Detectar anos
  const yearMatch = rawInput.match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? yearMatch[0] : null;

  // Detectar leiloeiras
  const auctionHouseMatch = rawInput.match(/\b(Sotheby's|Christie's|Phillips|Bonhams|Gooding)\b/i);
  const auctionHouse = auctionHouseMatch ? auctionHouseMatch[0] : null;

  // Detectar cidades
  const cityMatch = rawInput.match(/\b(Nova York|Genebra|Paris|Londres|Mônaco|Capri|Tóquio|Maranello|Stuttgart|Molsheim)\b/i);
  const city = cityMatch ? cityMatch[0] : null;

  return { title, money, year, auctionHouse, city };
}

/**
 * SINTETIZADOR EDITORIAL LOCAL (Alta qualidade sem depender de chave de API)
 */
function synthesizeLocally(rawInput, context, gravitas) {
  const { title, money, year, auctionHouse, city } = extractEntities(rawInput);
  
  let formattedTitle = title;
  if (!formattedTitle.includes(':') && formattedTitle.length < 40) {
    formattedTitle = `${formattedTitle}: A Nova Fronteira do Colecionismo Global`;
  }

  let excerpt = '';
  let paragraphs = [];
  let specs = {};

  // 1. LEILÃO / MERCADO HISTÓRICO
  if (context.themeType === 'auction' || (auctionHouse && money)) {
    const venue = auctionHouse ? `no salão da ${auctionHouse}` : 'em leilão internacional fechado';
    const location = city ? `em ${city}` : 'entre os principais centros financeiros';
    const valueStr = money ? `sob o martelo de ${money}` : 'em cifras que redefinem o piso de liquidez do setor';

    excerpt = `A consolidação histórica de ${title}: arrematado ${valueStr} ${location}, o exemplar reafirma a busca implacável do capital privado por ativos físicos com valor histórico irremovível.`;

    paragraphs = [
      `Quando o martelo bateu ${location} para sacramentar a venda de ${title}, a atmosfera do salão não registrou euforia ruidosa, mas a reverência solene reservada aos momentos em que a história material muda de mãos. Negociado ${valueStr}, o lote transcende a mera condição de objeto colecionável para se firmar como documento supremo de engenharia e raridade.`,
      `Exemplares dessa magnitude ${year ? `produzidos em ${year}` : 'desta linhagem'} não obedecem às flutuações das bolsas de valores ou às incertezas do câmbio internacional. Sua liquidez decorre da finitude irredutível: não existem substitutos modernos para a pátina original talhada por décadas de conservação impecável, nem para o registro de procedência meticulosamente documentado nos arquivos da manufatura.`,
      `Para o circuito restrito de colecionadores que disputaram os lances finais em passos calculados, o valor de arremate reflete a certeza de que peças com esse peso histórico continuam sendo o refúgio definitivo de preservação de patrimônio familiar. Cada detalhe mecânico e cada cicatriz do tempo contam uma narrativa que nenhuma manufatura contemporânea é capaz de reeditar.`,
      `O resultado consolidado ${venue} envia uma mensagem inequívoca para o mercado global: enquanto a produção em massa se perde na efemeridade digital, os monumentos da engenharia física permanecem intocáveis no ápice do prestígio internacional.`
    ];

    specs = {
      lote: title,
      arremate: money || 'Valor Homologado Confidencial',
      martelo: auctionHouse || 'Sotheby\'s & Christie\'s Heritage',
      cidade: city || 'Nova York / Genebra',
      procedencia: 'Acervo privado com documentação de fábrica original'
    };
  }

  // 2. ALTA RELOJOARIA
  else if (context.themeType === 'watch') {
    excerpt = `Com micromeânica ajustada em tolerâncias microscópicas e acabamento manual em bancadas suíças, a análise de ${title} revela o contraponto perfeito à efemeridade contemporânea.`;

    paragraphs = [
      `Há um abismo filosófico intransponível entre instrumentos eletrônicos que simplesmente computam horas e a microescultura mecânica expressa em ${title}. Nas bancadas silenciosas dos ateliês suíços, onde o único som perceptível é o respiro cadenciado do mestre-relojoeiro sob a lupa, esta peça emerge como um manifesto de paciência e disciplina técnica.`,
      `O trem de engrenagens do calibre opera em frequências rigorosamente calibradas para anular as distorções da gravidade sobre a mola espiral. Cada ponte de ouro recebeu chanframentos angulares executados manualmente com pontas de madeira de sabugueiro e pastas diamantadas — um método tátil que nenhuma máquina CNC de cinco eixos consegue replicar com a mesma calidez orgânica.`,
      `Ao olhar através do cristal de safira com tratamento antirreflexo duplo, o mostrador facetado dialoga com a iluminação natural revelando texturas que mudam de intensidade conforme o ângulo do pulso. É uma experiência visual reservada ao proprietário, um segredo estético compartilhado apenas com aqueles que compreendem a linguagem da alta manufatura.`,
      `Para o colecionador de pulso treinado, ${title} não configura um capricho efêmero, mas uma âncora patrimonial duradoura. Em um século marcado por obsolescências programadas, vestir uma máquina que continuará pulsando com precisão mecânica daqui a duzentos anos é a maior declaração de luxo possível.`
    ];

    specs = {
      calibre: 'Manufatura Mecânica de Corda Manual / Automática',
      manufatura: title,
      caixa: 'Ouro Nobre ou Platina 950 com Safira Dupla',
      reservaDeMarcha: 'Mínimo de 65 horas de reserva ininterrupta',
      distribuicao: 'Alocação restrita a clientes homologados da maison'
    };
  }

  // 3. HIPERCARROS & VELOCIDADE
  else if (context.themeType === 'automotive') {
    excerpt = `Forjado nos limites da aerodinâmica ativa e da termodinâmica de pista, ${title} traduz a busca obsessiva pela aderência inercial e pelo feedback mecânico puro.`;

    paragraphs = [
      `Quando os engenheiros encarregados de ${title} receberam o mandato de ignorar as concessões de produção em larga escala para focar unicamente na física da velocidade, o produto final superou as fronteiras convencionais do automobilismo esportivo. Não estamos diante apenas de cavalos de força brutos, mas de uma coreografia milimétrica entre pressão aerodinâmica e equilíbrio dinâmico.`,
      `A estrutura monocoque em fibra de carbono de graduação aeroespacial canaliza os fluxos de ar com a mesma precisão cirúrgica de uma aeronave supersônica. Em velocidades de curva elevada, os atuadores ativos ajustam o ângulo dos difusores traseiros em frações de segundo, gerando downforce suficiente para colar o trem de rodagem ao asfalto sob forças laterais implacáveis.`,
      `O sistema de escape trabalhado em ligas de titânio e Inconel entrega uma assinatura acústica pura, desprovida de artifícios sintéticos de cabine. O calor dissipado pelas tomadas de ar traseiras é o testemunho visual da conversão implacável de energia mecânica em aceleração pura, acompanhado pela resposta instantânea da transmissão de dupla embreagem.`,
      `Com homologação limitada e produção rigorosamente numerada para a seleta lista de colecionadores da marca, ${title} consolida-se como um divisor de águas técnico antes que a transição de eletrificação homogeneíze as sensações táteis de pilotagem.`
    ];

    specs = {
      modelo: title,
      chassi: 'Monocoque Integral em Fibra de Carbono e Titânio',
      propulsao: 'Engenharia de Alta Resposta Térmica e Dinâmica',
      downforce: 'Aerodinâmica ativa com difusores móveis multissetoriais',
      alocacao: 'Tiragem limitada estrita sob convite da fábrica'
    };
  }

  // 4. BILIONÁRIOS, FORBES & CAPITAL DINÁSTICO
  else if (context.themeType === 'wealth') {
    excerpt = `Uma radiografia da concentração de capital soberano, governança dinástica e family offices em ${title}, onde a discrição supera o ruído do mercado.`;

    paragraphs = [
      `A análise dos centros de gravidade do capital privado contemporâneo não é um mero exercício contábil; trata-se do mapeamento das forças civilizatórias que desenham o futuro econômico. O panorama evidenciado em ${title} revela a consolidação de um estrato patrimonial que opera muito além das oscilações voláteis do pregão diário.`,
      `No topo da pirâmide, a perenidade dos impérios industriais e das novas potências de tecnologia e agronegócio se sustenta na sofisticação de family offices estruturados com governança institucional. A alocação desses recursos transcende ativos convencionais: migra silenciosamente para infraestrutura estratégica, inovação de longo prazo e preservação intergeracional.`,
      `Há uma redefinição substancial no próprio conceito de poder financeiro. O prestígio autêntico deste circuito fechado não busca validação midiática barulhenta; ele se manifesta na autonomia sobre o tempo, na governança sucessória discreta e na capacidade de desenhar projetos que atravessam décadas sem depender da aprovação do momento.`,
      `A mensagem que emerge deste levantamento é inequívoca: enquanto o consumo efêmero atrai a atenção dos observadores superficiais, os arquitetos do capital soberano permanecem concentrados no ativo mais escasso de todos — a imunidade temporal construída por dinastias que atravessam gerações.`
    ];

    specs = {
      segmento: 'Ultra High Net Worth Individuals (UHNWI)',
      foco: 'Governança Familiar e Alocação Estratégica',
      procedencia: 'Relatórios de Mercado e Inteligência Financeira',
      curadoria: 'Mesa de Análise Econômica do Radar do Luxo'
    };
  }

  // 5. ARQUITETURA & ALTA-COSTURA
  else {
    excerpt = `Uma celebração da matéria-prima nobre, proporção e silêncio monumental em ${title}, onde a discrição supera qualquer necessidade de ruído visual.`;

    paragraphs = [
      `Em um panorama contemporâneo frequentemente poluído por excessos cosméticos sem substância, a verdadeira elegância reside na segurança austera dos materiais de primeira grandeza. ${title} articula essa certeza com uma serenidade monumental que dispensa justificativas.`,
      `A seleção das matérias-primas fundamentais — seja a pedra talhada com textura bruta, os couros nobres submetidos a curtimentos vegetais lentos ou a marcenaria de encaixe perfeito — estabelece um diálogo permanente com o ambiente, ganhando nobreza e personalidade com o passar das estações.`,
      `O espaço interior privilegia o isolamento acústico e a pureza de linhas, operando como um enclave impenetrável contra a agitação do mundo contemporâneo. Cada proporção foi desenhada para a experiência tátil e a contemplação silenciosa, longe da superficialidade das lentes descartáveis.`,
      `Trata-se de um manifesto tangível sobre as prioridades do verdadeiro prestígio: a posse do silêncio, a intimidade protegida e a longevidade dos artefatos construídos para atravessar gerações sem perder o frescor da relevância.`
    ];

    specs = {
      projeto: title,
      concepcao: 'Arquitetura Autoral / Ateliê de Alta Manufatura',
      materiais: 'Elementos Naturais Selecionados e Tratamento Orgânico',
      privacidade: 'Protocolo de Acesso e Exclusividade Total',
      patrimonio: 'Ativo de Família com Valorização Permanente'
    };
  }


  const isWealthTopic = context.themeType === 'wealth' || rawInput.toLowerCase().includes('bilion') || rawInput.toLowerCase().includes('forbes');
  const image = isWealthTopic ? HOMOLOGATED_IMAGES.wealth : (HOMOLOGATED_IMAGES[context.categorySlug] || HOMOLOGATED_IMAGES.arquitetura);
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
    badge: 'HOMOLOGADO PELO RADAR',
    readTime: gravitas.readTime,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    status: 'draft',
    engineSource: 'local'
  };
}

/**
 * Extrai o conteúdo real de uma URL utilizando o leitor sem ruídos do Jina Reader
 */
export async function fetchWebArticleContent(url) {
  if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
    return null;
  }
  
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000); // 12s limite
    
    const res = await fetch(`https://r.jina.ai/${url}`, {
      headers: { 'Accept': 'text/plain' },
      signal: controller.signal
    });
    
    clearTimeout(timeout);
    if (!res.ok) return null;
    
    const text = await res.text();
    // Retorna até 4.500 caracteres limpos para nutrir o raciocínio sem estourar limites
    return text && text.length > 80 ? text.slice(0, 4500) : null;
  } catch (err) {
    console.warn('Leitor Jina Reader indisponível no momento, prosseguindo com análise contextual:', err.message);
    return null;
  }
}

/**
 * REDAÇÃO AUTÔNOMA VIA LLM REAL (Google Gemini API)
 */
async function generateViaGemini(rawInput, context, gravitas, apiKey) {
  const authorName = context.author.name;
  const authorRole = context.author.role;

  const systemInstruction = `
Você é o motor de inteligência artificial de alta redação e jornalismo da revista digital de prestígio "Radar do Luxo".
Sua missão é redigir um ensaio editorial completo assinado por ${authorName} (${authorRole}), obedecendo estritamente à sua alma, cosmovisão, know-how e estilo.

DIRETRIZES FUNDAMENTAIS DO RADAR DO LUXO (A ANATOMIA DA MATÉRIA QUE DÁ VONTADE DE VER E VOLTAR):

1. A FÓRMULA OBRIGATÓRIA DA CHAMADA MAGNÉTICA (O HOOK):
   O segredo da revista é o título imponente com peso de patrimônio histórico.
   REGRA ABSOLUTA PARA O "title":
   Nome Nobre + Número Extremo + Detalhe Incomum de Engenharia, Manufatura ou História.
   Exemplo Correto: "Bugatti Tourbillon: O Monstro Híbrido V16 de 1.800 cv que Rejeitou as Telas Digitais por Relógios Suíços"
   Exemplo Errado: "Bugatti lança novo carro esportivo" ou "O novo supercarro da Ferrari".
   NUNCA gere títulos curtos, mornos, amadores ou genéricos.

2. BANIMENTO RIGOROSO DE CLICHÊS: É expressamente proibido usar palavras vazias como: "revolucionário", "de tirar o fôlego", "um verdadeiro espetáculo", "o que há de melhor", "experiência única", "luxo sem limites", "para ninguém botar defeito", "de cair o queixo", "sem dúvidas". O luxo autêntico reside no silêncio mineral, na precisão da matéria-prima e na escassez matemática.

3. SENSORIALIDADE TÁTIL E MECÂNICA: Descreva o som (o estalo metálico do trambulador, o escape em Inconel 625, os três gongos de carrilhão afinados à mão), a textura (couro Box Calf com curtimento vegetal, travertino romano navona, fibra de carbono autoclave de 6 bar, chanfro manual polido com sabugueiro silvestre) e o peso fiduciário da escassez.

4. ALMA E CÓDIGO DO AUTOR ASSINANTE:
   - Se Henrique Vianna (Editor-Chefe / Patrimônio, Grandes Leilões, Family Offices & Arquitetura Brutalista):
     * Tese: "O dinheiro recente faz ruído; o patrimônio dinástico busca o silêncio mineral."
     * Tom: Aristocrático, unhurried, sóbrio e cirúrgico. Aborda o valor não como custo monetário, mas como refúgio de liquidez, governança familiar multigeracional e imunidade temporal.
     * Vocabulário obrigatório: silêncio mineral, soberania patrimonial, imunidade temporal, refúgio de liquidez, governança dinástica, travertino romano.
     * Termos proibidos para Henrique: "ostentação", "chique", "badalado", "hype", "influenciador", "status symbol", "lifestyle".

   - Se Gabriel Fontes (Editor de Hipercarros & Engenharia Naval):
     * Tese: "Em uma era de telas táteis reluzentes destinadas ao descarte em cinco anos, o verdadeiro ato de rebeldia humana é um motor V16 aspirado rugindo a 9.000 RPM."
     * Tom: Visceral, urgente, cinético e rigidamente estruturado em telemetria pura (força G lateral, coeficientes de arrasto Cx, fluxos de Venturi de efeito solo, escape em Inconel incandescente). Rejeita eletrônica fútil e telas capacitivas em favor de engates mecânicos puros.
     * Vocabulário obrigatório: tolerância de mícrons, fluxo de Venturi, força G lateral, monocoque em carbo-titânio, Inconel incandescente, efeito solo, telemetria inercial.
     * Termos proibidos para Gabriel: "possante", "nave", "carrão", "máquina dos sonhos", "confortável como uma nuvem", "tecnologia de ponta".

   - Se Clara Meirelles (Editora de Alta Relojoaria & Alta-Costura):
     * Tese: "O tempo do luxo não é utilitário; é a mais nobre das telas mecânicas esculpidas por mãos humanas."
     * Tom: Sensorial, lírico, íntimo, atento à luz natural e ao silêncio paciente dos ateliês suíços de Le Brassus e Vallée de Joux. Descreve o peso gélido da platina 950, o som do escape batendo a 3 Hz e a alma da imperfeição deliberada do gesto manual.
     * Vocabulário obrigatório: calibre de manufatura, anglage com sabugueiro, buril de aço, esmalte Grand Feu, sonnerie acústica, Vallée de Joux, ponto selê, couro Box Calf.
     * Termos proibidos para Clara: "acessório de moda", "look do dia", "fofura", "peça fashion", "elegância descomplicada", "luxuoso relógio".

5. CADÊNCIA & DENSIDADE: Entre ${gravitas.paragraphCount} parágrafos de alta substância literária. Cada parágrafo deve conter de 3 a 5 frases com ritmo refinado e vocabulário técnico impecável.

6. FICHA TÉCNICA HOMOLOGADA: Retorne no campo "specs" de 4 a 6 especificações técnicas cruciais condensadas (ex: motor/calibre, materiais/chassi, procedência/estaleiro, valor homologado/arremate, tiragem limitada).

RETORNE EXCLUSIVAMENTE UM OBJETO JSON com a seguinte estrutura:
{
  "title": "Nome Nobre: Número Extremo com Detalhe Incomum de Engenharia, Manufatura ou História",
  "excerpt": "Lead ou resumo executivo de 2 a 3 linhas com densidade patrimonial e vocabulário nobre",
  "contentParagraphs": ["Primeiro parágrafo sensorial...", "Segundo parágrafo técnico com telemetria ou calibre...", "Terceiro parágrafo de contexto histórico...", "Quarto parágrafo de consolidação..."],
  "specs": {
    "especificacao_1": "valor técnico",
    "especificacao_2": "valor técnico",
    "especificacao_3": "valor técnico",
    "especificacao_4": "valor técnico"
  },
  "badge": "HOMOLOGADO PELO RADAR"
}
`;

  const userPrompt = `Pauta a ser investigada e redigida: "${rawInput}"\nContexto: ${context.reasoning}\nDensidade: ${gravitas.tempo}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 90000); // 90 segundos de tolerância para modelos analíticos profundos

  // Tenta gemini-3.5-flash (ultra-rápido, ~2 segundos) e depois gemini-3.8-flash
  let response;
  try {
    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
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

    if (!response.ok) {
      // Fallback para gemini-3.8-flash
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
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
    }
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Falha na API Gemini (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textOutput) {
    throw new Error('A API Gemini não retornou texto de resposta.');
  }

  let cleanText = textOutput.trim();
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

  const isWealthTopic = context.themeType === 'wealth' || rawInput.toLowerCase().includes('bilion') || rawInput.toLowerCase().includes('forbes');
  const selectedImage = isWealthTopic ? HOMOLOGATED_IMAGES.wealth : (HOMOLOGATED_IMAGES[context.categorySlug] || HOMOLOGATED_IMAGES.arquitetura);

  const slug = (parsed.title || rawInput)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return {
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
    badge: parsed.badge || 'HOMOLOGADO PELO RADAR',
    readTime: `${Math.max(4, (parsed.contentParagraphs || []).length + 1)} min de leitura`,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    status: 'draft',
    engineSource: 'gemini-flash'
  };
}

/**
 * FUNÇÃO PRINCIPAL: Gera matéria com IA (Tenta Gemini com Jina Reader; se falhar, usa Sintetizador Local)
 */
export async function generateLuxuryArticle(rawInput) {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    throw new Error('Por favor, informe um link de notícia ou tema a ser investigado.');
  }

  // Se a entrada for um link de notícia (Forbes, Robb Report, Hodinkee, etc.), extrai o conteúdo limpo via Jina Reader
  let extractedContent = null;
  const isUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://');
  if (isUrl) {
    try {
      console.log('🌐 Radar Extrator: Lendo conteúdo da matéria na web...');
      extractedContent = await fetchWebArticleContent(trimmed);
    } catch (readErr) {
      console.warn('Erro ao ler URL, prosseguindo com análise direta:', readErr);
    }
  }

  // Contexto consolidado para análise
  const analysisTarget = extractedContent ? `${trimmed}\n\nCONTEÚDO EXTRAÍDO DA MATÉRIA:\n${extractedContent}` : trimmed;

  // 1. Contexto Editorial & Gravitas
  const context = analyzeEditorialContext(analysisTarget);
  const gravitas = assessEditorialGravitas(analysisTarget);

  // 2. Verifica se há chave Gemini configurada
  const apiKey = getGeminiApiKey();

  if (apiKey) {
    try {
      console.log('💎 Radar IA: Redigindo matéria com Google Gemini 3.5 Flash e diretrizes homologadas...');
      return await generateViaGemini(analysisTarget, context, gravitas, apiKey);
    } catch (llmError) {
      console.warn('Falha na API Gemini, acionando Sintetizador Editorial Local:', llmError);
    }
  }

  // 3. Fallback inteligente: Sintetizador Editorial Local
  console.log('💎 Radar IA: Executando Sintetizador Editorial Semântico Local...');
  return synthesizeLocally(trimmed, context, gravitas);
}
