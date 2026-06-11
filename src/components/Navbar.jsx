import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav
      className="w-full h-20 flex items-center justify-between
      fixed top-0 left-0 z-50 px-[10%]
      bg-white/5 backdrop-blur-md border-b border-purple-500/20"
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2 cursor-pointer">
        <svg
          viewBox="46 00 300 300"
          className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160 50 L260 240 Q266 252 254 252 H216
               Q208 252 204 244 L160 160 L116 244
               Q112 252 104 252 H66 Q54 252 60 240 Z"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="26"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <path
            d="M132 180 H188"
            stroke="#a78bfa"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-white">
        {menu.map((item) => (
          <li
            key={item.name}
            className="relative cursor-pointer hover:text-purple-400
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-purple-400
            hover:after:w-full after:transition-all after:duration-300"
          >
            <a href={`#${item.id}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        className="md:hidden cursor-pointer text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-full
          bg-black/90 backdrop-blur-md
          flex flex-col items-center gap-8 py-10
          text-white text-lg md:hidden"
        >
          {menu.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="cursor-pointer hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;