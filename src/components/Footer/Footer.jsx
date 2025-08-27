import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#050414] text-white py-10 px-[12vw] md:px-[7vw] lg:px-[15vw] border-t border-gray-800 relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#8245ec] hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
      
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1600px] mx-auto">
        <div className="mb-6 md:mb-0">
          <div className="text-lg md:text-xl font-semibold cursor-pointer group mb-3">
            <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">&lt;</span>
            <span className="text-white group-hover:text-gray-200 transition-colors duration-300">Divyanshu</span>
            <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">/</span>
            <span className="text-white group-hover:text-gray-200 transition-colors duration-300">Jaiswal</span>
            <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors duration-300">&gt;</span>
          </div>
          
          {/* Navigation Links - Responsive */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 mt-4">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-[#8245ec] text-sm sm:text-base my-1 text-gray-400"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <p className="text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Divyanshu Jaiswal. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <p className="text-gray-400 mb-3">Made with <FaHeart className="inline text-red-500 mx-1" /> by Divyanshu</p>
          <div className="flex space-x-5">
            <a
              href="https://github.com/Divyanshjaiswal2311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 p-2 bg-gray-800 rounded-full"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-jaiswal-9a3454257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 p-2 bg-gray-800 rounded-full"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1BGUjbN1wS/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 p-2 bg-gray-800 rounded-full"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/prince.jaiz?igsh=d2UzbzJnaGVsdjYx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 p-2 bg-gray-800 rounded-full"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;