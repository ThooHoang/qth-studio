import Button from "../ui/Button"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-sans"><span className="font-display font-bold">QTH</span>STUDIO.</h1>
      <nav className="flex items-center justify-center bg-[#1a1a1a]/50 border border-white/10 rounded-full p-1.5" aria-label="Navbar">
        <ul className="flex items-center justify-between gap-2">
            <li>
                <a href="#works" className="font-display font-medium text-[#f0ede8]  inline-flex items-center justify-center hover:bg-white/10 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out  ">
                    Work
                </a>
            </li>
            <li>
                <a href="#services" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] hover:bg-white/10 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                    Services
                </a>
            </li>
            <li>
                <a href="#about" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] hover:bg-white/10 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                    About
                </a>
            </li>
            <li>
                <a href="#contact" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] hover:bg-white/10 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                    Contact
                </a>
            </li>
        </ul>
      </nav>
      <Button>Hire Us</Button>
    </header>
  )
}