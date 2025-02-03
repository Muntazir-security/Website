import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked, redirecting to welcome screen');
    navigate('/');
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
          <Link
            to="/home"
            className={`text-sm transition-all relative ${
              location.pathname === "/home" 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]" 
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm transition-all relative ${
              location.pathname === "/about"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`text-sm transition-all relative ${
              location.pathname === "/portfolio"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={`text-sm transition-all relative ${
              location.pathname === "/contact"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;