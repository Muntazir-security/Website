import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
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
    <HoverCard className="flex flex-col items-center justify-center text-center space-y-4">
      <div className={cn(
        "p-4 rounded-full transition-all duration-300",
        "bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20"
      )}>
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium text-white/60 mb-1">{label}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </HoverCard>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Github className="w-8 h-8 text-white" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
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
      icon: <Linkedin className="w-8 h-8 text-white" />,
      label: "LinkedIn",
      value: "Muntazir-security",
      href: "https://linkedin.com/in/Muntazir-security",
      delay: "300"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;