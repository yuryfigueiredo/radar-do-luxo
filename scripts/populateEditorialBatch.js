/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — SCRIPT DE POVOAMENTO EDITORIAL EM LOTE (BATCH POPULATOR)
 * ==============================================================================
 * Gera uma coleção inaugural de 15 ensaios de altíssimo padrão assinados pelas
 * 3 personas oficiais (Henrique Vianna, Gabriel Fontes e Clara Meirelles),
 * cobrindo todas as 5 categorias do SSOT Blueprint v2.5.0.
 *
 * Atualiza o acervo mestre de demonstração (src/data/mockData.js) e grava no
 * Supabase Cloud DB caso as credenciais estejam ativas.
 *
 * Como executar:
 *   npm run populate
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { generateLuxuryArticle } from '../src/services/aiArticleGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Carrega .env manualmente se necessário
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  });
}

const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '').trim();
let rawSupabaseUrl = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').trim();
if (rawSupabaseUrl && !rawSupabaseUrl.startsWith('http://') && !rawSupabaseUrl.startsWith('https://')) {
  rawSupabaseUrl = `https://${rawSupabaseUrl}`;
}
if (rawSupabaseUrl.endsWith('/')) {
  rawSupabaseUrl = rawSupabaseUrl.slice(0, -1);
}
const SUPABASE_URL = rawSupabaseUrl;
const SUPABASE_KEY = (
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.SUPABASE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  ''
).trim();

console.log('💎 ==============================================================================');
console.log('💎 RADAR DO LUXO — INICIANDO POVOAMENTO EDITORIAL DE ALTO PADRÃO');
console.log('💎 ==============================================================================');
console.log('🤖 Motor de Redação: Google Gemini Flash / Sintetizador Homologado');
console.log('🔑 Gemini Key detectada:', GEMINI_API_KEY ? `Ativa (${GEMINI_API_KEY.slice(0, 8)}...)` : '(Sintetizador Local)');
console.log('📡 Supabase URL:', SUPABASE_URL || '(Persistência Local Primária)');

