
import React, { useMemo } from 'react';

interface DataStreamProps {
  className?: string;
  density?: number;
  speed?: 'slow' | 'medium' | 'fast';
}

const DataStream: React.FC<DataStreamProps> = ({ 
  className = "", 
  density = 10,
  speed = 'medium'
}) => {
  const animationSpeed = useMemo(() => {
    switch(speed) {
      case 'slow': return 'animate-[data-stream_25s_linear_infinite]';
      case 'fast': return 'animate-[data-stream_10s_linear_infinite]';
      default: return 'animate-data-stream'; // medium (15s)
    }
  }, [speed]);

  const streamData = useMemo(() => {
    const characters = '01';
    const streams = [];
    
    for (let i = 0; i < density; i++) {
      const streamLength = Math.floor(Math.random() * 15) + 5;
      const delay = Math.random() * 5;
      const text = Array(streamLength)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join('');
      
      streams.push({
        id: i,
        text,
        left: `${(i / density) * 100}%`,
        delay: `${delay}s`,
      });
    }
    
    return streams;
  }, [density]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streamData.map((stream) => (
        <div
          key={stream.id}
          className={`absolute font-mono text-xs text-indigo-500/30 ${animationSpeed}`}
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {stream.text}
        </div>
      ))}
    </div>
  );
};

export default DataStream;
