/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — MOTOR DE RANKING EDITORIAL & GRAVIDADE DA CAPA
 * ==============================================================================
 * 1. Ranking Multidimensional (0 a 100):
 *    - Impacto Econômico & Liquidez (30%): Volume de capital, arremate e valorização.
 *    - Relevância Social & Dinástica (25%): Governança de Family Offices, Forbes e legado.
 *    - Inovação em Engenharia (25%): Recordes de telemetria, complicações e arquitetura.
 *    - Fator de Escassez & Acesso (20%): Tiragem estrita, peça única e acesso por convite.
 *
 * 2. Algoritmo de Gravidade Temporal da Capa (Capa Weight Decay):
 *    Peso da Capa = Score Base / (Horas no Ar + 2)^1.3
 *    Permite rotação orgânica baseada em mérito jornalístico e frescor temporal.
 * ==============================================================================
 */

/**
 * Calcula o score base e os 4 pilares de justificativa para um item
 */
export function calculateEditorialScore(item) {
  const specsStr = item.specs ? Object.entries(item.specs).map(([k, v]) => `${k} ${v}`).join(' ') : '';
  const text = `${item.title || ''} ${item.suggestedHook || ''} ${item.excerpt || ''} ${item.summary || ''} ${item.originalTitle || ''} ${item.description || ''} ${specsStr}`.toLowerCase();
  
  // 1. Pilar Econômico & Liquidez (0 a 30 pts)
  let economicScore = 22; // base sólida de luxo internacional
  let economicReason = 'Ativo de alto valor agregado com liquidez global e forte demanda no mercado secundário de prestígio.';
  
  if (text.includes('51m') || text.includes('51.7') || text.includes('100 milhões') || text.includes('120 milhões') || text.includes('250 milhões') || text.includes('$100m') || text.includes('$50m') || text.includes('billion') || text.includes('bilion')) {
    economicScore = 30;
    economicReason = 'Transação monumental no patamar de dezenas ou centenas de milhões de dólares/euros; refúgio patrimonial absoluto.';
  } else if (text.includes('milhões') || text.includes('milhoes') || text.includes('million') || text.includes('leilão') || text.includes('auction') || text.includes('sotheby') || text.includes('christie') || text.includes('record') || text.includes('recorde')) {
    economicScore = 28;
    economicReason = 'Forte atratividade de liquidez em leilões internacionais e valorização histórica acima dos índices de mercado.';
  } else if (text.includes('family office') || text.includes('forbes') || text.includes('ouro') || text.includes('gold') || text.includes('estate') || text.includes('lists for') || text.includes('sold for') || text.includes('billionaire')) {
    economicScore = 27;
    economicReason = 'Movimentação estratégica de alocação patrimonial ligada a comitês de family offices e fortunas soberanas.';
  } else if (text.includes('€') || text.includes('us$') || text.includes('r$') || text.includes('$') || text.includes('£') || text.includes('milhão') || text.includes('milhao') || text.includes('price')) {
    economicScore = 25;
    economicReason = 'Avaliação monetária substancial em moeda forte com demanda qualificada de colecionadores.';
  }

  // 2. Pilar Social, Dinástico & Reputacional (0 a 25 pts)
  let socialScore = 19;
  let socialReason = 'Prestígio estabelecido entre círculos refinados de colecionismo internacional.';
  
  if (text.includes('censo forbes') || text.includes('family offices') || text.includes('dinastia') || text.includes('dynasty') || text.includes('capital soberano') || text.includes('royal')) {
    socialScore = 25;
    socialReason = 'Pauta de altíssima relevância institucional que mapeia a governança das maiores fortunas multigeracionais globais.';
  } else if (text.includes('patek') || text.includes('bugatti') || text.includes('hermès') || text.includes('hermes') || text.includes('ferrari') || text.includes('koenigsegg') || text.includes('pagani') || text.includes('rolls-royce') || text.includes('bentley') || text.includes('rolex') || text.includes('audemars') || text.includes('lange') || text.includes('richard mille')) {
    socialScore = 24;
    socialReason = 'Símbolo máximo de autoridade dinástica, tradição secular e prestígio inquestionável no circuito internacional.';
  } else if (text.includes('anônimo') || text.includes('colecionador') || text.includes('convite estrito') || text.includes('collector') || text.includes('concours') || text.includes('monaco') || text.includes('geneva')) {
    socialScore = 22;
    socialReason = 'Chancela de acesso ultra-exclusivo restrito à lista fechada de clientes históricos da maison.';
  }

  // 3. Pilar Engenharia, Técnica & Manufatura (0 a 25 pts)
  let engineeringScore = 20;
  let engineeringReason = 'Excelência construtiva e aplicação de materiais nobres de altíssima especificação.';
  
  if (text.includes('0-400-0') || text.includes('1.800 cv') || text.includes('12.100 rpm') || text.includes('1.600 cv') || text.includes('20 complicações') || text.includes('tourbillon') || text.includes('minute repeater') || text.includes('grand complication')) {
    engineeringScore = 25;
    engineeringReason = 'Ponto de inflexão na engenharia mecânica mundial: recorde de telemetria ou calibre de micro-mecânica histórica.';
  } else if (text.includes('le mans') || text.includes('v16') || text.includes('v12') || text.includes('v8') || text.includes('twin-turbo') || text.includes('cerâmica') || text.includes('titanium') || text.includes('carbon fiber') || text.includes('supercar') || text.includes('hypercar') || text.includes('superyacht') || text.includes('megayacht') || text.includes('brutalista') || text.includes('absolut')) {
    engineeringScore = 24;
    engineeringReason = 'Engenharia de ponta que combina aerodinâmica ativa aeroespacial, materiais avançados e tolerâncias milimétricas.';
  } else if (text.includes('buril') || text.includes('gravado à mão') || text.includes('costura selê') || text.includes('point sellier') || text.includes('calibre') || text.includes('chronograph') || text.includes('hand-finished') || text.includes('bespoke')) {
    engineeringScore = 23;
    engineeringReason = 'Manufatura puramente artesanal preservada há séculos contra a obsolescência digital e robótica.';
  }

  // 4. Pilar Escassez & Acesso (0 a 20 pts)
  let scarcityScore = 16;
  let scarcityReason = 'Distribuição controlada com tempo de espera padrão de ateliê internacional.';
  
  if (text.includes('chassi 3765') || text.includes('lote estrela') || text.includes('peça única') || text.includes('15 unidades') || text.includes('25 exemplares') || text.includes('one-of-a-kind') || text.includes('one-off') || text.includes('unique piece')) {
    scarcityScore = 20;
    scarcityReason = 'Escassez matemática extrema: exemplar único no mundo ou tiragem menor que 25 unidades homologadas.';
  } else if (text.includes('50 exemplares') || text.includes('250 unidades') || text.includes('799 unidades') || text.includes('sob convite') || text.includes('sueco') || text.includes('limited edition') || text.includes('only ') || text.includes('rare') || text.includes('unveils') || text.includes('first look')) {
    scarcityScore = 19;
    scarcityReason = 'Tiragem rigorosamente numerada já esgotada antes do anúncio público formal ou revelação mundial restrita.';
  } else if (text.includes('lista de espera') || text.includes('alocação restrita') || text.includes('waitlist') || text.includes('allocation') || text.includes('invitation-only')) {
    scarcityScore = 18;
    scarcityReason = 'Acesso condicionado a relacionamento prévio homologado pela diretoria da marca.';
  }

  // Se o item já tiver score definido (como pautas curadas), calibra os 4 pilares para atingir a meta
  if (item.rankingScore) {
    const target = Math.min(100, Math.max(0, item.rankingScore));
    const rawSum = economicScore + socialScore + engineeringScore + scarcityScore;
    if (rawSum > 0) {
      const factor = target / rawSum;
      economicScore = Math.min(30, Math.round(economicScore * factor));
      socialScore = Math.min(25, Math.round(socialScore * factor));
      engineeringScore = Math.min(25, Math.round(engineeringScore * factor));
      scarcityScore = Math.min(20, Math.round(scarcityScore * factor));

      const adjustedSum = economicScore + socialScore + engineeringScore + scarcityScore;
      const diff = target - adjustedSum;
      if (diff !== 0) {
        if (economicScore + diff <= 30 && economicScore + diff >= 0) {
          economicScore += diff;
        } else if (engineeringScore + diff <= 25 && engineeringScore + diff >= 0) {
          engineeringScore += diff;
        } else if (socialScore + diff <= 25 && socialScore + diff >= 0) {
          socialScore += diff;
        }
      }
    }
  }

  const totalScore = item.rankingScore || Math.min(100, economicScore + socialScore + engineeringScore + scarcityScore);

  let tier = 'B';
  let tierLabel = 'Pauta Complementar';
  let tierBadge = 'border-blue-500/30 text-blue-400 bg-blue-500/10';

  if (totalScore >= 94) {
    tier = 'S+';
    tierLabel = 'Patrimônio Máximo (Capa Absoluta)';
    tierBadge = 'border-amber-400 text-black bg-gradient-to-r from-amber-300 via-lux-gold to-amber-400 font-extrabold shadow-md';
  } else if (totalScore >= 88) {
    tier = 'A';
    tierLabel = 'Alta Gravitas Editorial';
    tierBadge = 'border-lux-gold/60 text-lux-gold bg-lux-gold/15 font-bold';
  }

  return {
    totalScore,
    tier,
    tierLabel,
    tierBadge,
    breakdown: {
      economic: { score: economicScore, max: 30, reason: economicReason },
      social: { score: socialScore, max: 25, reason: socialReason },
      engineering: { score: engineeringScore, max: 25, reason: engineeringReason },
      scarcity: { score: scarcityScore, max: 20, reason: scarcityReason }
    }
  };
}

