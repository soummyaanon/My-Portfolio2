import React from 'react';
import { FaSpaceShuttle } from "react-icons/fa";
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  className?: string;
}
const ProjectCard = ({ src, title, description, url, className }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block relative">
      <div className="absolute z-50 top-0 right-0 m-2">
        <div className="space-y-4">
          <button className="inline-flex items-center space-x-2 text-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 rounded-lg p-2 py-2 relative">
            <div className="backdrop-blur-lg rounded-lg bg-bluring-bg absolute inset-0 z-0"></div>           
              <FaSpaceShuttle size={26} className="z-10 text-stone-300 text-lg" />
            <span className="font-extrabold z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Demo</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 h-full overflow-hidden rounded-lg shadow-lg border border-[#4b2d87]">
        <Image
          src={src}
          alt={title}
          layout="responsive"
          width={500}
          height={300}
          className="w-full object-contain"
        />
        <div className={`p-4 flex-grow w-full flex flex-col justify-center ${className}`}>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;