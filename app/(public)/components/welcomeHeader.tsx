"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WelcomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "features", "faq", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (section: string) => activeSection === section

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 transition-all duration-200",
        "supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all hover:from-primary/80 hover:to-primary"
            >
              Evently
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#about"
                  className={cn(
                    "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group",
                    isActive("about") && "text-primary dark:text-primary",
                  )}
                >
                  About
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform transition-transform origin-left",
                      isActive("about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className={cn(
                    "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group",
                    isActive("features") && "text-primary dark:text-primary",
                  )}
                >
                  Features
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform transition-transform origin-left",
                      isActive("features") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className={cn(
                    "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group",
                    isActive("faq") && "text-primary dark:text-primary",
                  )}
                >
                  FAQ
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform transition-transform origin-left",
                      isActive("faq") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={cn(
                    "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group",
                    isActive("contact") && "text-primary dark:text-primary",
                  )}
                >
                  Contact
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform transition-transform origin-left",
                      isActive("contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </a>
              </li>
              <li>
                <a
                  href="https://exact-ant-69.accounts.dev/sign-in"
                  className="ml-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus:ring-1 focus:ring-ring"
                >
                  Sign In
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-800">
          <a
            href="#about"
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors",
              isActive("about") && "text-primary dark:text-primary",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#features"
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors",
              isActive("features") && "text-primary dark:text-primary",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#faq"
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors",
              isActive("faq") && "text-primary dark:text-primary",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors",
              isActive("contact") && "text-primary dark:text-primary",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://exact-ant-69.accounts.dev/sign-in"
            className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  )
}

