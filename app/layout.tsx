import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Evently | Event management system - Chaste Djaziri",
    template: "%s | Evently"
  },
  description:
    "Evently is an advanced event management system designed to streamline event planning, ticket sales, and attendee management with ease.",
  keywords: ["event management", "ticket sales", "event planning", "attendee management"],
  authors: [{ name: "Chaste Djaziri" }],
  creator: "Chaste Djaziri",
  publisher: "Micorp",
  metadataBase: new URL("https://evently.micorp.pro"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evently.micorp.pro",
    title: "TicketR | Event management system",
    description: "Evently is an advanced event management system designed to streamline event planning, ticket sales, and attendee management with ease.",
    siteName: "Evently",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evently - Event Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evently | Event management system",
    description: "Evently is an advanced event management system designed to streamline event planning, ticket sales, and attendee management with ease.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConvexClientProvider>
          <ClerkProvider>{children}</ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
