'use client'

import { motion } from 'framer-motion'

export default function WeddingsHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/weddings//wedding-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-playfair">
          Weddings at GCC
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A timeless estate setting for a life beautifully begun.
        </p>
      </motion.div>
    </section>
  )
}
