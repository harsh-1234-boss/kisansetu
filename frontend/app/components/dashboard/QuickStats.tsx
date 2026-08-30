"use client";

import {
  Package,
  TrendingUp,
  Wallet,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function QuickStats() {
  const stats = [
    {
      title: "Total Produce",
      value: "24.5 Q",
      subtitle: "This season",
      icon: Package,
      trend: "+12%",
    },
    {
      title: "Average Price",
      value: "₹2,450",
      subtitle: "Per quintal",
      icon: TrendingUp,
      trend: "+8.5%",
    },
    {
      title: "Total Earnings",
      value: "₹58,920",
      subtitle: "This season",
      icon: Wallet,
      trend: "+15%",
    },
    {
      title: "Pending Payment",
      value: "₹8,400",
      subtitle: "2 transactions",
      icon: Clock,
      trend: "Pending",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 transition-colors group-hover:bg-green-100">
                <Icon className="h-5 w-5 text-green-600" />
              </div>

              {/* Trend */}
              <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                {stat.trend !== "Pending" && (
                  <ArrowUpRight className="h-3 w-3" />
                )}

                {stat.trend}
              </div>
            </div>

            {/* Title */}
            <p className="mt-5 text-sm font-medium text-gray-500">
              {stat.title}
            </p>

            {/* Value */}
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              {stat.value}
            </h3>

            {/* Subtitle */}
            <p className="mt-1 text-xs text-gray-400">
              {stat.subtitle}
            </p>

            {/* Decorative hover element */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </div>
        );
      })}
    </section>
  );
}