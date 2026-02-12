export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-deep-green)] text-white pt-16 pb-10 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Estate Name */}
        <h2 className="text-3xl md:text-4xl mb-8 tracking-wide">
          Garstang Country Club
        </h2>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-white/40 mx-auto mb-10" />

        {/* Address Block */}
        <div className="space-y-3 text-sm tracking-wide opacity-80">
          <p>Garstang Road</p>
          <p>Lancashire, PR3 1YE</p>
          <p>United Kingdom</p>
          <p className="mt-6">+44 (0) 1995 600100</p>
          <p>info@garstangcountryclub.co.uk</p>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-white/20 my-12" />

        {/* Copyright */}
        <p className="text-xs tracking-[0.3em] uppercase opacity-60">
          © {new Date().getFullYear()} Garstang Country Club
        </p>
      </div>
    </footer>
  );
}
