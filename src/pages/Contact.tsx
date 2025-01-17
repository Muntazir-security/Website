import React, { useEffect } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
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
    <div className="min-h-screen bg-[#0B0B1E] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>

      <div className="max-w-7xl mx-auto relative space-y-20">
        {/* Social Links Section */}
        <div className="mb-20">
          <SocialLinks />
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="order-2 lg:order-1"
          >
            <ContactForm />
          </div>

          {/* Contact Info Section */}
          <div 
            data-aos="fade-left"
            data-aos-delay="300"
            className="order-1 lg:order-2"
          >
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;