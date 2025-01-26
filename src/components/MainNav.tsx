import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface MainNavProps {
  onLogoClick: () => void;
}

const MainNav = ({ onLogoClick }: MainNavProps) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && 
              scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            console.log('Active section:', section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, showing welcome screen');
    onLogoClick();
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    console.log(`Scrolling to section: ${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
            className={`text-sm transition-all relative ${
              activeSection === 'home' 
                ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={`text-sm transition-all relative ${
              activeSection === 'about' 
                ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, 'portfolio')}
            className={`text-sm transition-all relative ${
              activeSection === 'portfolio' 
                ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`text-sm transition-all relative ${
              activeSection === 'contact' 
                ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;