import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-0 object-cover" // changed z-index to 0
        poster="/fallback-image.jpg" // Fallback image
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Dark overlay, changed z-index to 10 */}
      <div className="relative z-20 animate-fade-in"> {/* Fade-in animation, changed z-index to 20 */}
        <HeroContent /> {/* Make sure the button inside this component has a z-index higher than 20 */}
      </div>
    </div>
  );
};

export default Hero;