import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Mail, Sparkles, Building2, TrendingUp, Compass, Award } from 'lucide-react';
import { MEDIA_KIT_DATA } from '../data/sponsorsData';

export default function MediaKitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#141417] border border-lux-gold/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-black via-[#19191D] to-black text-white border-b border-lux-gold/20">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-lux-gold" />
              <span>RADAR DO LUXO • COMITÊ DE PARCERIAS INSTITUCIONAIS</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Mídia Kit & Alocações Quiet Luxury
            </h2>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl">
              Nossa filosofia recusa terminantemente a publicidade invasiva ou de varejo massificado. As alocações no Radar do Luxo são tratadas como chancelas curatoriais junto a uma das audiências de maior liquidez da América Latina e Europa.
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Audience Metrics Grid */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-lux-gold block mb-3">
                PERFIL DA AUDIÊNCIA HOMOLOGADA
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-lux-bg-light dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark">
                  <div className="flex items-center gap-1.5 text-lux-gold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Leitores HNWI</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-lux-text-primary dark:text-white">
                    {MEDIA_KIT_DATA.audience.monthlyHNWI}
                  </div>
                  <span className="text-[10px] text-lux-text-muted">Acessos mensais qualificados</span>
                </div>

                <div className="p-3.5 rounded-xl bg-lux-bg-light dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark">
                  <div className="flex items-center gap-1.5 text-lux-gold mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Patrimônio Médio</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-lux-text-primary dark:text-white">
                    {MEDIA_KIT_DATA.audience.avgNetWorth}
                  </div>
                  <span className="text-[10px] text-lux-text-muted">Alta liquidez e poder decisório</span>
                </div>

                <div className="p-3.5 rounded-xl bg-lux-bg-light dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-lux-gold mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Family Offices</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-lux-text-primary dark:text-white">
                    {MEDIA_KIT_DATA.audience.familyOfficesReach}
                  </div>
                  <span className="text-[10px] text-lux-text-muted">No Brasil, Suíça e UK</span>
                </div>
              </div>
            </div>

            {/* Principles of Quiet Luxury Ads */}
            <div className="p-4 rounded-xl bg-lux-gold/5 border border-lux-gold/20 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lux-gold">
                <ShieldCheck className="w-4 h-4" />
                <span>Nossos Pilares de Elegância Editorial</span>
              </div>
              <ul className="space-y-2 text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed">
                {MEDIA_KIT_DATA.principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lux-gold mt-1.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formats Supported */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-lux-gold block mb-3">
                FORMATOS DISPONÍVEIS PARA MAISONS
              </span>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg border border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
                  <div>
                    <span className="font-semibold block text-lux-text-primary dark:text-white">In-Article Maison Showcase</span>
                    <span className="text-[11px] text-lux-text-muted">Integração horizontal panorâmica entre parágrafos de alta leitura.</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-lux-gold font-bold">Premium</span>
                </div>

                <div className="p-3 rounded-lg border border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
                  <div>
                    <span className="font-semibold block text-lux-text-primary dark:text-white">Sticky Half-Page Sidebar</span>
                    <span className="text-[11px] text-lux-text-muted">Coluna lateral com alta permanência visual durante a leitura da matéria.</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-lux-gold font-bold">300x600</span>
                </div>

                <div className="p-3 rounded-lg border border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
                  <div>
                    <span className="font-semibold block text-lux-text-primary dark:text-white">Native Feed Feature Card</span>
                    <span className="text-[11px] text-lux-text-muted">Card editorial de capa posicionado harmoniosamente no grid do acervo.</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-lux-gold font-bold">Editorial</span>
                </div>
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-lux-text-muted block">Canal Direto de Patrocínios:</span>
                <a
                  href="mailto:comercial@radardoluxo.com.br"
                  className="text-sm font-semibold text-lux-gold hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>comercial@radardoluxo.com.br</span>
                </a>
              </div>

              <a
                href="mailto:comercial@radardoluxo.com.br?subject=Solicitacao%20de%20Midia%20Kit%20-%20Radar%20do%20Luxo"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-lux-gold hover:bg-lux-gold-light text-black text-xs font-bold uppercase tracking-wider transition-colors text-center shadow"
              >
                Solicitar Tabela de Alocações
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
