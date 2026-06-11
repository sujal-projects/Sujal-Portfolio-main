import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 text-white"
    >

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-semibold tracking-wide
        opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
        style={{ animationDelay: "0.2s" }}
      >
        Hi, I'm <span className="text-purple-400">Sujal</span>
      </h1>

      {/* Typewriter */}
      <h2
        className="text-xl md:text-2xl font-medium text-zinc-300
        opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
        style={{ animationDelay: "0.4s" }}
      >
        <Typewriter
          words={[
            "IOT Developer",
            "Embedded Systems Engineer",
            "Robotics & Automation Enthusiast",
            "PLC & SCADA Programmer",
            "Drone Developer",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h2>

      {/* Description */}
      <p
        className="max-w-2xl text-zinc-400 text-lg leading-relaxed
        opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
        style={{ animationDelay: "0.6s" }}
      >
        IoT Developer and Automation Enthusiast with hands-on experience in Embedded Systems, PLC-SCADA, and Drone Technology. Passionate about designing smart systems that solve real-world challenges.
      </p>

      {/* Buttons */}
      <div
        className="flex gap-6 mt-4 flex-wrap justify-center
        opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
        style={{ animationDelay: "0.8s" }}
      >
        <a
  href="#projects"
  className="bg-purple-600 hover:bg-purple-700
  rounded-lg transition duration-300 font-medium
  hover:scale-105 active:scale-95
  px-6 py-3 inline-block"
>
  View Projects
</a>

<a
  href="#contact"
  className="border border-purple-400 text-purple-300
  hover:bg-purple-500/10 rounded-lg transition duration-300
  font-medium hover:scale-105 active:scale-95
  px-6 py-3 inline-block"
>
  Contact Me
</a>
      </div>

    </section>
  );
};

export default Hero;