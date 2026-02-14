'use client'

import { useEffect, useRef } from 'react'

export default function WeddingGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrame: number
    let scrollPosition = container.scrollLeft
    const speed = 0.4

    const autoScroll = () => {
      if (!container) return

      // Sync with user's manual scroll
      scrollPosition = container.scrollLeft + speed

      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0
      }

      container.scrollLeft = scrollPosition

      animationFrame = requestAnimationFrame(autoScroll)
    }

    animationFrame = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const images = [1, 2, 3, 4, 5, 6]

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-playfair text-deep-green text-center mb-16">
          Wedding Gallery
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll no-scrollbar"
        >
          {images.concat(images).map((i, index) => (
            <div
              key={index}
              className="min-w-[400px] h-[500px] bg-cover bg-center rounded-xl shadow-md flex-shrink-0 transition-transform duration-700 hover:scale-[1.02]"
              style={{
                backgroundImage: `url('/images/weddings/gallery-${i}.jpg')`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
