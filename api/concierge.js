/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — VERCEL SERVERLESS FUNCTION: /api/concierge
 * ==============================================================================
 * Captura da Mesa de Alocação. Antes de existir esta função o formulário gravava
 * apenas no localStorage do navegador do visitante (radarService.js), ou seja: o
 * lead morria na máquina de quem preencheu, a menos que ele mesmo abrisse o
 * WhatsApp que pulava em seguida.
 *
 * Destino: aba "Concierge" da planilha do Google (ops/google-captures/AppsScript.gs).
 * ==============================================================================
 */

import { gravarCapturaGoogle } from '../server/googleSink.js';

const LIMITE_CAMPO = 400;

function textoSeguro(valor, maximo = LIMITE_CAMPO) {
  return String(valor ?? '')
    .replace(/[\r\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, maximo);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const nome = textoSeguro(body?.nome || body?.name, 120);
    const telefone = textoSeguro(body?.telefone || body?.phone, 40);
    const email = textoSeguro(body?.email, 160);
    const artigo = textoSeguro(body?.artigo || body?.article_title || body?.articleTitle, 240);
    const mensagem = textoSeguro(body?.mensagem || body?.message, 1200);

    if (!nome || !telefone) {
      return res.status(400).json({ success: false, error: 'Informe nome e telefone para abrir a solicitação.' });
    }

    const google = await gravarCapturaGoogle({ tipo: 'concierge', nome, telefone, email, artigo, mensagem });

    if (google.ok) {
      console.log(`✓ [GOOGLE] Concierge na planilha (linha ${google.totalLinhas}): ${nome} · ${telefone}`);
    } else {
      console.warn(`⚠️ [GOOGLE] Concierge NÃO registrado na planilha: ${google.erro}`);
    }

    return res.status(200).json({
      success: true,
      savedToGoogle: google.ok,
      googleLinha: google.totalLinhas ?? null,
      googleError: google.ok ? null : google.erro,
      protocol: `CNC-${Date.now().toString().slice(-6)}`,
      message: 'Sua solicitação foi registrada. Um consultor da Mesa de Alocação entra em contato.'
    });
  } catch (err) {
    console.error('❌ Erro no processamento do concierge:', err);
    return res.status(500).json({ success: false, error: 'Falha temporária ao registrar a solicitação.' });
  }
}
