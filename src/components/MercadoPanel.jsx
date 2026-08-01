import React from 'react';
import { Beef, TrendingUp, MapPin, Info } from 'lucide-react';
import { MERCADO } from '@/data/mercado';

const money = (v, dec = 2) => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);

const Sparkline = ({ data }) => {
  const min = Math.min(...data), max = Math.max(...data);
  const W = 100, H = 30, n = data.length;
  const pts = data.map((v, i) => {
    const x = (i / (n - 1)) * W;
    const y = H - ((v - min) / (max - min || 1)) * (H - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const [lx, ly] = pts[pts.length - 1].split(',');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-8" aria-hidden="true">
      <polyline points={pts.join(' ')} fill="none" stroke="#FF8C42" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r="2.5" fill="#E67E22" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

const MercadoPanel = () => {
  const ind = MERCADO.indicador;
  const pracaMax = Math.max(...MERCADO.pracas.map((p) => p.valor));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <Beef className="w-5 h-5 text-[#FF8C42]" />
          <h3 className="text-lg font-bold text-gray-900">Mercado do gado</h3>
        </div>
        <span className="text-xs text-gray-400">Fonte: {MERCADO.fonte} · {MERCADO.atualizado}</span>
      </div>
      <p className="text-xs text-gray-400 flex items-start gap-1.5 mb-5">
        <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />
        RS negocia por kg de peso vivo; demais praças por arroba (@ = 15 kg de carcaça).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Indicador boi gordo (arroba) */}
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 font-bold">Boi gordo · indicador</p>
            <span className="text-[10px] text-gray-400">{ind.data}</span>
          </div>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-bold text-gray-900 tabular-nums whitespace-nowrap">R$ {money(ind.valor)}</span>
            <span className="text-sm text-gray-400 pb-1">/@</span>
          </div>
          <p className={`text-xs font-semibold flex items-center gap-1 mt-1 ${ind.varMesPct >= 0 ? 'text-green-600' : 'text-red-500'}`}>
            <TrendingUp className="w-3.5 h-3.5" />
            {ind.varMesPct >= 0 ? '+' : ''}{money(ind.varMesPct)}% em julho
          </p>
          <div className="mt-auto pt-3"><Sparkline data={MERCADO.tendencia} /></div>
          <p className="text-[10px] text-gray-400 mt-1">{ind.praca}</p>
        </div>

        {/* RS — peso vivo */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-[11px] uppercase tracking-wide text-gray-500 font-bold mb-3">Rio Grande do Sul · R$/kg vivo</p>
          <div className="flex flex-col gap-2">
            {MERCADO.rs.map((g) => (
              <div key={g.label} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
                <span className="text-sm text-gray-600">{g.label}</span>
                <span className="text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">
                  R$ {money(g.valor)}<span className="text-gray-400 font-normal text-xs"> /kg</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arroba por praça */}
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-bold mb-3 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Arroba do boi gordo por praça (R$/@)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {MERCADO.pracas.map((p) => (
            <div key={p.uf} className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700 w-8 flex-none">{p.uf}</span>
              <div className="flex-1 h-2.5 bg-gray-100 rounded overflow-hidden">
                <div className="h-full bg-[#FF8C42] rounded" style={{ width: `${(p.valor / pracaMax) * 100}%` }} />
              </div>
              <span className="text-sm font-semibold text-gray-900 tabular-nums w-20 text-right flex-none">R$ {money(p.valor)}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-3">
          Preços de venda de concorrentes não são públicos — a cotação por praça é a referência de mercado. Edite os valores em <code>src/data/mercado.js</code>.
        </p>
      </div>
    </div>
  );
};

export default MercadoPanel;
