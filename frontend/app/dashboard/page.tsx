"use client";

import Link from "next/link";
import { Bell } from "lucide-react";

import QuickStats from "@/components/dashboard/QuickStats";
import PaymentCard from "@/components/dashboard/PaymentCard";
import MspCard from "@/components/dashboard/MspCard";
import ProcurementSection from "@/components/dashboard/ProcurementSection";
import BottomNav from "@/components/dashboard/bottom-nav";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div>
            <p className="text-sm text-gray-500">
              Welcome back 👋
            </p>

            <h1 className="text-xl font-bold text-gray-900">
              KisanSetu
            </h1>
          </div>

          {/* Notification Button */}
          <Link
            href="/notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 transition hover:bg-green-100"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            {/* Notification dot */}
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Greeting */}
        <section className="rounded-2xl bg-green-700 p-6 text-white shadow-sm">
          <p className="text-sm font-medium text-green-100">
            Farmer Dashboard
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Namaste, Farmer 🌾
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-green-100">
            Check today&apos;s procurement opportunities, MSP prices,
            payments and your crop status from one place.
          </p>
        </section>

        {/* Quick statistics */}
        <section>
          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-900">
              Your Overview
            </h2>

            <p className="text-sm text-gray-500">
              Your latest farming activity
            </p>
          </div>

          <QuickStats />
        </section>

        {/* Procurement */}
        <section>
          <ProcurementSection />
        </section>

        {/* MSP */}
        <section>
          <MspCard />
        </section>

        {/* Payments */}
        <section>
          <PaymentCard />
        </section>
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </main>
  );
}