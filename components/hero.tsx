import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, Clock, Palette } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Custom Made Just for You</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Book Your <span className="text-primary">Crochet</span> Commission Slot
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Reserve your weekly time slot for custom crochet creations. Choose from our catalog or request something
                completely unique!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/catalog">
                    Browse Catalog Items
                    <Calendar className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-2 border-primary/30"
                >
                  <Link href="/custom-commission">
                    <Palette className="mr-2 w-5 h-5" />
                    Custom Commission
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h3 className="font-semibold text-pink-700 mb-1">Catalog Items</h3>
                  <p className="text-pink-600">
                    Choose from pre-designed characters • $75 base fee • Faster turnaround
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-1">Custom Commission</h3>
                  <p className="text-purple-600">Completely unique design • $95 base fee • Bring any idea to life</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>1 week turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Progress photos included</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
              <img
                src="/cute-crochet-character-being-made-with-yarn-and-ho.jpg"
                alt="Custom crochet character being crafted"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Clock className="w-4 h-4 inline mr-1" />3 Slots Left
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              💖 Made with Love
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
