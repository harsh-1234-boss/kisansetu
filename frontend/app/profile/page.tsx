"use client";

import Image from "next/image";
import {
  User,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  Bell,
  LogOut,
  Pencil,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600">
              <span className="text-lg">🌾</span>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Farmer Portal
              </p>

              <h1 className="text-lg font-bold text-gray-900">
                KisanSetu
              </h1>
            </div>
          </div>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-green-50 hover:text-green-700"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Page heading */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
            Account
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            My Profile
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Manage your personal information and account settings.
          </p>
        </section>

        {/* ================= PROFILE CARD ================= */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Green cover */}
          <div className="h-28 bg-green-700 sm:h-32" />

          <div className="px-5 pb-6 sm:px-7">
            {/* Profile image */}
            <div className="-mt-14 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div className="h-28 w-28 overflow-hidden rounded-3xl border-4 border-white bg-green-50 shadow-md">
                  <Image
                    src="/farmer-profile-icon.png"
                    alt="Farmer profile"
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pb-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    Farmer
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    KisanSetu Farmer
                  </p>
                </div>
              </div>

              {/* Edit button */}
              <button
                type="button"
                className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
              >
                <Pencil className="h-4 w-4" />
                Edit Profile
              </button>
            </div>

            {/* Verification */}
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-green-600" />

              <div>
                <p className="text-sm font-semibold text-green-800">
                  Account verified
                </p>

                <p className="text-xs text-green-600">
                  Your farmer account is active.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PERSONAL INFORMATION ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Personal Details
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Personal Information
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Name */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <User className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Full Name
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    Farmer
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Phone Number
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Email Address
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    farmer@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    Haldia, West Bengal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FARM INFORMATION ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Farm Details
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Farming Information
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-xs text-gray-500">
                Primary Crop
              </p>

              <p className="mt-2 text-lg font-bold text-gray-900">
                Wheat
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-xs text-gray-500">
                Farm Size
              </p>

              <p className="mt-2 text-lg font-bold text-gray-900">
                5 Acres
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-xs text-gray-500">
                Preferred Centre
              </p>

              <p className="mt-2 text-sm font-bold text-gray-900">
                Haldia Centre
              </p>
            </div>
          </div>
        </section>

        {/* ================= PAYMENT DETAILS ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
                Payments
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Payment Account
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Account used for receiving procurement payments.
              </p>
            </div>

            <CreditCard className="h-6 w-6 text-green-600" />
          </div>

          <div className="mt-5 rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">
                  Bank Account
                </p>

                <p className="mt-1 text-sm font-bold text-gray-900">
                  XXXX XXXX 4521
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Verified
              </span>
            </div>
          </div>
        </section>

        {/* ================= SETTINGS ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Settings
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Account Settings
            </h3>
          </div>

          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {/* Notifications */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-50 sm:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                  <Bell className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Notifications
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Manage procurement and payment alerts
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Security */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-50 sm:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Security
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Password and account security
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Logout */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-red-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                  <LogOut className="h-5 w-5 text-red-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-red-600">
                    Log Out
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Sign out of your KisanSetu account
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </section>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-4 px-4 sm:px-6 lg:px-8">
          {/* Home */}
          <a
            href="/dashboard"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">⌂</span>
            </div>

            <span className="text-xs font-medium">
              Home
            </span>
          </a>

          {/* Procurement */}
          <a
            href="/procurement"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">🌾</span>
            </div>

            <span className="text-xs font-medium">
              Procurement
            </span>
          </a>

          {/* Payments */}
          <a
            href="/payments"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-lg">₹</span>
            </div>

            <span className="text-xs font-medium">
              Payments
            </span>
          </a>

          {/* Profile */}
          <a
            href="/profile"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
              <User className="h-5 w-5" />
            </div>

            <span className="text-xs font-bold">
              Profile
            </span>
          </a>
        </div>
      </nav>
    </main>
  );
}