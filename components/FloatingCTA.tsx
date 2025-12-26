import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icons } from './Icon';

const FloatingCTA: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const handleClick = () => {
    if (pathname === '/contact') {
        const element = document.getElementById('online-message');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        navigate('/contact#online-message');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-industrial-accent hover:bg-industrial-accentHover text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group border border-white/10 backdrop-blur-sm"
      aria-label="立即咨询"
    >
      <div className="relative">
        <Icons.MessageSquare size={20} className="fill-white/20" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
      </div>
      <span className="font-bold tracking-wide text-sm">立即咨询</span>
    </button>
  );
};

export default FloatingCTA;