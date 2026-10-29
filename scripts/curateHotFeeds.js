/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — SCOUT & CURADORIA AUTÔNOMA DE ALTO PADRÃO EDITORIAL
 * ==============================================================================
 * Rastreia as maiores publicações mundiais (Robb Report, Hodinkee, Monochrome,
 * leilões Sotheby's/Christie's, lançamentos de hipercarros e superiates).
 *
 * CONFORMIDADE COM O MANUAL DE DIRETRIZES EDITORIAIS (DIRETRIZES_EDITORIAIS.md):
 * 1. A FÓRMULA DO HOOK MAGNÉTICO:
 *    [Nome Nobre] + [Número Extremo] + [Detalhe Incomum de Engenharia, Manufatura ou História]
 * 2. SILÊNCIO MINERAL & ZERO CLICHÊS:
 *    Filtragem de termos frívolos, tabloides, fofocas e sensacionalismo barato.
 * 3. ATRIBUIÇÃO EXATA DAS 3 PERSONAS VIVAS:
 *    - Henrique Vianna: Grandes Leilões, Arte Museológica, Governança Dinástica, Mansões.
 *    - Gabriel Fontes: Hipercarros, Termodinâmica, Pista, Superiates Oceânicos.
 *    - Clara Meirelles: Alta Relojoaria, Calibres de Manufatura, Savoir-Faire de Ateliê.
 * 4. FICHA TÉCNICA HOMOLOGADA: 4 especificações concretas de alta fidelidade.
 * 5. LEAD EXECUTIVO CONCISO: Resumo em 2 a 3 linhas com densidade patrimonial.
 *
 * REGRAS DE HIGIENE DO ACERVO:
 * - Cada pauta ao vivo (pauta-live-*) vale 24h e é descartada depois disso.
 * - Nada que já foi publicado (arquivo permanente ou acervo local) volta para a
 *   fila, mesmo que apareça com outro título ou outra URL.
 * - Item sem sinal claro de vertical editorial é descartado — nunca é
 *   empurrado para "Supercarros" por padrão.
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchAllEliteFeeds } from '../src/services/rssCuratorService.js';
import { calculateEditorialScore } from '../src/services/rankingEngine.js';
import { ARTICLES } from '../src/data/mockData.js';
import { INITIAL_HOT_PAUTAS } from '../src/data/hotFeedsData.js';
import { PUBLISHED_ARCHIVE } from '../src/data/publishedArchive.js';
import { sameStory, storyKey } from '../src/services/editorialDedupe.js';
import { containsTerm, findNegativeTerm } from '../src/services/editorialFilters.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DRY_RUN = process.env.DRY_RUN === '1' || process.argv.includes('--dry-run');
const LIVE_PAUTA_TTL_HOURS = Number(process.env.SCOUT_LIVE_TTL_HOURS) > 0
  ? Number(process.env.SCOUT_LIVE_TTL_HOURS)
  : 24;
const MIN_SCORE = 82;

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const BADGE_COLORS = {
  supercarros: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  relogios: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  arquitetura: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
  destinos: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  estilo: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
};

const VERTICALS = {
  supercarros: {
    categorySlug: 'supercarros',
    category: 'Supercarros',
    authorSlug: 'gabriel-fontes',
    prefix: 'Hipercarros',
    summary: 'Engenharia de precisão, telemetria inercial e desempenho de pista sob a análise de Gabriel Fontes.',
    specs: {
      categoria: 'Hipercarro de Colecionismo',
      telemetria: 'Calibração de pista homologada',
      curadoria: 'Gabriel Fontes'
    }
  },
  relogios: {
    categorySlug: 'relogios',
    category: 'Alta Relojoaria',
    authorSlug: 'clara-meirelles',
    prefix: 'Alta Relojoaria',
    summary: 'Movimento de manufatura independente e detalhes de acabamento artesanal examinados sob a ótica de Clara Meirelles.',
    specs: {
      calibre: 'Mecânico de alta complicação',
      acabamento: 'Tradição artesanal suíça',
      curadoria: 'Mesa de Alta Horologia',
      estilo: 'Peça de Colecionador'
    }
  },
  destinos: {
    categorySlug: 'destinos',
    category: 'Destinos & Iates',
    authorSlug: 'gabriel-fontes',
    prefix: 'Náutica de Elite',
    summary: 'Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.',
    specs: {
      categoria: 'Superiate Transoceânico',
      engenharia: 'Casco de aço naval e compósitos',
      curadoria: 'Gabriel Fontes'
    }
  },
  arquitetura: {
    categorySlug: 'arquitetura',
    category: 'Arquitetura',
    authorSlug: 'henrique-vianna',
    prefix: 'Patrimônio & Leilões',
    summary: 'Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.',
    specs: {
      mercado: 'Grandes Leilões Internacionais',
      custodia: 'Refúgio de Liquidez Soberana',
      perfil: 'Family Offices & Colecionadores',
      curadoria: 'Henrique Vianna'
    }
  },
  estilo: {
    categorySlug: 'estilo',
    category: 'Alta-Costura',
    authorSlug: 'clara-meirelles',
    prefix: 'Alta-Costura',
    summary: 'O saber-fazer manual dos ateliês históricos e a permanência dos códigos de elegância sob a ótica de Clara Meirelles.',
    specs: {
      atelie: 'Savoir-faire artesanal europeu',
      materia_prima: 'Couros e tecidos nobres de curtume tradicional',
      curadoria: 'Clara Meirelles'
    }
  }
};

