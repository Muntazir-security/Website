
import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, ArrowRight, TerminalSquare, Check } from "lucide-react";
import SocialLinks from "@/components/contact/SocialLinks";
import { useToast } from "@/hooks/use-toast";
import PageBackground from "@/components/shared/PageBackground";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandLineEffect, setCommandLineEffect] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
  }, []);

  // Trigger command line effect when component mounts
  useEffect(() => {
    setCommandLineEffect(true);
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
          title: "Message transmitted successfully! 🔒",
          description: "Your message has been securely sent. Awaiting response.",
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
        title: "Transmission Error",
        description: "Connection interrupted. Please try alternative channels or retry.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageBackground className="py-20">
      {/* Digital Command Center Hero */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 relative" data-aos="fade-down">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center px-3 py-1 
                        bg-black/30 border border-cyber-teal/30 rounded-full text-xs text-cyber-teal mb-2">
            <div className="w-2 h-2 bg-cyber-teal rounded-full animate-pulse mr-2"></div>
            <span className="font-mono tracking-wide">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gradient-cyber mb-4">
            Secure Transmission
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2 font-light">
            <span className={`transition-opacity duration-1000 ${commandLineEffect ? 'opacity-100' : 'opacity-0'}`}>
              Establish a secure connection to discuss cyber defense strategies and operations.
            </span>
            <span className="w-2 h-5 bg-cyber-teal animate-blink"></span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Command Terminal - Contact Form */}
          <div className="lg:col-span-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="terminal-container relative">
              {/* Terminal header */}
              <div className="bg-black/70 backdrop-blur-lg border border-cyber-teal/30 rounded-t-lg p-3 flex items-center">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-xs text-gray-400">secure-message.sh</span>
                </div>
                <div>
                  <TerminalSquare className="w-4 h-4 text-cyber-teal/70" />
                </div>
              </div>
              
              {/* Terminal body */}
              <div className="relative bg-black/50 backdrop-blur-xl border border-cyber-teal/20 border-t-0 rounded-b-lg p-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid-cyber-teal/5"></div>
                
                {/* Terminal content */}
                <div className="relative">
                  <div className="mb-6">
                    <div className="font-mono text-xs text-cyber-teal mb-1">> Initializing secure message protocol...</div>
                    <div className="font-mono text-xs text-cyber-teal mb-3">> Ready to transmit. Enter credentials and message:</div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative group/input">
                      <div className="absolute left-0 top-4 h-5 pl-3 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-cyber-teal/70" />
                        <span className="ml-2 font-mono text-xs text-cyber-teal/80">user@</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Identity"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-24 bg-black/20 rounded-md border border-cyber-teal/30 
                                placeholder-gray-500 text-white font-mono text-sm
                                focus:outline-none focus:ring-1 focus:ring-cyber-teal focus:border-cyber-teal/50 
                                transition-all duration-300 hover:border-cyber-teal/50 disabled:opacity-50"
                        required
                      />
                    </div>

                    <div className="relative group/input">
                      <div className="absolute left-0 top-4 h-5 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-cyber-teal/70" />
                        <span className="ml-2 font-mono text-xs text-cyber-teal/80">email@</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Contact Node"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-24 bg-black/20 rounded-md border border-cyber-teal/30
                                placeholder-gray-500 text-white font-mono text-sm
                                focus:outline-none focus:ring-1 focus:ring-cyber-teal focus:border-cyber-teal/50
                                transition-all duration-300 hover:border-cyber-teal/50 disabled:opacity-50"
                        required
                      />
                    </div>

                    <div className="relative group/input">
                      <div className="absolute left-0 top-4 h-5 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-cyber-teal/70" />
                        <span className="ml-2 font-mono text-xs text-cyber-teal/80">msg@</span>
                      </div>
                      <textarea
                        name="message"
                        placeholder="Type your encrypted message here..."
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full resize-none p-4 pl-24 bg-black/20 rounded-md border border-cyber-teal/30
                                placeholder-gray-500 text-white font-mono text-sm
                                focus:outline-none focus:ring-1 focus:ring-cyber-teal focus:border-cyber-teal/50
                                transition-all duration-300 hover:border-cyber-teal/50 h-40 disabled:opacity-50"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden group/button"
                    >
                      <div className="absolute inset-0 bg-cyber-teal/20 rounded-md opacity-80 group-hover/button:opacity-100 transition-opacity duration-300" />
                      <div className="relative px-6 py-3 rounded-md flex items-center justify-center gap-2 
                                text-cyber-teal font-mono text-sm font-medium tracking-wide
                                transition-all duration-300 group-hover/button:gap-3 
                                border border-cyber-teal/50 group-hover/button:border-cyber-teal
                                disabled:opacity-50 disabled:cursor-not-allowed">
                        <span className="font-mono">{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </div>
                    </button>
                  </form>
                  
                  {/* Terminal decoration */}
                  <div className="mt-6 font-mono text-xs text-cyber-teal/70 flex items-center">
                    <span className="mr-2">></span>
                    <span className="animate-blink">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Status & Social Links */}
          <div 
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Connection Status */}
            <div className="mb-8">
              <div className="bg-black/50 backdrop-blur-xl border border-cyber-teal/20 rounded-lg p-5">
                <h3 className="font-display text-xl mb-3 text-gradient-cyber">Connection Status</h3>
                
                <div className="space-y-3">
                  {/* Online Status */}
                  <div className="flex items-center justify-between p-3 bg-black/30 border border-cyber-teal/10 rounded-md">
                    <span className="text-sm text-gray-300">Status</span>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-cyber-teal animate-pulse mr-2"></span>
                      <span className="text-xs text-cyber-teal font-mono">ONLINE</span>
                    </div>
                  </div>
                  
                  {/* Response Time */}
                  <div className="flex items-center justify-between p-3 bg-black/30 border border-cyber-teal/10 rounded-md">
                    <span className="text-sm text-gray-300">Avg. Response</span>
                    <span className="text-xs text-cyber-teal font-mono">~24 HOURS</span>
                  </div>
                  
                  {/* Encryption */}
                  <div className="flex items-center justify-between p-3 bg-black/30 border border-cyber-teal/10 rounded-md">
                    <span className="text-sm text-gray-300">Encryption</span>
                    <div className="flex items-center">
                      <Check className="w-3 h-3 text-cyber-teal mr-1" />
                      <span className="text-xs text-cyber-teal font-mono">ENABLED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links Section */}
            <div className="bg-black/50 backdrop-blur-xl border border-cyber-teal/20 rounded-lg p-5">
              <h3 className="font-display text-xl mb-4 text-gradient-cyber">Communication Channels</h3>
              <p className="text-sm text-gray-400 mb-4 font-light">
                Alternative secure channels available for direct communication.
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;
