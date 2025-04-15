
import React, { memo } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="relative space-y-2 mb-8">
    <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 blur-2xl"></div>
    <h2 className="relative font-mono text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="relative font-mono text-sm text-gray-400 tracking-wide">
        {subtitle}
      </p>
    )}
  </div>
);

export default memo(SectionHeader);
