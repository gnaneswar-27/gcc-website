"use client";

import { motion } from "framer-motion";

export default function EventsIntro() {
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
          A Refined Setting for Every Occasion
        </h2>

        <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
          Discover the perfect setting for life&apos;s most memorable moments at
          Garstang Country Hotel. From intimate daytime gatherings to
          spectacular evening celebrations, our versatile event spaces provide
          an idyllic backdrop along the River Wyre.
        </p>
      </motion.div>
    </section>
  );
}
