import React, { memo } from "react";

interface SkillCardProps {
  category: string;
  skills: string[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => (
  <div className="relative group" data-aos="fade-up">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
    <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default memo(SkillCard);