const MARINE_SIGNALS = [
  'yacht', 'yachts', 'superyacht', 'megayacht', 'superiate', 'iate', 'estaleiro',
  'benetti', 'lurssen', 'lürssen', 'feadship', 'nuvolari', 'motopanfilo', 'catamaran',
  'catamarã', 'sailing yacht', 'royal huisman', 'boat international'
];

const AUTOMOTIVE_SIGNALS = [
  'ferrari', 'lamborghini', 'porsche', 'mclaren', 'bugatti', 'koenigsegg', 'pagani',
  'aston martin', 'rolls-royce', 'rolls royce', 'bentley', 'maserati', 'jaguar', 'rimac',
  'gordon murray', 'hypercar', 'hipercarro', 'supercar', 'superesportivo', 'v12', 'v16',
  'gt3', 'le mans', 'nürburgring', 'nurburgring', 'rm sotheby', 'car auction'
];

const WATCH_SIGNALS = [
  'watch', 'watches', 'wristwatch', 'horology', 'chronograph', 'tourbillon',
  'minute repeater', 'perpetual calendar', 'calibre', 'dial', 'patek', 'rolex',
  'audemars', 'vacheron', 'lange', 'richard mille', 'journe', 'grand seiko', 'omega',
  'breguet', 'breitling', 'jaeger-lecoultre', 'hublot', 'panerai', 'zenith', 'tudor',
  'laurent ferrier', 'rexhep', 'urwerk', 'de bethune'
];

const JEWELRY_SIGNALS = [
  'tiara', 'diamond', 'parure', 'necklace', 'jewel', 'jewels', 'sapphire', 'emerald',
  'ruby', 'brooch', 'earrings', 'high jewelry', 'joalheria', 'joia', 'joias', 'diamante',
  'diamantes'
];

const ART_AUCTION_SIGNALS = [
  'sotheby', 'christie', 'phillips', 'bonhams', 'auction', 'auctions', 'leilão', 'leilao',
  'monet', 'klimt', 'picasso', 'warhol', 'basquiat', 'painting', 'paintings', 'sculpture',
  'escultura', 'antiquity', 'antiguidade', 'art'
];

const ARCHITECTURE_SIGNALS = [
  'mansion', 'mansão', 'penthouse', 'cobertura', 'villa', 'vila', 'estate', 'residence',
  'residência', 'architecture', 'architectural', 'brutalist', 'brutalista', 'condo',
  'beachfront', 'real estate', 'property', 'imóvel', 'imoveis', 'helipad', 'heliponto'
];

const FASHION_SIGNALS = [
  'hermès', 'hermes', 'birkin', 'moynat', 'couture', 'costura', 'leather', 'couro',
  'handbag', 'trunk', 'baú', 'fashion', 'savoir-faire'
];

const WEALTH_SIGNALS = [
  'family office', 'billionaire', 'fortune', 'wealth', 'dinasty', 'dinastia', 'patrimônio',
  'patrimonio', 'invest', 'forbes'
];

/**
 * Classifica o item em uma das cinco verticais do site.
 * Retorna null quando não há sinal editorial suficiente — o item é descartado.
 */
