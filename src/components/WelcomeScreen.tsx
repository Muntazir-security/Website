
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, Shield, Lock, Key } from 'lucide-react';

import ParticleBackground from './welcome/ParticleBackground';
import GlitchText from './welcome/GlitchText';
import TypewriterText from './welcome/TypewriterText';
import ParallaxContainer from './welcome/ParallaxContainer';
import DataStream from './welcome/DataStream';
import SecurityRadar from './welcome/SecurityRadar';

const IconButton = ({ Icon, delay }: { Icon: React.ElementType, delay: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      type: "spring", 
      stiffness: 260, 
      damping: 20,
      delay: delay
    }}
    className="relative group hover:scale-110 transition-transform duration-300"
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </motion.div>
);

const WelcomeScreen = () => {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isSystemReady, setIsSystemReady] = useState(false);

  useEffect(() => {
    // Simulate system boot sequence
    const bootSequence = async () => {
      // Step 1: Initialize
      await new Promise(r => setTimeout(r, 1000));
      setLoadingStep(1);
      
      // Step 2: Security check
      await new Promise(r => setTimeout(r, 1500));
      setLoadingStep(2);
      
      // Step 3: System ready
      await new Promise(r => setTimeout(r, 1200));
      setIsSystemReady(true);
    };
    
    bootSequence();
  }, []);

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

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#030014] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit="exit"
        variants={containerVariants}
      >
        {/* 3D Particle Background */}
        <ParticleBackground />
        
        {/* Digital Data Stream */}
        <DataStream density={15} speed="medium" />
        
        <div className="relative min-h-screen flex items-center justify-center px-4 z-10">
          <div className="w-full max-w-4xl mx-auto">
            {/* Security Scan Visualization (conditionally rendered) */}
            {loadingStep > 0 && loadingStep < 2 && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-64 h-64">
                  <SecurityRadar />
                </div>
              </motion.div>
            )}
            
            {/* Boot Sequence Messages */}
            {loadingStep < 3 && (
              <div className="absolute top-1/4 left-0 right-0 text-center">
                {loadingStep === 0 && (
                  <TypewriterText 
                    text="Initializing secure environment..." 
                    className="text-green-400 text-sm"
                    onComplete={() => {}}
                  />
                )}
                {loadingStep === 1 && (
                  <TypewriterText 
                    text="Performing security scan..."
                    className="text-yellow-400 text-sm"
                    onComplete={() => {}}
                  />
                )}
                {loadingStep === 2 && (
                  <TypewriterText 
                    text="Security protocols activated. Establishing connection..."
                    className="text-blue-400 text-sm"
                    onComplete={() => {}}
                  />
                )}
              </div>
            )}
            
            {/* Main Content (shown after loading sequence) */}
            {isSystemReady && (
              <>
                {/* Icons with Parallax */}
                <ParallaxContainer depth={0.3} className="mb-6 sm:mb-8 md:mb-12">
                  <motion.div 
                    className="flex justify-center gap-3 sm:gap-4 md:gap-8"
                    variants={childVariants}
                  >
                    <IconButton Icon={Code2} delay={0.2} />
                    <IconButton Icon={Shield} delay={0.4} />
                    <IconButton Icon={Lock} delay={0.6} />
                    <IconButton Icon={Key} delay={0.8} />
                    <IconButton Icon={Github} delay={1.0} />
                  </motion.div>
                </ParallaxContainer>

                {/* Welcome Text with Glitch Effect */}
                <ParallaxContainer depth={0.2} className="text-center mb-6 sm:mb-8 md:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
                    <div className="mb-2 sm:mb-4">
                      <GlitchText 
                        text="Welcome" 
                        delay={1100}
                        className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        glitchIntensity="low"
                      />
                      {' '}
                      <GlitchText 
                        text="To" 
                        delay={1400}
                        className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        glitchIntensity="low"
                      />
                      {' '}
                      <GlitchText 
                        text="My" 
                        delay={1700}
                        className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        glitchIntensity="low"
                      />
                    </div>
                    <div>
                      <GlitchText 
                        text="Portfolio" 
                        delay={2000}
                        className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                        glitchIntensity="medium"
                      />
                      {' '}
                      <GlitchText 
                        text="Website" 
                        delay={2300}
                        className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                        glitchIntensity="medium"
                      />
                    </div>
                  </h1>
                </ParallaxContainer>

                {/* Website Link with Terminal Effect */}
                <ParallaxContainer depth={0.1} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 0.5 }}
                  >
                    <a
                      href="https://muntazirmehdi.com"
                      className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-200" />
                      <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          <TypewriterText 
                            text="muntazirmehdi.com" 
                            delay={2800} 
                            typingSpeed={100}
                          />
                        </span>
                      </div>
                    </a>
                  </motion.div>
                </ParallaxContainer>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeScreen;
