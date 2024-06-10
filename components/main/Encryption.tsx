"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Encryption = () => {
  const images = ["/image1.png", "/image2.png", "/image3.jpeg"]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const radius = 250; // Adjust the radius of the carousel
  const angleStep = (2 * Math.PI) / images.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full bg-black relative overflow-hidden">
      <div className="absolute top-0 z-10 mb-10">
        <motion.div
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          className="text-4xl font-semibold text-center text-gray-200"
        >
          Achievements
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Awards
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center mt-20 w-full h-[500px] perspective-1000">
        {images.map((image, index) => {
          const angle = index * angleStep - currentIndex * angleStep;
          const x = radius * Math.sin(angle);
          const z = radius * Math.cos(angle);

          return (
            <div
              key={index}
              className="absolute w-64 h-64"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) rotateY(${
                  angle * (180 / Math.PI)
                }deg)`,
                transition: "transform 1s",
              }}
            >
              <div className="relative w-full h-full p-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-2xl">
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <Image
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-2xl "
                />
              </div>
            </div>
          );
        })}
      </div>


      <div className="absolute z-[20] bottom-[10px] px-[5px] mt-10">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
        There are two ways to write error-free programs; only the third one works.
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-50"
          src="/encryption.webm"
        />
      </div>


    </div>
  );
};

export default Encryption;
