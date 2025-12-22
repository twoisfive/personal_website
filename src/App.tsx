import { useRef, useEffect } from 'react'
import { useMotionValue, MotionValue } from 'motion/react'
import './App.css'
import Lenis from "@studio-freight/lenis"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Footer from './pages/Footer'
import Passion from "./pages/Passion"


function App() {
  const lenisRef = useRef<Lenis | null>(null)

  const aboutRef = useRef<HTMLElement>(null)
  const interestsRef = useRef<HTMLElement>(null)

  const scrollY = useMotionValue(0)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time);
      scrollY.set(lenis.scroll); // update MotionValue
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  const scrollToSection = (section: "about" | "interests") => {
    
    const target = {
      about: aboutRef.current,
      interests: interestsRef.current,
    }[section]

    if (!target || !lenisRef.current) return


    lenisRef.current.scrollTo(target)
  }

  
  return (
    <>
      <Hero scrollY={scrollY} scrollToSection={scrollToSection} />
      <About ref={aboutRef}/>
      <Passion ref={interestsRef}/>
      <Footer />
    </>
  )
}

export default App
