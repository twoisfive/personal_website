import Navbar from "./Navbar.tsx"
import { motion, useSpring , useTransform, MotionValue } from "motion/react"
import { } from "react"

interface HeroProps {
  scrollY: MotionValue<number>; // <- type your prop
  scrollToSection: (section: "about" | "interests") => void
}

export default function Hero({ scrollY, scrollToSection }: HeroProps) {
    const start = 100 
    const end = 600

    const rawY = useTransform(scrollY, [start, end], [0, -end + start])
    const y = useSpring(rawY, { stiffness: 100, damping: 30 })

    const shortDesc = `I’m a forestry turned computer science student interested
                        in whatever feels right at the moment. I like drawing, making vids,
                        and recently programming's been real fun too`
    return(
        <section className="relative bg-[url('/src/assets/forest-bg.jpg')] bg-cover bg-center
        after:content-[''] after:absolute after:inset-0 after:bg-zinc-950/90">
            <motion.div style={{ y }} className="relative z-10 p-10 rounded-b-xl">
                <Navbar onNavigate={scrollToSection} />
                <div className="grid grid-cols-2 w-full pt-5">
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 2 }}  
                    className="font-bold text-7xl hero-text">
                        HI THERE ! MY NAME IS FAAIZ
                    </motion.h1>
                    <div className="flex flex-row justify-center gap-5">
                        <iframe
                            className="rounded-md"
                            width="225"
                            height="400"
                            src="https://www.youtube.com/embed/L-K_fFnd8VA?autoplay=1&mute=1&playsinline=1"
                            allow="autoplay; encrypted-media"
                        >
                        </iframe>
                        <iframe
                            className="rounded-md"
                            width="225"
                            height="400"
                            src="https://www.youtube.com/embed/bSmr0Kq5nc0?autoplay=1&mute=1&playsinline=1"
                            allow="autoplay; encrypted-media"
                        >
                        </iframe>              
                    </div>
                    <p className="text-xl pt-4">{shortDesc}</p>
                    <div className="text-right  pt-4 pr-20">
                        <a href="https://www.youtube.com/@faaizDhewanto" target="_blank"
                        className="text-xl">check out more --{'>'}</a>
                        <p className="text-md mt-8">scroll down</p>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}