import { useState } from "react"

interface NavProps {
  onNavigate: (section: "about" | "interests") => void
}

export default function Navbar( { onNavigate }: NavProps) {
    const [isOpen, setIsOpen] = useState(false)

    const navStyle = isOpen 
    ? `fixed max-md:pt-10 max-md:pb-4 md:p-5  z-11 w-full  flex flex-col justify-center 
    md:flex-row md:justify-between md:items-center backdrop-blur-md`
    : `max-md:hidden fixed max-md:pt-10  md:p-5  z-11 w-full  flex flex-col justify-center 
    md:flex-row md:justify-between md:items-center backdrop-blur-md`

    const flipNav = () => setIsOpen(prev => (!prev))

    return(
        <>
            <button className="fixed top-4 right-4 md:hidden z-20" onClick={flipNav}>III</button>
            <div className={navStyle}>
                <button onClick={() => onNavigate("about")} 
                    className="text-md md:text-xl">Twoisfive</button>
                <div className="flex flex-col md:flex-row md:gap-5">
                    <button onClick={() => onNavigate("about")} 
                    className="nav-btn zinc-950/90 md:py-2 md:px-4">ABOUT</button>
                    <button onClick={() => onNavigate("interests")} 
                    className="nav-btn zinc-950/90 md:py-2 md:px-4">INTERESTS</button>
                </div>
                <a href="mailto:faaiz.dhewantos@gmail.com" target="_blank" className="flex justify-center md:bg-white md:rounded-md">
                    <button className="text-white md:text-black md:py-2 md:px-4">Contact Me</button>
                </a>
            </div>
        </>
    )
}