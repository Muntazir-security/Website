import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageBackground from '@/components/shared/PageBackground';

const ScrollablePage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E] overflow-x-hidden">
      {/* Smooth scroll CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
      
      <PageBackground>
        <div className="w-full overflow-x-hidden">
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