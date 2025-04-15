
import React, { memo } from "react";

const MainTitle = () => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-mono font-bold tracking-tighter">
      <div className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 animate-pulse-glow"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent bg-[size:200%] animate-text-shimmer">
          Cybersecurity
        </span>
      </div>
      <br />
      <div className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 animate-pulse-glow"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-light">
          Engineer
        </span>
      </div>
    </h1>
    <p className="font-mono text-sm sm:text-base text-gray-400 tracking-wide">
      Defending digital frontiers with expertise and innovation
    </p>
  </div>
);

export default memo(MainTitle);
