import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden w-full h-full ${className || ''}`}>
      <img 
        src="/logo.png" 
        alt="Bosheng Elevator Logo" 
        className="w-[110%] h-[110%] max-w-none object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};