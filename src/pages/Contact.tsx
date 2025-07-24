
import React, { useEffect } from "react";
import { Mail, Github, Linkedin, Sparkles, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const contactMethods = [
    {
      name: "Email",
      href: "mailto:muntazirmehdi@outlook.com",
      icon: Mail,
      accent: "text-blue-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muntazir-security/",
      icon: Linkedin,
      accent: "text-blue-500"
    },
    {
      name: "GitHub",
      href: "https://github.com/muntazir-security",
      icon: Github,
      accent: "text-gray-300"
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto py-12 min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next project? Choose your preferred way to connect.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.name}
                className="group flex justify-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.08] p-6 sm:p-7 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group-hover:transform group-hover:scale-[1.03] shadow-lg hover:shadow-xl h-full w-full max-w-sm min-h-[170px] flex flex-col items-center justify-center"
                >
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/[0.03] to-[#a855f7]/[0.03] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="p-2 bg-white/[0.05] rounded-lg group-hover:bg-white/[0.08] transition-all duration-300 border border-white/[0.08] group-hover:border-white/[0.15]">
                          <method.icon className={`w-6 h-6 ${method.accent} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center justify-center text-center h-full">
                      <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                        {method.name}
                      </h3>
                    </div>

                    {/* Subtle CTA indicator removed for minimalism */}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        {/* (Footer note section removed for minimalism) */}
      </div>
    </section>
  );
};

export default ContactPage;
