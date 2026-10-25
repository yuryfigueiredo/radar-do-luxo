import React, { useEffect, useState } from 'react';
import { ExternalLink, Sparkles, Shield, ChevronRight, Info } from 'lucide-react';
import { LUXURY_SPONSORS, getSponsorForCategory } from '../data/sponsorsData';
import MediaKitModal from './MediaKitModal';

/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — COMPONENTE DE ANÚNCIOS QUIET LUXURY & GOOGLE ADSENSE
 * ==============================================================================
 * Arquitetura de publicidade de alto padrão:
 * 1. Formatos suportados:
 *    - 'in-article': Banner editorial horizontal entre os parágrafos 2 e 3.
 *    - 'sidebar': Display vertical elegante (300x600 / 300x250) na coluna lateral.
 *    - 'feed': Card nativo perfeitamente integrado ao grid da Home.
 *    - 'billboard': Faixa horizontal panorâmica antes do rodapé ou após o Hero.
 *
 * 2. Inteligência Quiet Luxury:
 *    - Sem popups, sem cores berrantes, sem quebras de layout (Zero CLS).
 *    - Se o AdSense estiver ativo com ID homologado, renderiza o anúncio Google
 *      dentro de uma moldura refinada em ouro e carvão.
 *    - Se o AdSense estiver vazio ou em aprovação, exibe uma campanha de prestígio
 *      das Maisons de Alta Relojoaria, Náutica, Hipercarros ou Arte Museológica,
 *      mantendo o site com aparência de uma revista internacional multimilionária.
 * ==============================================================================
 */
