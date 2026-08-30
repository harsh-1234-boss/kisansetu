"use client";

import { Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WelcomeCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-500 p-6 text-white shadow-lg sm:p-8">
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10" />

      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Sprout className="h-6 w-6" />
          </div>

          <p className="text-sm font-medium text-green-100">
            Welcome to KisanSetu 👋
          </p>

          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
            Grow more. Earn better.
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-green-50">
            Connect with trusted procurement centres, check MSP prices,
            and manage your agricultural produce easily.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50"
        >
          View Dashboard
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}