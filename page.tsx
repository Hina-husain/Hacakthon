import Image from "next/image"
import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Header */}
      <header className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-lg font-semibold">
              Home
            </Link>
            <Link href="/shop" className="text-lg">
              Shop
            </Link>
            <Link href="/about" className="text-lg">
              About
            </Link>
            <Link href="/contact" className="text-lg">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-6">Rocket single seater</h1>
            <Button className="bg-black text-white hover:bg-black/90">Shop Now</Button>
          </div>
          <div className="relative w-[500px] h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home_optimized_5000-0tB510menCmR4FYM9y51wUq7ToIfOw.png"
              alt="Rocket single seater chair"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Image src="/placeholder.svg" alt="Side table" width={400} height={300} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Side table</h3>
              <Button variant="link" className="p-0">
                View More
              </Button>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Image src="/placeholder.svg" alt="Side table" width={400} height={300} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Side table</h3>
              <Button variant="link" className="p-0">
                View More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Picks For You</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="border-none shadow-none">
              <CardContent className="p-0">
                <Image src="/placeholder.svg" alt="Furniture item" width={300} height={200} className="mb-4" />
                <h3 className="text-sm mb-2">Nordic dining table with chairs</h3>
                <p className="font-semibold">Rs. 25,000.00</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link">View More</Button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12 bg-[#FAF4F4]">
        <div className="flex items-center justify-between">
          <div className="relative w-2/3 h-[400px]">
            <Image src="/placeholder.svg" alt="Asgaard sofa" fill className="object-contain" />
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
            <h3 className="text-3xl font-bold mb-6">Asgaard sofa</h3>
            <Button variant="outline">Order Now</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Blogs</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((blog) => (
            <Card key={blog} className="border-none shadow-none">
              <CardContent className="p-0">
                <Image src="/placeholder.svg" alt="Blog post" width={400} height={300} className="mb-4" />
                <h3 className="text-xl mb-4">Going all-in with millennial design</h3>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
                <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
                  <span>5 mins</span>
                  <span>12 Oct 2023</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link">View All Post</Button>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Instagram</h2>
        <p className="text-center mb-8">Follow our store on Instagram</p>
        <Button variant="outline" className="mx-auto block">
          Follow Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block">
                Home
              </Link>
              <Link href="/shop" className="block">
                Shop
              </Link>
              <Link href="/about" className="block">
                About
              </Link>
              <Link href="/contact" className="block">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <div className="space-y-2">
              <Link href="/payment" className="block">
                Payment Options
              </Link>
              <Link href="/returns" className="block">
                Returns
              </Link>
              <Link href="/privacy" className="block">
                Privacy Policies
              </Link>
            </div>
          </div>
          {/* <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="space-y-2">
              <input type="email" placeholder="Enter Email Address" className="w-full p-2 border rounded" />
              <Button className="w-full">SUBSCRIBE</Button>
            </div>
          </div> */}
        </div>
        <div className="text-center mt-12 text-sm">
          <p>2023 Meubel House. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

