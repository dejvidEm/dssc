"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { type Language } from "@/lib/translations"

const languages = [
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "sk" as Language, name: "Slovak", flag: "🇸🇰" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { language, setLanguage } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLang = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code)
    setIsOpen(false)
  }

  // Check if we're on mobile and update on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile() // Check on mount
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{selectedLang.name}</span>
        <span className="sm:hidden">{selectedLang.flag}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className={`absolute right-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
          isMobile 
            ? 'bottom-full mb-1' 
            : 'top-full mt-1'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 first:rounded-t-md last:rounded-b-md"
              onClick={() => handleLanguageChange(lang)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
