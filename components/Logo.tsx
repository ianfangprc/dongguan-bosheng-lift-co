import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/logo.jpeg" 
      alt="Bosheng Elevator Logo" 
      className={`object-contain ${className || ''}`}
      referrerPolicy="no-referrer"
    />
  );
};