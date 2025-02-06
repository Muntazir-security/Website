
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, redirecting to welcome screen');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Muntazir
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-white/90 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/home"
              className={`text-sm transition-all relative ${
                location.pathname === "/home" 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]" 
                  : "text-white hover:text-white/90"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-all relative ${
                location.pathname === "/about"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white hover:text-white/90"
              }`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm transition-all relative ${
                location.pathname === "/portfolio"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white hover:text-white/90"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`text-sm transition-all relative ${
                location.pathname === "/contact"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white hover:text-white/90"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-[#0B0B1E]/95 backdrop-blur-sm border-b border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link
                to="/home"
                onClick={closeMenu}
                className={`text-sm transition-colors ${
                  location.pathname === "/home" 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
                    : "text-white hover:text-white/90"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`text-sm transition-colors ${
                  location.pathname === "/about"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    : "text-white hover:text-white/90"
                }`}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMenu}
                className={`text-sm transition-colors ${
                  location.pathname === "/portfolio"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    : "text-white hover:text-white/90"
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`text-sm transition-colors ${
                  location.pathname === "/contact"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    : "text-white hover:text-white/90"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
