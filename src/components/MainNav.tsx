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
      {/* Premium Navigation Bar */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-[#0B0B1E]/98 backdrop-blur-3xl shadow-2xl shadow-black/20 border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Redesigned */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-3 group relative z-50"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative w-11 h-11 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6366f1]/30 group-hover:shadow-[#6366f1]/50 transition-all duration-500">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
                  Muntazir Mehdi
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                  Security Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Premium Design */}
            <nav className="hidden lg:flex items-center">
              <div className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-all duration-700 ${
                isScrolled 
                  ? 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/20' 
                  : 'bg-black/40 backdrop-blur-xl border border-white/10'
              }`}>
                {navItems.map((item) => {
                  const isActive = isScrollablePage ? activeSection === item.id : location.pathname === item.path;
                  
                  return (
                    <div key={item.id} className="relative">
                      {isScrollablePage ? (
                        <motion.button
                          onClick={() => scrollToSection(item.id)}
                          className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 overflow-hidden ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-400 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {/* Active background */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-xl shadow-lg shadow-[#6366f1]/40"
                              layoutId="activeTab"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Hover effect */}
                          {!isActive && (
                            <motion.div
                              className="absolute inset-0 bg-white/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                            />
                          )}
                          
                          <span className="relative z-10">{item.label}</span>
                        </motion.button>
                      ) : (
                        <Link to={item.path}>
                          <motion.div
                            className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 overflow-hidden ${
                              isActive
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-xl shadow-lg shadow-[#6366f1]/40"
                                layoutId="activeTab"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            
                            {!isActive && (
                              <motion.div
                                className="absolute inset-0 bg-white/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                              />
                            )}
                            
                            <span className="relative z-10">{item.label}</span>
                          </motion.div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Premium Design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-24 right-6 w-72 bg-[#0B0B1E]/98 backdrop-blur-3xl border border-white/10 rounded-3xl z-50 lg:hidden shadow-2xl shadow-black/50 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -10, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10, x: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 pointer-events-none" />
              
              <div className="relative p-4">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = isScrollablePage ? activeSection === item.id : location.pathname === item.path;
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        {isScrollablePage ? (
                          <motion.button
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-[#6366f1]/30'
                                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                            }`}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.button>
                        ) : (
                          <Link to={item.path} className="block">
                            <motion.div
                              className={`w-full px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                                isActive
                                  ? 'bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-[#6366f1]/30'
                                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                              }`}
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {item.label}
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
