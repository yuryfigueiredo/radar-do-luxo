import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Maximize2,
  ChevronRight, 
  Check, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { ARTICLES, AUTHORS } from '../data/mockData';
import { fetchArticleBySlug } from '../services/radarService';
import ConciergeModal from '../components/ConciergeModal';
import AdSenseSlot from '../components/AdSenseSlot';
import ImageLightboxModal from '../components/ImageLightboxModal';
import { trackEvent } from '../services/analyticsService';

export default function ArticlePage({ onQuickView }) {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [article, setArticle] = useState(() => ARTICLES.find(a => a.slug === slug) || null);
  const videoRef = useRef(null);

  // Load article dynamically from service (Supabase or local)
  useEffect(() => {
    let isMounted = true;
    async function loadArticle() {
      const found = await fetchArticleBySlug(slug);
      if (isMounted && found) {
        setArticle(found);
        trackEvent('article_viewed', {
          title: found.title,
          category: found.category,
          author: found.author,
          slug,
        });
      }
    }
    loadArticle();
    return () => { isMounted = false; };
  }, [slug]);

  const author = article ? (AUTHORS[article.authorSlug] || AUTHORS['henrique-vianna']) : null;

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  // Handle Share / Copy Link
  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  // Video play/pause handler
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Playback error", err);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // If article not found, render elegant 404
  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-lux-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">
          404 • REGISTRO NÃO ENCONTRADO
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-lux-text-primary dark:text-lux-text-darkPrimary">
          Este artigo não está disponível no Radar
        </h1>
        <p className="max-w-md text-sm text-lux-text-muted mb-8 leading-relaxed">
          O registro solicitado pode ter sido remanejado ou sua alocação de acesso expirou.
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

  // Related articles with cross-category diversity and zero image/topic collisions
  const relatedArticles = useMemo(() => {
    if (!article || !Array.isArray(ARTICLES)) return [];

    const getImageKey = (img) => {
      if (!img) return '';
      const match = img.match(/photo-[a-z0-9\-]+/i);
      return match ? match[0] : img.split('?')[0];
    };

    const currentImgKey = getImageKey(article.image);
    const pool = ARTICLES.filter(a => a && a.id !== article.id && a.slug !== article.slug);

    const categories = ['supercarros', 'relogios', 'arquitetura', 'destinos', 'estilo'];
    const preferredCategories = categories.filter(c => c !== article.categorySlug);

    const selected = [];
    const selectedImageKeys = new Set([currentImgKey]);
    const selectedCategorySlugs = new Set();

    // 1. Pick 1 article from each distinct category different from current
    for (const cat of preferredCategories) {
      if (selected.length >= 3) break;
      const candidate = pool.find(a => 
        a.categorySlug === cat && 
        !selectedImageKeys.has(getImageKey(a.image)) &&
        !selected.some(s => s.id === a.id)
      );
      if (candidate) {
        selected.push(candidate);
        selectedImageKeys.add(getImageKey(candidate.image));
        selectedCategorySlugs.add(candidate.categorySlug);
      }
    }

    // 2. Pick remaining slots from any category not yet chosen
    if (selected.length < 3) {
      for (const item of pool) {
        if (selected.length >= 3) break;
        const imgKey = getImageKey(item.image);
        if (!selected.some(s => s.id === item.id) && !selectedImageKeys.has(imgKey) && !selectedCategorySlugs.has(item.categorySlug)) {
          selected.push(item);
          selectedImageKeys.add(imgKey);
          selectedCategorySlugs.add(item.categorySlug);
        }
      }
    }

    // 3. Fallback with unique images
    if (selected.length < 3) {
      for (const item of pool) {
        if (selected.length >= 3) break;
        const imgKey = getImageKey(item.image);
        if (!selected.some(s => s.id === item.id) && !selectedImageKeys.has(imgKey)) {
          selected.push(item);
          selectedImageKeys.add(imgKey);
        }
      }
    }

    // 4. Ultimate safety fallback
    if (selected.length < 3) {
      for (const item of pool) {
        if (selected.length >= 3) break;
        if (!selected.some(s => s.id === item.id)) {
          selected.push(item);
        }
      }
    }

    return selected.slice(0, 3);
  }, [article]);

  return (
    <article className="relative min-h-screen">
      {/* 1. Golden Reading Progress Bar Fixed at Top */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-lux-text-muted mb-8">
          <Link to="/" className="hover:text-lux-gold transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/categoria/${article.categorySlug}`} className="hover:text-lux-gold transition-colors">
            {article.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-lux-text-secondary dark:text-lux-text-darkSecondary truncate max-w-[200px] sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Article Masthead / Header */}
        <header className="max-w-4xl mx-auto mb-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="bg-lux-gold text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded">
              {article.badge || 'EDITORIAL VIP'}
            </span>
            <Link 
              to={`/categoria/${article.categorySlug}`}
              className="bg-black/5 dark:bg-white/10 hover:bg-lux-gold hover:text-black dark:hover:text-black text-lux-text-secondary dark:text-lux-text-darkSecondary text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded transition-colors"
            >
              {article.category}
            </Link>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl font-light text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Author Row & Meta Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-b border-lux-border-light dark:border-lux-border-dark py-4">
            
            {/* Author Credit */}
            <Link 
              to={`/autor/${author.slug}`}
              className="group flex items-center gap-3.5 text-left"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-lux-gold shadow-sm group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="flex items-center gap-1.5 font-semibold text-lux-text-primary dark:text-white group-hover:text-lux-gold transition-colors text-sm">
                  <span>{author.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
                </div>
                <div className="text-xs text-lux-text-muted">
                  {author.role} • {article.date}
                </div>
              </div>
            </Link>

            {/* Reading Time & Actions */}
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-lux-gold font-medium bg-lux-gold/10 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>

              {/* Bookmark Button */}
              <button
                onClick={() => setBookmarked(!bookmarked)}
                aria-label="Salvar artigo"
                className={`p-2 rounded-full border border-lux-border-light dark:border-lux-border-dark transition-colors ${
                  bookmarked 
                    ? 'bg-lux-gold text-black border-lux-gold' 
                    : 'text-lux-text-secondary hover:text-lux-text-primary hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                title={bookmarked ? "Salvo na sua biblioteca" : "Salvar no Radar"}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              {/* Share / Copy Link Button */}
              <button
                onClick={handleCopyLink}
                aria-label="Compartilhar link do artigo"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lux-border-light dark:border-lux-border-dark text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                title="Copiar link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-lux-emerald" />
                    <span className="text-[11px] font-semibold text-lux-emerald">Copiado</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Compartilhar</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </header>

        {/* 2. Media Section (Native Video Player or High-Res Photography) */}
        <div className="max-w-5xl mx-auto mb-12">
          {article.type === 'video' ? (
            /* Cinematic Native Video Player */
            <div className="relative rounded-xl overflow-hidden bg-black border border-lux-border-dark shadow-2xl">
              
              {/* Video Element */}
              <div className="relative aspect-video flex items-center justify-center bg-black">
                <video
                  ref={videoRef}
                  src={article.videoUrl}
                  poster={article.image}
                  className="w-full h-full object-cover"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Big Center Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    aria-label="Reproduzir documentário"
                    className="group absolute z-20 flex items-center justify-center w-20 h-20 rounded-full bg-lux-gold text-black shadow-2xl hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 fill-black ml-1 group-hover:scale-105 transition-transform" />
                  </button>
                )}

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-lux-emerald text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow">
                    PRODUÇÃO 4K RADAR
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                    DURAÇÃO: {article.videoDuration || '04:18'}
                  </span>
                </div>

                {/* Bottom Custom Luxury Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Ativar som" : "Desativar som"}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <span className="text-xs font-mono tracking-wider text-white/80">
                      {isPlaying ? "01:24" : "00:00"} / {article.videoDuration || '04:18'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleFullScreen}
                      aria-label="Tela cheia"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Video Footer Caption */}
              <div className="p-4 bg-lux-bg-cardDark text-xs text-lux-text-darkMuted flex items-center justify-between border-t border-lux-border-dark">
                <span>Fotografia Cinematográfica por Radar Media Lab • Vallée de Joux, Suíça</span>
                <span className="text-lux-gold font-medium">Mini-Doc Exclusivo</span>
              </div>
            </div>
          ) : (
            /* High-Res Hero Image with Adaptive Proportions & Click-to-Zoom */
            <div 
              onClick={() => {
                setIsLightboxOpen(true);
                trackEvent('image_lightbox_opened', { title: article.title, slug });
              }}
              className="relative rounded-2xl overflow-hidden border border-lux-border-light dark:border-lux-border-dark shadow-2xl bg-[#09090C] group cursor-zoom-in transition-all duration-300 hover:border-lux-gold/40"
            >
              {/* Ambient Glow: Background soft blur to ensure full photo looks cinematic without black letterboxing */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25 blur-3xl scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${article.image})` }}
              />

              {/* Main Image: uncropped, natural proportion with responsive height */}
              <div className="relative z-10 flex items-center justify-center min-h-[300px] max-h-[72vh] sm:max-h-[660px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  fetchpriority="high"
                  decoding="async"
                  className={`w-full h-auto max-h-[72vh] sm:max-h-[660px] ${
                    article.imageFocus === 'bottom' || article.categorySlug === 'supercarros'
                      ? 'object-cover object-bottom sm:object-contain'
                      : 'object-cover sm:object-contain'
                  } mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]`}
                />

                {/* Floating Zoom Indicator Pill */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-medium border border-lux-gold/30 shadow-lg group-hover:bg-lux-gold group-hover:text-black transition-all">
                  <Maximize2 className="w-3.5 h-3.5 text-lux-gold group-hover:text-black transition-colors" />
                  <span>Toque para Zoom 4K</span>
                </div>
              </div>

              {/* Photo Caption Bar */}
              <div className="relative z-10 p-3.5 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-t border-lux-border-light dark:border-lux-border-dark text-[11px] text-lux-text-muted flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-lux-gold" />
                  Fotografia oficial com verificação de autenticidade • Alta Resolução
                </span>
                <span className="text-lux-gold font-medium">Acervo Radar do Luxo</span>
              </div>
            </div>
          )}
        </div>

        {/* 3. Main Content Grid (Article Body + Sticky Sidebar) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Article Body (8 cols on desktop) */}
          <div className="lg:col-span-8 text-lux-text-primary dark:text-lux-text-darkPrimary space-y-6">
            
            {article.contentParagraphs && article.contentParagraphs.map((paragraph, index) => {
              // Apply drop-cap styling to the very first paragraph
              if (index === 0) {
                return (
                  <p key={index} className="text-base sm:text-lg leading-relaxed font-normal text-lux-text-primary/90 dark:text-lux-text-darkPrimary/90">
                    <span className="float-left text-5xl sm:text-6xl font-serif font-bold text-lux-gold pr-3 pt-1 leading-none uppercase">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                );
              }

              // After 2nd paragraph, render mid-article pull quote or the inArticleDrop
              return (
                <React.Fragment key={index}>
                  <p className="text-base sm:text-lg leading-relaxed font-normal text-lux-text-primary/90 dark:text-lux-text-darkPrimary/90">
                    {paragraph}
                  </p>

                  {/* Mid-Article Pull Quote after paragraph 1 (Comfortable, accessible luxury typography) */}
                  {index === 1 && author.quote && (
                    <blockquote className="my-10 relative pl-6 sm:pl-8 pr-6 py-6 rounded-r-xl border-l-4 border-lux-gold bg-lux-gold/[0.04] dark:bg-lux-bg-cardDark/70 backdrop-blur-sm border-t border-r border-b border-lux-gold/10 dark:border-white/5 shadow-sm">
                      <span 
                        aria-hidden="true" 
                        className="block font-serif text-4xl sm:text-5xl text-lux-gold/60 leading-none select-none mb-1 -ml-1"
                      >
                        “
                      </span>
                      <p className="font-serif text-lg sm:text-xl font-normal text-lux-text-primary dark:text-lux-text-darkPrimary leading-relaxed tracking-normal">
                        {author.quote}
                      </p>
                      <footer className="text-xs font-sans font-semibold tracking-widest text-lux-gold uppercase mt-4 pt-3 border-t border-lux-gold/20 flex flex-wrap items-center gap-2">
                        <span className="w-4 h-[1px] bg-lux-gold/60 inline-block" />
                        <span>{author.name}</span>
                        <span className="text-lux-text-muted font-normal">•</span>
                        <span className="text-lux-text-muted font-normal normal-case">{author.role}</span>
                      </footer>
                    </blockquote>
                  )}

                  {/* IN-ARTICLE DROP CARD (Interlinked recommendation box requested by user) */}
                  {index === 1 && article.inArticleDrop && (
                    <div className="my-8 p-6 rounded-lg bg-lux-gold/10 dark:bg-lux-gold/5 border border-lux-gold/30 shadow-md">
                      <div className="flex items-center gap-2 text-lux-gold font-bold text-[10px] tracking-[0.25em] uppercase mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>LEITURA RECOMENDADA PELO RADAR</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-lux-text-primary dark:text-lux-text-darkPrimary mb-2">
                        {article.inArticleDrop.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed mb-4">
                        {article.inArticleDrop.reason}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-lux-gold/20 text-xs">
                        <span className="font-semibold text-lux-gold-dark dark:text-lux-gold">
                          Cotação de Referência: {article.inArticleDrop.val}
                        </span>

                        <Link
                          to={`/artigo/${article.inArticleDrop.slug}`}
                          className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-lux-text-primary dark:text-white hover:text-lux-gold dark:hover:text-lux-gold transition-colors"
                        >
                          <span>Acessar Análise Completa</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Native Luxury In-Article Ad Placement (AdSense Slot) */}
                  {index === 1 && (
                    <AdSenseSlot 
                      format="in-article" 
                      slot="1234567890" 
                      categorySlug={article.categorySlug}
                      priorityIndex={0}
                    />
                  )}
                </React.Fragment>
              );
            })}

            {/* End of Article Signature */}
            <div className="pt-8 mt-12 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-lux-text-muted">
                <ShieldCheck className="w-4 h-4 text-lux-emerald" />
                <span>Protocolo Editorial de Autenticidade Radar do Luxo</span>
              </div>
              <button
                onClick={handleCopyLink}
                className="text-xs font-semibold uppercase tracking-wider text-lux-gold hover:underline"
              >
                {copied ? "Link Copiado ✓" : "Compartilhar esta matéria"}
              </button>
            </div>

            {/* Author Extended Profile Box */}
            <div className="mt-8 p-6 rounded-lg bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-lux">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-lux-gold flex-shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-lux-text-primary dark:text-lux-text-darkPrimary">
                      {author.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
                  </div>
                  <p className="text-xs font-semibold text-lux-gold tracking-wide uppercase mb-3">
                    {author.role}
                  </p>
                  <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed mb-4">
                    {author.bio}
                  </p>
                  <Link
                    to={`/autor/${author.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lux-text-primary dark:text-white hover:text-lux-gold transition-colors"
                  >
                    <span>Ver todos os {author.articlesCount || 10}+ artigos de {author.name.split(' ')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-lux-gold" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (4 cols on desktop) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* Technical Specifications Table */}
              {article.specs && (
                <div className="p-6 rounded-lg bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-lux">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-lux-border-light dark:border-lux-border-dark">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-lux-gold">
                      FICHA TÉCNICA
                    </span>
                    <span className="text-[10px] text-lux-emerald font-semibold uppercase">
                      HOMOLOGADO
                    </span>
                  </div>

                  <dl className="space-y-3.5 text-xs">
                    {Object.entries(article.specs).map(([key, value]) => {
                      // Format camelCase key into readable Portuguese label
                      const label = key
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, str => str.toUpperCase());

                      return (
                        <div key={key} className="flex flex-col pb-2 border-b border-lux-border-light/60 dark:border-lux-border-dark/60 last:border-b-0 last:pb-0">
                          <dt className="text-[10px] uppercase tracking-wider text-lux-text-muted mb-0.5">
                            {label}
                          </dt>
                          <dd className="font-semibold text-lux-text-primary dark:text-lux-text-darkPrimary">
                            {value}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              )}

              {/* Concierge VIP Action Card */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-lux-text-primary to-black text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-lux-gold/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                  <ShieldCheck className="w-4 h-4 text-lux-gold" />
                  <span>MESA DE ALOCAÇÃO PRIVADA</span>
                </div>

                <h3 className="font-serif text-lg font-bold mb-2">
                  Deseja adquirir ou catalogar este item?
                </h3>

                <p className="text-xs text-white/70 font-light leading-relaxed mb-5">
                  Nosso concierge conecta colecionadores diretamente a leiloeiros credenciados e manufaturas suíças sob estrito sigilo.
                </p>

                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-lux-gold hover:bg-lux-gold-light text-black font-semibold text-xs tracking-wider uppercase py-3 rounded shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Concierge VIP</span>
                </button>
              </div>

              {/* Sticky Sidebar Luxury Ad Placement (AdSense Slot) */}
              <AdSenseSlot 
                format="sidebar" 
                slot="0987654321" 
                priorityIndex={1}
              />

              {/* Category Quick Explore Pill */}
              <div className="p-5 rounded-lg border border-lux-border-light dark:border-lux-border-dark bg-white dark:bg-lux-bg-cardDark text-center">
                <span className="text-[10px] uppercase tracking-wider text-lux-text-muted block mb-1">
                  Mais desta categoria
                </span>
                <Link
                  to={`/categoria/${article.categorySlug}`}
                  className="font-serif text-base font-bold text-lux-text-primary dark:text-lux-text-darkPrimary hover:text-lux-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explorar acervo de {article.category}</span>
                  <ChevronRight className="w-4 h-4 text-lux-gold" />
                </Link>
              </div>

            </div>
          </aside>

        </div>

        {/* 4. Related Articles Section */}
        <section className="max-w-5xl mx-auto mt-20 pt-12 border-t border-lux-border-light dark:border-lux-border-dark">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-lux-gold text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                CONTINUE SUA LEITURA
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lux-text-primary dark:text-lux-text-darkPrimary">
                Outros Destaques do Radar
              </h2>
            </div>
            <Link
              to="/"
              className="text-xs uppercase tracking-wider font-semibold text-lux-gold hover:underline inline-flex items-center gap-1"
            >
              <span>Ver Feed Completo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/artigo/${rel.slug}`}
                className="group flex flex-col bg-white dark:bg-lux-bg-cardDark rounded-lg border border-lux-border-light dark:border-lux-border-dark overflow-hidden shadow-sm hover:shadow-lux-hover transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold">
                    {rel.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-serif text-sm font-bold text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors line-clamp-2 mb-2 leading-snug">
                    {rel.title}
                  </h3>
                  <div className="text-[11px] text-lux-text-muted flex items-center justify-between pt-2 border-t border-lux-border-light dark:border-lux-border-dark">
                    <span>{rel.readTime}</span>
                    <span className="text-lux-gold font-medium group-hover:translate-x-1 transition-transform">
                      Ler Artigo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Modal do Concierge VIP */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        article={article}
      />

      {/* Modal de Zoom em Alta Resolução (Lightbox com Pinch-to-Zoom) */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        src={article?.image}
        alt={article?.title}
        title={article?.title}
        onClose={() => setIsLightboxOpen(false)}
      />
    </article>
  );
}
