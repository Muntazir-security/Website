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
    className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 transition-all duration-500 hover:scale-[1.02]"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative z-10 flex items-center gap-6">
      {/* Icon container */}
      <div className={cn(
        "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl",
        "bg-gradient-to-br from-indigo-500 to-purple-500",
        "group-hover:from-indigo-400 group-hover:to-purple-400",
        "transition-all duration-500"
      )}>
        {icon}
      </div>

      {/* Text content */}
      <div className="space-y-1">
        <p className="text-lg font-medium text-white">
          {value}
        </p>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          {label}
        </p>
      </div>
    </div>

    {/* Background gradient effect */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
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
      {/* Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        {links.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;