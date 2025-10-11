"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/use-language'
 
export default function HeroSection() {
  const { t } = useLanguage()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  }
  
  return (
    <section className="relative pt-10 xl:pt-14 overflow-hidden">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          <motion.div 
            className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-foreground text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text"
              variants={itemVariants}
            >
              {t.hero.title} <span className="bg-primary/10 inline-block border border-primary/30 px-3 text-primary">{t.hero.subtitle}</span> Solutions
            </motion.h1>
            <motion.p 
              className="mt-10 text-muted-foreground lg:text-lg max-w-2xl lg:max-w-none mx-auto"
              variants={itemVariants}
            >
              {t.hero.description}
            </motion.p>
            <motion.div 
              className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap"
              variants={itemVariants}
            >
              <Link href="#" className="px-6 py-3 rounded-lg transition bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transform">
                <span className="relative">
                  {t.hero.cta1}
                </span>
              </Link>
              <Link href="#" className="px-6 py-3 rounded-lg transition bg-muted text-foreground hover:bg-muted/80 border border-border hover:scale-105 transform">
                <span className="relative">
                  {t.hero.cta2}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        <motion.div 
          className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image src="/placeholder.jpg" alt="happy team" width={1850} height={1200} className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full rounded-lg" />
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 -bottom-10 w-60 p-4 rounded-lg bg-card border border-border shadow-lg"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex children:ring-4 children:ring-card children:w-9 children:h-9 children:object-cover children:-ml-1 children:rounded-full">
              <Image src="/placeholder-user.jpg" alt="employee image" width={40} height={40} className="!-ml-0" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">{t.hero.employees}</p>
              <p className="text-muted-foreground flex">
                <span className="text-yellow-500 text-xl">★</span> {t.hero.reviews}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
  </section>
)
}