"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
<motion.div
  variants={slideInFromTop}
  className="Welcome-box py-[10px] px-[9px] opacity-[0]"
>
  <img 
    src="/imgi.jpeg" 
    alt="description_of_image" 
    className="w-48 h-48 rounded-full mr-3 filter saturate-200" 
  />
  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
</motion.div>
<motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-6 mt-6 text-3xl font-bold text-gray-300 max-w-[600px] w-auto h-auto"
>
  <span className="overflow-hidden border-r border-transparent inline-block">
    <span className="animate-type">
      My Self
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {" "}
        Soumyaranjan
      </span>
    </span>
  </span>
  <span>
    A Frontend Developer.
  </span>
</motion.div>
<motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-5 max-w-[600px] text-justify"
>
  I'm a dedicated Frontend Web Developer with a passion for creating intuitive, user-friendly, and high-performance websites. I have a strong understanding of modern web technologies and a keen eye for design.
  <br />
  <br />
  Smart India Hackathon Winner 2023 🏆 | 👨🏻‍🎓Student | Future Full Stack Dev 🌐 | Tech Enthusiast 💻.
</motion.p>
<motion.a
  variants={slideInFromLeft(1)}
  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
  href="https://drive.google.com/file/d/1EJuXLPYFLKwW8GcGxOBfSFI2QEp4wZe0/view?usp=share_link" // replace with your CV link
  download
>
  Download CV
</motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
