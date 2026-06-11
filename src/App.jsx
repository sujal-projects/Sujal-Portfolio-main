import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Achievements from './components/Achievements.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Loader from "./components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Background */}
      <div className="fixed inset-0 -z-10 w-full overflow-hidden
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Navbar />
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Achievements />
      <BackToTop />
      <hr />
      <Contact />
      <Footer />

    </>
  )
}

export default App