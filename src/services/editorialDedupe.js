/**
 * ==============================================================================
 * RADAR DO LUXO — DEDUPLICAÇÃO EDITORIAL SEMÂNTICA
 * ==============================================================================
 * Compara títulos por entidades distintivas (marcas, modelos, lugares, obras)
 * em vez de contar palavras genéricas como "relógio", "milhões" ou "leilão".
 *
 * Isso evita dois erros comuns do pipeline:
 * 1. bloquear pautas legítimas diferentes que compartilham vocabulário de luxo;
 * 2. republicar a mesma história escrita com outro título.
 * ==============================================================================
 */

// Palavras que não identificam uma história: aparecem em quase todo título do site.
export const GENERIC_TOPIC_WORDS = new Set([
  // Português — editoria de luxo
  'relogio', 'relogios', 'relojoaria', 'horologia', 'calibre', 'caixa', 'mostrador',
  'manufatura', 'colecao', 'colecoes', 'edicao', 'edicoes', 'limitada', 'limitado',
  'milhoes', 'milhao', 'bilhoes', 'bilhao', 'dolares', 'dolar', 'euros', 'euro',
  'leilao', 'leiloes', 'arrematado', 'arrematada', 'recorde', 'recordes',
  'mundo', 'global', 'primeira', 'primeiro', 'novo', 'nova', 'serie', 'series',
  'exclusivo', 'exclusiva', 'luxo', 'alta', 'linha', 'modelo', 'design', 'projeto',
  'producao', 'unidades', 'exemplares', 'anos', 'apos', 'sobre', 'entre', 'desde',
  'ainda', 'cada', 'mais', 'menos', 'como', 'para', 'com', 'que', 'uma', 'uns',
  'umas', 'dos', 'das', 'nos', 'nas', 'pela', 'pelo', 'esta', 'este', 'isso',
  'esse', 'essa', 'seu', 'sua', 'seus', 'suas', 'foi', 'sao', 'tem', 'ter',
  'ser', 'ver', 'ate', 'por', 'sem', 'sob', 'the', 'and', 'for', 'with', 'from',
  'this', 'that', 'its', 'has', 'have', 'will', 'can', 'new', 'first', 'world',
  'global', 'million', 'billion', 'dollars', 'euros', 'auction', 'record',
  'sale', 'sold', 'rare', 'best', 'top', 'luxury', 'watches', 'watch', 'design',
  'edition', 'limited', 'years', 'after', 'into', 'their', 'more', 'than',
  'over', 'most', 'only', 'just', 'very', 'also', 'one', 'two', 'three',
  // Termos técnicos recorrentes que não individualizam a matéria
  'aspirado', 'hibrido', 'eletrico', 'potencia', 'cavalos', 'motor', 'chassi',
  'carbono', 'aeronautica', 'telemetria', 'engenharia', 'precisao', 'acabamento',
  'artesanal', 'tradicao', 'historia', 'mercado', 'investimento', 'patrimonio',
  'fortuna', 'fortunas', 'familia', 'dinastia', 'capital', 'ativo', 'ativos'
]);

export function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Gera um slug estável a partir de um título.
 */
export function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Identificador da fotografia do Unsplash (ex.: "photo-1523275335684").
 */
export function getPhotoId(url) {
  if (!url) return '';
  const match = String(url).match(/photo-[a-z0-9\-]+/i);
  return match ? match[0] : '';
}

export function significantWords(value, minLength = 4) {
  return normalizeText(value)
    .split(/\s+/)
    .filter(word => word.length >= minLength || /\d/.test(word));
}

/**
 * Conjunto de entidades distintivas do título.
 */
export function topicTokens(value) {
  return new Set(
    significantWords(value)
      .filter(word => !GENERIC_TOPIC_WORDS.has(word))
  );
}

/**
 * Duas manchetes tratam do mesmo assunto quando compartilham ao menos
 * `minShared` entidades distintivas (marca + modelo, artista + obra etc.).
 */
export function topicsMatch(titleA, titleB, minShared = 2) {
  const tokensA = topicTokens(titleA);
  const tokensB = topicTokens(titleB);
  if (!tokensA.size || !tokensB.size) return false;

  let shared = 0;
  for (const token of tokensA) {
    if (tokensB.has(token)) {
      shared += 1;
      if (shared >= minShared) return true;
    }
  }
  return false;
}

/**
 * Regra de "mesma história" usada pelo publicador e pelo scout.
 * Exige 3 entidades em comum — ou 2 quando a manchete é curta (Villa sa Caleta,
 * Ferrari Luce, Monet Iris). Isso evita bloquear duas matérias diferentes da
 * mesma marca (Rolls-Royce Boat Tail x Rolls-Royce Phantom) e, ao mesmo tempo,
 * impede a republicação da mesma história com outro título.
 */
export function sameStory(titleA, titleB) {
  const tokensA = topicTokens(titleA);
  const tokensB = topicTokens(titleB);
  if (!tokensA.size || !tokensB.size) return false;

  let shared = 0;
  for (const token of tokensA) {
    if (tokensB.has(token)) shared += 1;
  }

  if (shared >= 3) return true;
  if (shared >= 2 && Math.min(tokensA.size, tokensB.size) <= 3) return true;
  return false;
}

/**
 * Chave curta para deduplicar variações da mesma história dentro do mesmo lote.
 */
export function storyKey(value) {
  return significantWords(value, 3)
    .filter(word => !GENERIC_TOPIC_WORDS.has(word))
    .slice(0, 8)
    .join(' ');
}
