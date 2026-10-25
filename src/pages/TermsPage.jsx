import React from 'react';
import { FileText, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lux-gold/10 border border-lux-gold/30 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase">
          <FileText className="w-3.5 h-3.5" />
          <span>ESTATUTO EDITORIAL & CONTRATUAL</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-lux-text-primary dark:text-white">
          Termos de Uso e Condições Gerais
        </h1>
        <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary font-light max-w-xl mx-auto">
          Condições que regem o acesso, leitura e utilização dos conteúdos editoriais do Radar do Luxo.
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-white dark:bg-lux-bg-cardDark rounded-2xl border border-lux-border-light dark:border-lux-border-dark p-8 sm:p-10 shadow-lux space-y-8 text-xs sm:text-sm leading-relaxed text-lux-text-secondary dark:text-lux-text-darkSecondary">
        
        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-lux-gold" />
            <span>1. Natureza Informativa e Editorial</span>
          </h2>
          <p>
            O <strong>Radar do Luxo</strong> é uma publicação digital de jornalismo de prestígio, curadoria estética e inteligência de mercado focada em bens de alto valor agregado (hipercarros, relógios suíços, obras de arte, arquitetura brutalista e iates).
          </p>
          <p>
            As análises financeiras, cotações de leilões e estimativas de valorização publicadas refletem o mercado secundário de colecionismo e não constituem recomendação formal de investimento imobiliário ou mobiliário.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white">
            2. Propriedade Intelectual e Acervo
          </h2>
          <p>
            Todos os textos, ensaios editoriais, ganchos magnéticos, fichas técnicas formatadas, marcas, logotipos e layouts pertencem ao Radar do Luxo Media Group ou aos seus respectivos licenciantes e autores credenciados. É vedada a reprodução total ou parcial sem prévia citação da fonte homologada.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white">
            3. Relação com Casas Leiloeiras e Manufaturas
          </h2>
          <p>
            Menções a marcas como Ferrari, Bugatti, Patek Philippe, Hermès, Riva, RM Sotheby's, Christie's ou Phillips possuem propósito estritamente jornalístico e de auditoria de mercado. O Radar do Luxo preserva sua total independência editorial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-lux-text-primary dark:text-white">
            4. Mesa de Concierge e Consultoria
          </h2>
          <p>
            O serviço de Concierge do Radar atua como facilitador de contato entre colecionadores qualificados e casas credenciadas. Quaisquer transações finais de arremate ou compra são realizadas diretamente entre o adquirente e a casa leiloeira ou concessionária homologada.
          </p>
        </section>

        <div className="pt-6 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs text-lux-text-muted">
          <span>Edição homologada: 2026</span>
          <Link to="/" className="text-lux-gold hover:underline flex items-center gap-1 font-semibold">
            <span>Voltar ao Radar do Luxo</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
