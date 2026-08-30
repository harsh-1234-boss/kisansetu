"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOtpLogin = async () => {
  if (mobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:4000/auth/send-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Unable to send OTP.");
      return;
    }

    // Development OTP
    console.log("Development OTP:", data.developmentOtp);

    router.push(`/verify-otp?mobile=${mobile}`);
  } catch (error) {
    console.error("Login error:", error);

    alert(
      "Unable to connect to the server. Please make sure the backend is running on port 4000."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl">
            👨‍🌾
          </div>

          <h1 className="text-3xl font-bold text-[#0b2545]">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-600">
            Login to your KisanSetu farmer account
          </p>

        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          {/* Mobile Number */}
          <div>

            <label className="mb-2 block text-sm font-medium text-[#0b2545]">
              Mobile Number
            </label>

            <div className="flex">

              <div className="flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-4 text-gray-700">
                +91
              </div>

              <input
                type="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10)
                  )
                }
                placeholder="Enter mobile number"
                disabled={loading}
                className="w-full rounded-r-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
              />

            </div>

          </div>

          {/* OTP Button */}
          <button
            type="button"
            onClick={handleOtpLogin}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Sending OTP..."
            ) : (
              <>
                Login with OTP
                <span>→</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-sm text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            <span className="text-lg font-bold">
              G
            </span>

            Continue with Google
          </button>

          {/* Signup */}
          <div className="mt-7 border-t border-gray-200 pt-6 text-center">

            <p className="text-gray-600">
              Don&apos;t have an account?{" "}

              <Link
                href="/signup"
                className="font-semibold text-green-600 hover:underline"
              >
                Register as Farmer
              </Link>
            </p>

          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          KisanSetu • Digital Procurement Platform
        </p>

      </div>
    </main>
  );
}