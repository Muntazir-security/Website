
import React from 'react';
import GridBackground from './GridBackground';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-cyber-dark py-14 px-5 sm:px-8 lg:px-10 relative overflow-hidden ${className}`}>
      {/* Modern animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs with refined colors */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyber-teal/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-spin-slower" />
        
        {/* Add cybersecurity grid background */}
        <GridBackground />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
