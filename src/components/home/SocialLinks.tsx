import React from 'react';
import { Shield, Linkedin, Github } from 'lucide-react';

const SocialLink = ({ icon: Icon, link }: { icon: React.ElementType; link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
);

const SocialLinks = () => {
  const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/muntazir-security" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/muntazir-security/" },
    { icon: Shield, link: "https://tryhackme.com/r/p/Muntazir" }
  ];

  return (
    <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
      {SOCIAL_LINKS.map((social, index) => (
        <SocialLink key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialLinks;