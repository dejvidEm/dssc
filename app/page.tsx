import HeroSection from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { EuropeanPresence } from "@/components/european-presence"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { PhotoSlider } from "@/components/photo-slider"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
