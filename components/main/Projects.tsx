import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
  src="/NextWebsite.png"
  title="BLOGZUE"
  description="This Blogger App allows users to create, read, update, and delete posts. It features topic categorization, commenting, and a user-friendly interface. Designed for a seamless experience across devices."
  url="https://blogzue.vercel.app"
  className="text-justify"
/>
<ProjectCard
  src="/CardImage.png"
  title=".SNIKERS"
  description="Explore chic fashion at Elegance Emporium! Enjoy effortless browsing, diverse collections, and secure checkout. Discover style and simplicity in one place. Your next favorite outfit is just a click away."
  url="https://ecoomerce-phi.vercel.app/"
  className="text-justify"
/>
<ProjectCard
  src="/SpaceWebsite.png"
  title="Space Themed Website"
  description="Showcasing my skills, projects, and experiences, this portfolio website is built with modern web technologies. It's designed for optimal performance and user experience, providing a comprehensive view of my professional journey and technical abilities."
  url="https://your-project-url-3.com"
  className="text-justify"
/>
      </div>
    </div>
  );
};

export default Projects;