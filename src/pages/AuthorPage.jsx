import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Award, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Calendar,
  Ban,
  Key
} from 'lucide-react';
import { AUTHORS, ARTICLES } from '../data/mockData';

export default function AuthorPage() {
  const { slug } = useParams();
  const author = AUTHORS[slug];

  // Articles written by this author
  const authorArticles = ARTICLES.filter(a => a.authorSlug === slug);

  // Other columnists / authors
  const otherAuthors = Object.values(AUTHORS).filter(a => a.slug !== slug);

  if (!author) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-lux-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">
          COLUNISTA NÃO ENCONTRADO
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-lux-text-primary dark:text-lux-text-darkPrimary">
          Este perfil editorial não existe no Radar
        </h1>
        <p className="max-w-md text-sm text-lux-text-muted mb-8 leading-relaxed">
          Verifique o identificador do autor ou consulte nossa equipe editorial completa.
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

  return (
    <div className="min-h-screen py-8 sm:py-12 border-b border-lux-border-light dark:border-lux-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-lux-text-muted mb-8">
          <Link to="/" className="hover:text-lux-gold transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Equipe Editorial</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-lux-text-primary dark:text-white font-medium">
            {author.name}
          </span>
        </nav>

        {/* Author Bio Header Card */}
        <header className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-lux mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lux-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            
            {/* Author Portrait */}
            <div className="relative flex-shrink-0">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-lux-gold shadow-2xl"
              />
              <div className="absolute bottom-1 right-1 bg-lux-emerald text-white p-1.5 rounded-full border-2 border-white dark:border-black shadow">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            {/* Author Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <span className="bg-lux-gold/20 text-lux-gold-dark dark:text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full">
                  CORPO EDITORIAL VERIFICADO
                </span>
                <span className="text-xs text-lux-text-muted font-medium">
                  {author.articlesCount || 20}+ Artigos Publicados
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary mb-2">
                {author.name}
              </h1>

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-lux-gold mb-4">
                {author.role}
              </p>

              <p className="text-sm sm:text-base text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed mb-6 max-w-3xl">
                {author.bio}
              </p>

              {/* Author Signature Quote Callout */}
              {author.quote && (
                <div className="p-4 rounded-lg bg-black/5 dark:bg-white/5 border-l-2 border-lux-gold mb-6 max-w-2xl text-left">
                  <p className="font-serif italic text-sm text-lux-text-primary dark:text-lux-text-darkPrimary leading-relaxed">
                    "{author.quote}"
                  </p>
                </div>
              )}

              {/* Author Philosophical Manifesto & Voice */}
              {author.philosophy && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl text-left">
                  <div className="p-4 rounded-xl bg-lux-gold/5 border border-lux-gold/20 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-lux-gold font-bold text-[10px] tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>FILOSOFIA EDITORIAL</span>
                    </div>
                    <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed">
                      {author.philosophy}
                    </p>
                  </div>

                  {author.voiceManifesto && (
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-lux-border-light dark:border-lux-border-dark space-y-1.5">
                      <div className="flex items-center gap-1.5 text-lux-text-primary dark:text-white font-bold text-[10px] tracking-widest uppercase">
                        <Award className="w-3.5 h-3.5 text-lux-gold" />
                        <span>MANIFESTO DE VOZ</span>
                      </div>
                      <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed">
                        {author.voiceManifesto}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Author Essential Theses & Know-How Secrets */}
              {(author.essentialTheses || author.knowHow) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl text-left">
                  {author.essentialTheses && (
                    <div className="p-4 rounded-xl bg-lux-gold/5 border border-lux-gold/20 space-y-2">
                      <div className="flex items-center gap-1.5 text-lux-gold font-bold text-[10px] tracking-widest uppercase">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>AS TRÊS TESES INVIOLÁVEIS</span>
                      </div>
                      <ul className="space-y-1.5">
                        {author.essentialTheses.map((thesis, idx) => (
                          <li key={idx} className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed flex items-start gap-2">
                            <span className="text-lux-gold font-serif font-bold text-xs mt-0.5">{idx + 1}.</span>
                            <span>{thesis}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {author.knowHow && (
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                      <div className="flex items-center gap-1.5 text-lux-text-primary dark:text-white font-bold text-[10px] tracking-widest uppercase">
                        <Key className="w-3.5 h-3.5 text-lux-gold" />
                        <span>KNOW-HOW & SEGREDOS DE BASTIDORES</span>
                      </div>
                      <ul className="space-y-1.5">
                        {author.knowHow.map((item, idx) => (
                          <li key={idx} className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed flex items-start gap-2">
                            <span className="text-lux-gold text-xs mt-0.5">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Forbidden Terms (Rigorous Editorial Standard) */}
              {author.forbiddenTerms && author.forbiddenTerms.length > 0 && (
                <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 mb-6 max-w-3xl text-left">
                  <div className="flex items-center gap-1.5 text-red-500/90 font-bold text-[10px] tracking-widest uppercase mb-2">
                    <Ban className="w-3.5 h-3.5" />
                    <span>TERMOS TERMINANTEMENTE PROIBIDOS POR {author.name.toUpperCase()}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {author.forbiddenTerms.map((term, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] line-through font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                      >
                        "{term}"
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties Tags */}
              {author.specialties && (
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-lux-text-muted font-bold mr-1">
                    Especialidades:
                  </span>
                  {author.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-black/5 dark:bg-white/5 border border-lux-border-light dark:border-lux-border-dark px-3 py-1 rounded-full text-lux-text-secondary dark:text-lux-text-darkSecondary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

            </div>

          </div>
        </header>

        {/* Section: Published Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-lux-border-light dark:border-lux-border-dark">
            <div>
              <div className="flex items-center gap-2 text-lux-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>ARTIGOS PUBLICADOS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lux-text-primary dark:text-lux-text-darkPrimary">
                Curadoria & Textos por {author.name.split(' ')[0]}
              </h2>
            </div>

            <span className="text-xs text-lux-text-muted font-medium">
              {authorArticles.length} matérias disponíveis
            </span>
          </div>

          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorArticles.map((item) => (
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

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-lux-gold text-black text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-lux-text-muted mb-2">
                        <span>{item.date}</span>
                        <span className="text-lux-gold font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors leading-snug mb-3">
                        <Link to={`/artigo/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs">
                      <span className="text-[11px] text-lux-text-muted">
                        Radar do Luxo
                      </span>

                      <Link
                        to={`/artigo/${item.slug}`}
                        className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px] text-lux-text-primary dark:text-white group-hover:text-lux-gold transition-colors"
                      >
                        <span>Ler Artigo Completo</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark">
              <p className="text-sm text-lux-text-muted">
                Nenhum artigo adicional catalogado no momento para este autor.
              </p>
            </div>
          )}
        </section>

        {/* Section: Meet Other Authors */}
        <section className="pt-12 border-t border-lux-border-light dark:border-lux-border-dark">
          <div className="flex items-center gap-2 text-lux-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>OUTROS COLUNISTAS DO RADAR</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherAuthors.map((other) => (
              <Link
                key={other.slug}
                to={`/autor/${other.slug}`}
                className="group p-6 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark hover:border-lux-gold transition-all shadow-sm hover:shadow-lux flex items-center gap-5"
              >
                <img
                  src={other.avatar}
                  alt={other.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-lux-gold flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 font-serif text-lg font-bold text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors truncate">
                    <span>{other.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-lux-emerald flex-shrink-0" />
                  </div>
                  <p className="text-xs text-lux-gold font-medium truncate mb-1">
                    {other.role}
                  </p>
                  <p className="text-xs text-lux-text-muted line-clamp-2">
                    {other.bio}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-lux-text-muted group-hover:text-lux-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
