import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 lg:pr-8">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Divyanshu Jaiswal
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                options={{
                  strings: [
                    'Fullstack Developer',
                    'Problem Solver',
                    'Software Engineer',
                    'Coder',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed max-w-2xl">
            Aspiring Full-Stack Developer and Computer Science undergraduate with a solid foundation in Data Structures and Algorithms, having solved 700+ problems on LeetCode. Proficient in building and deploying complex web applications, including a Blood Bank Management System and an AI-powered Voice Interviewer platform, with hands-on experience in AI model training and evaluation. Seeking opportunities to leverage technical skills and project experience in a dynamic development role.
          </p>
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/17i-Pi8Vw80kvw6BUFeLdpVeulU3FIE8S/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_20px_rgba(130,69,236,0.35)] hover:shadow-[0_0_30px_rgba(130,69,236,0.55)]"
            >
              Download CV
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-purple-300 py-3 px-8 rounded-full text-lg font-semibold transition duration-300 border border-purple-700/60 hover:bg-purple-900/30 hover:text-white"
            >
              Contact Me
            </button>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(130,69,236,0.35)]"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <img
              src={profileImage}
              alt="Divyanshu Jaiswal"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;