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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h1 
            data-aos="fade-down"
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Let's Create
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-muted-foreground">
              Something Amazing Together
            </span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl mx-auto text-muted-foreground/80"
          >
            Have a project in mind? Let's bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl" />
            <ContactForm />
          </div>
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