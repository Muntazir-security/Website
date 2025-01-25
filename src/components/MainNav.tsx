import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ArrowUp, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const MainNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();

    Events.scrollEvent.register('begin', () => {
      console.log("Scroll begin");
    });

    Events.scrollEvent.register('end', (to) => {
      console.log("Scroll end:", to);
      setActiveSection(to);
    });

    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY;
      
      setShowBackToTop(scrollPosition > 400);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { href: "home", label: "Home", ariaLabel: "Navigate to Home section" },
    { href: "about", label: "About", ariaLabel: "Navigate to About section" },
    { href: "portfolio", label: "Portfolio", ariaLabel: "Navigate to Portfolio section" },
    { href: "contact", label: "Contact", ariaLabel: "Navigate to Contact section" },
  ];

  const handleLinkClick = () => {
    // Add smooth transition before closing
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Increased timeout for smoother transition
  };

  const NavLink = ({ href, label, ariaLabel, className }: { href: string; label: string; ariaLabel: string; className?: string }) => (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={-70} // Adjusted offset for better highlighting
      duration={800}
      className={cn(
        "relative px-3 py-1.5 text-sm font-medium transition-all duration-300",
        "hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500",
        "focus:ring-offset-2 cursor-pointer",
        activeSection === href ? "text-white" : "text-gray-400",
        className
      )}
      activeClass="active"
      onClick={handleLinkClick}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
    >
      {label}
      {activeSection === href && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left animate-scale-in" />
      )}
    </ScrollLink>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10" role="banner">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Back to top"
            role="button"
            tabIndex={0}
          >
            Muntazir
          </ScrollLink>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {isMobile ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  className="w-64 bg-black/90 backdrop-blur-xl border-white/10"
                  aria-label="Mobile navigation menu"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <NavLink key={item.href} {...item} className="text-lg" />
                    ))}
                    <div className="flex flex-col gap-4 mt-4">
                      <Button className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-opacity">
                        Download CV
                      </Button>
                      <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                        Contact Me
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      <ScrollLink
        to="home"
        smooth={true}
        duration={800}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-3 rounded-full",
          "bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
          "cursor-pointer transition-all duration-300",
          "hover:scale-110 focus:outline-none focus:ring-2",
          "focus:ring-purple-500 focus:ring-offset-2",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
        )}
        aria-label="Scroll to top"
        role="button"
        tabIndex={0}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </ScrollLink>
    </>
  );
};

export default MainNav;
