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
    <PageBackground>
      <div className="max-w-4xl mx-auto relative">
        <div>
          <SocialLinks />
        </div>
      </div>
    </PageBackground>
  );
};

export default ContactPage;