import { LINKS } from "../project"

export default function Footer() {

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.08] overflow-hidden">

      {/* Top content */}
      <div className="px-8 md:px-16 pt-20 pb-16 grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 items-start">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
          <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/20 border border-white/10 px-3 py-1.5 rounded-full w-fit">
            Web Design Agency
          </span>
          <p className="font-mono text-[0.78rem] leading-[1.9] text-white/30 max-w-[240px] mt-2">
            Transform ideas into impactful digital experiences that captivate your audience and fuel business growth.
          </p>
          <p className="font-mono text-[0.62rem] text-white/[0.18] mt-6">
            © {new Date().getFullYear()} THQ Studio. All rights reserved.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([title, links]) => (
          <div key={title}>
            <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/[0.18] mb-5 block">
              {title}
            </span>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-display text-[0.95rem] text-white/40 mb-2.5 no-underline cursor-none hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

  

      {/* Big text — solid fill, very low opacity, fades right */}
      <div className="px-12 pt-6 overflow-hidden">
        <p
          className="font-display font-extrabold whitespace-nowrap select-none pointer-events-none leading-[0.9] tracking-[-0.03em] text-white/[0.07]"
          style={{
            fontSize: "clamp(5rem, 17vw, 17rem)",
            WebkitMaskImage: "linear-gradient(to right, black 15%, transparent 70%)",
            maskImage: "linear-gradient(to right, black 15%, transparent 70%)",
          }}
        >
          THQ STUDIO.
        </p>
      </div>

    </footer>
  )
}
