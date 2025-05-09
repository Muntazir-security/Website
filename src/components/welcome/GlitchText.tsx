
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  delay?: number;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  animationDuration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  delay = 0,
  className = "",
  glitchIntensity = 'medium',
  animationDuration = 2
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Start glitch effect after delay
    const startTimer = setTimeout(() => {
      setIsGlitching(true);
    }, delay);
    
    // Reset state for next animation
    let glitchInterval: NodeJS.Timeout;
    if (isGlitching) {
      glitchInterval = setInterval(() => {
        setIsGlitching(false);
        setTimeout(() => setIsGlitching(true), 200);
      }, 5000);
    }
    
    return () => {
      clearTimeout(startTimer);
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, [delay, isGlitching]);
  
  const getGlitchClass = () => {
    if (!isGlitching) return "";
    
    switch(glitchIntensity) {
      case 'low': return "animate-[glitch_0.2s_ease_1]";
      case 'high': return "animate-[glitch_0.1s_ease_infinite]";
      default: return "animate-glitch"; // medium
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay / 1000
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (delay / 1000) + (i * 0.05),
        duration: 0.3
      }
    })
  };
  
  return (
    <motion.div
      className={`relative ${className} ${getGlitchClass()}`}
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative inline-block">
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={char === " " ? "inline-block w-2" : "inline-block"}
          >
            {char}
          </motion.span>
        ))}
        {isGlitching && (
          <>
            <span className="absolute left-0 top-0 text-[#6366f1] opacity-70 translate-x-[2px] translate-y-[-2px] mix-blend-screen">
              {text}
            </span>
            <span className="absolute left-0 top-0 text-[#a855f7] opacity-70 translate-x-[-2px] translate-y-[2px] mix-blend-screen">
              {text}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default GlitchText;
