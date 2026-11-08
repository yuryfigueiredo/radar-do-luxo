/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — PORTÃO DE CAPTURAS
 * ==============================================================================
 * Rodar depois de ligar a planilha. Não "roda e mostra um log": ele sai com
 * código != 0 quando a linha não chegou na planilha, então serve como teste de
 * regressão e como checagem de qualquer mão que mexer nesse caminho.
 *
 *   npm run verificar:capturas
 *   npm run verificar:capturas -- --base http://localhost:4000
 *
 * Escreve duas linhas de sondagem na planilha (marcadas com "sondagem").
 * ==============================================================================
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
try {
  process.loadEnvFile(path.join(RAIZ, '.env'));
} catch (erro) {
  // Sem .env local também funciona: as variáveis podem vir do shell.
}

const VERSAO_ESPERADA = 'radar-captures-v1';
const emailSondagem = `sondagem-${Date.now()}@radardoluxo.invalid`;

const argumentos = process.argv.slice(2);
const indiceBase = argumentos.indexOf('--base');
const BASE = indiceBase >= 0 && argumentos[indiceBase + 1]
  ? argumentos[indiceBase + 1].replace(/\/+$/, '')
  : 'https://www.radardoluxo.com.br';

const falhas = [];
const linhas = [];

function registrar(rotulo, ok, detalhe) {
  linhas.push(`${ok ? '✓' : '✗'} ${rotulo.padEnd(34)} ${detalhe}`);
  if (!ok) falhas.push(`${rotulo}: ${detalhe}`);
}

/**
 * O vercel.json reescreve TUDO para /index.html. Uma função que ainda não foi
 * implantada responde 200 com o HTML do SPA — por isso "status ok" não prova
 * nada aqui, e o corpo precisa ser JSON antes de qualquer outra leitura.
 */
async function chamarEndpoint(caminho, corpo) {
  let res;
  try {
    res = await fetch(`${BASE}${caminho}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corpo),
      signal: AbortSignal.timeout(20_000)
    });
  } catch (erro) {
    return { erro: `sem resposta de ${BASE}${caminho}: ${erro.message}` };
  }

  const texto = await res.text();
  let dados;
  try {
    dados = JSON.parse(texto);
  } catch {
    return { erro: `respondeu HTTP ${res.status} mas não é JSON (rota provivelmente não implantada): ${texto.replace(/\s+/g, ' ').slice(0, 80)}` };
  }
  return { dados, status: res.status };
}

async function main() {
  console.log(`\n💎 PORTÃO DE CAPTURAS — Radar do Luxo`);
  console.log(`   alvo: ${BASE}\n`);

  // 1. O receptor existe e é o script deste repositório.
  const url = process.env.GOOGLE_APPS_SCRIPT_URL || '';
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET || '';
  if (!url || !secret) {
    registrar('variáveis do ambiente', false, 'GOOGLE_APPS_SCRIPT_URL e GOOGLE_APPS_SCRIPT_SECRET precisam estar no .env (só as duas, sem elas nada é gravado)');
  } else {
    try {
      const resposta = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15_000) });
      const aperto = JSON.parse(await resposta.text());
      registrar('aperto de mão do Apps Script', Boolean(aperto.ok), `versao=${aperto.versao ?? 'ausente'} abas=${(aperto.abas || []).join(', ') || 'nenhuma'}`);
      registrar('versão do Apps Script', aperto.versao === VERSAO_ESPERADA, `esperado ${VERSAO_ESPERADA}, recebido ${aperto.versao ?? 'ausente'}`);
    } catch (erro) {
      registrar('aperto de mão do Apps Script', false, erro.message);
    }
  }

  // 2. Newsletter: a função tem que dizer onde gravou.
  const newsletter = await chamarEndpoint('/api/subscribe', { email: emailSondagem });
  if (newsletter.erro) {
    registrar('/api/subscribe', false, newsletter.erro);
  } else {
    registrar('/api/subscribe responde', newsletter.dados.success === true, `HTTP ${newsletter.status} success=${newsletter.dados.success}`);
    registrar('/api/subscribe grava na planilha', newsletter.dados.savedToGoogle === true, `savedToGoogle=${newsletter.dados.savedToGoogle} erro=${newsletter.dados.googleError ?? 'nenhum'}`);
    registrar('/api/subscribe devolve a linha', Number.isFinite(newsletter.dados.googleLinha), `googleLinha=${newsletter.dados.googleLinha ?? 'ausente'}`);
  }

  // 3. Concierge: rota nova; sem ela o lead continua morrendo no navegador do visitante.
  const concierge = await chamarEndpoint('/api/concierge', {
    nome: 'SONDAGEM — apagar',
    telefone: '+55 11 90000-0000',
    email: emailSondagem,
    artigo: 'Verificação automatizada do portão de capturas',
    mensagem: 'Linha escrita por npm run verificar:capturas. Pode excluir.'
  });
  if (concierge.erro) {
    registrar('/api/concierge', false, concierge.erro);
  } else {
    registrar('/api/concierge responde', concierge.dados.success === true, `HTTP ${concierge.status} success=${concierge.dados.success}`);
    registrar('/api/concierge grava na planilha', concierge.dados.savedToGoogle === true, `savedToGoogle=${concierge.dados.savedToGoogle} erro=${concierge.dados.googleError ?? 'nenhum'}`);
    registrar('/api/concierge devolve a linha', Number.isFinite(concierge.dados.googleLinha), `googleLinha=${concierge.dados.googleLinha ?? 'ausente'}`);
  }

  console.log(linhas.join('\n'));

  if (falhas.length) {
    console.log(`\n❌ PORTÃO REPROVADO — ${falhas.length} problema(s):`);
    for (const falha of falhas) console.log(`   • ${falha}`);
    console.log('');
    process.exit(1);
  }

  console.log('\n✅ CAPTURAS LIGADAS — as duas sondagens caíram na planilha.');
  console.log(`   Confira e apague as linhas de "${emailSondagem}" e "SONDAGEM — apagar".\n`);
}

main();
