import React, { memo } from "react";

const AboutHeader = () => (
  <div className="space-y-4 text-center mb-12" data-aos="fade-up">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          About Me
        </span>
      </span>
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Dedicated cybersecurity professional with a passion for protecting digital assets and implementing robust security solutions.
    </p>
  </div>
);

export default memo(AboutHeader);