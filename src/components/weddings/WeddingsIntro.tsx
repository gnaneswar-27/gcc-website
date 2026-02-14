'use client'

import { motion } from 'framer-motion'

export default function WeddingsIntro() {
  return (
    <section className="py-28 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
          A Setting of Grace & Heritage
        </h2>

        <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
          Exchange vows beneath centuries-old trees, celebrate within
          candlelit halls, and gather your loved ones in a place where
          heritage and romance intertwine.  
          Our estate offers refined elegance, privacy, and the charm
          of the English countryside.
        </p>
      </motion.div>
    </section>
  )
}
