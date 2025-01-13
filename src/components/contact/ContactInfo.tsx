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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contactInfo.map((info) => (
        <div
          key={info.title}
          data-aos="fade-up"
          data-aos-delay={info.delay}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-[#6366f1]/30 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#6366f1]/10 rounded-xl group-hover:bg-[#6366f1]/20 transition-colors">
              <info.icon className="w-6 h-6 text-[#6366f1]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {info.title}
              </h4>
              <p className="text-gray-400">{info.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;