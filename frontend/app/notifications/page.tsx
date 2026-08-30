"use client";

import {
  Bell,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MapPin,
  Wheat,
  ArrowLeft,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    type: "procurement",
    title: "Procurement request submitted",
    message:
      "Your wheat procurement request for 8.5 quintal has been successfully submitted.",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    message:
      "₹20,825 has been credited for your completed wheat procurement.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    type: "quality",
    title: "Quality check completed",
    message:
      "Your crop has successfully passed the quality verification process.",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 4,
    type: "centre",
    title: "New procurement centre available",
    message:
      "A new procurement centre is now available near your registered location.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 5,
    type: "msp",
    title: "MSP price updated",
    message:
      "The Minimum Support Price for wheat has been updated to ₹2,275 per quintal.",
    time: "5 days ago",
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                KisanSetu
              </p>

              <h1 className="text-lg font-bold text-gray-900">
                Notifications
              </h1>
            </div>
          </div>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-gray-500 transition hover:bg-red-50 hover:text-red-600 sm:flex"
          >
            <Trash2 className="h-4 w-4" />
            Clear all
          </button>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        {/* Page heading */}
        <section className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                Updates
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Your Notifications
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Stay updated about your procurement, payments and crops.
              </p>
            </div>

            {/* Bell */}
            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-green-50 sm:flex">
              <Bell className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </section>

        {/* Unread summary */}
        <section className="mb-5 rounded-2xl border border-green-100 bg-green-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Bell className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm font-bold text-green-900">
                2 unread notifications
              </p>

              <p className="text-xs text-green-700">
                You have new updates waiting for you.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            NOTIFICATION LIST
        ===================================================== */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
            <h3 className="text-lg font-bold text-gray-900">
              Recent Activity
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Latest updates from KisanSetu
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => {
              let icon = <Bell className="h-5 w-5" />;
              let iconBackground = "bg-gray-100";
              let iconColor = "text-gray-600";

              if (notification.type === "procurement") {
                icon = <Wheat className="h-5 w-5" />;
                iconBackground = "bg-green-100";
                iconColor = "text-green-600";
              }

              if (notification.type === "payment") {
                icon = <IndianRupee className="h-5 w-5" />;
                iconBackground = "bg-blue-100";
                iconColor = "text-blue-600";
              }

              if (notification.type === "quality") {
                icon = <CheckCircle2 className="h-5 w-5" />;
                iconBackground = "bg-green-100";
                iconColor = "text-green-600";
              }

              if (notification.type === "centre") {
                icon = <MapPin className="h-5 w-5" />;
                iconBackground = "bg-purple-100";
                iconColor = "text-purple-600";
              }

              if (notification.type === "msp") {
                icon = <IndianRupee className="h-5 w-5" />;
                iconBackground = "bg-amber-100";
                iconColor = "text-amber-600";
              }

              return (
                <div
                  key={notification.id}
                  className={`relative flex gap-4 p-5 transition hover:bg-gray-50 sm:p-6 ${
                    notification.unread ? "bg-green-50/30" : ""
                  }`}
                >
                  {/* Unread indicator */}
                  {notification.unread && (
                    <span className="absolute left-2 top-8 h-2 w-2 rounded-full bg-green-600" />
                  )}

                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBackground} ${iconColor}`}
                  >
                    {icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <h4
                        className={`text-sm ${
                          notification.unread
                            ? "font-bold text-gray-900"
                            : "font-semibold text-gray-800"
                        }`}
                      >
                        {notification.title}
                      </h4>

                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock3 className="h-3.5 w-3.5" />
                        {notification.time}
                      </div>
                    </div>

                    <p className="mt-1.5 max-w-3xl text-sm leading-6 text-gray-500">
                      {notification.message}
                    </p>

                    {notification.unread && (
                      <span className="mt-3 inline-block rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-700">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            NOTIFICATION SETTINGS
        ===================================================== */}
        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Bell className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Stay informed
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Notifications will keep you updated about procurement
                requests, quality checks, payments and MSP changes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          BOTTOM NAV
      ===================================================== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-4 px-4 sm:px-6 lg:px-8">
          {/* Home */}
          <Link
            href="/dashboard"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">⌂</span>
            </div>

            <span className="text-xs font-medium">
              Home
            </span>
          </Link>

          {/* Procurement */}
          <Link
            href="/procurement"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">🌾</span>
            </div>

            <span className="text-xs font-medium">
              Procurement
            </span>
          </Link>

          {/* Payments */}
          <Link
            href="/payments"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-lg">₹</span>
            </div>

            <span className="text-xs font-medium">
              Payments
            </span>
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">♙</span>
            </div>

            <span className="text-xs font-medium">
              Profile
            </span>
          </Link>
        </div>
      </nav>
    </main>
  );
}