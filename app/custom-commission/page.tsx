"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Upload, Sparkles } from "lucide-react"

const availableSlots = [
  { id: 1, week: "Jan 15-21, 2024", status: "available", price: 95, difficulty: "Any" },
  { id: 2, week: "Jan 22-28, 2024", status: "available", price: 95, difficulty: "Any" },
  { id: 3, week: "Jan 29 - Feb 4, 2024", status: "booked", price: 95, difficulty: "Any" },
  { id: 4, week: "Feb 5-11, 2024", status: "available", price: 95, difficulty: "Any" },
  { id: 5, week: "Feb 12-18, 2024", status: "available", price: 95, difficulty: "Any" },
  { id: 6, week: "Feb 19-25, 2024", status: "limited", price: 95, difficulty: "Complex designs only" },
]

export default function CustomCommissionPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    inspiration: "",
    colors: "",
    size: "",
    complexity: "",
    deadline: "",
    budget: "",
    specialRequests: "",
    referenceImages: [] as File[],
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
    alert(
      "Custom commission request submitted! I'll review your request and get back to you within 24 hours with a detailed quote and timeline.",
    )
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData({ ...formData, referenceImages: [...formData.referenceImages, ...files] })
    }
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
              <h1 className="text-4xl font-bold text-primary mb-4">Custom Commission Slots</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Custom commissions require extra planning time and have a higher base fee. Select your preferred week!
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg max-w-md mx-auto border">
                <p className="text-sm font-medium">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Custom Commission Fee: $95 + material costs
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
                        <span className="text-muted-foreground">Base Fee:</span>
                        <span className="font-bold text-primary">${slot.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Complexity:</span>
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
                Continue to Custom Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Custom Commission Details */}
        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Bring Your Vision to Life</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The more details you provide, the better I can understand and create your dream piece!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Custom Commission Details</CardTitle>
                  <CardDescription>Help me understand your unique vision!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
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

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="project-description">Project Description *</Label>
                    <Textarea
                      id="project-description"
                      placeholder="Describe your custom creation in as much detail as possible. What character, animal, or object do you want? What pose or expression? Any specific features or accessories?"
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* Inspiration & References */}
                  <div>
                    <Label htmlFor="inspiration">Inspiration Sources</Label>
                    <Textarea
                      id="inspiration"
                      placeholder="What inspired this idea? Anime character, video game, movie, book, your own original design? Include names and specific details."
                      value={formData.inspiration}
                      onChange={(e) => setFormData({ ...formData, inspiration: e.target.value })}
                    />
                  </div>

                  {/* Reference Images */}
                  <div>
                    <Label htmlFor="reference-images">Reference Images</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground mb-2">Upload reference images, sketches, or inspiration photos</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        Choose Files
                      </Button>
                      {formData.referenceImages.length > 0 && (
                        <p className="text-sm text-primary mt-2">{formData.referenceImages.length} file(s) selected</p>
                      )}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="colors">Color Preferences</Label>
                      <Input
                        id="colors"
                        placeholder="Specific colors, color schemes, or 'surprise me'"
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
                          <SelectItem value="tiny">Tiny (2-4 inches)</SelectItem>
                          <SelectItem value="small">Small (4-6 inches)</SelectItem>
                          <SelectItem value="medium">Medium (6-8 inches)</SelectItem>
                          <SelectItem value="large">Large (8-12 inches)</SelectItem>
                          <SelectItem value="xl">Extra Large (12+ inches)</SelectItem>
                          <SelectItem value="custom-size">Custom Size (specify below)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="complexity">Complexity Level</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, complexity: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="How complex is this design?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple (basic shapes, minimal details)</SelectItem>
                          <SelectItem value="moderate">Moderate (some details, accessories)</SelectItem>
                          <SelectItem value="complex">Complex (intricate details, multiple parts)</SelectItem>
                          <SelectItem value="very-complex">Very Complex (highly detailed, challenging)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="What's your budget?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="95-150">$95-150 (Simple custom)</SelectItem>
                          <SelectItem value="150-250">$150-250 (Moderate complexity)</SelectItem>
                          <SelectItem value="250-400">$250-400 (Complex design)</SelectItem>
                          <SelectItem value="400+">$400+ (Very complex/large)</SelectItem>
                          <SelectItem value="flexible">Flexible (surprise me!)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="deadline">Timeline Preferences</Label>
                    <Input
                      id="deadline"
                      placeholder="Any specific deadlines or timeline preferences?"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="special-requests">Additional Notes & Special Requests</Label>
                    <Textarea
                      id="special-requests"
                      placeholder="Anything else I should know? Gift wrapping, special packaging, rush orders, etc."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between mt-8">
                <Button onClick={handlePrevStep} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Slots
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={!formData.name || !formData.email || !formData.projectDescription}
                  className="rounded-full px-8 py-3"
                >
                  Review Commission
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Commission Request Summary</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review your custom commission request before submitting!
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Booking Summary */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Commission Slot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Selected Week:</span>
                    <span className="text-primary font-bold">
                      {availableSlots.find((slot) => slot.id === selectedSlot)?.week}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Base Commission Fee:</span>
                    <span className="text-primary font-bold">
                      ${availableSlots.find((slot) => slot.id === selectedSlot)?.price}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground bg-accent p-3 rounded-lg">
                    <p className="font-medium mb-1">Note:</p>
                    <p>
                      Final price will be determined based on complexity, size, and materials needed. You'll receive a
                      detailed quote within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Custom Commission Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Contact:</span>
                    <p className="text-muted-foreground">
                      {formData.name} - {formData.email}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Project Description:</span>
                    <p className="text-muted-foreground">{formData.projectDescription}</p>
                  </div>
                  {formData.inspiration && (
                    <div>
                      <span className="font-medium">Inspiration:</span>
                      <p className="text-muted-foreground">{formData.inspiration}</p>
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
                  {formData.complexity && (
                    <div>
                      <span className="font-medium">Complexity:</span>
                      <p className="text-muted-foreground capitalize">{formData.complexity.replace("-", " ")}</p>
                    </div>
                  )}
                  {formData.budget && (
                    <div>
                      <span className="font-medium">Budget Range:</span>
                      <p className="text-muted-foreground">{formData.budget}</p>
                    </div>
                  )}
                  {formData.referenceImages.length > 0 && (
                    <div>
                      <span className="font-medium">Reference Images:</span>
                      <p className="text-muted-foreground">{formData.referenceImages.length} file(s) attached</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Process Info */}
              <Card className="border-2 bg-accent">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-bold text-primary">Custom Commission Process</h3>
                    <div className="text-sm space-y-2 text-left max-w-md mx-auto">
                      <p>• I'll review your request and send a detailed quote within 24 hours</p>
                      <p>• Once approved, 50% deposit secures your slot</p>
                      <p>• I'll send progress photos throughout the creation process</p>
                      <p>• Final 50% payment due before shipping</p>
                      <p>• Custom pieces typically take 5-7 days to complete</p>
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
                  Submit Commission Request
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}