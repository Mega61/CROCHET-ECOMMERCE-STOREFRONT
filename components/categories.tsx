import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    name: "Cute Animals",
    description: "Adorable animal friends",
    image: "/placeholder-bnqnx.png",
    href: "/categories/animals",
    count: "24 items",
  },
  {
    name: "Anime Characters",
    description: "Your favorite characters",
    image: "/placeholder-hgi82.png",
    href: "/categories/characters",
    count: "18 items",
  },
  {
    name: "Baby Items",
    description: "Perfect for little ones",
    image: "/placeholder-62gx2.png",
    href: "/categories/baby",
    count: "15 items",
  },
  {
    name: "Holiday Specials",
    description: "Seasonal decorations",
    image: "/placeholder-grkeb.png",
    href: "/categories/holiday",
    count: "12 items",
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections of handmade crochet items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                  <p className="text-xs text-secondary font-medium">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
