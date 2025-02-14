import Image from "next/image"
import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const topPicks = [
  {
    id: "trenton-modular-sofa",
    name: "Trenton modular sofa_3",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "granite-dining-table",
    name: "Granite dining table with chairs",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "outdoor-bar-set",
    name: "Outdoor bar table and stool",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "plain-console",
    name: "Plain console with teak mirror",
    price: 25000.0,
    image: "/placeholder.svg",
  },
]

const blogPosts = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2023",
    readTime: "5 min",
    image: "/placeholder.svg",
    slug: "millennial-design",
  },
  {
    title: "Exploring minimalist design trends",
    date: "12 Jul 2023",
    readTime: "3 min",
    image: "/placeholder.svg",
    slug: "minimalist-trends",
  },
  {
    title: "The art of interior styling",
    date: "28 Jun 2023",
    readTime: "4 min",
    image: "/placeholder.svg",
    slug: "interior-styling",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">Rocket single seater</h1>
            <Link href="/shop">
              <Button className="bg-black text-white hover:bg-black/90">Shop Now</Button>
            </Link>
          </div>
          <div className="relative w-full md:w-[600px] h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home_optimized_5000-0bHZKB88vfT3k0UBS5SEzga7u6vlcl.png"
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
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-none bg-[#FAF4F4]">
            <CardContent className="p-8">
              <div className="relative w-full h-[300px] mb-6">
                <Image src="/placeholder.svg" alt="Side table" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Side table</h3>
              <Link href="/shop">
                <Button variant="link" className="p-0">
                  View More
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none bg-[#FAF4F4]">
            <CardContent className="p-8">
              <div className="relative w-full h-[300px] mb-6">
                <Image src="/placeholder.svg" alt="Side table" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Side table</h3>
              <Link href="/shop">
                <Button variant="link" className="p-0">
                  View More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Top Picks For You</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPicks.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <Card className="border-none shadow-none hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square mb-4">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-sm mb-2">{product.name}</h3>
                  <p className="font-semibold">Rs. {product.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop">
            <Button variant="link">View More</Button>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12 bg-[#FAF4F4]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full md:w-2/3 h-[400px] mb-8 md:mb-0">
            <Image src="/placeholder.svg" alt="Asgaard sofa" fill className="object-contain" />
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
            <h3 className="text-3xl font-bold mb-6">Asgaard sofa</h3>
            <Link href="/shop/asgaard-sofa">
              <Button variant="outline">Order Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Blogs</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="border-none shadow-none hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-video mb-4">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl mb-4 hover:text-primary">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <Button variant="link">View All Posts</Button>
          </Link>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Instagram</h2>
        <p className="text-center mb-8">Follow our store on Instagram</p>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="mx-auto block">
            Follow Us
          </Button>
        </Link>
      </section>

      <Features />
      <Footer />
    </div>
  )
}

