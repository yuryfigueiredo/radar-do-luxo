/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — CURADORIA DE MAISONS & PATROCÍNIOS QUIET LUXURY
 * ==============================================================================
 * Campanhas institucionais nativas de alto prestígio utilizadas como padrão
 * visual e editorial em alocações de publicidade (Quiet Luxury Advertising).
 * 
 * Quando o Google AdSense está ativo, estes slots abrigam os anúncios oficiais
 * com a mesma moldura e padrão estético de cinco estrelas.
 * ==============================================================================
 */

export const LUXURY_SPONSORS = [
  {
    id: 'patek-philippe',
    name: 'Patek Philippe Genebra',
    category: 'Alta Relojoaria Suíça',
    categorySlug: 'relogios',
    tagline: 'Gerações de Soberania Mecânica',
    quote: 'Você nunca é realmente o dono de um Patek Philippe. Você apenas o guarda para a próxima geração.',
    highlight: 'Grandmaster Chime Ref. 6300G em ouro branco cinzelado com 20 complicações acústicas patenteadas.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1400',
    ctaText: 'Explorar Acervo Histórico',
    destinationUrl: 'https://www.patek.com',
    location: 'Rue du Rhône, Genebra • Suíça'
  },
  {
    id: 'riva-yachts',
    name: 'Riva 1920 • Cantieri di Sarnico',
    category: 'Engenharia Naval & Tradição',
    categorySlug: 'nautica',
    tagline: 'O Mito da Caoba Envernizada',
    quote: '24 demãos de verniz artesanal e a inconfundível linha de água da Riviera Italiana.',
    highlight: 'Riva Rivamare 38 — Casco hidrodinâmico com convés usinado em mogno e detalhes em aço inoxidável naval.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1400',
    ctaText: 'Descobrir Linha Riva',
    destinationUrl: 'https://www.riva-yacht.com',
    location: 'Sarnico, Lago d\'Iseo • Itália'
  },
  {
    id: 'bugatti-atelier',
    name: 'Bugatti Molsheim Atelier',
    category: 'Hipercarros & Engenharia Térmica',
    categorySlug: 'carros',
    tagline: 'Se é comparável, já não é Bugatti',
    quote: 'A celebração final da combustão mecânica pura: instrumentos de safira e titânio usinados a zero mícrons.',
    highlight: 'Bugatti Tourbillon — Motor V16 aspirado de 8,3 litros com telemetria analógica e monocoque em fibra T800.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Ver Especificações de Pista',
    destinationUrl: 'https://www.bugatti.com',
    location: 'Château Saint-Jean, Molsheim • França'
  },
  {
    id: 'sothebys-private',
    name: 'Sotheby’s Private Treaty Sales',
    category: 'Leilões Fechados & Arte Museológica',
    categorySlug: 'joias-arte',
    tagline: 'Custódia Confidencial de Obras Históricas',
    quote: 'Transações discricionárias fora do leilão público para comitês de Family Offices e coleções privadas.',
    highlight: 'Lotes raros de mestres do pós-guerra e diamantes Type IIb sob protocolo de sigilo em portos francos.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Solicitar Acesso Privado',
    destinationUrl: 'https://www.sothebys.com',
    location: 'Londres • Genebra • Nova York'
  },
  {
    id: 'aman-sanctuaries',
    name: 'Aman Private Sanctuaries',
    category: 'Hospitalidade Soberana & Silêncio',
    categorySlug: 'imoveis',
    tagline: 'O Santuário da Arquitetura Silenciosa',
    quote: 'Residências e refúgios cravados na paisagem mineral onde a discrição é a mais alta forma de serviço.',
    highlight: 'Pavilhões de contemplação com materiais vernaculares, alta gastronomia de procedência e isolamento absoluto.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Consultar Reservas Discricionárias',
    destinationUrl: 'https://www.aman.com',
    location: 'Kyoto • Veneza • Utah'
  }
];

export function getSponsorForCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'todos') {
    return LUXURY_SPONSORS[0];
  }
  const match = LUXURY_SPONSORS.find(s => s.categorySlug === categorySlug);
  return match || LUXURY_SPONSORS[0];
}

export const MEDIA_KIT_DATA = {
  audience: {
    monthlyHNWI: '65.000+',
    avgNetWorth: 'R$ 14,2 Milhões',
    familyOfficesReach: '120+ Single & Multi-Family Offices',
    geoReach: 'São Paulo (Faria Lima / Jardins), Rio (Leblon), Genebra, Londres, Miami',
    timeOnArticle: '4m 32s de leitura atenta e imersiva'
  },
  principles: [
    'Zero Poluição Visual: Nenhum popup intrusivo, autoplay com som ou banners piscantes.',
    'Alinhamento Estético: Tipografia serifada, tons quentes e fotografia de nível editorial.',
    'Respeito à Atenção: Anúncios integrados organicamente ao fluxo de leitura reflexiva.',
    'Exclusividade de Segmento: Somente marcas homologadas em alta relojoaria, náutica, aviação, imóveis soberanos e fine art.'
  ]
};
