"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlippingContactForm } from "@/components/flipping-contact-form"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, ChevronDown, ChevronUp } from "lucide-react"

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero title={t.contact.title} description={t.contact.description} />

      {/* Flipping Contact Form */}
      <section className="py-8">
        <div className="container">
          <FlippingContactForm />
                  </div>
      </section>

      {/* FAQ Section - 60% Width */}
      <section id="faq" className="py-24">
        <div className="container">
          {/* FAQ Section - 60% Width */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                {t.contact.faq.title}
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl space-y-4">
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
        <div className="px-5 sm:px-10 md:px-12 lg:px-5 text-center">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">{t.cta.subtitle}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Card className="p-6 border-0 shadow-lg w-full sm:w-auto">
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
              <Card className="p-6 border-0 shadow-lg w-full sm:w-auto">
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
