"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyOtpPage() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const mobile = searchParams.get("mobile") || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (
    index: number,
    value: string
  ) => {

    const digit = value.replace(/\D/g, "");

    if (!digit) return;

    const newOtp = [...otp];

    newOtp[index] = digit;

    setOtp(newOtp);

    // Move to next box
    if (index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      );

      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {

      const previousInput = document.getElementById(
        `otp-${index - 1}`
      );

      previousInput?.focus();
    }
  };

  const handleVerify = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const enteredOtp = otp.join("");

    // Demo OTP
    if (enteredOtp !== "123456") {

      alert(
        "Invalid OTP. For demo, please enter 123456."
      );

      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Header */}
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

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          <form onSubmit={handleVerify}>

            {/* Mobile */}
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

            {/* OTP */}
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
                    onChange={(e) =>
                      handleChange(
                        index,
                        e.target.value
                      )
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(index, e)
                    }
                    className="w-12 h-14 text-center text-xl font-semibold text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />

                ))}

              </div>

            </div>

            {/* Resend */}
            <div className="mt-6 text-center">

              <p className="text-sm text-gray-500">
                Didn't receive the OTP?
              </p>

              <button
                type="button"
                className="mt-1 text-sm font-semibold text-green-600 hover:underline"
              >
                Resend OTP
              </button>

            </div>

            {/* Verify */}
            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700"
            >
              Verify & Continue
            </button>

          </form>

          {/* Security */}
          <div className="mt-6 rounded-xl bg-green-50 p-4">

            <p className="text-center text-xs leading-5 text-green-800">
              Your mobile number helps us securely
              connect your farmer account with
              procurement records.
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