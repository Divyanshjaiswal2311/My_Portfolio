import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[15vw] ${
        isScrolled
          ? "bg-[#050414]/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,2,25,0.45)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="text-lg md:text-xl font-semibold cursor-pointer group">
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">&lt;</span>
          <span className="text-white group-hover:text-gray-200 transition-colors duration-300">Divyanshu</span>
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">/</span>
          <span className="text-white group-hover:text-gray-200 transition-colors duration-300">Jaiswal</span>
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] relative ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="text-base font-medium transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </button>
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-6">
          <a
            href="https://github.com/Divyanshjaiswal2311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyanshu-jaiswal-9a3454257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Divyanshjaiswal2311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/divyanshu-jaiswal-9a3454257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;