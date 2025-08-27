// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
      <p className="text-gray-400 mt-6 text-lg font-semibold max-w-3xl mx-auto">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-white/5 backdrop-blur-xl px-6 sm:px-10 py-8 sm:py-6 mb-6 w-full rounded-3xl border border-white/10 hover:border-purple-500/30
          shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] hover:shadow-[0_0_35px_4px_rgba(130,69,236,0.35)] transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-3xl py-2 px-3 sm:py-3 sm:px-4 text-center hover:border-purple-500/40 hover:bg-purple-900/20 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-200 font-medium break-words whitespace-normal leading-snug">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;