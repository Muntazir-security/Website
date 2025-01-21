import React, { useEffect } from "react";
import SocialLinks from "@/components/contact/SocialLinks";
import PageBackground from "@/components/shared/PageBackground";
import { HoverCard } from "@/components/shared/HoverCard";
import { MessageSquare, Mail, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const contactInfo = [
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "Let's Talk",
      description: "I'm always open to discussing new projects and opportunities."
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Get in Touch",
      description: "Feel free to reach out through any platform below."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Response Time",
      description: "I typically respond within 24 hours."
    }
  ];

  return (
    <PageBackground>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms for collaboration, questions, or just to say hello
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <HoverCard key={index} className="text-center p-8">
                <div 
                  className="flex flex-col items-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-3 rounded-full bg-purple-500/10 backdrop-blur-sm">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                  <p className="text-gray-400">{info.description}</p>
                </div>
              </HoverCard>
            ))}
          </div>

          {/* Social Links Section with enhanced spacing */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl" />
            <div className="relative">
              <SocialLinks />
            </div>
          </div>

          {/* Bottom Decorative Elements */}
          <div className="relative mt-16">
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;