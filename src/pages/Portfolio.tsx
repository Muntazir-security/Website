import React, { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

// ... keep existing code (projects array until the Bank icon reference)

const projects = [
  {
    title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
    description: "An advanced anomaly detection system designed to protect Software-Defined Networks from TCP SYN flooding-based DDoS attacks using statistical approaches.",
    icon: Shield,
    tech: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"],
    category: "Security",
    features: [
      "Statistical approach for anomaly detection in SDN",
      "Real-time analysis of network traffic",
      "Detection and prevention of TCP SYN flooding",
      "Enhancement of critical infrastructure protection"
    ]
  },
  {
    title: "SABB Bank Management System",
    description: "A Python-based banking system with multi-level authentication, offering secure transaction handling and comprehensive account management features.",
    icon: Building2, // Changed from Bank to Building2
    tech: ["Python", "CLI", "File I/O", "User Authentication"],
    category: "Banking",
    features: [
      "Multi-level user authentication",
      "Secure transactions handling",
      "Transaction history tracking",
      "Password management"
    ]
  },
  {
    title: "University Information Management System",
    description: "A recommendation engine for the Malaysian Ministry of Higher Education to help evaluate global higher education options using QS university rating data.",
    icon: GraduationCap,
    tech: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"],
    category: "Education",
    features: [
      "University ranking system",
      "User-specific interfaces",
      "Data analysis tools",
      "Administrative dashboard"
    ]
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
      "Order processing",
      "Review system"
    ]
  },
  {
    title: "Minimart Management System",
    description: "An Assembly Language application providing essential tools for minimart operations, including inventory management and sales analysis.",
    icon: ShoppingCart,
    tech: ["Assembly Language", "Low-level Programming", "Inventory Management"],
    category: "Retail",
    features: [
      "Inventory management",
      "Sales analysis",
      "Stock tracking",
      "Revenue reporting"
    ]
  },
  {
    title: "Personal Task Management System",
    description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks with priority-based scheduling.",
    icon: CheckSquare,
    tech: ["C", "CLI", "File I/O", "Task Management"],
    category: "Productivity",
    features: [
      "Task organization",
      "Priority scheduling",
      "Deadline management",
      "Progress tracking"
    ]
  },
  {
    title: "Car Rental System",
    description: "A Java-based rental management system showcasing OOP principles with features for vehicle booking, customer management, and reporting.",
    icon: Car,
    tech: ["Java", "OOP", "Database Management", "User Authentication"],
    category: "Transportation",
    features: [
      "Vehicle booking",
      "Customer management",
      "Payment processing",
      "Report generation"
    ]
  },
  {
    title: "House Rent Prediction Analysis",
    description: "A data analysis project using R Studio to explore and visualize housing market trends with comprehensive statistical modeling.",
    icon: Home,
    tech: ["R", "Data Analysis", "Data Visualization", "Statistical Modeling"],
    category: "Analytics",
    features: [
      "Data preprocessing",
      "Statistical modeling",
      "Market trend analysis",
      "Visualization"
    ]
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
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const activeTab = searchParams.get('tab') || 'projects';

  return (
    <div className="min-h-screen bg-[#0B0B1E] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-3xl animate-spin-slower" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16" data-aos="fade-down">
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
                  className="bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-[#6366f1]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex justify-between items-center border-t border-white/5">
                        <span className="text-xs text-gray-500">{project.category}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-[#6366f1] hover:text-[#a855f7] hover:bg-white/5"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
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
