export const HOME_FEED_LIMIT = 12;

export function getVisibleFeedArticles(articles, categorySlug = 'todos') {
  return articles
    .filter(article =>
      article.status !== 'draft' &&
      !article.isHero &&
      !article.is_hero &&
      (categorySlug === 'todos' || article.categorySlug === categorySlug)
    )
    .sort((a, b) => {
      const aTime = Date.parse(a.publishedAt || a.published_at || a.created_at || '') || 0;
      const bTime = Date.parse(b.publishedAt || b.published_at || b.created_at || '') || 0;
      return bTime - aTime;
    })
    .slice(0, HOME_FEED_LIMIT);
}
