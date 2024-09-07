'use client';

import React from 'react';
import Image from 'next/image';
import { FaSpaceShuttle, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  url: string;
  github: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, url, github, className }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg border border-[#4b2d87] transition-all duration-300 hover:shadow-purple-500/50">
      <div className="absolute z-50 top-4 right-4 flex space-x-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 backdrop-blur-sm">
          <FaSpaceShuttle size={16} className="mr-2 text-purple-300" />
          Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 backdrop-blur-sm">
          <FaGithub size={16} className="mr-2 text-purple-300" />
          Code
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
          <h1 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{title}</h1>
          <p className="mt-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
      {
        src: "/NextWebsite.png",
        title: "BLOGZUE",
        description: "This Blogger App allows users to create, read, update, and delete posts. It features topic categorization, commenting, and a user-friendly interface.",
        url: "https://blogzue.vercel.app",
        github: "https://github.com/soummyaanon/Blogzue"
      },
      {
        src: "/CardImage.png",
        title: "noteX",
        description: "Experience the future of note-taking with noteX, powered by Google Gemini Pro. Enjoy seamless integration Colaboration features, advanced features, and secure cloud By powerdby Appwrite storage. This Project is Still In Developemnet Phase",
        url: "https://noteex.vercel.app",
        github: "https://github.com/soummyaanon/-noteX"
      },
      {
        src: "/book.png",
        title: "BOOK-Pedia",
        description: "Discover Your Next Favorite Read with Book Pedia - A Simple Web App. Hey book lovers! 📖 I just developed a web app called Book Pedia to make finding your next read super easy.",
        url: "https://bookpediaa.vercel.app/",
        github: "https://github.com/soummyaanon/BOOK-Pedia"
      },
      {
        src: "/SpaceWebsite.png",
        title: "Portfolio Website",
        description: "Showcasing my skills, projects, and experiences, this portfolio website is built with modern web technologies.",
        url: "https://soumya-ranjan.tech/",
        github: "https://github.com/soummyaanon/My-Portfolio2"
      }
    ];

  return (
    <section className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 animate-pulse">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            className="text-justify"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;