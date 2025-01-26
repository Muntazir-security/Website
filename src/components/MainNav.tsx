import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, showing welcome screen');
    setShowWelcome(true);
    
    setTimeout(() => {
      console.log('5 seconds elapsed, hiding welcome screen');
      setShowWelcome(false);
      navigate('/home');
    }, 5000);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/home') {
      navigate('/home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
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
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm transition-all relative ${
                location.pathname === "/home" 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]" 
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm transition-all relative ${
                location.pathname === "/about"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm transition-all relative ${
                location.pathname === "/portfolio"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm transition-all relative ${
                location.pathname === "/contact"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainNav;