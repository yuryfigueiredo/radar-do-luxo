import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { FILMSTRIP_ITEMS } from '../data/mockData';
import { fetchArticles } from '../services/radarService';
import { getFilmstripSelection } from '../services/feedPolicy';

// Cabe na célula de 350px e não usa reticência como enfeite: só corta quem
// realmente passa do tamanho, senão título curto aparece truncado sem estar.
const REEL_TITLE_LIMIT = 38;

const toReelItem = (article, index) => {
  const title = String(article.title || '');
  const truncated = title.length > REEL_TITLE_LIMIT;
  return {
    id: `film-${index + 1}`,
    category: String(article.categorySlug || 'DESTAQUES').toUpperCase(),
    title: truncated ? `${title.slice(0, REEL_TITLE_LIMIT - 1).trimEnd()}…` : title,
    image: article.image,
    tag: article.badge || 'CURADORIA RADAR',
    // O bundle antigo guardava o atalho em `id`; o acervo vivo usa `slug`. Sem
    // essa ponte o item sem slug viraria card morto (rota /artigo/undefined).
    slug: article.slug || (typeof article.id === 'string' ? article.id : '')
  };
};

// Uma roleta é uma vitrine de atalhos: card sem destino ou sem imagem não é
// curadoria, é o link morto que o dono do site já viu. Filtra-se antes de contar
// a banda, senão ela continua no ar exibindo o que não abre.
const isOpenable = (item) => Boolean(item && item.slug && item.image);

export default function FilmstripReel({ onSelectItem }) {
  const scrollContainerRef = useRef(null);
  const [items, setItems] = useState(() => FILMSTRIP_ITEMS.filter(isOpenable));

  useEffect(() => {
    let isMounted = true;
    const reload = () => {
      fetchArticles().then(data => {
        // Array vazio É resposta: com o acervo esvaziado pelo editor, a roleta não
        // tem direito de continuar exibindo os atalhos do bundle congelado.
        if (!isMounted || !Array.isArray(data)) return;
        // Chegou o acervo vivo: a roleta passa a obedecer à política dele, inclusive
        // quando não sobra nada. Manter o bundle nesse caso é repetir na tela a
        // matéria que a home já mostrou em outra banda.
        setItems(getFilmstripSelection(data).map(toReelItem).filter(isOpenable));
      }).catch(() => {
        // Consulta quebrada: a banda continua no que o repositório já mostrou.
      });
    };
    reload();
    window.addEventListener('radar-data-changed', reload);
    return () => {
      isMounted = false;
      window.removeEventListener('radar-data-changed', reload);
    };
  }, []);

  // Sem matéria sobrando para a roleta, a banda some: título e setas de uma
  // vitrine vazia seriam outra promessa sem lastro.
  if (items.length === 0) return null;

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
        {items.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
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
