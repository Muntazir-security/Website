import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  // Check if we're on the scrollable page
  const isScrollablePage = location.pathname === "/main" || 
                          location.pathname === "/home" || 
                          location.pathname === "/about" || 
                          location.pathname === "/portfolio" || 
                          location.pathname === "/contact";

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, redirecting to welcome screen');
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    if (!isScrollablePage) {
      navigate('/main');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Set up intersection observer for scrollable pages
  useEffect(() => {
    if (!isScrollablePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'about', 'portfolio', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isScrollablePage]);

  const getActiveClass = (path: string, sectionId: string) => {
    if (isScrollablePage) {
      return activeSection === sectionId 
        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]" 
        : "text-white/60 hover:text-white/90";
    } else {
      return location.pathname === path
        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
        : "text-white/60 hover:text-white/90";
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Muntazir
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {isScrollablePage ? (
            // Scrollable navigation
            <>
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm transition-all relative ${getActiveClass('/home', 'home')}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm transition-all relative ${getActiveClass('/about', 'about')}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm transition-all relative ${getActiveClass('/portfolio', 'portfolio')}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm transition-all relative ${getActiveClass('/contact', 'contact')}`}
              >
                Contact
              </button>
            </>
          ) : (
            // Traditional routing navigation
            <>
              <Link
                to="/home"
                className={`text-sm transition-all relative ${getActiveClass('/home', 'home')}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm transition-all relative ${getActiveClass('/about', 'about')}`}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className={`text-sm transition-all relative ${getActiveClass('/portfolio', 'portfolio')}`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`text-sm transition-all relative ${getActiveClass('/contact', 'contact')}`}
              >
                Contact
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MainNav;