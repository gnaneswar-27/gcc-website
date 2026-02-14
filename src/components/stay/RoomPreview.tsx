const rooms = [
  {
    title: "Classic",
    image: "/images/room1.jpg",
    description:
      "Our Classic Rooms offer refined comfort with sweeping views of the golf course or manicured gardens. From your window, admire the tranquil landscape and roaming wildlife while indulging in Egyptian cotton linens, plush towels, and every thoughtful amenity for a distinguished overnight stay or elegant short retreat.",
  },
  {
    title: "Executive",
    image: "/images/room2.jpg",
    description:
      "Our Executive Upgrade Rooms command picturesque views of the gardens, golf course, and rolling countryside beyond. Generously proportioned and thoughtfully appointed, each room features a 50” HD television, a pod coffee machine with luxury biscuits, plush bathrobes and slippers, enhanced toiletries, and an elegant sofa for two — perfect for unwinding in serene comfort.",
  },
  {
    title: "Suite",
    image: "/images/room3.jpg",
    description:
      "This room embodies refined luxury and generous space, with elegant French doors opening directly onto the patio and gardens. The exquisite bathroom features a five-headed walk-in rain shower, a double-ended two-person bathtub, twin basins, and premium toiletries befitting its superior standard.",
  },
];

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
                index % 2 !== 0 ? "md:order-2" : ""
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
        /
      </div>
    </section>
  );
}
