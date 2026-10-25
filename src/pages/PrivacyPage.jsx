import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lux-gold/10 border border-lux-gold/30 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>GOVERNANÇA & CONFORMIDADE • LGPD / GDPR</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-lux-text-primary dark:text-white">
          Política de Privacidade e Cookies
        </h1>
        <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light max-w-xl mx-auto">
          Nosso compromisso inegociável com a discrição, o sigilo bancário e a privacidade dos membros e leitores do Radar do Luxo.
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-white dark:bg-lux-bg-cardDark rounded-2xl border border-lux-border-light dark:border-lux-border-dark p-8 sm:p-10 shadow-lux space-y-8 text-xs sm:text-sm leading-relaxed text-lux-text-secondary dark:text-lux-text-darkSecondary">
        
        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-lux-gold" />
            <span>1. Princípio da Discrição e Coleta Mínima</span>
          </h2>
          <p>
            O <strong>Radar do Luxo</strong> opera sob a premissa de que a privacidade é o ativo mais valioso do alto patrimônio. Coletamos apenas as informações estritamente necessárias para a prestação dos serviços do site, tais como endereço de e-mail (para envio do Radar Privado semanal) e dados de contato informados voluntariamente no formulário do Concierge VIP.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-lux-gold" />
            <span>2. Uso de Cookies e Tecnologias de Análise</span>
          </h2>
          <p>
            Utilizamos cookies para aprimorar sua experiência de navegação, lembrar suas preferências de visualização (como o tema escuro/claro) e analisar anonimamente o tráfego de leitores nas editorias de Supercarros, Alta Relojoaria, Arquitetura, Alta-Costura e Iates.
          </p>
          <p>
            Você pode, a qualquer momento, desativar ou gerenciar os cookies por meio das configurações de privacidade de seu navegador web.
          </p>
        </section>

        <section className="space-y-3 p-5 rounded-xl bg-lux-gold/5 border border-lux-gold/20">
          <h2 className="font-serif text-base font-bold text-lux-text-primary dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-lux-gold" />
            <span>3. Publicidade Programática e Google AdSense</span>
          </h2>
          <p className="text-xs">
            Este site pode veicular anúncios fornecidos pelo <strong>Google AdSense</strong> e suas redes parceiras de publicidade certificada. O Google, como fornecedor terceiro, utiliza cookies (incluindo o cookie DART) para veicular anúncios com base nas visitas anteriores dos usuários a este ou a outros sites na internet.
          </p>
          <p className="text-xs">
            Os usuários podem desativar a publicidade personalizada acessando as <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-lux-gold underline font-semibold">Configurações de Anúncios do Google</a> ou visitando o site <a href="https://aboutads.info" target="_blank" rel="noreferrer" className="text-lux-gold underline font-semibold">www.aboutads.info</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white">
            4. Sigilo do Concierge e Mesa de Alocação Privada
          </h2>
          <p>
            As mensagens enviadas à nossa mesa de Concierge referente à consulta ou aquisição de peças de leilão, iates e hipercarros são tratadas sob rigoroso sigilo profissional. Não vendemos, alugamos ou compartilhamos dados de contato de membros cadastrados com corretores ou terceiros não autorizados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white">
            5. Direitos do Titular (LGPD e GDPR)
          </h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e com o Regulamento Geral de Proteção de Dados da União Europeia (GDPR), você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos seus dados pessoais ou a exclusão imediata de seu e-mail de nossas listas de newsletter a qualquer momento.
          </p>
        </section>

        <div className="pt-6 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs text-lux-text-muted">
          <span>Última atualização: Outubro de 2026</span>
          <Link to="/" className="text-lux-gold hover:underline flex items-center gap-1 font-semibold">
            <span>Voltar ao Radar do Luxo</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
