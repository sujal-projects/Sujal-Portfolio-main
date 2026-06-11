import React from "react";

const Footer = () => {

  const year = new Date().getFullYear();

  return (

<footer
data-aos="fade-up"
className="mt-20
bg-white/5 backdrop-blur-xl
border-t border-white/10
text-white rounded-3xl
flex flex-col items-center text-center"
>

{/* TOP SECTION */}

<div className="max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center gap-6">

<h3 className="text-2xl md:text-3xl font-semibold">
Thanks <span className="text-purple-400">for Visiting</span> 🙌
</h3>

<p className="text-zinc-400 max-w-xl leading-relaxed">
I love building clean and user-friendly digital experiences.
Let's connect and create something impactful together.
</p>

</div>


{/* SOCIAL LINKS */}

<div
data-aos="fade-up"
data-aos-delay="200"
className="flex flex-wrap justify-center gap-10
text-zinc-400 text-lg"
>

<a
href="https://github.com/sujal-projects"
target="_blank"
rel="noreferrer"
className="flex items-center gap-2
hover:text-purple-400
transition duration-300
hover:scale-110"
>
<i className="fab fa-github"></i>
<span>Github</span>
</a>

<a
href="https://linkedin.com/in/sujal-sisodiya-2b176430b"
target="_blank"
rel="noreferrer"
className="flex items-center gap-2
hover:text-purple-400
transition duration-300
hover:scale-110"
>
<i className="fab fa-linkedin"></i>
<span>LinkedIn</span>
</a>

<a
href="https://instagram.com/electronic_hub24"
target="_blank"
rel="noreferrer"
className="flex items-center gap-2
hover:text-purple-400
transition duration-300
hover:scale-110"
>
<i className="fab fa-instagram"></i>
<span>Instagram</span>
</a>

</div>


{/* DIVIDER */}

<div className="w-full max-w-4xl h-px bg-white/10 mt-12"></div>


{/* BOTTOM */}

<div
data-aos="fade-up"
data-aos-delay="300"
className="text-center text-zinc-500 text-sm py-6"
>

© {year} Sujal Sisodiya • Built with React + Tailwind

</div>

</footer>

  );
};

export default Footer;