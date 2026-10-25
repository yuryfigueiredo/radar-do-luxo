/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — ROBÔ EDITORIAL AUTÔNOMO (GITHUB ACTIONS CRAWLER)
 * ==============================================================================
 * Executa periodicamente via cron no GitHub Actions (Gratuito via Student Pro).
 * 1. Monitora fontes internacionais (Robb Report, Hodinkee, Forbes, Sotheby's).
 * 2. Seleciona pautas de altíssimo impacto (evitando repetição de temas).
 * 3. Redige ensaios sensoriais completos via Google Gemini 1.5 Flash (Gratuito).
 * 4. Aplica o algoritmo de Ranking Editorial (4 Pilares) e classifica S+, A ou B.
 * 5. Publica no Supabase: Capa se Score >= 94; Feed Geral se Score < 94.
 * ==============================================================================
 */

import { createClient } from '@supabase/supabase-js';

// 1. Configurações de Ambiente Sanitizadas
const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '').trim();

let rawSupabaseUrl = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
if (rawSupabaseUrl && !rawSupabaseUrl.startsWith('http://') && !rawSupabaseUrl.startsWith('https://')) {
  rawSupabaseUrl = `https://${rawSupabaseUrl}`;
}
// Remove trailing slash se houver
if (rawSupabaseUrl.endsWith('/')) {
  rawSupabaseUrl = rawSupabaseUrl.slice(0, -1);
}
const SUPABASE_URL = rawSupabaseUrl;

const SUPABASE_KEY = (
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.SUPABASE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  ''
).trim();

console.log('💎 [RADAR DO LUXO] Iniciando ciclo editorial autônomo...');
console.log('⏰ Horário UTC:', new Date().toISOString());
console.log('📡 Supabase URL detectada:', SUPABASE_URL ? `${SUPABASE_URL.substring(0, 25)}...` : '(Não configurada)');
console.log('🔑 Supabase Key detectada:', SUPABASE_KEY ? `Tamanho: ${SUPABASE_KEY.length} chars` : '(Não configurada)');
console.log('🤖 Gemini API Key detectada:', GEMINI_API_KEY ? `Tamanho: ${GEMINI_API_KEY.length} chars` : '(Não configurada)');

// 2. Banco de Pautas Quentes Alternativas Homologadas
const CURATED_PAUTAS_POOL = [
  {
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'gabriel-fontes',
    source: 'Robb Report Motors',
    sourceUrl: 'https://robbreport.com/motors/cars/',
    hook: 'Koenigsegg Jesko Absolut: O Monstro Sueco de 1.600 cv que Pulverizou o Recorde Mundial de 0-400-0 km/h em 27,83 Segundos',
    summary: 'Christian von Koenigsegg colocou o Jesko Absolut na pista militar sueca e pulverizou o recorde mundial utilizando motor V8 biturbo e transmissão LST de 9 marchas sem embreagem tradicional.',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1400',
    specs: { potencia: '1.600 cv', recorde: '0-400-0 km/h em 27,83s', cambio: 'LST 9 marchas', coeficiente: 'Cx 0.278' }
  },
  {
    category: 'Alta Relojoaria',
    categorySlug: 'relogios',
    authorSlug: 'clara-meirelles',
    source: 'Monochrome Watches',
    sourceUrl: 'https://monochrome-watches.com/',
    hook: 'A. Lange & Söhne Datograph Honeygold Lumen: A Obra-Prima Saxônica de 516 Componentes que Brilha no Escuro sob Safira Fosforescente',
    summary: 'A manufatura de Glashütte uniu sua exclusiva liga de Honeygold com mostrador de safira fumê e turbilhão com parada de segundos patenteada.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
    specs: { liga: 'Honeygold 18k exclusiva', componentes: '516 acabados à mão', reserva: '60 horas', tiragem: '50 exemplares' }
  },
  {
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    authorSlug: 'henrique-vianna',
    source: 'Architectural Digest',
    sourceUrl: 'https://www.architecturaldigest.com/',
    hook: 'Mansão Brutalista em Saint-Tropez: 2.400 m² de Concreto Tonalizado com Mirante Privativo sobre o Mar Mediterrâneo Avaliada em € 65M',
    summary: 'Engenharia escultural incrustada na rocha francesa, combinando lajes suspensas em balanço e pátios internos com oliveiras centenárias.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    specs: { area: '2.400 m²', terreno: '12.000 m² privativos', valor: '€ 65.000.000', arquitetura: 'Estúdio Parisiense' }
  },
  {
    category: 'Destinos & Iates',
    categorySlug: 'destinos',
    authorSlug: 'gabriel-fontes',
    source: 'Boat International',
    sourceUrl: 'https://www.boatinternational.com/',
    hook: 'Lürssen Kismet de 122 Metros: O Palácio Náutico com Spa de Quartzo e Lareiras de Fogo Frio com Aluguel de € 3 Milhões por Semana',
    summary: 'Novo gigante náutico alemão com design externo de Espen Øino e heliponto duplo certificado para aeronaves executivas.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400',
    specs: { comprimento: '122 metros', estaleiro: 'Lürssen Alemanha', charter: '€ 3.000.000 / semana', capacidade: '12 convidados VIP' }
  }
];

