# 💎 RADAR DO LUXO — BLUEPRINT MESTRE DO PROJETO (SSOT)
**Versão:** 2.3.0  
**Data de Atualização:** 25/10/2026  
**Status:** Produção Ativa & Homologada (`https://www.radardoluxo.com.br`)  
**Repositório Oficial:** `https://github.com/yuryfigueiredo/radar-do-luxo`  
**Localização:** `C:\Users\Yury\Documents\Projetos Yury\Site radardoluxo\RADAR_DO_LUXO_BLUEPRINT.md`

---

## 1. Visão Geral & Posicionamento

### 1.1 O Que É o "Radar do Luxo"?
O **Radar do Luxo** é uma plataforma digital híbrida que une **Revista Digital de Alto Padrão (*Digital Luxury Magazine*)** com um **Hub de Curadoria de Tendências em Tempo Real (*Trend Watch / Curated Showcase*)**.

A plataforma monitora, filtra e apresenta o ápice mundial em:
* **Alta Relojoaria** (Rolex, Patek Philippe, Audemars Piguet, Richard Mille, peças de leilão).
* **Supercarros & Hipercarros** (Ferrari, Porsche, Aston Martin, novidades conceituais).
* **Arquitetura & Casas dos Sonhos** (residências premiadas, vilas exclusivas, design de interiores).
* **Alta-Costura & Estilo** (Hermès, alfaiataria bespoke, couro artesanal, acessórios atemporais).
* **Destinos Secretos & Hospitalidade** (resorts de ultra-luxo, chalés nos Alpes, iates privados).

### 1.2 O Posicionamento de Mercado: O "Novo Luxo"
O projeto não segue o caminho dos blogs comuns, nem o estilo caótico/psicodélico de fanzines de arte experimental. O Radar do Luxo se posiciona no **equilíbrio perfeito** entre:
* **A solidez, prestígio e autoridade** dos maiores impérios editoriais (como *Robb Report*, *Hodinkee* e *Financial Times HTSI*).
* **A estética contemporânea e dinâmica de galeria** do design de ponta internacional (como o conceito *VoidMag* de Polina Dubenko e marcas como *Bottega Veneta* e *Kinfolk*).
* **A precisão tátil do mundo tech** (micro-interações inspiradas na elegância de *Linear*, *Stripe* e *Apple*).

---

## 2. Psicologia do Usuário: A Fórmula Dual (Scanner vs. Reader)

