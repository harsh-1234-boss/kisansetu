"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mobile = searchParams.get("mobile") || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // =========================
  // OTP INPUT
  // =========================
  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    if (!digit) return;

    const newOtp = [...otp];
    newOtp[index] = digit;

    setOtp(newOtp);

    // Move to next box
    if (index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // =========================
  // BACKSPACE
  // =========================
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // =========================
  // RESEND OTP
  // =========================
  const handleResendOtp = async () => {
    if (!mobile) {
      alert("Mobile number is missing.");
      return;
    }

    if (resendCooldown > 0 || resendLoading) {
      return;
    }

    try {
      setResendLoading(true);

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
        alert(data.message || "Unable to resend OTP.");
        return;
      }

      // Clear old OTP
      setOtp(["", "", "", "", "", ""]);

      // Focus first OTP box
      document.getElementById("otp-0")?.focus();

      alert("New OTP sent successfully.");

      // Start 60 second cooldown
      setResendCooldown(60);

      const timer = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Resend OTP error:", error);

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setResendLoading(false);
    }
  };

  // =========================
  // VERIFY OTP
  // =========================
  const handleVerify = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    if (!mobile) {
      alert("Mobile number is missing.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:4000/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile,
            otp: enteredOtp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid OTP.");
        return;
      }

      console.log("Login successful:", data);

      // =========================
      // STORE JWT
      // =========================
      localStorage.setItem(
        "access_token",
        data.access_token
      );

      // =========================
      // STORE USER
      // =========================
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Mobile number verified successfully!");

      // =========================
      // GO TO DASHBOARD
      // =========================
      router.push("/dashboard");
    } catch (error) {
      console.error(
        "OTP verification error:",
        error
      );

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* =========================
            HEADER
        ========================= */}
        <div className="text-center mb-8">

          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-4xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-[#0b2545]">
            Verify Your Number
          </h1>

          <p className="mt-2 text-gray-600">
            Enter the OTP sent to your mobile number
          </p>

        </div>

        {/* =========================
            CARD
        ========================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          <form onSubmit={handleVerify}>

            {/* =========================
                MOBILE NUMBER
            ========================= */}
            <div className="mb-7">

              <p className="text-sm text-gray-500">
                OTP sent to
              </p>

              <div className="mt-1 flex items-center justify-between">

                <p className="font-semibold text-gray-900">
                  +91 {mobile}
                </p>

                <Link
                  href="/login"
                  className="text-sm font-semibold text-green-600 hover:underline"
                >
                  Change
                </Link>

              </div>

            </div>

            {/* =========================
                OTP INPUT
            ========================= */}
            <div>

              <label className="block text-sm font-medium text-[#0b2545] mb-3">
                Enter OTP
              </label>

              <div className="flex justify-between gap-2">

                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    disabled={loading}
                    onChange={(e) =>
                      handleChange(
                        index,
                        e.target.value
                      )
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(
                        index,
                        e
                      )
                    }
                    className="w-12 h-14 text-center text-xl font-semibold text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
                  />
                ))}

              </div>

            </div>

            {/* =========================
                RESEND OTP
            ========================= */}
            <div className="mt-6 text-center">

              <p className="text-sm text-gray-500">
                Didn't receive the OTP?
              </p>

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={
                  loading ||
                  resendLoading ||
                  resendCooldown > 0
                }
                className="mt-1 text-sm font-semibold text-green-600 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
              >
                {resendLoading
                  ? "Sending..."
                  : resendCooldown > 0
                  ? `Resend OTP in ${resendCooldown}s`
                  : "Resend OTP"}
              </button>

            </div>

            {/* =========================
                VERIFY BUTTON
            ========================= */}
            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Verifying..."
                : "Verify & Continue"}
            </button>

          </form>

          {/* =========================
              SECURITY MESSAGE
          ========================= */}
          <div className="mt-6 rounded-xl bg-green-50 p-4">

            <p className="text-center text-xs leading-5 text-green-800">
              Your mobile number helps us securely
              connect your farmer account with
              procurement records.
            </p>

          </div>

        </div>

        {/* =========================
            FOOTER
        ========================= */}
        <p className="mt-6 text-center text-xs text-gray-500">
          KisanSetu • Digital Procurement Platform
        </p>

      </div>
    </main>
  );
}