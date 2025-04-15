
import React, { useState } from "react";
import { Shield, Search, Lock, AlertTriangle, Server, Code, Bug, Target, Database } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../shared/SectionContainer";

// Define the skill node type
interface SkillNode {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  level: 1 | 2 | 3 | 4 | 5; // 1-5 skill level
  category: string;
  connections: string[]; // IDs of connected nodes
}

// Define the skill data
const skillsData: SkillNode[] = [
  {
    id: "soc-analysis",
    name: "SOC Analysis",
    icon: Shield,
    description: "Monitoring and analyzing security alerts in real-time, incident triage, and threat detection.",
    level: 5,
    category: "defense",
    connections: ["threat-hunting", "incident-response"]
  },
  {
    id: "threat-hunting",
    name: "Threat Hunting",
    icon: Search,
    description: "Proactively searching for threats that evade existing security solutions.",
    level: 4,
    category: "defense",
    connections: ["malware-analysis", "incident-response"]
  },
  {
    id: "network-security",
    name: "Network Security",
    icon: Lock,
    description: "Protecting network infrastructure through firewall configuration, IDS/IPS management, and traffic analysis.",
    level: 5,
    category: "infrastructure",
    connections: ["perimeter-defense", "soc-analysis"]
  },
  {
    id: "incident-response",
    name: "Incident Response",
    icon: AlertTriangle,
    description: "Methodically addressing and managing the aftermath of security breaches or attacks.",
    level: 4,
    category: "defense",
    connections: ["forensics"]
  },
  {
    id: "perimeter-defense",
    name: "Perimeter Defense",
    icon: Shield,
    description: "Securing the boundary between private and public networks using firewalls, DMZs, and VPNs.",
    level: 4,
    category: "infrastructure",
    connections: ["network-security"]
  },
  {
    id: "malware-analysis",
    name: "Malware Analysis",
    icon: Bug,
    description: "Analyzing malicious software to understand its behavior, impact, and origin.",
    level: 3,
    category: "analysis",
    connections: ["threat-hunting", "incident-response"]
  },
  {
    id: "forensics",
    name: "Digital Forensics",
    icon: Target,
    description: "Collecting, analyzing, and preserving digital evidence for security investigations.",
    level: 3,
    category: "analysis",
    connections: ["malware-analysis"]
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    icon: Server,
    description: "Securing cloud environments through proper configuration, access management, and monitoring.",
    level: 4,
    category: "infrastructure",
    connections: ["network-security", "devops-security"]
  },
  {
    id: "devops-security",
    name: "DevOps Security",
    icon: Code,
    description: "Integrating security into the development lifecycle through automated testing and secure CI/CD pipelines.",
    level: 3,
    category: "development",
    connections: ["cloud-security"]
  },
  {
    id: "database-security",
    name: "Database Security",
    icon: Database,
    description: "Protecting database systems from unauthorized access and ensuring data integrity and confidentiality.",
    level: 4,
    category: "infrastructure",
    connections: ["cloud-security"]
  }
];

// Node positions (we'll use a circular layout)
const nodePositions = {
  "soc-analysis": { x: 50, y: 50 },
  "threat-hunting": { x: 80, y: 30 },
  "network-security": { x: 20, y: 40 },
  "incident-response": { x: 80, y: 70 },
  "perimeter-defense": { x: 30, y: 80 },
  "malware-analysis": { x: 70, y: 20 },
  "forensics": { x: 65, y: 85 },
  "cloud-security": { x: 25, y: 25 },
  "devops-security": { x: 40, y: 20 },
  "database-security": { x: 15, y: 65 }
};

// Color mapping for different categories
const categoryColors = {
  defense: "from-blue-400 to-blue-600",
  infrastructure: "from-purple-400 to-purple-600",
  analysis: "from-green-400 to-green-600",
  development: "from-orange-400 to-orange-600"
};

const CyberSkillTree: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Function to draw connections between nodes
  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    
    skillsData.forEach(node => {
      const startPos = nodePositions[node.id as keyof typeof nodePositions];
      
      node.connections.forEach(targetId => {
        const endPos = nodePositions[targetId as keyof typeof nodePositions];
        
        // Calculate path
        const isHighlighted = selectedNode === node.id || selectedNode === targetId || 
                            hoveredNode === node.id || hoveredNode === targetId;
        
        connections.push(
          <line
            key={`${node.id}-${targetId}`}
            x1={`${startPos.x}%`}
            y1={`${startPos.y}%`}
            x2={`${endPos.x}%`}
            y2={`${endPos.y}%`}
            stroke={isHighlighted ? "#a855f7" : "#6366f180"}
            strokeWidth={isHighlighted ? 2 : 1}
            strokeDasharray={isHighlighted ? "none" : "5,5"}
            className="transition-all duration-300"
          />
        );
      });
    });
    
    return connections;
  };
  
  const getNodeClass = (nodeId: string) => {
    const baseClasses = "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300";
    const isSelected = selectedNode === nodeId;
    const isHovered = hoveredNode === nodeId;
    
    return `${baseClasses} ${isSelected || isHovered ? 'scale-110 z-10' : 'scale-100 z-0'}`;
  };

  const getSkillLevelClass = (level: number) => {
    switch(level) {
      case 5: return "w-24 h-24";
      case 4: return "w-20 h-20";
      case 3: return "w-16 h-16";
      default: return "w-14 h-14";
    }
  };

  return (
    <SectionContainer
      id="skills"
      title="Cybersecurity Skills"
      subtitle="Interactive visual representation of my security expertise"
    >
      <div className="relative w-full h-[600px] mb-16">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {renderConnections()}
        </svg>
        
        {/* Nodes */}
        {skillsData.map((skill) => {
          const position = nodePositions[skill.id as keyof typeof nodePositions];
          const Icon = skill.icon;
          const category = skill.category;
          const colorClass = categoryColors[category as keyof typeof categoryColors];
          
          return (
            <motion.div
              key={skill.id}
              className={getNodeClass(skill.id)}
              style={{ 
                left: `${position.x}%`, 
                top: `${position.y}%` 
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: Math.random() * 0.5 }}
              onMouseEnter={() => setHoveredNode(skill.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => setSelectedNode(selectedNode === skill.id ? null : skill.id)}
            >
              <div className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClass} rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative ${getSkillLevelClass(skill.level)} rounded-full flex items-center justify-center bg-black backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-colors duration-300`}>
                  <Icon className="w-1/2 h-1/2 text-white" />
                </div>
                
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-black/80 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-mono border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          );
        })}
        
        {/* Skill Detail Panel */}
        {selectedNode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-black/70 backdrop-blur-xl p-4 rounded-lg border border-white/10 font-mono"
          >
            {skillsData.filter(skill => skill.id === selectedNode).map(skill => (
              <div key={skill.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                
                <div className="flex gap-2 mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full ${i < skill.level ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7]' : 'bg-white/20'}`}
                      style={{ width: '20%' }}
                    ></div>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm mt-2">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {Object.entries(categoryColors).map(([category, colorClass]) => (
          <div key={category} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClass}`}></div>
            <span className="text-gray-400 text-sm font-mono capitalize">{category}</span>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CyberSkillTree;
