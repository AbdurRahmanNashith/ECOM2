"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function AdidasHero() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Added top padding to account for fixed navbar */}
      <main className="relative pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
          {/* Left Section */}
          <div className="relative bg-black text-white flex flex-col justify-between p-8 lg:p-12">
            <div className="absolute top-8 left-8">
              <h2 className="text-white text-4xl font-bold" style={{ fontFamily: "BRADHI, sans-serif" }}>
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
              <h1 className="text-6xl lg:text-7xl font-black mb-4 tracking-tight">SUPERSTAR</h1>
              <p className="text-lg mb-8 max-w-sm">Because icons wear the original icon.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3"
                >
                  Shop Women →
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3"
                >
                  Shop Men →
                </Button>
              </div>
            </div>
          </div>

          {/* Center Section - Product */}
          <div className="relative bg-gray-100 flex items-center justify-center p-8">
            <div className="relative">
              <img
                src="/white-adidas-superstar-side.png"
                alt="Adidas Superstar Shoe"
                className="w-full max-w-lg h-auto object-contain"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Explore Superstar →</Button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white flex flex-col justify-between p-8 lg:p-12">
            <div className="absolute top-8 right-8">
              <svg className="w-16 h-16 text-black" viewBox="0 0 69 69" fill="currentColor">
                <path d="M69 13.2L56.4 35.8L69 58.4L56.4 69L43.8 46.4L31.2 69L18.6 58.4L31.2 35.8L18.6 13.2L31.2 2.6L43.8 25.2L56.4 2.6L69 13.2Z" />
              </svg>
            </div>

            <img
              src="/person-adidas-tracksuit-bw.png"
              alt="Person in Adidas tracksuit"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 mt-auto">
              <h1 className="text-6xl lg:text-7xl font-black text-black tracking-tight">SUPERSTAR</h1>
            </div>
          </div>
        </div>

        {/* Large SUPERSTAR text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
          <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-black text-white/10 tracking-tighter whitespace-nowrap">
            SUPERSTAR
          </h1>
        </div>
      </main>
    </div>
  )
}
