import React from 'react';
import { Code2, User, Github, Globe } from 'lucide-react';
import IconButton from './IconButton';
import TypewriterEffect from './TypewriterEffect';
import { motion } from 'framer-motion';

const WelcomeContent = () => {
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
    <div className="w-full max-w-4xl mx-auto">
      <motion.div 
        className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
        variants={childVariants}
      >
        {[Code2, User, Github].map((Icon, index) => (
          <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
            <IconButton Icon={Icon} />
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mb-6 sm:mb-8 md:mb-12"
        variants={childVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
          <div className="mb-2 sm:mb-4">
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
          <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <TypewriterEffect text="muntazirmehdi.com" />
            </span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default WelcomeContent;