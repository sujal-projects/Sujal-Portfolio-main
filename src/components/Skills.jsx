import React from "react";

/* SVG ICONS */

const ReactNativeIcon = () => (
  <svg viewBox="0 0 841 595" className="w-20 h-20" aria-label="React Native icon">
    <g fill="none" stroke="#61DAFB" strokeWidth="30">
      <ellipse cx="420" cy="296" rx="250" ry="100"/>
      <ellipse cx="420" cy="296" rx="250" ry="100" transform="rotate(60 420 296)"/>
      <ellipse cx="420" cy="296" rx="250" ry="100" transform="rotate(120 420 296)"/>
    </g>

    {/* Center difference */}
    <circle cx="420" cy="296" r="40" fill="#61DAFB"/>

    {/* Mobile shape inside */}
    <rect
      x="390"
      y="250"
      width="60"
      height="90"
      rx="10"
      fill="black"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 841 595" className="w-20 h-20" aria-label="C++ icon">
  <polygon 
    points="420,70 670,183 670,409 420,522 170,409 170,183" 
    fill="none" 
    stroke="#00599C" 
    strokeWidth="25" 
    strokeLinejoin="round"
  />
  <polygon 
    points="420,100 640,200 640,392 420,492 200,392 200,200" 
    fill="none" 
    stroke="#659AD2" 
    strokeWidth="10" 
    strokeLinejoin="round"
    opacity="0.7"
  />
  <path 
    d="M 410,195 A 105,105 0 1,0 410,401" 
    fill="none" 
    stroke="#00599C" 
    strokeWidth="45" 
    strokeLinecap="round"
  />
  <path 
    d="M 490,298 L 570,298 M 530,258 L 530,338" 
    fill="none" 
    stroke="#659AD2" 
    strokeWidth="22" 
    strokeLinecap="round"
  />
  <path 
    d="M 600,298 L 680,298 M 640,258 L 640,338" 
    fill="none" 
    stroke="#659AD2" 
    strokeWidth="22" 
    strokeLinecap="round"
  />
</svg>

);

const JSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-20 h-20" aria-label="JavaScript icon">
    <rect width="128" height="128" fill="#F7DF1E"/>
    <text x="50%" y="70%" textAnchor="middle" fontSize="60" fontWeight="bold">JS</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 841 595" className="w-20 h-20" aria-label="React icon">
    <g fill="none" stroke="#61DAFB" strokeWidth="30">
      <ellipse cx="420" cy="296" rx="250" ry="100"/>
      <ellipse cx="420" cy="296" rx="250" ry="100" transform="rotate(60 420 296)"/>
      <ellipse cx="420" cy="296" rx="250" ry="100" transform="rotate(120 420 296)"/>
    </g>
    <circle cx="420" cy="296" r="40" fill="#61DAFB"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 256 296" className="w-20 h-20" aria-label="NodeJS icon">
    <path fill="#83CD29" d="M128 0l128 74v148l-128 74L0 222V74z"/>
    <text x="128" y="180" textAnchor="middle" fontSize="90" fill="white" fontWeight="bold">
      node
    </text>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 400 120" className="w-56 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* Express text (thin, clean) */}
    <text
      x="40"
      y="75"
      fill="white"
      fontSize="54"
      fontWeight="300"
      fontFamily="Helvetica, Arial, sans-serif"
      letterSpacing="1"
    >
      Express
    </text>

    {/* JS Yellow Box */}
    <rect x="260" y="20" width="80" height="70" fill="#F7DF1E" />

    {/* JS Text */}
    <text
      x="270"
      y="75"
      fill="black"
      fontSize="48"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      JS
    </text>

  </svg>
);
const NextJsIcon = () => (
  <svg viewBox="0 0 320 100" className="w-44 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
    
    {/* N */}
    <path d="M20 80 V20 L70 80 V20" stroke="white" strokeWidth="3" fill="none"/>

    {/* E */}
    <path d="M90 20 V80 M90 20 H140 M90 50 H130 M90 80 H140" stroke="white" strokeWidth="3" fill="none"/>

    {/* X */}
    <path d="M150 20 L200 80 M200 20 L150 80" stroke="white" strokeWidth="3" fill="none"/>

    {/* T */}
    <path d="M210 20 H260 M235 20 V80" stroke="white" strokeWidth="3" fill="none"/>

    {/* .JS */}
    <text x="270" y="65" fontSize="28" fill="white" fontFamily="Arial, sans-serif">
      .JS
    </text>

  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 200 120" className="w-40 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* Leaf shape */}
    <path
      d="M100 10 
         C120 40, 120 80, 100 110 
         C80 80, 80 40, 100 10 Z"
      fill="#47A248"
    />

    {/* Leaf center line */}
    <path
      d="M100 20 L100 105"
      stroke="#2E7D32"
      strokeWidth="2"
    />

  </svg>
);

const skills = [
  { name: "React Native", icon: <ReactNativeIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Node JS", icon: <NodeIcon /> },
  { name: "Express JS", icon: <ExpressIcon /> },
  { name: "Next JS", icon: <NextJsIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white px-6 md:px-16 py-24"
    >

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-semibold text-center mb-20"
        data-aos="fade-up"
      >
        My <span className="text-purple-400">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">

        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="flex flex-col items-center gap-4
            p-6 rounded-xl
            bg-white/5 border border-white/10
            transition duration-300
            hover:scale-110 hover:border-purple-500
            hover:bg-white/10"
          >

            {skill.icon}

            <p className="text-zinc-300 text-lg">
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;