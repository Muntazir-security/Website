import React, { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Code2, 
  Award, 
  Boxes, 
  ShieldCheck, 
  Bug as BugIcon, 
  Binary as BinaryIcon,
  ServerCrash,
  Database as DatabaseIcon 
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

  const projects = [
    {
      title: "Aritmatika Solver",
      description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal matematika.",
      image: "/lovable-uploads/4b3e3c6d-81ba-47ae-8d95-fcd3e85fde99.png",
      demoUrl: "#",
      detailsUrl: "#"
    },
    {
      title: "AutoChat-Discord",
      description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
      image: "/lovable-uploads/4b3e3c6d-81ba-47ae-8d95-fcd3e85fde99.png",
      demoUrl: "#",
      detailsUrl: "#"
    },
    {
      title: "Security Information and Event Management (SIEM)",
      description: "Implemented and managed Splunk SIEM solution for real-time security monitoring and threat detection.",
      icon: ShieldCheck,
      tools: ["Splunk", "ELK Stack", "Log Analysis"],
      category: "Blue Team Operations"
    },
    {
      title: "Incident Response Framework",
      description: "Developed comprehensive IR playbooks and automated response procedures for common security incidents.",
      icon: BugIcon,
      tools: ["TheHive", "MISP", "Automation"],
      category: "Security Operations"
    },
    {
      title: "Vulnerability Management System",
      description: "Created and maintained vulnerability scanning and patch management infrastructure.",
      icon: BinaryIcon,
      tools: ["Nessus", "Qualys", "Patch Management"],
      category: "Security Assessment"
    },
    {
      title: "Network Security Monitoring",
      description: "Deployed and configured IDS/IPS systems for network traffic analysis and threat detection.",
      icon: ServerCrash,
      tools: ["Suricata", "Zeek", "Wireshark"],
      category: "Network Security"
    },
    {
      title: "Security Automation Platform",
      description: "Built automated security response workflows using Python and security tools integration.",
      icon: DatabaseIcon,
      tools: ["Python", "APIs", "Automation"],
      category: "DevSecOps"
    }
  ];

  const certificates = [
    {
      title: "JavaScript Programming",
      issuer: "Dicoding",
      date: "December 2023",
      image: "/lovable-uploads/f24e585d-8b20-4f0a-bbd9-4c04698bb1d1.png",
      verifyUrl: "#"
    },
    {
      title: "Data Visualization",
      issuer: "Dicoding",
      date: "August 2023",
      image: "/lovable-uploads/f24e585d-8b20-4f0a-bbd9-4c04698bb1d1.png",
      verifyUrl: "#"
    },
  ];

  const techStack = [
    { name: "HTML", icon: "/html5.svg" },
    { name: "CSS", icon: "/css3.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "ReactJS", icon: "/react.svg" },
    { name: "Vite", icon: "/vite.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Bootstrap", icon: "/bootstrap.svg" },
    { name: "Firebase", icon: "/firebase.svg" },
    { name: "Material UI", icon: "/mui.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "SweetAlert2", icon: "/sweetalert2.svg" }
  ];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Portfolio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise
          </p>
        </div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 bg-black/20 backdrop-blur-xl border border-white/10 p-1 rounded-2xl">
            <TabsTrigger 
              value="projects"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger 
              value="certificates"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-2" />
              Certificates
            </TabsTrigger>
            <TabsTrigger 
              value="tech-stack"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Boxes className="w-4 h-4 mr-2" />
              Tech Stack
            </TabsTrigger>
          </TabsList>

          {/* Projects Content */}
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {project.image ? (
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : null}
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      {project.icon && <project.icon className="w-8 h-8 text-[#6366f1]" />}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                    {project.tools && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.demoUrl && (
                      <div className="flex justify-between items-center">
                        <Button variant="link" asChild className="text-[#6366f1] hover:text-[#a855f7] p-0">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-white/10 transition-colors duration-300"
                        >
                          Details
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certificates Content */}
          <TabsContent value="certificates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        asChild 
                        className="bg-white/10 hover:bg-white/20"
                      >
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tech Stack Content */}
          <TabsContent value="tech-stack">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-6 flex flex-col items-center gap-4 hover:border-white/20 hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-spin-slower" />
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full animate-float" />
    </div>
  );
};

export default Portfolio;
