export const HOME_FEED_LIMIT = 12;

// Teto da faixa de destaques, não uma cota: o grid é de duas colunas, então
// quatro cartas fecham duas linhas cheias. Se o acervo só tiver uma ou duas
// secundárias, a faixa fica menor e o grid quebra em uma coluna no celular.
export const HOME_HERO_STRIP_LIMIT = 4;

export const FILMSTRIP_LIMIT = 6;

// Selo das matérias escritas pelo sintetizador determinístico, sem nenhum modelo de IA.
// Existe porque o piso de disponibilidade publica texto quando a IA cai, e o leitor não
// pode recebê-lo com o mesmo selo dourado de curadoria. Único ponto de definição: o
// crawler Node e as telas importam daqui, para não haver duas grafias do mesmo sinal.
export const FLOOR_DRAFT_BADGE = 'REDIGIDA SEM IA';

export function isFloorDraft(article) {
  if (!article) return false;
  return article.badge === FLOOR_DRAFT_BADGE || article.engineSource === 'local-synthesizer';
}

// O site inteiro é em português. Duas palavras funcionais do inglês na mesma linha não são
// nome próprio nem termo técnico: são uma manchete de RSS que passou sem tradução — seja
// porque um modelo ignorou a instrução de idioma, seja porque o piso determinístico usou a
// fonte crua. Só marcadores que não existem como palavra em português: "a" e "as" são artigos
// nossos e "e"/"de"/"em" não têm contraparte inglesa idêntica, então nada na lista colide.
const MARCADORES_DE_INGLES = /\b(the|and|of|for|with|its|it|that|this|these|those|from|into|onto|upon|by|or|nor|but|an|is|are|was|were|has|have|had|will|would|says|said|unveils|reveals|rises|falls|makes|gets|to|in|at|on)\b/gi;

export function temMancheteForasteira(texto) {
  return (String(texto || '').match(MARCADORES_DE_INGLES) || []).length >= 2;
}

// -----------------------------------------------------------------------------
// Trava de afirmação: a manchete não pode prometer o que a pauta não disse.
// Medido no ciclo de 2026-11-02: a fonte dizia "Ferrari Built This One-Off, $1
// Million Pace Car in the ’80s" e o modelo escreveu no resumo "construído para
// liderar o GP de Mônaco". Mônaco não existe em nenhum lugar da pauta, e a
// matéria ainda virou capa. Um portal de luxo não pode inventar procedência.
// -----------------------------------------------------------------------------

