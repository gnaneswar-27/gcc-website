'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Stay',
    image: '/images/stay.jpg',
    href: '/stay',
  },
  {
    title: 'Restaurant',
    image: '/images/dining.jpg',
    href: '/restaurants',
  },
  {
    title: 'Weddings',
    image: '/images/weddings.jpg',
    href: '/weddings',
  },
  {
    title: 'Events',
    image: '/images/events.jpg',
    href: '/events',
  },
]

export default function EstatePillars() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[var(--color-deep-green)]">
            The Estate Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href}>
              <div className="group relative overflow-hidden">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2 }}
                  className="h-[360px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />

                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-all duration-700" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl md:text-3xl text-white tracking-wide">
                    {pillar.title}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
