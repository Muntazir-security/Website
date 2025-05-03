
import React, { memo } from "react";
import { Sparkle } from "lucide-react";

const StatusBadge = () => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-teal to-secondary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full glassmorphism">
        <span className="text-gradient-cyber sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkle className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-cyber-teal" />
          Securing digital worlds, one vulnerability at a time
        </span>
      </div>
    </div>
  </div>
);

export default memo(StatusBadge);
