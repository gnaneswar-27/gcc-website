import Hero from "@/components/sections/Hero";
import SectionReveal from "@/components/ui/SectionReveal";
import PageTransition from "@/components/ui/PageTransition";
import SplitGolfSection from "@/components/sections/SplitGolfSection";
import Heritage from "@/components/sections/Heritage";
import EstatePillars from "@/components/sections/EstatePillars";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Heritage />

        <SectionReveal>
          <SplitGolfSection />
        </SectionReveal>
        
        <EstatePillars />
        <Testimonials />
        <FinalCTA />
      </main>
    </PageTransition>
  );
}
