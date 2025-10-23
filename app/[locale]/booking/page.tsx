"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react"

const availableSlots = [
  { id: 1, week: "Jan 15-21, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 2, week: "Jan 22-28, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 3, week: "Jan 29 - Feb 4, 2024", status: "booked", price: 85, difficulty: "Any" },
  { id: 4, week: "Feb 5-11, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 5, week: "Feb 12-18, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 6, week: "Feb 19-25, 2024", status: "limited", price: 85, difficulty: "Beginner only" },
]

const catalogItems = {
  1: { name: "Kawaii Cat Bundle", price: "$45-65", image: "/cute-kawaii-crochet-animals-cats-bunnies-bears.jpg" },
  2: {
    name: "Anime Character Commission",
    price: "$75-95",
    image: "/crochet-anime-characters-manga-style-amigurumi.jpg",
  },
  3: { name: "Magical Dragon", price: "$85-95", image: "/crochet-fantasy-creatures-dragons-unicorns-magical.jpg" },
  4: { name: "Kawaii Food Friends", price: "$35-55", image: "/kawaii-food-crochet-characters-cute-faces.jpg" },
  5: { name: "Custom Design", price: "$65-120", image: "/custom-crochet-design-sketch-to-reality.jpg" },
}

export default function BookingPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    colors: "",
    size: "",
    specialRequests: "",
  })

  const handleSlotSelect = (slotId: number) => {
    setSelectedSlot(slotId)
  }

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    alert("Booking submitted! You'll receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              3
            </div>
          </div>
        </div>

        {/* Step 1: Select Time Slot */}
        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Choose Your Magic Week</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select a week when I'll create your chosen catalog item!
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg max-w-md mx-auto border">
                <p className="text-sm text-foreground font-medium">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Catalog Item Commission: $75 base fee
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {availableSlots.map((slot) => (
                <Card
                  key={slot.id}
                  className={`cursor-pointer transition-all duration-300 border-2 ${selectedSlot === slot.id
                      ? "border-primary bg-accent shadow-lg"
                      : slot.status === "available"
                        ? "border-border hover:border-primary/50 hover:shadow-md"
                        : "border-border opacity-60"
                    } ${slot.status === "booked" ? "cursor-not-allowed" : ""}`}
                  onClick={() => slot.status !== "booked" && handleSlotSelect(slot.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-primary text-lg">{slot.week}</CardTitle>
                      <Badge
                        className={
                          slot.status === "available"
                            ? "bg-green-100 text-green-700"
                            : slot.status === "limited"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-muted text-muted-foreground"
                        }
                      >
                        {slot.status === "available"
                          ? "Available"
                          : slot.status === "limited"
                            ? "Limited"
                            : "Booked"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Commission Fee:</span>
                        <span className="font-bold text-primary">${slot.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <span className="text-sm">{slot.difficulty}</span>
                      </div>
                      {selectedSlot === slot.id && (
                        <div className="flex items-center justify-center mt-4">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={handleNextStep}
                disabled={!selectedSlot}
                className="rounded-full px-8 py-3 text-lg disabled:opacity-50"
              >
                Continue to Item Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Catalog Item Selection & Details */}
        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Choose Your Catalog Item</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select from our available designs and customize the details!
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Catalog Item Selection */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Select Your Design</CardTitle>
                  <CardDescription>Choose from our popular catalog items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(catalogItems).map(([key, item]) => (
                      <Card
                        key={key}
                        className={`cursor-pointer transition-all duration-300 border-2 ${selectedCatalogItem === key
                            ? "border-primary bg-accent shadow-lg"
                            : "border-border hover:border-primary/50 hover:shadow-md"
                          }`}
                        onClick={() => setSelectedCatalogItem(key)}
                      >
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-primary mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.price}</p>
                          {selectedCatalogItem === key && (
                            <div className="flex items-center justify-center mt-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact & Customization Details */}
              {selectedCatalogItem && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-primary">Customization Details</CardTitle>
                    <CardDescription>Personalize your chosen design</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Delivery Address Section */}
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="street">Street Address *</Label>
                          <Input
                            id="street"
                            placeholder="123 Main Street, Apt 4B"
                            value={formData.street}
                            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              placeholder="New York"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State/Province *</Label>
                            <Input
                              id="state"
                              placeholder="NY"
                              value={formData.state}
                              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                            <Input
                              id="zipCode"
                              placeholder="10001"
                              value={formData.zipCode}
                              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Input
                              id="country"
                              placeholder="United States"
                              value={formData.country}
                              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="colors">Color Preferences</Label>
                        <Input
                          id="colors"
                          placeholder="Pink, purple, pastel blue... or 'original colors'"
                          value={formData.colors}
                          onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="size">Preferred Size</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, size: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (4-6 inches)</SelectItem>
                            <SelectItem value="medium">Medium (6-8 inches) - Standard</SelectItem>
                            <SelectItem value="large">Large (8-12 inches)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="special-requests">Special Requests</Label>
                      <Textarea
                        id="special-requests"
                        placeholder="Any special touches, gift wrapping, or modifications to the design?"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-between">
                <Button onClick={handlePrevStep} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Slots
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={
                    !selectedCatalogItem ||
                    !formData.name ||
                    !formData.email ||
                    !formData.street ||
                    !formData.city ||
                    !formData.state ||
                    !formData.zipCode ||
                    !formData.country
                  }
                  className="rounded-full px-8 py-3"
                >
                  Review & Confirm
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Checkout Confirmation */}
        {step === 3 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Almost There!</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review your catalog item booking before we make it official!
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Booking Summary */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Selected Week:</span>
                    <span className="text-primary font-bold">
                      {availableSlots.find((slot) => slot.id === selectedSlot)?.week}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Selected Item:</span>
                    <span className="text-primary font-bold">
                      {selectedCatalogItem && catalogItems[selectedCatalogItem as unknown as keyof typeof catalogItems]?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Commission Fee:</span>
                    <span className="text-primary font-bold">$75</span>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Contact:</span>
                    <p className="text-muted-foreground">
                      {formData.name} - {formData.email}
                    </p>
                  </div>
                  {selectedCatalogItem && (
                    <div>
                      <span className="font-medium">Item:</span>
                      <p className="text-muted-foreground">
                        {catalogItems[selectedCatalogItem as unknown as keyof typeof catalogItems]?.name}
                      </p>
                    </div>
                  )}
                  {formData.colors && (
                    <div>
                      <span className="font-medium">Colors:</span>
                      <p className="text-muted-foreground">{formData.colors}</p>
                    </div>
                  )}
                  {formData.size && (
                    <div>
                      <span className="font-medium">Size:</span>
                      <p className="text-muted-foreground capitalize">{formData.size.replace("-", " ")}</p>
                    </div>
                  )}
                  {formData.specialRequests && (
                    <div>
                      <span className="font-medium">Special Requests:</span>
                      <p className="text-muted-foreground">{formData.specialRequests}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Delivery Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{formData.street}</p>
                  <p className="text-muted-foreground">
                    {formData.city}, {formData.state} {formData.zipCode}
                  </p>
                  <p className="text-muted-foreground">{formData.country}</p>
                </CardContent>
              </Card>

              {/* Payment Info */}
              <Card className="border-2 bg-accent">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-bold text-primary">Payment Process</h3>
                    <p className="text-muted-foreground">
                      After confirmation, I'll send you a PayPal invoice for the commission fee. Work begins once
                      payment is received!
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• 50% deposit to start</p>
                      <p>• 50% balance on completion</p>
                      <p>• Progress photos throughout the week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button onClick={handlePrevStep} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Edit Details
                </Button>
                <Button onClick={handleSubmit} className="rounded-full px-8 py-3 text-lg">
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}