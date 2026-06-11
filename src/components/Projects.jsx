import React, { useRef } from "react";
import wattpulse from "../assets/watt_pulse_screen_recording.mp4";
import malldesk from "../assets/malldesk.mp4";
import ecommerce from "../assets/ecommerce.mp4";

const projects = [
  {
    title: "Jeevan Dan",
    description:
      "Watt-Pulse is an innovative energy monitoring dashboard built with NextJs, designed to help users track and optimize their energy consumption. It features a sleek and intuitive interface, providing real-time insights and analytics with help of sensors SAC-013 & YF-S201 to promote energy efficiency and sustainability.",
    video: wattpulse,
    link: "https://github.com/anshsahu-01/watt_pulse",
  },
  {
    title: "Mall-Desk",
    description:
      "I built the project using Next.js, Framer Motion, GSAP, and a modular component-based architecture focused on creating a cinematic presentation-style experience.",
    video: malldesk,
    link: "https://github.com/anshsahu-01/mall_desk",
    reverse: true,
  },
  {
    title: "Forever",
    description:
      "Forever is an e-commerce app where a person can purchase clothes made with Expo, React Native, Nativewind CSS. Learned a lot by this project about how the app development works in real life, got great expirience by working on this project.",
    video: ecommerce,
    link: "https://github.com/anshsahu-01/e-commerce-app",
  },
];


// NORMAL PROJECT CARD (WEBSITE PROJECTS)
const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  return (
    <div
      className={`flex flex-col lg:flex-row ${
        project.reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-12 py-16`}
    >
      {/* Text */}
      <div className="flex-1 text-center lg:text-left flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-purple-400">
          {project.title}
        </h2>

        <p className="text-zinc-300">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-purple-600 flex items-center justify-center"
        >
          <i className="fas fa-code text-white"></i>
        </a>
      </div>

      {/* Landscape Video */}
      <div className="flex-1 flex justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="w-full max-w-[600px] aspect-video rounded-4xl  border border-white/10 shadow-xl">
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover hover:scale-[1.03] transition duration-500"
              onMouseEnter={() => videoRef.current?.play()}
              onMouseLeave={() => videoRef.current?.pause()}
            />
          </div>
        </a>
      </div>
    </div>
  );
};



//  MOBILE PROJECT CARD (VERTICAL VIDEO)
const MobileProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
      
      {/* Text */}
      <div className="flex-1 text-center lg:text-left flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-purple-400">
          {project.title}
        </h2>

        <p className="text-zinc-300">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-purple-600 flex items-center justify-center"
        >
          <i className="fas fa-code text-white"></i>
        </a>
      </div>

      {/* Portrait Video */}
      <div className="flex-1 flex justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="w-[300px] h-[680px]  overflow-hidden border border-white/10 shadow-xl bg-black">
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onMouseEnter={() => videoRef.current?.play()}
              onMouseLeave={() => videoRef.current?.pause()}
            />
          </div>
        </a>
      </div>

    </div>
  );
};



// MAIN COMPONENT
const Projects = () => {
  return (
    <section className="text-white px-6 md:px-16 py-24 flex flex-col gap-20">
      
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-20">
        My <span className="text-purple-400">Projects</span>
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {projects.map((project, index) => {
          // 👇 ONLY 3rd PROJECT MOBILE
          if (index === 2) {
            return <MobileProjectCard key={index} project={project} />;
          }
          return <ProjectCard key={index} project={project} />;
        })}
      </div>

    </section>
  );
};

export default Projects;