function classifyEditorial(item, title) {
  const text = title.toLowerCase();
  const source = (item.source || '').toLowerCase();
  const has = signals => signals.some(term => containsTerm(text, term));

  if (has(MARINE_SIGNALS)) return VERTICALS.destinos;
  if (has(AUTOMOTIVE_SIGNALS)) return VERTICALS.supercarros;
  if (has(WATCH_SIGNALS)) return VERTICALS.relogios;
  if (has(FASHION_SIGNALS)) return VERTICALS.estilo;
  if (has(JEWELRY_SIGNALS) || has(ART_AUCTION_SIGNALS) || has(ARCHITECTURE_SIGNALS) || has(WEALTH_SIGNALS)) {
    return VERTICALS.arquitetura;
  }

  // Prior de fonte: apenas feeds especializados, nunca Google News genérico
  if (source.includes('hodinkee') || source.includes('monochrome')) return VERTICALS.relogios;
  if (source.includes('superyacht')) return VERTICALS.destinos;
  if (source.includes('sotheby') || source.includes('christie')) return VERTICALS.arquitetura;

  return null;
}

function formatPortugueseHook(cleanTitle) {
  let h = cleanTitle;
  const lower = h.toLowerCase();

  if (lower.includes('cap d’antibes') || lower.includes("cap d'antibes")) {
    return 'Cap d’Antibes: Cobertura Triplex Histórica Ligada à Família Kennedy Vai a Mercado por US$ 45 Milhões';
  }
  if (lower.includes('megayacht') && (lower.includes('86m') || lower.includes('emerges'))) {
    return 'Megaiate Clássico dos Anos 90: O Ícone Naval que Reaparece no Mercado Internacional Avaliado em US$ 86 Milhões';
  }
  if (lower.includes('bugatti tourbillon')) {
    return 'Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Pista Fechada';
  }

  h = h
    .replace(/^exclusive:\s*/i, 'Exclusivo: ')
    .replace(/^introducing\s*[-–:]*\s*/i, 'Apresentação: ')
    .replace(/^first look:\s*/i, 'Primeiro Olhar: ')
    .replace(/^first drive:\s*/i, 'Teste de Pista: ')
    .replace(/\blists for\b/gi, 'Vai a Mercado por')
    .replace(/\bsells for\b/gi, 'É Arrematado por')
    .replace(/\basking for a whopping\b/gi, 'Avaliado em')
    .replace(/\bsuperyacht\b/gi, 'Superiate')
    .replace(/\bmegayacht\b/gi, 'Megaiate')
    .replace(/\btriplex penthouse\b/gi, 'Cobertura Triplex')
    .replace(/\bpenthouse\b/gi, 'Cobertura')
    .replace(/\bmansion\b/gi, 'Mansão')
    .replace(/\bemerges after a decade\b/gi, 'Reaparece Após uma Década')
    .trim();

  return h;
}

/**
 * Hooks, resumos e fichas técnicas homologados para histórias já conhecidas.
 * Retorna null quando a história não tem tratamento editorial dedicado.
 */
