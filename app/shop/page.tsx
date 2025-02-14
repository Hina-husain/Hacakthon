import Image from "next/image"
import { Grid, LayoutGrid, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: "25,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: "25,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: "25,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: "25,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Grain coffee table",
    price: "15,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Kent coffee table",
    price: "225,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Round coffee table_color",
    price: "251,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Reclaimed teak coffee table",
    price: "25,200.00",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Plain console_",
    price: "258,200.00",
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Reclaimed teak Sideboard",
    price: "20,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "SJP_0825",
    price: "200,000.00",
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "Bella chair and table",
    price: "100,000.00",
    image: "/placeholder.svg",
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Shop Header */}
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shop_optimized-7TiRa6Z2G0cYMqoSDLA9ufHNdQ1YtC.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Shop</h1>
            <div className="flex items-center gap-2">
              <span>Home</span>
              <span>/</span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">Showing 1-16 of 32 results</span>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="16">
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="32">32</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="default">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover mb-4"
                />
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="font-semibold">Rs. {product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" className="w-8 h-8 p-0">
            1
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            2
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            3
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            Next
          </Button>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

