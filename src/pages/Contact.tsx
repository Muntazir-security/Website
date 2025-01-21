import React, { useEffect } from "react";
import PageBackground from "@/components/shared/PageBackground";
import SocialLinks from "@/components/contact/SocialLinks";
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
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-16">
          {/* Header Section */}
          <div data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate! Feel free to reach out through any of these platforms.
            </p>
          </div>

          {/* Social Links */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl" />
            <div className="relative">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;