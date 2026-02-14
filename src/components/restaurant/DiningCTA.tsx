'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DiningCTA() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dining-cta.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-6 max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-playfair tracking-wide">
          Reserve Your Table
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-neutral-200">
          Experience refined country dining within the warmth of the manor.
          Reservations are welcomed daily.
        </p>

        <Link
          href="#"
          className="inline-block mt-12 bg-[#c6a65a] text-white px-10 py-4 text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#b8954d]"
        >
          Make a Reservation
        </Link>
      </motion.div>
    </section>
  )
}
