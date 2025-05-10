
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  depth = 0.2,
  className = ""
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  // For scroll parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100 * depth]);
  
  // For mouse parallax - use motion values for x, rotateX and rotateY
  const x = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate rotation based on mouse position
      const rotX = ((e.clientY / windowSize.height) - 0.5) * depth * 10 * -1;
      const rotY = ((e.clientX / windowSize.width) - 0.5) * depth * 10;
      
      rotateX.set(rotX);
      rotateY.set(rotY);
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [depth, windowSize.height, windowSize.width, rotateX, rotateY]);
  
  return (
    <motion.div
      className={className}
      style={{ 
        y,
        x,
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      transition={{ 
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
