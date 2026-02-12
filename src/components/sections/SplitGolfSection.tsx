"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SplitGolfSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="grid md:grid-cols-2 min-h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="bg-[url('/images/golf.jpg')] bg-cover bg-center"
      />

      <div className="flex items-center justify-center px-12 py-32 bg-white">
        <div>
          <h2 className="text-4xl mb-6">Championship Golf</h2>
          <p className="opacity-70 mb-8 leading-relaxed">
            Designed by former PGA Captain Richard Bradbeer, our 18-hole
            parkland course offers a rewarding challenge for players of all
            levels.
          </p>

          <button
            className="relative group px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-deep-green)]
 tracking-wide"
          >
            Explore Golf
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
