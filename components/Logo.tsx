import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * NEW LOGO: "The Secure Loop" (B + S Integration)
 * 
 * Design Philosophy:
 * 1. "Bold" (胆大): The thick vertical pillar on the left represents the elevator shaft 
 *    and structural integrity. It forms the backbone of the 'B'.
 * 2. "Careful" (心细): The winding path on the right forms both the loops of the 'B' 
 *    and a distinct 'S' shape. The curves are smooth, representing precise maintenance 
 *    and smooth elevator operation.
 * 3. Integration: The gap between the spine and the curves creates a tension that 
 *    highlights the mechanical nature (like a latch or cable guide).
 */
const LogoBS: React.FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 1. The Left Pillar (The "B" Spine) - Represents Stability & Shaft */}
    <path 
      d="M14 10C14 7.79086 15.7909 6 18 6H20C22.2091 6 24 7.79086 24 10V54C24 56.2091 22.2091 58 20 58H18C15.7909 58 14 56.2091 14 54V10Z" 
      fill="currentColor" 
    />

    {/* 2. The "S" Curve (The "B" Loops) - Represents Motion & Safety 
       - Starts from inside-middle, loops up and right (Top B loop)
       - Cuts back to middle
       - Loops down and right (Bottom B loop)
       - Effectively forms an 'S' shape attached to the pillar
    */}
    <path 
      d="M28 32H40C46.6274 32 52 26.6274 52 20C52 13.3726 46.6274 8 40 8H28V16H40C42.2091 16 44 17.7909 44 20C44 22.2091 42.2091 24 40 24H28V32Z" 
      fill="currentColor" 
    />
    <path 
      d="M28 32V40H40C42.2091 40 44 41.7909 44 44C44 46.2091 42.2091 48 40 48H28V56H40C46.6274 56 52 50.6274 52 44C52 37.3726 46.6274 32 40 32H28Z" 
      fill="currentColor" 
    />
    
    {/* 3. The Central Connector Accent 
       Adds a small mechanical detail to the center join, making it look like a sturdy hinge.
    */}
    <rect x="28" y="28" width="4" height="8" fill="currentColor" rx="1" />
  </svg>
);

export const Logo: React.FC<LogoProps> = (props) => {
  return <LogoBS {...props} />;
};