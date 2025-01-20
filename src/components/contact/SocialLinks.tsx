import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay?: string;
}

const SocialLink = ({ icon, label, value, href, delay }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex flex-col items-center justify-center text-center space-y-6">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow" />
        
        {/* Icon container */}
        <div className={cn(
          "relative w-36 h-36 rounded-full flex items-center justify-center",
          "bg-[#1A1F2C]/80 backdrop-blur-sm border border-white/5",
          "group-hover:border-white/20 group-hover:scale-105",
          "transition-all duration-500"
        )}>
          <div className="transform group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
      </div>

      {/* Text content with animated underline */}
      <div className="space-y-2">
        <p className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {value}
        </p>
        <p className="text-base text-white/60 relative overflow-hidden group-hover:text-white/80 transition-colors duration-300">
          {label}
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </p>
      </div>
    </div>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Twitter className="w-16 h-16 text-white/90" />,
      label: "Twitter",
      value: "@muntazir-security",
      href: "https://twitter.com/muntazir-security",
      delay: "100"
    },
    {
      icon: <Mail className="w-16 h-16 text-white/90" />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200"
    },
    {
      icon: <Github className="w-16 h-16 text-white/90" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6366f1]/5 rounded-full blur-3xl animate-spin-slower" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 px-4 py-24 max-w-7xl mx-auto">
        {links.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;