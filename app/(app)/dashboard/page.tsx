// app/dashboard/page.tsx
import EventList from "@/components/EventList";
import React from "react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events Dashboard</h1>
      <EventList />
    </div>
  );
}
