/**
 * ==============================================================================
 * FILTROS EDITORIAIS COMPARTILHADOS
 * ==============================================================================
 * Fonte única de verdade para o crivo negativo do Radar do Luxo.
 * Consumido pelo Scout (curateHotFeeds.js) e pelo Publicador (autonomousCrawler.js),
 * garantindo que uma pauta descartada na curadoria também seja recusada na
 * publicação — defesa em profundidade contra lixo que já esteja no acervo.
 * ==============================================================================
 */

// Termos estritamente incompatíveis com o padrão editorial: esportes coletivos,
// tabloides, celebridades, ciência natural e notícias comerciais.
export const NEGATIVE_TERMS = [
  'soccer', 'football', 'basketball', 'baseball', 'softball', 'volleyball', 'tennis', 'golf',
  'nba', 'nfl', 'mlb', 'formula 1', 'f1', 'motogp', 'nascar', 'indycar', 'grand prix',
  'practice', 'qualifying', 'livery', 'race report', 'world championship',
  'high school', 'wrap:', 'scores:', 'game wrap', 'podcast', 'concert', 'birthday party',
  'arrested', 'crash', 'police', 'shooting', 'murder', 'recipe', 'drake', 'celebrity',
  'kardashian', 'pickleball', 'waterslides', 'influencer', 'tiktok', 'viral', 'dating',
  'divorce', 'scandal', 'nightclub', 'cheap', 'discount', 'coupon', 'black friday',
  'deal of the day', 'kim jong', 'lady gaga', 'seized', 'heiress',
  'fossil', 'dinosaur', 'meteorite', 'natural history', 'archaeolog', 'supplier', 'export sales'
];

/**
 * Verifica se o texto contém o termo respeitando limites de palavra.
 * Termos compostos são comparados como substring simples.
 */
export function containsTerm(text, term) {
  if (!text || !term) return false;
  if (term.includes(' ')) return text.includes(term);
  return new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z0-9]|$)`, 'i').test(text);
}

/**
 * Retorna o primeiro termo negativo encontrado no texto, ou null.
 */
export function findNegativeTerm(text) {
  const value = String(text || '').toLowerCase();
  if (!value) return null;
  return NEGATIVE_TERMS.find(term => containsTerm(value, term)) || null;
}
