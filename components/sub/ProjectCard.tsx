import React from 'react';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  className?: string; // Add this line
}

const ProjectCard = ({ src, title, description, url, className }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block relative">
      <div className="absolute z-50 top-0 right-0 m-2 transition duration-500 ease-in-out transform hover:scale-110">
       <FaExternalLinkSquareAlt size={50} className="text-cyan-200 hover:text-white" />
      </div>

      <div className="flex flex-col space-y-4 h-full overflow-hidden rounded-lg shadow-lg border border-[#4b2d87]">
        <img
          src={src}
          alt={title}
          className="w-full object-contain"
        />

        <div className={`p-4 flex-grow w-full flex flex-col justify-center ${className}`}> {/* Apply the className here */}
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;