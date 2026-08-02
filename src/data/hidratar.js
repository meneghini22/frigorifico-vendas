import { supabase } from '@/services/supabaseClient';
import { DADOS, MESES, PREV } from '@/data/relatoriosVendas';
import { MERCADO } from '@/data/mercado';

// Monta o objeto DADOS (mesmo formato dos dados estáticos) a partir das linhas
// vindas do Supabase. Exportado para teste.
export function montarDados({ periodos, vendedores, vendas, clientes, semanas, mercado }) {
  const slug2nome = {};
  (vendedores || []).forEach((v) => { slug2nome[v.slug] = v.nome; });

  const meses = (periodos || []).map((p) => p.mes);
  const meta = {};
  (periodos || []).forEach((p) => { meta[p.mes] = { nome: p.nome, periodo: p.periodo, obs: p.obs }; });

  const dados = { meta };
  meses.forEach((m) => { dados[m] = {}; });

  (vendas || []).forEach((r) => {
    const n = slug2nome[r.vendedor_slug];
    if (!n || !dados[r.mes]) return;
    dados[r.mes][n] = { total: Number(r.faturamento), clientes: r.clientes, ticket: Number(r.ticket), top: [] };
    if (r.parcial) dados[r.mes][n].parcial = r.parcial;
    if (r.clientes_label) dados[r.mes][n].clientesLabel = r.clientes_label;
  });

  (clientes || []).forEach((r) => {
    const n = slug2nome[r.vendedor_slug];
    const o = dados[r.mes] && dados[r.mes][n];
    if (!o) return;
    o.top.push({ nome: r.cliente, valor: Number(r.valor), ...(r.aprox ? { aprox: true } : {}) });
  });
  meses.forEach((m) => Object.values(dados[m]).forEach((o) => o.top && o.top.sort((a, b) => b.valor - a.valor)));

  (semanas || []).forEach((r) => {
    const n = slug2nome[r.vendedor_slug];
    const o = dados[r.mes] && dados[r.mes][n];
    if (!o) return;
    (o.semanas = o.semanas || []).push([r.semana, r.clientes, Number(r.faturamento)]);
  });
  meses.forEach((m) => Object.values(dados[m]).forEach((o) => {
    if (o.semanas) o.semanas.sort((a, b) => (parseInt(a[0], 10) || 0) - (parseInt(b[0], 10) || 0));
  }));

  const prev = {};
  meses.forEach((m, i) => { prev[m] = i > 0 ? meses[i - 1] : null; });

  return { dados, meses, prev, mercado: mercado || null };
}

// Busca do Supabase e substitui (em memória) os dados estáticos pelos do banco.
// Retorna true se conseguiu; false cai no fallback estático.
export async function hidratarDeSupabase() {
  try {
    const [per, vend, vv, vc, vs, merc] = await Promise.all([
      supabase.from('periodos').select('*').order('ordem'),
      supabase.from('vendedores').select('*'),
      supabase.from('vendas_vendedor').select('*'),
      supabase.from('vendas_clientes').select('*'),
      supabase.from('vendas_semanas').select('*'),
      supabase.from('mercado').select('dados').eq('id', 1).maybeSingle(),
    ]);
    if (per.error || vend.error || vv.error) return false;
    if (!per.data || per.data.length === 0) return false;

    const { dados, meses, prev, mercado } = montarDados({
      periodos: per.data, vendedores: vend.data, vendas: vv.data,
      clientes: vc.data, semanas: vs.data, mercado: merc && merc.data && merc.data.dados,
    });

    Object.keys(DADOS).forEach((k) => delete DADOS[k]);
    Object.assign(DADOS, dados);
    MESES.length = 0; MESES.push(...meses);
    Object.keys(PREV).forEach((k) => delete PREV[k]);
    Object.assign(PREV, prev);
    if (mercado) { Object.keys(MERCADO).forEach((k) => delete MERCADO[k]); Object.assign(MERCADO, mercado); }
    return true;
  } catch {
    return false;
  }
}
