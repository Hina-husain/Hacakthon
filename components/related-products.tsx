import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const relatedProducts = [
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
]

export function RelatedProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href={`/shop/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover mb-4"
                />
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="font-semibold">Rs. {product.price}</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/shop" className="text-sm font-medium hover:underline">
          View More
        </Link>
      </div>
    </section>
  )
}

