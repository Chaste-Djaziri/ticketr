// app/components/public/WelcomeHeader.tsx
import React from "react";
import Link from "next/link";

export default function WelcomeHeader() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          TicketR
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
