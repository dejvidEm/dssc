"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-foreground">{t.hero.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl lg:text-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/30">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
