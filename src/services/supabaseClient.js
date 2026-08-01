import { createClient } from '@supabase/supabase-js';

// Configuração vem de variáveis de ambiente (NUNCA commitar valores reais).
// Defina em um arquivo .env local e nas Environment Variables do Vercel:
//   VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
//   VITE_SUPABASE_ANON_KEY=eyJ... (chave "anon public" em Settings → API)
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

// Enquanto as variáveis não estiverem definidas, o cliente fica nulo e o app
// continua funcionando com os dados locais (sem quebrar).
export const supabase = supabaseConfigured ? createClient(url, anonKey) : null;
