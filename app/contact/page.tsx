"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqItems = [
    {
      question: t.contact.faq.question1.question,
      answer: t.contact.faq.question1.answer
    },
    {
      question: t.contact.faq.question2.question,
      answer: t.contact.faq.question2.answer
    },
    {
      question: t.contact.faq.question3.question,
      answer: t.contact.faq.question3.answer
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email.title,
      details: "info@company.com",
      description: t.contact.info.email.description,
    },
    {
      icon: Phone,
      title: t.contact.info.phone.title,
      details: "+421 123 456 789",
      description: t.contact.info.phone.description,
    },
    {
      icon: MapPin,
      title: t.contact.info.office.title,
      details: "Bratislava, Slovakia",
      description: t.contact.info.office.description,
    },
    {
      icon: Clock,
      title: t.contact.info.responseTime.title,
      details: t.contact.info.responseTime.details,
      description: t.contact.info.responseTime.description,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero title={t.contact.title} description={t.contact.description} />

      {/* Contact Information */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground">{info.details}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {/* Replaced hardcoded title with translation */}
                    {t.contact.map.title}
                  </CardTitle>
                  <CardDescription>
                    {/* Replaced hardcoded description with translation */}
                    {t.contact.map.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.938326073049!2d17.107748315648!3d48.14388897922371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c895f0b0b0b0b%3A0x0!2sBratislava%20City%20Center!5e0!3m2!1sen!2ssk!4v1634567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bratislava City Center Map"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section - 60% Width */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                {t.contact.faq.title}
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[60%] space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-3 text-left flex items-center justify-between cursor-pointer"
                    >
                      <h3 className="text-lg font-semibold px-6">{item.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-9 pb-3">
                        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">{t.cta.subtitle}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">
                      {/* Replaced hardcoded text with translation */}
                      {t.contact.info.phone.title}
                    </p>
                    <p className="text-sm text-muted-foreground">+421 123 456 789</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">
                      {/* Replaced hardcoded text with translation */}
                      {t.contact.info.email.title}
                    </p>
                    <p className="text-sm text-muted-foreground">info@company.com</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
