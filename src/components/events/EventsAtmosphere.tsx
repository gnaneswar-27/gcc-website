'use client'

import { motion } from 'framer-motion'

export default function EventsAtmosphere() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[500px] bg-cover bg-center rounded-xl shadow-md"
          style={{ backgroundImage: "url('/images/events/atmosphere.jpg')" }}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            Timeless Ambience
          </h2>

          <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
            From candlelit banquets to sunlit garden gatherings,
            each event at GCC is shaped by its surroundings.
            Our spaces combine heritage architecture with refined
            modern comfort.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
