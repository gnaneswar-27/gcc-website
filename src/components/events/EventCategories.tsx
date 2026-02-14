'use client'

import { motion } from 'framer-motion'

export default function EventCategories() {
  const events = [
    {
      title: "Banquets & Balls",
      image: "/images/events/event-1.jpg",
      description:
        "Elegant evening affairs hosted within our grand halls, perfect for formal celebrations and distinguished gatherings.",
    },
    {
      title: "Family Gatherings",
      image: "/images/events/event-2.jpg",
      description:
        "Warm, welcoming spaces designed for milestone birthdays, anniversaries, and cherished family moments.",
    },
    {
      title: "Celebration of Life",
      image: "/images/events/event-3.jpg",
      description:
        "A peaceful and dignified setting to honour and remember loved ones with grace and care.",
    },
    {
      title: "Bridal Showers",
      image: "/images/events/event-4.jpg",
      description:
        "Spoil the bride-to-be with a tailored celebration!",
    },
    {
      title: "Baby Showers",
      image: "/images/events/event-5.jpg",
      description:
        "Celebrate your newest addition with a baby shower or gender reveal party",
    },
    
  ]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green text-center mb-20">
          Occasions We Host
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-500"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              <div className="p-8">
                <h3 className="text-2xl font-playfair text-deep-green">
                  {event.title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