export default function AdSenseSlot({
  slot = '',
  format = 'in-article', // 'in-article' | 'sidebar' | 'feed' | 'billboard'
  sponsorId = null,
  categorySlug = null,
  className = '',
  priorityIndex = 0
}) {
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const adClient = import.meta.env.VITE_ADSENSE_CLIENT || import.meta.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';
  const isAdSenseActive = import.meta.env.PROD && Boolean(adClient) && Boolean(slot);

  // Seleciona a Maison correspondente
  const selectedSponsor = sponsorId 
    ? LUXURY_SPONSORS.find(s => s.id === sponsorId) || LUXURY_SPONSORS[0]
    : categorySlug
      ? getSponsorForCategory(categorySlug)
      : LUXURY_SPONSORS[priorityIndex % LUXURY_SPONSORS.length];

  useEffect(() => {
    if (isAdSenseActive) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.warn('AdSense integration error:', err);
      }
    }
  }, [isAdSenseActive, slot]);

  // ============================================================================
  // MODO 1: GOOGLE ADSENSE EM PRODUÇÃO COM MOLDURA QUIET LUXURY
  // ============================================================================
  if (isAdSenseActive) {
    if (format === 'in-article') {
      return (
        <div className={`my-10 p-4 sm:p-5 rounded-xl bg-white dark:bg-[#141416] border border-lux-gold/20 shadow-lux min-h-[160px] flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-lux-border-light dark:border-lux-border-dark text-[9px] uppercase tracking-[0.25em] text-lux-text-muted">
            <span className="font-semibold text-lux-gold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-lux-gold" />
              Publicidade Institucional Homologada
            </span>
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="hover:text-lux-gold transition-colors inline-flex items-center gap-1"
            >
              <Info className="w-3 h-3" />
              <span>Mídia Kit</span>
            </button>
          </div>

          <div className="overflow-hidden text-center py-2">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', textAlign: 'center' }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client={adClient}
              data-ad-slot={slot}
            />
          </div>

          <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
        </div>
      );
    }

    if (format === 'sidebar') {
      return (
        <div className={`p-4 rounded-xl bg-white dark:bg-[#141416] border border-lux-gold/20 shadow-lux min-h-[380px] flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-lux-border-light dark:border-lux-border-dark text-[9px] uppercase tracking-[0.25em] text-lux-text-muted">
            <span className="font-semibold text-lux-gold">Patrocínio Master</span>
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="hover:text-lux-gold transition-colors inline-flex items-center gap-1"
            >
              <Info className="w-3 h-3" />
              <span>Mídia Kit</span>
            </button>
          </div>

          <div className="overflow-hidden text-center py-2 flex-1 flex items-center justify-center">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '100%' }}
              data-ad-client={adClient}
              data-ad-slot={slot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>

          <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
        </div>
      );
    }

    return (
      <div className={`my-8 p-4 rounded-xl bg-white dark:bg-[#141416] border border-lux-gold/20 text-center min-h-[120px] ${className}`}>
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-lux-border-light dark:border-lux-border-dark text-[9px] uppercase tracking-[0.25em] text-lux-text-muted">
          <span className="font-semibold text-lux-gold">Alocação Institucional</span>
          <button onClick={() => setIsMediaKitOpen(true)} className="hover:text-lux-gold transition-colors">
            Mídia Kit
          </button>
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
      </div>
    );
  }

  // ============================================================================
  // MODO 2: CURADORIA NATIVA DE MAISONS (QUIET LUXURY SPONSOR SHOWCASE)
  // ============================================================================
  // Exibido com dignidade aristocrática em todos os ambientes até o AdSense
  // aprovar inventário programático de mesmo nível estético.

  // 1. FORMATO: IN-ARTICLE (Horizontal entre parágrafos)
  if (format === 'in-article') {
    return (
      <>
        <div className={`my-10 rounded-xl overflow-hidden bg-gradient-to-br from-white via-lux-bg-light to-white dark:from-[#141416] dark:via-[#19191D] dark:to-[#141416] border border-lux-gold/25 shadow-lux transition-all duration-300 hover:border-lux-gold/45 ${className}`}>
          {/* Header Bar */}
          <div className="px-5 py-2.5 bg-black/5 dark:bg-black/30 border-b border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-lux-text-muted">
            <div className="flex items-center gap-1.5 font-bold text-lux-gold">
              <Sparkles className="w-3 h-3 text-lux-gold" />
              <span>PARCERIA EDITORIAL • {selectedSponsor.category}</span>
            </div>
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="hover:text-lux-gold transition-colors flex items-center gap-1 text-[9px] font-mono lowercase"
            >
              <span>anuncie no radar</span>
              <ChevronRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Main Showcase Layout */}
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Image Frame */}
            <div className="md:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden bg-black/20 group">
              <img
                src={selectedSponsor.image}
                alt={selectedSponsor.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 text-[10px] text-white/90 font-light italic">
                {selectedSponsor.location}
              </div>
            </div>

            {/* Text & Craftsmanship Quote */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-lux-gold block mb-1">
                  {selectedSponsor.tagline}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-lux-text-primary dark:text-white leading-snug">
                  {selectedSponsor.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-serif italic leading-relaxed">
                  "{selectedSponsor.quote}"
                </p>
                <p className="mt-2 text-xs text-lux-text-muted leading-relaxed font-light hidden sm:block">
                  {selectedSponsor.highlight}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={selectedSponsor.destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-lux-text-primary dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:bg-lux-gold dark:hover:bg-lux-gold dark:hover:text-black transition-colors shadow-sm"
                >
                  <span>{selectedSponsor.ctaText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setIsMediaKitOpen(true)}
                  className="text-xs text-lux-text-muted hover:text-lux-gold transition-colors font-medium underline-offset-4 hover:underline"
                >
                  Conhecer Mídia Kit VIP
                </button>
              </div>
            </div>
          </div>
        </div>

        <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
      </>
    );
  }

  // 2. FORMATO: SIDEBAR (Vertical 300x600 Half-Page)
  if (format === 'sidebar') {
    return (
      <>
        <div className={`p-5 rounded-xl bg-white dark:bg-[#141416] border border-lux-gold/25 shadow-lux space-y-4 transition-all duration-300 hover:border-lux-gold/40 ${className}`}>
          {/* Top Label */}
          <div className="flex items-center justify-between pb-2 border-b border-lux-border-light dark:border-lux-border-dark text-[9px] uppercase tracking-[0.2em] text-lux-text-muted">
            <span className="font-bold text-lux-gold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-lux-gold" />
              Maison Patrocinadora
            </span>
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="hover:text-lux-gold transition-colors"
            >
              Mídia Kit
            </button>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/20 group">
            <img
              src={selectedSponsor.image}
              alt={selectedSponsor.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-2.5 left-2.5">
              <span className="text-[9px] uppercase tracking-wider bg-black/75 backdrop-blur-md text-lux-gold px-2 py-0.5 rounded font-bold">
                {selectedSponsor.category.split(' ')[0]}
              </span>
            </div>
            <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-white font-serif font-bold">
              {selectedSponsor.name}
            </div>
          </div>

          {/* Body */}
          <div className="space-y-2">
            <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-serif italic leading-relaxed">
              "{selectedSponsor.quote}"
            </p>
            <p className="text-[11px] text-lux-text-muted leading-normal">
              {selectedSponsor.highlight}
            </p>
          </div>

          {/* CTA */}
          <a
            href={selectedSponsor.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-lux-gold hover:text-black dark:hover:bg-lux-gold dark:hover:text-black border border-lux-border-light dark:border-lux-border-dark text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
          >
            <span>{selectedSponsor.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="pt-2 text-center">
            <span className="text-[10px] text-lux-text-muted font-light">
              Auditado pelo Protocolo de Prestígio do Radar
            </span>
          </div>
        </div>

        <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
      </>
    );
  }

  // 3. FORMATO: FEED NATIVE CARD (Para o grid da Homepage)
  if (format === 'feed') {
    return (
      <>
        <article className={`group spotlight-card bg-gradient-to-br from-white via-lux-bg-light to-white dark:from-[#16161A] dark:via-[#19191D] dark:to-[#16161A] rounded-lg border border-lux-gold/30 hover:border-lux-gold/60 overflow-hidden shadow-lux hover:shadow-lux-hover flex flex-col justify-between transition-all duration-300 ${className}`}>
          {/* Image Frame */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
            <img
              src={selectedSponsor.image}
              alt={selectedSponsor.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Category & Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="text-[9px] font-bold tracking-widest uppercase bg-lux-gold text-black px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 fill-black" />
                MAISON HOMOLOGADA
              </span>
            </div>

            <div className="absolute bottom-2.5 left-3 text-[11px] text-white/90 font-serif italic">
              {selectedSponsor.location}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-lux-gold font-semibold text-[10px] tracking-[0.2em] uppercase mb-1">
                <span>{selectedSponsor.category}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-lux-text-primary dark:text-lux-text-darkPrimary group-hover:text-lux-gold transition-colors">
                <a href={selectedSponsor.destinationUrl} target="_blank" rel="noopener noreferrer">
                  {selectedSponsor.name}: {selectedSponsor.tagline}
                </a>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-serif italic line-clamp-3 leading-relaxed">
                "{selectedSponsor.quote}"
              </p>
            </div>

            {/* Footer with Attribution and CTA */}
            <div className="mt-5 pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs text-lux-text-muted">
              <button
                onClick={() => setIsMediaKitOpen(true)}
                className="hover:text-lux-gold transition-colors font-mono text-[10px] uppercase tracking-wider"
              >
                Parceria Editorial
              </button>

              <a
                href={selectedSponsor.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider text-[11px] text-lux-text-primary dark:text-white group-hover:text-lux-gold transition-colors inline-flex items-center gap-1"
              >
                <span>Explorar Maison</span>
                <ChevronRight className="w-3.5 h-3.5 text-lux-gold" />
              </a>
            </div>
          </div>
        </article>

        <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
      </>
    );
  }

  // 4. FORMATO: BILLBOARD / LEADERBOARD (Horizontal Panorâmico)
  return (
    <>
      <div className={`my-8 py-4 px-6 rounded-xl bg-white dark:bg-[#141416] border border-lux-gold/25 shadow-lux flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-lux-gold/10 flex items-center justify-center text-lux-gold flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-lux-gold font-bold">
                MAISON HOMOLOGADA • {selectedSponsor.name}
              </span>
            </div>
            <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-serif italic">
              "{selectedSponsor.quote}"
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={selectedSponsor.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-lux-text-primary dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:bg-lux-gold dark:hover:bg-lux-gold dark:hover:text-black transition-colors"
          >
            {selectedSponsor.ctaText}
          </a>
          <button
            onClick={() => setIsMediaKitOpen(true)}
            className="text-xs text-lux-text-muted hover:text-lux-gold transition-colors font-mono"
          >
            Mídia Kit
          </button>
        </div>
      </div>

      <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
    </>
  );
}
