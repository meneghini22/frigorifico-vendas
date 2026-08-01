import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BarChart3, UserCircle2, Shield, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const ReportHeader = () => {
  const { role, user, isAdmin, isGestor, logout } = useAuth();
  const navigate = useNavigate();

  const links = [];
  if (isAdmin || isGestor) links.push({ to: '/painel', label: 'Análise', icon: BarChart3 });
  links.push({ to: '/vendedor', label: isAdmin || isGestor ? 'Por vendedor' : 'Meu relatório', icon: UserCircle2 });
  if (isAdmin) links.push({ to: '/admin', label: 'Admin', icon: Shield });

  const sair = () => { logout(); navigate('/login'); };
  const papel = role === 'admin' ? 'ADMIN' : role === 'gestor' ? 'GESTOR' : 'VENDEDOR';

  return (
    <header className="bg-[#1a1a1a] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-[#FF8C42] flex items-center justify-center rotate-3">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white leading-none">Relatórios de Vendas</h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Zaleski</p>
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-3">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#FF8C42]' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white leading-none">{user?.nome}</p>
              <p className="text-[10px] text-[#FF8C42] font-bold tracking-wider">{papel}</p>
            </div>
            <button onClick={sair} title="Sair" className="text-gray-400 hover:text-[#FF8C42] p-2">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
