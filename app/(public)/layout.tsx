// app/welcome/layout.tsx
import React from "react";
import WelcomeHeader from "./components/welcomeHeader";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Public Welcome Header */}
      <WelcomeHeader />

      {/* Page content goes here */}
      {children}
    </div>
  );
}
