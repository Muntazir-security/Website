import React from "react";
import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Muntazir
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm transition-colors hover:text-white/90 ${
              location.pathname === "/" ? "text-white" : "text-white/60"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm transition-colors hover:text-white/90 ${
              location.pathname === "/about" ? "text-white" : "text-white/60"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm transition-colors hover:text-white/90 ${
              location.pathname === "/contact" ? "text-white" : "text-white/60"
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