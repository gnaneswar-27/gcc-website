import WeddingsHero from '@/components/weddings/WeddingsHero'
import WeddingsIntro from '@/components/weddings/WeddingsIntro'
import WeddingsStory from '@/components/weddings/WeddingsStory'
import WeddingsTestimonials from '@/components/weddings/WeddingsTestimonials'
import WeddingPackages from '@/components/weddings/WeddingPackages'
import WeddingGallery from '@/components/weddings/WeddingGallery'
import WeddingsCTA from '@/components/weddings/WeddingsCTA'

export default function WeddingsPage() {
  return (
    <>
      <WeddingsHero />
      <WeddingsIntro />
      <WeddingsStory />
      <WeddingsTestimonials />
      <WeddingPackages />
      <WeddingGallery />
      <WeddingsCTA />
    </>
  )
}
