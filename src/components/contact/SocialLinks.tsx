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
    className={cn(
      "group relative block overflow-hidden rounded-2xl",
      "bg-gradient-to-br from-slate-900 to-slate-800",
      "transition-all duration-500 hover:scale-[1.02]"
    )}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Glass overlay */}
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative z-10 p-8">
      <div className="flex items-center gap-6">
        {/* Icon container with gradient background */}
        <div className={cn(
          "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl",
          "bg-gradient-to-br from-[#6366f1] to-[#a855f7]",
          "transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/25"
        )}>
          {icon}
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Text content with hover animations */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-white group-hover:text-purple-200 transition-colors">
            {value}
          </p>
          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            {label}
          </p>
        </div>
      </div>

      {/* Interactive element indicator */}
      <div className="absolute bottom-4 right-4 text-slate-600 group-hover:text-purple-400 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </div>

    {/* Background gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Twitter className="w-8 h-8 text-white" />,
      label: "Twitter",
      value: "@muntazir-security",
      href: "https://twitter.com/muntazir-security",
      delay: "100"
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200"
    },
    {
      icon: <Github className="w-8 h-8 text-white" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="relative px-4 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        {links.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;