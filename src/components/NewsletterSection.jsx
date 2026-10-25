import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Lock, Loader2 } from 'lucide-react';
import { subscribeNewsletter } from '../services/radarService';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setErrorMsg('');

    try {
      const result = await subscribeNewsletter(email);
      if (result.success) {
        setSubscribed(true);
        setFeedbackMsg(result.message || 'Inscrição Confirmada! Bem-vindo ao Radar Privado.');
        setEmail('');
      } else {
        setErrorMsg(result.error || 'Não foi possível cadastrar seu e-mail.');
      }
    } catch (err) {
      setErrorMsg('Ocorreu um erro de comunicação. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-lux-bg-light dark:bg-lux-bg-dark border-t border-lux-border-light dark:border-lux-border-dark transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-xl bg-[#141418] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden text-center">
          
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-lux-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lux-gold block mb-3">
              O RADAR PRIVADO • CURADORIA POR E-MAIL
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Receba os Drops Antes do Mercado Global
            </h3>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
              Toda quinta-feira, uma seleção com as peças mais raras, leilões fechados e tendências de arquitetura diretamente na sua caixa de entrada. Sem spam.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-lux-emerald/10 border border-lux-emerald/30 text-lux-emerald flex items-center justify-center gap-2 text-sm font-semibold animate-in zoom-in-95">
                <Check className="w-5 h-5 text-lux-emerald" />
                <span>{feedbackMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail privado"
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-lux-gold transition-colors disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-3 px-6 rounded-lg bg-lux-gold text-black font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50 shadow-md"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Cadastrando...</span>
                    </>
                  ) : (
                    <>
                      <span>Assinar Radar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {errorMsg && (
              <p className="mt-3 text-xs text-red-400 font-medium">
                {errorMsg}
              </p>
            )}

            <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-white/40 font-light">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-lux-gold" /> Protocolo Criptografado
              </span>
              <span>•</span>
              <span>Membros VIP Registrados: 24.800+</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
