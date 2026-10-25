import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Eye, Sparkles, Play, ArrowRight } from 'lucide-react';
import { CATEGORIES, ARTICLES, AUTHORS } from '../data/mockData';
import { fetchArticles } from '../services/radarService';

export default function FeedSection({ onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [allArticles, setAllArticles] = useState(ARTICLES);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const data = await fetchArticles();
      if (isMounted && data && data.length > 0) {
        setAllArticles(data);
      }
    }
    load();
    window.addEventListener('radar-data-changed', load);
    return () => { 
      isMounted = false; 
      window.removeEventListener('radar-data-changed', load);
    };
  }, []);

  // Filter out drafts and the hero article from the main feed
  const feedItems = allArticles.filter(a => !a.isHero && a.status !== 'draft');

  const filteredItems = activeCategory === 'todos'
    ? feedItems
    : feedItems.filter(item => item.categorySlug === activeCategory);

  return (
    <section className="py-12 lg:py-16 border-b border-lux-border-light dark:border-lux-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-lux-border-light dark:border-lux-border-dark">
          <div>
            <div className="flex items-center gap-2 text-lux-gold font-semibold text-xs tracking-[0.2em] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACERVO EM TEMPO REAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary">
              O Feed do Radar
            </h2>
          </div>

          {/* Category Filter Pills (FLIP Animated Transition) */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-lux-text-primary dark:text-black font-semibold' 
                      : 'text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-text-primary dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10'
                  }`}
                >
                  {/* Framer Motion Active Pill Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-lux-gold rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Animated Grid (FLIP Layout Reorganization) */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const author = AUTHORS[item.authorSlug] || AUTHORS['henrique-vianna'];
              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group spotlight-card bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark overflow-hidden shadow-lux hover:shadow-lux-hover flex flex-col justify-between"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[9px] font-bold tracking-widest uppercase bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded">
                        {item.category}
                      </span>
                      {item.type === 'video' && (
                        <span className="text-[9px] font-bold uppercase bg-lux-gold text-black px-2 py-1 rounded flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-black" /> Vídeo
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onQuickView && onQuickView(item);
                      }}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded text-lux-text-primary dark:text-white flex items-center gap-1.5 hover:bg-lux-gold hover:text-black shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ficha Rápida</span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors">
                        <Link to={`/artigo/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary line-clamp-3 leading-relaxed font-light">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Author & Read Time */}
                    <div className="mt-5 pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs text-lux-text-muted">
                      <Link 
                        to={`/autor/${author.slug}`}
                        className="font-medium text-lux-text-primary dark:text-white hover:text-lux-gold transition-colors"
                      >
                        {author.name}
                      </Link>

                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
