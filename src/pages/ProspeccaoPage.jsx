import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Target, Store, Info, CheckCircle2 } from 'lucide-react';
import ReportHeader from '@/components/ReportHeader';
import { PROSPECCAO as P } from '@/data/prospeccao';

const statusInfo = {
  'a-contatar': { label: 'A contatar', cls: 'bg-blue-50 text-blue-600' },
  'em-negociacao': { label: 'Em negociação', cls: 'bg-orange-50 text-orange-600' },
  'ja-cliente': { label: 'Já é cliente', cls: 'bg-green-50 text-green-600' },
  'sem-interesse': { label: 'Sem interesse', cls: 'bg-gray-100 text-gray-500' },
};

const ProspeccaoPage = () => {
  const totalCidades = P.regioes.reduce((s, r) => s + r.cidades.length, 0);
  const aContatar = P.lojas.filter((l) => l.status === 'a-contatar').length;
  const jaClientes = P.jaClientes || [];

  return (
    <>
      <Helmet><title>Prospecção</title></Helmet>
      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Onde ainda não vendemos</p>
            <h1 className="text-3xl font-bold text-gray-900">Prospecção</h1>
            <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
              <Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />{P.obs}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-50 text-orange-600"><Target className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Regiões-alvo</p><p className="text-2xl font-bold text-gray-900">{P.regioes.length}</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600"><MapPin className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Cidades foco</p><p className="text-2xl font-bold text-gray-900 tabular-nums">{totalCidades}</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600"><Store className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Prospects a contatar</p><p className="text-2xl font-bold text-gray-900 tabular-nums">{aContatar}</p></div>
            </div>
          </div>

          {/* já atendemos na região */}
          {jaClientes.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Já atendemos na região</h3>
              </div>
              <p className="text-xs text-gray-400 mb-3">Clientes que aparecem no relatório nessas cidades (não prospectar).</p>
              <div className="flex flex-wrap gap-2">
                {jaClientes.map((c) => (
                  <span key={c.nome} className="text-sm bg-green-50 border border-green-100 text-green-700 rounded-full px-3 py-1">
                    {c.nome} <span className="text-green-500/70">· {c.cidade}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* regiões e cidades */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {P.regioes.map((r) => (
              <div key={r.nome} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-[#FF8C42]" />
                  <h3 className="text-lg font-bold text-gray-900">{r.nome}</h3>
                  <span className="text-xs text-gray-400">· {r.cidades.length} cidades</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">Mercados a abrir nesta região</p>
                <div className="flex flex-wrap gap-2">
                  {r.cidades.map((c) => (
                    <span key={c} className="text-sm bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-gray-700">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* lojas prospectadas */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1">
              <Store className="w-5 h-5 text-[#FF8C42]" />
              <h3 className="text-lg font-bold text-gray-900">Lojas em prospecção</h3>
            </div>
            {P.lojas.length === 0 ? (
              <p className="text-sm text-gray-400 mt-3">
                Ainda sem lojas cadastradas. Conforme identificar lojas nessas cidades, elas aparecem aqui
                com status (a contatar / em negociação). Posso deixar esta lista editável direto no sistema
                (salvando no banco) quando quiser.
              </p>
            ) : (
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-gray-400">
                      <th className="text-left font-bold py-2 px-3">Loja</th>
                      <th className="text-left font-bold py-2 px-3">Cidade</th>
                      <th className="text-left font-bold py-2 px-3">Região</th>
                      <th className="text-left font-bold py-2 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {P.lojas.map((l, i) => {
                      const s = statusInfo[l.status] || statusInfo['a-contatar'];
                      return (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="py-2 px-3 font-semibold text-gray-800">{l.loja}</td>
                          <td className="py-2 px-3 text-gray-600">{l.cidade}</td>
                          <td className="py-2 px-3 text-gray-500">{l.regiao}</td>
                          <td className="py-2 px-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProspeccaoPage;
