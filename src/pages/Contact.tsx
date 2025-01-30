import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "@/components/contact/SocialLinks";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AOS from "aos";
import "aos/dist/aos.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submission started", data);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://formsubmit.co/fe701d1f17341f778f44a54441a3c483";

      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      const templateInput = document.createElement("input");
      templateInput.type = "hidden";
      templateInput.name = "_template";
      templateInput.value = "table";
      form.appendChild(templateInput);

      const captchaInput = document.createElement("input");
      captchaInput.type = "hidden";
      captchaInput.name = "_captcha";
      captchaInput.value = "false";
      form.appendChild(captchaInput);

      document.body.appendChild(form);
      await form.submit();
      
      console.log("Form submitted successfully");
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 3000,
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0524] via-[#130F24] to-[#0A1929] pb-20">
      <div className="container mx-auto px-4 pt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="relative inline-block"
            data-aos="fade-down"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Get in Touch
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-xl opacity-20 -z-10" />
          </div>
          <p 
            className="text-gray-400 max-w-2xl mx-auto mt-4"
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
            {/* Animated background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Form Container */}
            <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Send a Message
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Fill out the form below and I'll get back to you soon.
                  </p>
                </div>
                <Share2 className="w-8 h-8 text-[#6366f1] opacity-50 animate-pulse-slow" />
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <div className="relative">
                          <User className="absolute left-4 top-3 w-5 h-5 text-gray-400 peer-focus:text-[#6366f1] transition-colors" />
                          <FormControl>
                            <Input
                              {...field}
                              className="pl-12 bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-[#6366f1]/30 hover:border-[#6366f1]/30"
                              placeholder="Your Name"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3 w-5 h-5 text-gray-400 peer-focus:text-[#6366f1] transition-colors" />
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="pl-12 bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-[#6366f1]/30 hover:border-[#6366f1]/30"
                              placeholder="Your Email"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-3 w-5 h-5 text-gray-400 peer-focus:text-[#6366f1] transition-colors" />
                          <FormControl>
                            <Textarea
                              {...field}
                              className="pl-12 bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-[#6366f1]/30 hover:border-[#6366f1]/30 min-h-[120px]"
                              placeholder="Your Message"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">
                          <Send className="w-5 h-5" />
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;