import { z } from "zod"

export const bookingFormSchema = z.object({
  // Customer Information
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),

  // Delivery Address
  street: z.string().min(5, {
    message: "Street address is required.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state: z.string().min(2, {
    message: "State/Province is required.",
  }),
  zipCode: z.string().min(3, {
    message: "ZIP/Postal code is required.",
  }),
  country: z.string().min(2, {
    message: "Country is required.",
  }),

  // Customization Details
  colors: z.string().min(3, {
    message: "Please specify your preferred colors.",
  }),
  size: z.string().min(1, {
    message: "Please select a size.",
  }),
  specialRequests: z.string().optional(),
})

export type BookingFormValues = z.infer<typeof bookingFormSchema>
