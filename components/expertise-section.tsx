"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ExpertiseSection() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" })
  const contentRef = useRef(null)
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            {t.expertise.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.expertise.title}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-1 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-foreground/90">
              {t.expertise.paragraph1}
            </p>
            <p>
              {t.expertise.paragraph3}
            </p>
            <p className="text-foreground/90 font-medium">
              {t.expertise.paragraph4}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-1 relative w-full aspect-[4/3]"
          >
            <Link href="/services" className="block relative w-full h-full rounded-lg overflow-hidden border border-border shadow-lg" data-hero-image="true">
              <Image
                src="/modern_lock.png"
                alt="Modern lock technology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

