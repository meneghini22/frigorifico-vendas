import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth, authMode } from '@/context/AuthContext';
import { hidratarDeSupabase } from '@/data/hidratar';

const DadosContext = createContext({ pronto: true, fonte: 'local' });
export const useDados = () => useContext(DadosContext);

export const DadosProvider = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  // no modo local os dados estáticos já estão prontos
  const [pronto, setPronto] = useState(authMode === 'local');
  const [fonte, setFonte] = useState('local');

  const chaveUser = user ? (user.email || user.nome) : null;

  useEffect(() => {
    if (authMode !== 'supabase') return;
    if (loading) return;
    if (!isAuthenticated) { setPronto(false); return; }
    let cancelado = false;
    setPronto(false);
    (async () => {
      const ok = await hidratarDeSupabase();
      if (cancelado) return;
      setFonte(ok ? 'supabase' : 'local');
      setPronto(true); // mesmo se falhar, segue com fallback estático
    })();
    return () => { cancelado = true; };
    // recarrega quando muda o usuário logado (RLS diferente por papel/vendedor)
  }, [isAuthenticated, loading, chaveUser]);

  return <DadosContext.Provider value={{ pronto, fonte }}>{children}</DadosContext.Provider>;
};
