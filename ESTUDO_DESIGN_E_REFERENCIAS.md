# Estudo de Web Design & Referências de Alto Nível
**Projeto:** Site Radar do Luxo  
**Data:** 24/10/2026  
**Origem:** Engenharia reversa e benchmarking de interfaces em produção.

---

## 1. O Método "Roube como um Artista" (Dissecação com Olhar Analítico)

Aprender olhando não é apenas achar algo "bonito", mas entender **por que** funciona:

1. **Aperte `F12` (Inspecionar Elemento):**
   * **Escala Tipográfica:** Veja o salto entre tamanhos (`font-size`). Bons sites usam escalas matemáticas (ex: 14px -> 16px -> 24px -> 40px -> 64px).
   * **Line-height:** Títulos grandes usam entrelinhas fechadas (`1.1` a `1.2`). Parágrafos de leitura usam entrelinhas abertas (`1.5` a `1.6`).
2. **Contagem de Cores:**
   * 90% dos sites mais sofisticados do mundo usam apenas:
     * 1 cor de fundo principal (geralmente off-white ou preto grafite, nunca `#000000` ou `#ffffff` puros).
     * 3 a 4 tons de cinza para estabelecer hierarquia de texto.
     * 1 única cor de destaque (accent) reservada para chamadas de ação (CTA) ou dados importantes.
3. **Espaço Negativo (O Vazio):**
   * O que faz uma marca parecer cara e luxuosa é o **espaço**. Espaçamentos verticais de `96px` a `160px` entre seções dão exclusividade ao produto.
4. **Timing de Micro-interações:**
   * Animações de clique/hover duram entre `150ms` e `250ms`. Mais do que isso a interface parece lenta; menos que isso fica imperceptível.

---

## 2. Benchmark de Sites Reais para Estudo Contínuo

### A. Mestres do Padrão Tech, Interface e Micro-interações
* **[Linear](https://linear.app):** O ápice do design de interfaces escuras (*Linear Style*). Bordas ultra-finas (`1px solid rgba(255,255,255,0.08)`), tipografia densa, contraste perfeito.
* **[Stripe](https://stripe.com):** Mestres dos gradientes sutis, diagramas interativos, documentação limpa e sofisticação corporativa.
* **[Vercel](https://vercel.com):** Minimalismo monocromático com precisão milimétrica. Praticamente zero cores saturadas.
* **[Raycast](https://raycast.com):** Foco em luz direcional e cards flutuantes.

### B. Luxo, Editorial e Ritmo Visual (Essencial para o "Radar do Luxo")
* **[Aesop](https://aesop.com):** A maior referência mundial de luxo calmo. Tipografia serifada, tons terrosos, storytelling sensorial.
* **[Apple](https://apple.com):** Scroll-telling, hierarquia visual de produto e ritmo de leitura.
* **[Teenage Engineering](https://teenage.engineering):** Design industrial, botões físicos transferidos para a web e estética retrô-futurista.

### C. Estúdios Independentes de Elite (Onde as tendências nascem)
* **[Basement Studio](https://basement.studio):** Motion design arrojado, 3D, WebGL e estética experimental.
* **[Locomotive](https://locomotive.ca):** Pioneiros em scroll suave editorial e layouts assimétricos.

### D. Plataformas de Curadoria de Interfaces REAIS
* **[Godly](https://godly.website):** Curadoria diária de sites reais no ar com design de alto nível.
* **[Mobbin](https://mobbin.com):** Prints de telas reais de fluxos completos de web/apps (login, onboarding, checkout, dashboard).
* **[Land-book](https://land-book.com):** Acervo de landing pages reais com alta conversão.

---

## 3. Raio-X do Efeito "Galho com Musgo Dinâmico"
**Referência:** [Crypto Trading Web Platform por Bogdan Falin (QClay)](https://dribbble.com/shots/25791129-Crypto-Trading-Web-Platform)  
*Arquivos de apoio salvos em `./references/` (frames `frame_006.png`, `frame_010.png`, `frame_016.png` e vídeo `shot_video.mp4`).*

### O Conceito
Em vez do clichê escuro/neon de criptoativos, o designer usou uma metáfora orgânica: conforme o usuário passa o mouse na casca seca de uma árvore, **brota musgo verde volumoso e realista** em tempo real, simbolizando o crescimento do patrimônio (*"Grow Your Wealth"*).

### Engenharia Reversa (Como recriar em WebGL / Three.js)
1. **Malha 3D:** Carregamento de um modelo 3D do galho (`.glb`) com coordenadas UV bem mapeadas.
2. **Raycaster:** Rastreamento da posição do mouse na superfície do modelo via coordenadas UV.
3. **Canvas Offscreen / Ping-Pong FBO:** Textura dinâmica que pinta uma máscara em tons de cinza onde o cursor passa (com borda difusa).
4. **Vertex Shader (Volume Tridimensional):**
   ```glsl
   // Empurra os vértices para fora ao longo da normal da casca onde houver musgo
   vec3 newPosition = position + normal * (maskValue * uDisplacementFactor);
   gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
   ```
5. **Fragment Shader (Mistura de Texturas):**
   ```glsl
   vec4 barkColor = texture2D(uBarkTexture, vUv);
   vec4 mossColor = texture2D(uMossTexture, vUv);
   float mask = texture2D(uGrowthMask, vUv).r;
   
   gl_FragColor = mix(barkColor, mossColor, mask);
   ```

---

## 4. Aplicação Direta no Projeto "Radar do Luxo"

Para um site voltado ao mercado de luxo:
* **Paleta de Cores:** Fundo bege/areia suave (`#F8F7F4`), grafite profundo (`#1A1A1A`) para texto e toques sutis de dourado/champagne ou verde oliva como acento.
* **Tipografia Dupla:** Títulos em tipografia Serifada elegante e moderna (ex: *Playfair Display*, *Cinzel* ou *Cormorant Garamond*) contrastando com textos de apoio e dados técnicos em Sans-serif limpa (ex: *Inter*, *Plus Jakarta Sans* ou *General Sans*).
* **Cards Flutuantes com Glassmorphism Sutil:**
  ```css
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05);
  ```

---

## 5. Como Vincular Esta Conversa no Antigravity

Sempre que você abrir esta pasta no Antigravity e iniciar um novo chat de desenvolvimento:
1. Digite **`@`** na caixa de mensagens do chat.
2. Selecione esta conversa anterior na lista.
3. O assistente terá automaticamente todo o histórico deste estudo em mãos para programar o site com você!
