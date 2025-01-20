import React from "react";
import PageBackground from "@/components/shared/PageBackground";
import AboutHeader from "@/components/about/AboutHeader";
import ExperienceCard from "@/components/about/ExperienceCard";
import SkillCard from "@/components/about/SkillCard";

const experiences = [
  {
    title: "Senior Security Analyst",
    company: "CyberGuard Solutions",
    period: "2021 - Present",
    description: "Lead security analyst responsible for threat detection, incident response, and security infrastructure management."
  },
  {
    title: "Security Engineer",
    company: "SecureNet Systems",
    period: "2019 - 2021",
    description: "Implemented and maintained security controls, conducted vulnerability assessments, and managed security tools."
  }
];

const skills = [
  {
    category: "Security Tools",
    skills: ["Splunk", "QRadar", "Nessus", "Wireshark", "Metasploit"]
  },
  {
    category: "Technologies",
    skills: ["Network Security", "Cloud Security", "Endpoint Protection", "Threat Intelligence", "Incident Response"]
  },
  {
    category: "Certifications",
    skills: ["CISSP", "CEH", "Security+", "CCNA Security"]
  }
];

const About = () => {
  return (
    <PageBackground>
      <div className="container mx-auto px-4 py-16">
        <AboutHeader />
        
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Skills & Certifications
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default About;