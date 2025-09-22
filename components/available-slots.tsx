"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star, ArrowRight } from "lucide-react"

const weeklySlots = [
  {
    week: "Week of March 25th",
    status: "available",
    slotsLeft: 2,
    price: "$45-85",
    turnaround: "7 days",
    popular: false,
  },
  {
    week: "Week of April 1st",
    status: "available",
    slotsLeft: 1,
    price: "$45-85",
    turnaround: "7 days",
    popular: true,
  },
  {
    week: "Week of April 8th",
    status: "available",
    slotsLeft: 3,
    price: "$45-85",
    turnaround: "7 days",
    popular: false,
  },
  {
    week: "Week of April 15th",
    status: "waitlist",
    slotsLeft: 0,
    price: "$45-85",
    turnaround: "7 days",
    popular: false,
  },
]

export function AvailableSlots() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Available <span className="text-primary">Commission Slots</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Book your weekly slot to get a custom crochet character made just for you. Each slot includes consultation,
            design, and creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeklySlots.map((slot, index) => (
            <Card key={index} className={`relative ${slot.popular ? "ring-2 ring-primary" : ""}`}>
              {slot.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">{slot.week}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  {slot.turnaround} turnaround
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{slot.price}</div>
                  <div className="text-sm text-muted-foreground">per commission</div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  {slot.status === "available" ? (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {slot.slotsLeft} slots left
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-destructive text-destructive">
                      Waitlist only
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full"
                  variant={slot.status === "available" ? "default" : "outline"}
                  disabled={slot.status === "waitlist"}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {slot.status === "available" ? "Book This Slot" : "Join Waitlist"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="/booking">
              View Full Calendar
              <Calendar className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
