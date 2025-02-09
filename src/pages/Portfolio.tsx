import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  ArrowRight,
  X,
  FileText,
  AlertCircle,
  Lightbulb,
  ArrowLeft,
  Circle
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "react-router-dom";
import { HoverCard } from "@/components/shared/HoverCard";
import PageBackground from "@/components/shared/PageBackground";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const projects = [
  {
    title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
    description: "Designed and implemented an advanced anomaly detection system to protect Software-Defined Networks (SDN) from DDoS attacks. The system uses a statistical approach for real-time analysis of network traffic, ensuring robust security against SYN flooding attacks.",
    icon: Shield,
    tech: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"],
    category: "Security",
    features: [
      "Real-time analysis of network traffic",
      "Detection and prevention of TCP SYN flooding",
      "Enhancement of critical infrastructure protection",
      "Statistical anomaly detection"
    ],
    overview: "An advanced anomaly detection system designed to protect Software-Defined Networks from TCP SYN flooding-based DDoS attacks using statistical approaches.",
    problem: "TCP SYN flooding-based DDoS attacks can overwhelm SDN controllers, leading to network downtime and security breaches. This project aimed to mitigate such attacks using statistical anomaly detection.",
    solution: "Developed a statistical approach to detect anomalies in network traffic in real-time. The system identifies and mitigates TCP SYN flooding attacks, ensuring the stability and security of SDN environments."
  },
  {
    title: "SABB Bank Management System",
    description: "Developed a Python-based banking system with multi-level authentication and secure transaction handling. The system ensures robust security and prevents fraudulent activities.",
    icon: Building2,
    tech: ["Python", "CLI", "File I/O", "User Authentication"],
    category: "Banking",
    features: [
      "Multi-level user authentication for enhanced security.",
      "Secure handling of transactions to prevent fraud."
    ],
    overview: "A Python-based banking system with multi-level authentication, offering secure transaction handling and comprehensive account management features.",
    problem: "The banking system needed to ensure secure transactions and protect user data from unauthorized access.",
    solution: "Implemented multi-level authentication and secure transaction handling to enhance security."
  },
  {
    title: "University Information Management System",
    description: "Created a recommendation engine for the Malaysian Ministry of Higher Education to evaluate university rankings. The system features user-specific interfaces and data analysis tools.",
    icon: GraduationCap,
    tech: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"],
    category: "Education",
    features: [
      "University ranking system",
      "User-specific interfaces",
      "Data analysis tools"
    ],
    overview: "A recommendation engine for the Malaysian Ministry of Higher Education to help evaluate global higher education options using QS university rating data.",
    problem: "Students needed a reliable way to evaluate universities based on various criteria.",
    solution: "Developed a recommendation engine that analyzes university data and provides tailored suggestions."
  },
  {
    title: "APU e-Bookstore Database Management System",
    description: "A robust database system for APU's e-Bookstore, streamlining book management and order processing with normalized database design.",
    icon: Database,
    tech: ["Database Design", "SQL", "ERD Modeling", "Normalization"],
    category: "Database",
    features: [
      "ERD modeling",
      "Database normalization",
      "Order processing"
    ],
    overview: "A database management system for APU's e-Bookstore, enhancing book management and order processing.",
    problem: "The e-Bookstore required an efficient way to manage books and orders.",
    solution: "Implemented a normalized database design to streamline operations."
  },
  {
    title: "Minimart Management System",
    description: "An Assembly Language application providing essential tools for minimart operations, including inventory management and sales analysis.",
    icon: ShoppingCart,
    tech: ["Assembly Language", "Low-level Programming", "Inventory Management"],
    category: "Retail",
    features: [
      "Inventory management",
      "Sales analysis"
    ],
    overview: "An Assembly Language application providing essential tools for minimart operations.",
    problem: "Minimarts needed a simple yet effective way to manage inventory and sales.",
    solution: "Developed an application that streamlines inventory management and sales tracking."
  },
  {
    title: "Personal Task Management System",
    description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks with priority-based scheduling.",
    icon: CheckSquare,
    tech: ["C", "CLI", "File I/O", "Task Management"],
    category: "Productivity",
    features: [
      "Task organization",
      "Priority scheduling"
    ],
    overview: "A CLI-based task management solution that helps users organize and track tasks effectively.",
    problem: "Users needed a way to manage tasks efficiently in a command-line environment.",
    solution: "Created a CLI application that allows users to organize tasks with priority scheduling."
  },
  {
    title: "Car Rental System",
    description: "A Java-based rental management system showcasing OOP principles with features for vehicle booking, customer management, and reporting.",
    icon: Car,
    tech: ["Java", "OOP", "Database Management", "User Authentication"],
    category: "Transportation",
    features: [
      "Vehicle booking",
      "Customer management"
    ],
    overview: "A Java-based rental management system that simplifies vehicle booking and customer management.",
    problem: "Car rental companies needed an efficient way to manage bookings and customers.",
    solution: "Developed a system that streamlines vehicle booking and customer management processes."
  },
  {
    title: "House Rent Prediction Analysis",
    description: "A data analysis project using R Studio to explore and visualize housing market trends with comprehensive statistical modeling.",
    icon: Home,
    tech: ["R", "Data Analysis", "Data Visualization", "Statistical Modeling"],
    category: "Analytics",
    features: [
      "Data preprocessing",
      "Statistical modeling"
    ],
    overview: "A data analysis project that explores housing market trends using statistical modeling.",
    problem: "Homebuyers needed insights into housing market trends to make informed decisions.",
    solution: "Conducted data analysis and visualization to provide insights into market trends."
  }
];

