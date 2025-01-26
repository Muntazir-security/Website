import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundEffect from './welcome/BackgroundEffect';
import WelcomeContent from './welcome/WelcomeContent';

interface WelcomeScreenProps {
  onLoadingComplete?: () => void;
}

const WelcomeScreen = ({ onLoadingComplete }: WelcomeScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('WelcomeScreen mounted');
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      console.log('5 second timer complete');
      setIsLoading(false);
      setTimeout(() => {
        console.log('Calling onLoadingComplete');
        onLoadingComplete?.();
      }, 1000);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <MotionConfig>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-[#030014]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit="exit"
            variants={containerVariants}
          >
            <BackgroundEffect />
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <WelcomeContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default WelcomeScreen;