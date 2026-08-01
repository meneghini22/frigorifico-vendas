import React from 'react';
import { Beef, TrendingUp, Store, Info } from 'lucide-react';
import { MERCADO } from '@/data/mercado';

const money = (v, dec = 2) => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);

const Sparkline = ({ data }) => {
  const min = Math.min(...data), max = Math.max(...data);
  const w = 120, h = 34, n = data.length;
  const pts = data.map((v, i) => {
    const x = (i / (n - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const last = pts.split(' ').pop().split(',');
  return (
    <svg width={w} height={h} className="overflow-visible">
      <polyline points={pts} fill="none" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="3" fill="#E67E22" />
    </svg>
  );
};

const MercadoPanel = () => {
  const c = MERCADO.concorrentes;
  const cMax = Math.max(...c.linhas.map((l) => l.valor));
  const arrDelta = MERCADO.tendenciaArroba.length > 1
    ? MERCADO.tendenciaArroba[MERCADO.tendenciaArroba.length - 1] - MERCADO.tendenciaArroba[0]
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-1">
        <Beef className="w-5 h-5 text-[#FF8C42]" />
        <h3 className="text-lg font-bold text-gray-900">Mercado</h3>
      </div>
      <p className="text-xs text-gray-400 flex items-center gap-1.5 mb-5">
        <Info className="w-3.5 h-3.5 text-[#E67E22]" />
        {MERCADO.ilustrativo ? 'Valores ilustrativos' : 'Atualizado'} · {MERCADO.atualizado}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* cotação do gado */}
        <div className="md:col-span-1">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-3">Cotação do gado</p>
          <div className="flex flex-col gap-2">
            {MERCADO.gado.map((g) => (
              <div key={g.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                <span className="text-sm text-gray-600">{g.label}</span>
                <span className="text-sm font-bold text-gray-900 tabular-nums">R$ {money(g.valor)}<span className="text-gray-400 font-normal text-xs"> /@</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* tendência da arroba */}
        <div className="md:col-span-1">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-3">Arroba do boi gordo</p>
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900 tabular-nums">R$ {money(MERCADO.tendenciaArroba[MERCADO.tendenciaArroba.length - 1])}</p>
                <p className={`text-xs font-semibold flex items-center gap-1 mt-1 ${arrDelta >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  {arrDelta >= 0 ? '+' : ''}{money(arrDelta)} nas últimas semanas
                </p>
              </div>
              <Sparkline data={MERCADO.tendenciaArroba} />
            </div>
          </div>
        </div>

        {/* concorrentes */}
        <div className="md:col-span-1">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold mb-1 flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5" /> Concorrência
          </p>
          <p className="text-[11px] text-gray-400 mb-2">{c.produto}</p>
          <div className="flex flex-col gap-2">
            {c.linhas.map((l) => (
              <div key={l.nome}>
                <div className="flex justify-between items-center text-sm">
                  <span className={l.destaque ? 'font-bold text-[#E67E22]' : 'text-gray-600'}>{l.nome}</span>
                  <span className="font-semibold tabular-nums text-gray-900">R$ {money(l.valor)}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded mt-1 overflow-hidden">
                  <div className={`h-full rounded ${l.destaque ? 'bg-[#FF8C42]' : 'bg-gray-300'}`} style={{ width: `${(l.valor / cMax) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercadoPanel;
