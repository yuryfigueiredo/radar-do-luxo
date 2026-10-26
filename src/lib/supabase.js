import { createClient } from '@supabase/supabase-js';

const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : (typeof process !== 'undefined' ? process.env : {});
const supabaseUrl = env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || 
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  env.SUPABASE_KEY;

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
