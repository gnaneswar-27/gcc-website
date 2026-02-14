'use client'

import { motion } from 'framer-motion'

export default function EventsGallery() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative">

        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green text-center mb-24">
          Events Gallery
        </h2>

        <div className="relative h-[750px]">

          {/* Large Central Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 w-[55%] h-[500px] bg-cover bg-center rounded-2xl shadow-xl z-10"
            style={{ backgroundImage: "url('/images/events/gallery-1.jpg')" }}
          />

          {/* Top Left */}
          <div
            className="absolute top-0 left-0 w-[35%] h-[250px] bg-cover bg-center rounded-xl shadow-md"
            style={{ backgroundImage: "url('/images/events/gallery-2.jpg')" }}
          />

          {/* Bottom Left */}
          <div
            className="absolute bottom-0 left-[8%] w-[30%] h-[220px] bg-cover bg-center rounded-xl shadow-md"
            style={{ backgroundImage: "url('/images/events/gallery-3.jpg')" }}
          />

          {/* Top Right */}
          <div
            className="absolute top-[60px] right-0 w-[32%] h-[230px] bg-cover bg-center rounded-xl shadow-md"
            style={{ backgroundImage: "url('/images/events/gallery-4.jpg')" }}
          />

          {/* Bottom Right */}
          <div
            className="absolute bottom-[40px] right-[5%] w-[28%] h-[200px] bg-cover bg-center rounded-xl shadow-md"
            style={{ backgroundImage: "url('/images/events/gallery-5.jpg')" }}
          />

        </div>

      </div>
    </section>
  )
}
