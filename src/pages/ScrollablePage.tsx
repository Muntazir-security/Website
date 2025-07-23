import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageBackground from '@/components/shared/PageBackground';

const ScrollablePage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {/* Smooth scroll CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
        /* Hide horizontal scrollbars but keep vertical scrolling */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
      `}</style>
      
      <PageBackground>
        <div className="w-full max-w-none">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </PageBackground>
    </div>
  );
};

export default ScrollablePage; 