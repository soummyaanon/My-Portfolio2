import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        poster="/fallback-image.jpg" // Fallback image
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-[2]"></div> {/* Dark overlay */}
      <div className="relative z-[3] animate-fade-in"> {/* Fade-in animation */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;