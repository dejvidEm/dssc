"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function FlippingContactForm() {
  const { t } = useLanguage()
  const [isFlipped, setIsFlipped] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
    privacyPolicy: false,
  })
  const formSideRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formSideRef.current && containerRef.current) {
      const height = formSideRef.current.offsetHeight
      containerRef.current.style.height = `${height}px`
    }
  }, [formData, isSuccess])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: "", email: "", companyName: "", message: "", privacyPolicy: false })
  }

  const handleFlipBack = () => {
    setIsFlipped(false)
  }

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
    <section className="relative py-8 sm:py-12 bg-background overflow-hidden" data-contact-form="true">
      {/* Decorative graphics */}
      <figure className="bg-primary/20 pointer-events-none absolute -bottom-[50%] left-1/2 z-0 block aspect-square w-[600px] -translate-x-1/2 rounded-full blur-[200px]" />
      <figure className="bg-background pointer-events-none absolute top-[20%] left-[4vw] z-0 hidden aspect-square w-[35vw] rounded-full opacity-50 blur-[100px] md:block" />
      <figure className="bg-background pointer-events-none absolute right-[7vw] bottom-[10%] z-0 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative [perspective:2000px]">
          <div className="relative" ref={containerRef}>
            <div
              className={cn(
                "absolute inset-0 transition-all duration-1000 [transform-style:preserve-3d]",
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              )}
            >
              {/* Front side - Contact Form */}
              <div
                className={cn(
                  "absolute inset-0 [backface-visibility:hidden]",
                  isFlipped && "pointer-events-none"
                )}
              >
                <div ref={formSideRef} className="relative rounded-2xl bg-card border border-border p-8 sm:p-12 lg:p-16 shadow-lg">
                  {/* Border made of grid lines */}

                  <div className="relative max-w-xl mx-auto z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                        {t.contact.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.contact.description}
                      </p>
                    </div>

                    {isSuccess ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {t.contact.formFields.success}
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          {t.contact.formFields.successMessage}
                        </p>
                        <Button onClick={() => setIsFlipped(true)} variant="outline">
                          {t.contact.cta.showContactInfo}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                              {t.contact.form.name} <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              type="text"
                              placeholder={t.contact.formFields.namePlaceholder}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                              {t.contact.form.email} <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder={t.contact.formFields.emailPlaceholder}
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="h-11"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="text-sm font-medium">
                            {t.contact.form.companyName}
                          </Label>
                          <Input
                            id="companyName"
                            type="text"
                            placeholder={t.contact.form.companyNamePlaceholder}
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">
                            {t.contact.form.message} <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            placeholder={t.contact.formFields.messagePlaceholder}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={6}
                            className="resize-none"
                          />
                        </div>
                        <div className="flex items-start space-x-3 pt-2">
                          <Checkbox
                            id="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onCheckedChange={(checked) => setFormData({ ...formData, privacyPolicy: checked === true })}
                            required
                            className="mt-1"
                          />
                          <Label
                            htmlFor="privacyPolicy"
                            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                          >
                            {t.contact.form.privacyPolicyText}{" "}
                            <Link href="#" className="text-primary hover:underline font-medium">
                              {t.contact.form.privacyPolicy}
                            </Link>
                            <span className="text-destructive">*</span>
                          </Label>
                        </div>
                        <div className="space-y-3 pt-2">
                          <Button
                            type="submit"
                            disabled={isSubmitting || !formData.privacyPolicy}
                            size="lg"
                            className="w-full h-12 text-base font-semibold"
                          >
                            {isSubmitting ? t.contact.formFields.sending : t.contact.form.submit}
                            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                          <Button
                            type="button"
                            onClick={() => setIsFlipped(true)}
                            variant="outline"
                            className="w-full h-12 text-base"
                          >
                            {t.contact.cta.showContactInfo}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* Back side - Contact Info */}
              <div
                className={cn(
                  "absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]",
                  !isFlipped && "pointer-events-none"
                )}
              >
                <div className="relative rounded-2xl bg-card border border-border p-8 sm:p-12 lg:p-16 shadow-lg overflow-y-auto">
                  <div className="relative max-w-4xl mx-auto">
                    {/* Back button */}
                    <button
                      type="button"
                      onClick={handleFlipBack}
                      className="sticky top-0 z-10 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group mb-8 bg-card pb-2 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span className="text-sm">{t.contact.cta.backButton}</span>
                    </button>

                    <div className="text-center mb-8 pt-8 sm:pt-0">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                        {t.contact.cta.contactInfoTitle}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.contact.description}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {contactInfo.map((info, index) => {
                        const Icon = info.icon
                        return (
                          <div key={index} className="text-center p-6 rounded-lg border border-border bg-card/50">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                            <p className="text-base font-semibold text-foreground mb-2">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

