/**
 * Auditoria de capa antes da publicação.
 *
 * O robô recebe a imagem que o feed aponta. Em sites de relojoaria isso costuma
 * ser o thumbnail do WordPress (ex.: ...-600x237.jpg): largo e baixo, estourado
 * no hero da home — ou um link que já não responde (capa quebrada). Aqui a URL é
 * verificada de verdade: alcance HTTP, tipo de conteúdo e dimensões lidas do
 * próprio cabeçalho do arquivo.
 */

const MIN_WIDTH = 1000;
const MAX_ASPECT = 2.6;
const PROBE_TIMEOUT_MS = 8000;

// Sufixo de miniatura do WordPress: "-600x237" colado antes da extensão ou da query.
const SIZE_SUFFIX = /[-_]\d{2,4}x\d{2,4}(?=\.(jpe?g|png|webp|avif)\b|\?)/i;

// WebP: RIFF(4) + tamanho(4) + WEBP(4) + [fourCC(4) + tamanho(4) + payload]...
// O chunk de vídeo não precisa ser o primeiro — ICCP/ANIM aparecem antes em arquivos
// com perfil de cor — então a varredura percorre os chunks até achar o VP8.
function readWebpDimensions(buffer) {
  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const fourcc = buffer.subarray(offset, offset + 4).toString('latin1');
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const data = offset + 8;

    if (fourcc === 'VP8X' && data + 10 <= buffer.length) {
      return { width: 1 + buffer.readUIntLE(data + 4, 3), height: 1 + buffer.readUIntLE(data + 7, 3) };
    }
    if (fourcc === 'VP8L' && data + 5 <= buffer.length) {
      // Byte 0 do payload é a assinatura 0x2f; largura e altura vêm nos 28 bits seguintes.
      const bits = buffer.readUInt32LE(data + 1);
      return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
    }
    if (fourcc === 'VP8 ' && data + 10 <= buffer.length) {
      return {
        width: buffer.readUInt16LE(data + 6) & 0x3fff,
        height: buffer.readUInt16LE(data + 8) & 0x3fff
      };
    }
    if (!Number.isFinite(chunkSize) || chunkSize > buffer.length) return null;
    // Chunks têm padding para palavra de 16 bits.
    offset = data + chunkSize + (chunkSize % 2);
  }
  return null;
}

// HEIF/AVIF: a caixa "ispe" mede 20 bytes (tamanho + tipo + versão/flags + largura + altura).
// Procurar o fourcc solto casa com lixo binário dentro de "mdat", então só aceitamos
// ocorrências precedidas pelo tamanho de caixa válido e com dimensões plausíveis.
function readIspeDimensions(buffer) {
  let from = 0;
  while (true) {
    const at = buffer.indexOf('ispe', from);
    if (at === -1 || at + 16 > buffer.length) return null;
    from = at + 1;
    if (at < 4 || buffer.readUInt32BE(at - 4) !== 20) continue;
    const width = buffer.readUInt32BE(at + 8);
    const height = buffer.readUInt32BE(at + 12);
    if (width >= 16 && height >= 16 && width <= 16384 && height <= 16384) return { width, height };
  }
}

// Dimensão lida de cabeçalho só é útil se for plausível: um corpo corrompido faz o
// ponteiro de IHDR cair em byte qualquer e devolver "151587081x151587081", que
// passaria em qualquer comparação de largura mínima.
const MAX_PLAUSIBLE_DIMENSION = 30000;

// Marcas ISO-BMFF que são foto, não vídeo.
const ISO_IMAGE_BRANDS = new Set([
  'avif', 'avis', 'mif1', 'msf1',
  'heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs',
  'avcs', 'bidc'
]);

// Tamanhos de cabeçalho DIB publicados pela Microsoft (BITMAPINFOHEADER & cia).
const BMP_DIB_SIZES = [12, 40, 52, 56, 108, 124];

