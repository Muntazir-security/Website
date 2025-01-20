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
    className="block"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <div className={cn(
        "w-32 h-32 rounded-full flex items-center justify-center",
        "bg-[#1A1F2C] transition-all duration-300"
      )}>
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-xl font-semibold text-white">{value}</p>
        <p className="text-base text-white/60">{label}</p>
      </div>
    </div>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Twitter className="w-16 h-16 text-white" />,
      label: "Twitter",
      value: "@muntazir-security",
      href: "https://twitter.com/muntazir-security",
      delay: "100"
    },
    {
      icon: <Mail className="w-16 h-16 text-white" />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200"
    },
    {
      icon: <Github className="w-16 h-16 text-white" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 py-16 max-w-6xl mx-auto">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;