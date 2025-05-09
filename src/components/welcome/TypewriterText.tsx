
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  typingSpeed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  typingSpeed = 40,
  className = "",
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    // Start delay
    const delayTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!isTyping) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, typingSpeed);
    
    return () => clearInterval(timer);
  }, [text, typingSpeed, isTyping, onComplete]);

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      <span className="font-mono">{displayText}</span>
      <span className="inline-block w-2 h-4 ml-1 bg-current animate-cursor-blink"></span>
    </motion.div>
  );
};

export default TypewriterText;
