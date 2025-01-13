import React, { useEffect } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Get in Touch
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div data-aos="fade-right" data-aos-duration="1200">
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;