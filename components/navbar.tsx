"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold text-primary">Logo</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
