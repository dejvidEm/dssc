import HeroSection from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { EuropeanPresence } from "@/components/european-presence"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { PhotoSlider } from "@/components/photo-slider"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ScrollReveal delay={0.1}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <CtaSection />
      </ScrollReveal>
    </>
  )
}
