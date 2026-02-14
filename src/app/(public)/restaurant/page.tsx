import DiningHero from '@/components/restaurant/DiningHero'
import BradbeerBistro from '@/components/restaurant/BradbeerBistro'
import MenuSection from '@/components/restaurant/MenuSection'
import DiningCTA from '@/components/restaurant/DiningCTA'

export default function RestaurantsPage() {
  return (
    <main className="bg-[#f8f6f2] text-deep-green">
      <DiningHero />
      <BradbeerBistro />
      <MenuSection />
      <DiningCTA />
    </main>
  )
}
