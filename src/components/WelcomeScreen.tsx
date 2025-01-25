import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onLoadingComplete: () => void;
}

const WelcomeScreen = ({ onLoadingComplete }: WelcomeScreenProps) => {
  useEffect(() => {
    console.log('WelcomeScreen: Starting 5 second timer');
    const timer = setTimeout(() => {
      console.log('WelcomeScreen: Timer complete, triggering onLoadingComplete');
      onLoadingComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-[#0B0B1E] z-50"
    >
      <div className="text-center space-y-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-16 h-16 border-4 border-t-[#6366f1] border-r-[#a855f7] border-b-[#6366f1] border-l-[#a855f7] rounded-full animate-spin mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;