function parseDimensions(buffer) {
  const format = detectImageFormat(buffer);
  if (!format) return null;

  if (format === 'gif') {
    // Descritor de tela lógica: largura e altura em little-endian nos bytes 6 e 8.
    return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  }

  if (format === 'bmp') {
    // A altura pode vir negativa (bitmap de cima para baixo): tomamos o módulo.
    return { width: buffer.readUInt32LE(18), height: Math.abs(buffer.readInt32LE(22)) };
  }

  if (format === 'png') {
    if (buffer.length < 24) return null;
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  if (format === 'jpeg') {
    let i = 2;
    // O SOF precisa de 9 bytes livres (FF, marcador, tamanho, precisão, altura,
    // largura). Com `i < length - 9` o marcador exatamente no fim da janela era
    // ignorado: o mesmo arquivo mede ou não mede conforme um byte de padding.
    while (i + 9 <= buffer.length) {
      if (buffer[i] !== 0xff) { i++; continue; }
      const marker = buffer[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: buffer.readUInt16BE(i + 5), width: buffer.readUInt16BE(i + 7) };
      }
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
      const segmentLength = buffer.readUInt16BE(i + 2);
      if (segmentLength < 2) return null;
      i += 2 + segmentLength;
    }
    return null;
  }

  if (format === 'webp') return readWebpDimensions(buffer);

  // HEIF/AVIF guardam o tamanho final na caixa "ispe".
  return readIspeDimensions(buffer);
}

function isPlausible({ width, height }) {
  return Number.isFinite(width) && Number.isFinite(height)
    && width > 0 && height > 0
    && width <= MAX_PLAUSIBLE_DIMENSION && height <= MAX_PLAUSIBLE_DIMENSION;
}

function readDimensions(buffer) {
  const dimensions = parseDimensions(buffer);
  return dimensions && isPlausible(dimensions) ? dimensions : null;
}

// AVIF/HEIF podem guardar o cabeçalho de imagem depois do bloco "mdat": nesses o
// ispe pode estar fora da janela lida, e são os únicos formatos autorizados a
// passar sem dimensão medida. Todo o resto (PNG, JPEG, GIF, WebP, BMP) mede nos
// primeiros bytes — não medir significa cabeçalho ilegível, e isso é rejeição.
function detectImageFormat(buffer) {
  if (buffer.length < 10) return null;

  const head4 = buffer.subarray(0, 4).toString('latin1');
  // PNG: os quatro primeiros bytes (0x89 "PNG"). O restante da assinatura de 8
  // bytes é \r\n\x1a\n e um feed picado pode cortar justo ali.
  if (head4 === '\u0089PNG') return 'png';
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return 'jpeg';
  const head6 = buffer.subarray(0, 6).toString('latin1');
  if (head6 === 'GIF87a' || head6 === 'GIF89a') return 'gif';
  if (head4 === 'RIFF' && buffer.subarray(8, 12).toString('latin1') === 'WEBP') return 'webp';

  // BMP: "BM" sozinho colide com texto ASCII ("BMW M5 review..."). Pedimos o
  // cabeçalho DIB: nº de planos e tamanho de cabeçalho de um bitmap real.
  if (buffer[0] === 0x42 && buffer[1] === 0x4d && buffer.length >= 26) {
    if (buffer.readUInt16LE(12) === 1 && BMP_DIB_SIZES.includes(buffer.readUInt32LE(14))) return 'bmp';
  }

  // ISO-BMFF: "ftyp" vale para vídeo também. Só aceitamos marca compatível com
  // imagem (AVIF/HEIF); MP4 servido como image/jpeg fica de fora.
  if (buffer.length >= 12 && buffer.subarray(4, 8).toString('latin1') === 'ftyp') {
    const boxSize = buffer.readUInt32BE(0);
    if (boxSize >= 12 && boxSize <= buffer.length) {
      const brands = [];
      for (let at = 8; at + 4 <= boxSize; at += 4) brands.push(buffer.subarray(at, at + 4).toString('latin1'));
      if (brands.some(brand => ISO_IMAGE_BRANDS.has(brand))) return 'iso';
    }
  }
  return null;
}

