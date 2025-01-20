import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import HoverCard from "@/components/shared/HoverCard";

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
    <HoverCard className="flex flex-col items-center justify-center text-center space-y-8 p-12 bg-[#0B0B1E]/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300">
      <div className={cn(
        "p-8 rounded-full transition-all duration-300",
        "bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20"
      )}>
        {icon}
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="text-lg font-medium text-white/60">{label}</p>
      </div>
    </HoverCard>
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;