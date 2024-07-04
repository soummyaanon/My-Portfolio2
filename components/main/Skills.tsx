"use client";

import {
  Backend_skill,
  Frontend_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import Image from "next/image";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-inner">
        <Image
          src={skill.Image}
          width={40}
          height={40}
          alt={skill.skill_name}
          className="rounded-full"
        />
        <p className="text-xs mt-2 text-center text-white">{skill.skill_name}</p>
      </div>
    </div>
  );
};

const SkillSection = ({ skills, title }: { skills: any[]; title: string }) => {
  return (
    <div className="mb-10">
      <h3 className="text-white text-xl mb-4">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {skills.map((skill: any, index: number) => (
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
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
    >
      <SkillText />
      
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <SkillSection skills={Skill_data} title="General Skills" />
        <SkillSection skills={Frontend_skill} title="Frontend Skills" />
        <SkillSection skills={Backend_skill} title="Backend Skills" />
      </div>
    
      <div className="w-full h-full absolute top-0 left-0 z-[-1]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    
      <style jsx global>{`
        .skill-card {
          perspective: 1000px;
          transition: transform 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-10px);
        }

        .skill-card-inner {
          background: rgba(123, 97, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
          transition: box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .skill-card:hover .skill-card-inner {
          box-shadow: 0 8px 12px rgba(123, 97, 255, 0.3);
        }

        .skill-card-inner img {
          width: 48px;
          height: 48px;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-card-inner img {
          transform: scale(1.1);
        }

        .skill-card-inner p {
          font-size: 0.75rem;
          margin-top: 8px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Skills;