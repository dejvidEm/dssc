"use client"

import { useLanguage } from "@/hooks/use-language"

interface PageHeroProps {
  title: string
  description?: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[280px] bg-white dark:bg-gray-950 flex items-center">
      {/* Background decorative elements - without gradients */}
      <div className="absolute top-0 inset-x-0 h-48 flex items-start overflow-hidden">
        <div className="h-20 w-2/3 bg-primary/5 blur-2xl"></div>
        <div className="h-16 w-3/5 bg-primary/10 blur-2xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-primary/10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative mx-auto pt-24 pb-16 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-4">
        <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight">
          {title}
        </h1>
        {description && (
          <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl text-base sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}



