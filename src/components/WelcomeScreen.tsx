import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyPress = () => setIsLoading(false);
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0B0B1E] z-50 flex flex-col items-center justify-center text-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)", transition: { duration: 0.6, ease: "easeOut" } }}
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.1),_transparent_50%)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
                Muntazir Mehdi
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                Cybersecurity Specialist
              </p>
            </motion.div>
          </div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={() => setIsLoading(false)}
            className="absolute bottom-8 text-gray-500 hover:text-white transition-colors duration-300 text-sm"
          >
            Press any key to enter
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;