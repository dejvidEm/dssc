"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { CheckCircle, Users, Zap, ArrowRight, Clock, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: CheckCircle,
      title: t.services.service1.title,
      description: t.services.service1.description,
      features: [
        t.services.features.strategicPlanning,
        t.services.features.marketAnalysis,
        t.services.features.riskAssessment,
        t.services.features.performanceOptimization,
      ],
      price: `${t.services.pricing.from} €500`,
      popular: false,
    },
    {
      icon: Users,
      title: t.services.service2.title,
      description: t.services.service2.description,
      features: [
        t.services.features.fullProjectManagement,
        t.services.features.qualityAssurance,
        t.services.features.timelineManagement,
        t.services.features.resourceAllocation,
      ],
      price: `${t.services.pricing.from} €1,500`,
      popular: true,
    },
    {
      icon: Zap,
      title: t.services.service3.title,
      description: t.services.service3.description,
      features: [
        t.services.features.support24,
        t.services.features.regularUpdates,
        t.services.features.maintenance,
        t.services.features.technicalAssistance,
      ],
      price: `${t.services.pricing.from} €200/${t.services.pricing.month}`,
      popular: false,
    },
  ]

  const additionalServices = [
    {
      icon: Clock,
      title: t.services.additional.expressService.title,
      description: t.services.additional.expressService.description,
    },
    {
      icon: Shield,
      title: t.services.additional.securityAudit.title,
      description: t.services.additional.securityAudit.description,
    },
    {
      icon: Lightbulb,
      title: t.services.additional.innovationWorkshop.title,
      description: t.services.additional.innovationWorkshop.description,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl lg:text-2xl leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    {t.services.badges.mostPopular}
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={service.popular ? "default" : "outline"}>
                    <Link href="/contact">
                      {t.services.buttons.getStarted}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
              {t.services.additional.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              {t.services.additional.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
              {t.services.process.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">{t.services.process.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: t.services.process.discovery.title,
                description: t.services.process.discovery.description,
              },
              {
                step: "02",
                title: t.services.process.planning.title,
                description: t.services.process.planning.description,
              },
              {
                step: "03",
                title: t.services.process.execution.title,
                description: t.services.process.execution.description,
              },
              {
                step: "04",
                title: t.services.process.delivery.title,
                description: t.services.process.delivery.description,
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              {t.services.cta.title}
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty sm:text-xl">{t.services.cta.subtitle}</p>
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
                <Link href="/about">
                  {/* Replaced hardcoded button text with translation */}
                  {t.services.buttons.learnMore}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
