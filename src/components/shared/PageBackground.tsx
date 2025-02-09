
import React from 'react';
import ParticleBackground from './ParticleBackground';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-[#1E293B] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      {/* Interactive particle background */}
      <ParticleBackground />
      
      {/* Subtle gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[130px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(to right, #243949 0%, #517fa4 100%)'
          }}
        />
        <div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[130px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(90deg, rgba(71, 85, 105, 0.3) 0%, rgba(51, 65, 85, 0.2) 100%)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] animate-spin-slower"
          style={{
            background: 'linear-gradient(109.6deg, rgba(223,234,247,0.2) 11.2%, rgba(244,248,252,0.1) 91.1%)'
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;

