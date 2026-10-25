import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are valid non-empty URLs/keys
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('sua-url-aqui')
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

/**
 * Returns connection diagnostic info for the admin panel
 */
export function getSupabaseStatus() {
  return {
    configured: isSupabaseConfigured,
    url: supabaseUrl ? `${supabaseUrl.substring(0, 18)}...` : 'Não informada',
    mode: isSupabaseConfigured ? 'Produção (Nuvem Supabase)' : 'Local / Híbrido (Mock Data Ativo)'
  };
}