function buildKnownStory(cleanTitle) {
  const lower = cleanTitle.toLowerCase();

  if (lower.includes('atelier mephalie') || lower.includes('minute repeater')) {
    return {
      ...VERTICALS.relogios,
      hook: 'Atelier Mephalie: A Repetição de Minutos com Gongos Acústicos Manuais e Acabamento em Anglage de Alta Relojoaria',
      summary: 'A maison independente surpreende a alta relojoaria com um mecanismo de repetição de minutos ajustado manualmente, ostentando pontes chanfradas e pureza acústica tradicional.',
      specsPreview: {
        mecanica: 'Repetição de Minutos com duplo gongo sonoro',
        acabamento: 'Anglage manual com madeira de sabugueiro',
        calibre: 'Calibre mecânico de manufatura independente',
        origem: 'Alta Horologia Independente'
      }
    };
  }

  if (lower.includes('monaco legend') || (lower.includes('auction') && lower.includes('patek'))) {
    return {
      ...VERTICALS.relogios,
      hook: 'Monaco Legend Group: O Leilão de Outono que Reúne Peças Históricas da Patek Philippe e Rolex Vintage',
      summary: 'O principado de Mônaco recebe colecionadores globais para um pregão com lotes de proveniência intocada, incluindo referências raras de cronógrafos dos anos 1950.',
      specsPreview: {
        pregao: 'Monaco Legend Group Fall Auction',
        lotes_estrela: 'Patek Philippe & Rolex Pré-Daytona',
        proveniencia: 'Coleções privadas de alta estirpe',
        local: 'Hotel Hermitage, Mônaco'
      }
    };
  }

  if (lower.includes('monet')) {
    return {
      ...VERTICALS.arquitetura,
      hook: 'Sotheby\'s Paris: Obra Inédita de Claude Monet é Arrematada por US$ 56 Milhões Após Quatro Décadas em Cofre Privado',
      summary: 'A tela "Iris", preservada longe dos olhos públicos por mais de 40 anos, estabelece novo recorde fiduciário francês e comprova a liquidez soberana de obras-primas impressionistas.',
      specsPreview: {
        arremate: 'US$ 56 Milhões (€ 50M)',
        casa_leilao: 'Sotheby’s Paris',
        obra: 'Claude Monet — "Iris" (óleo sobre tela)',
        proveniencia: 'Coleção Privada Francesa Homologada'
      }
    };
  }

  if (lower.includes('beachfront') || lower.includes('condo record') || lower.includes('sarasota')) {
    return {
      ...VERTICALS.arquitetura,
      hook: 'Sarasota Record: Cobertura à Beira-Mar de US$ 14,5 Milhões Estabelece Marco Fiduciário Histórico na Costa da Flórida',
      summary: 'A transação monumental confirma o avanço de capitais de family offices em busca de imóveis troféu à beira-mar com ancoragem de concreto maciço e heliponto privativo.',
      specsPreview: {
        transacao: 'US$ 14.500.000 (Recorde Regional)',
        tipologia: 'Cobertura Penthouse Panorâmica',
        localizacao: 'Costa do Golfo, Flórida',
        lastro: 'Ativo imobiliário troféu de alta liquidez'
      }
    };
  }

  if (lower.includes('nuvolari') || lower.includes('380-foot')) {
    return {
      ...VERTICALS.destinos,
      hook: 'Nuvolari Lenard 380: O Gigante Transoceânico de 115 Metros Projetado para Expedições Autônomas de Longo Curso',
      summary: 'O renomado estaleiro italiano apresenta um conceito naval monumental de 380 pés com casco de deslocamento de aço, spa privativo e autonomia transatlântica ininterrupta.',
      specsPreview: {
        comprimento: '380 pés (115 metros)',
        estaleiro: 'Nuvolari Lenard (Itália)',
        autonomia: 'Mais de 6.000 milhas náuticas',
        propulsao: 'Diesel-elétrica de baixa emissão acústica'
      }
    };
  }

  if (lower.includes('chiabra')) {
    return {
      ...VERTICALS.destinos,
      hook: 'Tommy Chiabra: O Mercado de Brokerage Naval e a Corrida para o Primeiro Superiate de € 1 Bilhão',
      summary: 'O influente broker náutico analisa a ascensão dos gigaiates personalizados encomendados por dinastias globais, atingindo patamares orçamentários de 10 dígitos.',
      specsPreview: {
        projecao: 'Projetos navais acima de € 1.000.000.000',
        setor: 'Ultra-Luxury Yacht Brokerage',
        clientes: 'UHNWIs e Fortunas Soberanas',
        engenharia: 'Helipontos duplos e hangares submarinos'
      }
    };
  }

  if (lower.includes('bugatti') && lower.includes('tourbillon')) {
    return {
      ...VERTICALS.supercarros,
      hook: 'Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista',
      summary: 'A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.',
      specsPreview: {
        propulsao: 'V16 8.3L Nat. Aspirado + 3 Motores Elétricos',
        potencia: '1.800 cv combinados (9.000 RPM)',
        painel: 'Instrumentação esqueletizada em titânio e safira',
        aceleracao: '0-100 km/h em 2,0s (V-Max 445 km/h)'
      }
    };
  }

  if (lower.includes('bugatti') && lower.includes('miami')) {
    return {
      ...VERTICALS.supercarros,
      hook: 'Bugatti Residences Miami: A Torre Monumental com Sky-Lifts que Transportam Hipercarros até a Cobertura Privativa',
      summary: 'A maison de Molsheim expande sua engenharia aerodinâmica para a arquitetura residencial de Miami, permitindo que colecionadores estacionem seus bólidos na própria sala.',
      specsPreview: {
        investimento: 'Torre de US$ 1 Bilhão',
        inovacao: 'Elevador automotivo privativo para hipercarros',
        design: 'Inspirado nas curvas de Venturi da Bugatti',
        localizacao: 'Sunny Isles Beach, Miami'
      }
    };
  }

  if (lower.includes('ferrari') && (lower.includes('560') || lower.includes('e-building') || lower.includes('first ev'))) {
    return {
      ...VERTICALS.supercarros,
      hook: 'Ferrari E-Building: O Hipercarro Elétrico de US$ 560.800 que Desafia a Hegemonia dos Motores V12 em Maranello',
      summary: 'Maranello inaugura sua nova ala industrial de alta precisão e precifica seu primeiro modelo de propulsão elétrica, posicionando-o acima de seus tradicionais bólidos a combustão.',
      specsPreview: {
        valor: 'US$ 560.800 (Preço homologado)',
        unidade_fabril: 'E-Building Maranello',
        propulsao: 'Motores síncronos de fluxo magnético puro',
        chassi: 'Alumínio aeroespacial e bateria estrutural'
      }
    };
  }

  if (lower.includes('ferrari') && lower.includes('luce')) {
    return {
      ...VERTICALS.supercarros,
      hook: 'Ferrari Luce: O Dilema de US$ 500k entre a Nova Era Híbrida e a Tradição dos Motores V12 Aspirados',
      summary: 'A Ferrari coloca em teste o apetite de seus clientes tradicionais em uma encruzilhada mecânica onde o rugido de 12 cilindros em 9.000 RPM permanece como o supremo refúgio tátil.',
      specsPreview: {
        avaliacao: 'Faixa de US$ 450.000 a US$ 550.000',
        arquitetura: 'V12 aspirado clássico vs. Híbrido avançado',
        peso: 'Alívio extensivo com fibra de carbono',
        telemetria: 'Maranello Pure Dynamics'
      }
    };
  }

  return null;
}

