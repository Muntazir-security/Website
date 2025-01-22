import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MessageSquare, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageBackground from "@/components/shared/PageBackground";
import HoverCard from "@/components/shared/HoverCard";
import SocialLinks from "@/components/contact/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    form.reset();
  };

  return (
    <PageBackground>
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4" data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Contact Form Section */}
          <HoverCard className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Your Name"
                            className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-gray-400"
                            {...field}
                          />
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Your Email"
                            className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-gray-400"
                            {...field}
                          />
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Your Message"
                            className="pl-10 min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-gray-400"
                            {...field}
                          />
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-opacity"
                  data-aos="fade-up"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </HoverCard>
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;