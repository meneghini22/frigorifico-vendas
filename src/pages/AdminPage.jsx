import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BarChart3, UserCircle2, KeyRound, ShieldAlert, Users } from 'lucide-react';
import ReportHeader from '@/components/ReportHeader';
import MercadoPanel from '@/components/MercadoPanel';
import { VENDEDORES, senhaDoVendedor, ADMIN_SENHA, GESTOR_SENHA } from '@/context/AuthContext';
import { DADOS, MESES } from '@/data/relatoriosVendas';

const brl0 = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

const AdminPage = () => {
  const totalMes = (m) => Object.values(DADOS[m]).reduce((s, v) => s + v.total, 0);

  return (
    <>
      <Helmet><title>Administração</title></Helmet>
      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Painel do administrador</p>
            <h1 className="text-3xl font-bold text-gray-900">Administração</h1>
          </div>

          {/* atalhos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/painel" className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-[#FF8C42] transition-colors flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-50 text-orange-600"><BarChart3 className="w-7 h-7" /></div>
              <div><p className="font-bold text-gray-900">Análise comparativa</p><p className="text-xs text-gray-500">Todos os vendedores</p></div>
            </Link>
            <Link to="/vendedor" className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-[#FF8C42] transition-colors flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600"><UserCircle2 className="w-7 h-7" /></div>
              <div><p className="font-bold text-gray-900">Por vendedor</p><p className="text-xs text-gray-500">Abra a tela de qualquer um</p></div>
            </Link>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600"><Users className="w-7 h-7" /></div>
              <div><p className="font-bold text-gray-900 tabular-nums">{VENDEDORES.length} vendedores</p><p className="text-xs text-gray-500">Julho: {brl0(totalMes('julho'))}</p></div>
            </div>
          </div>

          {/* acessos */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1">
              <KeyRound className="w-5 h-5 text-[#FF8C42]" />
              <h3 className="text-lg font-bold text-gray-900">Acessos e senhas</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">Cada vendedor entra com a senha abaixo. Padrão: nome em minúsculo + “1”.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left font-bold py-2 px-3">Acesso</th>
                    <th className="text-left font-bold py-2 px-3">Papel</th>
                    <th className="text-left font-bold py-2 px-3">Senha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="py-2 px-3 font-semibold text-gray-800">Administrador (você)</td>
                    <td className="py-2 px-3 text-gray-500">admin</td>
                    <td className="py-2 px-3 font-mono text-[#E67E22]">{ADMIN_SENHA}</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-2 px-3 font-semibold text-gray-800">Gestores</td>
                    <td className="py-2 px-3 text-gray-500">gestor</td>
                    <td className="py-2 px-3 font-mono text-[#E67E22]">{GESTOR_SENHA}</td>
                  </tr>
                  {VENDEDORES.map((v) => (
                    <tr key={v} className="border-t border-gray-100">
                      <td className="py-2 px-3 font-semibold text-gray-800">{v}</td>
                      <td className="py-2 px-3 text-gray-500">vendedor</td>
                      <td className="py-2 px-3 font-mono text-gray-700">{senhaDoVendedor(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-2 mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg p-3">
              <ShieldAlert className="w-4 h-4 flex-none mt-0.5" />
              <span>As senhas ficam no código do site (login só no navegador) e <strong>não são segurança real</strong>. Para proteção de verdade seria necessário um backend. Altere as senhas em <code>src/context/AuthContext.jsx</code>.</span>
            </div>
          </div>

          <MercadoPanel />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
