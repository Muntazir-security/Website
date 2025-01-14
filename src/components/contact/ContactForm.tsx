import React, { useState } from "react";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      Swal.fire({
        title: "Message Sent!",
        text: "We'll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 via-[#9b87f5]/10 to-[#a855f7]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-300 group-hover:border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white/5 rounded-xl border border-white/10 p-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white/5 rounded-xl border border-white/10 p-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full h-32 bg-white/5 rounded-xl border border-white/10 p-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-300 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl p-4 font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 hover:brightness-110"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;