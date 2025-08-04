import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the scrollable page
  const isScrollablePage = location.pathname === "/main" || 
                          location.pathname === "/home" || 
                          location.pathname === "/about" || 
                          location.pathname === "/portfolio" || 
                          location.pathname === "/contact";

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle direct navigation to specific sections
  useEffect(() => {
    if (isScrollablePage) {
      const pathToSection: { [key: string]: string } = {
        '/home': 'home',
        '/about': 'about', 
        '/portfolio': 'portfolio',
        '/contact': 'contact',
        '/main': 'home'
      };

      const targetSection = pathToSection[location.pathname];
      if (targetSection) {
        setActiveSection(targetSection);
        
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.pathname, isScrollablePage]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (!isScrollablePage) {
      navigate('/main');
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

    const sections = ['home', 'about', 'portfolio', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isScrollablePage]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Header with Logo on Left and Island Navigation on Right */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B0B1E]/95 backdrop-blur-2xl border-b border-white/10' 
            : 'bg-[#0B0B1E]/80 backdrop-blur-xl border-b border-white/5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
          {/* Logo on Left */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="p-1.5 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-full"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <Shield className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white font-semibold text-lg group-hover:text-[#6366f1] transition-colors duration-300">
              Muntazir
            </span>
          </Link>

          {/* Island Navigation on Right */}
          <div className="flex items-center gap-4">
            <motion.div
              className={`transition-all duration-500 ${
                isScrolled 
                  ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50' 
                  : 'bg-black/60 backdrop-blur-md border border-white/10 shadow-xl shadow-black/25'
              } rounded-full px-6 py-3`}
              animate={{ 
                scale: isScrolled ? 1.02 : 1,
                y: isScrolled ? -1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = isScrollablePage ? activeSection === item.id : location.pathname === item.path;
                  
                  return (
                    <div key={item.id} className="relative">
                      {isScrollablePage ? (
                        <motion.button
                          onClick={() => scrollToSection(item.id)}
                          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                            isActive
                              ? 'text-white bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.label}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full border border-[#6366f1]/30"
                              layoutId="activeNavItem"
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                          )}
                        </motion.button>
                      ) : (
                        <Link to={item.path}>
                          <motion.div
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                              isActive
                                ? 'text-white bg-white/10'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item.label}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full border border-[#6366f1]/30"
                                layoutId="activeNavItem"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              />
                            )}
                          </motion.div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[calc(100vw-2rem)] bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl z-50 md:hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = isScrollablePage ? activeSection === item.id : location.pathname === item.path;
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {isScrollablePage ? (
                          <motion.button
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-white border border-[#6366f1]/30'
                                : 'hover:bg-white/5 text-white/80 hover:text-white border border-transparent'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="font-medium">{item.label}</span>
                          </motion.button>
                        ) : (
                          <Link to={item.path}>
                            <motion.div
                              className={`w-full p-4 rounded-2xl transition-all duration-300 ${
                                isActive
                                  ? 'bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-white border border-[#6366f1]/30'
                                  : 'hover:bg-white/5 text-white/80 hover:text-white border border-transparent'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span className="font-medium">{item.label}</span>
                            </motion.div>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNav;