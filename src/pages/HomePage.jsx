import React from 'react';
import HeroSection from '../components/HeroSection';
import WeeklyDropsBar from '../components/WeeklyDropsBar';
import FilmstripReel from '../components/FilmstripReel';
import FeedSection from '../components/FeedSection';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage({ onQuickView }) {
  return (
    <div>
      {/* 1. Hero Section: The Cover Story of the Edition (Directly below Header) */}
      <HeroSection />

      {/* 2. Weekly Drops & Market Ticker Bar */}
      <WeeklyDropsBar
        onSelectDrop={(drop) =>
          onQuickView &&
          onQuickView({
            ...drop,
            category: drop.type,
            image:
              'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
            excerpt: `${drop.title}: ${drop.val}. Item catalogado pelo Radar com protocolo de verificação de autenticidade.`
          })
        }
      />

      {/* 3. Filmstrip Reel: Curated Discovery Rail */}
      <FilmstripReel onSelectItem={onQuickView} />

      {/* 4. Feed Section with FLIP Category Filter Animations */}
      <FeedSection onQuickView={onQuickView} />

      {/* 5. Newsletter VIP / Radar Privado */}
      <NewsletterSection />
    </div>
  );
}
