import React from 'react';
import Image from 'next/image';
import { FaSpaceShuttle, FaGithub } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  github: string;
  className?: string;
}

const ProjectCard = ({ src, title, description, url, github, className }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg border border-[#4b2d87] transition-all duration-300 hover:shadow-purple-500/50">
      <div className="absolute z-50 top-4 right-4 flex space-x-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="futuristic-button">
          <FaSpaceShuttle size={20} className="text-purple-300" />
          <span className="ml-2">Demo</span>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="futuristic-button">
          <FaGithub size={20} className="text-purple-300" />
          <span className="ml-2">Code</span>
        </a>
      </div>
      <div className="flex flex-col space-y-4 h-full">
        <div className="relative h-48 md:h-64">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className={`p-4 flex-grow w-full flex flex-col justify-center ${className}`}>
          <h1 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">{title}</h1>
          <p className="mt-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;