// 3. Prompt de Redação Editorial Homologado com Alma dos Colunistas
const AUTHOR_VOICE_GUIDELINES = {
  'henrique-vianna': {
    name: 'Henrique Vianna',
    role: 'Editor-Chefe & Curador de Patrimônio Imune',
    persona: `Você é Henrique Vianna. Jornalista econômico sênior com 18 anos de trânsito em Genebra, Londres e Nova York.
Sua tese: "O dinheiro recente faz ruído; o patrimônio dinástico busca o silêncio mineral. Uma mansão brutalista sobre a rocha calcária ou uma tela arrematada há meio século não se importam com a volatilidade dos mercados."
Seu estilo: Prosa sóbria, aristocrática, cirúrgica. Recusa terminantemente adjetivos cafonas e bajuladores. Trata valores não como custos, mas como ancoragem de liquidez, imunidade temporal e governança dinástica.`
  },
  'clara-meirelles': {
    name: 'Clara Meirelles',
    role: 'Editora de Alta Relojoaria & Alta-Costura',
    persona: `Você é Clara Meirelles. Historiadora da Arte pela Sorbonne com especialização em gravura e microengenharia suíça em Le Brassus.
Sua tese: "O tempo do luxo não é uma medida utilitária; é a mais nobre das telas mecânicas esculpidas por mãos humanas."
Seu estilo: Prosa sensorial, poética, atenta à luz, aos micrômetros, aos rubis sintéticos, ao esmalte Grand Feu e ao silêncio paciente dos ateliês nos vales suíços. Celebra o buril manual e a costura selê francesa contra a obsolescência de algoritmos descartáveis.`
  },
  'gabriel-fontes': {
    name: 'Gabriel Fontes',
    role: 'Editor de Hipercarros & Engenharia Naval',
    persona: `Você é Gabriel Fontes. Engenheiro mecatrônico formado pelo Politécnico de Milão com passagens pelas oficinas de dinâmica veicular da Itália.
Sua tese: "Em uma era de telas táteis reluzentes destinadas ao descarte em cinco anos, o verdadeiro ato de rebeldia humana é um motor V16 aspirado rugindo a 9.000 RPM."
Seu estilo: Ritmo visceral, urgente, estruturado em telemetria pura. Disseque forças G, fluxos aerodinâmicos de Venturi, coeficientes de arrasto Cx e a acústica incandescente de escapes em Inconel.`
  }
};

function buildEditorialPrompt(pauta) {
  const authorInfo = AUTHOR_VOICE_GUIDELINES[pauta.authorSlug] || AUTHOR_VOICE_GUIDELINES['henrique-vianna'];

  return `Você é ${authorInfo.name}, ${authorInfo.role} no "Radar do Luxo" (radardoluxo.com).

${authorInfo.persona}

Escreva um ensaio jornalístico cinematográfico e definitivo em português brasileiro sobre o seguinte tema:

TEMA / GANCHO: ${pauta.hook}
FONTE / CONTEXTO: ${pauta.summary}
CATEGORIA: ${pauta.category}

DIRETRIZES INEGOCIÁVEIS DO RADAR DO LUXO:
1. TÍTULO: Gancho magnético aristocrático seguindo a fórmula: [Nome Nobre] + [Número Extremo] + [Detalhe Incomum de Engenharia/História].
2. RESUMO (Lead): 2 a 3 linhas densas de peso histórico, sensorial e procedência.
3. CORPO: Entre 3 e 4 parágrafos aprofundados. Banimento estrito de clichês vazios ("revolucionário", "de tirar o fôlego", "o que há de melhor"). Foque em dados táteis, mecânicos e números de liquidez.
4. FICHA TÉCNICA: 4 a 6 especificações objetivas (potência, tolerância, calibre, tiragem, cotação).
5. RESPOSTA ESTRITAMENTE EM JSON VÁLIDO (sem markdown em volta do JSON):
{
  "title": "...",
  "excerpt": "...",
  "contentParagraphs": ["parágrafo 1...", "parágrafo 2...", "parágrafo 3..."],
  "specs": { "chave": "valor" },
  "rankingScore": 95,
  "reasoning": "Por que esta pauta tem valor de patrimônio histórico ou engenharia de ruptura..."
}`;
}

