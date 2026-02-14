'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GolfCTA() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/golf-cta.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-playfair tracking-wide">
          Membership by Invitation
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-neutral-200">
          The GCC Estate is reserved for those who value tradition,
          discretion, and the enduring spirit of the game.
          Enquiries are welcomed with consideration.
        </p>

        <Link
          href="https://www.garstanggolf.co.uk/"
          className="inline-block mt-12 border border-white px-10 py-4 text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black"
          target="_blank"
        >
          VISIT GARSTANG GOLF
        </Link>
      </motion.div>
    </section>
  )
}
