/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — PRÉ-RENDER POR MATÉRIA
 * ==============================================================================
 * Roda depois do `vite build` e escreve dentro de dist/:
 *   artigo/<slug>/index.html → metadado próprio e corpo em <p> de verdade
 *   sitemap.xml              → uma entrada por matéria publicada
 *   404.html                 → matéria que saiu da janela para de responder 200
 *
 * O <div id="root"> chega preenchido para quem não executa JavaScript (Googlebot,
 * facebookexternalhit). O app monta com createRoot e substitui o bloco pelo mesmo
 * texto: o leitor humano vê a matéria mais cedo, não diferente.
 *
 * Recusa publicar em vez de publicar errado: se o template do build mudar de forma,
 * o script morre — página de matéria saindo com o título da home é o defeito que
 * este arquivo veio fechar, não pode virar consequência dele.
 * ==============================================================================
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(RAIZ, 'dist');
const SITE_URL = (process.env.RADAR_SITE_URL || 'https://www.radardoluxo.com.br').replace(/\/+$/, '');
const CAPA_PADRAO = {
  url: `${SITE_URL}/images/a-lange-datograph-honeygold-lumen.jpg`,
  width: 1600,
  height: 1066,
};

// Slug vira nome de diretório: nada de ../../ ou de barra dentro do segmento.
const SLUG_VALIDO = /^[a-z0-9](?:[a-z0-9-]{0,198}[a-z0-9])?$/;

const ENTIDADES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (valor) => String(valor ?? '').replace(/[&<>"']/g, (c) => ENTIDADES[c]);
// "<" escapado no JSON: </script> dentro de um parágrafo quebraria o bloco de dados.
const jsonSeguro = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function substituir(html, regex, novo, rotulo) {
  if (!regex.test(html)) {
    throw new Error(`template do build sem ${rotulo} — pré-render abortado de propósito`);
  }
  // Função, nunca string: título com "$&" seria interpretado como referência de grupo.
  return html.replace(regex, () => novo);
}

function paragrafosDe(artigo) {
  const lista = artigo.contentParagraphs || artigo.content_paragraphs;
  return Array.isArray(lista) ? lista.filter((p) => typeof p === 'string' && p.trim()) : [];
}

function dataDePublicacao(artigo) {
  const bruta = artigo.publishedAt || artigo.published_at || artigo.created_at;
  const data = new Date(bruta);
  return Number.isNaN(data.getTime()) ? null : data;
}

function corpoArtigo(artigo) {
  const autor = AUTHORS[artigo.authorSlug]?.name || 'Redação Radar do Luxo';
  const specs = Object.entries(artigo.specs || {});
  const blocos = [
    '<article>',
    '  <header class="max-w-4xl mx-auto px-4 sm:px-6 py-10">',
    `    <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">${esc(artigo.title)}</h1>`,
    `    <p class="text-base sm:text-xl font-light leading-relaxed mb-6">${esc(artigo.excerpt)}</p>`,
    `    <p class="text-sm text-lux-text-secondary dark:text-lux-text-darkSecondary">Por ${esc(autor)} · ${esc(artigo.date)} · ${esc(artigo.readTime)}</p>`,
    '  </header>',
  ];

  if (artigo.image) {
    blocos.push(
      '  <figure class="max-w-5xl mx-auto px-4 sm:px-6">',
      `    <img src="${esc(artigo.image)}" alt="${esc(artigo.title)}" width="1400" />`,
      '  </figure>',
    );
  }

  blocos.push('  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-10">');
  for (const paragrafo of paragrafosDe(artigo)) {
    blocos.push(`    <p class="text-base sm:text-lg leading-relaxed mb-6">${esc(paragrafo)}</p>`);
  }
  if (specs.length) {
    blocos.push('    <dl>');
    for (const [rotulo, valor] of specs) {
      blocos.push(`      <dt class="text-xs font-semibold uppercase tracking-wide">${esc(rotulo)}</dt>`);
      blocos.push(`      <dd class="mb-3">${esc(valor)}</dd>`);
    }
    blocos.push('    </dl>');
  }
  blocos.push('  </div>', '</article>');
  return blocos.join('\n');
}

function esquemaArtigo(artigo, url) {
  const publicado = dataDePublicacao(artigo);
  const autor = AUTHORS[artigo.authorSlug]?.name || 'Redação Radar do Luxo';
  const esquema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: artigo.title,
    description: artigo.excerpt,
    image: artigo.image ? [artigo.image] : [CAPA_PADRAO.url],
    inLanguage: 'pt-BR',
    datePublished: publicado ? publicado.toISOString() : undefined,
    dateModified: publicado ? publicado.toISOString() : undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: autor },
    publisher: { '@type': 'Organization', name: 'Radar do Luxo', url: `${SITE_URL}/` },
  };
  if (artigo.category) esquema.articleSection = artigo.category;
  return esquema;
}

