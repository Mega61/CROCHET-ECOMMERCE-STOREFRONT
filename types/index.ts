export interface Product {
  id: number
  name: string
  price: number | string
  image: string
  category?: string
  description?: string
  rating?: number
  reviews?: number
}

export interface TimeSlot {
  id: number
  week: string
  status: "available" | "booked" | "limited"
  price: number
  difficulty: string
}

export interface CatalogItem {
  name: string
  price: string
  image: string
  description?: string
}

export interface Testimonial {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
  date?: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  colors: string
  size: string
  specialRequests: string
}

export interface Category {
  id: number
  name: string
  description: string
  image: string
  itemCount?: number
}

export type SlotStatus = "available" | "booked" | "limited"
