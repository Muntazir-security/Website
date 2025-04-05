
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User, SkipForward } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface WelcomeScreenProps {
  onSkip?: () => void;
}

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
    }, 100); // Faster typing speed
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Enhanced gradient animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-blue-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
    {/* Animated particles */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-100" />
    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-200" />
  </div>
);

const IconButton = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative group cursor-pointer transform hover:scale-110 transition-all duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 group-hover:border-white/20">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-indigo-200 transition-colors" />
    </div>
  </div>
);

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSkip }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Initializing welcome screen animations');
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
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
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          {/* Skip button */}
          {onSkip && (
            <button 
              onClick={onSkip}
              className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-white/70 hover:text-white"
            >
              <span>Skip</span>
              <SkipForward className="w-4 h-4" />
            </button>
          )}
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Enhanced Icons Section */}
              <motion.div 
                className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-14"
                variants={childVariants}
              >
                {[Code2, User, Github].map((Icon, index) => (
                  <div key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Enhanced Welcome Text */}
              <motion.div 
                className="text-center mb-8 sm:mb-10 md:mb-14"
                variants={childVariants}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold space-y-3 sm:space-y-5">
                  <div className="mb-3 sm:mb-5">
                    <span data-aos="fade-right" data-aos-delay="200" className="inline-block px-2 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                      Welcome
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="400" className="inline-block px-2 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                      To
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="600" className="inline-block px-2 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                      My
                    </span>
                  </div>
                  <div>
                    <span data-aos="fade-up" data-aos-delay="800" className="inline-block px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Portfolio
                    </span>{' '}
                    <span data-aos="fade-up" data-aos-delay="1000" className="inline-block px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Website
                    </span>
                  </div>
                </h1>
              </motion.div>

              {/* Enhanced Website Link */}
              <motion.div 
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <a
                  href="https://muntazirmehdi.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative group hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-3 text-xl sm:text-2xl md:text-3xl">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-colors">
                      <TypewriterEffect text="muntazirmehdi.com" />
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
