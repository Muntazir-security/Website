import React, { memo } from "react";
import { Shield } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => (
  <div className="relative group" data-aos="fade-up">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
    <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-[#6366f1]/10 rounded-lg">
          <Shield className="w-6 h-6 text-[#6366f1]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
      <p className="text-sm text-[#6366f1] mb-3">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default memo(ExperienceCard);