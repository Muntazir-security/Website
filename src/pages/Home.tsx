import React, { useState, useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import AnimatedLottie from "../components/home/AnimatedLottie";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener('resize', initAOS);
      setIsLoaded(false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B1E] overflow-hidden" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            <HeroSection />
            <AnimatedLottie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;