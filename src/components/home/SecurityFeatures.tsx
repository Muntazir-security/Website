import React from 'react';
import { Shield, Search, Lock, AlertTriangle } from 'lucide-react';

const SecurityFeatures = () => {
  const features = [
    { icon: Shield, text: 'SIEM' },
    { icon: Search, text: 'Threat Intel' },
    { icon: Lock, text: 'Network Security' },
    { icon: AlertTriangle, text: 'Incident Response' }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6" data-aos="fade-up" data-aos-delay="1200">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
          >
            <Icon size={18} />
            <span>{feature.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SecurityFeatures;