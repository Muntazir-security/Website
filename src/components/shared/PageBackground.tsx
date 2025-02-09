
import React from 'react';
import ParticleBackground from './ParticleBackground';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-[#1A1F2C] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      {/* Interactive particle background */}
      <ParticleBackground />
      
      {/* Animated gradient orbs with new colors and animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(225deg, rgba(147,39,143,0.3) 5.9%, rgba(234,172,232,0.2) 64%, rgba(246,219,245,0.1) 89%)'
          }}
        />
        <div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(90deg, rgba(126,105,171,0.3) 0%, rgba(110,89,165,0.2) 100%)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[130px] animate-spin-slower"
          style={{
            background: 'linear-gradient(102.3deg, rgba(147,39,143,0.15) 5.9%, rgba(234,172,232,0.1) 64%, rgba(246,219,245,0.05) 89%)'
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;
