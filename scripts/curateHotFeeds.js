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
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchAllEliteFeeds } from '../src/services/rssCuratorService.js';
import { calculateEditorialScore } from '../src/services/rankingEngine.js';
import { ARTICLES } from '../src/data/mockData.js';
import { INITIAL_HOT_PAUTAS } from '../src/data/hotFeedsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function getPhotoId(url) {
  if (!url) return '';
  const m = url.match(/photo-[a-z0-9\-]+/i);
  return m ? m[0] : '';
}

function keywordsMatch(text1, text2) {
  if (!text1 || !text2) return false;
  const words1 = text1.toLowerCase().replace(/[^a-z0-9áéíóúãõâêîôûç]/g, ' ').split(/\s+/).filter(w => w.length >= 5);
  const words2 = text2.toLowerCase().replace(/[^a-z0-9áéíóúãõâêîôûç]/g, ' ').split(/\s+/).filter(w => w.length >= 5);
  const common = words1.filter(w => words2.includes(w));
  return common.length >= 2;
}

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

// Filtro negativo estrito: descarta esportes coletivos, tabloides, fofocas e matérias sem prestígio
const NEGATIVE_TERMS = [
  'soccer', 'football', 'basketball', 'baseball', 'softball', 'volleyball',
  'high school', 'wrap:', 'scores:', 'game wrap', 'podcast', 'concert',
  'birthday party', 'arrested', 'crash', 'police', 'shooting', 'murder', 'recipe',
  'kim jong', 'drake', 'celebrity', 'kardashian', 'pickleball', 'waterslides',
  'influencer', 'tiktok', 'viral', 'dating', 'divorce', 'scandal', 'nightclub',
  'cheap', 'discount', 'coupon', 'black friday', 'deal of the day'
];

const BADGE_COLORS = {
  supercarros: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  relogios: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  arquitetura: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
  destinos: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  estilo: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
};

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
 * LAPIDADOR EDITORIAL: Aplica o Manual de Diretrizes Editoriais e as Personas
 */
