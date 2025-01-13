import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageSquare, Send, MapPin, Clock, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
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

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+62 895-3670-85406",
      delay: "100"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ekizulfarrachman@gmail.com",
      delay: "200"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bandung, Indonesia",
      delay: "300"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri, 9AM - 5PM",
      delay: "400"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in front-end development, creating responsive and user-friendly web applications using modern technologies like React, TypeScript, and Tailwind CSS."
    },
    {
      question: "How can we collaborate?",
      answer: "We can start by discussing your project requirements through email or a video call. I'm always open to new opportunities and challenges."
    },
    {
      question: "What is your typical response time?",
      answer: "I usually respond to messages within 24 hours during business days. For urgent matters, you can reach me through phone."
    }
  ];

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
        {/* Contact Form Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Send a Message
              </h3>
              <p className="text-gray-400">
                Fill out the form below and I'll get back to you soon.
              </p>
            </div>
            <MessageSquare className="w-8 h-8 text-[#6366f1] opacity-50" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                required
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                required
              />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full h-32 resize-none p-4 pl-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                data-aos="fade-up"
                data-aos-delay={info.delay}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-[#6366f1]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6366f1]/10 rounded-xl">
                    <info.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-[#6366f1]" />
              <h3 className="text-xl font-semibold text-white">Frequently Asked Questions</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-[#6366f1] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;