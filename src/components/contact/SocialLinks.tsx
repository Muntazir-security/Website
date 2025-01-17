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
      <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
      <div className="relative bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-white/20 flex flex-col items-center justify-center text-center space-y-4">
        <div className={cn(
          "p-4 rounded-full transition-all duration-300",
          "bg-white/5 group-hover:bg-white/10"
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
      value: "ekizulfarachman",
      href: "https://github.com/ekizulfarachman",
      delay: "100"
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      label: "Email",
      value: "dev@ekizulfarachman.com",
      href: "mailto:dev@ekizulfarachman.com",
      delay: "200"
    },
    {
      icon: <Linkedin className="w-8 h-8 text-white" />,
      label: "LinkedIn",
      value: "ekizulfarachman",
      href: "https://linkedin.com/in/ekizulfarachman",
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