function aplicarMetadados(template, { titulo, descricao, url, imagem, ogType, jsonLd, robots, corpo }) {
  let html = template;
  html = substituir(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(titulo)}</title>`, '<title>');
  html = substituir(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(descricao)}" />`,
    'meta description',
  );
  html = substituir(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${esc(url)}" />`,
    'canonical',
  );
  html = substituir(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${esc(ogType)}" />`,
    'og:type',
  );
  html = substituir(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${esc(titulo)}" />`,
    'og:title',
  );
  html = substituir(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(descricao)}" />`,
    'og:description',
  );

  // Toda declaração de capa do template sai, depois entra a da página: duas og:image
  // fariam o preview do WhatsApp escolher a capa errada conforme a ordem de leitura.
  html = html.replace(
    /\s*<meta (?:property="og:image(?::(?:width|height|alt))?"|name="twitter:image(?::alt)?") content="[^"]*"\s*\/>/g,
    '',
  );
  const extras = [
    `<meta property="og:image" content="${esc(imagem.url)}" />`,
    imagem.width ? `<meta property="og:image:width" content="${imagem.width}" />` : '',
    imagem.height ? `<meta property="og:image:height" content="${imagem.height}" />` : '',
    `<meta property="og:image:alt" content="${esc(titulo)}" />`,
    `<meta name="twitter:image" content="${esc(imagem.url)}" />`,
    `<meta name="twitter:image:alt" content="${esc(titulo)}" />`,
  ]
    .filter(Boolean)
    .join('\n    ');
  html = substituir(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${esc(url)}" />\n    ${extras}`,
    'og:url',
  );
  html = substituir(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${esc(titulo)}" />`,
    'twitter:title',
  );
  html = substituir(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${esc(descricao)}" />`,
    'twitter:description',
  );
  html = substituir(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${jsonSeguro(jsonLd)}</script>`,
    'JSON-LD',
  );

  if (robots) {
    html = substituir(
      html,
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="${esc(robots)}" />`,
      'meta robots',
    );
  }

  return substituir(html, /<div id="root"><\/div>/, `<div id="root">\n${corpo}\n    </div>`, '<div id="root">');
}

function corpoNaoEncontrada() {
  return [
    '<main class="max-w-3xl mx-auto px-4 py-24 text-center">',
    '  <h1 class="font-serif text-4xl font-bold mb-4">Matéria não encontrada</h1>',
    '  <p class="mb-8">O endereço que você abriu não corresponde a nenhuma matéria no acervo do Radar do Luxo.</p>',
    `  <p><a href="${esc(SITE_URL)}/" class="text-lux-gold">Voltar para a edição de hoje</a></p>`,
    '</main>',
  ].join('\n');
}

function corpoPaginaInicial() {
  // A home já tem metadado completo; sem corpo, o robô que não roda JavaScript não
  // vê nenhuma matéria. Uma lista de endereços resolve e não tenta imitar o layout.
  const itens = publicadas
    .slice(0, 25)
    .map((a) => `      <li><a href="/artigo/${esc(a.slug)}">${esc(a.title)}</a></li>`)
    .join('\n');
  return ['<main>', '  <h1>Radar do Luxo — edição atual</h1>', '  <ul>', itens, '  </ul>', '</main>'].join('\n');
}

