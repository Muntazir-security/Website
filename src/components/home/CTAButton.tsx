import React from "react";
import { useNavigate } from "react-router-dom";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ href, children, variant = "primary" }: CTAButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event propagation
    console.log('CTA Button clicked, navigating to:', href);
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative ${
        variant === "primary"
          ? "w-full sm:w-[160px]"
          : "w-full sm:w-[160px]"
      }`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
          {children}
        </span>
      </div>
    </button>
  );
};

export default CTAButton;