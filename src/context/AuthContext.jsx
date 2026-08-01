import React, { createContext, useContext, useEffect, useState } from 'react';
import { DADOS, MESES } from '@/data/relatoriosVendas';
import { supabase, supabaseConfigured } from '@/services/supabaseClient';

/*
 * Dois modos de login, escolhidos automaticamente:
 *  - Supabase (quando VITE_SUPABASE_URL/ANON_KEY existem): autenticação real
 *    por e-mail + senha; papel e vendedor vêm da tabela public.profiles.
 *  - Local (fallback, sem Supabase): senha simples no navegador —
 *    vendedor = nome+1 (ex.: maykel1), gestor = gestor1, admin = admin1.
 *    (Sem segurança real; só organiza o acesso enquanto o backend não está ligado.)
 */

export const ADMIN_SENHA = 'admin1';
export const GESTOR_SENHA = 'gestor1';

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '');

export const VENDEDORES = [...new Set(MESES.flatMap((m) => Object.keys(DADOS[m])))]
  .sort((a, b) => a.localeCompare(b, 'pt-BR'));

export const slugDoVendedor = (nome) => norm(nome);
export const senhaDoVendedor = (nome) => `${norm(nome)}1`;
export const nomeDoSlug = (slug) => VENDEDORES.find((n) => norm(n) === slug) || slug;

export const authMode = supabaseConfigured ? 'supabase' : 'local';

const AuthContext = createContext(null);
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth precisa do AuthProvider');
  return ctx;
};

const baseValue = (user) => ({
  user,
  isAuthenticated: !!user,
  isAdmin: user?.role === 'admin',
  isGestor: user?.role === 'gestor',
  isVendedor: user?.role === 'vendedor',
  role: user?.role || null,
  vendedor: user?.vendedor || null,
});

/* ---------------- modo LOCAL (fallback) ---------------- */
const KEY = 'zaleski_session';

function resolverLocal(senha) {
  const s = (senha || '').trim();
  if (s === ADMIN_SENHA) return { role: 'admin', nome: 'Administrador' };
  if (s === GESTOR_SENHA) return { role: 'gestor', nome: 'Gestor' };
  const v = VENDEDORES.find((n) => senhaDoVendedor(n) === s.toLowerCase());
  if (v) return { role: 'vendedor', nome: v, vendedor: v };
  return null;
}

const LocalAuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (Date.now() - (s.ts || 0) > 12 * 60 * 60 * 1000) return null;
      return s;
    } catch { return null; }
  });

  const login = async ({ senha }) => {
    const r = resolverLocal(senha);
    if (!r) return { ok: false };
    const sess = { ...r, ts: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(sess));
    setUser(sess);
    return { ok: true, role: r.role };
  };
  const logout = async () => { localStorage.removeItem(KEY); setUser(null); };

  return <AuthContext.Provider value={{ ...baseValue(user), login, logout, loading: false, authMode: 'local' }}>{children}</AuthContext.Provider>;
};

/* ---------------- modo SUPABASE ---------------- */
const SupabaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const applySession = async (session) => {
    if (!session) { setUser(null); return null; }
    const { data: prof } = await supabase
      .from('profiles').select('role,vendedor_slug,nome').eq('id', session.user.id).single();
    if (!prof) { setUser(null); return null; }
    const u = {
      nome: prof.nome || session.user.email,
      email: session.user.email,
      role: prof.role,
      vendedor: prof.vendedor_slug ? nomeDoSlug(prof.vendedor_slug) : null,
    };
    setUser(u);
    return u;
  };

  useEffect(() => {
    let sub;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      await applySession(session);
      setLoading(false);
      sub = supabase.auth.onAuthStateChange((_e, s) => { applySession(s); });
    })();
    return () => sub?.data?.subscription?.unsubscribe();
  }, []);

  const login = async ({ email, senha }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email: (email || '').trim(), password: senha });
    if (error) return { ok: false, error: 'E-mail ou senha inválidos.' };
    const u = await applySession(data.session);
    if (!u) { await supabase.auth.signOut(); return { ok: false, error: 'Conta sem perfil configurado. Fale com o administrador.' }; }
    return { ok: true, role: u.role };
  };
  const logout = async () => { await supabase.auth.signOut(); setUser(null); };

  return <AuthContext.Provider value={{ ...baseValue(user), login, logout, loading, authMode: 'supabase' }}>{children}</AuthContext.Provider>;
};

export const AuthProvider = supabaseConfigured ? SupabaseAuthProvider : LocalAuthProvider;
