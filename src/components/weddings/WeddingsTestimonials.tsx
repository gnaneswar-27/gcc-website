'use client'

import { motion } from 'framer-motion'

export default function WeddingsTestimonials() {
  const testimonials = [
    {
      quote:
        "Our wedding felt like something from a storybook. Every detail was impeccable.",
      author: "Adelle & Rick",
      image: "/images/weddings/testimonial-1.jpg",
    },
    {
      quote:
        "The estate’s charm and the team’s care made our day truly unforgettable.",
      author: "Chloe & Alex",
      image: "/images/weddings/testimonial-2.jpg",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
          Words from Our Couples
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Couple Image */}
              <div
                className="w-full h-[400px] bg-cover bg-center rounded-xl shadow-md"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Quote */}
              <p className="mt-8 text-lg italic text-neutral-700 leading-relaxed">
                “{item.quote}”
              </p>

              {/* Names */}
              <p className="mt-6 text-sm uppercase tracking-widest text-neutral-500">
                {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
