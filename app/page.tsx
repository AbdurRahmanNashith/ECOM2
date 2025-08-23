"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Header from "@/components/header"
import { Heart } from "lucide-react"
import { useState, useRef } from "react"

export default function AdidasHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselApiRef = useRef<any>(null)

  const products = [
    {
      id: 1,
      image: "/black-and-white-adidas-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
    },
    {
      id: 2,
      image: "/all-black-adidas-superstar.png",
      price: "₹9 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
    },
    {
      id: 3,
      image: "/beige-tan-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
    },
    {
      id: 4,
      image: "/purple-adidas-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
    },
    {
      id: 5,
      image: "/white-adidas-superstar-side.png",
      price: "₹12 999.00",
      name: "Superstar Classic",
      category: "Originals",
    },
    {
      id: 6,
      image: "/black-and-white-adidas-superstar.png",
      price: "₹10 999.00",
      name: "Superstar Retro",
      category: "Originals",
    },
    {
      id: 7,
      image: "/all-black-adidas-superstar.png",
      price: "₹13 999.00",
      name: "Superstar Premium",
      category: "Originals",
    },
    {
      id: 8,
      image: "/beige-tan-superstar.png",
      price: "₹11 499.00",
      name: "Superstar Limited",
      category: "Originals",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Added top padding to account for fixed navbar */}
      <main className="relative pt-[88px] sm:pt-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px] sm:min-h-[600px]">
          {/* Left Section */}
          <div className="relative bg-black text-white flex flex-col justify-between p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
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

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-0">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Originals</button>
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Cricket
              </button>
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Football
              </button>
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Training
              </button>
            </div>
            <button className="text-black font-medium underline text-sm">Shop all</button>
          </div>

          <div className="mb-16">
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: true,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
                setApi={(api) => {
                  carouselApiRef.current = api
                  if (api) {
                    api.on("select", () => {
                      setActiveIndex(api.selectedScrollSnap())
                    })
                  }
                }}
              >
                <CarouselContent className="gap-4">
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="basis-1/4 min-w-0">
                      <div
                        className="group cursor-pointer"
                        onClick={() => console.log(`Clicked product ${product.id}`)}
                      >
                        <div className="relative bg-gray-100 overflow-hidden mb-4 transition-all duration-200 hover:border hover:border-black aspect-[4/5]">
                          <button className="absolute top-4 right-4 z-10 p-2 hover:bg-white/20 rounded-full transition-colors">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-contain p-8"
                          />
                        </div>
                        <div className="space-y-1 px-2">
                          <p className="font-bold text-sm">{product.price}</p>
                          <h3 className="font-light text-sm">{product.name}</h3>
                          <p className="text-gray-500 text-xs font-light">{product.category}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 w-12 h-12" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 w-12 h-12" />
              </Carousel>
            </div>

            <div className="relative w-full h-1 mt-8">
              <div
                className="absolute h-1 bg-black transition-all duration-300 ease-out"
                style={{
                  width: "25%", // Each card takes 1/4 of the width
                  left: `${activeIndex * 25}%`,
                }}
              />
            </div>
          </div>

          {/* What's Hot Section */}
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12 tracking-tight">WHAT'S HOT?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="aspect-square bg-black rounded-lg overflow-hidden">
                <img src="/urban-adidas-style.png" alt="What's Hot 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img src="/adidas-lifestyle.png" alt="What's Hot 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src="/adidas-street-style.png" alt="What's Hot 3" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
                <img src="/adidas-lifestyle-portrait.png" alt="What's Hot 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
