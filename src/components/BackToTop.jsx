import { useState, useEffect } from "react";

const BackToTop = () => {

  const [show,setShow] = useState(false);

  useEffect(()=>{

    const handleScroll = () => {

      if(window.scrollY > 400){
        setShow(true);
      } else{
        setShow(false);
      }

    };

    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);

  },[]);


  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  return (

<button
onClick={scrollTop}
className={`fixed bottom-8 right-8 z-50
bg-purple-600 text-white
w-12 h-12 rounded-full
flex items-center justify-center
shadow-lg
hover:bg-purple-700
transition-all duration-300
${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>

<i className="fas fa-arrow-up"></i>

</button>

  );

};

export default BackToTop;