// As 15 Pautas Obras-Primas do Povoamento Inicial
const BATCH_TOPICS = [
  // 1. HIPERCARROS & ENGENHARIA NAVAL (Gabriel Fontes)
  {
    topic: 'Koenigsegg Jesko Absolut pulverizou o recorde mundial de 0-400-0 km/h em 27,83 segundos com 1.600 cv',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    badge: 'RECORDE MUNDIAL',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1400',
    specs: {
      motorizacao: 'Koenigsegg V8 5.0L Biturbo (1.600 cv em E85)',
      transmissao: 'LST Light Speed Transmission de 9 marchas sem embreagem tradicional',
      coeficiente: 'Cx 0.278 de penetração aerodinâmica com aletas traseiras estabilizadoras',
      recorde_homologado: '0-400-0 km/h em 27,83 segundos em pista militar na Suécia'
    }
  },
  {
    topic: 'GMA T.50s Niki Lauda bólido de pista de 852 kg com turbina de vácuo traseira e V12 Cosworth de 12.100 RPM',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    badge: 'ENGENHARIA PURA',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    specs: {
      motorizacao: 'Cosworth GMA V12 3.9L Naturalmente Aspirado (12.100 RPM)',
      peso_a_seco: '852 kg em fibra de carbono de graduação aeroespacial',
      aerodinamica: 'Ventoinha traseira de 400 mm gerando 1.500 kg de downforce ativo',
      tiragem_mundial: '25 exemplares numerados para uso exclusivo em circuito fechado'
    }
  },
  {
    topic: 'Pagani Huayra R Evo monstro longtail de 900 cv com V12 aspirado de 9.200 RPM e monocoque de carbo-titânio',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    badge: 'PISTA & TELEMETRIA',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1400',
    specs: {
      motorizacao: 'V12-R Evo HWA 6.0L Aspirado (900 cv a 8.750 RPM)',
      chassi: 'Monocoque em Carbo-Titânio HP62 G2 curado em autoclave sob 6 bar',
      carroceria: 'Codalunga Longtail esticada em 190 mm para estabilidade a 320 km/h',
      coletor_escape: 'Inconel 625 soldado à mão com revestimento cerâmico'
    }
  },
  {
    topic: 'Lürssen Kismet o megaiate de 122 metros e 3 milhões de euros por semana com heliponto duplo e crioterapia submarina',
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    authorSlug: 'gabriel-fontes',
    badge: 'ENGENHARIA NAVAL',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1400',
    specs: {
      comprimento: '122 metros (400 ft) de casco oceânico em aço naval de alta resistência',
      estaleiro: 'Lürssen Werft, Bremen, Alemanha (Design Nuvolari Lenard)',
      propulsao: 'Sistema híbrido elétrico de alta eficiência com autonomia transoceânica',
      amenidades: 'Heliponto duplo para aeronaves executivas e câmara de crioterapia a -110°C'
    }
  },
  {
    topic: 'Feadship Obsidian superiate híbrido holandês de 84 metros com baterias de 4.5 MWh e casco otimizado por inteligência artificial',
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    authorSlug: 'gabriel-fontes',
    badge: 'NÁUTICA DO FUTURO',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400',
    specs: {
      comprimento: '84.2 metros com casco de deslocamento em aço naval holandês',
      estaleiro: 'Feadship De Vries, Haarlem, Países Baixos',
      banco_baterias: '4.5 MWh em células de fosfato de ferro-lítio para navegação silenciosa',
      autonomia: '5.500 milhas náuticas a 12 nós com redução de 35% de combustível fóssil'
    }
  },

  // 2. ALTA RELOJOARIA & ATELIÊS (Clara Meirelles)
  {
    topic: 'F.P. Journe Chronomètre Bleu com rara caixa de tântalo polido e calibre 1304 em ouro rosa 18k sólido',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    badge: 'ALTA HOROLOGIA',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1400',
    specs: {
      caixa: 'Tântalo polido de densidade mineral extrema fundido a 3.000°C',
      calibre: '1304 em Ouro Rosa 18k sólido com duplo tambor de corda',
      mostrador: 'Azul cromático espelhado com tratamento de reflexão multicamadas',
      reserva_de_marcha: '56 horas de precisão cronométrica ininterrupta'
    }
  },
  {
    topic: 'A. Lange & Söhne Datograph Honeygold Lumen com safira fosforescente e turbilhão com parada de segundos',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    badge: 'OBRA-PRIMA SAXÔNICA',
    image: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&q=80&w=1400',
    specs: {
      liga_metalica: 'Honeygold 18k patenteado de dureza superior ao ouro convencional',
      calibre: 'L952.4 de manufatura saxônica com 516 componentes acabados à mão',
      complicacoes: 'Cronógrafo Flyback, Calendário Perpétuo e Turbilhão com parada patenteada',
      tiragem_fechada: '50 exemplares numerados para o circuito mundial de colecionadores'
    }
  },
  {
    topic: 'Vacheron Constantin Les Cabinotiers a mecânica de 40 complicações astronômicas em platina que exigiu 8 anos de cálculo',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    badge: 'PIÈCE UNIQUE',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
    specs: {
      complicacoes: '40 complicações astronômicas independentes com mapa do céu sideral',
      caixa: 'Platina 950 com gravura manual burilada nas oficinas históricas de Genebra',
      componentes: '1.120 peças acabadas à mão com chanfros de sabugueiro silvestre',
      status: 'Encomenda sob medida confidencial homologada pela manufatura'
    }
  },
  {
    topic: 'Rexhep Rexhepi Chronomètre Contemporain II no ateliê Akrivia em Genebra com chanfro manual absoluto',
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    badge: 'ATELIÊ INDEPENDENTE',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1400',
    specs: {
      calibre: 'RR02 de corda manual com balanço simétrico e segundos mortos',
      mostrador: 'Esmalte Grand Feu vítreo branco queimado sucessivas vezes a 820°C',
      caixa: 'Ouro Rosa 18k forjada artesanalmente pelo lendário Jean-Pierre Hagmann',
      producao: 'Lista de espera de 7 anos com alocação restrita sob aprovação pessoal'
    }
  },
  {
    topic: 'Hermès Faubourg Saint-Honoré o ateliê secreto em Paris onde 30 mestres costuram couro Barenia com ponto selê de 1837',
    category: 'Alta-Costura',
    categorySlug: 'estilo',
    authorSlug: 'clara-meirelles',
    badge: 'SAVOIR-FAIRE ANCESTRAL',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400',
    specs: {
      couros: 'Box Calf e Barenia com curtimento vegetal lento à base de cascas de mimosa',
      costura: 'Ponto selê legítimo com linha de linho encerada em cera virgem de abelha',
      tempo_manufatura: 'Mínimo de 32 horas de trabalho manual contínuo por uma única artesã',
      procedencia: 'Ateliê do 5º andar do número 24 da Rue du Faubourg Saint-Honoré, Paris'
    }
  },

  // 3. PATRIMÔNIO DINÁSTICO, LEILÕES & ARQUITETURA BRUTALISTA (Henrique Vianna)
  {
    topic: 'RM Sotheby The White Collection acervo secreto de 56 Porsches brancos intactos arrematado por 30.5 milhões de dólares',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    badge: 'RECORDE DE LEILÃO',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    specs: {
      volume_total: 'US$ 30.540.000 sob o martelo da RM Sotheby\'s em Houston',
      lote_principal: 'Porsche 918 Spyder Weissach Package com interior azul iate sob encomenda',
      proveniencia: 'Coleção privada mantida por 25 anos em ambiente com umidade controlada',
      custodia: 'Certidão contínua de fábrica e zero quilômetros registrados no hodômetro'
    }
  },
  {
    topic: 'Relatório Reservado de Family Offices 2026 grandes fortunas aumentam em 35 por cento a guarda de ouro físico e ativos imunes',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    badge: 'GOVERNANÇA PATRIMONIAL',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400',
    specs: {
      movimentacao: 'Migração de 35% de ativos líquidos para ouro fino e propriedades troféu',
      jurisdicoes: 'Portos francos de segurança máxima em Zurique, Genebra e Liechtenstein',
      finalidade: 'Blindagem de governança dinástica multigeracional contra volatilidade cambial',
      fonte: 'Global Single Family Office Asset Allocation Benchmark 2026'
    }
  },
  {
    topic: 'Christie Genebra diamante azul royal de 17.61 quilates arrematado por 44 milhões de dólares',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    badge: 'TESOURO HISTÓRICO',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400',
    specs: {
      quilates: '17.61 quilates lapidação pêra Fancy Vivid Blue de saturação perfeita',
      pureza: 'Internally Flawless (IF) atestado pelo Gemological Institute of America',
      arremate: 'US$ 43.800.000 após duelo de lances telefônicos fechados em Genebra',
      proveniencia: 'Acervo particular aristocrático suíço preservado sem intervenção por 50 anos'
    }
  },
  {
    topic: 'Sheats-Goldstein Residence a joia brutalista de concreto angular e vidro em Los Angeles avaliada em 100 milhões de dólares',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    badge: 'MONUMENTO BRUTALISTA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    specs: {
      arquiteto: 'John Lautner (Discípulo direto de Frank Lloyd Wright)',
      concepcao: 'Concreto protendido incrustado na rocha com teto perfurado por 750 discos de vidro',
      area_construida: '1.200 m² suspensos sobre os cânions de Crestwood Hills, Beverly Hills',
      patrimonio: 'Imóvel troféu doado formalmente ao LACMA para preservação perpétua'
    }
  },
  {
    topic: 'Villa sa Caleta em Maiorca o refúgio monumental de travertino navona e concreto sobre a falésia balear de 38 milhões de euros',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    badge: 'REFÚGIO MEDITERRÂNEO',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400',
    specs: {
      area: '1.850 m² de lajes em balanço projetadas sobre falésia de rocha calcária mãe',
      materiais: 'Travertino Romano Navona polido a osso e concreto tonalizado no tom das areias',
      privacidade: 'Acesso privativo por píer submarino talhado na pedra e heliponto homologado',
      cotacao: '€ 38.000.000 (Transação sob sigilo no mercado fechado europeu)'
    }
  }
];

