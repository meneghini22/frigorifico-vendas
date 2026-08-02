import { supabase } from '@/services/supabaseClient';
import { DADOS, MESES, PREV } from '@/data/relatoriosVendas';
import { MERCADO } from '@/data/mercado';
import { RETENCAO } from '@/data/retencao';

const nomeVend = {}; // slug -> nome (preenchido na hidratação)

// Monta a retenção (junho->julho) a partir das listas completas de clientes.
export function montarRetencao(rows) {
  const jun = {}, jul = {}; // codigo -> {nome, valor, vend}
  rows.forEach((r) => {
    const alvo = r.mes === 'junho' ? jun : r.mes === 'julho' ? jul : null;
    if (!alvo) return;
    const cur = alvo[r.cliente_codigo] || { nome: r.cliente, valor: 0, vend: nomeVend[r.vendedor_slug] || r.vendedor_slug };
    cur.valor += Number(r.valor); alvo[r.cliente_codigo] = cur;
  });
  const J = Object.keys(jun), U = new Set(Object.keys(jul)), Jset = new Set(J);
  const churn = J.filter((c) => !U.has(c)).map((c) => ({ nome: jun[c].nome, valor: Math.round(jun[c].valor * 100) / 100, vendedor: jun[c].vend })).filter((x) => x.valor > 0).sort((a, b) => b.valor - a.valor);
  const novos = Object.keys(jul).filter((c) => !Jset.has(c)).map((c) => ({ nome: jul[c].nome, valor: Math.round(jul[c].valor * 100) / 100, vendedor: jul[c].vend })).filter((x) => x.valor > 0).sort((a, b) => b.valor - a.valor);
  const continuaram = J.filter((c) => U.has(c)).length;
  // por vendedor (carteira)
  const vends = [...new Set(rows.map((r) => nomeVend[r.vendedor_slug] || r.vendedor_slug))];
  const porV = vends.map((nome) => {
    const jc = new Set(rows.filter((r) => r.mes === 'junho' && (nomeVend[r.vendedor_slug] || r.vendedor_slug) === nome).map((r) => r.cliente_codigo));
    const uc = new Set(rows.filter((r) => r.mes === 'julho' && (nomeVend[r.vendedor_slug] || r.vendedor_slug) === nome).map((r) => r.cliente_codigo));
    const cont = [...jc].filter((c) => uc.has(c)).length;
    return { nome, junho: jc.size, julho: uc.size, continuaram: cont, pararam: jc.size - cont, novos: [...uc].filter((c) => !jc.has(c)).length };
  }).filter((v) => v.junho + v.julho > 0).sort((a, b) => b.junho - a.junho);

  return {
    periodo: 'Junho → Julho / 2026',
    total: { base: J.length, julho: U.size, continuaram, pararam: J.length - continuaram, novos: novos.length },
    valorPerdidoTotal: Math.round(churn.reduce((s, x) => s + x.valor, 0) * 100) / 100,
    valorNovoTotal: Math.round(novos.reduce((s, x) => s + x.valor, 0) * 100) / 100,
    topPararam: churn.slice(0, 12),
    topNovos: novos.slice(0, 8),
    vendedores: porV,
  };
}

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
    const [per, vend, vv, vc, vs, merc, cm] = await Promise.all([
      supabase.from('periodos').select('*').order('ordem'),
      supabase.from('vendedores').select('*'),
      supabase.from('vendas_vendedor').select('*'),
      supabase.from('vendas_clientes').select('*'),
      supabase.from('vendas_semanas').select('*'),
      supabase.from('mercado').select('dados').eq('id', 1).maybeSingle(),
      supabase.from('clientes_mes').select('*'),
    ]);
    if (per.error || vend.error || vv.error) return false;
    if (!per.data || per.data.length === 0) return false;

    Object.keys(nomeVend).forEach((k) => delete nomeVend[k]);
    (vend.data || []).forEach((v) => { nomeVend[v.slug] = v.nome; });

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

    // retenção viva a partir das listas completas de clientes (se houver)
    if (cm && !cm.error && cm.data && cm.data.length > 0) {
      const ret = montarRetencao(cm.data);
      if (ret.total.base > 0) { Object.keys(RETENCAO).forEach((k) => delete RETENCAO[k]); Object.assign(RETENCAO, ret); }
    }
    return true;
  } catch {
    return false;
  }
}
