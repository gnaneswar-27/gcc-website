'use client'

import { motion } from 'framer-motion'

export default function GolfHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/golf-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-6"
      >
        <h1 className="text-4xl md:text-7xl font-playfair tracking-wide">
          The Championship Course
        </h1>

        <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase">
          A Landscape of Strategy & Serenity
        </p>
      </motion.div>
    </section>
  )
}
