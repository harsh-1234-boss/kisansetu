"use client";

import Image from "next/image";

export default function ProcurementSection() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Section Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
            Procurement
          </p>

          <h2 className="mt-2 text-xl font-bold text-gray-900">
            Recent Procurement
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Track your latest crop procurement activity
          </p>
        </div>

        {/* Small wheat icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
          <Image
            src="/wheat.png"
            alt="Wheat"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      </div>

      {/* Procurement Card */}
      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
        {/* Crop Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* REAL WHEAT IMAGE */}
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/wheat.png"
                alt="Wheat crop"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Wheat
              </h3>

              <p className="text-sm text-gray-500">
                8.5 Quintal
              </p>
            </div>
          </div>

          {/* Status */}
          <span className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Processing
          </span>
        </div>

        {/* Details */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {/* Procurement Centre */}
          <div className="rounded-xl bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">⌖</span>

              <p className="text-xs font-medium text-gray-400">
                Procurement Centre
              </p>
            </div>

            <p className="mt-2 text-sm font-bold text-gray-900">
              Haldia Procurement Centre
            </p>
          </div>

          {/* Submitted */}
          <div className="rounded-xl bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">▣</span>

              <p className="text-xs font-medium text-gray-400">
                Submitted
              </p>
            </div>

            <p className="mt-2 text-sm font-bold text-gray-900">
              28 Aug 2026
            </p>
          </div>

          {/* Estimated Value */}
          <div className="rounded-xl bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">♙</span>

              <p className="text-xs font-medium text-gray-400">
                Estimated Value
              </p>
            </div>

            <p className="mt-2 text-sm font-bold text-gray-900">
              ₹20,825
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">
              Procurement progress
            </p>

            <p className="text-xs font-bold text-green-600">
              2 of 3 steps
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[66%] rounded-full bg-green-600" />
          </div>

          {/* Steps */}
          <div className="mt-3 grid grid-cols-3 text-xs">
            <div className="text-left font-medium text-green-600">
              ✓ Submitted
            </div>

            <div className="text-center font-medium text-green-600">
              Quality Check
            </div>

            <div className="text-right text-gray-400">
              Payment
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400">
          Last updated recently
        </p>

        <button
          type="button"
          className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          View Procurement
          <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  );
}