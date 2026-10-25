import React, { useEffect, useState } from 'react';
import { ExternalLink, Sparkles, Shield, ChevronRight, Info, Eye, Layers } from 'lucide-react';
import { LUXURY_SPONSORS, getSponsorForCategory } from '../data/sponsorsData';
import MediaKitModal from './MediaKitModal';
import { trackEvent } from '../services/analyticsService';

/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — COMPONENTE DE ANÚNCIOS QUIET LUXURY & GOOGLE ADSENSE
 * ==============================================================================
 * Modos de Operação:
 * 1. MODO PRODUÇÃO REAL:
 *    Quando import.meta.env.VITE_ADSENSE_CLIENT estiver configurado com a conta
 *    aprovada do Google, renderiza o código oficial <ins className="adsbygoogle" />.
 * 
 * 2. MODO PRÉ-VISUALIZAÇÃO DE SLOTS ("OS QUADRADINHOS DO ADSENSE"):
 *    Exibe com fidelidade cirúrgica as dimensões oficiais do Google AdSense
 *    (300x600, 300x250, 728x90, In-Article Fluido e Native In-Feed) com os
 *    indicadores oficiais do Google ("Anúncios Google", "AdChoices").
 * 
 * 3. MODO PATROCÍNIO MAISON QUIET LUXURY:
 *    Alternável com 1 clique, exibe a curadoria refinada de marcas de prestígio
 *    (Patek Philippe, Riva, Bugatti, Sotheby's, Aman).
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
  // Por padrão, exibimos a visualização dos "quadradinhos" para conferência visual dos slots do AdSense
  const [viewMode, setViewMode] = useState('adsense-mock'); // 'adsense-mock' | 'maison'

  const adClient = import.meta.env.VITE_ADSENSE_CLIENT || import.meta.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';
  const isAdSenseActive = import.meta.env.PROD && Boolean(adClient) && Boolean(slot);

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
  // CASO 1: GOOGLE ADSENSE OFICIAL COM SCRIPT ATIVO EM PRODUÇÃO
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
  // CASO 2: MODO PRÉ-VISUALIZAÇÃO DE SLOTS ("OS QUADRADINHOS DO ADSENSE")
  // ============================================================================
  // Se o usuário selecionou 'adsense-mock', exibe a representação gráfica
  // das dimensões e formato do banner Google AdSense com chave de alternância.

  if (viewMode === 'adsense-mock') {
    // 1. IN-ARTICLE QUADRADINHO / RETÂNGULO FLUIDO
    if (format === 'in-article') {
      return (
        <div className={`my-10 p-5 rounded-xl bg-[#FBFBFA] dark:bg-[#161619] border-2 border-dashed border-lux-gold/40 text-center relative overflow-hidden shadow-lux transition-all ${className}`}>
          {/* Top Bar com Identificação do Google AdSense e Toggle */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/5 text-[10px]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold font-mono uppercase tracking-wider">
                Google AdSense • In-Article Fluido
              </span>
              <span className="text-lux-text-muted hidden sm:inline font-mono">
                Slot ID: {slot || '1234567890'}
              </span>
            </div>

            <button
              onClick={() => setViewMode('maison')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lux-gold/15 hover:bg-lux-gold text-lux-gold-dark hover:text-black dark:text-lux-gold dark:hover:text-black text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>Ver como Maison Quiet Luxury</span>
            </button>
          </div>

          {/* Área do Anúncio Simulado (Layout In-Article) */}
          <div className="py-6 px-4 bg-white dark:bg-[#1E1E23] rounded-lg border border-black/5 dark:border-white/10 max-w-xl mx-auto text-left relative">
            <div className="absolute top-2 right-2.5 flex items-center gap-1 text-[9px] text-gray-400 font-sans">
              <span>Anúncios Google</span>
              <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-[8px] font-serif">i</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-lux-gold/20 to-lux-gold/5 flex-shrink-0 flex items-center justify-center border border-lux-gold/20">
                <Sparkles className="w-8 h-8 text-lux-gold" />
              </div>

              <div className="flex-1 space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                  patrimonio-suico.ch/private-banking
                </span>
                <h4 className="font-serif text-base font-bold text-lux-text-primary dark:text-white leading-tight">
                  Custódia Internacional & Family Office em Genebra
                </h4>
                <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary line-clamp-2">
                  Gestão discricionária e alocação patrimonial soberana para famílias de alto patrimônio líquido.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[11px] font-semibold hover:bg-blue-700">
                    Visitar Site Oficial
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-lux-text-muted font-mono">
            <span>Dimensão: Responsivo Fluido (Auto-adaptável ao leitor)</span>
            <button onClick={() => setIsMediaKitOpen(true)} className="hover:text-lux-gold underline">
              Mídia Kit & Tabela de Valores
            </button>
          </div>

          <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
        </div>
      );
    }

    // 2. SIDEBAR QUADRADINHO (300x250 / 300x600)
    if (format === 'sidebar') {
      return (
        <div className={`p-5 rounded-xl bg-[#FBFBFA] dark:bg-[#161619] border-2 border-dashed border-lux-gold/40 text-center relative overflow-hidden shadow-lux space-y-4 ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold font-mono uppercase tracking-wider">
              AdSense • 300x600 / 300x250
            </span>
            <button
              onClick={() => setViewMode('maison')}
              className="text-lux-gold hover:underline font-bold text-[10px]"
            >
              Modo Maison ↔
            </button>
          </div>

          {/* Banner Box */}
          <div className="min-h-[300px] p-5 bg-white dark:bg-[#1E1E23] rounded-lg border border-black/5 dark:border-white/10 flex flex-col justify-between text-left relative">
            <div className="flex items-center justify-between text-[9px] text-gray-400">
              <span className="font-mono">DISPLAY RESPONSIVO</span>
              <div className="flex items-center gap-1">
                <span>Anúncios Google</span>
                <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-[8px]">i</span>
              </div>
            </div>

            <div className="my-auto text-center space-y-3 py-4">
              <div className="w-16 h-16 rounded-full bg-lux-gold/15 text-lux-gold mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono block">
                ad.sothebys.com/auctions
              </span>
              <h4 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white leading-snug">
                Sotheby's Genebra: Leilão de Joias Reais
              </h4>
              <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary">
                Lotes fechados e diamantes Type IIb sob protocolo suíço.
              </p>
              <button className="w-full py-2 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors">
                Participar do Pregão Privado
              </button>
            </div>

            <div className="pt-2 border-t border-black/5 dark:border-white/5 text-center text-[9px] text-lux-text-muted font-mono">
              Largura padrão: 300px (Desktop Sticky)
            </div>
          </div>

          <div className="text-center">
            <button onClick={() => setIsMediaKitOpen(true)} className="text-[10px] text-lux-text-muted hover:text-lux-gold underline">
              Consultar Mídia Kit do Radar
            </button>
          </div>

          <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
        </div>
      );
    }

    // 3. FEED NATIVE QUADRADINHO (Grid da Home)
    if (format === 'feed') {
      return (
        <article className={`group spotlight-card bg-[#FBFBFA] dark:bg-[#161619] rounded-lg border-2 border-dashed border-lux-gold/40 p-5 overflow-hidden shadow-lux flex flex-col justify-between transition-all ${className}`}>
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5 dark:border-white/5 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold font-mono uppercase tracking-wider">
                Google AdSense • Native In-Feed
              </span>
              <button
                onClick={() => setViewMode('maison')}
                className="text-lux-gold hover:underline font-bold text-[10px]"
              >
                Modo Maison ↔
              </button>
            </div>

            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white dark:bg-[#1E1E23] border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center p-4">
              <div className="absolute top-2 right-2 flex items-center gap-1 text-[8px] text-gray-400">
                <span>Anúncios Google</span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-400 flex items-center justify-center text-[7px]">i</span>
              </div>
              <Sparkles className="w-10 h-10 text-lux-gold mb-2" />
              <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                aviation-charter.ch
              </span>
              <h4 className="font-serif text-base font-bold text-lux-text-primary dark:text-white mt-1">
                Gulfstream G700 • Fretamento Privado
              </h4>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed">
                Rotas intercontinentais diretas sem escalas para clientes corporativos e Family Offices.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-lux-text-muted">
            <span className="font-mono text-[9px]">Card Integrado no Grid</span>
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="text-lux-gold hover:underline text-[11px] font-semibold"
            >
              Mídia Kit
            </button>
          </div>

          <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
        </article>
      );
    }

    // 4. BILLBOARD QUADRADINHO (970x250 ou 728x90)
    return (
      <div className={`my-8 p-5 rounded-xl bg-[#FBFBFA] dark:bg-[#161619] border-2 border-dashed border-lux-gold/40 text-center relative overflow-hidden shadow-lux ${className}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/5 dark:border-white/5 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold font-mono uppercase tracking-wider">
            Google AdSense • Super Leaderboard 728x90 / 970x250
          </span>
          <button
            onClick={() => setViewMode('maison')}
            className="text-lux-gold hover:underline font-bold text-[10px]"
          >
            Modo Maison ↔
          </button>
        </div>

        <div className="py-4 px-6 bg-white dark:bg-[#1E1E23] rounded-lg border border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lux-gold/15 text-lux-gold flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase font-bold text-blue-600 dark:text-blue-400">
                  yacht-charter.mc • Mônaco
                </span>
                <span className="text-[9px] text-gray-400">Anúncios Google ⓘ</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-lux-text-primary dark:text-white">
                Temporada de Megaiates no Mediterrâneo: Reserve seu Posto em Porto Cervo
              </h4>
            </div>
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors flex-shrink-0">
            Consultar Disponibilidade
          </button>
        </div>

        <MediaKitModal isOpen={isMediaKitOpen} onClose={() => setIsMediaKitOpen(false)} />
      </div>
    );
  }

  // ============================================================================
  // CASO 3: MODO PATROCÍNIO MAISON QUIET LUXURY (Campanhas Patek, Riva, Bugatti)
  // ============================================================================

  // 1. FORMATO: IN-ARTICLE MAISON
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode('adsense-mock')}
                className="text-[9px] text-amber-700 dark:text-amber-400 hover:underline font-mono font-bold"
              >
                [Ver Quadradinho AdSense]
              </button>
              <button
                onClick={() => setIsMediaKitOpen(true)}
                className="hover:text-lux-gold transition-colors flex items-center gap-1 text-[9px] font-mono lowercase"
              >
                <span>anuncie no radar</span>
                <ChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>
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

  // 2. FORMATO: SIDEBAR MAISON
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
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('adsense-mock')}
                className="text-amber-700 dark:text-amber-400 hover:underline font-mono"
              >
                [Quadradinho]
              </button>
              <button
                onClick={() => setIsMediaKitOpen(true)}
                className="hover:text-lux-gold transition-colors"
              >
                Mídia Kit
              </button>
            </div>
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

  // 3. FORMATO: FEED NATIVE MAISON
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
                onClick={() => setViewMode('adsense-mock')}
                className="text-[9px] text-amber-700 dark:text-amber-400 hover:underline font-mono"
              >
                [Ver Quadradinho]
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

  // 4. FORMATO: BILLBOARD MAISON
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
          <button
            onClick={() => setViewMode('adsense-mock')}
            className="text-[10px] text-amber-700 dark:text-amber-400 hover:underline font-mono"
          >
            [Ver Quadradinho]
          </button>
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
