"use client";

import Link from "next/link";
import { Home, Wheat, Wallet, User } from "lucide-react";

export default function BottomNav() {
  const navItems = [
    {
      label: "Home",
      href: "/dashboard",
      icon: Home,
      active: true,
    },
    {
      label: "Procurement",
      href: "/dashboard",
      icon: Wheat,
      active: false,
    },
    {
      label: "Payments",
      href: "/dashboard",
      icon: Wallet,
      active: false,
    },
    {
      label: "Profile",
      href: "/dashboard",
      icon: User,
      active: false,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-4 px-4 sm:px-6 lg:px-8">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-h-[72px] flex-col items-center justify-center gap-1 transition ${
                item.active
                  ? "text-green-600"
                  : "text-gray-400 hover:text-green-600"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  item.active ? "bg-green-50" : "bg-transparent"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>

              <span className="text-xs font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}