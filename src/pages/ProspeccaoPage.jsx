import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Target, Store, Info, CheckCircle2, Plus, Trash2, Loader2 } from 'lucide-react';
import ReportHeader from '@/components/ReportHeader';
import { useProspeccao } from '@/hooks/useProspeccao';

const statusInfo = {
  'a-contatar': { label: 'A contatar', cls: 'bg-blue-50 text-blue-600' },
  'em-negociacao': { label: 'Em negociação', cls: 'bg-orange-50 text-orange-600' },
  'ja-cliente': { label: 'Já é cliente', cls: 'bg-green-50 text-green-600' },
  'sem-interesse': { label: 'Sem interesse', cls: 'bg-gray-100 text-gray-500' },
};
const STATUS = Object.keys(statusInfo);

const ProspeccaoPage = () => {
  const { lojas, loading, editavel, adicionar, atualizarStatus, remover, regioes, jaClientes, obs } = useProspeccao();
  const totalCidades = regioes.reduce((s, r) => s + r.cidades.length, 0);
  const aContatar = lojas.filter((l) => l.status === 'a-contatar').length;
  const [nova, setNova] = useState({ loja: '', cidade: '', regiao: regioes[0]?.nome || '', tipo: 'Supermercado', status: 'a-contatar' });
  const [salvando, setSalvando] = useState(false);

  const salvar = async (e) => {
    e.preventDefault();
    if (!nova.loja.trim() || !nova.cidade.trim()) return;
    setSalvando(true);
    await adicionar(nova);
    setSalvando(false);
    setNova({ ...nova, loja: '', cidade: '' });
  };

  return (
    <>
      <Helmet><title>Prospecção</title></Helmet>
      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Onde ainda não vendemos</p>
            <h1 className="text-3xl font-bold text-gray-900">Prospecção</h1>
            <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1"><Info className="w-3.5 h-3.5 flex-none mt-0.5 text-[#E67E22]" />{obs}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-50 text-orange-600"><Target className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Regiões-alvo</p><p className="text-2xl font-bold text-gray-900">{regioes.length}</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600"><MapPin className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Cidades foco</p><p className="text-2xl font-bold text-gray-900 tabular-nums">{totalCidades}</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600"><Store className="w-7 h-7" /></div>
              <div><p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">A contatar</p><p className="text-2xl font-bold text-gray-900 tabular-nums">{aContatar}</p></div>
            </div>
          </div>

          {jaClientes.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-5 h-5 text-green-600" /><h3 className="text-lg font-bold text-gray-900">Já atendemos na região</h3></div>
              <p className="text-xs text-gray-400 mb-3">Clientes que aparecem no relatório nessas cidades (não prospectar).</p>
              <div className="flex flex-wrap gap-2">
                {jaClientes.map((c) => (
                  <span key={c.nome} className="text-sm bg-green-50 border border-green-100 text-green-700 rounded-full px-3 py-1">{c.nome} <span className="text-green-500/70">· {c.cidade}</span></span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {regioes.map((r) => (
              <div key={r.nome} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-1"><MapPin className="w-5 h-5 text-[#FF8C42]" /><h3 className="text-lg font-bold text-gray-900">{r.nome}</h3><span className="text-xs text-gray-400">· {r.cidades.length} cidades</span></div>
                <p className="text-xs text-gray-400 mb-4">Mercados a abrir nesta região</p>
                <div className="flex flex-wrap gap-2">
                  {r.cidades.map((c) => <span key={c} className="text-sm bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-gray-700">{c}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* lojas */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1"><Store className="w-5 h-5 text-[#FF8C42]" /><h3 className="text-lg font-bold text-gray-900">Lojas em prospecção</h3><span className="text-xs text-gray-400">· {lojas.length}</span></div>

            {editavel && (
              <form onSubmit={salvar} className="grid grid-cols-1 sm:grid-cols-[1fr,10rem,10rem,auto] gap-2 mt-3 mb-4">
                <input value={nova.loja} onChange={(e) => setNova({ ...nova, loja: e.target.value })} placeholder="Nome da loja" className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FF8C42]" />
                <input value={nova.cidade} onChange={(e) => setNova({ ...nova, cidade: e.target.value })} placeholder="Cidade" className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FF8C42]" />
                <select value={nova.regiao} onChange={(e) => setNova({ ...nova, regiao: e.target.value })} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-[#FF8C42]">
                  {regioes.map((r) => <option key={r.nome} value={r.nome}>{r.nome}</option>)}
                </select>
                <button type="submit" disabled={salvando} className="bg-[#FF8C42] hover:bg-[#E67E22] text-white font-semibold rounded-lg px-4 py-2 text-sm flex items-center justify-center gap-1.5 disabled:opacity-60">
                  {salvando ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />} Adicionar
                </button>
              </form>
            )}

            {loading ? (
              <div className="py-8 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-[#FF8C42]" /></div>
            ) : lojas.length === 0 ? (
              <p className="text-sm text-gray-400 mt-3">Nenhuma loja cadastrada ainda.</p>
            ) : (
              <div className="overflow-x-auto mt-1">
                <table className="w-full text-sm min-w-[620px]">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-gray-400">
                      <th className="text-left font-bold py-2 px-3">Loja</th>
                      <th className="text-left font-bold py-2 px-3">Cidade</th>
                      <th className="text-left font-bold py-2 px-3">Tipo</th>
                      <th className="text-left font-bold py-2 px-3">Status</th>
                      {editavel && <th className="py-2 px-3" />}
                    </tr>
                  </thead>
                  <tbody>
                    {lojas.map((l) => {
                      const s = statusInfo[l.status] || statusInfo['a-contatar'];
                      return (
                        <tr key={l.id ?? `${l.loja}-${l.cidade}`} className="border-t border-gray-100">
                          <td className="py-2 px-3 font-semibold text-gray-800">{l.loja}</td>
                          <td className="py-2 px-3 text-gray-600">{l.cidade}</td>
                          <td className="py-2 px-3 text-gray-500">{l.tipo || '—'}</td>
                          <td className="py-2 px-3">
                            {editavel ? (
                              <select value={l.status} onChange={(e) => atualizarStatus(l.id, e.target.value)} className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white outline-none focus:border-[#FF8C42]">
                                {STATUS.map((k) => <option key={k} value={k}>{statusInfo[k].label}</option>)}
                              </select>
                            ) : (
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span>
                            )}
                          </td>
                          {editavel && (
                            <td className="py-2 px-3 text-right">
                              <button onClick={() => remover(l.id)} className="text-gray-300 hover:text-red-500" title="Remover"><Trash2 className="w-4 h-4" /></button>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            {!editavel && (
              <p className="text-[11px] text-gray-400 mt-3">Com o login real (Supabase) ligado, admin e gestor podem adicionar lojas e mudar o status aqui mesmo.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProspeccaoPage;
