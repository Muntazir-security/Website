import React, { memo } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, image }: ProjectCardProps) => (
  <div className="relative group" data-aos="fade-up">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
    <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10">
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default memo(ProjectCard);