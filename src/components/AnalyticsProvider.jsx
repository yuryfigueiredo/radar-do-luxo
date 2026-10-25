import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { trackPageView } from '../services/analyticsService';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function AnalyticsProvider() {
  const location = useLocation();

  // 1. Google Analytics 4 Script Injection (Only if ID is provided)
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

    // Check if script already injected
    if (document.getElementById('ga4-script')) return;

    try {
      const script = document.createElement('script');
      script.id = 'ga4-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // Managed manually via route listener below
      });
    } catch (e) {
      console.warn('[GA4 Init Error]', e);
    }
  }, []);

  // 2. Track Single Page Application (SPA) Route Changes
  useEffect(() => {
    const currentPath = location.pathname + location.search;
    trackPageView(currentPath, document.title);
  }, [location]);

  return (
    <>
      {/* Vercel Web Analytics (Visits, Top Pages, Traffic Sources) */}
      <Analytics />
      {/* Vercel Speed Insights (Real User Core Web Vitals: LCP, INP, CLS) */}
      <SpeedInsights />
    </>
  );
}
