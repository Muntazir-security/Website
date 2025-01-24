import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ArrowUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const MainNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
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
      
      // Show/hide back to top button
      setShowBackToTop(scrollPosition > 400);

      // Improved section detection with reduced threshold
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Adjusted offset
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
      offset={-80}
      duration={600}
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
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left animate-scale-in" />
      )}
    </ScrollLink>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer"
          >
            Muntazir
          </ScrollLink>

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

      {/* Back to Top Button */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={600}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer transition-all duration-300 hover:scale-110",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
        )}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </ScrollLink>
    </>
  );
};

export default MainNav;