function refineCuratedPauta(item, scoreData) {
  const cleanTitle = stripHtml(item.originalTitle || '').replace(/\s*-\s*[A-Za-z0-9\s.]+$/, '').trim();
  const lower = cleanTitle.toLowerCase();
  const summaryText = stripHtml(item.summary || '');

  let categorySlug = item.categorySlug || 'supercarros';
  let category = item.category || 'Supercarros';
  let authorSlug = 'henrique-vianna';
  let hook = formatPortugueseHook(cleanTitle);
  let summary = summaryText;
  let specsPreview = {};

  const isBugatti = lower.includes('bugatti');

  // 1. Detecção de Alta Relojoaria (Clara Meirelles) - Bugatti vai para Supercarros
  if (
    !isBugatti && (
      lower.includes('watch') || lower.includes('patek') || lower.includes('hodinkee') ||
      lower.includes('monochrome') || lower.includes('chronograph') || lower.includes('minute repeater') ||
      lower.includes('dial') || lower.includes('movement') || lower.includes('atelier mephalie') ||
      lower.includes('horology') || (lower.includes('tourbillon') && !isBugatti)
    )
  ) {
    categorySlug = 'relogios';
    category = 'Alta Relojoaria';
    authorSlug = 'clara-meirelles';

    if (lower.includes('atelier mephalie') || lower.includes('minute repeater')) {
      hook = 'Atelier Mephalie: A Repetição de Minutos com Gongos Acústicos Manuais e Acabamento em Anglage de Alta Relojoaria';
      summary = 'A maison independente surpreende a alta relojoaria com um mecanismo de repetição de minutos ajustado manualmente, ostentando pontes chanfradas e pureza acústica tradicional.';
      specsPreview = {
        mecanica: 'Repetição de Minutos com duplo gongo sonoro',
        acabamento: 'Anglage manual com madeira de sabugueiro',
        calibre: 'Calibre mecânico de manufatura independente',
        origem: 'Alta Horologia Independente'
      };
    } else if (lower.includes('monaco legend') || lower.includes('auction')) {
      hook = 'Monaco Legend Group: O Leilão de Outono que Reúne Peças Históricas da Patek Philippe e Rolex Vintage';
      summary = 'O principado de Mônaco recebe colecionadores globais para um pregão com lotes de proveniência intocada, incluindo referências raras de cronógrafos dos anos 1950.';
      specsPreview = {
        pregao: 'Monaco Legend Group Fall Auction',
        lotes_estrela: 'Patek Philippe & Rolex Pré-Daytona',
        proveniencia: 'Coleções privadas de alta estirpe',
        local: 'Hotel Hermitage, Mônaco'
      };
    } else {
      hook = formatPortugueseHook(`Alta Relojoaria: ${cleanTitle}`);
      summary = 'Movimento de manufatura independente e detalhes de acabamento artesanal examinados sob a ótica de Clara Meirelles.';
      specsPreview = {
        calibre: 'Mecânico de alta complicação',
        acabamento: 'Tradição artesanal suíça',
        curadoria: 'Mesa de Alta Horologia',
        estilo: 'Peça de Colecionador'
      };
    }
  }

  // 2. Detecção de Grandes Leilões, Arte & Arquitetura Monumental (Henrique Vianna)
  else if (
    lower.includes('monet') || lower.includes('sotheby') || lower.includes('christie') ||
    lower.includes('beachfront') || lower.includes('penthouse') || lower.includes('mansion') ||
    lower.includes('condo record') || lower.includes('auction record')
  ) {
    categorySlug = 'arquitetura';
    category = 'Arquitetura';
    authorSlug = 'henrique-vianna';

    if (lower.includes('monet')) {
      hook = 'Sotheby\'s Paris: Obra Inédita de Claude Monet é Arrematada por US$ 56 Milhões Após Quatro Décadas em Cofre Privado';
      summary = 'A tela "Iris", preservada longe dos olhos públicos por mais de 40 anos, estabelece novo recorde fiduciário francês e comprova a liquidez soberana de obras-primas impressionistas.';
      specsPreview = {
        arremate: 'US$ 56 Milhões (€ 50M)',
        casa_leilao: 'Sotheby’s Paris',
        obra: 'Claude Monet — "Iris" (óleo sobre tela)',
        proveniencia: 'Coleção Privada Francesa Homologada'
      };
    } else if (lower.includes('beachfront') || lower.includes('condo record') || lower.includes('sarasota')) {
      hook = 'Sarasota Record: Cobertura à Beira-Mar de US$ 14,5 Milhões Estabelece Marco Fiduciário Histórico na Costa da Flórida';
      summary = 'A transação monumental confirma o avanço de capitais de family offices em busca de imóveis troféu à beira-mar com ancoragem de concreto maciço e heliponto privativo.';
      specsPreview = {
        transacao: 'US$ 14.500.000 (Recorde Regional)',
        tipologia: 'Cobertura Penthouse Panorâmica',
        localizacao: 'Costa do Golfo, Flórida',
        lastro: 'Ativo imobiliário troféu de alta liquidez'
      };
    } else {
      hook = formatPortugueseHook(cleanTitle);
      summary = 'Movimentação estratégica de alocação patrimonial e ativos físicos imunes à volatilidade dos mercados de ações.';
      specsPreview = {
        mercado: 'Grandes Leilões Internacionais',
        custodia: 'Refúgio de Liquidez Soberana',
        perfil: 'Family Offices & Colecionadores',
        curadoria: 'Henrique Vianna'
      };
    }
  }

  // 3. Detecção de Superiates & Navegação Transoceânica (Gabriel Fontes)
  else if (
    lower.includes('superyacht') || lower.includes('megayacht') || lower.includes('yacht') ||
    lower.includes('nuvolari') || lower.includes('chiabra') || lower.includes('life at sea')
  ) {
    categorySlug = 'destinos';
    category = 'Destinos & Iates';
    authorSlug = 'gabriel-fontes';

    if (lower.includes('nuvolari') || lower.includes('380-foot')) {
      hook = 'Nuvolari Lenard 380: O Gigante Transoceânico de 115 Metros Projetado para Expedições Autônomas de Longo Curso';
      summary = 'O renomado estaleiro italiano apresenta um conceito naval monumental de 380 pés com casco de deslocamento de aço, spa privativo e autonomia transatlântica ininterrupta.';
      specsPreview = {
        comprimento: '380 pés (115 metros)',
        estaleiro: 'Nuvolari Lenard (Itália)',
        autonomia: 'Mais de 6.000 milhas náuticas',
        propulsao: 'Diesel-elétrica de baixa emissão acústica'
      };
    } else if (lower.includes('billion') || lower.includes('chiabra')) {
      hook = 'Tommy Chiabra: O Mercado de Brokerage Naval e a Corrida para o Primeiro Superiate de € 1 Bilhão';
      summary = 'O influente broker náutico analisa a ascensão dos gigaiates personalizados encomendados por dinastias globais, atingindo patamares orçamentários de 10 dígitos.';
      specsPreview = {
        projecao: 'Projetos navais acima de € 1.000.000.000',
        setor: 'Ultra-Luxury Yacht Brokerage',
        clientes: 'UHNWIs e Fortunas Soberanas',
        engenharia: 'Helipontos duplos e hangares submarinos'
      };
    } else {
      hook = formatPortugueseHook(cleanTitle);
      summary = 'Dinâmica de fluidos computacional e hidrodinâmica oceânica de alto luxo sob a análise de Gabriel Fontes.';
      specsPreview = {
        categoria: 'Superiate Transoceânico',
        engenharia: 'Casco de aço naval e compósitos',
        curadoria: 'Gabriel Fontes'
      };
    }
  }

  // 4. Detecção de Hipercarros & Velocidade (Gabriel Fontes)
  else {
    categorySlug = 'supercarros';
    category = 'Supercarros';
    authorSlug = 'gabriel-fontes';

    if (lower.includes('bugatti') && lower.includes('tourbillon')) {
      hook = 'Bugatti Tourbillon: O V16 Híbrido de 1.800 cv com Instrumentação Suíça Analisado em Telemetria de Pista';
      summary = 'A lenda de Molsheim substitui o mítico bloco W16 por um V16 aspirado de 8.3L associado a três motores elétricos e instrumentação mecânica de titânio puro.';
      specsPreview = {
        propulsao: 'V16 8.3L Nat. Aspirado + 3 Motores Elétricos',
        potencia: '1.800 cv combinados (9.000 RPM)',
        painel: 'Instrumentação esqueletizada em titânio e safira',
        aceleracao: '0-100 km/h em 2,0s (V-Max 445 km/h)'
      };
    } else if (lower.includes('bugatti') && lower.includes('miami')) {
      hook = 'Bugatti Residences Miami: A Torre Monumental com Sky-Lifts que Transportam Hipercarros até a Cobertura Privativa';
      summary = 'A maison de Molsheim expande sua engenharia aerodinâmica para a arquitetura residencial de Miami, permitindo que colecionadores estacionem seus bólidos na própria sala.';
      specsPreview = {
        investimento: 'Torre de US$ 1 Bilhão',
        inovacao: 'Elevador automotivo privativo para hipercarros',
        design: 'Inspirado nas curvas de Venturi da Bugatti',
        localizacao: 'Sunny Isles Beach, Miami'
      };
    } else if (lower.includes('ferrari') && (lower.includes('ev') || lower.includes('560') || lower.includes('electric'))) {
      hook = 'Ferrari E-Building: O Hipercarro Elétrico de US$ 560.800 que Desafia a Hegemonia dos Motores V12 em Maranello';
      summary = 'Maranello inaugura sua nova ala industrial de alta precisão e precifica seu primeiro modelo de propulsão elétrica, posicionando-o acima de seus tradicionais bólidos a combustão.';
      specsPreview = {
        valor: 'US$ 560.800 (Preço homologado)',
        unidade_fabril: 'E-Building Maranello',
        propulsao: 'Motores síncronos de fluxo magnético puro',
        chassi: 'Alumínio aeroespacial e bateria estrutural'
      };
    } else if (lower.includes('ferrari') && (lower.includes('luce') || lower.includes('v12'))) {
      hook = 'Ferrari Luce: O Dilema de US$ 500k entre a Nova Era Híbrida e a Tradição dos Motores V12 Aspirados';
      summary = 'A Ferrari coloca em teste o apetite de seus clientes tradicionais em uma encruzilhada mecânica onde o rugido de 12 cilindros em 9.000 RPM permanece como o supremo refúgio tátil.';
      specsPreview = {
        avaliacao: 'Faixa de US$ 450.000 a US$ 550.000',
        arquitetura: 'V12 aspirado clássico vs. Híbrido avançado',
        peso: 'Alívio extensivo com fibra de carbono',
        telemetria: 'Maranello Pure Dynamics'
      };
    } else {
      hook = `Hipercarros: ${cleanTitle}`;
      summary = 'Engenharia de precisão, telemetria inercial e desempenho de pista sob a análise de Gabriel Fontes.';
      specsPreview = {
        categoria: 'Hipercarro de Colecionismo',
        telemetria: 'Calibração de pista homologada',
        curadoria: 'Gabriel Fontes'
      };
    }
  }

  // Limpa o resumo se ele ainda estiver cru ou contiver tags
  if (!summary || summary.length < 30 || summary.includes('<a') || summary.includes('http')) {
    summary = `Pauta de alta gravitas internacional selecionada e homologada para o acervo de pré-postagem do Radar do Luxo.`;
  }

  return {
    categorySlug,
    category,
    authorSlug,
    hook,
    summary,
    specsPreview
  };
}

