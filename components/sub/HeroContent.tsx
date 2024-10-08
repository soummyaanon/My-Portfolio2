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
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    }));
  }, [textControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="flex flex-col gap-8 max-w-[600px]" variants={containerVariants}>
        <motion.div 
          ref={containerRef}
          variants={slideInFromTop}
          className="relative inline-block perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
          variants={itemVariants}
          className="text-lg text-gray-400 leading-relaxed"
        >
          I&apos;m a dedicated Frontend Web Developer with a passion for creating intuitive, user-friendly, and high-performance websites. I have a strong understanding of modern web technologies and a keen eye for design.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 font-semibold"
        >
          Smart India Hackathon Winner 2023 🏆 | 👨🏻‍🎓Student | Future Full Stack Dev 🌐 | Tech Enthusiast 💻
        </motion.p>

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out inline-flex items-center space-x-2 w-max"
          href="https://drive.google.com/file/d/1cokDsCn5i3mTBZOzAg39R1LlubjDV1t-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download CV</span>
        </motion.a>
      </motion.div>
      
      <motion.div
        variants={slideInFromRight(0.5)}
        className="relative w-[650px] h-[650px]"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 5, 0],
            rotateY: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
<motion.div className="w-full h-full relative">
  <Image
    src="/mainIconsdark.svg"
    alt="work icons"
    layout="fill"
    objectFit="contain"
    className="drop-shadow-2xl"
  />
</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;