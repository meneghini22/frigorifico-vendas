import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign, Users, TrendingUp, TrendingDown, Minus, Trophy, Info, UserCircle2,
} from 'lucide-react';
import { DADOS, MESES, PREV } from '@/data/relatoriosVendas';

/* ---------- helpers ---------- */
const brl = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
const brl0 = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);
const comp = (v) => {
  if (v >= 1e6) return `R$ ${(v / 1e6).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mi`;
  if (v >= 1e3) return `R$ ${(v / 1e3).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil`;
  return brl0(v);
};
const MONTH_COLOR = { maio: '#FDBA74', junho: '#F97316', julho: '#C2410C' };
const nomeMes = (m) => DADOS.meta[m].nome;

const todosVendedores = () =>
  [...new Set(MESES.flatMap((m) => Object.keys(DADOS[m])))].sort((a, b) => a.localeCompare(b, 'pt-BR'));

const posicaoNoRanking = (mes, vend) => {
  const d = DADOS[mes];
  const ord = Object.keys(d).sort((a, b) => d[b].total - d[a].total);
  return { pos: ord.indexOf(vend) + 1, total: ord.length };
};

const getDelta = (mes, vend) => {
  const p = PREV[mes];
  if (!p || !DADOS[mes][vend]) return null;
  const prev = DADOS[p][vend];
  if (!prev) return { novo: true };
  return { pct: ((DADOS[mes][vend].total - prev.total) / prev.total) * 100, parcial: !!prev.parcial };
};

