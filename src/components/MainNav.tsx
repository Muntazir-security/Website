import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    console.log('Logo clicked, navigating to welcome screen');
    navigate('/');
  };

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "portfolio", label: "Portfolio" },
    { href: "contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
      className={cn(
        "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-white cursor-pointer",
        activeSection === href ? "text-white" : "text-gray-400",
        className
      )}
      activeClass="active"
      onClick={() => setIsOpen(false)}
    >
      {label}
      {activeSection === href && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left" />
      )}
    </ScrollLink>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div
          onClick={handleLogoClick}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer"
        >
          Muntazir
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-64 bg-black/90 backdrop-blur-xl border-white/10">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} className="text-lg" />
                ))}
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
      </nav>
    </header>
  );
};

export default MainNav;