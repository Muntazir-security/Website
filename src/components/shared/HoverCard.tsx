import React from 'react';
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverCard = ({ children, className }: HoverCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 via-[#9b87f5]/10 to-[#a855f7]/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
      <div className={cn(
        "relative bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10",
        "transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10",
        className
      )}>
        {children}
      </div>
    </div>
  );
};

export default HoverCard;