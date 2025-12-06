"use client"

import HeroSection from "@/components/hero-section"
import { VideoBanner } from "@/components/video-banner"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { EuropeanPresence } from "@/components/european-presence"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { PhotoSlider } from "@/components/photo-slider"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoBanner
        videoSrc="/video/main.mp4"
        onButtonClick={() => window.location.href = '/about'}
        showControls={false}
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <FeaturesSection />
      <StatsSection />
      <ScrollReveal delay={0.1}>
        <ExpertiseSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <CtaSection />
      </ScrollReveal>
    </>
  )
}
