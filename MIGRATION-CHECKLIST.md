# Migration Checklist

Use this checklist to track your progress migrating the codebase to the new homologated structure.

---

## Phase 1: Setup & Installation ✅

- [x] Install all dependencies (`npm install`)
- [x] Initialize Husky (`npm run prepare`)
- [x] Review new project structure
- [x] Read MIGRATION-GUIDE.md
- [ ] Run `npm run type-check` to check for errors
- [ ] Run `npm run lint` to check for linting issues

---

## Phase 2: Move Pages to i18n Structure

### Pages to Move
- [ ] Move `app/page.tsx` → `app/[locale]/page.tsx`
- [ ] Move `app/catalog/page.tsx` → `app/[locale]/catalog/page.tsx`
- [ ] Move `app/booking/page.tsx` → `app/[locale]/booking/page.tsx`
- [ ] Move `app/custom-commission/page.tsx` → `app/[locale]/custom-commission/page.tsx`
- [ ] Move `app/checkout/success/page.tsx` → `app/[locale]/checkout/success/page.tsx`

### Update Imports
After moving, update each page:
- [ ] Add `"use client"` directive if using hooks/state
- [ ] Import `useTranslations` from "next-intl"
- [ ] Replace hardcoded strings with translation keys

---

## Phase 3: Component Refactoring

### Header Component
- [ ] Update to use translations (`useTranslations("header")`)
- [ ] Add LanguageSwitcher component to header
- [ ] Replace hardcoded text with `t("nav.catalog")`, etc.

### Hero Component
- [ ] Update to use translations (`useTranslations("hero")`)
- [ ] Replace title, subtitle, CTA text

### Featured Products Component
- [ ] Import products from `@/constants` (FEATURED_PRODUCTS)
- [ ] Add TypeScript types from `@/types` (Product)
- [ ] Update to use translations (`useTranslations("featured")`)

### Crochet Catalog Component
- [ ] Update to use translations (`useTranslations("catalog")`)
- [ ] Add proper TypeScript types

### Available Slots Component
- [ ] Import slots from `@/constants` (AVAILABLE_SLOTS)
- [ ] Add TypeScript types from `@/types` (TimeSlot)
- [ ] Update to use translations (`useTranslations("slots")`)

### Testimonials Component
- [ ] Import testimonials from `@/constants` (TESTIMONIALS)
- [ ] Add TypeScript types from `@/types` (Testimonial)
- [ ] Update to use translations (`useTranslations("testimonials")`)

### Footer Component
- [ ] Update to use translations (`useTranslations("footer")`)

---

## Phase 4: Form Validation

### Booking Page Form
- [ ] Install dependencies (already done)
- [ ] Import `useForm` from "react-hook-form"
- [ ] Import `zodResolver` from "@hookform/resolvers/zod"
- [ ] Import `bookingFormSchema` from "@/validations"
- [ ] Replace `useState` form handling with `useForm`
- [ ] Add Form components from shadcn/ui
- [ ] Implement proper error handling
- [ ] Replace `alert()` with toast notification (using sonner)

### Other Forms (if any)
- [ ] Identify other forms in the app
- [ ] Create Zod schemas in `/validations`
- [ ] Migrate to react-hook-form

---

## Phase 5: Type Safety

### Add Type Annotations
- [ ] Review all components for missing types
- [ ] Add prop interfaces to all components
- [ ] Type all useState hooks
- [ ] Type all function parameters
- [ ] Run `npm run type-check` and fix all errors

### Example Checklist for Each Component
For each component file:
- [ ] Props have TypeScript interface
- [ ] State variables are typed
- [ ] Event handlers are typed
- [ ] API responses are typed (when implemented)

---

## Phase 6: Code Quality

### Format Code
- [ ] Run `npm run format` to auto-format all files
- [ ] Review formatting changes
- [ ] Commit formatted code

### Fix Linting Issues
- [ ] Run `npm run lint`
- [ ] Fix any remaining ESLint warnings/errors
- [ ] Review and approve lint fixes

### Git Hooks
- [ ] Test pre-commit hook (make a small change and commit)
- [ ] Verify lint-staged runs automatically
- [ ] Ensure commits are blocked if linting fails

---

## Phase 7: Testing

### Manual Testing
- [ ] Test application in development mode
- [ ] Test English language (default)
- [ ] Test Spanish language (`/es`)
- [ ] Test language switcher
- [ ] Test all pages load correctly
- [ ] Test forms validate correctly
- [ ] Test responsive design (mobile, tablet, desktop)

### Build Testing
- [ ] Run `npm run build`
- [ ] Fix any build errors
- [ ] Test production build (`npm start`)
- [ ] Verify everything works in production mode

---

## Phase 8: Documentation

### Code Documentation
- [ ] Add JSDoc comments to complex functions
- [ ] Document any custom hooks
- [ ] Document API routes (when created)

### Translation Documentation
- [ ] Document translation key naming conventions
- [ ] Add comments for complex translation structures
- [ ] Document how to add new languages

---

## Phase 9: Optional Enhancements

### Performance
- [ ] Add dynamic imports for heavy components
- [ ] Optimize images with next/image
- [ ] Add loading states
- [ ] Add error boundaries

### SEO
- [ ] Add metadata to all pages
- [ ] Add structured data
- [ ] Create sitemap
- [ ] Add robots.txt

### Analytics
- [ ] Set up analytics events
- [ ] Track form submissions
- [ ] Track language switches

---

## Phase 10: Cleanup

### Remove Old Files
- [ ] Remove any duplicate files from migration
- [ ] Clean up unused imports
- [ ] Remove commented-out code
- [ ] Delete test/debug files

### Final Checks
- [ ] All TODO comments addressed or documented
- [ ] No console.log statements (except intentional)
- [ ] All imports use barrel exports where available
- [ ] No unused dependencies in package.json

---

## Completion Checklist

### Before Merging
- [x] All dependencies installed
- [x] Configuration files created
- [x] Project structure reorganized
- [ ] All pages migrated to [locale] folder
- [ ] All components using translations
- [ ] All forms using validation
- [ ] Type checking passes
- [ ] Linting passes
- [ ] Build succeeds
- [ ] Manual testing complete

### After Merging
- [ ] Update team documentation
- [ ] Train team on new patterns
- [ ] Set up CI/CD pipeline
- [ ] Deploy to staging
- [ ] Deploy to production

---

## Notes

Use this space for any migration notes or issues encountered:

```
// Your notes here
```

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run type-check       # Check TypeScript types

# Git
npm run prepare          # Initialize Husky hooks
git add .
git commit -m "..."      # Pre-commit hooks will run
```

---

## Need Help?

- See `README.md` for setup
- See `MIGRATION-GUIDE.md` for detailed migration steps
- See `HOMOLOGATION-SUMMARY.md` for complete changes
- Check translation keys in `messages/en.json`
- Review types in `types/index.ts`