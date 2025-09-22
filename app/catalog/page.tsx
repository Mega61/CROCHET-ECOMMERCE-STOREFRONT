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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b-4 border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors">
              ✨ Crochet Magic ✨
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/booking" className="text-pink-600 hover:text-pink-700 font-medium">
                My Bookings
              </Link>
              <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-full px-6">
                Book a Slot
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-pink-600 mb-4 text-balance">✨ Magical Crochet Catalog ✨</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto text-pretty">
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
              className={`rounded-full px-6 py-2 font-medium transition-all ${
                category === "All"
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500"
                  : "border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300"
              }`}
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
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300 bg-white/90 backdrop-blur-sm overflow-hidden"
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
                    className="bg-white/80 hover:bg-white text-pink-600 rounded-full p-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                  {item.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-pink-600 text-xl">{item.name}</CardTitle>
                <CardDescription className="text-gray-600">{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{item.price}</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Sparkles className="w-4 h-4" />
                    <span>{item.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>
                      {item.timeSlots} week{typeof item.timeSlots === "number" && item.timeSlots > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">What's included:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/booking?item=${item.id}`} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-full py-3 text-lg transition-all duration-300 hover:shadow-lg">
                    ✨ Book This Creation ✨
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Don't see what you're looking for?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            I love creating custom pieces! Send me your ideas and let's bring your dream crochet creation to life.
          </p>
          <Link href="/booking?item=custom">
            <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-full px-8 py-3 text-lg">
              ✨ Request Custom Design ✨
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
