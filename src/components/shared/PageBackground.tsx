import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-[#0B0B1E] relative overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl animate-spin-slower" />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;