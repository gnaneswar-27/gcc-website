"use client";

import { motion } from "framer-motion";

const menus = [
  {
    title: "Main Menu",
    description: "Seasonal British cuisine crafted with estate-grown produce.",
    pdf: "https://cdn.prod.website-files.com/673732387095553875f7e864/68e61c29fdf1a649847dc81a_GH_0005V_Bradbeer%20Menu%20OCT25%20-%20v3.0.pdf", // Replace with your PDF link
  },
  {
    title: "Children's Menu",
    description: "Wholesome classics thoughtfully prepared for younger guests.",
    pdf: "https://cdn.prod.website-files.com/673732387095553875f7e864/693ad9d4cd221fdd4810b5b2_GH_0005J_Bradbeer%20Kids%20Menu%20A5%20-%20v4.0.pdf",
  },
  {
    title: "Sandwich Menu",
    description: "Light fare served daily within the clubhouse and terrace.",
    pdf: "https://cdn.prod.website-files.com/673732387095553875f7e864/694928c1f36ce8dce4eb50e1_GH_0005J_Bradbeer%20Sandwich%20Menu%20A5%20-%20DEC25%20-%20v1.0.pdf",
  },
  {
    title: "Wine Menu",
    description: "A curated cellar of European vintages and estate selections.",
    pdf: "https://cdn.prod.website-files.com/673732387095553875f7e864/673b5bd1664a0d61d939c281_wine-list.pdf",
  },
];

export default function MenuSection() {
  return (
    <section className="py-32 bg-[#f8f6f2]">
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
            Food & Drink Menus
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-10">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white p-10 border border-neutral-200"
            >
              <h3 className="text-2xl font-playfair text-deep-green">
                {menu.title}
              </h3>

              <p className="mt-4 text-neutral-600 leading-relaxed">
                {menu.description}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block mt-6 px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-deep-green)] tracking-wide uppercase text-sm transition-all duration-300"
              >
                View Menu
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
