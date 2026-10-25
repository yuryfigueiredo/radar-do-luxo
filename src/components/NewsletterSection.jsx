import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Lock, Loader2, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';
import { subscribeNewsletter } from '../services/radarService';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [protocol, setProtocol] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        setSubscribedEmail(email.trim().toLowerCase());
        setProtocol(result.protocol || `RD-${Math.floor(100000 + Math.random() * 900000)}`);
        setEmail('');
      } else {
        setErrorMsg(result.error || 'Não foi possível cadastrar seu e-mail. Verifique a digitação.');
      }
    } catch (err) {
      setErrorMsg('Ocorreu uma oscilação de rede momentânea. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubscribed(false);
    setSubscribedEmail('');
    setProtocol('');
    setErrorMsg('');
  };

  return (
    <section className="py-16 sm:py-20 bg-lux-bg-light dark:bg-lux-bg-dark border-t border-lux-border-light dark:border-lux-border-dark transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl bg-[#141418] text-white p-8 sm:p-12 lg:p-16 border border-lux-gold/30 shadow-2xl overflow-hidden text-center">
          
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-lux-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 w-60 h-60 bg-lux-gold/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lux-gold block mb-3">
              O RADAR PRIVADO • CURADORIA POR E-MAIL
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Receba os Drops Antes do Mercado Global
            </h3>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
              Toda quinta-feira às 08h30, uma seleção confidencial com as peças mais raras, leilões fechados e tendências de arquitetura diretamente na sua caixa de entrada. Sem spam.
            </p>

            {subscribed ? (
              /* CARD DE CREDENCIAL VIP HOMOLOGADA (PADRÃO QUIET LUXURY) */
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-black/80 via-[#1A1A1E] to-black/80 border border-lux-gold/40 text-left shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-lux-gold/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-lux-emerald animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-lux-gold">
                      CREDENCIAL VIP HOMOLOGADA
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-lux-gold/90 font-semibold">
                    PROTOCOLO Nº {protocol}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-lux-emerald flex-shrink-0" />
                    <span>Bem-vindo ao Círculo Privado</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    O endereço <strong className="text-lux-gold font-semibold">{subscribedEmail}</strong> foi registrado com sucesso em nossos servidores de custódia editorial. 
                  </p>
                  <p className="text-xs text-white/60 font-light italic">
                    "O próximo despacho confidencial será entregue nesta quinta-feira às 08h30 com os 3 Drops Homologados da semana."
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-lux-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-[11px] text-lux-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lux-gold" />
                    <span>Curadoria: Henrique Vianna, Curador de Patrimônio</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-lux-gold hover:underline font-semibold"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Cadastrar outro e-mail</span>
                  </button>
                </div>
              </div>
            ) : (
              /* FORMULÁRIO RESPONSIVO (MODERN WEB GUIDANCE) */
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    id="vip-newsletter-email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    autoCorrect="off"
                    spellCheck="false"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail privado"
                    disabled={isLoading}
                    aria-label="Endereço de e-mail para receber a newsletter VIP"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-lux-gold transition-colors disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-3.5 px-6 rounded-xl bg-lux-gold text-black font-semibold text-xs uppercase tracking-wider hover:bg-lux-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50 shadow-md font-sans"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Homologando...</span>
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
              <p className="mt-3 text-xs text-red-400 font-medium animate-in fade-in" role="alert">
                {errorMsg}
              </p>
            )}

            <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-white/40 font-light">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-lux-gold" /> Protocolo Criptografado
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
