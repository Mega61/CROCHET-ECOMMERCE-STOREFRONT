import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ArrowRight } from "lucide-react"

const crochetCategories = [
  {
    name: "Kawaii Animals",
    description: "Adorable cats, bunnies, bears and more",
    image: "/cute-kawaii-crochet-animals-cats-bunnies-bears.jpg",
    priceRange: "$45-65",
    difficulty: "Medium",
    timeSlots: 1,
    popular: true,
    examples: ["Sleepy Cat", "Bunny with Bow", "Teddy Bear"],
  },
  {
    name: "Anime Characters",
    description: "Your favorite anime and manga characters",
    image: "/crochet-anime-characters-manga-style-amigurumi.jpg",
    priceRange: "$65-85",
    difficulty: "Complex",
    timeSlots: 1,
    popular: true,
    examples: ["Totoro", "Pikachu", "Sailor Moon"],
  },
  {
    name: "Fantasy Creatures",
    description: "Dragons, unicorns, and magical beings",
    image: "/crochet-fantasy-creatures-dragons-unicorns-magical.jpg",
    priceRange: "$55-75",
    difficulty: "Medium",
    timeSlots: 1,
    popular: false,
    examples: ["Baby Dragon", "Unicorn", "Phoenix"],
  },
  {
    name: "Food Characters",
    description: "Cute food items with kawaii faces",
    image: "/kawaii-food-crochet-characters-cute-faces.jpg",
    priceRange: "$45-55",
    difficulty: "Easy",
    timeSlots: 1,
    popular: false,
    examples: ["Smiling Donut", "Happy Taco", "Cute Cupcake"],
  },
  {
    name: "Custom Design",
    description: "Bring your own idea to life",
    image: "/custom-crochet-design-sketch-to-reality.jpg",
    priceRange: "$65-95",
    difficulty: "Varies",
    timeSlots: 1,
    popular: false,
    examples: ["Your Pet", "Original Character", "Special Request"],
  },
  {
    name: "Holiday Themed",
    description: "Seasonal and holiday characters",
    image: "/holiday-themed-crochet-characters-seasonal.jpg",
    priceRange: "$50-70",
    difficulty: "Medium",
    timeSlots: 1,
    popular: false,
    examples: ["Christmas Elf", "Halloween Ghost", "Easter Bunny"],
  },
]

export function CrochetCatalog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Choose Your <span className="text-primary">Crochet Creation</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Browse our catalog of possible creations. Each item is made-to-order during your booked time slot with your
            personal customizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crochetCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {category.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Price Range:</span>
                  <span className="font-semibold text-primary">{category.priceRange}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Complexity:</span>
                  <Badge variant="outline">{category.difficulty}</Badge>
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Popular examples:</span>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group">
                  Book This Style
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see what you're looking for? I love custom challenges!</p>
          <Button asChild variant="outline" size="lg">
            <a href="/custom">
              Request Custom Design
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
