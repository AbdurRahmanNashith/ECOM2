"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function AdidasHero() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Added top padding to account for fixed navbar */}
      <main className="relative pt-[88px] sm:pt-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px] sm:min-h-[600px]">
          {/* Left Section */}
          <div className="relative bg-black text-white flex flex-col justify-between p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "BRADHI, sans-serif" }}
              >
                SHOE STYLE
              </h2>
            </div>

            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="/thoughtful-portrait.png"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 mt-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight">SUPERSTAR</h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-sm">Because icons wear the original icon.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                  Shop Women →
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                  Shop Men →
                </Button>
              </div>
            </div>
          </div>

          {/* Center Section - Product */}
          <div className="relative bg-gray-100 flex items-center justify-center p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src="/white-adidas-superstar-side.png"
                alt="Adidas Superstar Shoe"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                  Explore Superstar →
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white flex flex-col justify-between p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
              <svg
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-black"
                viewBox="0 0 69 69"
                fill="currentColor"
              >
                <path d="M69 13.2L56.4 35.8L69 58.4L56.4 69L43.8 46.4L31.2 69L18.6 58.4L31.2 35.8L18.6 13.2L31.2 2.6L43.8 25.2L56.4 2.6L69 13.2Z" />
              </svg>
            </div>

            <img
              src="/person-adidas-tracksuit-bw.png"
              alt="Person in Adidas tracksuit"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 mt-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black tracking-tight">
                SUPERSTAR
              </h1>
            </div>
          </div>
        </div>

        {/* Large SUPERSTAR text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white/10 tracking-tighter whitespace-nowrap px-4">
            SUPERSTAR
          </h1>
        </div>
      </main>
    </div>
  )
}
