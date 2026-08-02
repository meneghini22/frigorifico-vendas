import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  DollarSign, Users, TrendingUp, TrendingDown, Minus, Award,
  Info, BarChart3, Calendar,
} from 'lucide-react';
import { Repeat } from 'lucide-react';
import ReportHeader from '@/components/ReportHeader';
import MercadoPanel from '@/components/MercadoPanel';
import RetencaoView from '@/components/RetencaoView';
import { DADOS, MESES, PREV } from '@/data/relatoriosVendas';

/* ---------- helpers ---------- */
const brl = (v) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
const brl0 = (v) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);
const comp = (v) => {
  if (v >= 1e6) return `R$ ${(v / 1e6).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mi`;
  if (v >= 1e3) return `R$ ${(v / 1e3).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil`;
  return brl0(v);
};

const MONTH_COLOR = { maio: '#FDBA74', junho: '#F97316', julho: '#C2410C' };
const MONTH_LABEL = (m) => DADOS.meta[m].nome;

const monthTotals = (mes) => {
  const d = DADOS[mes];
  const keys = Object.keys(d);
  let fat = 0, cli = 0;
  keys.forEach((k) => { fat += d[k].total; cli += d[k].clientes; });
  return { fat, cli, n: keys.length, ticket: cli ? fat / cli : 0 };
};

const getDelta = (mes, vend) => {
  const p = PREV[mes];
  if (!p) return null;
  const cur = DADOS[mes][vend];
  const prev = DADOS[p][vend];
  if (!prev) return { novo: true };
  return { pct: ((cur.total - prev.total) / prev.total) * 100, parcial: !!prev.parcial };
};

/* ---------- small pieces ---------- */
const DeltaBadge = ({ dl, className = '' }) => {
  if (!dl) return null;
  if (dl.novo) return <span className={`text-gray-400 font-semibold ${className}`}>novo</span>;
  const up = dl.pct > 1, down = dl.pct < -1;
  const Icon = up ? TrendingUp : down ? TrendingDown : Minus;
  const color = up ? 'text-green-600' : down ? 'text-red-500' : 'text-gray-400';
  return (
    <span className={`inline-flex items-center gap-1 font-semibold tabular-nums ${color} ${className}`}>
      <Icon className="w-3.5 h-3.5" />
      {Math.abs(dl.pct).toFixed(0)}%{dl.parcial ? '*' : ''}
    </span>
  );
};

const KpiCard = ({ icon: Icon, tone, label, value, sub }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-3 rounded-lg ${tone}`}><Icon className="w-7 h-7" /></div>
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
      <p className="text-2xl font-bold text-gray-900 tabular-nums leading-tight mt-0.5">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  </div>
);

const VendorCard = ({ mes, vend }) => {
  const o = DADOS[mes][vend];
  const cliLab = o.clientesLabel || 'clientes';
  const weekMax = o.semanas ? Math.max(...o.semanas.map((s) => s[2])) : 0;
  const topMax = o.top && o.top.length ? Math.max(...o.top.map((c) => c.valor)) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-bold text-gray-900">{vend}</h3>
        {o.parcial && (
          <span className="text-[10px] font-bold uppercase tracking-wide text-[#E67E22] bg-orange-50 px-2 py-0.5 rounded-full">
            {o.parcial}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 rounded-lg border border-gray-100 overflow-hidden">
        {[
          ['Faturamento', comp(o.total)],
          [cliLab, o.clientes],
          ['Ticket médio', comp(o.ticket)],
        ].map(([l, v], i) => (
          <div key={l} className={`p-3 ${i > 0 ? 'border-l border-gray-100' : ''}`}>
            <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">{l}</p>
            <p className="text-base font-bold text-gray-900 tabular-nums mt-1">{v}</p>
          </div>
        ))}
      </div>

      {o.semanas && o.semanas.length > 0 && (
        <div>
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-2">Faturamento por semana</p>
          <div className="flex items-end gap-2 h-16">
            {o.semanas.map((s) => (
              <div key={s[0]} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div
                  className="w-full max-w-[34px] bg-[#FF8C42] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ height: `${Math.max(3, (s[2] / weekMax) * 50)}px` }}
                  title={`${s[0]} — ${brl(s[2])} — ${s[1]} cliente(s)`}
                />
                <span className="text-[9px] text-gray-400 tabular-nums">{s[0].split('–')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-2">Principais clientes</p>
        {o.top && o.top.length > 0 ? (
          <div className="flex flex-col gap-2.5">
            {o.top.slice(0, 6).map((c) => (
              <div key={c.nome}>
                <div className="flex justify-between items-center gap-3 text-[13px]">
                  <span className="truncate text-gray-700" title={c.nome}>{c.nome}</span>
                  <span className="font-semibold tabular-nums whitespace-nowrap text-gray-900">
                    {c.aprox && <span className="text-gray-400 font-normal">≈ </span>}{brl(c.valor)}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded mt-1 overflow-hidden">
                  <div className="h-full bg-[#FF8C42]/70 rounded" style={{ width: `${Math.max(2, (c.valor / topMax) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[13px] text-gray-400 italic">Lista de clientes não detalhada no relatório-fonte deste mês.</p>
        )}
      </div>
    </div>
  );
};

