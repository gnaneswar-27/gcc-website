'use client'

import { motion } from 'framer-motion'

const images = [
  '/images/golf-1.jpg',
  '/images/golf-2.jpg',
  '/images/golf-3.jpg',
  '/images/golf-4.jpg',
  '/images/golf-5.jpg',
]

export default function GolfGallery() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">

        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
          The Course in Motion
        </h2>

        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-neutral-500">
          A Landscape Shaped by Time & Play
        </p>
      </div>

      <div className="relative">

        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="min-w-[500px] h-[400px] overflow-hidden"
            >
              <img
                src={src}
                alt="Golf estate view"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
