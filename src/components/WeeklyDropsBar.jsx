import React, { useState, useEffect } from 'react';
import { TrendingUp, Radio, ArrowUpRight, DollarSign, Award, Bell } from 'lucide-react';
import { WEEKLY_DROPS } from '../data/mockData';
import { fetchWeeklyDrops } from '../services/radarService';

export default function WeeklyDropsBar({ onSelectDrop }) {
  const [drops, setDrops] = useState(WEEKLY_DROPS);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const data = await fetchWeeklyDrops();
      if (isMounted && data && data.length > 0) {
        setDrops(data);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="bg-white/80 dark:bg-lux-bg-cardDark/80 border-b border-lux-border-light dark:border-lux-border-dark py-4 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ticker Bar Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-lux-emerald animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-lux-text-primary dark:text-lux-text-darkPrimary">
              DROPS & ÍNDICES DA SEMANA
            </span>
          </div>
          <span className="text-[10px] text-lux-gold uppercase tracking-wider font-semibold">
            Radar Market Feed
          </span>
        </div>

        {/* Responsive Grid of Drops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {drops.map((drop) => (
            <div
              key={drop.id}
              onClick={() => onSelectDrop && onSelectDrop(drop)}
              className="group cursor-pointer p-3.5 rounded bg-lux-bg-light/80 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark hover:border-lux-gold/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-lux-text-muted">
                    {drop.type}
                  </span>
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-lux-gold/15 text-lux-gold-dark dark:text-lux-gold">
                    {drop.tag}
                  </span>
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-semibold text-lux-text-primary dark:text-lux-text-darkPrimary line-clamp-1 group-hover:text-lux-gold transition-colors">
                  {drop.title}
                </h4>
              </div>

              <div className="mt-2.5 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px]">
                <span className="font-medium text-lux-emerald text-[11px] truncate mr-1">
                  {drop.val}
                </span>
                <ArrowUpRight className="w-3 h-3 text-lux-text-muted group-hover:text-lux-gold flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
