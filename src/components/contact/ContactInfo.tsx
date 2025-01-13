import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactInfoItem {
  icon: typeof Phone | typeof Mail | typeof MapPin | typeof Clock;
  title: string;
  content: string;
  delay: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "Phone",
    content: "+62 895-3670-85406",
    delay: "100",
  },
  {
    icon: Mail,
    title: "Email",
    content: "ekizulfarrachman@gmail.com",
    delay: "200",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Bandung, Indonesia",
    delay: "300",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Fri, 9AM - 5PM",
    delay: "400",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <div
          key={info.title}
          data-aos="fade-up"
          data-aos-delay={info.delay}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="relative bg-background/40 backdrop-blur-xl p-6 rounded-2xl border border-primary/10 transition-all duration-300 group-hover:border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-muted-foreground">{info.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;