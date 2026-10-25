import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  ChevronRight, 
  Play, 
  Layers, 
  SlidersHorizontal 
} from 'lucide-react';
import { CATEGORIES, ARTICLES, AUTHORS } from '../data/mockData';

export default function CategoryPage({ onQuickView }) {
  const { slug } = useParams();
  const [filterType, setFilterType] = useState('all'); // 'all', 'article', 'video'

  // Look up category
  const category = CATEGORIES.find(c => c.slug === slug);

  // Filter articles belonging to this category
  const categoryArticles = ARTICLES.filter(a => {
    if (slug === 'todos') return true;
    return a.categorySlug === slug;
  });

  // Apply subfilter (articles vs videos)
  const displayedArticles = categoryArticles.filter(item => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  // Other categories for sidebar / quick links
  const otherCategories = CATEGORIES.filter(c => c.slug !== 'todos' && c.slug !== slug);

  if (!category && slug !== 'todos') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-lux-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">
          CATEGORIA NÃO CATALOGADA
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-lux-text-primary dark:text-lux-text-darkPrimary">
          Este nicho ainda não possui acervo público
        </h1>
        <p className="max-w-md text-sm text-lux-text-muted mb-8 leading-relaxed">
          Nossa equipe de curadoria está em processo de homologação para este segmento.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-lux-text-primary dark:bg-white text-white dark:text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded hover:bg-lux-gold dark:hover:bg-lux-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retornar à Página Inicial
        </Link>
      </div>
    );
  }

  const categoryName = category ? category.name : 'Todos os Artigos';
  const categoryDesc = category?.desc || 'Explore a totalidade do arquivo de reportagens, análises de mercado e peças exclusivas mapeadas pelo Radar do Luxo.';

  return (
    <div className="min-h-screen py-8 sm:py-12 border-b border-lux-border-light dark:border-lux-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-lux-text-muted mb-8">
          <Link to="/" className="hover:text-lux-gold transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Categorias</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-lux-text-primary dark:text-white font-medium">
            {categoryName}
          </span>
        </nav>

        {/* Category Header Banner */}
        <header className="mb-12 pb-8 border-b border-lux-border-light dark:border-lux-border-dark">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-lux-gold/15 text-lux-gold-dark dark:text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3 h-3" />
                <span>CURADORIA SETORIAL</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary mb-4">
                {categoryName}
              </h1>

              <p className="text-sm sm:text-base text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed">
                {categoryDesc}
              </p>
            </div>

            {/* Live Count Pill & Subfilters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 bg-lux-emerald/10 border border-lux-emerald/30 text-lux-emerald px-3.5 py-2 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-lux-emerald animate-pulse" />
                <span>{categoryArticles.length} Itens Catalogados</span>
              </div>

              {/* Media Subfilters */}
              <div className="flex items-center bg-black/5 dark:bg-white/5 p-1 rounded-full border border-lux-border-light dark:border-lux-border-dark text-xs">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                    filterType === 'all'
                      ? 'bg-lux-gold text-black font-semibold shadow-sm'
                      : 'text-lux-text-muted hover:text-lux-text-primary dark:hover:text-white'
                  }`}
                >
                  Todos ({categoryArticles.length})
                </button>
                <button
                  onClick={() => setFilterType('article')}
                  className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                    filterType === 'article'
                      ? 'bg-lux-gold text-black font-semibold shadow-sm'
                      : 'text-lux-text-muted hover:text-lux-text-primary dark:hover:text-white'
                  }`}
                >
                  Artigos
                </button>
                <button
                  onClick={() => setFilterType('video')}
                  className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                    filterType === 'video'
                      ? 'bg-lux-gold text-black font-semibold shadow-sm'
                      : 'text-lux-text-muted hover:text-lux-text-primary dark:hover:text-white'
                  }`}
                >
                  Vídeos
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Articles Grid */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((item) => {
              const author = AUTHORS[item.authorSlug] || AUTHORS['henrique-vianna'];
              return (
                <article
                  key={item.id}
                  className="group flex flex-col bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark overflow-hidden shadow-lux hover:shadow-lux-hover transition-all duration-300"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                    <Link to={`/artigo/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </Link>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-lux-gold text-black text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow">
                        {item.badge || item.category}
                      </span>
                      {item.type === 'video' && (
                        <span className="bg-black/75 backdrop-blur-md text-white text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-white" />
                          <span>{item.videoDuration || 'Vídeo'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Author Meta */}
                      <div className="flex items-center justify-between text-xs text-lux-text-muted mb-3">
                        <Link 
                          to={`/autor/${author.slug}`}
                          className="flex items-center gap-1.5 font-medium text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-gold transition-colors"
                        >
                          <img
                            src={author.avatar}
                            alt={author.name}
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          <span>{author.name}</span>
                          <CheckCircle2 className="w-3 h-3 text-lux-emerald" />
                        </Link>
                        <span>{item.date}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors leading-snug mb-3">
                        <Link to={`/artigo/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-lux-gold font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime}
                      </span>

                      <Link
                        to={`/artigo/${item.slug}`}
                        className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px] text-lux-text-primary dark:text-white group-hover:text-lux-gold transition-colors"
                      >
                        <span>Acessar</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark">
            <p className="text-sm text-lux-text-muted mb-4">
              Nenhum item com este formato foi encontrado nesta categoria.
            </p>
            <button
              onClick={() => setFilterType('all')}
              className="text-xs font-bold uppercase tracking-wider text-lux-gold hover:underline"
            >
              Ver todos os itens ({categoryArticles.length})
            </button>
          </div>
        )}

        {/* Other Categories Explorer */}
        {otherCategories.length > 0 && (
          <section className="mt-20 pt-12 border-t border-lux-border-light dark:border-lux-border-dark">
            <div className="flex items-center gap-2 text-lux-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <Layers className="w-4 h-4" />
              <span>EXPLORAR OUTROS SEGMENTOS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherCategories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/categoria/${c.slug}`}
                  className="p-4 rounded-lg bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark hover:border-lux-gold group transition-all"
                >
                  <h3 className="font-serif text-base font-bold text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors mb-1">
                    {c.name}
                  </h3>
                  <p className="text-[11px] text-lux-text-muted line-clamp-2">
                    {c.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
