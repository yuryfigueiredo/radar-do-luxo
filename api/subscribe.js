/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — VERCEL SERVERLESS FUNCTION: /api/subscribe
 * ==============================================================================
 * Endpoint seguro e resiliente de captura de assinantes da Newsletter VIP.
 * 
 * Funcionalidades:
 * 1. Validação de formato de e-mail e prevenção contra duplicatas.
 * 2. Persistência na tabela 'newsletter_subscribers' do Supabase.
 * 3. Notificação imediata por e-mail para o fundador (yury@radardoluxo.com.br)
 *    via Resend API com template nobre Quiet Luxury.
 * 4. Geração de Credencial VIP com protocolo RD-XXXXXX.
 * ==============================================================================
 */

/**
 * Dispara e-mail informativo para o fundador avisando sobre nova inscrição
 */
async function notifyAdminAboutNewSubscriber({ subscriberEmail, protocol, timestamp, source }) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'yury@radardoluxo.com.br';
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.log(
      `ℹ️ [NOTIFICAÇÃO PENDENTE] Novo assinante: ${subscriberEmail} (Protocolo: ${protocol}). ` +
      `Adicione RESEND_API_KEY nas variáveis de ambiente da Vercel para receber o e-mail em ${adminEmail}.`
    );
    return { sent: false, reason: 'missing_resend_api_key' };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="utf-8">
      <title>Novo Assinante VIP — Radar do Luxo</title>
    </head>
    <body style="margin: 0; padding: 32px 16px; background-color: #0C0C0E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF;">
      <div style="max-width: 560px; margin: 0 auto; background-color: #141418; border: 1px solid rgba(197, 168, 128, 0.35); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);">
        
        <!-- Header com Ouro Champagne -->
        <div style="background: linear-gradient(135deg, #18181D 0%, #101012 100%); padding: 32px 24px; text-align: center; border-bottom: 1px solid rgba(197, 168, 128, 0.2);">
          <div style="display: inline-block; padding: 4px 12px; border: 1px solid #C5A880; border-radius: 20px; font-size: 9px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #C5A880; margin-bottom: 12px;">
            MESA EDITORIAL • ALERTA DE AUDIÊNCIA
          </div>
          <h1 style="margin: 0; font-family: Georgia, 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.01em;">
            Novo Membro VIP Homologado
          </h1>
          <p style="margin: 8px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.6);">
            Um novo leitor acaba de solicitar acesso ao Radar Privado
          </p>
        </div>

        <!-- Dados do Assinante -->
        <div style="padding: 28px 24px;">
          <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 8px 0; color: #A1A1AA; width: 140px;">E-mail do Leitor:</td>
                <td style="padding: 8px 0; color: #FFFFFF; font-weight: 600; font-size: 14px;">${subscriberEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #A1A1AA;">Protocolo VIP:</td>
                <td style="padding: 8px 0; color: #C5A880; font-weight: 700; font-family: monospace; font-size: 15px;">${protocol}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #A1A1AA;">Horário do Registro:</td>
                <td style="padding: 8px 0; color: #E4E4E7;">${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })} (Brasília)</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #A1A1AA;">Origem da Captura:</td>
                <td style="padding: 8px 0; color: #E4E4E7;">${source || 'Website Oficial (radardoluxo.com.br)'}</td>
              </tr>
            </table>
          </div>

          <p style="margin: 0 0 24px 0; font-size: 13px; color: rgba(255, 255, 255, 0.7); line-height: 1.6; text-align: center;">
            Este contato foi registrado no banco de dados e receberá automaticamente as próximas edições curatoriais de quinta-feira.
          </p>

          <div style="text-align: center;">
            <a href="https://www.radardoluxo.com.br/admin" style="display: inline-block; background-color: #C5A880; color: #0C0C0E; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; padding: 12px 28px; border-radius: 30px; text-decoration: none;">
              Abrir Painel Administrativo
            </a>
          </div>
        </div>

        <!-- Rodapé do E-mail -->
        <div style="background-color: #0F0F12; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 11px; color: #71717A;">
          Radar do Luxo — Digital Magazine & Trend Radar • Servidores em Zurich & Edge Global
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Radar do Luxo VIP <onboarding@resend.dev>',
        to: [adminEmail],
        subject: `💎 Novo Assinante VIP: ${subscriberEmail} (${protocol})`,
        html: htmlContent
      })
    });

    if (res.ok) {
      console.log(`✓ [NOTIFICAÇÃO ENVIADA] E-mail de novo assinante entregue para ${adminEmail}`);
      return { sent: true };
    } else {
      const errBody = await res.text();
      console.warn('⚠️ Resend API status:', res.status, errBody);
      return { sent: false, error: errBody };
    }
  } catch (err) {
    console.warn('⚠️ Falha de envio via Resend:', err.message);
    return { sent: false, error: err.message };
  }
}

export default async function handler(req, res) {
  // Configuração de CORS para permitir requisições seguras do próprio domínio
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const rawEmail = body?.email || '';
    const cleanedEmail = String(rawEmail).trim().toLowerCase();

    if (!cleanedEmail || !cleanedEmail.includes('@') || !cleanedEmail.includes('.')) {
      return res.status(400).json({ 
        success: false, 
        error: 'Por favor, insira um endereço de e-mail corporativo ou pessoal válido.' 
      });
    }

    const timestamp = new Date().toISOString();
    const protocol = `RD-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log(`💎 [RADAR VIP SUBSCRIBER] Novo membro: ${cleanedEmail} (${protocol}) em ${timestamp}`);

    // 1. Gravação no Supabase via REST API (se credenciais estiverem configuradas na Vercel)
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 
                        process.env.VITE_SUPABASE_ANON_KEY || 
                        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let savedToSupabase = false;

    if (supabaseUrl && supabaseKey) {
      try {
        const cleanUrl = supabaseUrl.replace(/\/+$/, '');
        const targetUrl = `${cleanUrl}/rest/v1/newsletter_subscribers`;

        const dbRes = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'resolution=ignore-duplicates,return=minimal'
          },
          body: JSON.stringify({
            email: cleanedEmail,
            status: 'active',
            source: 'site_production_api',
            created_at: timestamp
          })
        });

        if (dbRes.ok || dbRes.status === 201 || dbRes.status === 409) {
          savedToSupabase = true;
          console.log(`✓ [SUPABASE] Assinante persistido no banco: ${cleanedEmail}`);
        }
      } catch (dbErr) {
        console.warn('⚠️ Falha ao persistir no Supabase via API serverless:', dbErr.message);
      }
    }

    // 2. Disparo de E-mail de Notificação para Yury (Fundador)
    const notificationResult = await notifyAdminAboutNewSubscriber({
      subscriberEmail: cleanedEmail,
      protocol,
      timestamp,
      source: 'Website Oficial (radardoluxo.com.br)'
    });

    return res.status(200).json({
      success: true,
      email: cleanedEmail,
      savedToCloud: savedToSupabase,
      notifiedAdmin: notificationResult.sent,
      protocol,
      message: 'Sua credencial exclusiva foi homologada. Você receberá o próximo drop de quinta-feira.'
    });

  } catch (err) {
    console.error('❌ Erro no processamento de inscrição:', err);
    return res.status(500).json({
      success: false,
      error: 'Falha temporária ao registrar sua inscrição. Tente novamente em instantes.'
    });
  }
}
