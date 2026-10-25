# 💎 RADAR DO LUXO — BLUEPRINT MESTRE DO PROJETO
**Versão:** 1.0.0  
**Data de Criação:** 24/10/2026  
**Status:** Especificação Consensual & Aprovada  
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
* **A solidez, prestígio e autoridade** dos maiores impérios editoriais (como *Robb Report* e *Hodinkee*).
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
  * Família: Tipografia Serifada de alto contraste, moderna e imponente.
  * Exemplos recomendados: *Playfair Display*, *Cinzel*, *Cormorant Garamond* ou *Bodoni Moda*.
* **Corpo de Texto, Menus e Dados Técnicos (Body & UI):**  
  * Família: Sans-serif geométrica, limpa e de extrema legibilidade.
  * Exemplos recomendados: *Inter*, *Plus Jakarta Sans* ou *General Sans*.

### 4.3 Princípio do *Broken Grid* (Fora das Linhas)
* Evitar o padrão uniforme de "vitrine de loja virtual".
* Alternar proporções de fotos (retratos verticais 4:5, panorâmicas de cinema 16:9 e detalhes quadrados 1:1).
* O texto descritivo se ancora com respiro, dando sensação de página de livro de luxo.

---

## 5. Reatividade & Micro-Interações Tech (Ranking Oficial)

As interações foram selecionadas para tornar a experiência **tátil, responsiva e viva**, sem poluir a leitura:

| Posição | Efeito | Como Funciona no Radar do Luxo |
| :---: | :--- | :--- |
| **1º Lugar (Ouro)** | **Reorganização Fluida de Filtros (*FLIP Layout Animation*)** | Ao clicar em uma categoria (*#Relógios, #Supercarros, #Casas*), os cards na tela se reorganizam instantaneamente deslizando suavemente para suas novas posições como um baralho, sem nenhum recarregamento de página. |
| **2º Lugar (Prata - Empate)** | **Live Pulse do Radar** | Indicador suave no topo ao lado do logo: `● RADAR ATIVO • 12 NOVOS ITENS ESTA SEMANA`, transmitindo o pulso em tempo real do mercado. |
| **2º Lugar (Prata - Empate)** | **Micro Tilt 3D nos Cards** | Ao passar o mouse sobre a imagem de um relógio ou carro, o card inclina sutilmente (3º a 5º) acompanhando o cursor, dando profundidade tangível de cartão de metal. |
| **3º Lugar (Bronze - Empate)** | **Spotlight Glow Reflexivo** | Um reflexo de luz sutil e translúcido que segue a posição do cursor sobre as bordas do card, simulando o acabamento de vidro polido ou titânio. |
| **3º Lugar (Bronze - Empate)** | **Cursor Magnético Inteligente** | Sobre as galerias, o cursor padrão se torna uma elegante lente circular com a inscrição `[ Explorar ]` ou `[ Ver ]`. |

---

## 6. Arquitetura das Telas Principais

### 6.1 Página Inicial (Home / Capa)

```
[ HEADER SUPERIOR ]
• Logo: "RADAR DO LUXO" (Tipografia espaçada)
• Navegação: Relógios • Automóveis • Arquitetura • Estilo • Destinos
• Status: "● RADAR ATIVO" | Ícone de Busca | Botão "Edição Impressa / VIP"

[ BLOCO 1: O TRILHO DO RADAR (Inspirado no VoidMag) ]
• Título da seção: "NEW IN / RADAR EM TEMPO REAL" + Indicadores de layout
• Trilho horizontal fluido com cards de novidades em proporções assimétricas:
  - Card 1 (Vertical): Patek Philippe Grand Complications (foto macro + tag)
  - Card 2 (Quadrado): Aston Martin Valkyrie em pista
  - Card 3 (Vertical): Villa contemporânea sobre falésias em Mallorca
• Título de Capa Imponente na dobra: "RADAR DO LUXO — EDIÇÃO 01"

[ BLOCO 2: HERO EDITORIAL (Inspirado em Sportline & Robb Report) ]
• Layout bipartido com foco no destaque da semana:
  - Lado Esquerdo: Badge "TRENDING / DESTAQUE DA SEMANA", Título de peso,
    resumo refinado em 2 linhas, autor com badge de verificado e tempo de leitura ("8 min read").
  - Lado Direito: Fotografia cinematográfica com legenda artística no rodapé.
• Barra Inferior da Hero ("Radar Drops da Semana"):
  - 3 mini-cards com cotações de leilões, lançamentos ou datas de drops.

[ BLOCO 3: O FEED PRINCIPAL COM FILTROS FLUIDOS ]
• Barra de Filtros: [ Todos ] [ Alta Relojoaria ] [ Supercarros ] [ Arquitetura ] [ Estilo ]
• Grid com Broken Grid e animação fluida de transição.
• Cards com Micro Tilt 3D e Spotlight Glow ao passar o mouse.

[ BLOCO 4: O DEEP DIVE (Para os Leitores) ]
• Destaque para um artigo em profundidade com diagramação de revista clássica.
• "Como uma manufatura suíça leva 9 meses para montar um único mostrador".

[ BLOCO 5: NEWSLETTER VIP & CLUBE PRIVADO ]
• Bloco com fundo grafite `#121214`, tipografia champanhe e caixa de e-mail discreta:
  "O Radar Semanal: Curadoria fechada com os lançamentos mais exclusivos do planeta".

[ FOOTER ]
• Logotipo, manifesto editorial, índice de categorias, direitos e redes sociais.
```

### 6.2 Página de Artigo / Leitura (Editorial Post)
* **Barra de Leitura:** Linha dourada minimalista de 1px no topo indicando o progresso da página.
* **Cabeçalho:** Categoria em caixa alta, título nobre serifado, subtítulo elegante, data e autor.
* **Corpo do Texto:**
  * Letra Capitular (*Drop Cap*) no primeiro parágrafo.
  * Citações destacadas em bloco (*Pull Quotes*) com aspas estilizadas.
  * Imagens *full-bleed* (de ponta a ponta) intercaladas com parágrafos bem espaçados.
  * **Caixa Lateral de Especificações / Ficha Técnica:** Preço estimado, tiragem/unidades fabricadas, material e onde encontrar.
* **Rodapé do Post:** Matérias relacionadas do Radar e botões discretos de compartilhamento.

---

## 7. Stack Tecnológica Recomendada

Para entregar a performance ultra-rápida e a fluidez exigida:
* **Core:** **React** com **Next.js** (ou **Vite** para desenvolvimento ágil de protótipos de alta performance).
* **Estilização:** **Tailwind CSS** (configurado com a paleta de cores e tipografia deste blueprint).
* **Motor de Animação:** **Framer Motion** (essencial para o efeito FLIP da reorganização de filtros, o trilho horizontal do VoidMag e o tilt 3D suave).
* **Iconografia:** **Lucide React** (linhas finas de 1.5px, elegantes e minimalistas).

---

## 8. Guia para Próximos Chats / Agentes de IA

> [!IMPORTANT]
> **Instrução para qualquer modelo ou assistente que assuma este projeto:**
> 1. Este documento é a **ÚNICA FONTE DA VERDADE (SSOT)** do projeto *Site Radar do Luxo*.
> 2. Não reinvente a arquitetura sem consultar o usuário.
> 3. Respeite as escolhas estéticas: o topo em fita assimétrica inspirado no *VoidMag*, o ranking de reações tech (1º Filtros Fluidos, 2º Live Pulse e Tilt 3D), e a paleta de cores off-white/grafite/ouro.
> 4. Quando for instruído a codificar, construa componentes modulares seguindo fielmente este arquivo.
