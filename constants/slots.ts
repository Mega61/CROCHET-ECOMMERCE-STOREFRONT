import type { TimeSlot } from "@/types"

export const AVAILABLE_SLOTS: TimeSlot[] = [
  { id: 1, week: "Jan 15-21, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 2, week: "Jan 22-28, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 3, week: "Jan 29 - Feb 4, 2024", status: "booked", price: 85, difficulty: "Any" },
  { id: 4, week: "Feb 5-11, 2024", status: "available", price: 85, difficulty: "Any" },
  { id: 5, week: "Feb 12-18, 2024", status: "available", price: 85, difficulty: "Any" },
  {
    id: 6,
    week: "Feb 19-25, 2024",
    status: "limited",
    price: 85,
    difficulty: "Beginner only",
  },
]
