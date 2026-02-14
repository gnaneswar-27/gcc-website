'use client'

import { motion } from 'framer-motion'

const details = [
  { label: 'Established', value: '1898' },
  { label: 'Par', value: '72' },
  { label: 'Championship Yardage', value: '7,240 Yards' },
  { label: 'Course Architect', value: 'Edward Harcourt' },
  { label: 'Terrain', value: 'Rolling Parkland' },
  { label: 'Clubhouse Heritage', value: 'Georgian Manor, 1874' },
]

export default function CourseDetails() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            Course Details
          </h2>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-neutral-500">
            Enduring Standards of Excellence
          </p>
        </motion.div>

        {/* Details Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-10"
        >
          {details.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-sm tracking-[0.3em] uppercase text-neutral-500">
                {item.label}
              </p>
              <p className="mt-4 text-2xl md:text-3xl font-playfair text-deep-green">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