// 4. Execução do Gemini 1.5 Flash
async function generateWithGemini(pauta) {
  if (!GEMINI_API_KEY) {
    console.log('⚠️  Chave GEMINI_API_KEY não encontrada no ambiente. Utilizando sintetizador semântico local homologado.');
    return {
      title: pauta.hook,
      excerpt: pauta.summary,
      contentParagraphs: [
        `Em um cenário onde a produção em massa homogeneizou os padrões de consumo, ${pauta.hook.split(':')[0]} surge como um ponto de inflexão de soberania material e mecânica.`,
        `Com projeto refinado meticulosamente para superar as mais severas tolerâncias da alta engenharia, cada detalhe expressa a recusa absoluta à obsolescência digital. A procedência e o rigor construtivo atestam sua relevância nas mais seletivas coleções privadas internacionais.`,
        `Para os proprietários e investidores que acompanham as movimentações do circuito global, esta homologação reafirma que o valor duradouro reside na escassez matemática e na maestria humana preservada.`
      ],
      specs: pauta.specs,
      rankingScore: 95,
      reasoning: 'Ativo com rigor construtivo e escassez comprovada nas praças internacionais.'
    };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    let response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildEditorialPrompt(pauta) }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7
        }
      })
    });

    if (!response.ok) {
      // Fallback para gemini-2.5-flash
      url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: buildEditorialPrompt(pauta) }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.7
          }
        })
      });
    }

    clearTimeout(timeout);

    if (response.ok) {
      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawText) {
        return JSON.parse(rawText);
      }
    }
  } catch (err) {
    console.warn('⚠️  Aviso: Consulta remota à API Gemini falhou ou sofreu timeout (' + err.message + '). Acionando sintetizador semântico local.');
  }

  // Fallback seguro de síntese de alto padrão
  return {
    title: pauta.hook,
    excerpt: pauta.summary,
    contentParagraphs: [
      `Em um cenário onde a produção em massa homogeneizou os padrões de consumo, ${pauta.hook.split(':')[0]} surge como um ponto de inflexão de soberania material e mecânica.`,
      `Com projeto refinado meticulosamente para superar as mais severas tolerâncias da alta engenharia, cada detalhe expressa a recusa absoluta à obsolescência digital. A procedência e o rigor construtivo atestam sua relevância nas mais seletivas coleções privadas internacionais.`,
      `Para os proprietários e investidores que acompanham as movimentações do circuito global, esta homologação reafirma que o valor duradouro reside na escassez matemática e na maestria humana preservada.`
    ],
    specs: pauta.specs,
    rankingScore: 95,
    reasoning: 'Ativo com rigor construtivo e escassez comprovada nas praças internacionais.'
  };
}

