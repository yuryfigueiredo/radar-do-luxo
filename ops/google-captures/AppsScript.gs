/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — GOOGLE APPS SCRIPT (destino das capturas do site)
 * ==============================================================================
 * Este arquivo NÃO roda no build do site. Ele é colado no editor do Google Apps
 * Script e publicado como "App da Web". É o único ponto que escreve na planilha.
 *
 * ---- PASSO A PASSO (uma vez só) ----
 * 1. Crie uma planilha em https://sheets.new — nome sugerido: "Radar — Capturas".
 * 2. Na planilha: Extensões → Apps Script.
 * 3. Apague o conteúdo do editor, cole TODO este arquivo, salve (Ctrl+S).
 * 4. No editor: Propriedades do script → Adicionar propriedade →
 *    nome  : CAPTURE_SECRET
 *    valor : uma string longa e aleatória (ex.: 41s7k3-radar-capture-9f2c)
 *    Salvar. Este MESMO valor vai para a Vercel como GOOGLE_APPS_SCRIPT_SECRET.
 * 5. Implantar → Nova implantação → Tipo "App da Web":
 *      Executar como        : eu
 *      Quem pode acessar    : Qualquer usuário (o site chama sem sessão Google)
 *    Implantar e copiar a URL que termina em /exec.
 * 6. A URL vai para a Vercel como GOOGLE_APPS_SCRIPT_URL.
 *
 * As abas "Assinantes" e "Concierge" são criadas sozinhas no primeiro envio.
 * ------------------------------------------------------------------------------
 * VERSÃO: radar-captures-v1 (o doGet devolve este valor; a verificação do site
 * exige que ele bata, senão a URL aponta para outro script).
 * ==============================================================================
 */

var VERSAO = 'radar-captures-v1';
var ABA_ASSINANTES = 'Assinantes';
var ABA_CONCIERGE = 'Concierge';
var CABECALHOS_ASSINANTES = ['registrado_em', 'email', 'origem', 'protocolo'];
var CABECALHOS_CONCIERGE = ['registrado_em', 'nome', 'telefone', 'email', 'artigo', 'mensagem', 'status'];

function doGet() {
  return resposta_({
    ok: true,
    versao: VERSAO,
    abas: [ABA_ASSINANTES, ABA_CONCIERGE],
    pronto: true
  });
}

function doPost(e) {
  var corpo;
  try {
    corpo = JSON.parse(e.postData.contents);
  } catch (erro) {
    return resposta_({ ok: false, erro: 'corpo nao e JSON' });
  }

  var segredo = PropertiesService.getScriptProperties().getProperty('CAPTURE_SECRET');
  if (!segredo) {
    return resposta_({ ok: false, erro: 'CAPTURE_SECRET ausente nas propriedades do script' });
  }
  if (corpo.secret !== segredo) {
    return resposta_({ ok: false, erro: 'secret nao confere' });
  }

  var agora = new Date().toISOString();

  try {
    if (corpo.tipo === 'newsletter') {
      var aba = abaGarantida_(ABA_ASSINANTES, CABECALHOS_ASSINANTES);
      linha_(aba, [agora, String(corpo.email || ''), String(corpo.origem || 'site'), String(corpo.protocolo || '')]);
      return resposta_({ ok: true, aba: ABA_ASSINANTES, totalLinhas: aba.getLastRow() });
    }

    if (corpo.tipo === 'concierge') {
      var aba2 = abaGarantida_(ABA_CONCIERGE, CABECALHOS_CONCIERGE);
      linha_(aba2, [
        agora,
        String(corpo.nome || ''),
        String(corpo.telefone || ''),
        String(corpo.email || ''),
        String(corpo.artigo || ''),
        String(corpo.mensagem || ''),
        'pendente'
      ]);
      return resposta_({ ok: true, aba: ABA_CONCIERGE, totalLinhas: aba2.getLastRow() });
    }

    return resposta_({ ok: false, erro: 'tipo desconhecido: ' + corpo.tipo });
  } catch (erro) {
    return resposta_({ ok: false, erro: String(erro && erro.message ? erro.message : erro) });
  }
}

/**
 * Toda coluna é marcada como texto antes de escrever. Dois motivos: telefone
 * começa com "+" e o Sheets tenta ler isso como fórmula; e um visitante que
 * escreva "=IMPORTXML(...)" na mensagem arrancaria conteúdo da planilha para um
 * servidor externo. Com formato '@' o texto é gravado literal.
 */
function linha_(aba, valores) {
  var trava = LockService.getScriptLock();
  trava.waitLock(20000);
  try {
    var linhas = Math.max(aba.getMaxRows(), 2);
    aba.getRange(1, 1, linhas, valores.length).setNumberFormat('@');
    aba.appendRow(valores);
  } finally {
    trava.releaseLock();
  }
}

function abaGarantida_(nome, cabecalhos) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName(nome);
  if (!aba) {
    aba = ss.insertSheet(nome);
  }
  if (aba.getLastRow() === 0) {
    aba.getRange(1, 1, 1, cabecalhos.length).setValues([cabecalhos]).setFontWeight('bold');
    aba.setFrozenRows(1);
  }
  return aba;
}

function resposta_(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(ContentService.MimeType.JSON);
}
