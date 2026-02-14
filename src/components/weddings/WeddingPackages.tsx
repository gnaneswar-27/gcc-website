"use client";

import { motion } from "framer-motion";

export default function WeddingPackages() {
  const packages = [
    {
      title: "The Pearl Package",
      description:
        "The Pearl package offers a charming and elegant choice for your wedding day with us.",
      image: "/images/weddings/package-1.jpg",
    },
    {
      title: "The Sapphire Package",
      description:
        "Our Sapphire package enhances your dining experience, florals and entertainment with us.",
      image: "/images/weddings/package-2.jpg",
    },
    {
      title: "The Diamond Package",
      description:
        "For those looking for the ultimate wedding experience, the Diamond package is the perfect choice.",
      image: "/images/weddings/package-3.jpg",
    },
    {
      title: "The Twilight Package",
      description:
        "The Twilight package is the perfect choice for couples seeking a stunning evening-only celebration.",
      image: "/images/weddings/package-4.jpg",
    },
    {
      title: "The Ever After Package",
      description:
        "For an extraordinary evening experience, the Ever After package offers a premium selection.",
      image: "/images/weddings/package-5.jpg",
    },
  ];

  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green">
          Wedding Packages
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-500 flex flex-col"
            >
              {/* Image */}
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-playfair text-deep-green">
                  {pkg.title}
                </h3>

                <p className="mt-4 text-neutral-600 text-sm leading-relaxed flex-grow">
                  {pkg.description}
                </p>

                <button
                  className="relative group px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-deep-green)]
 tracking-wide"
                >
                  VIEW DETAILS
                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
