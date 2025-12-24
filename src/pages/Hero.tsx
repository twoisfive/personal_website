import { motion, useSpring , useTransform, MotionValue } from "motion/react"
import { } from "react"

interface HeroProps {
  scrollY: MotionValue<number>; // <- type your prop
}

export default function Hero({ scrollY }: HeroProps) {
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
            <div  className="relative z-10 p-10 rounded-b-xl">
                
                <div className="h-8 md:h-10" />
                <motion.div style={{ y }} className="xl:grid xl:grid-cols-2 w-full pt-5">
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 2 }}  
                    className="font-bold text-4xl text-center md:text-start md:text-6xl lg:text-7xl hero-text max-lg:mb-5">
                        HI THERE ! MY NAME IS FAAIZ
                    </motion.h1>
                    <div className="flex flex-row justify-center md:max-lg:justify-start gap-5 max-lg:mb-5">
                        <iframe
                            className="rounded-md w-56 h-100"
                            src="https://www.youtube.com/embed/L-K_fFnd8VA?autoplay=1&mute=1&playsinline=1"
                            allow="autoplay; encrypted-media"
                        >
                        </iframe>
                        <iframe
                            className="rounded-md w-56 h-100 max-sm:fixed max-sm:hidden"
                            src="https://www.youtube.com/embed/bSmr0Kq5nc0?autoplay=1&mute=1&playsinline=1"
                            allow="autoplay; encrypted-media"
                        >
                        </iframe>              
                    </div>
                    <p className="text-xl pt-4 max-md:text-center">{shortDesc}</p>
                    <div className="text-right  pt-4 pr-20">
                        <a href="https://www.youtube.com/@faaizDhewanto" target="_blank"
                        className="text-xl max-lg: hidden">check out more --{'>'}</a>
                        <p className="text-md mt-8 max-md:hidden">scroll down</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}