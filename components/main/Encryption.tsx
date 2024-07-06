"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Encryption = () => {
  const images = ["/image1.png", "/Image2.png", "/image3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds for a smoother experience
    return () => clearInterval(interval);
  }, [nextSlide]);

  const radius = 300; // Increased radius for a wider carousel
  const angleStep = (2 * Math.PI) / images.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 relative overflow-hidden">
      <motion.div
        variants={slideInFromTop}
        initial="initial"
        animate="animate"
        className="text-5xl font-bold text-center text-white mb-10 z-10"
      >
        Achievements
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
          {" "}
          &{" "}
        </span>
        Awards
      </motion.div>

      <div className="relative flex items-center justify-center w-full h-[600px] perspective-1000">
        {images.map((image, index) => {
          const angle = index * angleStep - currentIndex * angleStep;
          const x = radius * Math.sin(angle);
          const z = radius * Math.cos(angle) - radius;

          return (
            <motion.div
              key={index}
              className="absolute w-72 h-72"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.7,
                scale: index === currentIndex ? 1 : 0.9,
                x,
                z,
                rotateY: angle * (180 / Math.PI),
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full p-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <Image
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-medium text-center text-gray-300 mt-10 px-5 max-w-2xl cursive text-[20px] "
      >
        "There are two ways to write error-free programs; only the third one works."
      </motion.div>

      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;