"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (containerRef.current as HTMLElement)?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const textControls = useAnimation();

  useEffect(() => {
    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }));
  }, [textControls]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]"
    >
      <div className="flex flex-col gap-8 max-w-[600px]">
        <motion.div 
          ref={containerRef}
          variants={slideInFromTop}
          className="relative inline-block perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/imgi.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
             <SparklesIcon className="text-[#b49bff] absolute -top-2 -right-2 h-6 w-6" />
          </motion.div>

        </motion.div>

        <div className="space-y-2">
          {["My Self", "Soumyaranjan", "A Frontend Developer."].map((text, index) => (
            <motion.h2
              key={index}
              custom={index}
              animate={textControls}
              initial={{ opacity: 0, y: 20 }}
              className={`text-4xl font-bold ${
                index === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" : "text-gray-300"
              }`}
            >
              {text}
            </motion.h2>
          ))}
        </div>

        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-lg text-gray-400 leading-relaxed"
        >
          I&apos;m a dedicated Frontend Web Developer with a passion for creating intuitive, user-friendly, and high-performance websites. I have a strong understanding of modern web technologies and a keen eye for design.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 font-semibold"
        >
          Smart India Hackathon Winner 2023 🏆 | 👨🏻‍🎓Student | Future Full Stack Dev 🌐 | Tech Enthusiast 💻
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1.1)}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out inline-flex items-center space-x-2 w-max"
          href="https://drive.google.com/file/d/1ITlO1CnELDTmo_2NVfOBZkJ31OKDrxed/view?usp=sharing"
          download
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download CV</span>
        </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.5)}
        className="relative w-[650px] h-[650px]"
      >
        <motion.div
          animate={{
            rotateY: 0,
          }}
          transition={{
            duration: 0,
          }}
          className="w-full h-full"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;