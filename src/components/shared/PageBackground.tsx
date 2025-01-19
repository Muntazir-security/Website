import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-[#0B0B1E] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>
      {children}
    </div>
  );
};

export default PageBackground;