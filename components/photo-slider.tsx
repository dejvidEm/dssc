'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight, Circle } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface PhotoSliderProps {
  images: Array<{
    src: string
    alt: string
    title?: string
    description?: string
  }>
  className?: string
  showDots?: boolean
  showArrows?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  aspectRatio?: 'square' | 'video' | 'wide' | 'auto'
}

export function PhotoSlider({
  images,
  className,
  showDots = true,
  showArrows = true,
  autoplay = true,
  autoplayDelay = 4000,
  aspectRatio = 'video',
}: PhotoSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })] : []
  )
  
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square'
      case 'video':
        return 'aspect-video'
      case 'wide':
        return 'aspect-[21/9]'
      case 'auto':
      default:
        return 'aspect-auto'
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className={cn('flex items-center justify-center p-8', className)}>
        <p className="text-muted-foreground">No images to display</p>
      </div>
    )
  }

  return (
    <div className={cn('relative group', className)}>
      {/* Main Carousel Container */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-0">
              <div className={cn('relative w-full', getAspectRatioClass())}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === 0}
                />
                {(image.title || image.description) && (
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-4 text-white">
                      {image.title && (
                        <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      )}
                      {image.description && (
                        <p className="text-sm opacity-90">{image.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:opacity-100"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:opacity-100"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-200',
                selectedIndex === index
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/50 hover:bg-muted-foreground/70'
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {selectedIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

// Export a simple version for basic use cases
export function SimplePhotoSlider({
  images,
  className,
}: {
  images: string[]
  className?: string
}) {
  const formattedImages = images.map((src, index) => ({
    src,
    alt: `Image ${index + 1}`,
  }))

  return (
    <PhotoSlider
      images={formattedImages}
      className={className}
      aspectRatio="video"
    />
  )
}
