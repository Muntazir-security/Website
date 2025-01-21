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
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Updated heading alignment to match Portfolio page */}
          <div 
            className="text-center mb-16" 
            data-aos="fade-down"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms for collaboration, questions, or just to say hello
            </p>
          </div>

          {/* Social links */}
          <div className="py-4">
            <SocialLinks />
          </div>

          {/* Bottom decorative element */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;