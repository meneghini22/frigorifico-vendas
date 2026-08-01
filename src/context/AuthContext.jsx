import React, { createContext, useContext, useState } from 'react';
import { DADOS, MESES } from '@/data/relatoriosVendas';

/*
 * Login simples por SENHA. Papéis:
 *  - vendedor: senha = nome em minúsculo + "1"  (ex.: maykel1, heitor1)
 *  - gestor:   senha = "gestor1"   (analisa todos os vendedores)
 *  - admin:    senha = "admin1"    (dono — acesso total)
 *
 * ATENÇÃO: isto é um controle de acesso apenas no navegador (front-end).
 * As senhas ficam no código do site e NÃO oferecem segurança real.
 * Para proteção de verdade seria necessário um backend/autenticação server-side.
 */

export const ADMIN_SENHA = 'admin1';
export const GESTOR_SENHA = 'gestor1';

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '');

export const VENDEDORES = [...new Set(MESES.flatMap((m) => Object.keys(DADOS[m])))]
  .sort((a, b) => a.localeCompare(b, 'pt-BR'));

export const senhaDoVendedor = (nome) => `${norm(nome)}1`;

function resolver(senha) {
  const s = senha.trim();
  if (s === ADMIN_SENHA) return { role: 'admin', nome: 'Administrador' };
  if (s === GESTOR_SENHA) return { role: 'gestor', nome: 'Gestor' };
  const v = VENDEDORES.find((n) => senhaDoVendedor(n) === s.toLowerCase());
  if (v) return { role: 'vendedor', nome: v, vendedor: v };
  return null;
}

const AuthContext = createContext(null);
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth precisa do AuthProvider');
  return ctx;
};

const KEY = 'zaleski_session';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (Date.now() - (s.ts || 0) > 12 * 60 * 60 * 1000) return null; // 12h
      return s;
    } catch { return null; }
  });

  const login = (senha) => {
    const r = resolver(senha);
    if (!r) return { ok: false };
    const sess = { ...r, ts: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(sess));
    setUser(sess);
    return { ok: true, role: r.role };
  };

  const logout = () => { localStorage.removeItem(KEY); setUser(null); };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isGestor: user?.role === 'gestor',
    isVendedor: user?.role === 'vendedor',
    role: user?.role || null,
    vendedor: user?.vendedor || null,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
