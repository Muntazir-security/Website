import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield, Menu, X, ChevronRight, Sparkles } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
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
        // Set the active section immediately
        setActiveSection(targetSection);
        
        // Scroll to the section after a brief delay to ensure the page is loaded
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
    console.log('Logo clicked, redirecting to welcome screen');
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
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
    const isActive = isScrollablePage ? activeSection === sectionId : location.pathname === path;
    
    return isActive
      ? "text-white font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#c084fc] after:animate-pulse shadow-sm"
      : "text-white/70 hover:text-white relative group transition-all duration-300 hover:scale-105";
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  // Mobile menu animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B0B1E]/95 backdrop-blur-2xl border-b border-white/30 shadow-2xl shadow-[#6366f1]/10' 
            : 'bg-[#0B0B1E]/85 backdrop-blur-xl border-b border-white/15'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-3 group"
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur-md opacity-20 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative p-2 bg-gradient-to-br from-[#0B0B1E] to-[#1a1a2e] rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg">
                  <Shield className="w-6 h-6 text-[#6366f1] group-hover:text-[#a855f7] transition-colors duration-300" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-[#60a5fa] to-[#c084fc] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] group-hover:from-[#a855f7] group-hover:to-[#6366f1] transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Muntazir
                </motion.span>
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300 -mt-0.5 font-medium">
                  Security Engineer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                {isScrollablePage ? (
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 mx-1 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-lg"
                        layoutId="activeTab"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform -translate-x-1/2"
                      whileHover={{ width: "80%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ) : (
                  <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ y: 0, scale: 0.98 }}>
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 mx-1 text-sm font-medium rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-white bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 shadow-lg'
                          : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-lg"
                          layoutId="activeTab"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform -translate-x-1/2"
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2.5 text-white/70 hover:text-white transition-colors duration-300 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur-sm opacity-20 hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-2"
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-2"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Enhanced Mobile Menu */}
            <motion.div
              className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-gradient-to-b from-[#0B0B1E]/98 to-[#1a1a2e]/98 backdrop-blur-2xl border-l border-white/20 z-50 md:hidden shadow-2xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 pointer-events-none" />
              
              <div className="relative p-6 h-full flex flex-col">
                {/* Enhanced Mobile Menu Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-[#6366f1]" />
                    <h3 className="text-xl font-semibold text-white">Navigation</h3>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full" />
                </div>

                {/* Enhanced Mobile Menu Items */}
                <nav className="space-y-3 flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      custom={index}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      className="group"
                    >
                      {isScrollablePage ? (
                        <motion.button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                            activeSection === item.id
                              ? 'bg-gradient-to-r from-[#6366f1]/25 to-[#a855f7]/25 border-[#6366f1]/40 shadow-lg shadow-[#6366f1]/20'
                              : 'hover:bg-white/8 border-white/10 hover:border-white/20 backdrop-blur-sm'
                          }`}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className={`font-semibold text-base ${
                            activeSection === item.id
                              ? 'text-white'
                              : 'text-white/80 group-hover:text-white'
                          }`}>
                            {item.label}
                          </span>
                          <motion.div
                            animate={{ x: activeSection === item.id ? 3 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${
                              activeSection === item.id
                                ? 'text-[#6366f1]'
                                : 'text-white/40 group-hover:text-white/60'
                            }`} />
                          </motion.div>
                        </motion.button>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            to={item.path}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                              location.pathname === item.path
                                ? 'bg-gradient-to-r from-[#6366f1]/25 to-[#a855f7]/25 border-[#6366f1]/40 shadow-lg shadow-[#6366f1]/20'
                                : 'hover:bg-white/8 border-white/10 hover:border-white/20 backdrop-blur-sm'
                            }`}
                          >
                            <span className={`font-semibold text-base ${
                              location.pathname === item.path
                                ? 'text-white'
                                : 'text-white/80 group-hover:text-white'
                            }`}>
                              {item.label}
                            </span>
                            <motion.div
                              animate={{ x: location.pathname === item.path ? 3 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${
                                location.pathname === item.path
                                  ? 'text-[#6366f1]'
                                  : 'text-white/40 group-hover:text-white/60'
                              }`} />
                            </motion.div>
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Enhanced Mobile Menu Footer */}
                <motion.div 
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#6366f1]/15 to-[#a855f7]/15 border border-white/20 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg blur opacity-40" />
                        <div className="relative p-2 bg-[#0B0B1E] rounded-lg border border-white/20">
                          <Shield className="w-5 h-5 text-[#6366f1]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Muntazir Mehdi</p>
                        <p className="text-sm text-white/70">Cybersecurity Engineer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNav;