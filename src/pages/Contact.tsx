
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
      label: "muntazirmehdi@outlook.com",
      accent: "text-blue-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muntazir-security/",
      icon: Linkedin,
      label: "Professional networking",
      accent: "text-blue-500"
    },
    {
      name: "GitHub",
      href: "https://github.com/muntazir-security",
      icon: Github,
      label: "Open source contributions",
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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.name}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group-hover:transform group-hover:scale-[1.02] shadow-lg hover:shadow-xl h-full"
                >
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/[0.03] to-[#a855f7]/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="p-4 bg-white/[0.05] rounded-xl group-hover:bg-white/[0.08] transition-all duration-300 border border-white/[0.08] group-hover:border-white/[0.15]">
                          <method.icon className={`w-7 h-7 ${method.accent} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                        {method.name}
                      </h3>
                      <p className="text-gray-300 font-medium text-sm">
                        {method.label}
                      </p>
                    </div>

                    {/* Subtle CTA indicator */}
                    <div className="flex items-center justify-center mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center text-xs text-gray-500 gap-1">
                        <span>Connect</span>
                        <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="450">
          <div className="max-w-xl mx-auto">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.08] p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Available for freelance work</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently accepting new cybersecurity projects and collaborations. 
                I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
