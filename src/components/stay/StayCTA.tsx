import Link from 'next/link'

export default function StayCTA() {
  return (
    <section className="bg-[#f6f4ef] py-24 px-6 text-center">

      <h2 className="text-3xl text-[var(--color-deep-green)] mb-10">
        Reserve Your Stay
      </h2>

      <Link
        href="#"
        className="border border-[var(--color-deep-green)] px-8 py-3 tracking-widest text-sm uppercase hover:bg-[var(--color-deep-green)] hover:text-white transition-all duration-500"
      >
        Book Now
      </Link>

    </section>
  )
}