// Helper para atraso respeitando quotas de API
const delay = ms => new Promise(res => setTimeout(res, ms));

async function populateBatch() {
  const generatedArticles = [];
  let supabaseClient = null;

  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
      console.log('✓ Conectado ao Supabase para sincronização em nuvem.');
    } catch (e) {
      console.warn('⚠️ Supabase indisponível no momento, prosseguindo com geração local.');
    }
  }

  for (let i = 0; i < BATCH_TOPICS.length; i++) {
    const item = BATCH_TOPICS[i];
    console.log(`\n[${i + 1}/${BATCH_TOPICS.length}] Redigindo matéria para ${item.authorSlug.toUpperCase()}...`);
    console.log(`   Pauta: "${item.topic.slice(0, 70)}..."`);

    try {
      const article = await generateLuxuryArticle(item.topic);
      
      const slug = article.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      const isHero = i === 0; // O Koenigsegg Jesko é a Capa Principal inaugural
      const isHeroSecondary = i === 1 || i === 5; // T.50s e F.P. Journe como destaques de apoio

      const fullArticle = {
        id: `art-${slug.slice(0, 32)}-${(1000 + i).toString()}`,
        slug,
        title: article.title,
        category: item.category,
        categorySlug: item.categorySlug,
        type: 'article',
        badge: isHero ? 'DESTAQUE MUNDIAL' : (item.badge || article.badge || 'EDITORIAL VIP'),
        excerpt: article.excerpt,
        image: item.image || article.image,
        authorSlug: item.authorSlug,
        date: new Date(Date.now() - i * 3600 * 1000 * 4).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
        readTime: article.readTime || '5 min de leitura',
        isHero,
        isHeroSecondary,
        rankingScore: article.rankingScore || 95,
        specs: { ...item.specs, ...(article.specs || {}) },
        contentParagraphs: article.contentParagraphs
      };

      generatedArticles.push(fullArticle);
      console.log(`   ✓ Concluído: "${fullArticle.title.slice(0, 60)}..."`);
      console.log(`   ✓ Pontuação Editorial: ${fullArticle.rankingScore} pts | Frases: ${fullArticle.contentParagraphs.length} parágrafos`);

      // Se Supabase estiver conectado, persiste o artigo
      if (supabaseClient) {
        try {
          const dbPayload = {
            ...fullArticle,
            category_slug: fullArticle.categorySlug,
            author_slug: fullArticle.authorSlug,
            is_hero: fullArticle.isHero,
            is_hero_secondary: fullArticle.isHeroSecondary,
            ranking_score: fullArticle.rankingScore,
            status: 'published',
            published_at: new Date(Date.now() - i * 3600 * 1000 * 4).toISOString()
          };
          delete dbPayload.categorySlug;
          delete dbPayload.authorSlug;
          delete dbPayload.isHero;
          delete dbPayload.isHeroSecondary;
          delete dbPayload.rankingScore;

          await supabaseClient.from('articles').upsert([dbPayload], { onConflict: 'slug' });
          console.log(`   ✓ Sincronizado com Supabase Cloud DB.`);
        } catch (dbErr) {
          console.warn(`   ⚠️ Supabase upsert ignorado: ${dbErr.message}`);
        }
      }

      // Pausa estratégica de 1.5s entre chamadas para manter quota limpa
      if (i < BATCH_TOPICS.length - 1) {
        await delay(1500);
      }
    } catch (err) {
      console.error(`   ❌ Falha na pauta ${i + 1}:`, err.message);
    }
  }

  // Atualiza mockData.js com as 15 matérias de coleção
  console.log('\n📦 Atualizando acervo mestre de demonstração (src/data/mockData.js)...');
  try {
    const mockDataPath = path.join(rootDir, 'src', 'data', 'mockData.js');
    let mockContent = fs.readFileSync(mockDataPath, 'utf-8');

    // Localiza onde export const ARTICLES começa
    const articlesStartIdx = mockContent.indexOf('export const ARTICLES = [');
    if (articlesStartIdx !== -1) {
      const beforeArticles = mockContent.slice(0, articlesStartIdx);
      
      const filmstripCode = `\nexport const FILMSTRIP_ITEMS = [
  {
    id: 'film-1',
    category: 'HYPERCARS',
    title: 'Koenigsegg Jesko Absolut 1.600 cv',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=600',
    tag: 'RECORDE MUNDIAL',
    slug: '${generatedArticles[0]?.slug || ''}'
  },
  {
    id: 'film-2',
    category: 'HOROLOGY',
    title: 'F.P. Journe Chronomètre Bleu Tântalo',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    tag: 'OURO ROSA 18K',
    slug: '${generatedArticles[5]?.slug || ''}'
  },
  {
    id: 'film-3',
    category: 'VILLAS',
    title: 'Villa sa Caleta em Maiorca',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
    tag: 'TRAVERTINO NAVONA',
    slug: '${generatedArticles[14]?.slug || ''}'
  },
  {
    id: 'film-4',
    category: 'CIRCUITO',
    title: 'GMA T.50s Niki Lauda 12.100 RPM',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    tag: 'COSWORTH V12',
    slug: '${generatedArticles[1]?.slug || ''}'
  },
  {
    id: 'film-5',
    category: 'YACHTS',
    title: 'Lürssen Kismet 122 Metros',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
    tag: 'CASCO OCEÂNICO',
    slug: '${generatedArticles[3]?.slug || ''}'
  },
  {
    id: 'film-6',
    category: 'WEALTH',
    title: 'Family Offices & Ouro Físico Suíço',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    tag: 'CAPITAL SOBERANO',
    slug: '${generatedArticles[11]?.slug || ''}'
  }
];\n`;

      const newArticlesCode = `export const ARTICLES = ${JSON.stringify(generatedArticles, null, 2)};\n` + filmstripCode;
      fs.writeFileSync(mockDataPath, beforeArticles + newArticlesCode, 'utf-8');
      console.log(`✅ Sucesso! src/data/mockData.js atualizado com ${generatedArticles.length} matérias extraordinárias.`);
    } else {
      console.warn('⚠️ Não foi possível localizar "export const ARTICLES" em mockData.js.');
    }
  } catch (fileErr) {
    console.error('❌ Erro ao escrever mockData.js:', fileErr.message);
  }

  console.log('\n🎉 ==============================================================================');
  console.log(`🎉 POVOAMENTO EDITORIAL CONCLUÍDO COM ÊXITO: ${generatedArticles.length} MATÉRIAS CRIADAS`);
  console.log('🎉 ==============================================================================');
}

populateBatch();
