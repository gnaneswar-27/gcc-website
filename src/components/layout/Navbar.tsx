"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`relative transition-all duration-500 ${
            scrolled ? "h-14 w-44" : "h-18 w-52"
          }`}
        >
          <Image
            src={scrolled ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
            alt="GCC Estate"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden md:flex gap-12 text-sm tracking-[0.2em] uppercase transition-colors duration-500 ${
            scrolled ? "text-[var(--color-deep-green)]" : "text-white/90"
          }`}
        >
          {["Stay", "Golf", "Restaurant", "Weddings", "Events"].map(
            (item) => (
              <NavItem
                key={item}
                label={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                scrolled={scrolled}
              />
            ),
          )}
        </nav>
      </div>
    </motion.header>
  );
}

function NavItem({
  label,
  href,
  scrolled,
}: {
  label: string;
  href: string;
  scrolled: boolean;
}) {
  return (
    <Link href={href} className="relative group transition-colors duration-500">
      {label}
      <span
        className={`absolute left-0 -bottom-2 h-[1px] w-0 transition-all duration-500 group-hover:w-full ${
          scrolled ? "bg-[var(--color-gold-accent)]" : "bg-white"
        }`}
      />
    </Link>
  );
}
