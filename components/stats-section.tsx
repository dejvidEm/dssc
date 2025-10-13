"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

interface StatItemProps {
  end: number
  label: string
  suffix?: string
}

function AnimatedCounter({ end, label, suffix = "" }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [isInView, end, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" })

  const stats = [
    { end: 10, label: t.stats.countries, suffix: "+" },
    { end: 15, label: t.stats.experience, suffix: "+" },
    { end: 80, label: t.stats.team, suffix: "+" },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Heading */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              {t.stats.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.stats.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.stats.description}
            </p>
          </motion.div>

          {/* Right side - Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

