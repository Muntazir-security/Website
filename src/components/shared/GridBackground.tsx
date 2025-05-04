
import React from 'react';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className }) => {
  return (
    <div className={cn(
      'absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0',
      className
    )}>
      <div className="absolute inset-0 grid grid-cols-12 gap-0.5 w-full h-full">
        {/* Generate grid lines */}
        {Array.from({ length: 12 }).map((_, colIndex) => (
          <div key={`col-${colIndex}`} className="relative h-full">
            <div className="absolute inset-0 border-r border-cyber-teal/10"></div>
            
            {/* Generate nodes at intersections */}
            {Array.from({ length: 24 }).map((_, rowIndex) => (
              <div 
                key={`node-${colIndex}-${rowIndex}`} 
                className="absolute w-1 h-1 bg-cyber-teal/30 rounded-full"
                style={{
                  top: `${(rowIndex * 100) / 24}%`,
                  right: '-0.125rem',
                  opacity: Math.random() > 0.7 ? 0.8 : 0.2,
                }}
              />
            ))}
          </div>
        ))}
        
        {/* Horizontal grid lines */}
        {Array.from({ length: 24 }).map((_, rowIndex) => (
          <div 
            key={`row-${rowIndex}`} 
            className="absolute left-0 right-0 border-b border-cyber-teal/10"
            style={{
              top: `${(rowIndex * 100) / 24}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridBackground;
