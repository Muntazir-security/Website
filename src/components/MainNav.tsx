import React, { useState } from "react";
import { Link } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";

const MainNav = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, showing welcome screen');
    setShowWelcome(true);
    
    setTimeout(() => {
      console.log('5 seconds elapsed, hiding welcome screen');
      setShowWelcome(false);
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }, 5000);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    console.log(`Scrolling to section: ${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {showWelcome && <WelcomeScreen />}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E] border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            onClick={handleLogoClick}
          >
            Muntazir
          </Link>

          <nav className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-sm transition-all relative text-white/60 hover:text-white/90"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm transition-all relative text-white/60 hover:text-white/90"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="text-sm transition-all relative text-white/60 hover:text-white/90"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm transition-all relative text-white/60 hover:text-white/90"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainNav;