import { z } from "zod"

export const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  colors: z.string().min(3, {
    message: "Please specify your preferred colors.",
  }),
  size: z.string().min(1, {
    message: "Please select a size.",
  }),
  specialRequests: z.string().optional(),
})

export type BookingFormValues = z.infer<typeof bookingFormSchema>
