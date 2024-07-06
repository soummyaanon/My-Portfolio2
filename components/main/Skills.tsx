import { Backend_skill, Frontend_skill } from "@/constants";
import React from "react";
import SkillText from "../sub/SkillText";
import Image from "next/image";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="group perspective-1000">
      <div className="relative h-44 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(10deg)]">
        <div className="absolute inset-0">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-4 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/25">
            <Image
              src={skill.Image}
              width={60}
              height={60}
              alt={skill.skill_name}
              className="rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <p className="mt-4 text-center text-sm font-semibold text-white text-shadow transition-all duration-300 group-hover:translate-z-10">
              {skill.skill_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSection = ({ skills, title }: { skills: any[], title: string }) => {
  return (
    <div className="mb-16">
      <h3 className="mb-6 inline-block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4">
        <SkillText />
        <SkillSection skills={Frontend_skill} title="Frontend Skills" />
        <SkillSection skills={Backend_skill} title="Backend Skills" />
      </div>

      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;