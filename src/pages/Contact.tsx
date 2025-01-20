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
      <div className="relative max-w-6xl mx-auto">
        {/* Page title with gradient text */}
        <div 
          className="text-center mb-12" 
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] bg-clip-text text-transparent pb-2">
            Let's Connect
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms for collaboration, questions, or just to say hello
          </p>
        </div>

        {/* Social links with reduced vertical padding */}
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
    </PageBackground>
  );
};

export default ContactPage;