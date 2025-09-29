"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/hooks/use-language"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground">Thank you for your message. We'll get back to you within 24 hours.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
        <CardDescription className="text-base">{t.contact.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.form.name}</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.form.email}</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.form.message}</Label>
            <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                {t.contact.form.submit}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
