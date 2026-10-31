import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data/mockData';
import { fetchArticles, isLiveSourceDegraded } from '../services/radarService';

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export default function Header({ isDark, onToggleTheme, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = CATEGORIES.filter(c => c.slug !== 'todos');

  // O selo "RADAR ATIVO" e a contagem da semana são uma promessa ao leitor: têm
  // que sair do acervo vivo, não do bundle. Com dados do repositório um site
  // congelado há duas semanas ainda se anunciaria como ativo.
  const [liveArticles, setLiveArticles] = useState(null);
  const [sourceDegraded, setSourceDegraded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const reload = () => {
      fetchArticles().then(data => {
        if (!isMounted) return;
        // Array vazio é resposta: se o editor esvaziou o acervo, o bundle congelado
        // não pode voltar a sustentar o selo de "ativo".
        if (Array.isArray(data)) setLiveArticles(data);
        setSourceDegraded(isLiveSourceDegraded());
      }).catch(() => {
        // Rejeição sem tratamento deixava o selo preso no estado do bundle.
        if (isMounted) setSourceDegraded(true);
      });
    };
    reload();
    window.addEventListener('radar-data-changed', reload);
    return () => {
      isMounted = false;
      window.removeEventListener('radar-data-changed', reload);
    };
  }, []);

  const publishedAt = article => Date.parse(article.publishedAt || article.published_at || '') || 0;
  // Rascunho e linha sem slug não são leitura: nem contam como novidade, nem
  // sustentam a promessa de que a redação está publicando agora.
  const publishable = (liveArticles || ARTICLES)
    .filter(article => article && article.status !== 'draft' && article.slug);
  const stamps = publishable.map(publishedAt).filter(Boolean).sort((a, b) => b - a);
  const newArrivalsThisWeek = stamps.filter(time => Date.now() - time < WEEK_MS).length;
  // O selo "ativo" só pode aparecer enquanto a automação estiver entregando edições.
  // Sem data nenhuma no acervo não há o que provar: o honesto é dizer pausado.
  const isPublishing = !sourceDegraded && stamps.length > 0 && Date.now() - stamps[0] < 36 * 60 * 60 * 1000;
  const chipLabel = sourceDegraded ? 'ACERVO LOCAL' : (isPublishing ? 'RADAR ATIVO' : 'CURADORIA PAUSADA');

  return (
    <header className="w-full z-50 transition-all duration-300">
      
      {/* 1. Top Utility & Live Pulse Bar (Always Visible) */}
      <div className="bg-lux-text-primary text-lux-text-darkPrimary dark:bg-black/95 dark:border-b dark:border-white/10 text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Live Indicator */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-2 font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                {isPublishing && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lux-emerald opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPublishing ? 'bg-lux-emerald' : 'bg-lux-text-muted'}`}></span>
              </span>
              <span className={`${isPublishing ? 'text-lux-emerald' : 'text-lux-text-muted'} font-semibold uppercase tracking-wider text-[10px]`}>
                {chipLabel}
              </span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white/80 hidden sm:inline font-light text-[11px]">
                {newArrivalsThisWeek} {newArrivalsThisWeek === 1 ? 'nova matéria' : 'novas matérias'} nesta semana
              </span>
            </span>
          </div>

          {/* Central Edition Info (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-[11px] text-white/60 tracking-wider uppercase font-medium">
            <Globe className="w-3 h-3 text-lux-gold" />
            <span>Edição Global • Zurique • Paris • Milão • São Paulo</span>
          </div>

          {/* Right Utility Actions */}
          <div className="flex items-center space-x-4 text-[11px] text-white/80">
            {/* Search Pill */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 hover:text-lux-gold transition-colors py-0.5 px-2 rounded hover:bg-white/10"
              aria-label="Abrir busca"
            >
              <Search className="w-3.5 h-3.5 text-lux-gold" />
              <span className="hidden sm:inline font-medium">Buscar no Radar</span>
            </button>

            <span className="text-white/30 hidden sm:inline">|</span>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? "Modo Claro" : "Modo Escuro"}
              className="flex items-center gap-1.5 hover:text-lux-gold transition-colors py-0.5 px-2 rounded hover:bg-white/10"
              title={isDark ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-lux-gold" />
                  <span className="hidden sm:inline">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Escuro</span>
                </>
              )}
            </button>

            <span className="text-white/30 hidden sm:inline">|</span>

            {/* VIP Access Badge */}
            <span className="flex items-center gap-1 text-lux-gold font-semibold uppercase tracking-wider text-[10px] cursor-pointer hover:underline">
              <ShieldCheck className="w-3.5 h-3.5 text-lux-gold" />
              <span className="hidden sm:inline">Acesso VIP</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main Editorial Masthead (Centered, Symmetrical, Haute-Horlogerie Prestige) */}
      <div 
        className={`w-full transition-all duration-300 bg-lux-bg-light/95 dark:bg-lux-bg-dark/95 border-b border-lux-border-light dark:border-lux-border-dark ${
          isScrolled ? 'sticky top-0 z-50 glass-panel shadow-lux py-2.5' : 'py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Unscrolled Mode: Full Majestic Masthead Centered */}
          {!isScrolled ? (
            <div className="flex flex-col items-center text-center">
              
              {/* Brand Centerpiece */}
              <Link to="/" className="group inline-flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-5xl lg:text-[46px] tracking-[0.25em] font-bold text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors duration-300">
                  RADAR DO LUXO
                </span>
                <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.4em] text-lux-text-muted dark:text-lux-text-darkMuted mt-1 font-semibold">
                  CURADORIA & EDITORIAL DE PRESTÍGIO
                </span>
              </Link>

              {/* Centered Symmetric Navigation Menu */}
              <nav aria-label="Navegação Principal" className="hidden lg:flex items-center justify-center space-x-7 mt-6 pt-5 border-t border-lux-border-light dark:border-lux-border-dark w-full max-w-4xl mx-auto">
                {navCategories.map((item, index) => (
                  <React.Fragment key={item.slug}>
                    <Link
                      to={`/categoria/${item.slug}`}
                      className="text-xs uppercase tracking-[0.18em] font-semibold text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-text-primary dark:hover:text-white hover:text-lux-gold transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                    {index < navCategories.length - 1 && (
                      <span className="text-lux-gold/40 text-[10px] select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>

              {/* Mobile Menu Trigger button for small screens */}
              <div className="lg:hidden mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lux-border-light dark:border-lux-border-dark text-xs uppercase tracking-wider font-semibold text-lux-text-primary dark:text-white"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  <span>Menu de Categorias</span>
                </button>
              </div>

            </div>
          ) : (
            /* Scrolled Mode: Condensed Single-Bar Sticky Header */
            <div className="flex items-center justify-between">
              
              {/* Compact Logo */}
              <Link to="/" className="group flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-bold text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors">
                  RADAR DO LUXO
                </span>
              </Link>

              {/* Compact Centered Categories */}
              <nav aria-label="Navegação Compacta" className="hidden lg:flex items-center space-x-6">
                {navCategories.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/categoria/${item.slug}`}
                    className="text-[11px] uppercase tracking-wider font-semibold text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Compact Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={onOpenSearch}
                  className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="Buscar"
                >
                  <Search className="w-4 h-4" />
                </button>
                <button
                  onClick={onToggleTheme}
                  className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="Alternar tema"
                >
                  {isDark ? <Sun className="w-4 h-4 text-lux-gold" /> : <Moon className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-1.5 rounded"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          )}

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-lux-bg-light dark:bg-lux-bg-dark border-t border-lux-border-light dark:border-lux-border-dark mt-4 pt-3 pb-4 space-y-2 text-center animate-in fade-in duration-200">
              {navCategories.map((item) => (
                <Link
                  key={item.slug}
                  to={`/categoria/${item.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-xs font-serif font-semibold uppercase tracking-wider text-lux-text-primary dark:text-lux-text-darkPrimary hover:text-lux-gold border-b border-black/5 dark:border-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
