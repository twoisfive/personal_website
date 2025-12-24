//import atticus from "/src/assets/atticus.jpg"
import { forwardRef } from "react"
import pp from "/src/assets/faaiz_pp.png"
import animation from "/src/assets/kasep_animation.gif"
import Carousel from "../components/Carousel"

const Passion = forwardRef<HTMLElement>(({}, ref) => {
    return(
        <section ref={ref} className="bg-black pt-20 pb-30 md:py-40 px-10 md:px-60">
            <h1 className="text-center hero-text text-5xl">My Interests</h1>
            <div className="mt-20 flex flex-col gap-20">
                <div className="flex flex-row justify-between min-w-0">
                    <div>
                        <h2 className="sub-heading">check out my <span className="italic">YOUTUBE!</span></h2>
                        <p>You already saw some of my stuff earlier, click on the icon to go to my page!</p>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@faaizDhewanto" target="_blank">
                        <img src={pp} />
                        </a>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-[3fr_2fr]">
                    <div className="pr-20">
                        <img src={animation} />
                    </div>
                    <div>
                        <h2 className="sub-heading">Illustration & a bit of Animation</h2>
                        <p>I do traditional and digital illustration. I tried animation a while back, 
                        and even though its not my thing, im still really proud of it! in the left is 
                        my animation for a school project and below are some of my illustrations</p>
                    </div>
                </div>
                <Carousel />
            </div>

        </section>
    )
})

export default Passion