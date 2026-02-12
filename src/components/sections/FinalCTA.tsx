'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-deep-green)] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl mb-12"
        >
          Plan Your Visit
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <Link
            href="/stay"
            className="border border-white px-8 py-3 tracking-[0.2em] text-sm uppercase hover:bg-white hover:text-[var(--color-deep-green)] transition-all duration-500"
          >
            Book a Stay
          </Link>

          <Link
            href="/golf"
            className="border border-white px-8 py-3 tracking-[0.2em] text-sm uppercase hover:bg-white hover:text-[var(--color-deep-green)] transition-all duration-500"
          >
            Enquire About Golf
          </Link>

        </div>

      </div>
    </section>
  )
}
