import EventsHero from '@/components/events/EventsHero'
import EventsIntro from '@/components/events/EventsIntro'
import EventCategories from '@/components/events/EventCategories'
import EventsAtmosphere from '@/components/events/EventsAtmosphere'
import EventsGallery from '@/components/events/EventsGallery'
import EventsCTA from '@/components/events/EventsCTA'

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsIntro />
      <EventCategories />
      <EventsAtmosphere />
      <EventsGallery />
      <EventsCTA />
    </>
  )
}
