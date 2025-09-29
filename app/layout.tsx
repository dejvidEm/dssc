import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Modern Business Website",
  description: "Professional multilingual business website",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
