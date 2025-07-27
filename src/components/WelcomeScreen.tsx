import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-[#6366f1]">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5" />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1]/3 via-transparent to-[#a855f7]/3 blur-3xl" />
    
    {/* Minimal geometric shapes for elegance */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-20"
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <motion.div 
      className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-[#a855f7] to-[#6366f1] rounded-full opacity-30"
      animate={{ 
        scale: [1, 2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    
    <motion.div 
      className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white rounded-full opacity-10"
      animate={{ 
        scale: [1, 1.8, 1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

const IconButton = ({ Icon }: { Icon: React.ElementType }) => (
  <motion.div 
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-all duration-300" />
    <div className="relative p-3 sm:p-4 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/80 group-hover:text-white transition-colors duration-300" />
    </div>
  </motion.div>
);

const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    console.log('Initializing welcome screen animations');
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    // Handle keyboard events
    const handleKeyPress = () => {
      setIsLoading(false);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearTimeout(skipTimer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0B0B1E] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          {/* Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={() => setIsLoading(false)}
                className="absolute top-8 right-8 z-10 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Press any key to continue →
              </motion.button>
            )}
          </AnimatePresence>
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Icons */}
              <motion.div 
                className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-16"
                variants={childVariants}
              >
                {[Star, Code2, User, Github].map((Icon, index) => (
                  <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Welcome Text */}
              <motion.div 
                className="text-center mb-8 sm:mb-10 md:mb-16"
                variants={childVariants}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold space-y-2 sm:space-y-4">
                  <div className="mb-3 sm:mb-6">
                    <span data-aos="fade-right" data-aos-delay="200" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Welcome
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="400" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      To
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="600" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      My
                    </span>
                  </div>
                  <div>
                    <span data-aos="fade-up" data-aos-delay="800" className="inline-block px-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                      Portfolio
                    </span>{' '}
                    <span data-aos="fade-up" data-aos-delay="1000" className="inline-block px-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                      Website
                    </span>
                  </div>
                </h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  Cybersecurity Engineer • Ethical Hacker • Security Analyst
                </motion.p>
              </motion.div>

              {/* Website Link */}
              <motion.div 
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <motion.a
                  href="https://muntazirmehdi.com"
                  className="inline-flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl relative group cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300" />
                  <div className="relative flex items-center gap-3 text-xl sm:text-2xl md:text-3xl">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#6366f1] group-hover:rotate-12 transition-transform duration-300" />
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-medium">
                      <TypewriterEffect text="muntazirmehdi.com" />
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;