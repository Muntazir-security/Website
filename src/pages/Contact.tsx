import React, { useState } from "react";
import PageBackground from "@/components/shared/PageBackground";
import { Linkedin, Github, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to your email (replace with your backend or email service)
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }
  };

  return (
    <PageBackground>
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-16">
          {/* Header Section */}
          <div data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Contact Me
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Got a question? Send me a message, and I’ll get back to you soon.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-[#a855f7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-[#a855f7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-[#a855f7]"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-green-400">
                Thank you! Your message has been sent.
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl" />
            <div className="relative">
              <div className="flex justify-center gap-8">
                <a
                  href="https://linkedin.com/in/muntazir-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#6366f1] transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/muntazir-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#a855f7] transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                  GitHub
                </a>
                <a
                  href="mailto:info@muntazirmehdi.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#6366f1] transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;