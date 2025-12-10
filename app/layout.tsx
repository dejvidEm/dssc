import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import FollowCursor from "@/components/follow-cursor"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "DSSCompany - Professional Storage Solutions",
  description: "DSSCompany provides professional storage solutions across Europe",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          <FollowCursor />
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
            </Suspense>
            <main className="flex-1 pt-16">{children}</main>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
