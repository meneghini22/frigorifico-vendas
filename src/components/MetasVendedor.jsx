import React from 'react';
import { Target, TrendingUp, TrendingDown, Users, Crosshair, Trophy } from 'lucide-react';
import { gerarMetas } from '@/lib/coaching';
import { DADOS } from '@/data/relatoriosVendas';

const ICON = {
  faturamento: Target,
  clientes: Users,
  tendencia: TrendingUp,
  foco: Crosshair,
};

const MetasVendedor = ({ vendedor }) => {
  const { mesRef, pos, total, metas } = gerarMetas(vendedor);

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2b2018] rounded-xl shadow-sm border border-gray-800 p-6 text-white">
      <div className="flex items-center gap-2 mb-1">
        <Trophy className="w-5 h-5 text-[#FF8C42]" />
        <h3 className="text-lg font-bold text-white">Suas metas</h3>
      </div>
      <p className="text-xs text-gray-400 mb-5">
        {pos}º de {total} vendedores em {DADOS.meta[mesRef].nome}/2026 · o que fazer para subir
      </p>

      <div className="flex flex-wrap gap-3">
        {metas.map((m, i) => {
          const Icon = m.tipo === 'tendencia'
            ? (m.positivo ? TrendingUp : TrendingDown)
            : (ICON[m.tipo] || Target);
          const accent = m.tipo === 'tendencia' && !m.positivo ? 'text-red-400' : 'text-[#FF8C42]';
          return (
            <div key={i} className="flex-1 basis-[240px] bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`w-4 h-4 ${accent}`} />
                <p className="font-semibold text-sm">{m.titulo}</p>
              </div>
              <p className="text-sm text-gray-300 leading-snug">{m.texto}</p>
              {m.alvo != null && m.atual != null && (
                <div className="mt-3">
                  <div className="h-1.5 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-[#FF8C42] rounded" style={{ width: `${Math.min(100, (m.atual / m.alvo) * 100)}%` }} />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1 tabular-nums">
                    {Math.round((m.atual / m.alvo) * 100)}% da meta
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetasVendedor;
