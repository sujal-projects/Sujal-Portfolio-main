import { useState } from "react"
import udbhav from "../assets/udbhav2026.png"
import pitchperfect from "../assets/pitchperfect.jpeg"
import phishart from "../assets/PHISHART.jpeg"
import rntu from "../assets/RNTU.jpeg"
import comingsoon from "../assets/comingsoon.jpeg"
import codecraft from "../assets/code_craft.jpeg"
import cyberquiz from "../assets/cyber_quiz.jpeg"
import poster2026 from "../assets/poster_making_2026.jpeg"
import hackmake from "../assets/hack&make.jpeg"
import sciencemodel from "../assets/science_exhibition.jpeg"
import opensource from "../assets/opensource.png"

const achievements = [
  { title:"🏆 Pitch Perfect Winner", org:"E-Cell LNCTE", date:"November 2025", img:pitchperfect },
  { title:"🥇 Code Craft Winner", org:"Millenium College of Technology", date:"April 2026", img:codecraft },
  { title:"🏆 RNTU Winner", org:"RNTU University", date:"September 2025", img:rntu },
  { title:"🥇 Science Model Winner", org:"OCT", date:"March 2026", img:sciencemodel },
  
  { title:"🏆 Hack&Make 2026 Finalist", org:"Startup MP", date:"January 2026", img:hackmake },
  { title:"🏆 Udbhav 2026 Finalist", org:"SAGE University Indore", date:"April 2026", img:udbhav },
  { title:"🏆 Open Source Contributer", org:"Elite Coders", date:"January 2026", img:opensource },
  { title:"🥇 Cyber Quiz Winner", org:"Cyber Club OCT", date:"October 2025", img:cyberquiz },

  { title:"🥇 1x PhishArt Winner", org:"Cyber Club OCT", date:"April 2025", img:phishart },
  { title:"🏆 2x Phishart Winner", org:"Cyber Club OCT", date:"October 2025", img:poster2026 },
  { title:"🏆 Coming Soon", org:"Coming Soon", date:"Coming Soon", img:comingsoon },
  { title:"🏆 Coming Soon", org:"Coming Soon", date:"Coming Soon", img:comingsoon },
]

export default function Achievements(){

  const [page,setPage] = useState(0)

  const visibleCards = achievements.slice(page*4, page*4+4)

  return (

<section
id="achievements"
className="text-white px-6 md:px-16 py-24"
>

<div className="max-w-7xl mx-auto flex flex-col items-center gap-20">

{/* Title */}

<h2
className="text-center text-4xl md:text-5xl font-semibold"
data-aos="fade-up"
>
My <span className="text-purple-400">Achievements</span>
</h2>


{/* Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-items-center">

{visibleCards.map((item,i)=>(

<div
key={i}
data-aos="zoom-in"
className="w-full max-w-[280px]
rounded-xl border border-white/20
bg-white/10 backdrop-blur-lg
shadow-lg overflow-hidden
transition duration-300
hover:scale-105 hover:border-purple-500"
>

{item.img && (

<img
src={item.img}
alt={item.title}
loading="lazy"
className="w-full h-44 object-cover"
/>

)}

<div className="flex flex-col gap-2 p-5">

<h3 className="font-semibold text-lg text-white">
{item.title}
</h3>

{item.org && (

<p className="text-purple-400 text-sm">
{item.org}
</p>

)}

{item.date && (

<p className="text-gray-400 text-sm mb-2">
{item.date}
</p>

)}

{item.img && (

<a
href={item.img}
target="_blank"
rel="noopener noreferrer"
className="mt-2 inline-block
bg-indigo-500 text-white
px-4 py-2 rounded-md text-sm
hover:bg-indigo-600
transition duration-300
text-center hover:scale-105"
>

View Achievement

</a>

)}

</div>

</div>

))}

</div>


{/* Pagination */}

<div className="flex justify-center gap-6 mt-10">

<button
onClick={()=>setPage(page-1)}
disabled={page===0}
className="w-10 h-10 sm:w-12 sm:h-12
rounded-full bg-white/20 backdrop-blur
hover:bg-purple-600 transition
text-white cursor-pointer
flex items-center justify-center
disabled:opacity-40 disabled:cursor-not-allowed"
>
‹
</button>

<button
onClick={()=>setPage(page+1)}
disabled={page===2}
className="w-10 h-10 sm:w-12 sm:h-12
rounded-full bg-white/20 backdrop-blur
hover:bg-purple-600 transition
text-white cursor-pointer
flex items-center justify-center
disabled:opacity-40 disabled:cursor-not-allowed"
>
›
</button>

</div>

</div>

</section>

  )

}