const certificates = [
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat Training and Certification",
    date: "September 2024",
    image: "/lovable-uploads/9c4d0b95-2f93-432a-9552-83b4e6a5259f.png",
    verifyUrl: "#"
  },
  {
    title: "SOC Analyst Learning Path",
    issuer: "LetsDefend",
    date: "June 2024",
    image: "/lovable-uploads/3a492309-ce9b-4907-a297-365e63e22d28.png",
    verifyUrl: "#"
  },
  {
    title: "Junior Penetration Tester (eJPT)",
    issuer: "INE Security",
    date: "May 2024",
    image: "/lovable-uploads/c266ac8b-521b-45aa-9cbb-f7390130b152.png",
    verifyUrl: "#"
  },
  {
    title: "INE Certified Cloud Associate (ICCA)",
    issuer: "INE",
    date: "May 2024",
    image: "/lovable-uploads/99780b88-80d2-439b-9191-8a8efd5b5ecb.png",
    verifyUrl: "#"
  },
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "March 2024",
    image: "/lovable-uploads/4392609e-6645-4ac6-86f7-2f403b085442.png",
    verifyUrl: "https://coursera.org/verify/professional-cert/B2AKYMEB5GTU"
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "January 2023",
    image: "/lovable-uploads/ce04fea6-5d73-4b47-b5f1-e6d5fa3519f5.png",
    verifyUrl: "#"
  }
];

