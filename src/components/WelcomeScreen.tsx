import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
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
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
    </div>
  </div>
);

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
    <MotionConfig>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-[#030014] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit="exit"
            variants={containerVariants}
          >
            <BackgroundEffect />
            
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <div className="w-full max-w-4xl mx-auto">
                <motion.div 
                  className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8"
                  variants={childVariants}
                >
                  {[Code2, User, Github].map((Icon, index) => (
                    <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                      <IconButton Icon={Icon} />
                    </div>
                  ))}
                </motion.div>

                <motion.div 
                  className="text-center mb-6 sm:mb-8"
                  variants={childVariants}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold space-y-2 sm:space-y-4">
                    <div className="mb-2 sm:mb-4 px-2">
                      <span data-aos="fade-right" data-aos-delay="200" className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        Welcome
                      </span>{' '}
                      <span data-aos="fade-right" data-aos-delay="400" className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        To
                      </span>{' '}
                      <span data-aos="fade-right" data-aos-delay="600" className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        My
                      </span>
                    </div>
                    <div>
                      <span data-aos="fade-up" data-aos-delay="800" className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Portfolio
                      </span>{' '}
                      <span data-aos="fade-up" data-aos-delay="1000" className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Website
                      </span>
                    </div>
                  </h1>
                </motion.div>

                <motion.div 
                  className="text-center"
                  variants={childVariants}
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <a
                    href="https://muntazirmehdi.com"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-200" />
                    <div className="relative flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
    </MotionConfig>
  );
};

export default WelcomeScreen;