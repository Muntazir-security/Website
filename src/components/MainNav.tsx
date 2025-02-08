
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <a 
          href="#index" 
          onClick={(e) => scrollToSection('index', e)}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Muntazir
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <a
            href="#home"
            onClick={(e) => scrollToSection('home', e)}
            className={`text-sm transition-all relative ${
              location.pathname === "/home" 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]" 
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection('about', e)}
            className={`text-sm transition-all relative ${
              location.pathname === "/about"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection('portfolio', e)}
            className={`text-sm transition-all relative ${
              location.pathname === "/portfolio"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection('contact', e)}
            className={`text-sm transition-all relative ${
              location.pathname === "/contact"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
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
