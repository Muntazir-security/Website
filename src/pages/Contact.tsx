
import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import SocialLinks from "@/components/contact/SocialLinks";
import { useToast } from "@/components/ui/use-toast";
import PageBackground from "@/components/shared/PageBackground";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/fe701d1f17341f778f44a54441a3c483", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 3000,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later or use an alternative contact method.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Have a question or want to work together? I'd love to hear from you.
            <ArrowRight className="w-4 h-4 text-[#6366f1] animate-pulse" />
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-2">
                        Get in Touch
                      </h2>
                      <p className="text-gray-400">
                        Fill out the form below and I'll get back to you soon.
                      </p>
                    </div>
                    <Share2 className="w-8 h-8 text-[#6366f1] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="mb-6">
                      <div className="font-mono text-xs text-cyber-teal mb-1">{`>`} Initializing secure message protocol...</div>
                      <div className="font-mono text-xs text-cyber-teal mb-3">{`>`} Ready to transmit. Enter credentials and message:</div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group/input">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within/input:text-[#6366f1] transition-colors" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] disabled:opacity-50"
                        required
                      />
                    </div>

                    <div className="relative group/input">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within/input:text-[#6366f1] transition-colors" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] disabled:opacity-50"
                        required
                      />
                    </div>

                    <div className="relative group/input">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within/input:text-[#6366f1] transition-colors" />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full resize-none p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] h-40 disabled:opacity-50"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden group/button"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl opacity-80 group-hover/button:opacity-100 transition-opacity duration-300" />
                      <div className="relative px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 group-hover/button:gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </div>
                    </button>
                    
                    {/* Terminal decoration */}
                    <div className="mt-6 font-mono text-xs text-cyber-teal/70 flex items-center">
                      <span className="mr-2">{`>`}</span>
                      <span className="animate-blink">_</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
              className="lg:sticky lg:top-24"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-6">
                    Connect With Me
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Feel free to reach out through any of these platforms. I'll get back to you as soon as possible.
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
