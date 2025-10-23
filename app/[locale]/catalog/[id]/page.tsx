import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Clock, Ruler, Package, Calendar, ArrowLeft, Heart } from "lucide-react"
import { DETAILED_PRODUCTS } from "@/constants/products"
import type { Product } from "@/types"

interface PageProps {
  params: Promise<{ id: string; locale: string }>
}

// Generate static params for all products
export async function generateStaticParams() {
  return DETAILED_PRODUCTS.map((product) => ({
    id: product.id.toString(),
  }))
}

async function getProduct(id: string): Promise<Product | null> {
  const product = DETAILED_PRODUCTS.find((p) => p.id.toString() === id)
  return product || null
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  const availableSlots = [
    { id: 1, week: "Jan 15-21, 2024", status: "available" },
    { id: 2, week: "Jan 22-28, 2024", status: "available" },
    { id: 3, week: "Jan 29 - Feb 4, 2024", status: "booked" },
    { id: 4, week: "Feb 5-11, 2024", status: "available" },
    { id: 5, week: "Feb 12-18, 2024", status: "available" },
    { id: 6, week: "Feb 19-25, 2024", status: "limited" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/catalog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-2xl border-2 border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    <img src={image || "/placeholder.svg"} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <h1 className="text-4xl font-bold text-primary mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-foreground">{product.price}</p>
            </div>

            {/* Rating */}
            {product.rating && product.reviews && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}

            {/* Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {product.difficulty && (
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-semibold">{product.difficulty}</p>
                  </div>
                </div>
              )}

              {product.estimatedTimeHours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time Required</p>
                    <p className="font-semibold">{product.estimatedTimeHours} hours</p>
                  </div>
                </div>
              )}

              {product.dimensions && (
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Dimensions</p>
                    <p className="font-semibold">{product.dimensions}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Time Slots</p>
                  <p className="font-semibold">
                    {availableSlots.filter((s) => s.status === "available").length} Available
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Materials */}
            {product.materials && product.materials.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Materials Used</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <Badge key={index} variant="outline">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {/* CTA Button */}
            <Link href={`/booking?item=${product.id}`} className="block">
              <Button size="lg" className="w-full text-lg py-6">
                Book This Creation
              </Button>
            </Link>
          </div>
        </div>

        {/* Availability Calendar Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Available Time Slots</CardTitle>
              <CardDescription>Select a week when you&apos;d like me to work on your commission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableSlots.map((slot) => (
                  <Card
                    key={slot.id}
                    className={`transition-all ${
                      slot.status === "available"
                        ? "hover:border-primary cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{slot.week}</CardTitle>
                        <Badge
                          variant={slot.status === "available" ? "default" : slot.status === "limited" ? "secondary" : "destructive"}
                        >
                          {slot.status}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href={`/booking?item=${product.id}`}>
                  <Button size="lg">Select Time Slot & Book</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Book Your Slot</h3>
                  <p className="text-sm text-muted-foreground">Choose an available time slot and submit your order</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Pay Deposit</h3>
                  <p className="text-sm text-muted-foreground">50% deposit to start, 50% on completion</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">I Create Your Piece</h3>
                  <p className="text-sm text-muted-foreground">Handmade during your booked week with progress photos</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Shipped to You</h3>
                  <p className="text-sm text-muted-foreground">Carefully packaged and shipped to your door</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
