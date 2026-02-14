"use client";

import { motion } from "framer-motion";

export default function CoursePhilosophy() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <img
            src="/images/golf-fairway.jpg"
            alt="Heritage fairway landscape"
            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700 ease-out"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            A Course Shaped by Tradition
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-600">
            Our onsite 18 hole Parkland course is sited alongside the hotel and
            is open to residents as a pay and play guest. Designed under the
            guidance of PGA Captain Richard Bradbeer to challenge all abilities
            is well suited to groups and societies looking for a forgiving
            course with good catering facilities.
          </p>
          <div className="mt-10">
            <button
              className="relative group px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-deep-green)]
 tracking-wide"
            >
              BOOK TEE TIMES
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
