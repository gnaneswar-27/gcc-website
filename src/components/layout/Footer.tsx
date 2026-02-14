import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep-green)] text-white pt-16 pb-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-light-1.png"
                alt="Garstang Country Club Logo"
                width={220}
                height={70}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* RIGHT — Address Block */}
          <div className="text-sm tracking-wide opacity-80 space-y-3 md:text-right">
            <p>Garstang Road</p>
            <p>Lancashire, PR3 1YE</p>
            <p>United Kingdom</p>
            <p className="mt-6">+44 (0) 1995 600100</p>
            <p>info@garstangcountryclub.co.uk</p>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.3em] uppercase opacity-60">
          <p>© {new Date().getFullYear()} Garstang Country Club</p>
        </div>

      </div>
    </footer>
  )
}
