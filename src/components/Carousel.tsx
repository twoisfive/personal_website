import { motion } from "motion/react"
import { useState } from "react"
import buff_dude from "/src/assets/buff_dude.jpg"
import annabell from "/src/assets/Annabell.png"
import henoke from "/src/assets/Henoke.png"
import wizard from "/src/assets/wizard.png"
import peet from "/src/assets/peet.png"
import donjean from "/src/assets/donjean.png"

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const images = [buff_dude, annabell, henoke, wizard, peet, donjean]

    const  getIndex = (offset: number) => (
        (current + offset +images.length) % images.length
    )

    const variants = {
        left: {
            scale: 0.8,
            opacity: 0.4,
            x: -150,
            zIndex: 1
        },
        right: {
            scale: 0.8,
            opacity: 0.4,
            x: 150,
            zIndex: 1
        },
        center:{
            scale: 1,
            opacity: 1,
            x: 0,
            zIndex: 2
        }
    }
    const visible = [
    { role: "left", index: getIndex(-1) },
    { role: "center", index: getIndex(0) },
    { role: "right", index: getIndex(1) },
    ]

    return(
        <>
            
            <div className="relative flex items-center justify-center h-[200px] md:h-[400px] min-w-0 overflow-hidden">
                <button className="absolute right-0 z-10"
                onClick={() => setCurrent(c => c + 1)}>→</button> 
                <button className="absolute left-0 z-10"
                onClick={() => setCurrent(c => c - 1)}>←</button>
                {visible.map(({ role, index }) => (
                    <motion.div
                    initial={false} 
                    key={images[index]}
                    variants={variants}
                    animate={role}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-[150px] md:w-[300px] aspect-[4/5]"
                    >
                        <img src={images[index]} className="w-full h-full object-cover rounded-xl shadow-lg"/>
                    </motion.div>
                ))}
            </div>       
        </>
    )
}