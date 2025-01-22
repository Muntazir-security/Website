import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
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
      "group relative block overflow-hidden",
      "bg-gradient-to-br from-white/[0.075] to-white/[0.035]",
      "backdrop-blur-xl border border-white/10 rounded-2xl",
      "transition-all duration-500",
      "hover:border-white/20 hover:from-white/[0.1] hover:to-white/[0.05]",
      "hover:shadow-xl hover:shadow-indigo-500/10",
      "hover:-translate-y-1"
    )}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative p-8 flex flex-col items-center justify-center text-center gap-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing orb effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Icon with gradient */}
      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <div className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="relative space-y-1">
        <p className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors duration-300">
          {value}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </p>
      </div>
    </div>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Linkedin className="w-full h-full" />,
      label: "LinkedIn",
      value: "muntazir-security",
      href: "https://linkedin.com/in/muntazir-security",
      delay: "100"
    },
    {
      icon: <Mail className="w-full h-full" />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200"
    },
    {
      icon: <Github className="w-full h-full" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;