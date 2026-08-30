"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Validate mobile
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate password
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:4000/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            mobile,
            email: email || undefined,
            password,
            role: "farmer",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Unable to create account.");
        return;
      }

      console.log("Signup successful:", data);

      alert("Farmer account created successfully!");

      // Go to login
      router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Header */}
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          👨‍🌾
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Farmer Registration
        </h1>

        <p className="mt-2 text-base text-slate-600">
          Create your KisanSetu farmer account
        </p>
      </div>

      {/* Registration Card */}
      <div className="mx-auto mt-8 w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Mobile Number
            </label>

            <div className="flex">
              <div className="flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-4 text-sm font-medium text-slate-700">
                +91
              </div>

              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10)
                  )
                }
                placeholder="9876543210"
                required
                disabled={loading}
                className="w-full rounded-r-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Email Address
              <span className="ml-1 text-xs font-normal text-gray-500">
                (Optional)
              </span>
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Minimum 6 characters
            </p>
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              State
            </label>

            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            >
              <option value="" disabled>
                Select State
              </option>

              <option value="west-bengal">West Bengal</option>
              <option value="odisha">Odisha</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="bihar">Bihar</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="punjab">Punjab</option>
              <option value="haryana">Haryana</option>
              <option value="madhya-pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="gujarat">Gujarat</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="andhra-pradesh">Andhra Pradesh</option>
              <option value="telangana">Telangana</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamil-nadu">Tamil Nadu</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label
              htmlFor="district"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              District
            </label>

            <input
              id="district"
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter your district"
              required
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 px-5 py-3.5 text-base font-bold text-white transition hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Create Farmer Account"}
          </button>

          {/* Login */}
          <div className="border-t border-gray-300 pt-7 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}

              <Link
                href="/login"
                className="font-bold text-green-600 hover:text-green-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}