// Comparação por forma canônica: sem acento, sem caixa, sem pontuação interna.
// "Mônaco" → "monaco" casa com o inglês "Monaco". Não é tradução, é apenas parar
// de discordar por grafia.
function canonicamente(texto) {
  return String(texto || '')
    // O possessivo em "'s" sai ANTES de tudo: trocado por espaço ele deixa um " s"
    // órfão no meio da frase, e "Sotheby's" deixaria de casar com "Sotheby's".
    .replace(/[’']s(?=[^a-zA-Z0-9À-ú]|$)/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    // Trocar por espaço, nunca apagar: apagado, "Drive\nFonte" colaria em
    // "drivefonte" e o teste de palavra inteira perderia um nome que está na
    // pauta — falso positivo que custaria a capa de uma matéria correta.
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Forma de palavra inteira: um termo só conta se aparecer sozinho na pauta. "GP de
// Mônaco" vira dois termos, e um deles solto casaria com outra palavra qualquer.
function palavraInteira(forma, textoCanônico) {
  if (!forma || !textoCanônico) return false;
  const segura = forma.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?:^| )${segura}(?: |$)`).test(textoCanônico);
}

// Um apoio basta: a grafia original ou qualquer par aceito entre as duas línguas.
// As variações passam pela mesma normalização do texto: a tabela escreve "one-off"
// com hífen, a pauta canônica tem "one off" — comparadas cruas, as duas nunca casam
// e "único" seria acusado diante de uma fonte que disse literalmente One-Off.
function apoiadaNaPauta(forma, pauta) {
  const variações = [forma, ...(TRADUCOES[forma] || [])].map(canonicamente);
  return variações.some(v => palavraInteira(v, pauta));
}

// Pares português↔inglês. A pauta chega em inglês (os feeds são gringos) e o
// resumo é escrito em português; sem isto, "Alemanha" seria acusado de inventado
// diante de uma pauta que diz "Germany" — e um falso positivo custa a capa do dia
// inteiro, porque o ciclo publica uma matéria só e para.
const TRADUCOES = {
  // lugares e eventos que esta revista cobre
  genebra: ['geneva'],
  geneve: ['geneva'],
  basileia: ['basel'],
  xangai: ['shanghai'],
  toquio: ['tokyo'],
  munique: ['munich'],
  berlim: ['berlin'],
  viena: ['vienna'],
  atenas: ['athens'],
  milao: ['milan'],
  madri: ['madrid'],
  roma: ['rome'],
  zurique: ['zurich'],
  londres: ['london'],
  paris: ['paris'],
  bahrein: ['bahrain'],
  nova: ['new'],
  iorque: ['york'],
  'nova iorque': ['new york'],
  'nova york': ['new york'],
  florenca: ['florence'],
  lemans: ['lemans', 'le mans'],
  'grande premio': ['grand prix'],
  'gra prix': ['grand prix'],
  'mil milhas': ['mille miglia'],
  'concurso de elegancia': ['concours', 'concorso'],
  'monte carlo': ['monaco'],
  montecarlo: ['monaco'],
  alemanha: ['germany'],
  suica: ['switzerland'],
  francia: ['france'],
  italia: ['italy'],
  japao: ['japan'],
  emirados: ['emirates'],
  estados: ['united'],
  unidos: ['states'],
  inglaterra: ['england', 'uk'],
  gp: ['grand prix'],
  // promessas de exclusividade, precedência e autoridade
  unico: ['unique', 'one-off', 'oneoff', 'only'],
  unica: ['unique', 'one-off', 'oneoff', 'only'],
  unicos: ['unique', 'only'],
  unicas: ['unique', 'only'],
  oficial: ['official', 'officially'],
  oficiais: ['official', 'officially'],
  primeiro: ['first', 'first-ever', 'premiere', 'debut'],
  primeira: ['first', 'first-ever', 'premiere', 'debut'],
  primeiros: ['first'],
  primeiras: ['first'],
  ultimo: ['last', 'final'],
  ultima: ['last', 'final'],
  ultimos: ['last', 'final'],
  ultimas: ['last', 'final'],
  recorde: ['record', 'record-setting'],
  nunca: ['never'],
  jamais: ['never'],
  inedito: ['first', 'unseen', 'never-seen'],
  inedita: ['first', 'unseen', 'never-seen']
};

// Circuitos, eventos e cidades do beat, em forma canônica (sem acento, sem caixa). A
// lista é cerrada de propósito: é o vocabulário de procedência que um modelo inventa
// para dar corpo a uma pauta vaga ("liderar o GP de Mônaco"). As duas línguas entram
// porque a varredura é feita no texto que o LEITOR vê — e ele é português: "Grande
// Prêmio" traduzido só como "grand prix" deixaria a frase do incidente passar.
// "Spa" ficou de fora da lista de circuitos: iate de luxo tem spa a bordo, e a palavra
// sozinha é prosa comum — o custo seria uma acusação de invenção em matéria correta.
//
// DIVIDIDAS em dois pesos, porque a mentira não tem a mesma forma nas duas classes:
//   EVENTOS — uma corrida, um leilão, um concurso que o objeto frequentou. É história
//     do objeto, e é exatamente o que o modelo inventa (o incidente foi "GP de Mônaco").
//     Na promessa é fato inventado: derruba a matéria.
//   CIDADES — "a vidraça de Genebra", "a casa de Paris", "a fábrica de Tóquio". É o
//     mercado, não o objeto; quase sempre é retórica correta que a pauta não precisa
//     dizer. Medido: a licença de metonímia (Genebra↔Rolex) só existia para a grafia
//     "Genève", então "Genebra" numa pauta de Rolex viraria pauta queimada. Na promessa
//     custam a capa, nunca a publicação. O "GP de Nova York" inventado continua caindo,
//     porque o peso está na palavra do evento, não no nome da cidade.
const EVENTOS_DO_BEAT = [
  'monaco', 'montecarlo', 'monte carlo', 'grand prix', 'grande premio', 'gra prix', 'gp',
  'lemans', 'le mans', 'daytona', 'sebring', 'monza', 'imola', 'mugello', 'silverstone',
  'francorchamp', 'nurburg', 'nurburgring', 'le castellet', 'monterey', 'pebble beach',
  'goodwood', 'amelia island', 'mille miglia', 'mil milhas', 'concours', 'concorso',
  'concurso de elegancia'
];

const CIDADES_DO_BEAT = [
  'geneva', 'genebra', 'geneve', 'basel', 'basileia', 'zurich', 'zurique', 'dubai',
  'abu dhabi', 'miami', 'new york', 'nova iorque', 'nova york', 'paris', 'londres',
  'london', 'tokyo', 'toquio', 'milan', 'milao', 'madrid', 'madri', 'rome', 'roma',
  'munich', 'munique', 'berlin', 'berlim', 'vienna', 'viena', 'athens', 'atenas',
  'shanghai', 'xangai', 'bahrain', 'bahrein', 'frankfurt', 'florence', 'florenca'
];

const LUGARES_DO_BEAT = [...EVENTOS_DO_BEAT, ...CIDADES_DO_BEAT];

// Metonímia legítima do beat: a sede ou ateliê citado no lugar da marca. "Maranello"
// num resumo sobre uma Ferrari não é invenção — mas só é aceita quando a marca
// correspondente está na pauta. Sem essa relação a lista viraria justificativa
// aberta para qualquer nome próprio inventado.
// As chaves são a forma INGLESA canônica do lugar, e é por ela que a busca passa
// (termoApoiado varre a grafia vista e as traduções dela): chaveada como "geneve",
// a licença ficava alcançável só por "Genève" — "Genebra" e "Geneva" queimavam a
// pauta de um Rolex, que é justamente o caso que a tabela existe para perdoar.
const METONIMIAS = {
  maranello: ['ferrari'],
  scuderia: ['ferrari'],
  modena: ['ferrari', 'maserati'],
  'sant agata': ['lamborghini'],
  woking: ['mclaren'],
  brackley: ['mercedes'],
  molsheim: ['bugatti'],
  angelholm: ['koenigsegg'],
  'san cesario': ['pagani'],
  brassus: ['patek philippe', 'patek'],
  joux: ['jaeger', 'audemars'],
  nyon: ['hublot'],
  // Só as casas que de fato têm a sede onde dizem ter: Omega está em Biel e Breguet
  // no Vallée de Joux — licença errada aqui seria a tabela inventando a geografia que
  // ela existe para perdoar.
  geneva: ['rolex', 'patek philippe']
};

// Promessas de exclusividade, precedência ou autoridade. "apenas" e "somente"
// ficaram de fora porque são prosa comum, e a fonte diria "only".
const VOCABULARIO_DE_EXCLUSIVIDADE = [
  'unico', 'unica', 'unicos', 'unicas',
  'oficial', 'oficiais',
  'primeiro', 'primeira', 'primeiros', 'primeiras',
  'ultimo', 'ultima', 'ultimos', 'ultimas',
  'recorde', 'nunca', 'jamais',
  'inedito', 'inedita'
];

// Substantivo com inicial maiúscula no MEIO de uma frase em português é nome
// próprio — em português a capitalização não é gramatical como no alemão. O
// primeiro termo da linha fica de fora porque começa maiúsculo por pontuação.
function nomesPropriosDeProsa(texto) {
  const marcas = String(texto || '').split(/\s+/);
  const nomes = [];
  let inicioDeFrase = true;
  for (const bruto of marcas) {
    const termo = bruto.replace(/^[^a-zA-ZÀ-Úà-úË]+/, '').replace(/[^a-zA-ZÀ-Úà-úË]+$/, '');
    if (!termo) continue;
    const fechaFrase = /[.!?]$/.test(bruto);
    if (inicioDeFrase) {
      inicioDeFrase = false;
    } else if (/^[A-ZÀ-Ú]/.test(termo) && termo.length >= 3) {
      nomes.push(termo);
    }
    if (fechaFrase) inicioDeFrase = true;
  }
  return nomes;
}

// Uma metonímia só vale se a marca correspondente está na pauta. "Maranello" escrito
// numa matéria sobre um relógio não é licença poética, é alucinação de contexto.
// A busca percorre a grafia vista E as traduções dela: a licença de Genebra mora na
// tabela sob a forma inglesa, e o resumo chega escrito em português.
function termoApoiado(forma, pauta) {
  if (apoiadaNaPauta(forma, pauta)) return true;
  const chaves = [forma, ...(TRADUCOES[forma] || [])].map(canonicamente);
  return chaves.some(chave => {
    const marcas = METONIMIAS[chave];
    return Array.isArray(marcas) && marcas.some(marca => palavraInteira(canonicamente(marca), pauta));
  });
}

// Décadas que a pauta nomeia de propósito ("the 80s", "1980s", "1980's", "anos 80",
// "anos 1960"). A redação herdou "anos 80" de uma pauta e completou com 1994 — ano
// real, não dito. Quando a pauta dá a década, qualquer ano dela está apoiado; um ano
// isolado na pauta não libera os vizinhos, senão a trava nunca pegaria um ano errado.
//
// Varre a pauta CRUA, não a canônica: canonicamente() come o apóstrofo de "80's" e
// devolve "80", que é indistinguível de "Top 10" — exatamente o número solto que não
// pode licitar década nenhuma (R1). O preço de errar para menos aqui é queimar a pauta.
function decadasNaPauta(fonteCrua) {
  const texto = String(fonteCrua || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  const decadas = new Set();
  const registrarDecada = bruto => {
    if (bruto.length === 4) decadas.add(bruto.slice(0, 3));
    else {
      // "80s" é o século 20; "20s" hoje quer dizer os anos 2020. Como a forma de dois
      // dígitos não diz o século, as duas janelas entram — a do século 21 antes de 2010
      // não aparece em publicação nenhuma, então alargar custa zero e erra para o lado
      // que não queima pauta.
      decadas.add(`19${bruto[0]}`);
      decadas.add(`20${bruto[0]}`);
    }
  };
  // "1980s", "80s", "80's", "’80s". O 's' vem COLADO no número, e o número não pode
  // nascer de um traço ou de um ponto: "the 2026 S-Class", "0-60s" e "3.5s" licitariam
  // décadas (2020, 1960, 1930) e o portão de anos — a afirmação mais barata de checar —
  // ficaria desligado no ciclo inteiro. Sem o marcador de plural, qualquer número solto
  // ("$26.6 Billion", "Top 10") faria o mesmo estrago.
  for (const m of texto.matchAll(/(?<![\w.-])((?:1|2)\d{3}|\d{2})(?:s|['’]s)(?![a-z])/g)) {
    registrarDecada(m[1]);
  }
  // Em português a década vem escrita por extenso: "anos 80", "anos 1960", "década de 90".
  for (const m of texto.matchAll(/(?:^|[^\w])(?:anos?|decadas?)(?:\s+de)?\s+((?:1|2)\d{3}|\d{2})\b/g)) {
    registrarDecada(m[1]);
  }
  return decadas;
}

/**
 * Retorna as afirmações da matéria que não têm apoio no texto dado ao modelo, com a
 * severidade decidida por ONDE a palavra aparece:
 *   'fabricada' — EVENTO do beat ou ANO na PROMESSA (título + resumo), o que o leitor
 *                 lê como história do objeto. Modo de falha medido: "construído para
 *                 liderar o GP de Mônaco" numa pauta de pace car dos anos 80. O ciclo
 *                 devolve a matéria para regenerar.
 *   'apoio'     — a mesma palavra no CORPO, uma CIDADE na promessa ("a vidraça de
 *                 Genebra") ou ênfase ("único", "oficial", "recorde") que a pauta não
 *                 cita. Custa a capa, nunca a publicação: no acervo real, "a herança
 *                 das 24 Horas de Le Mans" (Laurent Ferrier) e "iates clássicos dos
 *                 anos 1960" (Benetti) são retórica correta, e a régua não lê verbo —
 *                 "homenageia Le Mans" e "correu em Le Mans" são o mesmo token.
 *   'anotado'   — nome próprio fora da pauta e ênfase fora da pauta no CORPO. Só vai
 *                 para o log do ciclo. Medido no acervo: 7 de 22 matérias publicadas
 *                 traziam nomes fora da pauta ("Nevada" para o Concours de Las Vegas,
 *                 "Croisette" para Cannes, "Chaux-de-Fonds" para Laurent Ferrier) e os
 *                 sete eram conhecimento de mundo correto; tratar o vocabulário do corpo
 *                 como acusação rebaixava mais da metade do acervo. A régua não sabe
 *                 distinguir ênfase de invenção, e o preço de errar aqui é um turno de
 *                 capa a menos por dia.
 *
 * @param {{title?: string, excerpt?: string, corpo?: string|string[], fonte?: string}} entrada
 * @returns {{termo: string, tipo: 'fabricada'|'apoio'|'anotado'}[]}
 */
export function afirmacoesSemFonte({ title, excerpt, corpo, fonte } = {}) {
  const pauta = canonicamente(fonte);
  const promessa = canonicamente(`${title || ''} ${excerpt || ''}`);
  const textoCorpo = Array.isArray(corpo) ? corpo.join(' ') : String(corpo || '');
  const completo = canonicamente(`${promessa} ${textoCorpo}`);
  const decadas = decadasNaPauta(fonte);
  const suspeitas = [];
  // O mesmo termo nas duas camadas é uma acusação só, e fica a mais grave: a varredura
  // da promessa roda primeiro.
  const registrar = (termo, tipo) => {
    if (suspeitas.some(s => s.termo === termo)) return;
    suspeitas.push({ termo, tipo });
  };

  for (const [texto, camada] of [[promessa, 'fabricada'], [completo, 'apoio']]) {
    // 1. Anos: quatro dígitos são a afirmação mais barata de verificar e a que o
    //    modelo mais erra.
    for (const m of texto.matchAll(/\b(1[89]\d{2}|20\d{2})\b/g)) {
      const ano = m[1];
      if (palavraInteira(ano, pauta) || decadas.has(ano.slice(0, 3))) continue;
      registrar(`ano ${ano}`, camada);
    }
    // 2. Lugares do beat. O peso vem da classe, não só da posição: um EVENTO na
    //    promessa é história inventada do objeto (o incidente), uma CIDADE é contexto
    //    de mercado que a pauta não precisa dizer. No corpo, os dois custam a capa.
    for (const lugar of LUGARES_DO_BEAT) {
      if (!palavraInteira(lugar, texto) || termoApoiado(lugar, pauta)) continue;
      const grave = camada === 'fabricada' && EVENTOS_DO_BEAT.includes(lugar);
      registrar(lugar, grave ? 'fabricada' : 'apoio');
    }
  }

  // 3. Vocabulário de exclusividade: a mesma regra de posição de anos e lugares. Na
  //    PROMESSA ("O Único Pace Car Oficial") é uma alegação sobre o objeto e custa a
  //    capa; no CORPO é retórica do estilo ("nunca foi vista igual") e vai só para o
  //    log. Medido no acervo: varrendo o corpo como promessa, 12 de 22 matérias
  //    publicadas perdiam a capa por "único", "nunca" e "último" de prosa correta —
  //    preço de cadência pior que o risco, igual ao dos nomes próprios.
  for (const palavra of VOCABULARIO_DE_EXCLUSIVIDADE) {
    if (termoApoiado(palavra, pauta)) continue;
    if (palavraInteira(palavra, promessa)) registrar(`"${palavra}"`, 'apoio');
    else if (palavraInteira(palavra, completo)) registrar(`"${palavra}"`, 'anotado');
  }

  // 4. Nomes próprios do resumo. A manchete fica de fora porque aqui todo termo
  //    começa maiúsculo e a extração não significaria nada. Severidade 'anotado', só
  //    para o log: medido no acervo, 7 de 22 matérias publicadas traziam nomes fora da
  //    pauta e os sete eram conhecimento de mundo correto.
  for (const nome of new Set(nomesPropriosDeProsa(excerpt))) {
    const forma = canonicamente(nome);
    if (forma.length < 3) continue;
    if (termoApoiado(forma, pauta)) continue;
    // Um lugar do beat já foi acusado no passo 2; repetir "Monaco" como nome próprio
    // só incharia o log do ciclo.
    if (LUGARES_DO_BEAT.includes(forma)) continue;
    registrar(nome, 'anotado');
  }

  return suspeitas;
}

// Toda matéria ocupa o card de uma rota /artigo/:slug. Linha sem slug não abre
// em lugar nenhum: entra no acervo, mas não sobe para a tela como se fosse leitura.
// Exportado porque as telas precisam distinguir "a editoria não tem nada" de
// "o que existe a home já pôs em destaque".
export function publishedArticles(articles) {
  return (Array.isArray(articles) ? articles : [])
    .filter(article => article && article.status !== 'draft' && article.slug);
}

function publicationTime(article) {
  return Date.parse(article.publishedAt || article.published_at || article.created_at || '') || 0;
}

function byRecency(a, b) {
  return publicationTime(b) - publicationTime(a);
}

/**
 * Duas matérias são a mesma quando compartilham id, slug, título ou a URL da
 * fonte. A posição na lista entra como chave de segurança: uma linha vinda do
 * banco sem id, sem slug e sem título ainda precisa ser excluída do feed depois
 * de virar destaque — sem isso ela apareceria nas duas faixas ao mesmo tempo.
 *
 * `sourceUrl` é a identidade que o robô usa para recusar pauta repetida: sem ela
 * aqui, o mesmo fato publicado com slug diferente (reescrita, regeneração) entra
 * em duas bandas da mesma tela.
 */
function makeIdentity(list) {
  const positions = new Map(list.map((article, index) => [article, index]));

  function keysFor(article) {
    const keys = new Set();
    // Acervo sem nenhuma matéria publicada não tem capa: getHomeSelection devolve
    // main === null, e as rotas por categoria chegam aqui com esse nulo na mão.
    // Identidade de "nada" é o conjunto vazio — não a exceção que quebrava a tela.
    if (!article) return keys;
    const position = positions.get(article);
    if (position !== undefined) keys.add(`posição:${position}`);
    if (article.id !== undefined && article.id !== null && article.id !== '') keys.add(`id:${article.id}`);
    if (article.slug) keys.add(`slug:${article.slug}`);
    const title = String(article.title || '').trim().toLowerCase();
    if (title) keys.add(`título:${title}`);
    const source = String(article.sourceUrl || article.source_url || '').trim();
    if (source) keys.add(`fonte:${source}`);
    return keys;
  }

  return {
    keys: keysFor,
    collect(picked) {
      const all = new Set();
      for (const article of picked) {
        for (const key of keysFor(article)) all.add(key);
      }
      return all;
    },
    matches(article, identities) {
      for (const key of keysFor(article)) {
        if (identities.has(key)) return true;
      }
      return false;
    }
  };
}

// Percorre o acervo acumulando as identidades já usadas, para que a própria
// banda nunca repita uma matéria (dois registros iguais no mesmo array).
function takeFresh(list, limit, identity, used) {
  const picked = [];
  for (const article of list) {
    if (picked.length >= limit) break;
    if (identity.matches(article, used)) continue;
    picked.push(article);
    for (const key of identity.keys(article)) used.add(key);
  }
  return picked;
}

export function getHomeSelection(articles) {
  const list = publishedArticles(articles);
  if (list.length === 0) {
    return { main: null, strip: [], feed: [], reel: [], shown: new Set(), usedOnHome: new Set() };
  }
  const identity = makeIdentity(list);

  const main = list.find(a => a.isPinnedHero || a.is_pinned_hero)
    || list.find(a => a.isHero || a.is_hero)
    || list[0];

  const strip = takeFresh(
    list.filter(a => a.isHeroSecondary || a.is_hero_secondary || a.isHero || a.is_hero),
    HOME_HERO_STRIP_LIMIT,
    identity,
    identity.collect([main])
  );

  const shown = identity.collect([main, ...strip]);

  const feed = takeFresh(
    list.slice().sort(byRecency),
    HOME_FEED_LIMIT,
    identity,
    new Set(shown)
  );

  const consumedBeforeReel = identity.collect([main, ...strip, ...feed]);

  // A roleta é banda da home: ela só pode mostrar o que as outras três ainda não
  // consumiram. Cada célula é uma miniatura, então entram na disputa apenas as
  // matérias com imagem: escolher seis e filtrar sem imagem depois deixava buracos
  // na faixa quando as sobras eram cartas mudas.
  const reelCandidates = list.filter(article => article.image);
  const reel = takeFresh(reelCandidates.slice().sort(byRecency), FILMSTRIP_LIMIT, identity, new Set(consumedBeforeReel));

  // `usedOnHome` é "tudo o que a home já pôs na tela", roleta incluída: quem
  // consome esse conjunto precisa excluir a faixa inteira, senão reintroduz a
  // matéria que o leitor acabou de ver no carrossel.
  const usedOnHome = identity.collect([main, ...strip, ...feed, ...reel]);

  return {
    main,
    strip,
    feed,
    reel,
    shown,
    usedOnHome
  };
}

export function getHeroSelection(articles) {
  const { main, strip, shown } = getHomeSelection(articles);
  return { main, strip, shown };
}

export function getVisibleFeedArticles(articles, categorySlug = 'todos') {
  const { main, strip, reel, shown } = getHomeSelection(articles);
  const list = publishedArticles(articles);
  const identity = makeIdentity(list);

  // Em "todos" o grid filtrado é o próprio feed da home, então só a faixa de
  // destaques precisa ser excluída. Já com uma categoria escolhida o feed some da
  // tela, mas capa, faixa e roleta continuam lá: a lista filtrada só pode mostrar
  // o que ainda não apareceu nela.
  const used = categorySlug === 'todos'
    ? shown
    : identity.collect([main, ...strip, ...reel]);

  return takeFresh(
    list
      .filter(article => categorySlug === 'todos' || article.categorySlug === categorySlug)
      .sort(byRecency),
    HOME_FEED_LIMIT,
    identity,
    new Set(used)
  );
}

// A roleta só mostra o que a home ainda não consumiu, e a casa é gasta nesta
// ordem: capa (1) → faixa (4) → feed (12) → roleta (6). Com menos de 18 matérias
// publicadas com imagem não sobra nada para ela, e a banda some da tela — é o
// contrato, não um bug: completar com destaque repetido é exatamente o defeito
// que a roleta existe para evitar. Abaixo de 24 publicadas ela vem parcial.
export function getFilmstripSelection(articles, limit = FILMSTRIP_LIMIT) {
  const reel = getHomeSelection(articles).reel;
  return limit >= FILMSTRIP_LIMIT ? reel : reel.slice(0, limit);
}
