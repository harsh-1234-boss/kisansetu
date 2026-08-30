"use client";

import Image from "next/image";
import {
  Bell,
  CheckCircle2,
  Clock3,
  CreditCard,
  IndianRupee,
  Receipt,
  ArrowUpRight,
  CalendarDays,
  Wheat,
} from "lucide-react";

const transactions = [
  {
    id: "KS-2026-0828",
    crop: "Wheat",
    quantity: "8.5 Quintal",
    amount: "₹20,825",
    date: "28 Aug 2026",
    status: "Completed",
  },
  {
    id: "KS-2026-0825",
    crop: "Rice",
    quantity: "10 Quintal",
    amount: "₹23,690",
    date: "25 Aug 2026",
    status: "Completed",
  },
  {
    id: "KS-2026-0822",
    crop: "Wheat",
    quantity: "4 Quintal",
    amount: "₹9,100",
    date: "22 Aug 2026",
    status: "Processing",
  },
  {
    id: "KS-2026-0818",
    crop: "Mustard",
    quantity: "6 Quintal",
    amount: "₹35,700",
    date: "18 Aug 2026",
    status: "Completed",
  },
];

export default function PaymentsPage() {
  const completedPayments = transactions.filter(
    (transaction) => transaction.status === "Completed"
  );

  const pendingPayments = transactions.filter(
    (transaction) => transaction.status === "Processing"
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
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

          {/* Header actions */}
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
            >
              <Bell className="h-5 w-5" />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* Profile */}
            <div className="hidden items-center gap-3 sm:flex">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-green-50">
                <Image
                  src="/farmer-profile-icon.png"
                  alt="Farmer profile"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
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

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Page heading */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
            Finance
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Payments
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Track your crop payments, pending amounts and complete
            transaction history.
          </p>
        </section>

        {/* =======================================================
            PAYMENT SUMMARY
        ======================================================= */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Earnings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Earnings
                </p>

                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  ₹89,315
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-green-600">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  This season
                </div>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <IndianRupee className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pending Payment
                </p>

                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  ₹9,100
                </h3>

                <p className="mt-2 text-xs font-medium text-amber-600">
                  {pendingPayments.length} transaction pending
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                <Clock3 className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Completed Payments
                </p>

                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  {completedPayments.length}
                </h3>

                <p className="mt-2 text-xs font-medium text-green-600">
                  Successfully received
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            PENDING PAYMENT
        ======================================================= */}
        {pendingPayments.length > 0 && (
          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <Clock3 className="h-5 w-5 text-amber-700" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
                      Payment Processing
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      ₹9,100 payment is being processed
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      Your payment will be marked completed after
                      procurement verification.
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-sm">
                    Processing
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =======================================================
            TRANSACTION HISTORY
        ======================================================= */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
                Transactions
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Payment History
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Your recent crop payment transactions
              </p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
            >
              <Receipt className="h-4 w-4" />
              Download Statement
            </button>
          </div>

          {/* Transactions */}
          <div className="mt-6 space-y-3">
            {transactions.map((transaction) => {
              const completed = transaction.status === "Completed";

              return (
                <div
                  key={transaction.id}
                  className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition hover:border-gray-200 hover:bg-gray-50"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Crop icon */}
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
                        <Image
                          src="/wheat.png"
                          alt={transaction.crop}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900">
                            {transaction.crop}
                          </h4>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                              completed
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-gray-500">
                          {transaction.quantity}
                        </p>

                        <p className="mt-1 text-[11px] text-gray-400">
                          ID: {transaction.id}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarDays className="h-4 w-4" />
                        {transaction.date}
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {transaction.amount}
                        </p>

                        <p
                          className={`mt-1 text-[11px] font-medium ${
                            completed
                              ? "text-green-600"
                              : "text-amber-600"
                          }`}
                        >
                          {completed
                            ? "Payment received"
                            : "Awaiting confirmation"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =======================================================
            PAYMENT INFORMATION
        ======================================================= */}
        <section className="grid gap-4 md:grid-cols-2">
          {/* How payments work */}
          <div className="rounded-3xl bg-green-700 p-6 text-white shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <CreditCard className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              How payments work
            </h3>

            <p className="mt-2 text-sm leading-6 text-green-100">
              Once your crop passes quality verification, the approved
              amount is processed for payment and your transaction status
              is updated here.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  1
                </span>

                <span className="text-sm text-green-50">
                  Crop procurement completed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  2
                </span>

                <span className="text-sm text-green-50">
                  Quality verification completed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  3
                </span>

                <span className="text-sm text-green-50">
                  Payment processed
                </span>
              </div>
            </div>
          </div>

          {/* Payment safety */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Wheat className="h-5 w-5 text-green-600" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Your payment records
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Every procurement transaction is linked with its crop,
              quantity, procurement centre and payment status for easy
              tracking.
            </p>

            <div className="mt-5 rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-400">
                Total transactions
              </p>

              <p className="mt-1 text-2xl font-bold text-gray-900">
                {transactions.length}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}
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
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
              <span className="text-lg">₹</span>
            </div>

            <span className="text-xs font-bold">
              Payments
            </span>
          </a>

          {/* Profile */}
          <a
            href="/profile"
            className="flex min-h-[72px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-green-600"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-xl">♙</span>
            </div>

            <span className="text-xs font-medium">
              Profile
            </span>
          </a>
        </div>
      </nav>
    </main>
  );
}