const techStack = [
  { name: "AWS", icon: "/aws.svg" },
  { name: "Azure", icon: "/azure.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "Kubernetes", icon: "/kubernets.svg" },
  { name: "Yara", icon: "/yara.png" },
  { name: "Nessus", icon: "/nessus-professional.svg" },
  { name: "TheHive", icon: "/thehive.png" },
  { name: "John the Ripper", icon: "/johntheripper.png" },
  { name: "Burp Suite", icon: "/burpsuite.png" },
  { name: "Snort", icon: "/snort.png" },
  { name: "Splunk", icon: "/splunk.svg" },
  { name: "Elastic", icon: "/elastic.svg" },
  { name: "WireGuard", icon: "/wireguard.png" },
  { name: "Red Hat", icon: "/redhat.svg" },
  { name: "Ubuntu", icon: "/ubuntu.svg" },
  { name: "Arch Linux", icon: "/archlinux.svg" },
];

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const activeTab = searchParams.get('tab') || 'projects';

  const navigateCertificate = (direction: 'prev' | 'next') => {
    if (!selectedCertificate) return;
    
    const currentIndex = certificates.findIndex(cert => cert.image === selectedCertificate);
    const newIndex = direction === 'prev'
      ? (currentIndex > 0 ? currentIndex - 1 : certificates.length - 1)
      : (currentIndex < certificates.length - 1 ? currentIndex + 1 : 0);
    
    setSelectedCertificate(certificates[newIndex].image);
  };

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 pt-20" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Portfolio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise
          </p>
        </div>

        <Tabs defaultValue={activeTab} className="space-y-8">
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
                  className="group bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10 h-full flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-[#6366f1] shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5">
                      <Button 
                        variant="ghost" 
                        className="w-full text-[#6366f1] hover:text-[#a855f7] hover:bg-white/5 group"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                        View Project Details
                      </Button>
                    </div>
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
                  className="group bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden 
                    hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/30 
                        text-[#6366f1] text-xs font-medium backdrop-blur-xl">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        className="w-full text-[#6366f1] hover:text-[#a855f7] hover:bg-white/5"
                        onClick={() => setSelectedCertificate(cert.image)}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tech Stack Content */}
          <TabsContent value="tech-stack">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
              {techStack.map((tech, techIndex) => (
                <div 
                  key={techIndex}
                  className="group relative cursor-pointer"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                >
                  <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.15), transparent 100px)`
                    }}
                  />
                  <div className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative w-20 h-20 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/10 to-[#a855f7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className={`w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 ${
                          tech.icon.endsWith('.png') 
                            ? 'brightness-90 contrast-125 saturate-150'
                            : 'filter-none'
                        }`}
                      />
                    </div>
                    
                    <div className="text-center">
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300 relative">
                        {tech.name}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Details Dialog - Updated Design */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#0A0118]/95 backdrop-blur-xl border-white/10">
          <DialogHeader className="relative pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-3 flex items-center justify-center shadow-lg">
                {selectedProject && <selectedProject.icon className="w-8 h-8 text-white" />}
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {selectedProject?.title}
                </DialogTitle>
                <p className="text-gray-400 text-sm mt-1">
                  {selectedProject?.category}
                </p>
              </div>
            </div>
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <X className="h-4 w-4 text-gray-300" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          
          <div className="mt-8 space-y-8">
            <HoverCard className="bg-[#110C1D]/50">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#6366f1]" />
                Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">{selectedProject?.overview}</p>
            </HoverCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HoverCard className="bg-[#110C1D]/50">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#6366f1]" />
                  Problem Statement
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject?.problem}</p>
              </HoverCard>

              <HoverCard className="bg-[#110C1D]/50">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#6366f1]" />
                  Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject?.solution}</p>
              </HoverCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HoverCard className="bg-[#110C1D]/50">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#6366f1]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </HoverCard>

              <HoverCard className="bg-[#110C1D]/50">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-[#6366f1]" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {selectedProject?.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-[#6366f1]" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Certificate Dialog */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-fit h-fit p-6 bg-black/95">
          <div className="relative flex items-center justify-center">
            <DialogPrimitive.Close className="absolute -top-2 -right-2 z-50 rounded-full w-8 h-8 
              flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors">
              <X className="h-4 w-4 text-white" />
            </DialogPrimitive.Close>

            <div className="relative flex items-center justify-center">
              <button 
                className="absolute -left-12 p-2 rounded-full bg-black/50 hover:bg-black/70 
                  transition-colors z-50"
                onClick={() => navigateCertificate('prev')}
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
              
              <div className="relative">
                <img 
                  src={selectedCertificate || ''} 
                  alt="Certificate"
                  className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                  loading="eager"
                />
              </div>
              
              <button 
                className="absolute -right-12 p-2 rounded-full bg-black/50 hover:bg-black/70 
                  transition-colors z-50"
                onClick={() => navigateCertificate('next')}
              >
                <ArrowLeft className="h-6 w-6 text-white rotate-180" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageBackground>
  );
};

export default Portfolio;
