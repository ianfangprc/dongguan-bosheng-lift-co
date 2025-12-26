
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME, COMPANY_NAME_EN } from '../constants';
import { Icons } from './Icon';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-40 bg-industrial-900/90 backdrop-blur-md border-b border-industrial-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-12 h-12 text-industrial-accent">
               <Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-lg tracking-wide leading-none mb-1">{COMPANY_NAME}</span>
              {/* Removed 'uppercase' class to keep Title Case */}
              <span className="text-industrial-metal text-[10px] tracking-wider font-medium">{COMPANY_NAME_EN}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-industrial-accent'
                        : 'text-gray-300 hover:text-white hover:bg-industrial-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
             {/* Phone Number Button Removed */}
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-industrial-800 text-gray-200 hover:text-white p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-industrial-900 border-b border-industrial-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-industrial-accent bg-industrial-800'
                      : 'text-gray-300 hover:text-white hover:bg-industrial-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
             {/* Mobile Phone Call Button Removed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
