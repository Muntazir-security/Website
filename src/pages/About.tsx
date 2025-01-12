import { Code2, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0524] via-[#130F24] to-[#0A1929] text-white px-4 py-16 md:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          About Me
        </h1>
        <p className="text-lg text-purple-300 mb-8">
          ✨ Transforming ideas into digital experiences ✨
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">Hello, I'm</span>
            <br />
            <span className="text-white">Eki Zulfar Rachman</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            seorang siswa Teknik Jaringan Komputer dan Telekomunikasi yang tertarik dalam pengembangan Front-End. Saya berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek.
          </p>

          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download CV
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
              View Projects
            </Button>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-500/20">
              <img
                src="/lovable-uploads/d4e65db9-1224-4b2f-9e83-814df885016c.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Code2 className="w-8 h-8 text-purple-400" />}
          number="11"
          title="TOTAL PROJECTS"
          description="Innovative web solutions crafted"
        />
        <StatCard
          icon={<Award className="w-8 h-8 text-purple-400" />}
          number="7"
          title="CERTIFICATES"
          description="Professional skills validated"
        />
        <StatCard
          icon={<Globe className="w-8 h-8 text-purple-400" />}
          number="3"
          title="YEARS OF EXPERIENCE"
          description="Continuous learning journey"
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon, number, title, description }: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-[#1A1A2E]/50 border-purple-900/20 p-6 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="text-4xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-sm font-semibold text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Card>
  );
};

export default About;