import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageBackground from '@/components/shared/PageBackground';

const ScrollablePage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E] overflow-hidden">
      {/* Smooth scroll CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
          overflow: hidden;
        }
        body {
          overflow: hidden;
        }
        * {
          box-sizing: border-box;
        }
        .scrollable-container {
          max-width: 100vw;
          overflow-x: hidden;
          overflow-y: auto;
        }
      `}</style>
      
      <PageBackground>
        <div className="w-full max-w-none scrollable-container">
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