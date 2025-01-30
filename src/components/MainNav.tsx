import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface MainNavProps {
  onLogoClick: () => void;
}

const MainNav = ({ onLogoClick }: MainNavProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            onClick={handleLogoClick}
          >
            Muntazir
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`text-sm transition-all relative ${
                  activeSection === id 
                    ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-[#0B0B1E]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 opacity-100 visible' : 'top-14 opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`text-sm py-2 transition-all relative ${
                  activeSection === id 
                    ? 'text-white after:absolute after:bottom-[-2px] after:left-0 after:w-16 after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]' 
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MainNav;