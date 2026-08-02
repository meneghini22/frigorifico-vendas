import React from 'react';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useDados } from '@/context/DadosContext';

const Carregando = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-[#FF8C42]" />
  </div>
);

const ProtectedRoute = ({ allow, children }) => {
  const { isAuthenticated, role, loading } = useAuth();
  const { pronto } = useDados();
  if (loading) return <Carregando />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allow && !allow.includes(role)) return <Navigate to="/" replace />;
  if (!pronto) return <Carregando />;
  return children;
};

export default ProtectedRoute;
