
import React, { memo } from "react";

const MainTitle = () => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-cyber-teal to-secondary blur-2xl opacity-20"></span>
        <span className="relative text-gradient-title">
          Cybersecurity
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-cyber-teal to-secondary blur-2xl opacity-20"></span>
        <span className="relative text-gradient-cyber cyber-glow animate-glow">
          Engineer
        </span>
      </span>
    </h1>
  </div>
);

export default memo(MainTitle);
