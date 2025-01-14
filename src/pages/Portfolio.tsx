import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Lock, Bug, Binary, Server, Database } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const projects = [
    {
      title: "Security Information and Event Management (SIEM)",
      description: "Implemented and managed Splunk SIEM solution for real-time security monitoring and threat detection.",
      icon: Shield,
      tools: ["Splunk", "ELK Stack", "Log Analysis"],
      category: "Blue Team Operations"
    },
    {
      title: "Incident Response Framework",
      description: "Developed comprehensive IR playbooks and automated response procedures for common security incidents.",
      icon: Lock,
      tools: ["TheHive", "MISP", "Automation"],
      category: "Security Operations"
    },
    {
      title: "Vulnerability Management System",
      description: "Created and maintained vulnerability scanning and patch management infrastructure.",
      icon: Bug,
      tools: ["Nessus", "Qualys", "Patch Management"],
      category: "Security Assessment"
    },
    {
      title: "Network Security Monitoring",
      description: "Deployed and configured IDS/IPS systems for network traffic analysis and threat detection.",
      icon: Binary,
      tools: ["Suricata", "Zeek", "Wireshark"],
      category: "Network Security"
    },
    {
      title: "Security Automation Platform",
      description: "Built automated security response workflows using Python and security tools integration.",
      icon: Server,
      tools: ["Python", "APIs", "Automation"],
      category: "DevSecOps"
    },
    {
      title: "Threat Intelligence Platform",
      description: "Implemented threat intel collection and analysis platform for proactive defense.",
      icon: Database,
      tools: ["MISP", "OpenCTI", "Threat Intel"],
      category: "Threat Intelligence"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B1E] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Security Portfolio
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100/80 to-gray-100/40">
              Defending Digital Assets Through Innovation
            </span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group"
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <project.icon className="w-8 h-8 text-[#6366f1] group-hover:text-[#a855f7] transition-colors duration-300" />
                    <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#6366f1] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-spin-slower" />
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full animate-float" />
    </div>
  );
};

export default Portfolio;