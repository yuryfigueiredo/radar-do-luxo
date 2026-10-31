export const HOME_FEED_LIMIT = 12;

// Teto da faixa de destaques, não uma cota: o grid é de duas colunas, então
// quatro cartas fecham duas linhas cheias. Se o acervo só tiver uma ou duas
// secundárias, a faixa fica menor e o grid quebra em uma coluna no celular.
export const HOME_HERO_STRIP_LIMIT = 4;

export const FILMSTRIP_LIMIT = 6;

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
