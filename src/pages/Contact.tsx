import React from "react";
import { Share2 } from "lucide-react";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0524] via-[#130F24] to-[#0A1929] pb-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4"
            data-aos="fade-down"
          >
            Let's Connect
          </h1>
          <p 
            className="text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative group"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1]/20 via-[#9b87f5]/10 to-[#a855f7]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70" />
            
            {/* Main card content */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <Share2 className="w-8 h-8 text-[#6366f1] opacity-50 animate-pulse-slow" />
              </div>

              <ContactForm />

              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Or connect with me on
                </h3>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;