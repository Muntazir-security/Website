import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B1E] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-400 mb-8">
          Discover my projects, skills, and experiences in the world of technology.
        </p>
        <Button 
          onClick={() => navigate('/about')} 
          className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white"
        >
          Learn More <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
