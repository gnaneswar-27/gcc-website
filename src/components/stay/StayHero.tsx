'use client'

import { motion } from 'framer-motion'

export default function StayHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stay-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-playfair tracking-wide">
          Rooms & Suites
        </h1>
        <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase">
          Refined comfort overlooking the estate
        </p>
      </motion.div>
    </section>
  )
}
