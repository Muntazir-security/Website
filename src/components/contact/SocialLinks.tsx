
import React from "react";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay?: string;
  hasStatus?: boolean;
  status?: "online" | "away" | "offline";
}

const SocialLink = ({ icon, label, value, href, delay, hasStatus = false, status = "offline" }: SocialLinkProps) => {
  const getStatusColor = () => {
    switch(status) {
      case "online": return "bg-cyber-teal";
      case "away": return "bg-cyber-orange";
      case "offline": 
      default: return "bg-gray-400";
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-3 p-4",
        "bg-black/30 border border-cyber-teal/20 rounded-md",
        "transition-all duration-500",
        "hover:border-cyber-teal/50 hover:bg-cyber-teal/5",
        "hover:translate-x-1"
      )}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Icon container */}
      <div className="relative">
        <div className="w-10 h-10 rounded-md bg-cyber-teal/10 flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-300">
          <div className="w-5 h-5 text-cyber-teal group-hover:text-cyber-teal transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        {/* Status indicator */}
        {hasStatus && (
          <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${getStatusColor()} 
                        ring-1 ring-black`}></div>
        )}
      </div>

      {/* Text content */}
      <div className="flex-1">
        <p className="text-sm font-medium text-white group-hover:text-cyber-teal transition-colors duration-300 truncate">
          {value}
        </p>
        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </p>
      </div>
      
      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyber-teal opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </a>
  );
};

const SocialLinks = () => {
  const links = [
    {
      icon: <Linkedin className="w-full h-full" />,
      label: "LinkedIn",
      value: "muntazir-security",
      href: "https://linkedin.com/in/muntazir-security",
      delay: "100",
      hasStatus: true,
      status: "online"
    },
    {
      icon: <Mail className="w-full h-full" />,
      label: "Email",
      value: "info@muntazirmehdi.com",
      href: "mailto:info@muntazirmehdi.com",
      delay: "200",
      hasStatus: true,
      status: "online"
    },
    {
      icon: <Github className="w-full h-full" />,
      label: "Github",
      value: "muntazir-security",
      href: "https://github.com/muntazir-security",
      delay: "300",
      hasStatus: true,
      status: "away"
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;
