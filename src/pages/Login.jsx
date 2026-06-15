import React from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl p-8">
    
    {/* Logo */}
    <div className="text-center mb-8">
      <h1 className="text-5xl font-serif font-bold text-pink-700">
        UniDate
      </h1>
      <p className="text-gray-600 mt-2">
        Sign in with your campus account
      </p>
    </div>

    {/* Form */}
    <form className="space-y-5">
      
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Campus Email
        </label>
        <div className="flex items-center bg-white/50 rounded-xl px-4 py-3 border border-white/40">
          <Mail size={18} className="text-pink-600 mr-3" />
          <input
            type="email"
            placeholder="you@college.edu"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="flex items-center bg-white/50 rounded-xl px-4 py-3 border border-white/40">
          <Lock size={18} className="text-pink-600 mr-3" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>

        <a
          href="#"
          className="text-pink-700 hover:text-pink-900"
        >
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-radial  from-[#FF4D8D] to-[#E11D48] text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
      >
        Login
      </button>

      <button
        type="button"
        className="w-full py-3 rounded-xl border border-pink-300 bg-white/50 font-medium hover:bg-white/70 transition"
      >
        Continue with Google
      </button>
    </form>

    {/* Footer */}
    <p className="text-center text-sm text-gray-600 mt-6">
      Don't have an account?{" "}
      <a
        href="/signup"
        className="text-pink-700 font-semibold"
      >
        Join your campus
      </a>
    </p>
  </div>
</div>
  );
}