const DeltaBadge = ({ dl, className = '' }) => {
  if (!dl) return null;
  if (dl.novo) return <span className={`text-gray-400 font-semibold ${className}`}>novo</span>;
  const up = dl.pct > 1, down = dl.pct < -1;
  const Icon = up ? TrendingUp : down ? TrendingDown : Minus;
  const color = up ? 'text-green-600' : down ? 'text-red-500' : 'text-gray-400';
  return (
    <span className={`inline-flex items-center gap-1 font-semibold tabular-nums ${color} ${className}`}>
      <Icon className="w-4 h-4" />{Math.abs(dl.pct).toFixed(0)}%{dl.parcial ? '*' : ''}
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

/* ---------- main ---------- */
const RelatorioVendedor = ({ vendedor: vendedorProp }) => {
  const vendedores = useMemo(todosVendedores, []);
  const [vendedor, setVendedor] = useState(() =>
    vendedorProp || localStorage.getItem('schlosser_vendedor_relatorio') || '');

  const mesesComDados = useMemo(
    () => MESES.filter((m) => DADOS[m][vendedor]),
    [vendedor]);
  const [mes, setMes] = useState('julho');
  const mesAtivo = mesesComDados.includes(mes) ? mes : (mesesComDados[mesesComDados.length - 1] || 'julho');

  const escolher = (nome) => {
    setVendedor(nome);
    if (nome) localStorage.setItem('schlosser_vendedor_relatorio', nome);
    else localStorage.removeItem('schlosser_vendedor_relatorio');
  };

  const o = vendedor ? DADOS[mesAtivo]?.[vendedor] : null;

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      {/* seletor de vendedor */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
          <UserCircle2 className="w-5 h-5 text-[#FF8C42]" />
          Vendedor
        </div>
        <select
          value={vendedor}
          onChange={(e) => escolher(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FF8C42] bg-white"
        >
          <option value="">Selecione seu nome…</option>
          {vendedores.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      {!vendedor ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center text-gray-400">
          Selecione seu nome acima para ver o seu relatório de vendas.
        </div>
      ) : mesesComDados.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center text-gray-400">
          Nenhuma venda registrada para <span className="font-semibold text-gray-600">{vendedor}</span> nos períodos disponíveis.
        </div>
      ) : (
        <>
          {/* abas de mês */}
          <div className="flex gap-1 border-b border-gray-200 overflow-x-auto">
            {mesesComDados.map((m) => {
              const active = m === mesAtivo;
              return (
                <button
                  key={m}
                  onClick={() => setMes(m)}
                  className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                    active ? 'text-[#E67E22] border-[#FF8C42]' : 'text-gray-500 border-transparent hover:text-gray-800'
                  }`}
                >
                  {nomeMes(m)}
                </button>
              );
            })}
          </div>

          <motion.div key={mesAtivo} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex flex-col gap-6">
            <MesIndividual vendedor={vendedor} mes={mesAtivo} o={o} />
            <EvolucaoIndividual vendedor={vendedor} />
          </motion.div>
        </>
      )}
    </div>
  );
};

const MesIndividual = ({ vendedor, mes, o }) => {
  const meta = DADOS.meta[mes];
  const { pos, total } = posicaoNoRanking(mes, vendedor);
  const cliLab = o.clientesLabel || 'clientes';
  const weekMax = o.semanas ? Math.max(...o.semanas.map((s) => s[2])) : 0;
  const topMax = o.top && o.top.length ? Math.max(...o.top.map((c) => c.valor)) : 0;
  const dl = getDelta(mes, vendedor);

  return (
    <>
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-xl font-bold text-gray-900">{vendedor}</h2>
          <span className="text-sm text-gray-400">{meta.nome} / 2026 · {meta.periodo}</span>
          {o.parcial && (
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#E67E22] bg-orange-50 px-2 py-0.5 rounded-full">
              {o.parcial}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
          <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />{meta.obs}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={DollarSign} tone="bg-green-50 text-green-600" label="Meu faturamento" value={brl0(o.total)}
          sub={dl && !dl.novo ? undefined : 'no período'} />
        <KpiCard icon={Users} tone="bg-blue-50 text-blue-600" label={cliLab === 'atendimentos' ? 'Atendimentos' : 'Clientes'} value={o.clientes} sub="com movimento" />
        <KpiCard icon={TrendingUp} tone="bg-orange-50 text-orange-600" label="Ticket médio" value={brl0(o.ticket)} sub="por cliente" />
        <KpiCard icon={Trophy} tone="bg-amber-50 text-amber-600" label="Posição" value={`${pos}º`} sub={`de ${total} vendedores`} />
      </div>

      {dl && !dl.novo && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-3 flex items-center gap-2 text-sm">
          <span className="text-gray-500">Variação vs. {nomeMes(PREV[mes])}:</span>
          <DeltaBadge dl={dl} />
          {dl.parcial && <span className="text-xs text-gray-400">(mês anterior parcial)</span>}
        </div>
      )}

      {o.semanas && o.semanas.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-3">Faturamento por semana</p>
          <div className="flex items-end gap-3 h-24">
            {o.semanas.map((s) => (
              <div key={s[0]} className="flex-1 flex flex-col items-center gap-1.5 group">
                <span className="text-[10px] text-gray-500 tabular-nums opacity-0 group-hover:opacity-100 transition-opacity">{comp(s[2])}</span>
                <div
                  className="w-full max-w-[46px] bg-[#FF8C42] rounded-t opacity-85 group-hover:opacity-100 transition-all"
                  style={{ height: `${Math.max(4, (s[2] / weekMax) * 68)}px` }}
                  title={`${s[0]} — ${brl(s[2])} — ${s[1]} cliente(s)`}
                />
                <span className="text-[10px] text-gray-400 tabular-nums">{s[0]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-3">Principais clientes</p>
        {o.top && o.top.length > 0 ? (
          <div className="flex flex-col gap-3">
            {o.top.slice(0, 8).map((c) => (
              <div key={c.nome}>
                <div className="flex justify-between items-center gap-3 text-sm">
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
          <p className="text-sm text-gray-400 italic">Lista de clientes não detalhada no relatório-fonte deste mês.</p>
        )}
      </div>
    </>
  );
};

const EvolucaoIndividual = ({ vendedor }) => {
  const vals = MESES.map((m) => ({ m, o: DADOS[m][vendedor] }));
  const max = Math.max(...vals.map((x) => x.o?.total || 0), 1);
  const jun = DADOS.junho[vendedor], jul = DADOS.julho[vendedor];
  let varJul = null;
  if (jun && jul) varJul = { pct: ((jul.total - jun.total) / jun.total) * 100 };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold">Minha evolução (Maio → Julho)</p>
        {varJul && (
          <span className="text-xs text-gray-500 inline-flex items-center gap-1.5">
            Jun→Jul: <DeltaBadge dl={varJul} className="text-xs" />
          </span>
        )}
      </div>
      <div className="flex items-end gap-6 h-40">
        {vals.map(({ m, o }) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-2 group">
            <span className="text-xs font-semibold text-gray-700 tabular-nums">{o ? comp(o.total) : '—'}</span>
            <div className="w-full flex items-end justify-center" style={{ height: '96px' }}>
              <div
                className="w-full max-w-[72px] rounded-t transition-all"
                style={{ height: `${o ? Math.max(4, (o.total / max) * 96) : 3}px`, background: MONTH_COLOR[m], opacity: o ? 1 : 0.3 }}
                title={o ? `${nomeMes(m)} — ${brl(o.total)}${o.parcial ? ' (parcial)' : ''}` : `${nomeMes(m)} — sem vendas`}
              />
            </div>
            <span className="text-xs text-gray-500">{nomeMes(m)}{o?.parcial ? '*' : ''}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 mt-3">* período parcial (comparação não integral).</p>
    </div>
  );
};

export default RelatorioVendedor;
