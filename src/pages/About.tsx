const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
        <p>
          As a dedicated Cybersecurity Engineer, I specialize in protecting digital assets 
          and infrastructure from evolving cyber threats. With extensive experience in 
          security operations, incident response, and threat analysis, I work to ensure 
          robust defense mechanisms are in place.
        </p>
        <p>
          My expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Security Information and Event Management (SIEM)</li>
          <li>Vulnerability Assessment and Penetration Testing</li>
          <li>Incident Response and Threat Hunting</li>
          <li>Network Security and Monitoring</li>
          <li>Security Architecture Design</li>
        </ul>
        <p>
          I'm passionate about staying ahead of emerging threats and continuously 
          expanding my knowledge in the rapidly evolving field of cybersecurity.
        </p>
      </div>
    </div>
  );
};

export default About;