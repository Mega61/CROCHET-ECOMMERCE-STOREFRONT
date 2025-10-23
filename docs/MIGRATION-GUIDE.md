# Migration Guide

This guide will help you migrate existing components to use the new homologated structure.

---

## Table of Contents
1. [Installing Dependencies](#installing-dependencies)
2. [Using Constants](#using-constants)
3. [Using Translations](#using-translations)
4. [Using Validation](#using-validation)
5. [Using Type Definitions](#using-type-definitions)
6. [Component Import Pattern](#component-import-pattern)

---

## Installing Dependencies

First, install all new dependencies:

```bash
npm install
```

Initialize Husky for git hooks:

```bash
npm run prepare
```

---

## Using Constants

### Before (Hardcoded Data)
```typescript
// app/booking/page.tsx
const availableSlots = [
  { id: 1, week: "Jan 15-21, 2024", status: "available", price: 85 },
  // ... more items
]
```

### After (Using Constants)
```typescript
// app/booking/page.tsx
import { AVAILABLE_SLOTS } from "@/constants"

// Use AVAILABLE_SLOTS directly
const slots = AVAILABLE_SLOTS
```

### Available Constants
```typescript
import {
  FEATURED_PRODUCTS,
  AVAILABLE_SLOTS,
  CATALOG_ITEMS,
  TESTIMONIALS
} from "@/constants"
```

---

## Using Translations

### Step 1: Update Component to Client Component (if needed)
```typescript
"use client"
```

### Step 2: Import useTranslations Hook
```typescript
import { useTranslations } from "next-intl"
```

### Step 3: Use Translations

#### Before (Hardcoded Text)
```typescript
export function Header() {
  return (
    <header>
      <span>StitchSlots</span>
      <nav>
        <Link href="/catalog">Crochet Catalog</Link>
        <Link href="/booking">Book a Slot</Link>
      </nav>
    </header>
  )
}
```

#### After (Using Translations)
```typescript
"use client"
import { useTranslations } from "next-intl"

export function Header() {
  const t = useTranslations("header")

  return (
    <header>
      <span>{t("logo")}</span>
      <nav>
        <Link href="/catalog">{t("nav.catalog")}</Link>
        <Link href="/booking">{t("nav.booking")}</Link>
      </nav>
    </header>
  )
}
```

### Translation Keys Structure

See `messages/en.json` for all available keys:

```typescript
// Header translations
const t = useTranslations("header")
t("logo")           // "StitchSlots"
t("nav.catalog")    // "Crochet Catalog"
t("search")         // "Search crochet patterns..."

// Hero translations
const t = useTranslations("hero")
t("title")          // "Handcrafted Crochet Magic"
t("cta.book")       // "Book Your Slot Now"

// Booking translations
const t = useTranslations("booking")
t("form.name")      // "Full Name"
t("form.email")     // "Email"
```

---

## Using Validation

### Step 1: Import Schema
```typescript
import { bookingFormSchema, type BookingFormValues } from "@/validations"
```

### Step 2: Set Up React Hook Form

#### Before (Basic useState)
```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
})

const handleSubmit = () => {
  alert("Booking submitted!")
}
```

#### After (React Hook Form + Zod)
```typescript
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingFormSchema, type BookingFormValues } from "@/validations"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

export function BookingForm() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      colors: "",
      size: "",
      specialRequests: "",
    },
  })

  function onSubmit(values: BookingFormValues) {
    console.log(values) // All validated!
    // TODO: Send to API
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Repeat for other fields */}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Using Type Definitions

### Import Types
```typescript
import type { Product, TimeSlot, BookingFormData } from "@/types"
```

### Use in Component Props
```typescript
interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  )
}
```

### Use in State
```typescript
const [products, setProducts] = useState<Product[]>([])
const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
```

---

## Component Import Pattern

### Before (Individual Imports)
```typescript
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
```

### After (Barrel Exports)
```typescript
import { Header, Footer, Hero } from "@/components"
```

### Available Barrel Exports
```typescript
// Components
import {
  Header,
  Hero,
  Footer,
  FeaturedProducts,
  CrochetCatalog,
  AvailableSlots,
  Testimonials,
  ThemeProvider,
  LanguageSwitcher
} from "@/components"

// Constants
import {
  FEATURED_PRODUCTS,
  AVAILABLE_SLOTS,
  CATALOG_ITEMS,
  TESTIMONIALS
} from "@/constants"

// Types
import type {
  Product,
  TimeSlot,
  CatalogItem,
  Testimonial,
  BookingFormData,
  Category
} from "@/types"

// Validations
import { bookingFormSchema, type BookingFormValues } from "@/validations"
```

---

## Example: Complete Component Migration

### Before
```typescript
// app/booking/page.tsx
"use client"
import { useState } from "react"
import { Header } from "@/components/header"

const availableSlots = [
  { id: 1, week: "Jan 15-21, 2024", status: "available", price: 85 },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  return (
    <div>
      <Header />
      <h1>Book Your Slot</h1>
      <form onSubmit={(e) => { e.preventDefault(); alert("Submitted!") }}>
        <input
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </form>
    </div>
  )
}
```

### After
```typescript
// app/[locale]/booking/page.tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Header } from "@/components"
import { AVAILABLE_SLOTS } from "@/constants"
import { bookingFormSchema, type BookingFormValues } from "@/validations"
import type { TimeSlot } from "@/types"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BookingPage() {
  const t = useTranslations("booking")

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      colors: "",
      size: "",
      specialRequests: "",
    },
  })

  function onSubmit(values: BookingFormValues) {
    console.log(values)
    // TODO: API call
  }

  return (
    <div>
      <Header />
      <h1>{t("title")}</h1>

      <div className="grid gap-4">
        {AVAILABLE_SLOTS.map((slot: TimeSlot) => (
          <div key={slot.id}>
            {slot.week} - ${slot.price}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("form.namePlaceholder")} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">{t("form.submit")}</Button>
        </form>
      </Form>
    </div>
  )
}
```

---

## Migrating Existing Pages

All pages need to move into the `app/[locale]` folder for i18n support:

```
Before:
app/
  ├── page.tsx
  ├── catalog/
  │   └── page.tsx
  └── booking/
      └── page.tsx

After:
app/
  ├── layout.tsx (root - no changes)
  └── [locale]/
      ├── layout.tsx (new - wraps with i18n)
      ├── page.tsx (moved)
      ├── catalog/
      │   └── page.tsx (moved)
      └── booking/
          └── page.tsx (moved)
```

### Moving Steps:
1. Create `app/[locale]` folder
2. Move all route folders into `[locale]`
3. Create `app/[locale]/layout.tsx` (see existing file)
4. Update imports to use translations

---

## Running Code Quality Checks

After migration:

```bash
# Check TypeScript types
npm run type-check

# Run ESLint
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

---

## Testing i18n

1. Start dev server: `npm run dev`
2. Visit `http://localhost:3000` (default English)
3. Visit `http://localhost:3000/es` (Spanish)
4. Use the language switcher in the header

---

## Common Issues

### Issue: "Module not found" after migration
**Solution**: Make sure you're using the correct import paths with `@/`

### Issue: Translations not working
**Solution**:
1. Check component has `"use client"` directive
2. Verify translation key exists in `messages/en.json`
3. Ensure `useTranslations()` is called with correct namespace

### Issue: Types not recognized
**Solution**: Run `npm run type-check` to see specific errors

### Issue: ESLint errors
**Solution**: Run `npm run lint` to auto-fix, or `npm run format` for Prettier issues

---

## Need Help?

1. Check `README.md` for general setup
2. See `HOMOLOGATION-SUMMARY.md` for complete changes list
3. Review example components in the codebase
4. Check ESLint/TypeScript errors for specific guidance