"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, LogOut } from "lucide-react";

import QuickStats from "@/components/dashboard/QuickStats";
import PaymentCard from "@/components/dashboard/PaymentCard";
import MspCard from "@/components/dashboard/MspCard";
import ProcurementSection from "@/components/dashboard/ProcurementSection";
import BottomNav from "@/components/dashboard/bottom-nav";

interface User {
  id: string;
  name: string;
  email?: string;
  mobile: string;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // =========================
  // CHECK AUTHENTICATION
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      router.replace("/login");
      return;
    }

    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("user");
      }
    }

    setCheckingAuth(false);
  }, [router]);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    router.replace("/login");
  };

  // =========================
  // AUTH CHECKING
  // =========================
  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

          <p className="text-sm font-medium text-gray-600">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-24">

      {/* =========================
          HEADER
      ========================= */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          {/* Brand */}
          <div>
            <p className="text-sm text-gray-500">
              Welcome back 👋
            </p>

            <h1 className="text-xl font-bold text-gray-900">
              KisanSetu
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Notifications */}
            <Link
              href="/notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 transition hover:bg-green-100"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </Link>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-600"
              aria-label="Logout"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>

          </div>
        </div>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">

        {/* Greeting */}
        <section className="rounded-2xl bg-green-700 p-6 text-white shadow-sm">

          <p className="text-sm font-medium text-green-100">
            Farmer Dashboard
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Namaste, {user?.name || "Farmer"} 🌾
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-green-100">
            Check today&apos;s procurement opportunities, MSP prices,
            payments and your crop status from one place.
          </p>

        </section>

        {/* Quick statistics */}
        <section>

          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-900">
              Your Overview
            </h2>

            <p className="text-sm text-gray-500">
              Your latest farming activity
            </p>
          </div>

          <QuickStats />

        </section>

        {/* Procurement */}
        <section>
          <ProcurementSection />
        </section>

        {/* MSP */}
        <section>
          <MspCard />
        </section>

        {/* Payments */}
        <section>
          <PaymentCard />
        </section>

      </div>

      {/* Bottom navigation */}
      <BottomNav />

    </main>
  );
}