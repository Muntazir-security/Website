
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  icon: LucideIcon;
}

const CTAButton = ({ href, text, icon: Icon }: CTAButtonProps) => (
  <Link to={href}>
    <button className="group relative w-[160px] font-mono">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-500 animate-pulse-glow"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium tracking-wider z-10">
            {text}
          </span>
          <Icon className="w-4 h-4 text-gray-200 transform transition-all duration-300 group-hover:scale-110 z-10" />
        </span>
      </div>
    </button>
  </Link>
);

export default memo(CTAButton);
