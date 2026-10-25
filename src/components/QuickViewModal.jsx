import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, ArrowUpRight } from 'lucide-react';

export default function QuickViewModal({ item, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleOpenArticle = () => {
    onClose();
    if (item.slug) {
      navigate(`/artigo/${item.slug}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar ficha rápida"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-lux-gold bg-black/60 px-2.5 py-0.5 rounded">
              {item.category}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Modal Content & Specs */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed font-light">
            {item.excerpt}
          </p>

          {/* Quick Specifications Table */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded bg-lux-bg-light dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-lux-text-muted block">Valoração</span>
              <span className="font-bold text-lux-gold text-sm">{item.price || item.val || 'Sob Consulta'}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-lux-text-muted block">Status no Radar</span>
              <span className="font-semibold text-lux-emerald flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Verificado
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-lux-text-muted block">Autoria</span>
              <span className="font-medium">{item.author?.name || item.author || 'Radar do Luxo'}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleOpenArticle}
              className="w-full sm:flex-1 py-3 px-6 rounded bg-lux-text-primary text-white dark:bg-lux-gold dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span>Ler Matéria Completa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
