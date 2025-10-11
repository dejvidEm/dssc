"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/hooks/use-language"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ZoomIn } from "lucide-react"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.jpg",
      alt: "Storage facility exterior",
      title: "Modern Facilities",
      category: "Facilities",
    },
    {
      id: 2,
      src: "/placeholder.jpg",
      alt: "Climate controlled units",
      title: "Climate Controlled Units",
      category: "Interior",
    },
    {
      id: 3,
      src: "/placeholder.jpg",
      alt: "Security systems",
      title: "Advanced Security",
      category: "Security",
    },
    {
      id: 4,
      src: "/placeholder.jpg",
      alt: "Storage units hallway",
      title: "Clean Hallways",
      category: "Interior",
    },
    {
      id: 5,
      src: "/placeholder.jpg",
      alt: "Loading area",
      title: "Easy Access",
      category: "Facilities",
    },
    {
      id: 6,
      src: "/placeholder.jpg",
      alt: "Various unit sizes",
      title: "Multiple Sizes",
      category: "Interior",
    },
    {
      id: 7,
      src: "/placeholder.jpg",
      alt: "Office area",
      title: "Customer Service",
      category: "Facilities",
    },
    {
      id: 8,
      src: "/placeholder.jpg",
      alt: "Parking area",
      title: "Ample Parking",
      category: "Facilities",
    },
    {
      id: 9,
      src: "/placeholder.jpg",
      alt: "Security gate",
      title: "Secure Entry",
      category: "Security",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero 
        title={t.nav.gallery}
        description="Take a virtual tour of our state-of-the-art storage facilities. Explore our secure, clean, and modern spaces designed with your peace of mind in focus."
      />

      {/* Gallery Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-1">
                      <div className="inline-block px-2 py-1 text-xs font-semibold text-white bg-primary rounded">
                        {image.category}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
              Why Choose Our Facilities
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Our state-of-the-art facilities are designed to provide the best storage experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Climate Controlled",
                description: "Maintain optimal temperature and humidity for your valuables",
              },
              {
                title: "24/7 Security",
                description: "Advanced surveillance and access control systems",
              },
              {
                title: "Clean & Modern",
                description: "Well-maintained facilities with regular cleaning",
              },
              {
                title: "Easy Access",
                description: "Wide hallways and convenient loading areas",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative aspect-[16/10]">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 bg-background">
                <div className="inline-block px-3 py-1 text-sm font-semibold text-primary-foreground bg-primary rounded mb-2">
                  {galleryImages[selectedImage].category}
                </div>
                <h3 className="text-2xl font-bold">{galleryImages[selectedImage].title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

