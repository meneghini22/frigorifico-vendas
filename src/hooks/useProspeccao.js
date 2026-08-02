import { useEffect, useState, useCallback } from 'react';
import { supabase, supabaseConfigured } from '@/services/supabaseClient';
import { useAuth } from '@/context/AuthContext';
import { PROSPECCAO } from '@/data/prospeccao';

// Fornece a lista de lojas em prospecção. No modo Supabase (admin/gestor pode
// editar), lê e grava na tabela public.prospeccao. Sem Supabase, usa o arquivo
// estático (somente leitura).
export function useProspeccao() {
  const { isAdmin, isGestor } = useAuth();
  const editavel = supabaseConfigured && (isAdmin || isGestor);
  const [lojas, setLojas] = useState(PROSPECCAO.lojas);
  const [loading, setLoading] = useState(supabaseConfigured);

  const carregar = useCallback(async () => {
    if (!supabaseConfigured) { setLojas(PROSPECCAO.lojas); return; }
    setLoading(true);
    const { data, error } = await supabase.from('prospeccao').select('*').order('cidade');
    if (!error && data) setLojas(data);
    setLoading(false);
  }, []);

  useEffect(() => { carregar(); }, [carregar]);

  const adicionar = async (loja) => {
    if (!editavel) return { ok: false };
    const { error } = await supabase.from('prospeccao').insert(loja);
    if (error) return { ok: false, error: error.message };
    await carregar();
    return { ok: true };
  };
  const atualizarStatus = async (id, status) => {
    if (!editavel) return;
    setLojas((l) => l.map((x) => (x.id === id ? { ...x, status } : x))); // otimista
    await supabase.from('prospeccao').update({ status }).eq('id', id);
  };
  const remover = async (id) => {
    if (!editavel) return;
    setLojas((l) => l.filter((x) => x.id !== id));
    await supabase.from('prospeccao').delete().eq('id', id);
  };

  return { lojas, loading, editavel, adicionar, atualizarStatus, remover, regioes: PROSPECCAO.regioes, jaClientes: PROSPECCAO.jaClientes || [], obs: PROSPECCAO.obs };
}
