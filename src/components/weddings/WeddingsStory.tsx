"use client";

import { motion } from "framer-motion";

export default function WeddingsStory() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT — Layered Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[600px]"
        >
          {/* Main Image */}
          <div
            className="absolute top-0 left-0 w-[75%] h-[400px] bg-cover bg-center rounded-xl shadow-lg"
            style={{
              backgroundImage: "url('/images/weddings/story-1.jpg')",
            }}
          />

          {/* Second Image */}
          <div
            className="absolute bottom-0 right-0 w-[65%] h-[350px] bg-cover bg-center rounded-xl shadow-md"
            style={{
              backgroundImage: "url('/images/weddings/story-2.jpg')",
            }}
          />
        </motion.div>

        {/* RIGHT — Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            A Celebration in Timeless Surroundings
          </h2>

          <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
            At Garstang Country Hotel, we provide outstanding value packages
            designed to suit a variety of tastes and preferences, allowing you
            to tailor every aspect of your special day. Our Wedding and Events
            Manager is here to ensure every detail is meticulously crafted to
            create a truly unforgettable atmosphere. Enjoy cuisine prepared by
            our talented chefs, that will delight your guests’ senses.
          </p>

          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            Our estate offers privacy, beauty, and a seamless experience curated
            with care — ensuring your day feels as effortless as it is
            unforgettable.
          </p>
          <div className="mt-10">
            <button
              className="relative group px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-deep-green)]
 tracking-wide"
            >
              VIEW OUR PACKAGES
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
