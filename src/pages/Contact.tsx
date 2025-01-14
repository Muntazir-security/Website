import React, { useEffect } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
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

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 
            data-aos="fade-down"
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Let's Connect
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100/80 to-gray-100/40">
              and Secure Your Digital Future
            </span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl mx-auto text-gray-400/80"
          >
            Ready to enhance your cybersecurity posture? Let's discuss how we can protect your digital assets together.
          </p>
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

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-spin-slower" />
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full animate-float" />
    </div>
  );
};

export default ContactPage;