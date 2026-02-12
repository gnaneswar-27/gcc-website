const rooms = [
  {
    title: 'Classic Room',
    image: '/images/room1.jpg',
    description:
      'Warm tones and traditional detailing create a comfortable countryside escape.',
  },
  {
    title: 'Deluxe Suite',
    image: '/images/room2.jpg',
    description:
      'Spacious interiors and refined furnishings for a distinguished stay.',
  },
]

export default function RoomPreview() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-28">

        {rooms.map((room, index) => (
          <div
            key={room.title}
            className="grid md:grid-cols-2 gap-16 items-center"
          >

            <div
              className={`h-[420px] bg-cover bg-center ${
                index % 2 !== 0 ? 'md:order-2' : ''
              }`}
              style={{ backgroundImage: `url(${room.image})` }}
            />

            <div>
              <h3 className="text-3xl text-[var(--color-deep-green)] mb-6">
                {room.title}
              </h3>
              <p className="text-lg leading-relaxed text-[var(--color-deep-green)] opacity-80">
                {room.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
