'use client'

import { motion } from 'framer-motion'

export default function ManorLife() {
  return (
    <section className="py-32 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            Life Within the Manor
          </h2>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-neutral-500">
            Quiet mornings. Firelit evenings. Private reflections.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-2"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src="/images/manor-lounge.jpg"
                alt="Estate lounge interior"
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700 ease-out"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Evenings by the fire in the private manor lounge.
            </p>
          </motion.div>

          {/* Side Images */}
          <div className="flex flex-col gap-8">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src="/images/manor-breakfast.jpg"
                  alt="Breakfast on terrace"
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Breakfast overlooking the fairways.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src="/images/manor-bath.jpg"
                  alt="Luxury bath with countryside view"
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Private spaces shaped by light and silence.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