/* ---------- month view ---------- */
const MonthView = ({ mes }) => {
  const meta = DADOS.meta[mes];
  const d = DADOS[mes];
  const t = useMemo(() => monthTotals(mes), [mes]);
  const vends = useMemo(() => Object.keys(d).sort((a, b) => d[b].total - d[a].total), [mes]);
  const max = Math.max(...vends.map((v) => d[v].total));
  const hasParcial = vends.some((v) => d[v].parcial);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-gray-900">{meta.nome} / 2026</h2>
          <span className="text-sm text-gray-400">{meta.periodo}</span>
        </div>
        <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
          <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />{meta.obs}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={DollarSign} tone="bg-green-50 text-green-600" label="Faturamento total" value={brl0(t.fat)} sub="no período" />
        <KpiCard icon={Users} tone="bg-blue-50 text-blue-600" label="Clientes atendidos" value={t.cli} sub="cadastros com movimento" />
        <KpiCard icon={TrendingUp} tone="bg-orange-50 text-orange-600" label="Ticket médio" value={brl0(t.ticket)} sub="por cliente" />
        <KpiCard icon={BarChart3} tone="bg-purple-50 text-purple-600" label="Vendedores" value={t.n} sub="com vendas no mês" />
      </div>

      {/* ranking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-[#FF8C42]" />
          <h3 className="text-lg font-bold text-gray-900">Ranking de faturamento</h3>
        </div>
        <p className="text-xs text-gray-400 mb-5">
          Por vendedor{PREV[mes] ? ` · variação vs. ${MONTH_LABEL(PREV[mes])}` : ''}
          {hasParcial ? ' · * período parcial' : ''}
        </p>
        <div className="flex flex-col gap-3.5">
          {vends.map((v, i) => {
            const val = d[v].total;
            const w = Math.max(3, (val / max) * 100);
            return (
              <div key={v} className="grid grid-cols-[7rem,1fr,auto] sm:grid-cols-[9rem,1fr,auto] items-center gap-3">
                <div className="flex items-center gap-2 font-semibold text-sm text-gray-800 min-w-0">
                  <span className="text-gray-400 text-xs tabular-nums w-4">{i + 1}</span>
                  <span className="truncate">{v}</span>
                  {d[v].parcial && <span className="text-[#E67E22] font-extrabold">*</span>}
                </div>
                <div className="h-5 bg-gray-100 rounded-md overflow-hidden">
                  <motion.div
                    className={`h-full rounded-md ${i === 0 ? 'bg-gradient-to-r from-[#E67E22] to-[#FF8C42]' : 'bg-[#FF8C42]'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${w}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="text-right min-w-[6.5rem]">
                  <span className="text-[13px] font-semibold tabular-nums text-gray-900 block">{brl(val)}</span>
                  <DeltaBadge dl={getDelta(mes, v)} className="text-[11px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* vendor cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {vends.map((v) => <VendorCard key={v} mes={mes} vend={v} />)}
      </div>
    </div>
  );
};

/* ---------- evolution view ---------- */
const EvolutionView = () => {
  const allV = useMemo(() => {
    const set = [...new Set(MESES.flatMap((m) => Object.keys(DADOS[m])))];
    return set.sort((a, b) =>
      (DADOS.julho[b]?.total || DADOS.junho[b]?.total || 0) -
      (DADOS.julho[a]?.total || DADOS.junho[a]?.total || 0));
  }, []);
  const gmax = Math.max(...allV.flatMap((v) => MESES.map((m) => DADOS[m][v]?.total || 0)));
  const tot = { maio: 0, junho: 0, julho: 0 };
  allV.forEach((v) => MESES.forEach((m) => { if (DADOS[m][v]) tot[m] += DADOS[m][v].total; }));
  const totPct = ((tot.julho - tot.junho) / tot.junho) * 100;

  const varCell = (v) => {
    const jun = DADOS.junho[v], jul = DADOS.julho[v];
    if (jun && jul) return <DeltaBadge dl={{ pct: ((jul.total - jun.total) / jun.total) * 100 }} />;
    if (jul && !jun) return <span className="text-green-600 font-semibold">novo</span>;
    if (jun && !jul) return <span className="text-red-500 font-semibold">sem vendas</span>;
    return <span className="text-gray-400">—</span>;
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-gray-900">Evolução Maio → Julho</h2>
          <span className="text-sm text-gray-400">Faturamento por vendedor</span>
        </div>
        <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
          <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />
          Variação = Julho vs. Junho. Valores de maio com “*” indicam período parcial (comparação não integral).
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-gray-400">
                <th className="text-left font-bold py-3 px-3">Vendedor</th>
                <th className="text-right font-bold py-3 px-3">Maio</th>
                <th className="text-right font-bold py-3 px-3">Junho</th>
                <th className="text-right font-bold py-3 px-3">Julho</th>
                <th className="text-center font-bold py-3 px-3">Tendência</th>
                <th className="text-right font-bold py-3 px-3">Var. Jun→Jul</th>
              </tr>
            </thead>
            <tbody>
              {allV.map((v) => (
                <tr key={v} className="border-t border-gray-100">
                  <td className="text-left font-semibold text-gray-800 py-3 px-3">{v}</td>
                  {MESES.map((m) => {
                    const o = DADOS[m][v];
                    return (
                      <td key={m} className="text-right tabular-nums py-3 px-3 text-gray-700">
                        {o ? `${brl0(o.total)}${o.parcial ? '*' : ''}` : <span className="text-gray-300">—</span>}
                      </td>
                    );
                  })}
                  <td className="py-3 px-3">
                    <div className="flex items-end justify-center gap-1 h-7">
                      {MESES.map((m) => {
                        const o = DADOS[m][v];
                        const h = o ? Math.max(2, (o.total / gmax) * 26) : 2;
                        return (
                          <div
                            key={m}
                            className="w-2 rounded-sm"
                            style={{ height: `${h}px`, background: MONTH_COLOR[m], opacity: o ? 1 : 0.25 }}
                            title={`${MONTH_LABEL(m)} — ${o ? brl(o.total) + (o.parcial ? ' (parcial)' : '') : 'sem vendas'}`}
                          />
                        );
                      })}
                    </div>
                  </td>
                  <td className="text-right py-3 px-3">{varCell(v)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 font-bold text-gray-900">
                <td className="text-left py-3 px-3">Total</td>
                <td className="text-right tabular-nums py-3 px-3">{brl0(tot.maio)}</td>
                <td className="text-right tabular-nums py-3 px-3">{brl0(tot.junho)}</td>
                <td className="text-right tabular-nums py-3 px-3">{brl0(tot.julho)}</td>
                <td />
                <td className="text-right py-3 px-3"><DeltaBadge dl={{ pct: totPct }} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 flex-wrap mt-4 text-xs text-gray-500">
          {MESES.map((m) => (
            <span key={m} className="inline-flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-sm inline-block" style={{ background: MONTH_COLOR[m] }} />
              {MONTH_LABEL(m)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- page ---------- */
const TABS = [
  ...MESES.map((m) => ({ id: m, label: DADOS.meta[m].nome, icon: Calendar })),
  { id: 'evo', label: 'Evolução', icon: TrendingUp },
  { id: 'ret', label: 'Retenção', icon: Repeat },
];

const RelatoriosVendas = () => {
  const [tab, setTab] = useState('junho');

  return (
    <>
      <Helmet><title>Relatórios de Vendas por Vendedor</title></Helmet>
      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Centro de Compras Zaleski Ltda</p>
            <h1 className="text-3xl font-bold text-gray-900">Relatórios de Vendas por Vendedor</h1>
          </div>

          <div className="flex gap-1 border-b border-gray-200 mb-8 overflow-x-auto">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                    active
                      ? 'text-[#E67E22] border-[#FF8C42]'
                      : 'text-gray-500 border-transparent hover:text-gray-800'
                  }`}
                >
                  <t.icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            {tab === 'evo' ? <EvolutionView /> : tab === 'ret' ? <RetencaoView /> : <MonthView mes={tab} />}
          </motion.div>

          <div className="mt-6">
            <MercadoPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatoriosVendas;
