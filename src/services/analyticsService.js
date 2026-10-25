import { track as vercelTrack } from '@vercel/analytics';

/**
 * Radar do Luxo — Unified Analytics Service
 * Dispatches events to Vercel Analytics and Google Analytics 4 (if configured)
 * Zero-dependency, silent-fail architecture to preserve site speed and privacy.
 */

export const trackEvent = (eventName, properties = {}) => {
  try {
    // 1. Vercel Analytics custom event
    if (typeof vercelTrack === 'function') {
      vercelTrack(eventName, properties);
    }

    // 2. Google Analytics 4 (gtag)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, properties);
    }

    // 3. Dev log
    if (import.meta.env.DEV) {
      console.log(`[Analytics] 📊 Event: ${eventName}`, properties);
    }
  } catch (err) {
    // Analytics failure should never break UI
    if (import.meta.env.DEV) {
      console.warn('[Analytics Error]', err);
    }
  }
};

export const trackPageView = (path, title) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || (typeof document !== 'undefined' ? document.title : ''),
      });
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[Analytics PageView Error]', err);
    }
  }
};
