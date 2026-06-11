import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);

  }, [onFinish]);

  return (

<div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">

<svg
viewBox="46 0 300 300"
className="w-24 h-24 animate-pulse"
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

</div>

  );
};

export default Loader;