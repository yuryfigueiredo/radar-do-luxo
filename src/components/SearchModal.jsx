import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import { ARTICLES } from '../data/mockData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? ARTICLES.slice(0, 4) 
    : ARTICLES.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item) => {
    onClose();
    if (item.slug) {
      navigate(`/artigo/${item.slug}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-4 sm:p-6 border-b border-lux-border-light dark:border-lux-border-dark flex items-center gap-3">
          <Search className="w-5 h-5 text-lux-gold flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por marca, relógio, supercarro ou vila..."
            className="w-full bg-transparent text-base sm:text-lg focus:outline-none placeholder:text-lux-text-muted font-serif"
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-lux-text-muted block mb-2">
            {query.trim() === '' ? 'Destaques Sugeridos' : `Resultados Encontrados (${results.length})`}
          </span>

          {results.length === 0 ? (
            <div className="py-8 text-center text-sm text-lux-text-muted">
              Nenhum item encontrado para "{query}". Tente buscar por "Ferrari", "Patek" ou "Villa".
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group cursor-pointer p-3 rounded border border-transparent hover:border-lux-gold/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold uppercase text-lux-gold block">
                      {item.category}
                    </span>
                    <h5 className="font-serif text-sm font-semibold truncate group-hover:text-lux-gold transition-colors">
                      {item.title}
                    </h5>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-lux-text-muted group-hover:translate-x-1 group-hover:text-lux-gold transition-all flex-shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Footer tip */}
        <div className="px-6 py-3 bg-black/5 dark:bg-white/5 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-[11px] text-lux-text-muted">
          <span>Pressione ESC para fechar</span>
          <span>Radar do Luxo Global Index</span>
        </div>
      </div>
    </div>
  );
}
