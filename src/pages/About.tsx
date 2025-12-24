import pic from "/src/assets/portrait.jpg"
import { useScroll } from "motion/react"
import { useRef, forwardRef } from "react"
import AnimatedWord from "../components/AnimatedWord";


const About = forwardRef<HTMLElement>((props, ref) => {
    const textRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"], // start → end of the target
    })
    
    const text = `According to all known laws of aviation, there is no way a bee should be able to fly. 
Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway 
because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. 
Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! 
Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. 
I'll pick you up. Looking sharp.`

    const words = text.split(" ")

    return(
        <section ref={ref}   className="
            flex justify-center py-20 md:pt-40 md:pb-40
            w-full
            bg-[url('/src/assets/texture_dark.png')] bg-cover bg-center min-w-0
        "
        >
            <div className="flex flex-col md:grid md:grid-cols-2 justify-center w-4/5 min-w-0">
                <div className="w-3/5 h-fit min-w-0">
                    <img  src={pic} className="w-full rounded-xl" ></img>
                    <h2 className="text-end text-4xl font-bold mt-10">ABOUT ME</h2>
                </div>
                <div className="max-md:mt-10" ref={textRef}>
                    {words.map((word: string, i: number) =>(
                        <AnimatedWord
                            key={i}
                            word={word}
                            scrollYProgress={scrollYProgress}
                            start={i / words.length}
                            end={(i + 3) / words.length}
                        />
                    ))}                   
                </div>         
            </div>   
        </section>
    )
})

export default About