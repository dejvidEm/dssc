"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Country {
  name: string
  code: string
  top: string
  left: string
}

export function EuropeanPresence() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries: Country[] = [
    { name: "Slovakia", code: "SK", top: "48%", left: "58%" },
    { name: "Czech Republic", code: "CZ", top: "46%", left: "55%" },
    { name: "Austria", code: "AT", top: "50%", left: "54%" },
    { name: "Germany", code: "DE", top: "44%", left: "48%" },
    { name: "Poland", code: "PL", top: "42%", left: "58%" },
    { name: "Hungary", code: "HU", top: "52%", left: "58%" },
    { name: "Switzerland", code: "CH", top: "52%", left: "46%" },
    { name: "France", code: "FR", top: "50%", left: "38%" },
    { name: "Netherlands", code: "NL", top: "42%", left: "45%" },
    { name: "Belgium", code: "BE", top: "45%", left: "42%" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <Card className="p-8 border-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Operating Across Europe</h3>
          </div>
          
          <div className="relative aspect-[2/1] bg-muted/30 rounded-lg overflow-hidden">
            {/* Europe Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 200 100"
                className="w-full h-full opacity-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 15 L70 12 L90 14 L110 12 L130 15 L145 18 L155 23 L160 30 L158 38 L150 45 L140 50 L125 54 L105 55 L85 54 L65 50 L50 45 L40 38 L38 30 L42 23 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="currentColor"
                  className="text-primary/20"
                />
              </svg>
            </div>

            {/* Country Markers */}
            {countries.map((country) => (
              <div
                key={country.code}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: country.top, left: country.left }}
                onMouseEnter={() => setHoveredCountry(country.code)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />
                  {hoveredCountry === country.code && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-card border border-primary shadow-lg rounded px-2 py-1 text-xs font-medium z-10">
                      {country.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Serving clients in <span className="font-semibold text-primary">{countries.length} countries</span> across Europe
          </p>
        </Card>
      </div>
    </section>
  )
}

