import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 via-[#9b87f5]/10 to-[#a855f7]/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
      <div className="relative bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 flex flex-col items-center justify-center text-center space-y-4">
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
      </div>
    </div>
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