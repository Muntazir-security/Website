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
      "group relative block overflow-hidden rounded-xl",
      "bg-black/20 backdrop-blur-sm border border-white/10",
      "transition-all duration-500 hover:border-white/20 hover:bg-white/10"
    )}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative p-8 flex flex-col items-center justify-center text-center gap-3">
      {/* Icon */}
      <div className="text-[#6366f1] w-12 h-12">
        {icon}
      </div>

      {/* Text content */}
      <div className="space-y-1">
        <p className="text-xl font-medium text-white group-hover:text-[#6366f1] transition-colors">
          {value}
        </p>
        <p className="text-sm text-gray-400">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;