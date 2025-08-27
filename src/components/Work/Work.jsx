import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 ${project.title === "AI-Interviewer" || project.title === "Blood-Bank-Management-System" ? "object-contain" : "object-cover"} rounded-xl transform transition-transform duration-500 group-hover:scale-105`}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300/80 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-300 rounded-full px-3 py-1 mr-2 mb-2 hover:bg-[#2d2545] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#0e0a1f] rounded-3xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col border border-white/10">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white/80 text-3xl font-bold hover:text-purple-400"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto">
              <div className="w-full flex justify-center bg-[#0e0a1f] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`lg:w-full w-[95%] object-contain rounded-xl shadow-2xl ${selectedProject.title === "AI-Interviewer" ? "max-h-[240px]" : selectedProject.title === "Blood-Bank-Management-System" ? "max-h-[300px]" : ""}`}
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300/90 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-300 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800/70 hover:bg-purple-800 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center border border-white/10"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center shadow-[0_0_20px_rgba(130,69,236,0.35)]"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;