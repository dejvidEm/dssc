"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full h-screen">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/dssc.png" 
                alt="DSSCompany Logo" 
                width={32} 
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="text-xl font-bold text-primary">DSSCompany</div>
            </div>
          </div>

          <nav className="flex-1 flex flex-col justify-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-2xl font-semibold text-center py-4 transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center py-8">
            <LanguageSelector />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
