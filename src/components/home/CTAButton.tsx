
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

const CTAButton = ({
  href,
  text,
  icon: Icon,
  variant = "primary",
  size = "md",
  external = false,
}: CTAButtonProps) => {
  // Dynamic classes based on variant and size
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-white/5 backdrop-blur-xl hover:bg-white/10";
      case "outline":
        return "bg-transparent border border-white/20 hover:border-white/40 backdrop-blur-xl";
      case "primary":
      default:
        return "bg-[#030014] backdrop-blur-xl border border-white/10";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-9 text-xs";
      case "lg":
        return "h-12 text-base";
      case "md":
      default:
        return "h-11 text-sm";
    }
  };

  const ButtonContent = () => (
    <button className={`group relative w-auto font-mono ${size === "sm" ? "px-3" : "px-4"}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-500 animate-pulse-glow"></div>
      <div className={`relative ${getSizeClasses()} ${getVariantClasses()} rounded-lg leading-none overflow-hidden px-4`}>
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium tracking-wider z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 transform transition-all duration-300 group-hover:scale-110 z-10`} />
        </span>
      </div>
    </button>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <Link to={href}>
      <ButtonContent />
    </Link>
  );
};

export default memo(CTAButton);
