import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-[12vw] md:px-[7vw] lg:px-[15vw] text-white font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="mb-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative">
          EDUCATION
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8245ec] rounded-full"></span>
        </h2>
        <p className="text-gray-400 text-center mt-6 max-w-2xl">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-10 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-[0_0_35px_4px_rgba(130,69,236,0.35)] transition-all duration-500 border border-white/10 hover:border-purple-500/30"
          >
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-20 h-20 md:w-24 md:h-24 object-contain p-2 bg-white/10 rounded-xl"
              />
            </div>

            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-300">
                  {edu.school}
                </h3>
                <span className="text-gray-300 text-sm md:text-base mt-1 sm:mt-0 px-3 py-1 bg-white/10 rounded-full">
                  {edu.date}
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-medium mb-3">{edu.degree}</h4>
              <p className="text-gray-300 mb-3 inline-block px-3 py-1 bg-purple-900/30 rounded-md">Grade: {edu.grade}</p>
              <p className="text-gray-300/90 mt-2 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;