"use client"

import { useEffect, useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function WelcomePageClient() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Section: Headline, Subheadline, Buttons */}
          <div
            className={`space-y-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-2 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                New
              </span>
              <span className="text-gray-700 dark:text-gray-300">Introducing our AI-powered event analytics</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              <span className="block">Breakthrough</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Event Management Platform
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              The refined management platform for seamless event planning, ticketing, and attendee engagement with
              powerful analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3 text-gray-700 dark:text-gray-200 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Learn More
              </a>
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 overflow-hidden bg-primary/20"
                    >
                      <div className="h-full w-full flex items-center justify-center text-primary text-xs font-bold">
                        {i}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">2,000+</span> event organizers trust us
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Image or Illustration */}
          <div
            className={`relative transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative mx-auto md:mr-0 w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/0 dark:from-primary/10 dark:to-transparent animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm" />
              <div className="relative h-full w-full p-4">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shadow-xl">
                  <div className="text-primary text-4xl font-bold">Evently</div>
                </div>
              </div>

              {/* Floating feature cards */}
              <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-sm font-medium">Real-time Analytics</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 max-w-[200px] rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1.5">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-sm font-medium">Smart Ticketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About <span className="text-primary">Evently</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionize how events are managed, making it easier for organizers to create
              memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2020, Evently was born from the frustration of event organizers struggling with fragmented
                tools and complex workflows. We set out to build a unified platform that simplifies every aspect of
                event management.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Today, we&apos;re proud to serve thousands of event organizers worldwide, from small community
                gatherings to large-scale conferences and festivals.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                  <p className="text-gray-600 dark:text-gray-400">Events Managed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1.2M+</div>
                  <p className="text-gray-600 dark:text-gray-400">Tickets Sold</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-gray-600 dark:text-gray-400">Customer Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">35+</div>
                  <p className="text-gray-600 dark:text-gray-400">Countries Served</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video w-full bg-gradient-to-tr from-primary/30 to-primary/5 flex items-center justify-center">
                  <div className="text-primary text-4xl font-bold">Evently</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  &quot;We&apos;re building the future of event management&quot;
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">— Jane Doe, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Feature highlights */}
            <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, manage, and grow successful events in one platform.
          </p>
        </div>

        <div
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {[
            {
              title: "Seamless Registration",
              description: "Streamlined registration process with customizable forms and automated confirmations.",
            },
            {
              title: "Attendee Engagement",
              description: "Interactive tools to keep your attendees engaged before, during, and after your events.",
            },
            {
              title: "Comprehensive Analytics",
              description: "Detailed insights and reports to measure success and improve future events.",
            },
            {
              title: "Mobile Check-in",
              description: "Streamline the check-in process with our mobile app and QR code scanning.",
            },
            {
              title: "Payment Processing",
              description: "Secure payment processing with support for multiple currencies and payment methods.",
            },
            {
              title: "Marketing Tools",
              description: "Built-in email marketing, social sharing, and promotional tools to boost attendance.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our platform and services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What types of events can I manage with Evently?",
                answer:
                  "Evently is designed to handle all types of events, from small workshops and meetups to large conferences, concerts, and festivals. Our platform is flexible enough to accommodate various event formats, including virtual, hybrid, and in-person events.",
              },
              {
                question: "How does the pricing work?",
                answer:
                  "We offer tiered pricing plans based on your needs. Our Starter plan is perfect for small events and is priced at $49/month. For larger events, our Professional plan at $99/month offers advanced features. Enterprise customers with specific requirements can contact us for custom pricing.",
              },
              {
                question: "Can I customize the registration forms?",
                answer:
                  "Evently provides fully customizable registration forms. You can add custom fields, create conditional logic, set up multi-page forms, and even customize the design to match your brand. All forms are mobile-responsive and optimized for high conversion rates.",
              },
              {
                question: "How do I get support if I need help?",
                answer:
                  "We offer multiple support channels. All customers have access to our comprehensive knowledge base and email support with 24-hour response times. Professional and Enterprise plans include priority support with faster response times and access to live chat. Enterprise customers also receive a dedicated account manager.",
              },
              {
                question: "Is Evently GDPR compliant?",
                answer:
                  "Yes, Evently is fully GDPR compliant. We take data privacy seriously and have implemented all necessary measures to ensure compliance with GDPR and other privacy regulations. You can read more about our privacy practices in our Privacy Policy.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/20"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-200 ease-in-out",
                    openFaq === index ? "max-h-96 pb-6" : "max-h-0",
                  )}
                >
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions or ready to get started? Reach out to our team and we&apos;ll be happy to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-6 py-3 text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <a
                        href="mailto:hello@Evently.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                      >
                        hello@Evently.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Office</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Event Street, Suite 100
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monday - Friday:</span>
                    <span className="text-gray-900 dark:text-white">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Saturday:</span>
                    <span className="text-gray-900 dark:text-white">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sunday:</span>
                    <span className="text-gray-900 dark:text-white">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md">
                <p className="text-gray-900 dark:text-white font-medium mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Evently</div>
              <p className="text-gray-400 mb-4 max-w-xs">
                The complete platform for event organizers to create, manage, and grow successful events.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-primary">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Event Planning Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Evently. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-primary text-sm">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-primary text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Background Graphics */}
      <div
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/30 opacity-20 dark:opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-yellow-400/30 to-primary/30 opacity-20 dark:opacity-10 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-gray-100/5 dark:bg-gray-900/10" aria-hidden="true" />
    </div>
  )
}

