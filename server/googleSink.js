/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — REBOQUE DE CAPTURAS PARA O GOOGLE
 * ==============================================================================
 * Caminho único pelo qual assinantes e solicitações de concierge chegam à
 * planilha. Mora fora de api/ de propósito: qualquer .js dentro de api/ vira
 * rota pública na Vercel, e isto é código interno.
 *
 * A URL do Apps Script e o segredo só existem aqui, no servidor. O navegador do
 * visitante nunca vê nenhum dos dois — ele fala com /api/subscribe e
 * /api/concierge, e estas duas funções falam com o Google.
 *
 * O código de destino está em ops/google-captures/AppsScript.gs.
 * ==============================================================================
 */

const PRAZO_MS = 8000;

function config() {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL || '';
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET || '';
  return { url, secret, faltando: !url || !secret };
}

/**
 * Apps Script responde com um 302 para o host de conteúdo do Google; fetch segue
 * o redirecionamento e devolve o corpo como text/plain mesmo sendo JSON, por isso
 * o parse é manual. Nenhuma falha aqui vira exceção: captura perdida é problema
 * de registro, não de publicação da matéria, e o visitante tem que ver a
 * confirmação do WhatsApp independentemente do estado do Google.
 */
export async function gravarCapturaGoogle(registro) {
  const { url, secret, faltando } = config();
  if (faltando) {
    return { ok: false, erro: 'GOOGLE_APPS_SCRIPT_URL/SECRET ausentes no ambiente' };
  }

  const corpo = { secret, ...registro };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corpo),
      redirect: 'follow',
      signal: AbortSignal.timeout(PRAZO_MS)
    });

    const texto = await res.text();
    let dados = null;
    try {
      dados = JSON.parse(texto);
    } catch (erro) {
      const trecho = texto.replace(/\s+/g, ' ').slice(0, 120);
      return { ok: false, erro: `resposta do Apps Script nao e JSON (HTTP ${res.status}): ${trecho}` };
    }

    if (!res.ok || !dados.ok) {
      return { ok: false, erro: dados.erro || `HTTP ${res.status}`, resposta: dados };
    }

    return { ok: true, aba: dados.aba, totalLinhas: dados.totalLinhas };
  } catch (erro) {
    return { ok: false, erro: `falha ao contatar o Apps Script: ${erro.message}` };
  }
}

/**
 * Aperto de mão lido pelo portão de verificação: confirma que a URL aponta para o
 * script deste repositório (e não para outro Apps Script qualquer da conta).
 */
export async function checarReceptorGoogle() {
  const { url, faltando } = config();
  if (faltando) {
    return { ok: false, erro: 'GOOGLE_APPS_SCRIPT_URL/SECRET ausentes no ambiente' };
  }

  try {
    const res = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(PRAZO_MS) });
    const dados = JSON.parse(await res.text());
    return { ok: Boolean(dados.ok), versao: dados.versao, abas: dados.abas };
  } catch (erro) {
    return { ok: false, erro: erro.message };
  }
}