async function fetchHead(url, windowBytes) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'user-agent': 'RadarEditorial/1.0 (+https://www.radardoluxo.com.br)',
      range: `bytes=0-${windowBytes - 1}`
    },
    signal: AbortSignal.timeout(PROBE_TIMEOUT_MS)
  });
  if (!response.ok && response.status !== 206) {
    await response.body?.cancel();
    return { httpError: `HTTP ${response.status}` };
  }
  const contentType = response.headers.get('content-type') || '';
  const contentRange = response.headers.get('content-range');
  const rangeTotal = contentRange && contentRange.match(/\/(\d+)\s*$/);
  const declaredTotal = rangeTotal
    ? Number(rangeTotal[1])
    : Number(response.headers.get('content-length')) || 0;

  // Servidor sem suporte a Range devolve o arquivo inteiro (um JPEG de 30 MB seria
  // baixado duas vezes por matéria). Paramos de ler no tamanho da janela.
  const reader = response.body?.getReader();
  if (!reader) {
    return { contentType, body: Buffer.from(await response.arrayBuffer()), declaredTotal, complete: true };
  }

  const chunks = [];
  let received = 0;
  let complete = false;
  try {
    while (received < windowBytes) {
      const { done, value } = await reader.read();
      if (done) {
        complete = true;
        break;
      }
      chunks.push(value);
      received += value.length;
    }
  } finally {
    // Timeout de janela, abort por sinal ou soquete cortado: o corpo tem que ser
    // liberado, senão a conexão fica presa no processo do robô.
    await reader.cancel().catch(() => {});
  }
  const body = Buffer.concat(chunks);
  return {
    contentType,
    declaredTotal,
    complete,
    body: body.length > windowBytes ? body.subarray(0, windowBytes) : body
  };
}

// JPEG com EXIF + ICC + XMP empurra o marcador de dimensões para além de 64 KB;
// se a primeira janela não achar cabeçalho, tenta uma bem maior antes de desistir.
const PROBE_WINDOWS = [65536, 262144];

// Uma foto real nunca pesa menos que isso; corpo menor é arquivo picado, não capa.
const MIN_BODY_BYTES = 2048;

// O job do robô roda inteiro em menos de um minuto. Sem teto, quatro candidatos
// percorrendo o banco duas janelas cada estouram o timeout do workflow e a
// publicação não acontece — o sintoma que o dono vê como "não publica".
const AUDIT_BUDGET_MS = Number(process.env.COVER_AUDIT_BUDGET_MS || 20000);
const PROBE_CONCURRENCY = 4;

async function probe(url, deadline = 0) {
  let measurableFormat = null;
  for (const windowBytes of PROBE_WINDOWS) {
    if (deadline && Date.now() > deadline) return { ok: false, reason: 'orcamento de rede esgotado' };
    let head;
    try {
      head = await fetchHead(url, windowBytes);
    } catch (error) {
      return { ok: false, reason: error.name === 'TimeoutError' ? 'tempo esgotado' : 'sem resposta' };
    }
    if (head.httpError) return { ok: false, reason: head.httpError };
    if (!head.contentType.startsWith('image/')) return { ok: false, reason: `tipo ${head.contentType || 'desconhecido'}` };

    // O servidor terminou a resposta antes de entregar o que declarou no
    // content-length: corpo picado. Fingir que é capa dá imagem quebrada no hero.
    if (head.complete && head.declaredTotal > head.body.length) {
      return { ok: false, reason: `resposta truncada (${head.body.length} de ${head.declaredTotal} bytes)` };
    }
    if (head.complete && head.body.length < MIN_BODY_BYTES) {
      return { ok: false, reason: `arquivo de ${head.body.length} bytes` };
    }
    const format = detectImageFormat(head.body);
    if (format) measurableFormat = format;

    const dimensions = readDimensions(head.body);
    if (dimensions) return { ok: true, ...dimensions };
    // Servidor sem suporte a range devolve o arquivo inteiro: se ainda assim não
    // lemos cabeçalho, ampliar a janela não vai mudar nada.
    if (head.complete && head.body.length < windowBytes) break;
  }
  // Só AVIF/HEIF passam sem medida: o cabeçalho deles pode estar depois do "mdat"
  // e a janela não alcança. PNG/JPEG/GIF/WebP/BMP medem nos primeiros bytes, então
  // cabeçalho ilegível nesses formatos é corpo estragado, e capa estragada no hero
  // é exatamente o defeito que esta auditoria existe para impedir.
  if (!measurableFormat) return { ok: false, reason: 'corpo sem assinatura de imagem' };
  if (measurableFormat !== 'iso') return { ok: false, reason: `cabeçalho ${measurableFormat} ilegível` };
  return { ok: true, unknown: true };
}