O design da plataforma foi estruturado para acolher simultaneamente dois perfis de comportamento:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          CAMADA 1: O RADAR VISUAL                               │
│  Para os "Scanners" (80% do tráfego):                                           │
│  • Fotografias grandiosas e imersivas                                           │
│  • Trilho horizontal no topo com novidades em proporções variadas              │
│  • Resumos executivos de 2 linhas + Chips de categorias (#Relógios, #Carros)    │
│  • Tempo de escaneamento da página: 10 a 20 segundos                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                     │                                           │
│                                     ▼ (Quando o interesse desperta)             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                          CAMADA 2: O EDITORIAL IMERSIVO                         │
│  Para os "Readers" (20% do tráfego de alto valor):                              │
│  • Matérias completas com diagramação de revista de colecionador               │
│  • Tipografia serifada elegante com entrelinha confortável                      │
│  • Indicador de tempo de leitura ("6 min read") + autor verificado              │
│  • Foco na manufatura, exclusividade, história da marca e detalhes técnicos     │
│  • Leitura focada, sem pop-ups agressivos ou poluição visual                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Benchmarks & Referências Analisadas

1. **[VoidMag (Polina Dubenko)](https://dribbble.com/shots/26173385-VoidMag-Editorial-Concept-for-Digital-Magazine):**  
   * **Referência para o Topo:** O trilho horizontal assimétrico (*Filmstrip / "New In:"*) com cartões de diferentes alturas e proporções, combinado com a tipografia de capa imponente (*Statement Title*).
   * **Organização "Fora das Linhas" (*Broken Grid*):** Fotos com pesos visuais variados que conferem ritmo de galeria de arte.
2. **[Robb Report](https://robbreport.com):**  
   * **Referência de Autoridade:** Cobertura de mercado, tom de voz editorial sofisticado e divisão temática do ultra-luxo.
3. **[Hodinkee](https://www.hodinkee.com):**  
   * **Referência de Conteúdo & Paixão:** Storytelling de produto, fotos em detalhes macro e fichas técnicas completas.
4. **[Sportline (Design Analisado)](file:///C:/Users/Yury/.gemini/antigravity/brain/aee720a6-6d16-43d2-bf1e-ba50c75ada29/.user_uploaded/media_1792874419658_b701185c.png):**  
   * **Referência de Hero & Widgets:** O badge de destaque (*"Trending Today"*), autor com selo de verificação, métrica de tempo de leitura e a barra de dados rápidos na base da Hero (adaptada para cotações e drops do Radar).
5. **[Uncrate](https://uncrate.com):**  
   * **Referência de Curadoria Rápida:** Objetividade, fotos limpas e poder de compra.

---

## 4. Sistema Visual (Design System)

### 4.1 Paleta de Cores
* **Fundo Principal (Canvas Claro):** `#F8F7F4` (Off-white / Névoa quente — evita o branco puro `#FFFFFF`, trazendo conforto e elegância de papel nobre).
* **Superfícies de Cards:** `rgba(255, 255, 255, 0.85)` com leve desfoque (*glassmorphism* fino) e borda de `1px solid rgba(0, 0, 0, 0.06)`.
* **Fundo de Destaques / Seções Noturnas:** `#121214` (Grafite profundo — preto suave, nunca `#000000` absoluto).
* **Tipografia Principal (Títulos e Textos):** `#18181B` (Preto ébano / grafite de alto contraste).
* **Tipografia Secundária / Metadados:** `#71717A` e `#A1A1AA` (Cinzas neutros balanceados).
* **Cores de Acento (Accents Nobres):**
  * **Ouro Velho / Champagne:** `#C5A880` / `#D4AF37` (Para detalhes sutis, tags especiais e bordas finas).
  * **Verde Esmeralda / Radar Pulse:** `#10B981` / `#059669` (Reservado para o sinal de atividade do Radar).

### 4.2 Tipografia
* **Títulos, Manchetes e Capa (Headings & Statement):**  
  * Família: Tipografia Serifada de alto contraste, moderna e imponente (*Playfair Display* / *Cormorant Garamond*).
* **Corpo de Texto, Menus e Dados Técnicos (Body & UI):**  
  * Família: Sans-serif geométrica, limpa e de extrema legibilidade (*Plus Jakarta Sans* / *Inter*).

### 4.3 Princípio do *Broken Grid* (Fora das Linhas)
* Evitar o padrão uniforme de "vitrine de loja virtual".
* Alternar proporções de fotos (retratos verticais 4:5, panorâmicas de cinema 16:9 e detalhes quadrados 1:1).
* O texto descritivo se ancora com respiro, dando sensação de página de livro de luxo.

---

## 5. Reatividade & Micro-Interações Tech

| Posição | Efeito | Como Funciona no Radar do Luxo |
| :---: | :--- | :--- |
| **1º Lugar** | **Reorganização Fluida de Filtros (*FLIP Layout Animation*)** | Ao clicar em uma categoria, os cards na tela se reorganizam instantaneamente deslizando suavemente para suas novas posições como um baralho, sem recarregamento de página. |
| **2º Lugar** | **Live Pulse do Radar** | Indicador suave no topo ao lado do logo: `● RADAR ATIVO • SERVIDORES EM ZURICH`, transmitindo o pulso em tempo real do mercado. |
| **2º Lugar** | **Micro Tilt 3D nos Cards** | Ao passar o mouse sobre a imagem de um relógio ou carro, o card inclina sutilmente acompanhando o cursor, dando profundidade tangível. |
| **3º Lugar** | **Spotlight Glow Reflexivo** | Um reflexo de luz sutil e translúcido que segue a posição do cursor sobre as bordas do card. |

---

## 6. Arquitetura das Telas Principais

### 6.1 Página Inicial (Home / Capa)
1. **Header Superior:** Logotipo, status do radar em Zurich, modal de busca, troca de tema claro/escuro e link para Concierge VIP.
2. **Hero Section:** A grande matéria de capa da edição com badge de impacto (*"DESTAQUE MUNDIAL"*), autor verificado e botão para leitura.
3. **Weekly Drops & Ticker Bar:** 4 indicadores em tempo real com leilões históricos, cotação do Ouro Fino e novidades automotivas.
4. **Filmstrip Reel (VoidMag Rail):** Carrossel horizontal de exploração visual com cards assimétricos e botão de Ficha Rápida (*QuickView*).
5. **Feed Section:** Grid dinâmico animado com filtros por categoria e alocação do **Native Feed Feature Ad Card** após o 3º artigo.
6. **Billboard Sponsor Bar:** Faixa panorâmica institucional antes do rodapé.
7. **Newsletter VIP / Radar Privado:** Caixa discreta de assinatura com criptografia de ponta a ponta.
8. **Footer:** Logomarca, manifesto editorial, índice de categorias, conformidade legal, atalho para o Mesa Editorial VIP e link para o **Mídia Kit & Patrocínios Quiet Luxury**.

### 6.2 Página de Artigo / Leitura (Editorial Post)
* **Barra de Leitura:** Linha dourada minimalista de 1px no topo indicando o progresso da página.
* **Corpo do Texto:**
  * Letra Capitular (*Drop Cap*) no primeiro parágrafo.
  * Citações destacadas (*Pull Quotes*) com a voz autoral do colunista responsável.
  * Card de Recomendação Cruzada (*In-Article Drop*).
  * **In-Article Ad Slot:** Banner horizontal integrado entre os parágrafos 2 e 3 (com alternância entre Quadradinho AdSense e Maison Showcase).
* **Sidebar Sticky:**
  * Ficha Técnica Homologada com dados de motor, tiragem, ligas e cotação.
  * Cartão de Ação do Concierge VIP (Mesa de Alocação Privada).
  * **Sidebar Ad Slot:** Banner vertical 300x600 Half-Page.
* **Assinatura Editorial:** Box biográfico aprofundado do colunista com link para o seu acervo completo.

---

## 7. Corpo Editorial & As 3 Personas Vivas

O Radar do Luxo conta com três vozes autorais autônomas e profundamente especializadas:

### 7.1 Henrique Vianna — *Editor-Chefe & Curador de Patrimônio Imune*
* **Formação & Background:** Economista e pesquisador de governança patrimonial pela PUC-Rio e LSE, com 18 anos de interlocução com Single Family Offices em Mayfair, Bahnhofstrasse (Zurique) e Genebra.
* **Tese Central:** *"O dinheiro recente faz ruído; o patrimônio dinástico busca o silêncio mineral. A pedra, a terra e o concreto não falham."*
* **Termos Banidos:** Ostentação, chique, badalado, hype, influenciador, status symbol, lifestyle.

### 7.2 Gabriel Fontes — *Editor de Hipercarros & Engenharia Naval*
* **Formação & Background:** Engenheiro mecatrônico e especialista em compósitos aeroespaciais pelo Politécnico de Milão, com passagens pelos ateliês esportivos de Maranello e Sant'Agata. Mais de 1.200 voltas de telemetria no Nürburgring Nordschleife.
* **Tese Central:** *"Em uma era de telas táteis descartáveis, o verdadeiro ato de rebeldia humana é um motor V16 aspirado rugindo a 9.000 RPM. A velocidade é a pura expressão da física mecânica."*
* **Termos Banidos:** Possante, nave, carrão, máquina dos sonhos, tecnologia de ponta, design futurista.

### 7.3 Clara Meirelles — *Editora de Alta Relojoaria & Ateliês Históricos*
* **Formação & Background:** Historiadora da arte e gemologista pela Sorbonne e Gemological Institute of America (GIA), com residência de pesquisa na Vallée de Joux e Neuchâtel. Auditou coleções privadas e leilões na Christie's Genebra.
* **Tese Central:** *"O tempo digital é efêmero e impessoal; a alta relojoaria mecânica é a captura física da eternidade. A alma do objeto reside nas tolerâncias microscópicas acabadas à mão."*
* **Termos Banidos:** Acessório, reloginho, na moda, brilho ostensivo, look do dia, investimento do momento.

---

## 8. O Robô Editorial Autônomo & Ciclo na Nuvem

O site publica matérias de forma 100% autônoma, sem necessidade de computador ligado:
* **Fluxo no GitHub Actions:** `.github/workflows/luxury-crawler.yml` configurado para os 7 horários nobres de leitura: **08h, 10h, 12h, 14h, 16h, 18h e 20h** (Horário de Brasília).
* **Script do Robô:** `scripts/autonomousCrawler.js`.
* **Motor de IA:** Google Gemini API (`gemini-2.5-flash` / `gemini-flash-latest`) com sintetizador semântico local homologado como fallback seguro (evitando qualquer quebra caso a rede oscile).
* **Proteções & Blindagem:**
  * Sanitização de URL do Supabase (remove barras extras, garante `https://`).
  * Geração automática de `id` único e data formal em português.
  * Cálculo de pontuação de relevância (Ranking Tier S+ / Tier A).
  * Jitter orgânico de minutos (evita publicações no minuto exato para manter aspecto humano).
  * Gravação direta no Supabase Cloud DB.

---

## 9. Painel Administrativo VIP (`/admin`)

* **Acesso:** Rota protegida com senha de mesa editorial (`radar2026`).
* **Funcionalidades:**
  * Publicação manual de novas pautas com pré-visualização em tempo real.
  * Gestão de Capa: Pino de Hero Master (`is_pinned_hero`) e Hero Secundário.
  * Auditoria de status de matérias (Publicado / Rascunho / Arquivado).
  * Integração com motor de ranking editorial.

---

## 10. Arquitetura de Publicidade Quiet Luxury & Google AdSense

### 10.1 A Filosofia de Monetização do Radar
Recusa completa a formatos agressivos de portais comuns (sem popups, sem banners piscantes, sem áudio automático). A publicidade é apresentada como **Patrocínio Institucional de Maisons** e **Alocação Programática Homologada**.

### 10.2 Os 4 Slots Homologados
1. **In-Article Fluido (`format="in-article"`):** Banner horizontal entre parágrafos 2 e 3.
2. **Sticky Half-Page Sidebar (`format="sidebar"`):** Unidade vertical 300x600 ou 300x250.
3. **Native Feed Feature Card (`format="feed"`):** Card perfeitamente integrado no grid da Home após o 3º artigo.
4. **Super Leaderboard Panorâmico (`format="billboard"`):** Faixa 728x90 / 970x250 antes do rodapé.

### 10.3 Curadoria de Maisons Nativas
Quando o inventário do AdSense não estiver ativo, os slots exibem campanhas institucionais reais de 5 Maisons históricas:
* **Patek Philippe** (Alta Relojoaria — Genebra)
* **Riva 1920** (Engenharia Naval — Sarnico, Itália)
* **Bugatti Molsheim Atelier** (Hipercarros — França)
* **Sotheby’s Private Treaty** (Leilões Fechados & Joias Raras — Londres/Genebra)
* **Aman Sanctuaries** (Hospitalidade Soberana & Arquitetura — Japão/Utah)

### 10.4 Modo de Visualização dos Quadradinhos AdSense
Para conferência visual e desenvolvimento, o componente `AdSenseSlot.jsx` permite alternar instantaneamente entre o **Modo Quadradinho do Google AdSense** (com identificação visual das dimensões, slot ID e simulação de anúncio de banco suíço / jatos privados) e o **Modo Maison Quiet Luxury**.

### 10.5 Ativação do Google AdSense Oficial
1. Variável de ambiente na Vercel:
   ```env
   VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
   ```
2. O sistema injeta automaticamente os anúncios oficiais do Google nas molduras de alto padrão do Radar com reserva de espaço pré-calculada (Zero Layout Shift).

---

## 11. Infraestrutura em Nuvem & Produção $0

* **Hospedagem & CDN Edge:** **Vercel** com deployment contínuo ligado ao branch `main` do GitHub.
* **Domínio Oficial de Produção:** `https://www.radardoluxo.com.br` (com redirecionamento 308 permanente de `radardoluxo.com.br` e SSL automático Let's Encrypt).
* **Banco de Dados:** **Supabase PostgreSQL** (Free Tier perpétuo).
* **Automação Agendada:** **GitHub Actions** (Crons gratuitos ilimitados via GitHub Student Developer Pack).
* **Custo Total de Operação:** **R$ 0,00 / mês**.

---

## 12. Guia para Próximos Chats / Agentes de IA

> [!IMPORTANT]
> **Instruções Obrigatórias para Qualquer Modelo de IA que Atue no Repositório:**
> 1. Este documento é a **ÚNICA FONTE DA VERDADE (SSOT)** do projeto *Radar do Luxo*.
> 2. **Preserve a Elegância Quiet Luxury:** Nunca adicione popups, modais intrusivos de anúncio, termos banidos ou botões neon chamativos.
> 3. **Preserve as 3 Personas Editoriais:** Todo conteúdo novo deve ser atribuído a Henrique Vianna, Gabriel Fontes ou Clara Meirelles, respeitando suas respectivas teses, vocabulário e especialidades.
> 4. **Respeite o Zero Custo:** Qualquer nova integração de nuvem ou banco de dados deve se manter dentro do plano gratuito sem gerar cobranças ao usuário.
> 5. **Deploy Contínuo:** Qualquer alteração no branch `main` é automaticamente construída e enviada para produção na Vercel em segundos. Realize sempre `npm run build` local antes de efetuar commits.
