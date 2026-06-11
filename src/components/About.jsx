import React from "react";
import Profile from "../assets/profile.jpeg";
import Resume from "../assets/Sujal_Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="text-white px-6 sm:px-10 md:px-16 lg:px-24 py-20"
    >
      {/* Section Title */}
      <h2
        className="text-center text-4xl font-bold mb-12"
        data-aos="fade-up"
      >
        About <span className="text-purple-400">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Profile Image */}
          <div
            className="flex justify-center w-full lg:w-1/2"
            data-aos="zoom-in"
          >
            <div
              className="bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-full p-3 shadow-xl
              transition duration-500 hover:scale-105"
            >
              <img
                src={Profile}
                alt="Ansh Sahu developer profile photo"
                loading="lazy"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"
            data-aos="fade-down"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Hello! I'm <span className="text-purple-400">Sujal</span>
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              I'm a passionate Electronics & Communication Engineering student with a strong interest in IoT, Embedded Systems, Industrial Automation, and VLSI Design.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              I enjoy building smart technology solutions, working with electronics and automation systems, and exploring emerging technologies. Currently, I am expanding my knowledge in VLSI and semiconductor technologies while gaining exposure to the rapidly evolving semiconductor industry.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              My goal is to develop innovative solutions, contribute to next-generation technologies, and build a successful career at the intersection of electronics, automation, and semiconductor engineering.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 text-2xl mt-2">

              <a
                href="https://github.com/sujal-projects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-purple-400 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/sujal-sisodiya-2b176430b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-purple-400 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://instagram.com/electronic_hub24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="hover:text-purple-400 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>

            </div>

            {/* Resume */}
            <a
              href={Resume}
              download="Sujal_Resume.pdf"
              className="mt-4 px-6 py-3 bg-white/10 backdrop-blur-md 
              border border-white/20 hover:bg-purple-600
              transition duration-300 rounded-lg 
              w-fit mx-auto lg:mx-0
              hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;