import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  Code2, 
  Award, 
  Boxes,
  Shield,
  Building2,
  GraduationCap,
  Database,
  ShoppingCart,
  CheckSquare,
  Car,
  Home,
  ArrowRight
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "react-router-dom";
import { HoverCard } from "@/components/shared/HoverCard";
import PageBackground from "@/components/shared/PageBackground";

const techStack = [
  { name: "Vercel", icon: "/icons/vercel.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "Kubernetes", icon: "/kubernets.svg" },
  { name: "AWS", icon: "/aws.svg" },
  { name: "Azure", icon: "/azure.svg" },
  { name: "Burp Suite", icon: "/burpsuite.png" },
  { name: "Nessus", icon: "/nessus.svg" },
  { name: "John the Ripper", icon: "/johntheripper.png" },
  { name: "Zeek", icon: "/zeek.png" },
  { name: "Snort", icon: "/snort.svg" },
  { name: "Aircrack-ng", icon: "/aircrack-ng.jpg" },
  { name: "Yara", icon: "/yara.png" },
  { name: "WireGuard", icon: "/wireguard.svg" },
  { name: "Splunk", icon: "/splunk.svg" },
  { name: "Elastic", icon: "/elastic.svg" },
  { name: "The Hive", icon: "/thehive.png" },
  { name: "Wazuh", icon: "/wazuh.svg" },
  { name: "Red Hat", icon: "/redhat.svg" },
  { name: "Ubuntu", icon: "/ubuntu.svg" },
  { name: "Arch Linux", icon: "/archlinux.svg" }
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm 
                        hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg 
                        hover:shadow-indigo-500/20 group"
            >
              <div className="w-20 h-20 relative flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-full h-full object-contain transition-all duration-300
                    ${tech.icon.endsWith('.png') ? 'brightness-100 contrast-100 saturate-100' : 'filter-none'}`}
                />
              </div>
              <span className="mt-4 text-sm text-white/80 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageBackground>
  );
};

export default Portfolio;