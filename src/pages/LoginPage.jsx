import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Lock, Mail, LogIn, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth, authMode } from '@/context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const supa = authMode === 'supabase';

  const entrar = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);
    const r = await login({ email, senha });
    setCarregando(false);
    if (r.ok) {
      navigate(r.role === 'vendedor' ? '/vendedor' : r.role === 'admin' ? '/admin' : '/painel');
    } else {
      setErro(r.error || 'Senha inválida. Tente novamente.');
    }
  };

  return (
    <>
      <Helmet><title>Entrar · Relatórios Zaleski</title></Helmet>
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="w-full max-w-sm"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#FF8C42] flex items-center justify-center rotate-3 shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-4">Relatórios de Vendas</h1>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Centro de Compras Zaleski</p>
          </div>

          <form onSubmit={entrar} className="bg-[#242424] border border-gray-800 rounded-2xl p-6 shadow-xl">
            {supa && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    autoFocus
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErro(''); }}
                    placeholder="seu@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white outline-none focus:border-[#FF8C42] transition-colors"
                  />
                </div>
              </div>
            )}

            <label className="block text-sm font-medium text-gray-300 mb-2">Senha{supa ? '' : ' de acesso'}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                autoFocus={!supa}
                value={senha}
                onChange={(e) => { setSenha(e.target.value); setErro(''); }}
                placeholder="Digite sua senha…"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white outline-none focus:border-[#FF8C42] transition-colors"
              />
            </div>

            {erro && (
              <p className="flex items-center gap-2 text-red-400 text-sm mt-3">
                <AlertCircle className="w-4 h-4 flex-none" /> {erro}
              </p>
            )}

            <button
              type="submit"
              disabled={carregando}
              className="w-full mt-5 bg-[#FF8C42] hover:bg-[#E67E22] disabled:opacity-60 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {carregando ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogIn className="w-5 h-5" />}
              {carregando ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-6">
            Cada vendedor usa seu próprio acesso. Gestores e administração têm acesso próprio.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