/**
 * Calcula o peso dinâmico de capa de um artigo baseado em seu score e horas no ar
 * Fórmula de Decaimento: Peso da Capa = Score Base / (Horas no Ar + 2)^1.3
 */
export function calculateCapaWeight(article, now = Date.now()) {
  const baseScore = article.rankingScore || calculateEditorialScore(article).totalScore;
  
  // Se estiver fixado manualmente na capa (Pin), tem prioridade absoluta protegida de decaimento
  if (article.isPinnedHero) {
    return {
      currentWeight: 999,
      baseScore,
      hoursElapsed: 0,
      isPinned: true,
      decayPercentage: 0,
      statusLabel: 'Fixado Manualmente na Capa'
    };
  }

  // Determina a data de publicação de forma segura (suportando datas em português)
  let publishedTimestamp = now - 4 * 3600 * 1000;
  if (article.publishedAt && !isNaN(new Date(article.publishedAt).getTime())) {
    publishedTimestamp = new Date(article.publishedAt).getTime();
  } else if (article.published_at && !isNaN(new Date(article.published_at).getTime())) {
    publishedTimestamp = new Date(article.published_at).getTime();
  } else if (article.createdAt && !isNaN(new Date(article.createdAt).getTime())) {
    publishedTimestamp = new Date(article.createdAt).getTime();
  } else if (article.date && typeof article.date === 'string') {
    const months = {
      janeiro: 0, fevereiro: 1, marco: 2, março: 2, abril: 3, maio: 4, junho: 5,
      julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11
    };
    const parts = article.date.toLowerCase().replace(/de /g, '').split(' ');
    if (parts.length >= 3) {
      const day = parseInt(parts[0], 10);
      const month = months[parts[1]] !== undefined ? months[parts[1]] : 0;
      const year = parseInt(parts[2], 10);
      if (!isNaN(day) && !isNaN(year)) {
        publishedTimestamp = new Date(year, month, day).getTime();
      }
    }
  }

  const diffMs = Math.max(0, now - publishedTimestamp);
  const hoursElapsed = diffMs / (3600 * 1000);

  // Algoritmo de Decaimento com Meia-Vida de 24 horas:
  // Peso = BaseScore * (0.5)^(horas / 24)
  const halfLifeHours = 24;
  const decayFactor = Math.pow(0.5, hoursElapsed / halfLifeHours);
  const currentWeight = Math.max(1, Math.round(baseScore * decayFactor * 10) / 10);
  const decayPercentage = Math.min(100, Math.round((1 - decayFactor) * 100));

  let healthColor = 'text-lux-emerald';
  let healthLabel = 'Capa em Alta Frescura (0h a 12h)';

  if (hoursElapsed >= 36 || currentWeight < 40) {
    healthColor = 'text-red-400';
    healthLabel = 'Decaimento Alto (Pronto para Rotação)';
  } else if (hoursElapsed >= 18 || currentWeight < 65) {
    healthColor = 'text-amber-400';
    healthLabel = 'Capa Maduro (Aberto a Desafiantes)';
  }

  return {
    currentWeight,
    baseScore,
    hoursElapsed: Math.round(hoursElapsed * 10) / 10,
    isPinned: false,
    decayPercentage: Math.max(0, decayPercentage),
    healthColor,
    healthLabel
  };
}

/**
 * Avalia o cenário da Capa atual e identifica a matéria ou pauta recomendada para assumir o topo.
 * 
 * Regra de Ouro do Prestígio (Proteção da "Segunda Matéria"):
 * - O ranking de desafiantes é global: calcula o peso dinâmico de TODO o acervo.
 * - Uma matéria de alto impacto (Score >= 88, Tier S+ ou A) que foi publicada no feed
 *   continua com alto peso de decaimento por muitas horas, impedindo que uma matéria
 *   recente mais fraca (Tier B, Score < 88) "fure a fila" da Capa por mero frescor temporal.
 */
export const MIN_HERO_PRESTIGE_SCORE = 88; // Piso mínimo para Capa natural (Tier A ou S+)

export function getHeroAnalysis(articles, now = Date.now()) {
  const published = (articles || []).filter(a => a.status !== 'draft' && a.categorySlug !== 'todos');
  if (published.length === 0) return null;

  // Encontra o Hero atual (seja marcado como isHero ou o primeiro da lista)
  let currentHero = published.find(a => a.isHero) || published[0];
  const currentHeroWeight = calculateCapaWeight(currentHero, now);

  // Se o hero atual estiver com Pin (fixado), não há recomendação de troca
  if (currentHero.isPinnedHero) {
    return {
      currentHero,
      currentHeroWeight,
      topChallenger: null,
      shouldRotate: false,
      delta: 0,
      recommendationMsg: 'Capa fixada manualmente por decisão editorial. O decaimento automático está em pausa.'
    };
  }

  // Avalia todos os outros artigos publicados como concorrentes
  const contenders = published
    .filter(a => a.id !== currentHero.id && a.slug !== currentHero.slug)
    .map(art => {
      const weightData = calculateCapaWeight(art, now);
      return {
        article: art,
        weightData
      };
    })
    // Ordena pelo peso dinâmico decrescente
    .sort((a, b) => b.weightData.currentWeight - a.weightData.currentWeight);

  // Priorização de Prestígio: se houver desafiante com Score Base >= 88 (Tier A ou S+), ele tem prioridade sobre matérias Tier B
  const nobleContender = contenders.find(c => c.weightData.baseScore >= MIN_HERO_PRESTIGE_SCORE);
  const topContender = nobleContender || contenders[0] || null;

  if (!topContender) {
    return {
      currentHero,
      currentHeroWeight,
      topChallenger: null,
      shouldRotate: false,
      delta: 0,
      recommendationMsg: 'Nenhuma outra matéria publicada disponível para disputa de Capa.'
    };
  }

  const delta = Math.round((topContender.weightData.currentWeight - currentHeroWeight.currentWeight) * 10) / 10;
  // Exige folga mínima de 12 pontos para evitar trocas epilépticas na Capa
  const shouldRotate = delta > 12; 

  let recommendationMsg = 'A Capa atual continua com peso dominante no Radar.';
  if (shouldRotate) {
    recommendationMsg = `O desafiante "${topContender.article.title.slice(0, 35)}..." (Score: ${topContender.weightData.baseScore}) superou a Capa atual em +${delta} pts. Recomendada a rotação editorial!`;
  } else if (delta > 0) {
    recommendationMsg = `O desafiante está próximo (+${delta} pts), mas a Capa atual ainda possui inércia editorial aceitável.`;
  }

  return {
    currentHero,
    currentHeroWeight,
    topChallenger: topContender,
    contenders: contenders.slice(0, 3),
    shouldRotate,
    delta,
    recommendationMsg
  };
}