function describesSmallFrame({ width, height }) {
  if (!width) return false;
  return width < MIN_WIDTH || width / (height || 1) > MAX_ASPECT;
}

function sizeLabel({ width, height }) {
  return width ? `${width}x${height ?? '?'}` : 'dimensões não conferidas';
}

/**
 * Devolve a capa final da matéria, já auditada.
 *
 * 1. Se a URL do feed carrega sufixo de miniatura, tenta o arquivo inteiro.
 * 2. Verifica o candidato alcançando o servidor e lendo as dimensões reais.
 * 3. Rejeitado, percorre o banco homologado da categoria até achar uma capa válida.
 *
 * @param {string} sourceUrl imagem indicada pelo feed
 * @param {string[]} gallery imagens homologadas da categoria
 * @returns {Promise<{url: string, origin: string, note: string}>}
 */
export async function resolveCoverImage(sourceUrl, gallery = []) {
  const source = String(sourceUrl || '').trim();

  // Asset do próprio repositório: já é verificado no build, não há o que auditar na rede.
  if (source.startsWith('/')) return { url: source, origin: 'local', note: 'asset do repositório' };

  const deadline = Date.now() + AUDIT_BUDGET_MS;

  if (source) {
    const suffix = source.match(SIZE_SUFFIX);
    if (suffix && describesSmallFrame(readFromSuffix(suffix[0]))) {
      const fullSize = source.replace(SIZE_SUFFIX, '');
      const check = await probe(fullSize, deadline);
      if (check.ok && !describesSmallFrame(check)) {
        return { url: fullSize, origin: 'origem', note: `miniatura ${suffix[0].slice(1)} promovida ao arquivo inteiro (${sizeLabel(check)})` };
      }
    }

    const check = await probe(source, deadline);
    if (!check.ok) return fromBank(gallery, `capa do feed indisponível (${check.reason})`);
    if (describesSmallFrame(check)) return fromBank(gallery, `capa do feed pequena ou em faixa (${sizeLabel(check)})`);
    return { url: source, origin: 'origem', note: `capa alcançada e é imagem (${sizeLabel(check)})` };
  }

  return fromBank(gallery, 'feed não indicou capa');
}

function fromBank(gallery, reason) {
  return { url: '', origin: 'banco', note: reason, gallery };
}

function readFromSuffix(token) {
  const digits = token.match(/(\d{2,4})x(\d{2,4})/);
  return digits ? { width: Number(digits[1]), height: Number(digits[2]) } : {};
}

/** Percorre o banco da categoria e devolve a primeira capa que passa na auditoria. */
export async function auditGalleryImages(gallery = [], limit = 8) {
  const candidates = [...new Set(gallery.filter(Boolean))].slice(0, limit);
  const deadline = Date.now() + AUDIT_BUDGET_MS;
  // Em lotes, na ordem de prioridade do banco: probes sequenciais somam 16 s de
  // espera por matéria quando a rede está lenta, e o job inteiro tem 10 minutos.
  for (let start = 0; start < candidates.length; start += PROBE_CONCURRENCY) {
    const batch = candidates.slice(start, start + PROBE_CONCURRENCY);
    const results = await Promise.all(batch.map(url => probe(url, deadline)));
    for (let i = 0; i < batch.length; i++) {
      const check = results[i];
      if (check.ok && !describesSmallFrame(check)) {
        return { url: batch[i], origin: 'banco', note: `banco da categoria verificado (${sizeLabel(check)})` };
      }
    }
  }
  // Nada aprovado: devolver vazio em vez de uma URL que a auditoria acabou de reprovar.
  return { url: '', origin: 'banco', note: `nenhuma das ${candidates.length} capas do banco passou na auditoria` };
}
