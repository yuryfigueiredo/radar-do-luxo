import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Shield, ArrowUp } from 'lucide-react';
import { CATEGORIES, AUTHORS } from '../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navCategories = CATEGORIES.filter(c => c.slug !== 'todos');
  const authorList = Object.values(AUTHORS);

  return (
    <footer className="bg-white dark:bg-[#0B0B0D] border-t border-lux-border-light dark:border-lux-border-dark py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-lux-border-light dark:border-lux-border-dark">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="font-serif text-2xl font-bold tracking-[0.25em] text-lux-text-primary dark:text-white block hover:text-lux-gold transition-colors">
              RADAR DO LUXO
            </Link>
            <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed max-w-sm">
              Plataforma editorial de inteligência e benchmarking do mercado de alto padrão. Mapeamos lançamentos, leilões fechados e manifestações artísticas do luxo contemporâneo.
            </p>
            <div className="text-xs text-lux-text-muted pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lux-emerald animate-pulse"></span>
              <span>Servidores operando em Zurich, Suíça</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-lux-text-primary dark:text-white mb-4">
              Categorias
            </h4>
            <ul className="space-y-2.5 text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-medium">
              {navCategories.map(c => (
                <li key={c.slug}>
                  <Link to={`/categoria/${c.slug}`} className="hover:text-lux-gold transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-lux-text-primary dark:text-white mb-4">
              Corpo Editorial
            </h4>
            <ul className="space-y-2.5 text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-medium">
              {authorList.map(a => (
                <li key={a.slug}>
                  <Link to={`/autor/${a.slug}`} className="hover:text-lux-gold transition-colors block">
                    <span className="font-semibold">{a.name}</span>
                    <span className="text-[10px] text-lux-text-muted block">{a.role.split('&')[0]}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-black/5 dark:border-white/5">
                <Link to="/admin" className="text-[11px] text-lux-gold hover:underline font-semibold flex items-center gap-1">
                  <span>🔒 Mesa Editorial VIP</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-lux-text-primary dark:text-white mb-4">
              Conformidade & Sigilo
            </h4>
            <ul className="space-y-2.5 text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-medium">
              <li>
                <Link to="/privacidade" className="hover:text-lux-gold transition-colors block">
                  Política de Privacidade & Cookies
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-lux-gold transition-colors block">
                  Termos de Uso Editorial
                </Link>
              </li>
              <li><span className="text-lux-text-muted">Protocolo de Sigilo Bancário</span></li>
              <li><span className="text-lux-text-muted">Acesso a Leilões Fechados</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lux-text-muted">
          <div>
            © 2026 Radar do Luxo Media Group. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-lux-gold transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
