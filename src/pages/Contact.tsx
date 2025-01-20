import React, { useEffect } from "react";
import SocialLinks from "@/components/contact/SocialLinks";
import PageBackground from "@/components/shared/PageBackground";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <PageBackground className="min-h-screen bg-[#0B0B1E]">
      <div className="container mx-auto py-24">
        <SocialLinks />
      </div>
    </PageBackground>
  );
};

export default ContactPage;