"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/hooks/use-language"
import { Target, Eye, Heart, Award } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t.about.mission,
      description:
        "We focus on delivering exceptional results that exceed expectations and drive meaningful impact for our clients.",
    },
    {
      icon: Eye,
      title: t.about.vision,
      description:
        "We envision a future where innovation and excellence come together to create lasting value for businesses worldwide.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, innovation, and customer satisfaction are at the core of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring the highest quality standards and professional service.",
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform businesses through innovative solutions, we have grown from a small
                  team of passionate professionals to a trusted partner for companies worldwide.
                </p>
                <p>
                  Our journey began with a simple belief: that every business deserves access to world-class expertise
                  and cutting-edge solutions. Today, we continue to uphold this principle while expanding our
                  capabilities and reach.
                </p>
                <p>
                  With years of experience across various industries, we bring deep knowledge and fresh perspectives to
                  every project, ensuring our clients stay ahead in an ever-evolving marketplace.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-primary/10 p-8 flex items-center justify-center border-2 border-primary/20">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">10+</div>
                  <div className="text-lg font-semibold">Years of Excellence</div>
                  <div className="text-sm text-muted-foreground">Serving clients worldwide</div>
                </div>
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
              Our Values & Mission
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              The principles that guide our work and define our commitment to excellence.
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
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Passionate professionals dedicated to delivering exceptional results.
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
                    {member === 1 ? "John Smith" : member === 2 ? "Anna Miller" : "Peter Klein"}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member === 1 ? "CEO & Founder" : member === 2 ? "Lead Developer" : "Project Manager"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member === 1
                      ? "Visionary leader with 15+ years of industry experience."
                      : member === 2
                        ? "Expert developer passionate about creating innovative solutions."
                        : "Experienced manager ensuring project success and client satisfaction."}
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
