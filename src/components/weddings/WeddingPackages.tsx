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
        "For those looking for the ultimate wedding experience.",
      image: "/images/weddings/package-3.jpg",
    },
    {
      title: "The Twilight Package",
      description:
        "The Twilight package is the perfect choice for those seeking a stunning evening-only celebration.",
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group bg-white rounded-3xl overflow-hidden 
             border border-neutral-200/60
             hover:border-[var(--color-gold-accent)]
             transition-all duration-700 
             flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div
                  className="h-72 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow text-left">
                <h3 className="text-2xl tracking-wide text-deep-green font-light">
                  {pkg.title}
                </h3>

                <p className="mt-4 text-neutral-600 text-[16px] leading-loose font-light flex-grow">
                  {pkg.description}
                </p>

                <button
                  className="mt-3 inline-flex items-center justify-center
             px-8 py-3
             text-sm tracking-[0.25em]
             text-[var(--color-deep-green)]
             border border-[var(--color-gold-accent)]
             relative group"
                >
                  VIEW DETAILS
                  <span
                    className="absolute -bottom-0.5 left-0 h-[1px] w-0
               bg-[var(--color-gold-accent)]
               transition-all duration-500
               group-hover:w-full"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
