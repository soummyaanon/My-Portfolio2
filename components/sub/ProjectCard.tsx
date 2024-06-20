import React from 'react';
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
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
        <div className="space-y-1">
          <HiOutlineChevronDoubleUp size={25} className="text-purple-500 hover:text-purple-800 transition-transform duration-500 ease-in-out transform hover:-translate-y-1 backdrop-blur" />
          <HiOutlineChevronDoubleUp size={25} className="text-purple-500 hover:text-purple-800 transition-transform duration-700 ease-in-out transform hover:-translate-y-1 backdrop-blur" />
         
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