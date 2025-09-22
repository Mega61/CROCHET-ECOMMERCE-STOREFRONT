import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AvailableSlots } from "@/components/available-slots"
import { CrochetCatalog } from "@/components/crochet-catalog"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AvailableSlots />
        <CrochetCatalog />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
