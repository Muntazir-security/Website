import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code2, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PageBackground from "@/components/shared/PageBackground"

const Header = memo(() => (
  <div className="text-center mb-8 pt-8" data-aos="fade-down">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-2">
      About Me
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2 text-sm">
      <Sparkles className="w-4 h-4 text-purple-400" />
      Transforming vulnerabilities into robust security solutions
      <Sparkles className="w-4 h-4 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-6 sm:py-0 sm:pb-0 p-0">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-4 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
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
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span 
            className="text-3xl font-bold text-white"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            {value}
          </span>
        </div>

        <div>
          <p 
            className="text-xs uppercase tracking-wider text-gray-300 mb-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p 
              className="text-xs text-gray-400"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
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
    
    const startDate = new Date("2022-05-01"); // Adjusted to reflect 2 years of experience
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length || 8, // Updated to 8
      totalCertificates: storedCertificates.length || 6, // Updated to 6
      YearExperience: experience || 2 // Updated to 2
    };
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
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
        
        <div className="w-full mx-auto relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 text-center lg:text-left lg:max-w-2xl">
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
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
                A Cybersecurity Engineer with a passion for securing digital environments. I hold a degree in Computer Science, specializing in Cybersecurity, from Asia Pacific University of Technology & Innovation. With hands-on experience in SOC analysis, vulnerability assessment, and penetration testing, I've developed a strong foundation in identifying and mitigating security risks.
              </p>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                <a 
                  href="/Syed Muntazir Mehdi CV.pdf" 
                  download
                  className="w-full lg:w-auto"
                >
                  <button 
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="group relative w-full lg:w-[180px]"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-10 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
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
                  className="w-full lg:w-auto"
                >
                  <button 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="group relative w-full lg:w-[180px]"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-10 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          View Projects
                        </span>
                        <Code2 className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <ProfileImage />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
