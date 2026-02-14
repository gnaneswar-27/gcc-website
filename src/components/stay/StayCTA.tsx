'use client'

export default function StayCTA() {
  return (
    <section className="relative py-40 text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stay-cta-bg.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-playfair mb-8 tracking-wide">
          Your Escape Awaits
        </h2>

        <p className="text-lg md:text-xl mb-12 opacity-90">
          Discover refined comfort, calm and timeless hospitality at Garstang Country Club.
        </p>

        <button className="relative group px-10 py-4 border border-[var(--color-gold-accent)] text-white tracking-wide">
          BOOK YOUR STAY
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
        </button>
      </div>
    </section>
  )
}
