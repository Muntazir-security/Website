
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
      
      {/* Modern gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
            opacity: 0.15
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] animate-pulse-slow"
          style={{
            background: 'linear-gradient(102.3deg, rgba(147,39,143,0.2) 5.9%, rgba(234,172,232,0.2) 64%, rgba(246,219,245,0.2) 89%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px] animate-spin-slower"
          style={{
            background: 'linear-gradient(90deg, hsla(277, 75%, 84%, 0.1) 0%, hsla(297, 50%, 51%, 0.1) 100%)',
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;
