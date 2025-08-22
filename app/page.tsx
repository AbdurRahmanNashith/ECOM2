"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function AdidasHero() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        // Show navbar when scrolling up or at top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true)
        } else {
          // Hide navbar when scrolling down
          setIsVisible(false)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          GET 10% OFF ON YOUR FIRST ORDER
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Header - Updated with scroll-based visibility */}
      <header
        className={`bg-white fixed top-8 left-0 right-0 z-50 border-b border-gray-100 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-black text-xl font-extrabold leading-5" style={{ fontFamily: "BRADHI, sans-serif" }}>
                SHOE STYLE
              </h1>
            </div>

            {/* Navigation - Updated with expanded dropdown menus */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    MEN
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Casual</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Formal</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Boots</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Belt</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Wallets</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Jerkins</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    WOMEN
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Formals</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Casuals</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Heel</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Handbags</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Wallets</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Belt</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Jerkin</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    KIDS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Boys</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Girls</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-bold px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    ACCESSORIES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Bagpack</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Laptop Bag</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Sling Bag</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Gloves</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Passport Holder</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Keychain</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Shoe Horn</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-black hover:text-gray-600 text-sm font-medium px-0" href="#">
                    OUTLET
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

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
