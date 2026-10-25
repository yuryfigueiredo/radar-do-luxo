-- ==============================================================================
-- 💎 RADAR DO LUXO — ESTRUTURA COMPLETA DO BANCO DE DADOS (SUPABASE / POSTGRESQL)
-- ==============================================================================
-- Instruções:
-- 1. Abra o painel do seu projeto no Supabase (https://supabase.com/dashboard)
-- 2. No menu lateral, clique em "SQL Editor"
-- 3. Clique em "+ New query", cole todo este código e clique em "Run"
-- ==============================================================================

-- 1. TABELA DE AUTORES (CORPO EDITORIAL)
CREATE TABLE IF NOT EXISTS public.authors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT NOT NULL,
    quote TEXT,
    avatar TEXT,
    specialties TEXT[] DEFAULT '{}',
    articles_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. TABELA DE ARTIGOS & REPORTAGENS DO RADAR
CREATE TABLE IF NOT EXISTS public.articles (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content_paragraphs JSONB NOT NULL DEFAULT '[]'::jsonb,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    category_slug TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'article', -- 'article' | 'video'
    badge TEXT,
    author_slug TEXT REFERENCES public.authors(slug) ON UPDATE CASCADE ON DELETE SET NULL,
    date TEXT NOT NULL,
    read_time TEXT NOT NULL,
    is_hero BOOLEAN DEFAULT false,
    is_hero_secondary BOOLEAN DEFAULT false,
    is_pinned_hero BOOLEAN DEFAULT false,
    ranking_score INTEGER DEFAULT 88,
    published_at TIMESTAMPTZ DEFAULT now(),
    specs JSONB DEFAULT '{}'::jsonb,
    in_article_drop JSONB DEFAULT '{}'::jsonb,
    video_url TEXT,
    video_duration TEXT,
    status TEXT NOT NULL DEFAULT 'published', -- 'published' | 'draft'
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Garantir colunas adicionais para tabelas já existentes
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS ranking_score INTEGER DEFAULT 88;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS is_pinned_hero BOOLEAN DEFAULT false;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ DEFAULT now();

-- 3. TABELA DE DROPS DA SEMANA & COTAÇÕES RÁPIDAS
CREATE TABLE IF NOT EXISTS public.weekly_drops (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    val TEXT NOT NULL,
    status TEXT NOT NULL,
    tag TEXT,
    sort_order INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. TABELA DE ASSINANTES DA NEWSLETTER VIP ("RADAR PRIVADO")
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'active',
    source TEXT DEFAULT 'site_footer',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. TABELA DE SOLICITAÇÕES DA MESA DE ALOCAÇÃO / CONCIERGE VIP
CREATE TABLE IF NOT EXISTS public.concierge_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    article_title TEXT,
    article_slug TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending' | 'contacted' | 'closed'
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- POLÍTICAS DE SEGURANÇA (ROW LEVEL SECURITY - RLS)
-- ==============================================================================
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_drops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.concierge_inquiries ENABLE ROW LEVEL SECURITY;

-- Autores: Leitura pública, escrita via anon/authenticated
DROP POLICY IF EXISTS "Autores são públicos para leitura" ON public.authors;
CREATE POLICY "Autores são públicos para leitura" ON public.authors FOR SELECT USING (true);

DROP POLICY IF EXISTS "Gerenciamento de autores" ON public.authors;
CREATE POLICY "Gerenciamento de autores" ON public.authors FOR ALL USING (true) WITH CHECK (true);

-- Artigos: Leitura pública, escrita via anon/authenticated
DROP POLICY IF EXISTS "Artigos públicos para leitura" ON public.articles;
CREATE POLICY "Artigos públicos para leitura" ON public.articles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Gerenciamento de artigos" ON public.articles;
CREATE POLICY "Gerenciamento de artigos" ON public.articles FOR ALL USING (true) WITH CHECK (true);

-- Weekly Drops: Leitura pública, escrita via anon/authenticated
DROP POLICY IF EXISTS "Drops são públicos para leitura" ON public.weekly_drops;
CREATE POLICY "Drops são públicos para leitura" ON public.weekly_drops FOR SELECT USING (true);

DROP POLICY IF EXISTS "Gerenciamento de drops" ON public.weekly_drops;
CREATE POLICY "Gerenciamento de drops" ON public.weekly_drops FOR ALL USING (true) WITH CHECK (true);

-- Newsletter: Inserção pública para qualquer visitante cadastrar seu e-mail
DROP POLICY IF EXISTS "Permitir inscrição anônima na newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Permitir inscrição anônima na newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Leitura de inscritos para admin" ON public.newsletter_subscribers;
CREATE POLICY "Leitura de inscritos para admin" ON public.newsletter_subscribers FOR SELECT USING (true);

-- Concierge: Inserção pública para visitantes solicitarem contato
DROP POLICY IF EXISTS "Permitir envio de solicitação concierge" ON public.concierge_inquiries;
CREATE POLICY "Permitir envio de solicitação concierge" ON public.concierge_inquiries FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Leitura de concierge para admin" ON public.concierge_inquiries;
CREATE POLICY "Leitura de concierge para admin" ON public.concierge_inquiries FOR SELECT USING (true);


-- ==============================================================================
-- SEED DATA (CARGA INICIAL DE CONTEÚDO OFICIAL)
-- ==============================================================================

-- 1. Inserir Autores Oficiais
INSERT INTO public.authors (slug, name, role, bio, quote, avatar, specialties, articles_count)
VALUES
(
    'henrique-vianna',
    'Henrique Vianna',
    'Editor-Chefe & Fundador',
    'Jornalista e pesquisador do mercado de luxo global com mais de 15 anos de cobertura entre Genebra, Paris, Londres e Milão. Atua como o curador-chefe do Radar do Luxo, cobrindo macrotendências, leilões fechados, hospitalidade de ultra-luxo e a economia das grandes maisons.',
    'O luxo autêntico é aquele que resiste ao teste do tempo e do modismo.',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    ARRAY['Economia do Luxo', 'Grandes Leilões', 'Hospitalidade Ultra-VIP', 'Drops & Tendências'],
    42
),
(
    'clara-meirelles',
    'Clara Meirelles',
    'Editora de Alta Relojoaria & Joalheria',
    'Formada em História da Arte pela Sorbonne e especialista em microengenharia mecânica. Percorre regularmente os vales suíços de Vallée de Joux e Le Brassus acompanhando mestres relojoeiros e cravadores de gemas preciosas.',
    'No verdadeiro luxo, o tempo não é uma medida utilitária; é a mais nobre das telas artísticas.',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    ARRAY['Grandes Complicações', 'Manufatura Suíça', 'Alta Joalheria', 'Leilões de Relógios'],
    19
),
(
    'gabriel-fontes',
    'Gabriel Fontes',
    'Editor de Hipercarros & Engenharia Naval',
    'Engenheiro de materiais com passagem pela indústria automobilística esportiva. Especialista em telemetria, dinâmica veicular e estaleiros náuticos da Riviera Italiana, testando hipercarros nas pistas de Nürburgring, Silverstone e Fiorano.',
    'A velocidade e a elegância são duas faces da mesma perfeição técnica.',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    ARRAY['Hipercarros Híbridos', 'Telemetria de Pista', 'Iates de Fibra de Carbono', 'Aerodinâmica Ativa'],
    16
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Inserir Drops da Semana
INSERT INTO public.weekly_drops (id, type, title, val, status, tag, sort_order)
VALUES
('drop-1', 'Leilão Sotheby''s', 'Rolex Daytona Paul Newman "Panda"', 'Arrematado por US$ 4.850.000', 'Finalizado', 'Recorde Mundial', 1),
('drop-2', 'Drop Oficial', 'Hermès Birkin Faubourg White Bus', 'Tiragem Ultra-Limitada: 15 unidades', 'Disponível via Concierge', 'Edição Histórica', 2),
('drop-3', 'Mercado de Metais', 'Ouro Fino 24k Spot Price', 'R$ 488,40 / g (+1.35% na semana)', 'Em Alta', 'Índice de Luxo', 3),
('drop-4', 'Lançamento Automotivo', 'Porsche 911 GT3 RS "Tribute to Carrera"', 'Alocação restrita a clientes VIP', 'Lista de Espera', 'Zuffenhausen', 4)
ON CONFLICT (id) DO NOTHING;

-- 3. Inserir Artigos Oficiais
INSERT INTO public.articles (
    id, slug, title, excerpt, content_paragraphs, image, category, category_slug, 
    type, badge, author_slug, date, read_time, is_hero, is_hero_secondary, specs, in_article_drop, video_url, video_duration, status
)
VALUES
(
    'art-1',
    'ferrari-f80-hipercarro-hibrido-maranello',
    'Ferrari F80: O Hipercarro Híbrido de 1.200 cv que Redefine a Engenharia de Maranello',
    'Apenas 799 exemplares mundiais serão produzidos. Com motor V6 biturbo derivado do protótipo vitorioso de Le Mans e três propulsores elétricos, a nova máquina italiana é o ápice da aerodinâmica ativa.',
    '[
        "Quando Maranello decide batizar um novo modelo com o sufixo numérico de aniversário de linhagem — seguindo os passos sagrados da 288 GTO, F40, F50, Enzo e LaFerrari —, a indústria automotiva mundial desacelera para observar. A nova Ferrari F80 não é uma simples evolução geracional: é uma ruptura conceitual e física.",
        "Sob a cobertura de fibra de carbono esculpida em túnel de vento, repousa um conjunto motriz híbrido diretamente transplantado do bólido 499P, bicampeão das 24 Horas de Le Mans. São 900 cavalos provenientes do propulsor a combustão V6 de 3.0 litros, acoplados a três motores elétricos que injetam mais 300 cv de resposta instantânea.",
        "A aerodinâmica ativa é a verdadeira protagonista. Em velocidades superiores a 250 km/h, o aerofólio traseiro e o difusor dianteiro móvel criam mais de 1.050 kg de pressão descendente (downforce), fazendo com que o bólido cole no asfalto com uma estabilidade gravitacional inacreditável.",
        "Para os 799 proprietários globais selecionados pessoalmente pela diretoria da Ferrari, a F80 representa o marco definitivo da transição tecnológica entre a combustão de alta rotação e a eletricidade de pista."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1400',
    'Supercarros',
    'supercarros',
    'article',
    'DESTAQUE PRINCIPAL',
    'henrique-vianna',
    '24 Outubro 2026',
    '7 min de leitura',
    true,
    false,
    '{
        "potencia": "1.200 cv combinados",
        "aceleracao": "0-100 km/h em 2,15s",
        "velocidadeMax": "350 km/h (limitada eletronicamente)",
        "tiragem": "799 unidades no mundo",
        "valor": "€ 3.600.000 (preço base)"
    }'::jsonb,
    '{
        "title": "Richard Mille RM 65-01 Split-Seconds Cronógrafo",
        "category": "Alta Relojoaria",
        "slug": "richard-mille-rm-65-01-split-seconds",
        "val": "US$ 380.000",
        "reason": "O relógio de pulso oficial utilizado pelos pilotos de teste da Scuderia durante o desenvolvimento da F80."
    }'::jsonb,
    null,
    null,
    'published'
),
(
    'art-2',
    'patek-philippe-grandmaster-chime-ouro-branco',
    'Patek Philippe Grandmaster Chime: A Mecânica de 20 Complicações em Ouro Branco',
    'Duas faces reversíveis, cinco funções de carrilhão acústico e uma caixa inteiramente gravada à mão com motivos de louros, demandando mais de 100 horas ininterruptas de buril.',
    '[
        "Existe uma fronteira nítida entre um instrumento que marca horas e uma escultura cinética que desafia a entropia. Na manufatura genebrina da Patek Philippe, o Grandmaster Chime habita sozinho esse segundo território.",
        "Desenvolvido originalmente para comemorar os 175 anos da maison familiar, o modelo reúne nada menos que 20 complicações distribuídas em dois mostradores distintos, possibilitados por um mecanismo de rotação de caixa patenteado que permite ao proprietário alternar a face exibida com um único toque suave.",
        "Entre os cinco modos sonoros de carrilhão, destaca-se a repetição acústica de minutos com três gongos afinados artesanalmente pelo próprio mestre afinador e um alarme de data que soa o dia do mês. Cada componente do mecanismo foi acabado com chanfros polidos a espelho usando madeira nobre de sabugueiro."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    'Alta Relojoaria',
    'relogios',
    'article',
    'PEÇA HISTÓRICA',
    'clara-meirelles',
    '23 Outubro 2026',
    '6 min de leitura',
    false,
    true,
    '{
        "complicacoes": "20 complicações ativas",
        "movimento": "Calibre 300 GS AL 36-750 QIS FUS IRM",
        "material": "Ouro branco 18 quilates",
        "dimensoes": "Diâmetro 47,7 mm / Altura 16,07 mm",
        "valor": "Estimado em US$ 2.800.000"
    }'::jsonb,
    '{
        "title": "Leilão Sotheby''s: Rolex Daytona \"Paul Newman\" Panda",
        "category": "Alta Relojoaria",
        "slug": "rolex-daytona-paul-newman-recorde-leilao",
        "val": "US$ 4.850.000",
        "reason": "Outro marco histórico de leilões que redefiniu o apetite por relógios raros mecânicos neste trimestre."
    }'::jsonb,
    null,
    null,
    'published'
),
(
    'art-3',
    'inside-the-atelier-gravacao-manual-le-brassus',
    'Inside the Atelier: O Nível Milimétrico da Gravação Manual em Le Brassus',
    'Um registro cinematográfico exclusivo de 4 minutos acompanhando mestres gravadores polindo chanfros e esculpindo pontes de ouro sob microscópios de precisão suíços.',
    '[
        "Neste mini-documentário capturado em película digital de alta sensibilidade, nossas câmeras tiveram acesso inédito à sala de acabamento de alta relojoaria nas montanhas do Jura suíço.",
        "Assista como a pressão manual do buril de aço contra a platina cria microchanfros que nenhuma fresadora de cinco eixos moderna consegue replicar. É onde a ciência da mecânica se dissolve na pura arte da paciência."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200',
    'Alta Relojoaria',
    'relogios',
    'video',
    '▶ VÍDEO EXCLUSIVO',
    'clara-meirelles',
    '22 Outubro 2026',
    '4 min de vídeo',
    false,
    true,
    '{
        "formato": "Mini-Documentário 4K Cinema",
        "localizacao": "Le Brassus, Vallée de Joux, Suíça",
        "duracao": "04 minutos e 18 segundos",
        "acesso": "Produção Exclusiva Radar do Luxo"
    }'::jsonb,
    null,
    'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-watchmaker-repairing-a-watch-41857-large.mp4',
    '04:18',
    'published'
),
(
    'art-4',
    'villa-sole-refugio-brutalista-falecias-capri',
    'Villa Sole: O Refúgio Brutalista Suspenso sobre as Falésias de Capri',
    'Concreto aparente tonalizado em areia, vidro estrutural do piso ao teto e uma piscina de borda infinita que se funde com o azul profundo do Mar Tirreno.',
    '[
        "Empoleirada em uma escarpa rochosa onde outrora apenas gaivotas alcançavam, a Villa Sole é um manifesto de como a arquitetura contemporânea pode dialogar com a monumentalidade da natureza mediterrânea sem tentar dominá-la.",
        "O arquiteto responsável utilizou uma mistura exclusiva de cimento branco e agregados de pedra calcária local, permitindo que a tonalidade do concreto mude de cor conforme a inclinação da luz solar ao longo do dia — do ocre suave da alvorada ao rosa pálido do crepúsculo caprese.",
        "Os interiores são desprovidos de excessos ostensivos: pisos em travertino romano aquecido, painéis de nogueira canaletto fosca e uma adega escavada na rocha mãe com controle de umidade passivo."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    'Arquitetura',
    'arquitetura',
    'article',
    'RESIDÊNCIA DO ANO',
    'henrique-vianna',
    '21 Outubro 2026',
    '5 min de leitura',
    false,
    false,
    '{
        "arquiteto": "Studio Matteo Rossi Milano",
        "areaConstruida": "1.450 m²",
        "terreno": "12.000 m² de falésia privativa",
        "localizacao": "Anacapri, Golfo de Nápoles, Itália",
        "valor": "Estimado em € 42.000.000"
    }'::jsonb,
    '{
        "title": "Riva 130'' Bellissima: O Superiate Flybridge",
        "category": "Destinos & Iates",
        "slug": "riva-130-bellissima-superiate-riviera",
        "val": "A partir de € 24M",
        "reason": "O iate italiano desenhado com a mesma linguagem náutica orgânica que atraca no ancoradouro privativo da Villa Sole."
    }'::jsonb,
    null,
    null,
    'published'
),
(
    'art-5',
    'aston-martin-valkyrie-amr-pro-aerodinamica',
    'Aston Martin Valkyrie AMR Pro: Aerodinâmica Pura para Pistas Privadas',
    'Com motor V12 aspirado de 6.5 litros que gira a 11.100 RPM, este monólito de fibra de carbono gera mais downforce do que o próprio peso do veículo.',
    '[
        "Projetado sem as amarras das leis de trânsito de rua ou regulamentos da Fórmula 1, o Valkyrie AMR Pro é o experimento mais radical já conduzido por Adrian Newey.",
        "Ouvir os 12 cilindros da Cosworth girando a mais de onze mil rotações na reta do hangar de Silverstone é uma experiência quase física: as ondas sonoras vibram no peito do piloto antes mesmo do carro passar pela zebra.",
        "O chassi é uma peça única de compósito de carbono com túneis de efeito solo tão profundos que o carro seria teoricamente capaz de rodar de cabeça para baixo no teto de um túnel acima de 250 km/h."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200',
    'Supercarros',
    'supercarros',
    'article',
    'PISTA EXCLUSIVA',
    'gabriel-fontes',
    '20 Outubro 2026',
    '6 min de leitura',
    false,
    false,
    '{
        "motor": "Cosworth V12 6.5L Naturalmente Aspirado",
        "rotacaoMaxima": "11.100 RPM",
        "pesoSeco": "1.000 kg cravados",
        "downforce": "Mais de 2.600 kg a 300 km/h",
        "tiragem": "40 unidades (circuito fechado)"
    }'::jsonb,
    null,
    null,
    null,
    'published'
),
(
    'art-6',
    'arte-costura-selle-hermes-1837',
    'A Arte da Costura ''Selle'': Por Que a Hermès Mantém Processos Manuais de 1837',
    'Dois fios de linho encerado com cera de abelha e duas agulhas cruzadas: a técnica ancestral que impede que uma bolsa se desfaça mesmo se um ponto se romper.',
    '[
        "Em um mundo dominado pela automação veloz e linhas de costura robóticas, nos ateliês da Hermès em Pantin reina um silêncio quase monástico, pontuado apenas pelo som seco do martelo de madeira contra a sovela.",
        "A costura selê (*point sellier*), desenvolvida no século XIX para arneses de carruagens que precisavam suportar a força bruta de cavalos de corrida, é executada com um único fio longo e duas agulhas que se cruzam no interior do couro.",
        "Se uma máquina de costura moderna rompe um ponto, toda a costura se desfaz. No ponto selê, cada nó é travado independentemente: a peça sobrevive intacta por gerações."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200',
    'Alta-Costura',
    'estilo',
    'article',
    'MANUFATURA',
    'henrique-vianna',
    '19 Outubro 2026',
    '8 min de leitura',
    false,
    false,
    '{
        "origem": "Pantin, arredores de Paris, França",
        "tempoMedio": "De 18 a 24 horas por peça única",
        "material": "Couro Box Calf e Linho Encerado",
        "artesao": "1 único artesão assina a peça do início ao fim"
    }'::jsonb,
    null,
    null,
    null,
    'published'
),
(
    'art-7',
    'riva-130-bellissima-superiate-riviera',
    'Riva 130'' Bellissima: O Superiate Flybridge de Linhas Esculturais na Riviera',
    'Quarenta metros de elegância italiana contemporânea com convés em madeira nobre e suíte master com vista panorâmica para o oceano.',
    '[
        "Nascido na mesma prancheta do lendário estúdio Officina Italiana Design, o Riva 130 Bellissima é o ápice da linha flybridge de fibra de carbono e vidro.",
        "Com mais de sessenta metros quadrados de flybridge aberto sob o céu mediterrâneo e estabilizadores giroscópicos de última geração, a embarcação proporciona ancoragem sem balanço mesmo em baías agitadas de Saint-Tropez ou Capri."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
    'Destinos & Iates',
    'destinos',
    'article',
    'LANÇAMENTO NÁUTICO',
    'gabriel-fontes',
    '18 Outubro 2026',
    '6 min de leitura',
    false,
    false,
    '{
        "comprimento": "40,00 metros (131 ft)",
        "motores": "2x MTU 16V 2000 M96L de 2.638 mhp",
        "velocidadeCruzeiro": "23 nós",
        "estaleiro": "La Spezia, Grupo Ferretti, Itália",
        "valor": "€ 24.500.000"
    }'::jsonb,
    null,
    null,
    null,
    'published'
),
(
    'art-8',
    'audemars-piguet-royal-oak-perpetual-calendar-ceramica',
    'Audemars Piguet Royal Oak Perpetual Calendar em Cerâmica Azul Noturna',
    'A manufatura de Le Brassus eleva o patamar dos materiais avançados com uma caixa de cerâmica resistente a arranhões e acabamento escovado à mão.',
    '[
        "A usinagem e polimento de cerâmica sintética é um dos maiores desafios da microengenharia: o material é sete vezes mais duro que o aço inoxidável e exige ferramentas diamantadas que desgastam a cada poucas horas de operação.",
        "O tom azul noturno desta edição da Audemars Piguet foi obtido após mais de dois anos de pesquisa química com pigmentos minerais submetidos a sinterização a mais de 1.400 graus Celsius."
    ]'::jsonb,
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1200',
    'Alta Relojoaria',
    'relogios',
    'article',
    'ALTA COMPLICAÇÃO',
    'clara-meirelles',
    '17 Outubro 2026',
    '5 min de leitura',
    false,
    false,
    '{
        "materialCaixa": "Cerâmica azul de alta densidade",
        "calibre": "Automático 5134 ultrafino (4,31 mm)",
        "mostrador": "Grande Tapisserie azul com subdials",
        "reservaMarcha": "40 horas"
    }'::jsonb,
    null,
    null,
    null,
    'published'
)
ON CONFLICT (slug) DO NOTHING;
