"use client"

import { CountdownTimer } from "@/components/countdown-timer"
import { Instagram, Phone } from "lucide-react"
import Prism from "@/components/ui/prism" // Updated path based on your error
import TextPressure from "@/components/ui/textpressure"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background - Prism Component */}
      <div className="absolute inset-0 z-0">
        <Prism />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full p-8 z-30 ml-2">
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-lg ">
            Pentalks
          </h1>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
          {/* Hero Section */}
          <div className="text-center mb-12 max-w-2xl">
            <TextPressure
              text="Coming Soon"
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
            />
            <p className="text-xl md:text-2xl text-white/90  mt-2 font-[family-name:var(--font-dm-sans)] drop-shadow-md">
              Stay tuned for an innovative experience
            </p>
            
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <CountdownTimer />
          </div>

          {/* Bottom Section with Countdown and Contact */}
          <div className="absolute left-4 right-4 z-30 bottom-4 sm:bottom-4 md:bottom-6 lg:bottom-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              {/* Left: Additional countdown info */}
              <div className="text-left sm:ml-5 w-full sm:w-auto">
                <p className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mb-1">Launch Date</p>
                <p className="text-lg mb-2 sm:mb-5 font-semibold text-white font-[family-name:var(--font-space-grotesk)]">
                  September 22, 2025
                </p>
              </div>

              {/* Right: Contact Information */}
              <div className="text-left sm:text-right sm:mr-5 w-full sm:w-auto -mb-4 sm:mb-5">
                <p className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mb-1">Get in touch</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2 sm:mb-5">
                  <a
                    href="tel:+91 90741 99551"
                    className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-[family-name:var(--font-dm-sans)]">+91 90741 99551</span>
                  </a>
                  <a
                    href="https://instagram.com/pentalks_here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <Instagram size={18} />
                    <span className="font-[family-name:var(--font-dm-sans)]">@pentalks_here</span>
                  </a>
                </div>
              </div>
            </div>
          </div>           
        </main>
      </div>
    </div>
  )
}