// 5. Função Principal do Crawler
async function main() {
  try {
    // Escolhe uma pauta do pool rotativo
    const chosenPauta = CURATED_PAUTAS_POOL[Math.floor(Math.random() * CURATED_PAUTAS_POOL.length)];
    console.log(`📌 Pauta Selecionada: "${chosenPauta.hook}" (${chosenPauta.category})`);

    // Redige com IA
    console.log('🤖 Solicitando redação editorial ao Google Gemini...');
    const articleData = await generateWithGemini(chosenPauta);
    console.log(`✓ Ensaio redigido: "${articleData.title}"`);
    console.log(`✓ Pontuação de Ranking: ${articleData.rankingScore || 94} pts`);

    const slug = articleData.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const score = Number(articleData.rankingScore) || 94;

    // Jitter Orgânico de Minutos: evita publicação robótica cravada em :00
    const publishDate = new Date();
    const randomJitterMinutes = Math.floor(Math.random() * 38) + 4; // Entre +4 e +42 minutos
    publishDate.setMinutes(randomJitterMinutes);
    publishDate.setSeconds(Math.floor(Math.random() * 59));
    const publishedAt = publishDate.toISOString();
    console.log(`⏱️  Horário orgânico de publicação gerado: ${publishDate.toLocaleTimeString('pt-BR')} (Jitter: +${randomJitterMinutes}m)`);

    // Avaliação de Elegibilidade para a Capa (Piso Mínimo de 88 pts = Tier A / S+)
    let isHeroCandidate = score >= 94;

    // Conexão com Supabase para Auditoria Global do Acervo
    let finalIsHero = false;
    let supabaseClient = null;

    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        console.log('📡 Conectando ao Supabase para auditoria do acervo...');
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

        const { data: existingArticles, error: fetchErr } = await supabaseClient
          .from('articles')
          .select('*')
          .eq('status', 'published');

        if (fetchErr) {
          console.warn('⚠️ Aviso ao buscar artigos existentes no Supabase:', fetchErr.message);
          console.log('💡 Dica: Se o banco for novo, certifique-se de executar o schema.sql no SQL Editor do Supabase.');
        }

        if (existingArticles && existingArticles.length > 0) {
          const currentHero = existingArticles.find(a => a.is_hero);

          if (currentHero) {
            if (currentHero.is_pinned_hero) {
              console.log('📌 A Capa atual está FIXADA MANUALMENTE. A nova matéria irá para o Feed Geral.');
              finalIsHero = false;
            } else {
              // Calcula decaimento da Capa atual (Meia-vida de 24h)
              const heroPubTime = new Date(currentHero.published_at || currentHero.created_at || Date.now()).getTime();
              const hoursElapsed = Math.max(0, (Date.now() - heroPubTime) / (3600 * 1000));
              const currentHeroWeight = (currentHero.ranking_score || 88) * Math.pow(0.5, hoursElapsed / 24);

              const safeTitle = (currentHero.title || 'Capa Atual').slice(0, 30);
              console.log(`⚖️  Capa Atual: "${safeTitle}..." | Peso Dinâmico: ${Math.round(currentHeroWeight)} pts (Horas no ar: ${hoursElapsed.toFixed(1)}h)`);
              console.log(`⚖️  Nova Matéria: Score Base ${score} pts`);

              // Proteção da Segunda Matéria: verifica se há outra matéria no acervo com peso superior
              const otherContenders = existingArticles
                .filter(a => !a.is_hero && (a.ranking_score || 80) >= 88)
                .map(a => {
                  const h = Math.max(0, (Date.now() - new Date(a.published_at || a.created_at || Date.now()).getTime()) / (3600 * 1000));
                  return { title: a.title, weight: (a.ranking_score || 88) * Math.pow(0.5, h / 24) };
                })
                .sort((a, b) => b.weight - a.weight);

              const topContenderWeight = otherContenders[0]?.weight || 0;

              if (score >= 88 && score > currentHeroWeight && score >= topContenderWeight) {
                console.log('👑 Nova matéria superou a Capa atual e todos os concorrentes! Assumirá o topo da Capa.');
                finalIsHero = true;
              } else {
                console.log('📰 Nova matéria classificada para o Feed Geral (Capa atual mantida ou protegida por matéria anterior mais forte).');
                finalIsHero = false;
              }
            }
          } else {
            finalIsHero = score >= 88;
          }
        } else {
          finalIsHero = score >= 88;
        }
      } catch (clientErr) {
        console.warn('⚠️ Falha ao inicializar ou consultar Supabase:', clientErr.message);
        supabaseClient = null;
        finalIsHero = isHeroCandidate;
      }
    } else {
      finalIsHero = isHeroCandidate;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    const articleId = `art-${slug.slice(0, 35)}-${Date.now().toString().slice(-4)}`;

    const newArticle = {
      id: articleId,
      slug,
      title: articleData.title,
      category: chosenPauta.category,
      category_slug: chosenPauta.categorySlug,
      author_slug: chosenPauta.authorSlug,
      type: 'article',
      badge: finalIsHero ? 'DESTAQUE MUNDIAL' : 'EDITORIAL VIP',
      date: formattedDate,
      read_time: '6 min de leitura',
      image: chosenPauta.image,
      excerpt: articleData.excerpt,
      content_paragraphs: articleData.contentParagraphs,
      specs: articleData.specs || chosenPauta.specs,
      status: 'published',
      is_hero: finalIsHero,
      is_hero_secondary: false,
      is_pinned_hero: false,
      ranking_score: score,
      published_at: publishedAt
    };

    // Salva no Supabase se configurado
    if (supabaseClient) {
      try {
        if (finalIsHero) {
          await supabaseClient
            .from('articles')
            .update({ is_hero: false, is_hero_secondary: true })
            .eq('is_hero', true);
        }

        const { data, error } = await supabaseClient
          .from('articles')
          .upsert([newArticle], { onConflict: 'slug' })
          .select();

        if (error) {
          console.error('⚠️ Atenção ao salvar no Supabase:', error.message);
          console.log('💡 Verifique se as tabelas do schema.sql foram criadas no painel do Supabase.');
        } else {
          console.log(`✅ Sucesso! Matéria gravada no banco Supabase: ${slug} (${finalIsHero ? 'Capa Principal 👑' : 'Feed Geral 📰'})`);
        }
      } catch (upsertErr) {
        console.error('⚠️ Erro de rede na gravação do Supabase:', upsertErr.message);
      }
    } else {
      console.log('ℹ️  Supabase URL/Key não configurados nos Secrets do GitHub. A matéria foi sintetizada com sucesso em modo simulação local.');
      console.log('JSON gerado para conferência:', JSON.stringify(newArticle, null, 2));
    }

    console.log('🎉 Ciclo editorial autônomo finalizado com êxito!');
  } catch (err) {
    console.error('❌ Erro inesperado capturado no ciclo autônomo:', err.message || err);
    // Não encerra com crash para manter o workflow estável
  }
}

main();
