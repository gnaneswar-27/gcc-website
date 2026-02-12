export default function StayHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stay-hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl mb-6">Rooms & Suites</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Refined comfort overlooking the Lancashire countryside.
        </p>
      </div>
    </section>
  );
}
