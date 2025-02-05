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
      "group flex items-center gap-2 p-2",
      "bg-gradient-to-br from-white/[0.075] to-white/[0.035]",
      "backdrop-blur-xl border border-white/10 rounded-lg",
      "transition-all duration-500",
      "hover:border-white/20 hover:from-white/[0.1] hover:to-white/[0.05]",
      "hover:shadow-xl hover:shadow-indigo-500/10",
      "hover:-translate-y-1"
    )}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Icon container */}
    <div className="relative">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <div className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
          {icon}
        </div>
      </div>
    </div>

    {/* Text content */}
    <div>
      <p className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors duration-300 truncate">
        {value}
      </p>
      <p className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </p>
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
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;