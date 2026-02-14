export default function EventsCTA() {
  return (
    <section className="py-32 bg-deep-green text-center text-white">
      <h2 className="text-3xl md:text-5xl font-playfair">
        Host Your Next Event With Us
      </h2>

      <div className="mt-10">
        <button
          className="relative group px-8 py-3 border border-[var(--color-gold-accent)] text-[var(--color-white)]
 tracking-wide"
        >
          ENQUIRE ABOUT EVENTS
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[var(--color-gold-accent)] transition-all duration-500 group-hover:w-full" />
        </button>
      </div>
    </section>
  );
}
