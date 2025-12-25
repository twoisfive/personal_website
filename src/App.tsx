import { useRef, useEffect } from 'react'
import { useMotionValue } from 'motion/react'
import './App.css'
import Lenis from 'lenis'
import Hero from "./pages/Hero"
import About from "./pages/About"
import Footer from './pages/Footer'
import Passion from "./pages/Passion"
import Navbar from './pages/Navbar'


function App() {
  const lenisRef = useRef<Lenis | null>(null)

  const aboutRef = useRef<HTMLElement>(null)
  const interestsRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)

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

  const scrollToSection = (section: "hero" | "about" | "interests") => {
    
    const target = {
      hero: heroRef.current,
      about: aboutRef.current,
      interests: interestsRef.current,
    }[section]

    if (!target || !lenisRef.current) return


    lenisRef.current.scrollTo(target)
  }

  
  return (
    <>
      <Navbar onNavigate={scrollToSection}/>
      <Hero ref={heroRef} scrollY={scrollY} />
      <About ref={aboutRef}/>
      <Passion ref={interestsRef}/>
      <Footer />
    </>
  )
}

export default App
