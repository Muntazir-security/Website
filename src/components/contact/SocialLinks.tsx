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
      "group relative block overflow-hidden rounded-2xl",
      "bg-black/20 backdrop-blur-sm border border-white/5",
      "transition-all duration-500 hover:scale-[1.02] hover:border-green-500/20"
    )}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative p-8">
      {/* Icon container */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-full",
          "bg-black/30 border border-white/5",
          "transition-all duration-500 group-hover:border-green-500/20",
          "group-hover:text-green-400"
        )}>
          {React.cloneElement(icon as React.ReactElement, {
            className: "w-8 h-8 transition-colors duration-500"
          })}
          <div className="absolute inset-0 rounded-full bg-green-500/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Text content */}
        <div className="space-y-1">
          <p className="text-lg font-medium text-green-400 transition-colors duration-500">
            {value}
          </p>
          <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
            {label}
          </p>
        </div>
      </div>
    </div>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: "muntazir-security",
      href: "https://linkedin.com/in/muntazir-security",
      delay: "100"
    },
    {
      icon: <Mail />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200"
    },
    {
      icon: <Github />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;