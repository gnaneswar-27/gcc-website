"use client";

import { motion } from "framer-motion";

export default function BradbeerBistro() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
            Bradbeer Bistro
          </h2>

          <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of fresh hearty meals, warm
            hospitality, and unparalleled views at Bradbeer Bistro & Bar. Open
            to both residents and non-residents, whether you are planning a
            light lunch, a romantic evening meal, or a special celebration, our
            restaurant is the ideal choice for memorable dining experiences.
          </p>

          {/* Opening Hours */}
          <div className="w-12 h-[1px] bg-neutral-300 mx-auto mt-10 mb-6" />
          <div className="mt-10 text-neutral-700 space-y-3">
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-500">
              Opening Hours
            </p>

            <p className="text-lg">Open Daily: 12:00 – 23:00</p>

            <p>
              <span className="font-medium">Lunch:</span> Daily 12:00 – 17:00
            </p>

            <p>
              <span className="font-medium">Dinner:</span> Daily 17:00 – 20:30
            </p>
          </div>
        </motion.div>

        {/* Editorial Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 overflow-hidden">
            <img
              src="/images/bistro-1.jpg"
              alt="Bradbeer Bistro interior"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <img
                src="/images/bistro-2.jpg"
                alt="Dining detail"
                className="w-full h-[240px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="overflow-hidden">
              <img
                src="/images/bistro-3.jpg"
                alt="Cuisine detail"
                className="w-full h-[240px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
