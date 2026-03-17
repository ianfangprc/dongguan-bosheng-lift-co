import React from 'react';
import { logoBase64 } from '../logoBase64';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src={logoBase64} 
      alt="Bosheng Elevator Logo" 
      className={`object-contain ${className || ''}`}
      referrerPolicy="no-referrer"
    />
  );
};