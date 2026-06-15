import React from "react";
import { Mail, GraduationCap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
export default function CollegeVerify() {
  const graduationYears = [];

  for (let y = 2031; y >= 2027; y--) {
    graduationYears.push(y);
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">

        {/* Logo */}
        <h1 className="text-center font-serif text-5xl font-bold text-pink-700">
          UniDate
        </h1>

        <p className="text-center text-gray-600 mt-2 text-lg">
          Verify your student status
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mt-3 mb-3">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
        </div>

        {/* College Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            College Email
          </label>

          <div className="flex items-center bg-white rounded-2xl px-4 py-4">
            <Mail className="text-pink-600 mr-3" size={18} />
            <input
              type="email"
              placeholder="you@college.edu"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* College Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            College Name
          </label>

          <div className="flex items-center bg-white rounded-2xl px-4 py-4">
            <GraduationCap className="text-pink-600 mr-3" size={18} />
            <select className="w-full bg-transparent outline-none">
              <option>Select College</option>
              <option>IIT (ISM) DHANBAD</option>
            </select>
          </div>
        </div>

        {/* Graduation Year */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Graduation Year
          </label>

          <select className="w-full bg-white rounded-2xl px-4 py-4 outline-none">
            <option>Select Year</option>

            {graduationYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* OTP */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">
            OTP
          </label>

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full bg-white rounded-2xl px-4 py-4 outline-none"
          />
        </div>

        {/* Verification Card */}
        {/* <div className="bg-pink-100 border border-pink-200 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="text-pink-700 mt-1"
              size={22}
            />

            <div>
              <h3 className="font-semibold text-pink-700">
                Verified Students Only
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Your college email is used only for verification.
                It is never displayed publicly on your profile.
              </p> */}
            {/* </div>
          </div>
        </div> */}

        {/* Buttons */}
      <div className="flex gap-3 mt-6">
  <Link to="/signup">
    <button
      type="button"
      className="px-6 py-3 rounded-xl border border-pink-300 text-pink-700 font-medium"
    >
      Back
    </button>
  </Link>

  <Link to="/account_creation" className="flex-1">
    <button
      type="button"
      className="w-full py-3 rounded-xl bg-radial from-[#FF4D8D] to-[#E11D48] text-white font-semibold shadow-lg hover:scale-105 transition"
    >
      Continue
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}