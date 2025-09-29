import { PhotoSlider, SimplePhotoSlider } from '@/components/photo-slider'

// Sample images - you can replace these with your actual images
const sampleImages = [
  {
    src: '/placeholder.jpg',
    alt: 'Beautiful landscape',
    title: 'Mountain View',
    description: 'A stunning mountain landscape with clear blue skies'
  },
  {
    src: '/placeholder.svg',
    alt: 'Abstract design',
    title: 'Abstract Art',
    description: 'Modern abstract design with geometric patterns'
  },
  {
    src: '/abstract-geometric-pattern.png',
    alt: 'Geometric pattern',
    title: 'Geometric Pattern',
    description: 'Colorful geometric patterns and shapes'
  }
]

const simpleImages = [
  '/placeholder.jpg',
  '/placeholder.svg',
  '/abstract-geometric-pattern.png'
]

export default function PhotoSliderDemo() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Photo Slider Demo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A responsive photo slider component with infinite looping, autoplay, and mobile-friendly navigation.
        </p>
      </div>

      {/* Full Featured Slider */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Full Featured Slider</h2>
        <p className="text-muted-foreground">
          Includes navigation arrows, dot indicators, image counter, and autoplay.
        </p>
        <PhotoSlider
          images={sampleImages}
          className="max-w-4xl mx-auto"
          aspectRatio="video"
          showDots={true}
          showArrows={true}
          autoplay={true}
          autoplayDelay={3000}
        />
      </section>

      {/* Square Aspect Ratio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Square Aspect Ratio</h2>
        <p className="text-muted-foreground">
          Perfect for profile photos or square images.
        </p>
        <PhotoSlider
          images={sampleImages}
          className="max-w-md mx-auto"
          aspectRatio="square"
          showDots={true}
          showArrows={true}
          autoplay={false}
        />
      </section>

      {/* Wide Aspect Ratio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Wide Aspect Ratio</h2>
        <p className="text-muted-foreground">
          Great for panoramic or banner images.
        </p>
        <PhotoSlider
          images={sampleImages}
          className="max-w-6xl mx-auto"
          aspectRatio="wide"
          showDots={true}
          showArrows={true}
          autoplay={true}
          autoplayDelay={5000}
        />
      </section>

      {/* Simple Slider */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Simple Slider</h2>
        <p className="text-muted-foreground">
          Minimal configuration with just image URLs.
        </p>
        <SimplePhotoSlider
          images={simpleImages}
          className="max-w-2xl mx-auto"
        />
      </section>

      {/* Mobile Responsive Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Mobile Responsive</h2>
        <p className="text-muted-foreground">
          This slider adapts to different screen sizes. Try resizing your browser or viewing on mobile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PhotoSlider
            images={sampleImages}
            aspectRatio="video"
            showDots={true}
            showArrows={true}
            autoplay={true}
          />
          <PhotoSlider
            images={sampleImages}
            aspectRatio="square"
            showDots={true}
            showArrows={true}
            autoplay={false}
          />
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
          <pre className="text-sm overflow-x-auto">
{`import { PhotoSlider } from '@/components/photo-slider'

const images = [
  {
    src: '/image1.jpg',
    alt: 'Description',
    title: 'Optional Title',
    description: 'Optional Description'
  }
]

<PhotoSlider
  images={images}
  aspectRatio="video"
  showDots={true}
  showArrows={true}
  autoplay={true}
  autoplayDelay={4000}
/>`}
          </pre>
        </div>
      </section>
    </div>
  )
}
