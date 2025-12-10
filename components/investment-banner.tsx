"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/use-language'
import { TrendingUp } from 'lucide-react'

export function InvestmentBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-5 sm:px-10 md:px-12 lg:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <div className="relative bg-primary/10 p-4 rounded-full border border-primary/20">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-2"></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {t.investmentBanner.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.investmentBanner.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg transition bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transform font-medium"
          >
            {t.investmentBanner.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

