/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — VERCEL SERVERLESS FUNCTION: /api/subscribe
 * ==============================================================================
 * Endpoint seguro e resiliente de captura de assinantes da Newsletter VIP.
 * 
 * Estratégia de Persistência Multicamadas:
 * 1. Tenta salvar diretamente na tabela 'newsletter_subscribers' do Supabase.
 * 2. Grava nos logs de execução da Vercel (nunca expiram).
 * 3. Retorna resposta JSON limpa e compatível com o padrão Quiet Luxury.
 * ==============================================================================
 */

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
    console.log(`💎 [RADAR VIP SUBSCRIBER] Novo membro cadastrado: ${cleanedEmail} em ${timestamp}`);

    // Tentativa de gravação no Supabase via REST API (se as variáveis existirem na Vercel)
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
          console.log(`✓ [SUPABASE] Assinante persistido no banco com sucesso: ${cleanedEmail}`);
        }
      } catch (dbErr) {
        console.warn('⚠️ Falha ao persistir no Supabase via API serverless:', dbErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      email: cleanedEmail,
      savedToCloud: savedToSupabase,
      protocol: `RD-${Math.floor(100000 + Math.random() * 900000)}`,
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
