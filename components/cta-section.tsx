"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="text-lg text-primary-foreground/90 text-pretty sm:text-xl">{t.contact.description}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/about">{t.nav.about}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
