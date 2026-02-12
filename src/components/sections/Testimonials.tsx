export default function Testimonials() {
  return (
    <section className="bg-[#f6f4ef] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl text-[var(--color-deep-green)] mb-16">
          What Our Guests Say
        </h2>

        <div className="space-y-16">

          <div>
            <p className="italic text-lg md:text-xl leading-relaxed text-[var(--color-deep-green)] opacity-90 mb-6">
              “An exceptional course paired with impeccable hospitality.
              A true hidden gem in Lancashire.”
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-green)] opacity-70">
              Visiting PGA Member
            </p>
          </div>

          <div>
            <p className="italic text-lg md:text-xl leading-relaxed text-[var(--color-deep-green)] opacity-90 mb-6">
              “The perfect setting for our wedding — elegant, timeless,
              and beautifully managed from start to finish.”
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-green)] opacity-70">
              Private Event Guest
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
