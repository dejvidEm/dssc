"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { CheckCircle, Users, Zap } from "lucide-react"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: CheckCircle,
      title: t.services.service1.title,
      description: t.services.service1.description,
    },
    {
      icon: Users,
      title: t.services.service2.title,
      description: t.services.service2.description,
    },
    {
      icon: Zap,
      title: t.services.service3.title,
      description: t.services.service3.description,
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
            {t.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">{t.services.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
