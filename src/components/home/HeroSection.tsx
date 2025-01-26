import React from 'react';
import StatusBadge from './StatusBadge';
import MainTitle from './MainTitle';
import TypewriterEffect from './TypewriterEffect';
import SocialLinks from './SocialLinks';
import CTAButtons from './CTAButtons';
import SecurityFeatures from './SecurityFeatures';

const HeroSection = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
      data-aos="fade-right"
      data-aos-delay="200">
      <div className="space-y-4 sm:space-y-6">
        <StatusBadge />
        <MainTitle />

        {/* Typing Effect */}
        <TypewriterEffect words={["Ethical Hacker", "Network Defender", "Security Analysis"]} />

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light text-justify"
          data-aos="fade-up"
          data-aos-delay="1000">
          Hi, I'm a Cybersecurity Engineer with hands-on experience in SOC analysis, vulnerability assessment, and penetration testing. I specialize in identifying vulnerabilities and crafting robust defense strategies to protect digital environments from emerging threats.
        </p>

        <SecurityFeatures />
        
        <CTAButtons />

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroSection;