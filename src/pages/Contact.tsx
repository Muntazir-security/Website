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
    <PageBackground className="min-h-screen bg-[#0B0B1E]">
      <div className="relative">
        {/* Page title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Connect with me through any of these platforms
          </p>
        </div>

        <SocialLinks />
      </div>
    </PageBackground>
  );
};

export default ContactPage;