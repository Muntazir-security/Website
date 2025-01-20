import React, { useEffect } from "react";
import SocialLinks from "@/components/contact/SocialLinks";
import PageBackground from "@/components/shared/PageBackground";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <PageBackground>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-4">
        {/* Page title with gradient text */}
        <div 
          className="text-center mb-16" 
          data-aos="fade-down"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400">
            Feel free to reach out through any of these platforms
          </p>
        </div>

        {/* Social links */}
        <div className="w-full">
          <SocialLinks />
        </div>

        {/* Animated stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-500/20 rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;