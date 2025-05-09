
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface SecurityRadarProps {
  className?: string;
}

const SecurityRadar: React.FC<SecurityRadarProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Radar circles */}
      {[1, 2, 3].map((circle) => (
        <motion.div
          key={circle}
          className="absolute inset-0 rounded-full border border-indigo-500/30"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ 
            scale: circle * 0.3, 
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: circle * 0.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Radar sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent"
        style={{
          originX: 0.5,
          originY: 0.5,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Center icon */}
      <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-indigo-500 w-8 h-8" />
    </div>
  );
};

export default SecurityRadar;
