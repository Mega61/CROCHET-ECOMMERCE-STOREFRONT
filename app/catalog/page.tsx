import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

const catalogItems = [
  {
    id: 1,
    name: "Kawaii Cat Bundle",
    description: "Adorable cats with different expressions and accessories. Perfect for cat lovers!",
    price: "$45-65",
    difficulty: "Beginner",
    timeSlots: 1,
    category: "Kawaii Animals",
    features: ["Multiple expressions", "Cute accessories", "Soft pastel colors"],
    image: "/cute-kawaii-crochet-animals-cats-bunnies-bears.jpg",
  },
  {
    id: 2,
    name: "Anime Character Commission",
    description: "Your favorite anime character brought to life in crochet form!",
    price: "$75-95",
    difficulty: "Advanced",
    timeSlots: 2,
    category: "Anime Characters",
    features: ["Custom design", "Detailed features", "Character accuracy"],
    image: "/crochet-anime-characters-manga-style-amigurumi.jpg",
  },
  {
    id: 3,
    name: "Magical Dragon",
    description: "Mystical dragons with wings, scales, and magical details.",
    price: "$85-95",
    difficulty: "Expert",
    timeSlots: 2,
    category: "Fantasy Creatures",
    features: ["Poseable wings", "Detailed scales", "Magical accessories"],
    image: "/crochet-fantasy-creatures-dragons-unicorns-magical.jpg",
  },
  {
    id: 4,
    name: "Kawaii Food Friends",
    description: "Cute food characters with happy faces and kawaii charm!",
    price: "$35-55",
    difficulty: "Beginner",
    timeSlots: 1,
    category: "Food Characters",
    features: ["Happy expressions", "Food accuracy", "Kawaii style"],
    image: "/kawaii-food-crochet-characters-cute-faces.jpg",
  },
  {
    id: 5,
    name: "Custom Design",
    description: "Bring your unique idea to life! Send me your concept and I'll create it.",
    price: "$65-120",
    difficulty: "Varies",
    timeSlots: "1-3",
    category: "Custom Design",
    features: ["Your concept", "Collaborative design", "Unlimited revisions"],
    image: "/custom-crochet-design-sketch-to-reality.jpg",
  },
  {
    id: 6,
    name: "Holiday Specials",
    description: "Seasonal characters perfect for holidays and special occasions.",
    price: "$45-75",
    difficulty: "Intermediate",
    timeSlots: 1,
    category: "Holiday Themed",
    features: ["Seasonal themes", "Holiday colors", "Festive accessories"],
    image: "/cute-kawaii-crochet-animals-cats-bunnies-bears.jpg",
  },
]

const categories = [
  "All",
  "Kawaii Animals",
  "Anime Characters",
  "Fantasy Creatures",
  "Food Characters",
  "Custom Design",
  "Holiday Themed",
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4 text-balance">Magical Crochet Catalog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover all the adorable crochet creations I can bring to life for you! Each piece is lovingly handmade
            with premium yarn and endless care.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full px-6 py-2 font-medium transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-background/80 hover:bg-background text-primary rounded-full p-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-primary text-xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Sparkles className="w-4 h-4" />
                    <span>{item.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      {item.timeSlots} week{typeof item.timeSlots === "number" && item.timeSlots > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">What's included:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/booking?item=${item.id}`} className="w-full">
                  <Button className="w-full rounded-full py-3 text-lg transition-all duration-300 hover:shadow-lg">
                    Book This Creation
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-card rounded-3xl border-2">
          <h2 className="text-3xl font-bold text-primary mb-4">Don't see what you're looking for?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I love creating custom pieces! Send me your ideas and let's bring your dream crochet creation to life.
          </p>
          <Link href="/booking?item=custom">
            <Button className="rounded-full px-8 py-3 text-lg">
              Request Custom Design
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}