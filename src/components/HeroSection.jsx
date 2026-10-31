import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, ArrowRight, Play, Award, Sparkles } from 'lucide-react';
import { ARTICLES, AUTHORS } from '../data/mockData';
import { fetchArticles } from '../services/radarService';
import { getHeroSelection } from '../services/feedPolicy';

export default function HeroSection() {
  const [articlesList, setArticlesList] = useState(ARTICLES);

  useEffect(() => {
    let isMounted = true;
    const reload = () => {
      fetchArticles().then(data => {
        // Array vazio é resposta válida: acervo esvaziado não pode ser mascarado
        // como "o bundle é o acervo". A capa tem seu próprio fallback documentado.
        if (isMounted && Array.isArray(data)) {
          setArticlesList(data);
        }
      });
    };
    reload();
    window.addEventListener('radar-data-changed', reload);
    return () => {
      isMounted = false;
      window.removeEventListener('radar-data-changed', reload);
    };
  }, []);

  const { main: selected, strip: secondaryArticles } = getHeroSelection(articlesList);
  // Sem matéria publicada, a faixa de destaques não tem o que mostrar; usa o acervo do repositório.
  const heroArticle = selected || ARTICLES[0];
  const author = AUTHORS[heroArticle.authorSlug] || AUTHORS['henrique-vianna'];

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-lux-border-light dark:border-lux-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Editorial Masthead Title */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          
          {/* Edition Tag Pill */}
          <div className="inline-flex items-center gap-2 bg-lux-gold/15 text-lux-gold-dark dark:text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3 h-3" />
            <span>EDIÇÃO DA SEMANA • DESTAQUE CENTRAL</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary leading-[1.15]">
            <Link to={`/artigo/${heroArticle.slug}`} className="hover:text-lux-gold transition-colors">
              {heroArticle.title}
            </Link>
          </h1>

          {/* Author Byline & Read Time */}
          <div className="mt-3.5 flex items-center justify-center gap-3 text-xs text-lux-text-muted">
            <Link 
              to={`/autor/${author.slug}`}
              className="flex items-center gap-2 font-semibold text-lux-text-primary dark:text-white hover:text-lux-gold transition-colors"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-5 h-5 rounded-full object-cover border border-lux-gold"
              />
              <span>Por {author.name}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-lux-emerald" />
            </Link>
            <span>•</span>
            <span>{heroArticle.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-lux-gold font-medium">
              <Clock className="w-3 h-3" />
              {heroArticle.readTime}
            </span>
          </div>
        </div>

        {/* Widescreen Cinematographic Centerpiece (Balanced 21:9 Widescreen) */}
        <Link 
          to={`/artigo/${heroArticle.slug}`}
          className="group block relative rounded-xl overflow-hidden border border-lux-border-light dark:border-lux-border-dark shadow-2xl bg-black mb-10 aspect-[16/9] sm:aspect-[21/9]"
        >
          <img
            src={heroArticle.image}
            alt={heroArticle.title}
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
            <span className="bg-lux-gold text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-lg">
              {heroArticle.badge}
            </span>
            <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
              {heroArticle.category}
            </span>
          </div>

          {/* Bottom Floating Bar inside the Hero with Excerpt & Specs */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <p className="max-w-2xl text-xs sm:text-base font-light text-white/90 line-clamp-2 leading-relaxed drop-shadow">
              {heroArticle.excerpt}
            </p>

            {/* Quick Specs Pill */}
            {heroArticle.specs && (
              <div className="hidden sm:flex glass-panel px-4 py-2.5 rounded text-xs gap-4 text-white flex-shrink-0 items-center">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-lux-gold block">Potência</span>
                  <span className="font-bold">{heroArticle.specs.potencia}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[9px] uppercase tracking-wider text-lux-gold block">0-100 km/h</span>
                  <span className="font-bold">{heroArticle.specs.aceleracao}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[9px] uppercase tracking-wider text-lux-gold block">Tiragem</span>
                  <span className="font-bold">{heroArticle.specs.tiragem}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lux-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Acessar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}
          </div>
        </Link>

        {/* Symmetrical Dual Feature Grid (2 Balanced Cards 50% / 50%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secondaryArticles.map((art) => {
            const artAuthor = AUTHORS[art.authorSlug] || AUTHORS['clara-meirelles'];
            return (
              <article
                key={art.id}
                className="group bg-white dark:bg-lux-bg-cardDark rounded-xl border border-lux-border-light dark:border-lux-border-dark shadow-lux overflow-hidden hover:shadow-lux-hover transition-all duration-300 flex flex-col"
              >
                {/* Image / Video Thumbnail */}
                <Link to={`/artigo/${art.slug}`} className="relative aspect-[16/9] overflow-hidden bg-black/10 block">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {art.badge}
                    </span>
                    <span className="text-[9px] text-lux-gold uppercase font-bold tracking-wider bg-black/60 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                  </div>

                  {/* Video Play Icon if post is a video */}
                  {art.type === 'video' && (
                    <div className="absolute inset-0 m-auto w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
                    </div>
                  )}
                </Link>

                {/* Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold leading-snug text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors">
                      <Link to={`/artigo/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs text-lux-text-muted">
                    <Link to={`/autor/${artAuthor.slug}`} className="flex items-center gap-1.5 font-medium text-lux-text-primary dark:text-white hover:text-lux-gold transition-colors">
                      <img
                        src={artAuthor.avatar}
                        alt={artAuthor.name}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span>{artAuthor.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-lux-emerald" />
                    </Link>
                    <Link to={`/artigo/${art.slug}`} className="flex items-center gap-1 font-semibold text-lux-gold hover:underline">
                      <span>Ler Matéria</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
