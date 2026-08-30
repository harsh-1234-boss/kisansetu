"use client";

import {
  Wallet,
  CheckCircle2,
  Clock3,
  ArrowRight,
  CalendarDays,
  Receipt,
} from "lucide-react";

export default function PaymentCard() {
  const payment = {
    pending: "₹8,400",
    transactions: "2 transactions",
    lastPayment: "₹20,825",
    lastPaymentDate: "28 Aug 2026",
  };

  return (
    <section className="rounded-[24px] border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600">
            Finance
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            Payment Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Keep track of your crop payments
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
          <Wallet className="h-5 w-5 text-green-600" />
        </div>
      </div>

      {/* Main payment amount */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Pending Payment
            </p>

            <h3 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {payment.pending}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {payment.transactions}
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            <Clock3 className="h-3.5 w-3.5" />
            Processing
          </div>
        </div>
      </div>

      {/* Payment details */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {/* Last payment */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4 text-green-600" />

            <span className="text-xs font-medium text-gray-400">
              Last Payment
            </span>
          </div>

          <p className="mt-2 text-lg font-bold text-gray-900">
            {payment.lastPayment}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Successfully received
          </p>
        </div>

        {/* Date */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-green-600" />

            <span className="text-xs font-medium text-gray-400">
              Last Payment Date
            </span>
          </div>

          <p className="mt-2 text-sm font-bold text-gray-900">
            {payment.lastPaymentDate}
          </p>

          <div className="mt-1 flex items-center gap-1 text-xs text-green-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Completed
          </div>
        </div>
      </div>

      {/* Payment status */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-green-100 bg-green-50/60 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Payment system is up to date
            </p>

            <p className="mt-0.5 text-xs text-gray-500">
              Your transactions are being tracked
            </p>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400">
          Payments are updated after procurement confirmation.
        </p>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 hover:shadow-md"
        >
          Payment History
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}