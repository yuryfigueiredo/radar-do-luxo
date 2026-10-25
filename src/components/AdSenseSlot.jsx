import React, { useEffect } from 'react';

/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — COMPONENTE NATIVO DE ANÚNCIOS GOOGLE ADSENSE
 * ==============================================================================
 * Formatos suportados:
 * - 'in-article': Banner horizontal sutil entre os parágrafos 2 e 3 da matéria.
 * - 'sidebar': Anúncio vertical (300x250 ou 300x600) na barra lateral de leitura.
 * - 'feed': Card nativo integrado ao grid da Home com a mesma estética do Radar.
 * - 'leaderboard': Faixa horizontal elegante antes do rodapé.
 *
 * Enquanto a conta do AdSense estiver em aprovação ou se VITE_ADSENSE_CLIENT não
 * estiver configurado, exibe um placeholder editorial luxuoso discreto ou oculta.
 * ==============================================================================
 */
export default function AdSenseSlot({
  slot = '',
  format = 'in-article', // 'in-article' | 'sidebar' | 'feed' | 'leaderboard'
  className = '',
  showPlaceholderInDev = true
}) {
  const adClient = import.meta.env.VITE_ADSENSE_CLIENT || ''; // Ex: 'ca-pub-1234567890123456'
  const isProduction = import.meta.env.PROD && Boolean(adClient) && Boolean(slot);

  useEffect(() => {
    if (isProduction) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.warn('AdSense slot error:', err);
      }
    }
  }, [isProduction, slot]);

  // Se estiver em produção com chaves ativas do AdSense, renderiza o código oficial do Google
  if (isProduction) {
    if (format === 'in-article') {
      return (
        <div className={`my-8 py-3 px-4 rounded-xl bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark overflow-hidden text-center ${className}`}>
          <span className="text-[9px] uppercase tracking-[0.2em] text-lux-text-muted block mb-2 font-mono">
            Publicidade Institucional
          </span>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={adClient}
            data-ad-slot={slot}
          />
        </div>
      );
    }

    if (format === 'sidebar') {
      return (
        <div className={`p-4 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark overflow-hidden text-center ${className}`}>
          <span className="text-[9px] uppercase tracking-[0.2em] text-lux-text-muted block mb-2 font-mono">
            Patrocínio do Radar
          </span>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={adClient}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      );
    }

    return (
      <div className={`my-6 text-center ${className}`}>
        <span className="text-[9px] uppercase tracking-[0.2em] text-lux-text-muted block mb-1 font-mono">
          Publicidade
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Se não estiver em produção ou se o AdSense ainda não foi homologado pelo Google:
  // Renderiza um espaço de prestígio sutil que preserva a harmonia visual do Radar
  if (!showPlaceholderInDev) return null;

  if (format === 'in-article') {
    return (
      <div className={`my-8 p-5 rounded-xl bg-gradient-to-r from-lux-gold/5 via-black/5 dark:via-black/30 to-lux-gold/5 border border-dashed border-lux-gold/30 text-center ${className}`}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-lux-gold animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-lux-gold font-bold">
            ESPAÇO RESERVADO PARA PATROCINADOR MASTER • GOOGLE ADSENSE
          </span>
        </div>
        <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary font-serif italic max-w-lg mx-auto">
          "Alocação nativa de alta visibilidade entre os parágrafos 2 e 3 da matéria. O formato ideal para leiloeiras internacionais, marcas de alta relojoaria e corretoras de megaiates."
        </p>
      </div>
    );
  }

  if (format === 'sidebar') {
    return (
      <div className={`p-6 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-dashed border-lux-gold/30 text-center space-y-2 ${className}`}>
        <span className="text-[9px] uppercase tracking-[0.2em] text-lux-gold font-bold block">
          BANNER LATERAL • 300x250 / 300x600
        </span>
        <div className="h-32 rounded-lg bg-black/5 dark:bg-black/30 flex items-center justify-center text-[10px] text-lux-text-muted font-mono">
          Google AdSense Display Responsivo
        </div>
        <span className="text-[10px] text-lux-text-muted block">
          Acompanha o leitor na rolagem da matéria
        </span>
      </div>
    );
  }

  return (
    <div className={`my-6 p-4 rounded-xl border border-dashed border-lux-border-light dark:border-lux-border-dark text-center text-xs text-lux-text-muted ${className}`}>
      <span className="text-[9px] uppercase tracking-wider block font-bold text-lux-gold mb-1">
        Slot AdSense Homologado ({format})
      </span>
      <span>Aparecerá automaticamente quando seu ID AdSense for ativado.</span>
    </div>
  );
}
