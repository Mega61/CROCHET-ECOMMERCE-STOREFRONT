import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary">CrochetCraft</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted with love, our crochet creations bring joy and warmth to every home. Each piece is unique and
              made with the finest materials.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shop</h3>
            <div className="space-y-2">
              <Link
                href="/products"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/categories/animals"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cute Animals
              </Link>
              <Link
                href="/categories/characters"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Anime Characters
              </Link>
              <Link
                href="/categories/baby"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Baby Items
              </Link>
              <Link href="/custom" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Orders
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/shipping"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Returns
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get notified about new arrivals and special offers!</p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="bg-background" />
              <Button className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 CrochetCraft. All rights reserved. Made with ❤️ for crochet lovers.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
