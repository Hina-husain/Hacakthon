import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Checkout-BirfKt6XBax0SpBql7rBxXBjaHH4aK.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Welcome to Meubel House</h2>
            <p className="text-gray-600 mb-4">
              At Meubel House, we believe that your home should be a reflection of your unique style and personality.
              Since our establishment, we've been dedicated to bringing you the finest furniture pieces that combine
              aesthetics, functionality, and quality craftsmanship.
            </p>
            <p className="text-gray-600">
              Our carefully curated collection features everything from contemporary designs to timeless classics,
              ensuring that you'll find the perfect pieces to create your dream living space.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image src="/placeholder.svg" alt="About Meubel House" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold">Quality Design</h3>
              <p className="text-gray-600">
                We believe in creating furniture that not only looks beautiful but stands the test of time.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-600">
                Our commitment to the environment is reflected in our sustainable production practices.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we're here to help you create your perfect space.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="space-y-4">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg"
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-600">Furniture Designer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

