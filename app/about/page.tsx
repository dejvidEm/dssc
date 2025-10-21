"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/hooks/use-language"
import { Target, Eye, Heart, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t.about.mission,
      description: t.about.missionDescription,
    },
    {
      icon: Eye,
      title: t.about.vision,
      description: t.about.visionDescription,
    },
    {
      icon: Heart,
      title: t.about.values.values,
      description: t.about.values.valuesDescription,
    },
    {
      icon: Award,
      title: t.about.values.excellence,
      description: t.about.values.excellenceDescription,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero title={t.about.title} description={t.about.description} />

      {/* Company Story */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text content - order-2 on mobile, order-1 on desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.about.story.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.story.paragraph1}</p>
                <p>{t.about.story.paragraph2}</p>
                <p>{t.about.story.paragraph3}</p>
              </div>
            </div>
            {/* Visual element - order-1 on mobile, order-2 on desktop */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20">
                <video 
                  src="/video/main.mp4" 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
              {t.about.values.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              {t.about.values.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
              {t.about.team.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              {t.about.team.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-2xl font-bold text-primary">
                      {member === 1 ? "JS" : member === 2 ? "AM" : "PK"}
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    {member === 1 ? t.about.team.member1.name : member === 2 ? t.about.team.member2.name : t.about.team.member3.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member === 1 ? t.about.team.member1.role : member === 2 ? t.about.team.member2.role : t.about.team.member3.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member === 1
                      ? t.about.team.member1.description
                      : member === 2
                        ? t.about.team.member2.description
                        : t.about.team.member3.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
