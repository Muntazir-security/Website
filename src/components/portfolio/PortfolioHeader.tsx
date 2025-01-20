import React, { memo } from "react";

const PortfolioHeader = () => (
  <div className="space-y-4 text-center mb-12" data-aos="fade-up">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          My Projects
        </span>
      </span>
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto">
      A showcase of my cybersecurity projects, tools, and contributions to the security community.
    </p>
  </div>
);

export default memo(PortfolioHeader);