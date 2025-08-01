import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  icon: LucideIcon;
}

const CTAButton = ({ href, text, icon: Icon }: CTAButtonProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Routes that contain all sections in ScrollablePage
    const scrollablePageRoutes = ['/main', '/home', '/about', '/portfolio', '/contact'];
    
    // If we're on a scrollable page and href contains a hash, scroll to section
    if (scrollablePageRoutes.includes(location.pathname) && href.includes('#')) {
      const sectionId = href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.includes('#')) {
      // If href contains hash but we're not on a scrollable page, navigate to main page first
      navigate('/main');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const sectionId = href.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to the page
      navigate(href);
    }
  };

  return (
    <button onClick={handleClick} className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === "Contact Me" ? "group-hover:translate-x-1" : "group-hover:rotate-45"} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  );
};

export default memo(CTAButton);