import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PageBackground from "@/components/shared/PageBackground"

const Header = memo(() => (
  <div className="text-center mb-8" data-aos="fade-down">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-2">
      About Me
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming vulnerabilities into robust security solutions
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-start sm:p-8 sm:py-0 sm:pb-0 p-0">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img
            src="/lovable-uploads/e9cf7f8f-989a-495d-b3fc-40b115ced526.png"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

interface StatCardProps {
  icon: LucideIcon;
  color: string;
  value: number;
  label: string;
  description: string;
  animation: string;
  link: string;
}

const StatCard = memo(({ icon: Icon, color, value, label, description, animation, link }: StatCardProps) => (
  <Link to={link} className="block">
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-4 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold text-white">
            {value}
          </span>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-gray-300 mb-1">
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  </Link>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2022-05-01");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length || 8,
      totalCertificates: storedCertificates.length || 6,
      YearExperience: experience || 2
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: totalProjects,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
      link: "/portfolio?tab=projects"
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
      link: "/portfolio?tab=certificates"
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: YearExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
      link: "/portfolio?tab=tech-stack"
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <PageBackground className="min-h-screen">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center" id="About">
        <Header />
        
        <div className="w-full mx-auto relative flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Hello, I'm
                </span>
                <span 
                  className="block mt-1 text-gray-200"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  Muntazir Mehdi
                </span>
              </h2>
              
              <p 
                className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed text-justify"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                A Cybersecurity Engineer with a passion for securing digital environments. I hold a degree in Computer Science, specializing in Cybersecurity, from Asia Pacific University of Technology & Innovation. With hands-on experience in SOC analysis, vulnerability assessment, and penetration testing, I've developed a strong foundation in identifying and mitigating security risks. My expertise in SIEM implementation, threat detection, and security documentation is further strengthened by industry certifications, including eJPT and ICCA. I blend technical expertise with analytical thinking to build robust security solutions, always staying ahead of emerging threats to protect critical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
                <a 
                  href="/Syed Muntazir Mehdi CV.pdf" 
                  download
                  className="w-full sm:w-auto"
                >
                  <button 
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="group relative w-full sm:w-[180px]"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-12 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          Download CV
                        </span>
                        <FileText className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </a>
                <Link 
                  to="/portfolio?tab=projects" 
                  className="w-full sm:w-auto"
                >
                  <button 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="group relative w-full sm:w-[180px]"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-12 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          View Projects
                        </span>
                        <Code className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <ProfileImage />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default AboutPage;