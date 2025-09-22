"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, Calendar, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-primary">StitchSlots</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/catalog" className="text-foreground hover:text-primary transition-colors">
              Crochet Catalog
            </Link>
            <Link href="/booking" className="text-foreground hover:text-primary transition-colors">
              Book a Slot
            </Link>
            <Link href="/my-orders" className="text-foreground hover:text-primary transition-colors">
              My Commissions
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search crochet patterns..." className="pl-10 bg-card" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Calendar className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground">
                2
              </Badge>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search crochet patterns..." className="pl-10 bg-card" />
              </div>
              <Link href="/catalog" className="text-foreground hover:text-primary transition-colors py-2">
                Crochet Catalog
              </Link>
              <Link href="/booking" className="text-foreground hover:text-primary transition-colors py-2">
                Book a Slot
              </Link>
              <Link href="/my-orders" className="text-foreground hover:text-primary transition-colors py-2">
                My Commissions
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
