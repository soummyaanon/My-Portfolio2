"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillDataProvider = ({ src, width, height, index }: { src: string, width: number, height: number, index: number }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.25, delay: index * 0.1 }}
      className="skill-icon"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
      />
      <style jsx global>{`
        .skill-icon {
          perspective: 1000px;
          transform-style: preserve-3d;
          animation: tilt 5s infinite alternate ease-in-out;
        }
        @keyframes tilt {
          0% { transform: rotateX(5deg) rotateY(5deg); }
          100% { transform: rotateX(-5deg) rotateY(-5deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default SkillDataProvider;