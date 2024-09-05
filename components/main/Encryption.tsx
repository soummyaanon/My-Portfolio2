"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function AchievementShowcase() {
  const achievements = [
    { id: 1, title: "Best Innovation Award", image: "/image1.png" },
    { id: 2, title: "Tech Leader of the Year", image: "/Image2.png" },
    { id: 3, title: "Outstanding Project", image: "/image3.png" },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(interval)
  }, [achievements.length])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-transparent">
          <motion.div
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
      
      <div className="relative w-full max-w-3xl aspect-video overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={achievements[activeIndex].image}
              alt={achievements[activeIndex].title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-medium text-center text-gray-300 mt-10 px-5 max-w-2xl cursive text-[20px] "
      >
        &ldquo;There are two ways to write error-free programs; only the third one works.&rdquo;
      </motion.div>
    </div>
  )
}