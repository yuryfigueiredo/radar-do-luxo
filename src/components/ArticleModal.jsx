import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle2, Share2, Bookmark, ArrowLeft, Shield, ExternalLink, Sparkles } from 'lucide-react';

export default function ArticleModal({ article, onClose, onSelectAnother }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target;
      if (container) {
        const totalHeight = container.scrollHeight - container.clientHeight;
        const progress = (container.scrollTop / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    const container = document.getElementById('article-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 lg:p-6 overflow-hidden">
      
      {/* Top 1px Golden Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">
        <div 
          className="h-full bg-lux-gold transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div 
        id="article-scroll-container"
        className="relative w-full max-w-5xl h-full sm:h-[94vh] bg-lux-bg-light dark:bg-lux-bg-dark rounded-t-xl sm:rounded-lg border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-y-auto"
      >
        {/* Sticky Header Nav in Article */}
        <div className="sticky top-0 z-40 bg-lux-bg-light/95 dark:bg-lux-bg-dark/95 backdrop-blur-md border-b border-lux-border-light dark:border-lux-border-dark px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lux-text-secondary dark:text-lux-text-darkSecondary hover:text-lux-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Capa</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-lux-text-muted hidden sm:inline">Progresso: {Math.round(scrollProgress)}%</span>
            <button
              onClick={onClose}
              aria-label="Fechar artigo"
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-10 lg:p-14 max-w-4xl mx-auto">
          
          {/* Metadata & Tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-lux-gold bg-lux-gold/10 px-2.5 py-1 rounded">
              {article.category}
            </span>
            <span className="text-xs text-lux-text-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-lux-text-primary dark:text-lux-text-darkPrimary mb-6">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-lg sm:text-xl text-lux-text-secondary dark:text-lux-text-darkSecondary font-light leading-relaxed mb-8 italic">
            "{article.excerpt}"
          </p>

          {/* Author Bar */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-lux-border-light dark:border-lux-border-dark">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-lux-gold/20 flex items-center justify-center font-serif font-bold text-lux-gold">
                RL
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-semibold text-sm">
                  <span>{article.author?.name || article.author || 'Redação Radar do Luxo'}</span>
                  <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
                </div>
                <span className="text-xs text-lux-text-muted">Correspondente de Alta Classe</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => alert('Link copiado para a área de transferência')}
                className="p-2 rounded-full border border-lux-border-light dark:border-lux-border-dark hover:text-lux-gold transition-colors"
                title="Compartilhar"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Article Image */}
          <div className="aspect-[16/9] rounded-sm overflow-hidden mb-10 bg-black/10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Split Reading Layout: Text + Sticky Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Reading Flow (8 Cols) */}
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed text-lux-text-primary/90 dark:text-lux-text-darkPrimary/90 font-light">
              
              {/* Drop Cap First Paragraph */}
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:text-lux-gold first-letter:leading-none">
                No universo do luxo silencioso, cada detalhe é fruto de centenas de horas de engenharia manual e de um respeito intransigente pelas tradições que moldaram séculos de savoir-faire. A peça em destaque representa não apenas um avanço tecnológico memorável, mas também uma declaração estética para colecionadores que buscam autenticidade pura.
              </p>

              <p>
                Ao contrário das produções em escala industrial, a concepção desta obra exigiu fornecedores com mais de duas décadas de especialização em ligas nobres e tratamento térmico especial. Cada acabamento chanfrado foi polido à mão, conferindo um reflexo de luz incomparável sob qualquer ângulo.
              </p>

              {/* IN-ARTICLE RADAR DROP RECOMMENDATION CARD (The requested feature!) */}
              <div className="my-8 p-5 sm:p-6 rounded bg-lux-bg-light/80 dark:bg-black/40 border-l-4 border-l-lux-gold border border-lux-border-light dark:border-lux-border-dark shadow-sm">
                <div className="flex items-center gap-2 text-lux-gold font-bold text-[10px] uppercase tracking-widest mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EM DESTAQUE NO RADAR RELACIONADO</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-lux-text-primary dark:text-lux-text-darkPrimary mb-2">
                  Rolex Daytona 'Paul Newman' e a Valorização dos Cronógrafos Raros
                </h4>
                <p className="text-xs sm:text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary mb-4 font-light">
                  Entenda como o leilão mais recente da Sotheby's estabeleceu uma nova métrica para peças com mostrador exótico.
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-black/5 dark:border-white/5">
                  <span className="text-lux-emerald font-semibold">Valor Histórico: US$ 4.85M</span>
                  <span className="text-lux-gold font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                    Ver Análise Completa <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="my-8 pl-6 border-l-2 border-lux-gold italic font-serif text-xl sm:text-2xl text-lux-text-primary dark:text-white">
                "O verdadeiro luxo não busca aprovação efêmera; ele é construído para permanecer relevante e intocado pelas décadas."
              </blockquote>

              <p>
                Para o mercado brasileiro e internacional, a alocação de unidades segue critérios rigorosos de relacionamento com a manufatura. Ter uma cota nesta safra significa ter em mãos um ativo de preservação de valor e herança familiar.
              </p>
            </div>

            {/* Sticky Sidebar Specs Card (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-5 rounded bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-lux sticky top-24">
                <span className="text-[10px] font-bold uppercase tracking-widest text-lux-gold block mb-1">
                  FICHA TÉCNICA DO RADAR
                </span>
                <h3 className="font-serif text-base font-bold mb-4 pb-3 border-b border-lux-border-light dark:border-lux-border-dark">
                  Especificações do Item
                </h3>

                <dl className="space-y-3 text-xs">
                  <div>
                    <dt className="text-lux-text-muted text-[10px] uppercase">Valoração Estimada</dt>
                    <dd className="font-bold text-lux-gold text-sm mt-0.5">{article.price || 'Sob Consulta Confidencial'}</dd>
                  </div>
                  <div className="border-t border-black/5 dark:border-white/5 pt-2">
                    <dt className="text-lux-text-muted text-[10px] uppercase">Procedência</dt>
                    <dd className="font-medium mt-0.5">Suíça / Itália / Manufatura Original</dd>
                  </div>
                  <div className="border-t border-black/5 dark:border-white/5 pt-2">
                    <dt className="text-lux-text-muted text-[10px] uppercase">Disponibilidade</dt>
                    <dd className="font-medium text-lux-emerald mt-0.5 flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Alocação Concierge Radar
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-4 border-t border-lux-border-light dark:border-lux-border-dark">
                  <button 
                    onClick={() => alert('Solicitação de contato com concierge enviada')}
                    className="w-full py-2.5 px-4 rounded bg-lux-gold text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Consultar Concierge VIP
                  </button>
                </div>
              </div>
            </aside>

          </div>

        </div>

      </div>
    </div>
  );
}