/**
 * LAPIDADOR EDITORIAL: aplica vertical, persona, hook e ficha técnica.
 * Retorna null para itens fora das cinco verticais do site.
 */
function refineCuratedPauta(item, scoreData) {
  const cleanTitle = stripHtml(item.originalTitle || '').replace(/\s*-\s*[A-Za-z0-9\s.]+$/, '').trim();
  const vertical = classifyEditorial(item, cleanTitle);
  if (!vertical) return null;

  const known = buildKnownStory(cleanTitle);
  if (known) {
    return {
      categorySlug: known.categorySlug,
      category: known.category,
      authorSlug: known.authorSlug,
      hook: known.hook,
      summary: known.summary,
      specsPreview: known.specsPreview
    };
  }

  let hook = formatPortugueseHook(cleanTitle);
  if (!hook.includes(':') && hook.length < 92) {
    hook = `${vertical.prefix}: ${hook}`;
  }

  let summary = stripHtml(item.summary || '');
  if (!summary || summary.length < 30 || summary.includes('<a') || summary.includes('http')) {
    summary = vertical.summary;
  }

  return {
    categorySlug: vertical.categorySlug,
    category: vertical.category,
    authorSlug: vertical.authorSlug,
    hook,
    summary,
    specsPreview: { ...vertical.specs }
  };
}

// -----------------------------------------------------------------------------
// Memória editorial e higiene do acervo
// -----------------------------------------------------------------------------
function buildArchiveIndex() {
  const titles = [];
  const urls = new Set();
  const slugs = new Set();

  const add = record => {
    if (record.title) titles.push(record.title);
    const url = record.sourceUrl || record.source_url;
    if (url) urls.add(String(url).trim());
    if (record.slug) slugs.add(String(record.slug).toLowerCase().trim());
  };

  PUBLISHED_ARCHIVE.forEach(add);
  ARTICLES.forEach(add);

  return { titles, urls, slugs };
}

function isAlreadyPublished(item, archive) {
  const title = stripHtml(item.originalTitle || '');
  const url = (item.sourceUrl || '').trim();
  if (url && archive.urls.has(url)) return true;
  return archive.titles.some(publishedTitle => sameStory(title, publishedTitle));
}

