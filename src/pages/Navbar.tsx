

interface NavProps {
  onNavigate: (section: "about" | "interests") => void
}

export default function Navbar( { onNavigate }: NavProps) {
    return(
        <div className="w-full flex flex-row justify-between items-start h-20">
            <p className="text-xl">Twoisfive</p>
            <div className="flex flex-row gap-5">
                <button onClick={() => onNavigate("about")} 
                className="nav-btn zinc-950/90">ABOUT</button>
                <button onClick={() => onNavigate("interests")} 
                className="nav-btn zinc-950/90">INTERESTS</button>
            </div>
            <a href="mailto:faaiz.dhewantos@gmail.com" target="_blank" className="bg-white rounded-md">
                <button className="text-black">Contact Me</button>
            </a>
        </div>
    )
}