import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import MainTitle from "@/components/home/MainTitle";
import StatusBadge from "@/components/home/StatusBadge";
import TechStack from "@/components/home/TechStack";
import CTAButton from "@/components/home/CTAButton";
import PageBackground from "@/components/shared/PageBackground";

const Home = () => {
  console.log('Home component rendered');
  
  return (
    <PageBackground>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col gap-8">
          <StatusBadge />
          <MainTitle />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <CTAButton 
              href="/portfolio?tab=projects"
              text="View My Projects"
              icon={ArrowRight}
            />
            <CTAButton 
              href="/contact"
              text="Contact"
              icon={Mail}
            />
          </div>
          
          <TechStack />
        </div>
      </div>
    </PageBackground>
  );
};

export default Home;