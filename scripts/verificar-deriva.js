/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — PORTA DE DERIVA
 * ==============================================================================
 * Responde, antes de qualquer automação encostar no código, a única pergunta que
 * dá para responder sem painel: esta pasta é o que está no ar?
 *
 *   npm run verificar:deriva
 *   npm run verificar:deriva -- --puxar      # traz a pasta para origin/main e re-mede
 *   npm run verificar:deriva -- --sem-rede   # só git e código, nenhuma chamada HTTP
 *
 * A publicação não acontece nesta máquina: os timers locais radar-crawler.timer e
 * radar-scout.timer estão desligados e o reflog deste clone só tem `pull --ff-only`.
 * Um loop que lê esta pasta sem passar por aqui trabalha com acervo velho sem aviso.
 *
 * Não escreve nada, não faz push, não roda o crawler, não chama serviço pago.
 * ==============================================================================
 */

import { execFile } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const rodar = promisify(execFile);
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argumento = (nome) => process.argv.includes(nome);
const SEM_REDE = argumento('--sem-rede');
const BASE = (() => {
  const i = process.argv.indexOf('--base');
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1].replace(/\/+$/, '') : 'https://www.radardoluxo.com.br';
})();

const falhas = [];
const linhas = [];
// Em vez de despejar a lista crua de checagens em quem só quer saber o que fazer,
// cada falha registra a ação. A saída fecha com "1ª ação" e o resto em contagem.
const passos = [];

function registrar(rotulo, ok, detalhe) {
  linhas.push(`${ok ? '✓' : '✗'} ${rotulo.padEnd(32)} ${detalhe}`);
  if (!ok) falhas.push(`${rotulo}: ${detalhe}`);
}

async function git(args) {
  const { stdout } = await rodar('git', args, { cwd: RAIZ, maxBuffer: 4 * 1024 * 1024 });
  return stdout.trim();
}

async function buscar(url, texto = false) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'radar-deriva/1 (checagem local; nenhum login, nenhum serviço pago)' },
    redirect: 'follow',
    signal: AbortSignal.timeout(20_000),
  });
  return { status: res.status, tipo: res.headers.get('content-type') || '', corpo: texto ? await res.text() : '' };
}

/** O número da rodada mora numa constante do fonte e é inlined no bundle. */
async function versaoLocal() {
  const fonte = await git(['show', 'HEAD:src/services/radarService.js']);
  const m = fonte.match(/CURRENT_CONTENT_VERSION\s*=\s*'([^']+)'/);
  if (!m) throw new Error('CURRENT_CONTENT_VERSION não encontrada em src/services/radarService.js');
  return m[1];
}

/** Endereços de matéria desta pasta, para amostrar quando o sitemap do ar não tem nenhum. */
async function slugsLocais() {
  const { ARTICLES } = await import(pathToFileURL(path.join(RAIZ, 'src/data/mockData.js')).href);
  return (Array.isArray(ARTICLES) ? ARTICLES : []).map((a) => a?.slug).filter(Boolean);
}

async function versaoNoAr() {
  const pagina = await buscar(`${BASE}/`, true);
  const asset = (pagina.corpo.match(/\/assets\/(index-[\w-]+\.js)/) || [])[1];
  if (!asset) return { erro: `/ respondeu ${pagina.status} sem referência a /assets/index-*.js (shell? página errada?)` };
  const bundle = await buscar(`${BASE}/assets/${asset}`, true);
  const versoes = [...new Set([...bundle.corpo.matchAll(/v\d+\.\d+_\d{13}/g)].map((m) => m[0]))];
  return { asset, versoes, bytes: bundle.corpo.length };
}

async function main() {
  console.log(`\n💎 PORTA DE DERIVA — Radar do Luxo`);
  console.log(`   pasta: ${RAIZ}`);
  console.log(`   alvo:  ${BASE}\n`);

  // 1. A pasta está no commit que o mundo considera principal?
  const [head, remotoBruto, sujo] = await Promise.all([
    git(['rev-parse', 'HEAD']),
    git(['ls-remote', 'origin', 'refs/heads/main']),
    git(['status', '--porcelain']),
  ]);
  const remoto = remotoBruto.split('\t')[0];
  // A direção importa: atrás = puxar; à frente = alguém escreveu aqui e a automação
  // que roda em outra máquina forkou. Medido 2026-11-16: remoto b86229c, local e80a425.
  let diferenca = '';
  // Enquanto houver commit daqui que ainda não foi empurrado, as falhas de página são
  // consequência do mesmo fato: a virada está pronta, só não está no ar. Avisar uma vez.
  let esperaPublicacao = false;
  if (remoto && head !== remoto) {
    const conta = async (intervalo) => {
      try { return Number(await git(['rev-list', '--count', intervalo])); } catch { return null; }
    };
    const atras = await conta(`${head}..${remoto}`);
    const aFrente = await conta(`${remoto}..${head}`);
    if (atras === null) {
      diferenca = ' · o commit remoto ainda não está baixado nesta pasta';
      passos.push('baixar o que o outro lado publicou: `npm run verificar:deriva -- --puxar`');
    } else if (aFrente === 0) {
      diferenca = ` · a pasta está ${atras} commit(s) ATRÁS do remoto`;
      passos.push(`puxar ${atras} publicação(s) do outro lado: ` + '`npm run verificar:deriva -- --puxar`');
    } else if (atras === 0) {
      diferenca = ` · a pasta está ${aFrente} commit(s) À FRENTE do remoto: algo escreveu aqui`;
      passos.push('isto aqui ainda não foi publicado: empurrar os commits e esperar o deploy');
      esperaPublicacao = true;
    } else {
      diferenca = ` · DIVERGIU: ${aFrente} commit(s) só aqui, ${atras} só lá`;
      passos.push(`as duas histórias têm commits diferentes (${aFrente} aqui, ${atras} lá): decidir qual vale antes de qualquer pull`);
      esperaPublicacao = true;
    }
  }
  registrar('cabeça == origin/main', Boolean(remoto) && head === remoto, `local ${head.slice(0, 7)} / remoto ${(remoto || '?').slice(0, 7)}${diferenca}`);
  registrar('árvore de trabalho limpa', sujo === '', sujo === '' ? 'nada pendente' : `${sujo.split('\n').length} arquivo(s) modificados: ${sujo.split('\n').slice(0, 3).join(' ')}`);
  if (sujo !== '') passos.push(`deixar a pasta limpa: commitar ${sujo.split('\n').length} arquivo(s) pendentes (ou desfazer as mudanças)`);

  // 2. O marcador que o app usa para decidir se o acervo salvo no navegador vale.
  //    Ele NÃO prova igualdade de conteúdo: em 2026-11-16 22:20 o commit b86229c mudou
  //    quatro linhas de src/data/hotFeedsData.js sem bump de versão e este check passou
  //    verde. Quem pega a deriva nesse caso é o check 1, e é por isso que ele é o primeiro.
  const local = await versaoLocal();
  if (SEM_REDE) {
    linhas.push(`· versão local                   ${local} (rede pulada com --sem-rede)`);
  } else {
    const ar = await versaoNoAr();
    if (ar.erro) {
      registrar('bundle servido legível', false, ar.erro);
    } else {
      registrar('marcador de versão do acervo == HEAD', ar.versoes.includes(local), `HEAD ${local} | no ar ${ar.versoes.join(', ') || 'nenhuma'} (${ar.asset}, ${ar.bytes} bytes)`);

      // 3. Metadado e corpo por matéria: o que a Fase 1 prometeu entregar.
      const sitemap = await buscar(`${BASE}/sitemap.xml`, true);
      const urls = [...sitemap.corpo.matchAll(/<loc>([^<]+\/artigo\/[^<]+)<\/loc>/g)].map((m) => m[1]);
      registrar('sitemap lista matérias', urls.length > 1, `${urls.length} URLs de matéria no sitemap do ar`);
      if (urls.length <= 1 && !esperaPublicacao) {
        passos.push('o sitemap do ar não lista nenhuma matéria: nada é indexável por endereço — a virada de página não está publicada');
      }

      // Sem sitemap, amostrar do acervo desta pasta: é justamente o caso em que as
      // matérias existem mas não têm página, e era aqui que a régua ficava muda.
      const amostra = urls.length
        ? urls.slice(0, 3)
        : (await slugsLocais()).slice(0, 3).map((slug) => `${BASE}/artigo/${slug}`);
      for (const url of amostra) {
        const pagina = await buscar(url, true);
        const titulo = (pagina.corpo.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
        const paragrafos = (pagina.corpo.match(/<p[\s>]/g) || []).length;
        const imagem = /property="og:image"/.test(pagina.corpo);
        const ok = pagina.status === 200 && paragrafos > 0 && imagem && !/Digital Magazine &amp; Trend Radar<\/title>/.test(pagina.corpo);
        registrar(`matéria endereçável ${url.split('/artigo/')[1].slice(0, 18)}…`, ok, `HTTP ${pagina.status}, <p>=${paragrafos}, og:image=${imagem}, "${titulo.slice(0, 34)}…"`);
        if (!ok && !esperaPublicacao && !passos.some((p) => p.startsWith('matéria abrindo'))) {
          passos.push('matéria abrindo com o título da home, sem corpo nem capa: a virada de página não está publicada');
        }
      }

      const fantasma = await buscar(`${BASE}/artigo/nao-existe-para-a-checagem-0000`);
      registrar('404 real em matéria ausente', fantasma.status === 404, `HTTP ${fantasma.status} com ${fantasma.tipo || 'sem content-type'}`);
      if (fantasma.status !== 404 && !esperaPublicacao) passos.push('endereço de matéria qualquer responde 200: matéria que sai do acervo vira página fantasma');
    }
  }

  console.log(linhas.join('\n'));
  if (falhas.length) {
    const acoes = [...new Set(passos)];
    console.log(`\n❌ FORA DO ACORDO — ${falhas.length} problema(s).`);
    if (acoes.length) {
      console.log('   O QUE FAZER:');
      acoes.forEach((a, i) => console.log(`   ${i + 1}. ${a}`));
    } else {
      for (const f of falhas) console.log(`   • ${f}`);
    }
    console.log('');
    process.exit(1);
  }
  console.log('\n✅ TÁ REDONDO — esta pasta é o que está no ar. Pode trabalhar em cima daqui.\n');
}

if (argumento('--puxar')) {
  console.log('· puxando origin/main (só fast-forward, nada é escrito à mão)\n');
  await git(['pull', '--ff-only', 'origin', 'main']);
}

main().catch((erro) => {
  console.error(`\n💥 a checagem não terminou: ${erro instanceof Error ? erro.message : erro}`);
  console.error('   porta fechada por segurança: sem resposta, a automação não trabalha em cima desta pasta.\n');
  process.exit(2);
});