function sitemapXml() {
  const hoje = new Date().toISOString().slice(0, 10);
  const entradas = [
    ['/', hoje, 'daily', '1.0'],
    ...publicadas.map((a) => {
      const publicado = dataDePublicacao(a);
      return [`/artigo/${a.slug}`, publicado ? publicado.toISOString().slice(0, 10) : hoje, 'monthly', '0.8'];
    }),
  ];
  const urls = entradas
    .map(
      ([caminho, lastmod, freq, prioridade]) =>
        `  <url>\n    <loc>${esc(SITE_URL + caminho)}</loc>\n    <lastmod>${esc(lastmod)}</lastmod>\n` +
        `    <changefreq>${freq}</changefreq>\n    <priority>${prioridade}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const { ARTICLES, AUTHORS } = await import(pathToFileURL(path.join(RAIZ, 'src/data/mockData.js')).href);

const vistas = new Set();
const publicadas = [];
for (const artigo of Array.isArray(ARTICLES) ? ARTICLES : []) {
  if (!artigo || artigo.status === 'draft' || !artigo.slug) continue;
  if (!SLUG_VALIDO.test(artigo.slug)) {
    throw new Error(`slug fora do formato, pré-render abortado: ${JSON.stringify(String(artigo.slug).slice(0, 60))}`);
  }
  if (vistas.has(artigo.slug)) continue;
  vistas.add(artigo.slug);
  publicadas.push(artigo);
}
if (publicadas.length === 0) throw new Error('acervo sem nenhuma matéria publicada: nada a pré-renderizar');

const templateBruto = await readFile(path.join(DIST, 'index.html'), 'utf8');
// Re-rodar sem rebuild é operação normal de quem está ajustando o template: o corpo
// pré-renderizado da passada anterior volta a ser <div id="root"></div> antes de tudo.
// O último </div> antes de </body> é o nosso, porque o app inteiro cabe dentro dele.
const template = templateBruto.replace(/<div id="root">[\s\S]*<\/div>(\s*<\/body>)/, '<div id="root"></div>$1');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('o template do build não tem <div id="root"></div> utilizável — pré-render abortado');
}

let escritos = 0;
const avisos = [];
for (const artigo of publicadas) {
  const url = `${SITE_URL}/artigo/${artigo.slug}`;
  const paragrafos = paragrafosDe(artigo);
  // Sem corpo a página ainda é endereçável (resumo + capa), então só avisa: derrubar o
  // build aqui tiraria do ar matérias corretas por causa de uma rodada ruim do crawler.
  if (!paragrafos.length) avisos.push(`matéria sem parágrafos: ${artigo.slug}`);
  const html = aplicarMetadados(template, {
    titulo: `${artigo.title} | Radar do Luxo`,
    descricao: artigo.excerpt || paragrafos[0]?.slice(0, 200) || artigo.title,
    url,
    imagem: artigo.image ? { url: artigo.image } : CAPA_PADRAO,
    ogType: 'article',
    jsonLd: esquemaArtigo(artigo, url),
    corpo: corpoArtigo(artigo),
  });
  const pasta = path.join(DIST, 'artigo', artigo.slug);
  await mkdir(pasta, { recursive: true });
  await writeFile(path.join(pasta, 'index.html'), html, 'utf8');
  escritos += 1;
}

// A home: mesmo metadado do index.html do build, com o acervo endereçado em HTML cru.
const htmlHome = aplicarMetadados(template, {
  titulo: 'Radar do Luxo — Digital Magazine & Trend Radar',
  descricao:
    'Radar do Luxo: revista digital de luxo, alta relojoaria, joalheria, gastronomia, lifestyle e tendências exclusivas.',
  url: `${SITE_URL}/`,
  imagem: CAPA_PADRAO,
  ogType: 'website',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Radar do Luxo',
    url: `${SITE_URL}/`,
    inLanguage: 'pt-BR',
  },
  corpo: corpoPaginaInicial(),
});
await writeFile(path.join(DIST, 'index.html'), htmlHome, 'utf8');

await writeFile(
  path.join(DIST, '404.html'),
  aplicarMetadados(template, {
    titulo: 'Matéria não encontrada | Radar do Luxo',
    descricao: 'A matéria procurada não está no acervo do Radar do Luxo.',
    url: `${SITE_URL}/404`,
    imagem: CAPA_PADRAO,
    ogType: 'website',
    robots: 'noindex, follow',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Matéria não encontrada' },
    corpo: corpoNaoEncontrada(),
  }),
  'utf8',
);

await writeFile(path.join(DIST, 'sitemap.xml'), sitemapXml(), 'utf8');

if (avisos.length) {
  console.warn(`\n⚠️  ${avisos.length} aviso(s) do pré-render:`);
  for (const aviso of avisos) console.warn(`   • ${aviso}`);
}

console.log(
  `✅ pré-render: ${escritos} matérias em dist/artigo/, home com acervo, 404.html e sitemap.xml com ${publicadas.length + 1} URLs`,
);
