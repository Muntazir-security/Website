import React from "react";
import PageBackground from "@/components/shared/PageBackground";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";

const projects = [
  {
    title: "Network Security Monitor",
    description: "A real-time network traffic analyzer with intrusion detection capabilities.",
    technologies: ["Python", "Scapy", "ElasticSearch", "Kibana"],
    githubUrl: "https://github.com/yourusername/network-monitor",
    image: "/project-1.jpg"
  },
  {
    title: "Vulnerability Scanner",
    description: "Automated security assessment tool for web applications.",
    technologies: ["Python", "Docker", "REST API", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/vuln-scanner",
    liveUrl: "https://demo.vuln-scanner.com",
    image: "/project-2.jpg"
  },
  {
    title: "Security Dashboard",
    description: "Centralized security metrics and alerts visualization platform.",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    githubUrl: "https://github.com/yourusername/security-dashboard",
    image: "/project-3.jpg"
  }
];

const Portfolio = () => {
  return (
    <PageBackground>
      <div className="container mx-auto px-4 py-16">
        <PortfolioHeader />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </PageBackground>
  );
};

export default Portfolio;