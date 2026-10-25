import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, MessageSquare, CheckCircle2, ArrowRight, Phone, Mail, User } from 'lucide-react';
import { submitConciergeInquiry } from '../services/radarService';

export default function ConciergeModal({ isOpen, onClose, article }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setIsSuccess(false);
      setErrorMsg('');
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const result = await submitConciergeInquiry({
        name,
        phone,
        email,
        articleTitle: article ? article.title : 'Consulta Geral',
        articleSlug: article ? article.slug : null,
        message
      });

      if (result.success) {
        setIsSuccess(true);

        // Build WhatsApp notification URL
        const whatsappNumber = import.meta.env.VITE_CONCIERGE_WHATSAPP || '5511999999999';
        const itemInfo = article ? `\n• Item de interesse: ${article.title}` : '';
        const msgText = encodeURIComponent(
          `*SOLICITAÇÃO CONCIERGE VIP — RADAR DO LUXO*\n\n` +
          `• Nome: ${name}\n` +
          `• Contato: ${phone}\n` +
          (email ? `• E-mail: ${email}\n` : '') +
          `${itemInfo}\n` +
          (message ? `• Mensagem: ${message}` : '')
        );

        const waUrl = `https://wa.me/${whatsappNumber}?text=${msgText}`;

        // Open WhatsApp after brief moment
        setTimeout(() => {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        }, 1200);
      } else {
        setErrorMsg(result.error || 'Falha ao processar solicitação.');
      }
    } catch (err) {
      setErrorMsg('Ocorreu um erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-lux-bg-cardDark rounded-xl border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Golden Accent Top Line */}
        <div className="h-1 bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center gap-2 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
            <ShieldCheck className="w-4 h-4 text-lux-gold" />
            <span>MESA DE ALOCAÇÃO PRIVADA</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-lux-text-primary dark:text-lux-text-darkPrimary mb-2">
            Consultar Concierge VIP
          </h3>

          <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed mb-6">
            Assessoria de alta confidencialidade para alocação de cotas, leilões fechados e reservas exclusivas.
          </p>

          {/* Context Item Pill (if inquiring from a specific article) */}
          {article && (
            <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-lux-border-light dark:border-lux-border-dark mb-6 flex items-center gap-3">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-12 h-12 rounded object-cover flex-shrink-0"
                />
              )}
              <div className="min-w-0 flex-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-lux-gold block">
                  {article.category}
                </span>
                <p className="font-serif text-xs font-semibold text-lux-text-primary dark:text-lux-text-darkPrimary truncate">
                  {article.title}
                </p>
                {article.specs?.valor && (
                  <span className="text-[11px] text-lux-text-muted block">
                    Cotação: {article.specs.valor}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Success State */}
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-lux-emerald/10 border border-lux-emerald/30 text-lux-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-lux-text-primary dark:text-lux-text-darkPrimary">
                Solicitação Homologada com Sucesso
              </h4>
              <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary max-w-sm mx-auto leading-relaxed">
                Registramos seus dados sob protocolo de sigilo. Redirecionando para o canal direto do WhatsApp VIP...
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-500 text-xs">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-lux-text-muted absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Dr. Roberto Alencar"
                    className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg pl-9 pr-4 py-2.5 text-xs text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                    WhatsApp com DDD *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-lux-text-muted absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+55 11 99999-9999"
                      className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg pl-9 pr-4 py-2.5 text-xs text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                    E-mail de Contato
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-lux-text-muted absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@empresa.com"
                      className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg pl-9 pr-4 py-2.5 text-xs text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Observações ou Preferência de Contato (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Tenho interesse em consultar a procedência ou agendar inspeção presencial..."
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-3 text-xs text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-lux-text-primary dark:bg-lux-gold text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isSubmitting ? 'Homologando...' : 'Solicitar Atendimento VIP & Abrir WhatsApp'}</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-lux-text-muted leading-tight">
                🔒 Seus dados são protegidos por rigoroso acordo de confidencialidade (NDA).
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
