import React from 'react';
import { Helmet } from 'react-helmet';
import ReportHeader from '@/components/ReportHeader';
import RelatorioVendedor from '@/components/RelatorioVendedor';
import MercadoPanel from '@/components/MercadoPanel';
import { useAuth } from '@/context/AuthContext';

const RelatorioVendedorPage = () => {
  const { isVendedor, vendedor } = useAuth();

  return (
    <>
      <Helmet><title>Relatório por Vendedor</title></Helmet>
      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Centro de Compras Zaleski Ltda</p>
            <h1 className="text-3xl font-bold text-gray-900">
              {isVendedor ? `Olá, ${vendedor}` : 'Relatório Individual do Vendedor'}
            </h1>
            {isVendedor && <p className="text-sm text-gray-500">Seu desempenho, metas e mercado.</p>}
          </div>

          <RelatorioVendedor vendedor={isVendedor ? vendedor : undefined} locked={isVendedor} />

          <MercadoPanel />
        </div>
      </div>
    </>
  );
};

export default RelatorioVendedorPage;
