import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-2 border-pink-200 bg-white/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-pink-600 mb-4">✨ Booking Confirmed! ✨</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-lg text-gray-700 space-y-3">
              <p>
                Your magical crochet commission has been successfully booked! I'm so excited to bring your dream
                creation to life.
              </p>
              <p className="font-medium text-pink-600">
                You'll receive a confirmation email within the next few minutes with all the details.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-pink-600 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <p className="text-gray-700">I'll send you a PayPal invoice for the 50% deposit</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <p className="text-gray-700">Once paid, I'll start working on your piece during your booked week</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <p className="text-gray-700">You'll receive progress photos throughout the creation process</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <p className="text-gray-700">Final payment and shipping once your magical piece is complete!</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 rounded-full px-6 bg-transparent"
                >
                  Browse More Creations
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-full px-6">
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t border-pink-200">
              <p className="text-sm text-gray-600 mb-2">Questions about your order? Feel free to reach out!</p>
              <p className="text-pink-600 font-medium">✨ Thank you for choosing Crochet Magic! ✨</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
