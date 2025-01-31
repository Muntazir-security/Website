import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`/${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || activeSection === path;
  };

  const scrollToSection = (path: string) => {
    const sectionId = path.replace("/", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Muntazir
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/portfolio", label: "Portfolio" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <button
              key={path}
              onClick={() => scrollToSection(path)}
              className={`text-sm transition-all relative ${
                isActive(path)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainNav;