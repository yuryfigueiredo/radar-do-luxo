import { track as vercelTrack } from '@vercel/analytics';

/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — MOTOR DE ANALYTICS & PROTEÇÃO DE TRÁFEGO INTERNO
 * ==============================================================================
 * Funcionalidades:
 * 1. MODO FUNDADOR / FILTRO DE CASA (Exclusão total de acessos do desenvolvedor/dono)
 *    - Seus acessos não gastam a cota da Vercel (2.500 eventos) nem inflam o GA4.
 *    - Ativação automática ao acessar /admin ou ao entrar via ?founder=1.
 * 2. DISPARO UNIFICADO: Vercel Analytics + Google Analytics 4 (gtag)
 * 3. ARQUITETURA SILENCIOSA: Zero quebra de layout caso rede ou bloqueadores ajam.
 * ==============================================================================
 */

export const FOUNDER_STORAGE_KEY = 'radar_founder_mode';

/**
 * Detecta se a requisição atual deve ser ignorada nas métricas
 */
export const isFounderOrInternal = () => {
  if (typeof window === 'undefined') return false;

  // 1. Ambiente de desenvolvimento local (Vite dev server)
  if (import.meta.env.DEV) return true;

  // 2. Host local ou loopback
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return true;

  // 3. Parâmetro na URL: ?founder=1 ou ?ignore_analytics=1
  try {
    const search = window.location.search;
    if (search.includes('founder=1') || search.includes('ignore_analytics=1')) {
      localStorage.setItem(FOUNDER_STORAGE_KEY, 'true');
      return true;
    }
  } catch (e) {}

  // 4. Acesso ao painel administrativo (/admin) ativa a proteção permanentemente
  try {
    if (window.location.pathname.startsWith('/admin')) {
      localStorage.setItem(FOUNDER_STORAGE_KEY, 'true');
      return true;
    }
  } catch (e) {}

  // 5. Flag gravada no LocalStorage do navegador do fundador
  try {
    return localStorage.getItem(FOUNDER_STORAGE_KEY) === 'true';
  } catch (e) {
    return false;
  }
};

/**
 * Ativa ou desativa o Modo Fundador manualmente
 */
export const setFounderMode = (enabled) => {
  try {
    if (enabled) {
      localStorage.setItem(FOUNDER_STORAGE_KEY, 'true');
    } else {
      localStorage.removeItem(FOUNDER_STORAGE_KEY);
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const isFounderModeActive = () => {
  try {
    return localStorage.getItem(FOUNDER_STORAGE_KEY) === 'true';
  } catch (e) {
    return false;
  }
};

/**
 * Rastreia eventos personalizados (ex: inscrição VIP, abertura de mídia kit)
 */
export const trackEvent = (eventName, properties = {}) => {
  // Se for o fundador ou ambiente local, ignora e protege a cota da Vercel
  if (isFounderOrInternal()) {
    if (import.meta.env.DEV) {
      console.log(`[Analytics] 🛡️ Ignorando evento (Modo Fundador / Tráfego Interno): ${eventName}`, properties);
    }
    return;
  }

  try {
    // 1. Vercel Analytics custom event
    if (typeof vercelTrack === 'function') {
      vercelTrack(eventName, properties);
    }

    // 2. Google Analytics 4 (gtag)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, properties);
    }
  } catch (err) {
    // Analytics failure should never break UI
  }
};

/**
 * Rastreia troca de páginas em Single Page Applications
 */
export const trackPageView = (path, title) => {
  if (isFounderOrInternal()) {
    if (import.meta.env.DEV) {
      console.log(`[Analytics] 🛡️ Ignorando page view (Modo Fundador): ${path}`);
    }
    return;
  }

  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || (typeof document !== 'undefined' ? document.title : ''),
      });
    }
  } catch (err) {
    // Silently continue
  }
};