function getLivePautaAgeHours(pauta) {
  if (!String(pauta.id || '').startsWith('pauta-live-')) return 0;
  const created = Date.parse(pauta.createdAt || '');
  if (!Number.isFinite(created)) return 0;
  return (Date.now() - created) / 3_600_000;
}

function isRetainablePauta(pauta, archive) {
  if (pauta.status && pauta.status !== 'available') return false;

  // Reaplica o filtro negativo: pautas antigas salvas antes do endurecimento
  // do manual não podem sobreviver apenas por ainda estarem dentro do TTL.
  const retentionText = `${stripHtml(pauta.originalTitle || '')} ${stripHtml(pauta.suggestedHook || '')}`;
  if (findNegativeTerm(retentionText)) return false;

  if (isAlreadyPublished({ originalTitle: pauta.originalTitle, sourceUrl: pauta.sourceUrl }, archive)) return false;
  if (getLivePautaAgeHours(pauta) > LIVE_PAUTA_TTL_HOURS) return false;
  return true;
}

// -----------------------------------------------------------------------------
// Ciclo principal
// -----------------------------------------------------------------------------
export async function runScoutAndCurate() {
  console.log('💎 ==============================================================================');
  console.log('💎 RADAR DO LUXO — SCOUT GLOBAL & CURADORIA DE PRÉ-POSTAGEM');
  console.log('💎 ==============================================================================');
  console.log('⏰ Horário UTC:', new Date().toISOString());
  console.log(`⚙️  Parâmetros: TTL de pauta ao vivo=${LIVE_PAUTA_TTL_HOURS}h · score mínimo=${MIN_SCORE}`);
  if (DRY_RUN) console.log('🧪 MODO DRY-RUN: nenhuma gravação em disco.');

  const archive = buildArchiveIndex();

  console.log('🌐 [Scout] Rastreando feeds internacionais ao vivo (Robb Report, Hodinkee, Monochrome, Google News)...');
  const feedItems = await fetchAllEliteFeeds();
  console.log(`📊 [Scout] Itens brutos capturados na rede mundial: ${feedItems.length}`);

  const candidatesByCategory = {
    supercarros: [],
    relogios: [],
    destinos: [],
    arquitetura: [],
    estilo: []
  };

  const seenStories = [];
  let rejectedNegative = 0;
  let rejectedPublished = 0;
  let rejectedOffTopic = 0;

  for (const item of feedItems) {
    const rawTitle = stripHtml((item.originalTitle || '').trim());
    if (!rawTitle || rawTitle.length < 15) continue;

    // Filtro negativo e frívolo (Manual de Melhores Práticas)
    if (findNegativeTerm(rawTitle)) {
      rejectedNegative += 1;
      continue;
    }

    // Duplicidade interna do próprio lote
    if (seenStories.some(existing => sameStory(existing, rawTitle) || storyKey(existing) === storyKey(rawTitle))) {
      continue;
    }

    // Auditoria contra tudo que já foi publicado (arquivo permanente + acervo local)
    if (isAlreadyPublished(item, archive)) {
      rejectedPublished += 1;
      continue;
    }

    const scoreData = calculateEditorialScore({
      title: rawTitle,
      summary: item.summary,
      specs: item.specs || {}
    });

    if (scoreData.totalScore < MIN_SCORE) continue;

    // Lapidação editorial: classifica a vertical e descarta item fora de escopo
    const refined = refineCuratedPauta(item, scoreData);
    if (!refined) {
      rejectedOffTopic += 1;
      continue;
    }

    seenStories.push(rawTitle);
    const catSlug = refined.categorySlug;

    const candidate = {
      id: `pauta-live-${catSlug}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      source: item.source || 'Scout Internacional',
      sourceCategory: refined.category,
      badgeColor: BADGE_COLORS[catSlug] || 'border-lux-gold/40 text-lux-gold bg-lux-gold/10',
      category: refined.category,
      categorySlug: catSlug,
      authorSlug: refined.authorSlug,
      rankingScore: scoreData.totalScore,
      rankingTier: scoreData.tier,
      originalTitle: rawTitle,
      suggestedHook: refined.hook,
      summary: refined.summary,
      sourceUrl: item.sourceUrl,
      publishedTime: 'Detectado ao vivo nas últimas 24h',
      createdAt: new Date().toISOString(),
      validityHours: 24,
      specsPreview: refined.specsPreview,
      suggestedImage: item.image,
      imageIsFallback: Boolean(item.imageIsFallback),
      status: 'available'
    };

    candidatesByCategory[catSlug].push(candidate);
  }

  console.log(`🧹 [Scout] Descartados: ${rejectedNegative} por termo negativo · ${rejectedPublished} já publicados · ${rejectedOffTopic} fora das verticais.`);

  // Seleção equilibrada: pega os melhores de cada vertical editorial
  Object.keys(candidatesByCategory).forEach(cat => {
    candidatesByCategory[cat].sort((a, b) => b.rankingScore - a.rankingScore);
  });

  const quotaPerCat = {
    supercarros: 3,
    relogios: 3,
    destinos: 3,
    arquitetura: 3,
    estilo: 2
  };

  const balancedSelection = [];
  Object.entries(quotaPerCat).forEach(([cat, count]) => {
    balancedSelection.push(...(candidatesByCategory[cat] || []).slice(0, count));
  });
  balancedSelection.sort((a, b) => b.rankingScore - a.rankingScore);

  console.log(`\n🎯 [Scout] Pautas novas qualificadas e lapidadas pelo Manual: ${balancedSelection.length}`);
  balancedSelection.forEach((pauta, index) => {
    console.log(`   ${index + 1}. [Score: ${pauta.rankingScore} | ${pauta.category} | ${pauta.authorSlug}]`);
    console.log(`      Hook: ${pauta.suggestedHook}`);
    console.log(`      Specs: ${JSON.stringify(pauta.specsPreview)}`);
  });

  // Higiene do acervo: mantém apenas pautas disponíveis, inéditas e dentro do TTL
  const retained = INITIAL_HOT_PAUTAS.filter(pauta => isRetainablePauta(pauta, archive));
  const removedStale = INITIAL_HOT_PAUTAS.length - retained.length;
  console.log(`🧹 [Acervo] ${retained.length} pautas mantidas · ${removedStale} removidas (publicadas, duplicadas ou expiradas).`);

  // Mescla novas no topo e deduplica por história/URL
  const merged = [];
  for (const pauta of [...balancedSelection, ...retained]) {
    const hook = pauta.suggestedHook || pauta.originalTitle || '';
    const duplicated = merged.some(existing => {
      const existingHook = existing.suggestedHook || existing.originalTitle || '';
      if (pauta.sourceUrl && existing.sourceUrl && pauta.sourceUrl === existing.sourceUrl) return true;
      return sameStory(existingHook, hook) || (storyKey(existingHook) && storyKey(existingHook) === storyKey(hook));
    });
    if (!duplicated) merged.push(pauta);
  }

  console.log(`📚 [Acervo] Total final de pautas no banco: ${merged.length}.`);

  if (DRY_RUN) {
    console.log('🧪 [DRY RUN] Array final que seria gravado em hotFeedsData.js:');
    merged.forEach((pauta, index) => {
      console.log(`   ${index + 1}. [${pauta.categorySlug}] ${pauta.suggestedHook.slice(0, 80)}...`);
    });
    console.log('🧪 [DRY RUN] Nada foi gravado.');
    return balancedSelection;
  }

  const hotFeedsPath = path.join(rootDir, 'src', 'data', 'hotFeedsData.js');
  const fileContent = fs.readFileSync(hotFeedsPath, 'utf8');
  const startMarker = 'export const INITIAL_HOT_PAUTAS = [';
  const endMarker = 'const LOCAL_STORAGE_HOT_PAUTAS_KEY =';
  const startIdx = fileContent.indexOf(startMarker);
  const endIdx = fileContent.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    console.warn('⚠️ Não foi possível localizar os marcadores em hotFeedsData.js.');
    return balancedSelection;
  }

  const before = fileContent.slice(0, startIdx);
  const after = fileContent.slice(endIdx);
  const newArrayCode = 'export const INITIAL_HOT_PAUTAS = ' + JSON.stringify(merged, null, 2) + ';\n\n';
  fs.writeFileSync(hotFeedsPath, before + newArrayCode + after, 'utf8');
  console.log('✅ [hotFeedsData.js] Acervo de pautas atualizado com rigor editorial.');

  return balancedSelection;
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('curateHotFeeds.js')) {
  runScoutAndCurate().catch(err => {
    console.error('❌ Erro no ciclo de curadoria:', err);
    process.exit(1);
  });
}
