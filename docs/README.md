# Crochet E-commerce Storefront

A modern, fully-typed e-commerce platform for handmade crochet creations built with industry-standard technologies and patterns.

## Tech Stack

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Internationalization
- **next-intl** - i18n support (English & Spanish)

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── [locale]/            # Internationalized routes
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   └── index.ts            # Barrel exports
├── constants/              # Data constants
│   ├── products.ts
│   ├── slots.ts
│   ├── catalog.ts
│   └── index.ts
├── types/                  # TypeScript interfaces
│   └── index.ts
├── validations/            # Zod schemas
│   ├── booking.ts
│   └── index.ts
├── messages/               # i18n translations
│   ├── en.json
│   └── es.json
├── lib/                    # Utility functions
│   └── utils.ts
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
└── i18n.ts                 # i18n configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CROCHET-ECOMMERCE-STOREFRONT
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Initialize Husky (pre-commit hooks):
```bash
npm run prepare
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Features

### Implemented

- Modern, responsive UI with Tailwind CSS
- 40+ shadcn/ui components
- Dark mode support
- Multi-language support (English, Spanish)
- Type-safe development with TypeScript
- Form validation with Zod
- Code quality tools (ESLint, Prettier)
- Pre-commit hooks with Husky

### Design Patterns

- **Separation of Concerns**: Data, types, and components are properly organized
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Composition**: Reusable UI components with shadcn/ui
- **Validation**: Zod schemas for runtime validation
- **Internationalization**: next-intl for multi-language support
- **Code Quality**: Automated linting and formatting

## i18n (Internationalization)

The application supports multiple languages using next-intl:

- Default language: English (en)
- Supported languages: English, Spanish (es)
- Automatic language detection
- Manual language switcher in header

### Adding New Languages

1. Create a new translation file in `messages/[locale].json`
2. Add the locale to `i18n.ts`
3. Update the language switcher component

## Contributing

1. Create a new branch
2. Make your changes
3. Run linting and formatting: `npm run lint && npm run format`
4. Commit your changes (pre-commit hooks will run automatically)
5. Push and create a pull request

## Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- Automatic formatting on commit via lint-staged

Configuration files:
- `.eslintrc.json` - ESLint rules
- `.prettierrc.json` - Prettier configuration
- `.lintstagedrc.json` - Pre-commit hooks

## License

All rights reserved.

## Support

For issues or questions, please open an issue in the repository.
