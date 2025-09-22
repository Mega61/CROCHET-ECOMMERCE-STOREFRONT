import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "California, USA",
    rating: 5,
    text: "The quality is absolutely amazing! My daughter loves her new bunny plushie. The attention to detail is incredible and you can really feel the love that went into making it.",
    avatar: "/smiling-woman-profile.png",
  },
  {
    id: 2,
    name: "Emily Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "I ordered a custom Totoro for my boyfriend and it exceeded all expectations. The craftsmanship is top-notch and the shipping was super fast. Will definitely order again!",
    avatar: "/asian-woman-happy-profile-photo.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "These crochet creations bring so much joy to our home. My kids play with them every day and they've held up perfectly. Such beautiful, handmade quality!",
    avatar: "/hispanic-woman-smiling-profile-photo.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who have fallen in love with our handmade creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-2" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card px-6 py-4 rounded-full border">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold">4.9/5</span>
              <span className="text-muted-foreground ml-1">from 500+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
