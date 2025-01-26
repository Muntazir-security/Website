const Portfolio = () => {
  const projects = [
    {
      title: "Security Operations Center (SOC) Implementation",
      description: "Designed and implemented a comprehensive SOC solution for real-time threat monitoring and incident response.",
      tags: ["SIEM", "Incident Response", "Threat Detection"]
    },
    {
      title: "Network Security Enhancement",
      description: "Led a major network security upgrade project implementing advanced firewall rules and intrusion detection systems.",
      tags: ["Network Security", "IDS/IPS", "Firewall"]
    },
    {
      title: "Vulnerability Management Program",
      description: "Developed and maintained an enterprise-wide vulnerability assessment and management program.",
      tags: ["Vulnerability Assessment", "Risk Management", "Security Testing"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;