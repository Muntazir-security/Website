
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, redirecting to welcome screen');
    navigate('/');
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`text-sm font-mono font-medium transition-all relative group ${
        location.pathname === to 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
          : "text-white/70 hover:text-white"
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
        location.pathname === to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}></span>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0B1E]/90 backdrop-blur-md shadow-md" : "bg-[#0B0B1E]"
      } border-b border-white/10`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform hover:scale-105 duration-300"
        >
          Muntazir
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center text-white/70 hover:text-white focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-[#0B0B1E]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default MainNav;
