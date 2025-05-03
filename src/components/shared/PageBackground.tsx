
import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-cyber-dark py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      {/* Modern animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Digital circuit-like lines - cybersecurity visual metaphor */}
        <div className="absolute w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/30 to-cyber-teal/0" />
          <div className="absolute top-[20%] right-[15%] w-[40%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/20 to-cyber-teal/0" />
          <div className="absolute top-[35%] left-[25%] w-[50%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/40 to-cyber-teal/0" />
          <div className="absolute top-[55%] right-[10%] w-[35%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/30 to-cyber-teal/0" />
          <div className="absolute top-[70%] left-[20%] w-[45%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/20 to-cyber-teal/0" />
          <div className="absolute top-[85%] right-[5%] w-[25%] h-[1px] bg-gradient-to-r from-cyber-teal/0 via-cyber-teal/40 to-cyber-teal/0" />
        </div>

        {/* Animated gradient orbs with refined colors */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyber-teal/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-spin-slower" />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;
