'use client'

import { motion } from 'framer-motion'

export default function EventsHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/events/events-hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-playfair">
          Events at GCC
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Gather, celebrate, and create memories within timeless surroundings.
        </p>
      </motion.div>
    </section>
  )
}
