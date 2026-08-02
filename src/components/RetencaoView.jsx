import React from 'react';
import { Repeat, UserCheck, UserMinus, UserPlus, TrendingDown, Info } from 'lucide-react';
import { RETENCAO as R } from '@/data/retencao';

const brl = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);
const brl2 = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
const pct = (n, base) => (base ? Math.round((n / base) * 100) : 0);

const Tile = ({ icon: Icon, tone, label, valor, sub }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-3 rounded-lg ${tone}`}><Icon className="w-7 h-7" /></div>
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
      <p className="text-2xl font-bold text-gray-900 tabular-nums leading-tight mt-0.5">{valor}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  </div>
);

const RetencaoView = () => {
  const t = R.total;
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-gray-900">Retenção de clientes</h2>
          <span className="text-sm text-gray-400">{R.periodo}</span>
        </div>
        <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
          <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />
          Clientes de junho que seguiram, pararam ou são novos em julho. “Pararam” = não compraram de nenhum vendedor em julho. Maio não entra (fonte sem lista completa de clientes).
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Tile icon={UserCheck} tone="bg-green-50 text-green-600" label="Continuaram" valor={t.continuaram} sub={`${pct(t.continuaram, t.base)}% da base de junho`} />
        <Tile icon={UserMinus} tone="bg-red-50 text-red-500" label="Pararam" valor={t.pararam} sub={`${pct(t.pararam, t.base)}% da base de junho`} />
        <Tile icon={UserPlus} tone="bg-blue-50 text-blue-600" label="Novos em julho" valor={t.novos} sub={`+${brl(R.valorNovoTotal)} em julho`} />
        <Tile icon={TrendingDown} tone="bg-orange-50 text-orange-600" label="Valor que parou" valor={brl(R.valorPerdidoTotal)} sub="faturavam em junho e sumiram" />
      </div>

      {/* maiores que pararam */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Maiores clientes que pararam</h3>
        <p className="text-xs text-gray-400 mb-4">Valor que faturavam em junho e não compraram em julho — priorize a recuperação.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-gray-400">
                <th className="text-left font-bold py-2 px-3">Cliente</th>
                <th className="text-left font-bold py-2 px-3">Era do vendedor</th>
                <th className="text-right font-bold py-2 px-3">Faturava (junho)</th>
              </tr>
            </thead>
            <tbody>
              {R.topPararam.map((c, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-2 px-3 font-semibold text-gray-800">{c.nome}</td>
                  <td className="py-2 px-3 text-gray-500">{c.vendedor}</td>
                  <td className="py-2 px-3 text-right font-semibold tabular-nums text-red-500">{brl2(c.valor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* por vendedor */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Por vendedor</h3>
        <p className="text-xs text-gray-400 mb-4">Barra = clientes de junho que continuaram (verde) e que saíram da carteira (vermelho).</p>
        <div className="flex flex-col gap-4">
          {R.vendedores.map((v) => {
            const base = v.continuaram + v.pararam;
            const contPct = base ? (v.continuaram / base) * 100 : 0;
            return (
              <div key={v.nome} className="grid grid-cols-[7rem,1fr,auto] sm:grid-cols-[9rem,1fr,auto] items-center gap-3">
                <span className="font-semibold text-sm text-gray-800 truncate">{v.nome}</span>
                <div className="h-5 bg-gray-100 rounded-md overflow-hidden flex">
                  <div className="h-full bg-green-500" style={{ width: `${contPct}%` }} title={`${v.continuaram} continuaram`} />
                  <div className="h-full bg-red-400" style={{ width: `${100 - contPct}%` }} title={`${v.pararam} saíram`} />
                </div>
                <div className="text-right text-[13px] tabular-nums whitespace-nowrap">
                  <span className="text-green-600 font-semibold">{v.continuaram}</span>
                  <span className="text-gray-300"> · </span>
                  <span className="text-red-500 font-semibold">-{v.pararam}</span>
                  <span className="text-gray-300"> · </span>
                  <span className="text-blue-600 font-semibold">+{v.novos}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] text-gray-400 mt-4">
          <span className="text-green-600 font-semibold">continuaram</span> ·
          <span className="text-red-500 font-semibold"> saíram</span> ·
          <span className="text-blue-600 font-semibold"> novos</span>. Olavo ficou sem vendas em julho — a maior perda (Ruben Boff Damian, {brl(262197)}) veio da carteira dele.
        </p>
      </div>
    </div>
  );
};

export default RetencaoView;
