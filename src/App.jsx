import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { DadosProvider } from '@/context/DadosContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import LoginPage from '@/pages/LoginPage';
import RelatoriosVendas from '@/pages/RelatoriosVendas';
import RelatorioVendedorPage from '@/pages/RelatorioVendedorPage';
import ProspeccaoPage from '@/pages/ProspeccaoPage';
import AdminPage from '@/pages/AdminPage';
import '@/styles/theme.css';

const Home = () => {
  const { isAuthenticated, role, loading } = useAuth();
  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (role === 'vendedor') return <Navigate to="/vendedor" replace />;
  if (role === 'admin') return <Navigate to="/admin" replace />;
  return <Navigate to="/painel" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <DadosProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/painel" element={
            <ProtectedRoute allow={['admin', 'gestor']}><RelatoriosVendas /></ProtectedRoute>
          } />
          <Route path="/vendedor" element={
            <ProtectedRoute allow={['admin', 'gestor', 'vendedor']}><RelatorioVendedorPage /></ProtectedRoute>
          } />
          <Route path="/prospeccao" element={
            <ProtectedRoute allow={['admin', 'gestor']}><ProspeccaoPage /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute allow={['admin']}><AdminPage /></ProtectedRoute>
          } />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </DadosProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
