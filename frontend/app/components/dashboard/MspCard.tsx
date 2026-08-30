"use client";

import {
  TrendingUp,
  Wheat,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

export default function MspCard() {
  const msp = {
    crop: "Wheat",
    price: "₹2,275",
    unit: "per quintal",
    season: "Rabi Marketing Season 2026–27",
    increase: "+6.2%",
    updated: "Updated recently",
  };

  return (
    <section className="rounded-[24px] border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600">
            Government Support
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            Minimum Support Price
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current MSP information for your crop
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
          <Wheat className="h-5 w-5 text-green-600" />
        </div>
      </div>

      {/* Main price */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">
                {msp.crop}
              </span>

              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-green-700 shadow-sm">
                MSP
              </span>
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {msp.price}
              </h3>

              <span className="text-sm text-gray-500">
                / {msp.unit}
              </span>
            </div>
          </div>

          {/* Increase */}
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {msp.increase}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-green-600" />

            <span className="text-xs font-medium text-gray-400">
              Marketing Season
            </span>
          </div>

          <p className="mt-2 text-sm font-semibold text-gray-800">
            {msp.season}
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />

            <span className="text-xs font-medium text-gray-400">
              Price Status
            </span>
          </div>

          <p className="mt-2 text-sm font-semibold text-green-700">
            {msp.updated}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 rounded-xl border border-green-100 bg-green-50/60 p-4">
        <p className="text-xs leading-5 text-green-800">
          MSP is the minimum price at which eligible agricultural produce
          may be procured under the applicable government procurement
          scheme. Final procurement value may depend on quality and
          applicable conditions.
        </p>
      </div>
    </section>
  );
}