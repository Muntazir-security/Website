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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 
            data-aos="fade-down"
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Let's Connect
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div 
            data-aos="fade-right"
            data-aos-delay="100"
            className="order-2 lg:order-1"
          >
            <ContactForm />
          </div>
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
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