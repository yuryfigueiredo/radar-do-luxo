import React from 'react';
import HeroSection from '../components/HeroSection';
import WeeklyDropsBar from '../components/WeeklyDropsBar';
import FilmstripReel from '../components/FilmstripReel';
import FeedSection from '../components/FeedSection';
import NewsletterSection from '../components/NewsletterSection';
import AdSenseSlot from '../components/AdSenseSlot';

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

      {/* 5. Quiet Luxury Maison Showcase / Billboard Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-4">
        <AdSenseSlot
          format="billboard"
          slot="1029384756"
          priorityIndex={4}
        />
      </div>

      {/* 6. Newsletter VIP / Radar Privado */}
      <NewsletterSection />
    </div>
  );
}
