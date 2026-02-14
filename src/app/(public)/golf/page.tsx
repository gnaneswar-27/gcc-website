import GolfHero from "@/components/golf/GolfHero";
import CoursePhilosophy from "@/components/golf/CoursePhilosophy";
import GolfCTA from "@/components/golf/GolfCTA";
import GolfGallery from "@/components/golf/GolfGallery";

export default function GolfPage() {
  return (
    <main className="bg-[#f8f6f2] text-deep-green">
      <GolfHero />
      <CoursePhilosophy />
      <GolfGallery />
      <GolfCTA />
    </main>
  );
}
