import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { FILMSTRIP_ITEMS } from '../data/mockData';

export default function FilmstripReel({ onSelectItem }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 border-b border-lux-border-light dark:border-lux-border-dark overflow-hidden bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-lux-gold" />
          <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-lux-text-primary dark:text-white">
            TRILHO DO RADAR: CURADORIA RÁPIDA
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            aria-label="Rolar para esquerda"
            className="p-1.5 rounded-full border border-lux-border-light dark:border-lux-border-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Rolar para direita"
            className="p-1.5 rounded-full border border-lux-border-light dark:border-lux-border-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filmstrip Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-3 scrollbar-none no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FILMSTRIP_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={`/artigo/${item.slug}`}
            className="group flex-shrink-0 w-[260px] sm:w-[290px] bg-white dark:bg-lux-bg-cardDark rounded-lg overflow-hidden border border-lux-border-light dark:border-lux-border-dark shadow-sm hover:shadow-lux-hover transition-all duration-300"
          >
            {/* Uniform Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                fetchpriority="low"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-2.5 left-2.5 text-[9px] font-bold tracking-widest uppercase bg-black/75 text-white backdrop-blur-md px-2 py-0.5 rounded shadow">
                {item.tag}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-lux-gold block mb-1">
                {item.category}
              </span>
              <h3 className="font-serif text-sm font-semibold line-clamp-2 leading-snug text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors">
                {item.title}
              </h3>
              <div className="mt-3 pt-2.5 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-[11px] text-lux-text-muted">
                <span>Ver Análise</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-lux-gold" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
