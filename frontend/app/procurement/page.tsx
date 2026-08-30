"use client";

import Image from "next/image";
import { useState } from "react";

const crops = [
  {
    name: "Wheat",
    quantity: "8.5 Quintal",
    msp: "₹2,275",
    image: "/wheat.png",
  },
  {
    name: "Rice",
    quantity: "10 Quintal",
    msp: "₹2,369",
    image: "/wheat.png",
  },
  {
    name: "Mustard",
    quantity: "6 Quintal",
    msp: "₹5,950",
    image: "/wheat.png",
  },
];

const centres = [
  {
    name: "Haldia Procurement Centre",
    location: "Haldia, West Bengal",
    distance: "2.4 km",
  },
  {
    name: "Purba Medinipur Centre",
    location: "Tamluk, West Bengal",
    distance: "18 km",
  },
  {
    name: "Mecheda Procurement Centre",
    location: "Mecheda, West Bengal",
    distance: "24 km",
  },
];

export default function ProcurementPage() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [selectedCentre, setSelectedCentre] = useState(centres[0]);
  const [quantity, setQuantity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimatedValue =
    Number(quantity || 0) * Number(selectedCrop.msp.replace(/[₹,]/g, ""));

  function handleSubmit() {
    if (!quantity || Number(quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 shadow-sm">
              <span className="text-xl">🌾</span>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Farmer Portal
              </p>

              <h1 className="text-lg font-bold text-gray-900">
                KisanSetu
              </h1>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50"
              aria-label="Notifications"
            >
              <span className="text-xl">♧</span>

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                <Image
                  src="/farmer-profile-icon.png"
                  alt="Farmer"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Farmer
                </p>

                <p className="text-xs text-gray-400">
                  My account
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Page heading */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
            Procurement
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Sell your crop
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Select your crop, enter the quantity and choose a nearby
            procurement centre to submit your request.
          </p>
        </section>

        {/* ================= SUCCESS ================= */}
        {submitted && (
          <section className="rounded-3xl border border-green-200 bg-green-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white">
                ✓
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  Procurement request submitted!
                </h3>

                <p className="mt-1 text-sm leading-6 text-green-700">
                  Your {selectedCrop.name.toLowerCase()} procurement request
                  has been sent to {selectedCentre.name}.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700">
                    {quantity} Quintal
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700">
                    Estimated ₹
                    {estimatedValue.toLocaleString("en-IN")}
                  </span>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    Processing
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= CROP ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Step 1
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Select your crop
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Choose the crop you want to sell.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {crops.map((crop) => {
              const active = selectedCrop.name === crop.name;

              return (
                <button
                  key={crop.name}
                  type="button"
                  onClick={() => setSelectedCrop(crop)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-green-500 bg-green-50 ring-2 ring-green-100"
                      : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={crop.image}
                        alt={crop.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {crop.name}
                      </h4>

                      <p className="mt-1 text-xs text-gray-500">
                        MSP: {crop.msp}/quintal
                      </p>
                    </div>
                  </div>

                  {active && (
                    <div className="mt-3 text-xs font-semibold text-green-600">
                      ✓ Selected
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= QUANTITY ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Step 2
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Enter quantity
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Tell us how much {selectedCrop.name.toLowerCase()} you want to
              sell.
            </p>
          </div>

          <div className="max-w-md">
            <label
              htmlFor="quantity"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Quantity
            </label>

            <div className="relative">
              <input
                id="quantity"
                type="number"
                min="0"
                step="0.1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 pr-24 text-lg font-semibold text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">
                Quintal
              </span>
            </div>
          </div>

          {/* Price calculation */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-xs font-medium text-gray-500">
                Current MSP
              </p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                {selectedCrop.msp}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  / quintal
                </span>
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-500">
                Estimated value
              </p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                ₹{estimatedValue.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </section>

        {/* ================= CENTRE ================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Step 3
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Choose procurement centre
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Select where you want to submit your crop.
            </p>
          </div>

          <div className="space-y-3">
            {centres.map((centre) => {
              const active = selectedCentre.name === centre.name;

              return (
                <button
                  key={centre.name}
                  type="button"
                  onClick={() => setSelectedCentre(centre)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        active ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      <span className="text-lg">⌖</span>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {centre.name}
                      </h4>

                      <p className="mt-1 text-xs text-gray-500">
                        {centre.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-700">
                      {centre.distance}
                    </p>

                    {active && (
                      <p className="mt-1 text-xs font-semibold text-green-600">
                        Selected ✓
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= SUMMARY ================= */}
        <section className="overflow-hidden rounded-3xl bg-green-700 text-white shadow-sm">
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-200">
              Procurement Summary
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Ready to submit?
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-green-100">
                  Crop
                </p>

                <p className="mt-1 font-bold">
                  {selectedCrop.name}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-green-100">
                  Quantity
                </p>

                <p className="mt-1 font-bold">
                  {quantity || "—"} Quintal
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-green-100">
                  Centre
                </p>

                <p className="mt-1 font-bold">
                  {selectedCentre.name}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-green-700 transition hover:bg-green-50 sm:w-auto"
            >
              Submit Procurement Request
              <span className="text-lg">→</span>
            </button>
          </div>
        </section>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 sm:px-20">
          <a
            href="/dashboard"
            className="flex min-w-[70px] flex-col items-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <span className="text-xl">⌂</span>
            <span className="text-xs font-medium">
              Home
            </span>
          </a>

          <a
            href="/procurement"
            className="flex min-w-[70px] flex-col items-center gap-1 text-green-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-lg">
              🌾
            </span>

            <span className="text-xs font-semibold">
              Procurement
            </span>
          </a>

          <a
            href="/payments"
            className="flex min-w-[70px] flex-col items-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <span className="text-xl">₹</span>

            <span className="text-xs font-medium">
              Payments
            </span>
          </a>

          <a
            href="/profile"
            className="flex min-w-[70px] flex-col items-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <span className="text-xl">♙</span>

            <span className="text-xs font-medium">
              Profile
            </span>
          </a>
        </div>
      </nav>
    </main>
  );
}