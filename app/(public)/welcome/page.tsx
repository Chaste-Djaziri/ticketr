"use client"; // Needed if you're in Next.js 13 App Router and using client-side features

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F6F9FC] to-white">
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:flex md:items-center md:justify-between">
        {/* Left Section: Headline, Subheadline, Buttons */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Background Event Management Platform
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            The refined management platform for seamless event planning,
            ticketing, and attendee engagement.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get Started
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section: Image or Illustration */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[350px] h-[350px] relative">
            {/* Example person or illustration image */}
            <Image
              src="/hero-person.png" // Replace with your actual image path
              alt="Event Management"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Graphics (Optional) */}
      <div
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 opacity-20 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}
