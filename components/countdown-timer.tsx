"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Target date: September 22, 2025 (1 month from August 22)
    const targetDate = new Date(2025, 8, 22, 0, 0, 0).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-lg">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mt-1">Days</div>
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-white/60 font-[family-name:var(--font-space-grotesk)] drop-shadow-lg px-2 -mt-7">
        :
      </div>
      
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-lg">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mt-1">Hours</div>
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-white/60 font-[family-name:var(--font-space-grotesk)] drop-shadow-lg px-2 -mt-7">
        :
      </div>
      
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-lg">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mt-1">Minutes</div>
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-white/60 font-[family-name:var(--font-space-grotesk)] drop-shadow-lg px-2 -mt-7">
        :
      </div>
      
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-lg">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-sm text-white/70 font-[family-name:var(--font-dm-sans)] mt-1">Seconds</div>
      </div>
    </div>
  )
}