"use client";

import Link from "next/link";
import { Sprout } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
            <Sprout className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold text-green-700">
            KisanSetu
          </span>
        </Link>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}