import Navbar from "../components/layout/Navbar"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import { useState, useEffect } from "react"
import Marquee from "../components/ui/Marquee"
import DottedBg from "../components/layout/DottedBg"
import { motion, AnimatePresence } from "framer-motion"
import { motionConfig } from "../lib/motion"

const PHRASE_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

export default function Hero() {
  const phrases = ["Digital-First Brands.", "Innovation-Driven Teams.", "Brands That Scale."]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(id)
  }, [phrases.length])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      <DottedBg />
      <div className="flex flex-col items-center gap-y-16">
        <div className="flex flex-col gap-30 w-full justify-center">
          <Navbar />
          <div className="text-xl mt-4 flex flex-col gap-4 justify-center items-center">
            <Badge name="LEADING WEB DESIGN AGENCY IN DENMARK" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionConfig.duration, delay: 0.25 }}
              className="text-4xl font-display font-normal bg-gradient-to-r from-[#AA771C] via-[#FFED94] to-[#AA771C] bg-clip-text text-transparent md:text-5xl text-center"
            >
              Award-Winning Agency
            </motion.h1>
            <div className="h-14 w-full overflow-hidden md:h-20 relative">
              <AnimatePresence initial={false}>
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={PHRASE_TRANSITION}
                  className="absolute inset-0 flex items-center justify-center text-2xl font-serif font-bold italic text-center md:text-6xl text-white"
                >
                  <span className="text-white">For</span> {phrases[index]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: motionConfig.duration, delay: 0.7 }}
            className="mt-3 flex w-fit items-center justify-center self-center gap-4 flex-wrap md:flex-nowrap"
          >
            <Button variant="primary">Free strategy call</Button>
            <Button variant="secondary">See our work</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: motionConfig.durationLong, delay: 1 }}
        >
          <Marquee />
        </motion.div>
      </div>
    </section>
  )
}