export async function runScoutAndCurate() {
  console.log('💎 ==============================================================================');
  console.log('💎 RADAR DO LUXO — SCOUT GLOBAL & CURADORIA DE PRÉ-POSTAGEM');
  console.log('💎 ==============================================================================');
  console.log('⏰ Horário UTC:', new Date().toISOString());

  const existingPhotoIds = new Set(ARTICLES.map(a => getPhotoId(a.image)).filter(Boolean));
  const existingTitles = ARTICLES.map(a => (a.title || '').toLowerCase());
  const existingSlugs = ARTICLES.map(a => (a.slug || '').toLowerCase());

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

  const seenTitles = new Set();

  for (const item of feedItems) {
    const rawTitle = stripHtml((item.originalTitle || '').trim());
    if (!rawTitle || rawTitle.length < 15) continue;

    const lower = rawTitle.toLowerCase();

    // Filtro de termos negativos e frívolos (Manual de Melhores Práticas)
    if (NEGATIVE_TERMS.some(neg => lower.includes(neg))) {
      continue;
    }

    const normalizedKey = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seenTitles.has(normalizedKey)) continue;
    seenTitles.add(normalizedKey);

    // Auditoria Anti-Duplicidade contra o site existente
    const photoId = getPhotoId(item.image);
    const hasPhoto = photoId && existingPhotoIds.has(photoId);
    const hasTopic = existingTitles.some(t => keywordsMatch(rawTitle, t)) || existingSlugs.some(s => keywordsMatch(rawTitle, s));

    if (hasPhoto || hasTopic) {
      continue;
    }

    const scoreData = calculateEditorialScore({
      title: rawTitle,
      summary: item.summary,
      specs: item.specs || {}
    });

    if (scoreData.totalScore >= 82) {
      // Aplica a Lapidação Editorial completa (Hook, Persona, Specs, Summary nobre)
      const refined = refineCuratedPauta(item, scoreData);
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
        status: 'available'
      };

      if (!candidatesByCategory[catSlug]) candidatesByCategory[catSlug] = [];
      candidatesByCategory[catSlug].push(candidate);
    }
  }

  // Ordena cada categoria por score
  Object.keys(candidatesByCategory).forEach(cat => {
    candidatesByCategory[cat].sort((a, b) => b.rankingScore - a.rankingScore);
  });

  // Seleção equilibrada: pega os melhores de cada vertical editorial
  const balancedSelection = [];
  const quotaPerCat = {
    supercarros: 3,
    relogios: 3,
    destinos: 3,
    arquitetura: 3,
    estilo: 2
  };

  Object.entries(quotaPerCat).forEach(([cat, count]) => {
    const list = candidatesByCategory[cat] || [];
    balancedSelection.push(...list.slice(0, count));
  });

  // Ordena a seleção final por rankingScore decrescente
  balancedSelection.sort((a, b) => b.rankingScore - a.rankingScore);

  console.log(`\n🎯 [Scout] Pautas qualificadas e lapidadas pelo Manual: ${balancedSelection.length}`);
  balancedSelection.forEach((p, idx) => {
    console.log(`   ${idx + 1}. [Score: ${p.rankingScore} | ${p.category} | ${p.authorSlug}]`);
    console.log(`      Hook: ${p.suggestedHook}`);
    console.log(`      Specs: ${JSON.stringify(p.specsPreview)}`);
  });

  if (balancedSelection.length > 0) {
    // Mescla mantendo as novas no topo e as 16 homologadas originais como base perene
    const combinedPautas = [...balancedSelection, ...INITIAL_HOT_PAUTAS];
    
    // Deduplica lista combinada por hook/título
    const finalUniquePautas = [];
    const pautaKeys = new Set();
    for (const p of combinedPautas) {
      const key = (p.suggestedHook || p.originalTitle || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!pautaKeys.has(key)) {
        pautaKeys.add(key);
        finalUniquePautas.push(p);
      }
    }

    const hotFeedsPath = path.join(rootDir, 'src', 'data', 'hotFeedsData.js');
    let fileContent = fs.readFileSync(hotFeedsPath, 'utf8');

    const startMarker = 'export const INITIAL_HOT_PAUTAS = [';
    const endMarker = 'const LOCAL_STORAGE_HOT_PAUTAS_KEY =';

    const startIdx = fileContent.indexOf(startMarker);
    const endIdx = fileContent.indexOf(endMarker);

    if (startIdx !== -1 && endIdx !== -1) {
      const before = fileContent.slice(0, startIdx);
      const after = fileContent.slice(endIdx);
      const newArrayCode = 'export const INITIAL_HOT_PAUTAS = ' + JSON.stringify(finalUniquePautas, null, 2) + ';\n\n';
      fs.writeFileSync(hotFeedsPath, before + newArrayCode + after, 'utf8');
      console.log(`\n✅ [hotFeedsData.js] Atualizado com rigor editorial! Total de pautas no banco: ${finalUniquePautas.length}.`);
    } else {
      console.warn('⚠️ Não foi possível localizar os marcadores em hotFeedsData.js.');
    }
  }

  return balancedSelection;
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('curateHotFeeds.js')) {
  runScoutAndCurate().catch(err => {
    console.error('❌ Erro no ciclo de curadoria:', err);
    process.exit(1);
  });
}
