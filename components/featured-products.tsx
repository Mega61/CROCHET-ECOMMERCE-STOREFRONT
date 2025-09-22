import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Kawaii Bunny Plushie",
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviews: 127,
    image: "/placeholder-88og2.png",
    badge: "Bestseller",
    isNew: false,
  },
  {
    id: 2,
    name: "Totoro Amigurumi",
    price: 35.99,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder-4r4bp.png",
    badge: "New",
    isNew: true,
  },
  {
    id: 3,
    name: "Rainbow Octopus",
    price: 24.99,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder-bg1i8.png",
    badge: "Popular",
    isNew: false,
  },
  {
    id: 4,
    name: "Baby Dragon Set",
    price: 42.99,
    rating: 5.0,
    reviews: 73,
    image: "/placeholder-7r8b0.png",
    badge: "Premium",
    isNew: false,
  },
  {
    id: 5,
    name: "Sleepy Cat Pillow",
    price: 31.99,
    originalPrice: 38.99,
    rating: 4.6,
    reviews: 94,
    image: "/placeholder-2qact.png",
    badge: "Sale",
    isNew: false,
  },
  {
    id: 6,
    name: "Unicorn Dreams",
    price: 39.99,
    rating: 4.9,
    reviews: 112,
    image: "/placeholder-r7oih.png",
    badge: "Magical",
    isNew: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved handcrafted pieces, each made with care and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background border-border"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    className={`absolute top-3 left-3 ${
                      product.badge === "New"
                        ? "bg-secondary text-secondary-foreground"
                        : product.badge === "Sale"
                          ? "bg-destructive text-destructive-foreground"
                          : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
