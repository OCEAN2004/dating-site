import React, { useState } from "react";
import { Camera, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileSetup() {
  const [major, setMajor] = useState(" ");

  return (
    <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">

        {/* Logo */}
        <h1 className="text-center text-5xl font-bold text-pink-700 font-serif">
          UniDate
        </h1>

        <p className="text-center text-gray-800 mt-3 text-lg">
          Complete Your Profile
        </p>
          <p className="text-center text-gray-600 mt-1 text-lg">
          Help others get to know you better
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mt-4 mb-4">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-4">
          
          <div className="w-18 h-18 rounded-full bg-white border-2 border-dashed border-pink-300 flex items-center justify-center mb-4">
            <Camera size={38} className="text-pink-600" />
          </div>
 
          <label className="cursor-pointer">
            <input type="file" className="hidden" />
            <div className="px-5 py-2.5 rounded-xl bg-white border border-pink-200 text-pink-700 font-medium hover:bg-pink-50 transition">
              Upload Photo
            </div>
          </label>
        </div>

        {/* About You */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-2">
            About You
          </label>

          <textarea
            rows="2"
            placeholder="Tell people a little about yourself..."
            className="w-full p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          />
        </div>

        {/* Major / Department */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-2">
            Major / Department
          </label>

          <div className="relative">
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full appearance-none p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option>Computer Science and Engineering</option>
              <option>Electronics and Communication Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electrical Engineering</option>
              <option>Civil Engineering</option>
              <option>Mathematics and Computing</option>
              <option>Mining Engineering</option>
              <option>Mining Machinery Engineering</option>
            </select>

            <ChevronDown
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-600 pointer-events-none"
            />
          </div>
        </div>

        {/* Year of Study
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">
            Year of Study
          </label>

          <div className="grid grid-cols-2 gap-3">
            {["Freshman", "Sophomore", "Junior", "Senior"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setYear(item)}
                className={`py-3 rounded-2xl border transition-all font-medium ${
                  year === item
                    ? "bg-radial from-[#FF4D8D] to-[#E11D48] text-white border-transparent shadow-lg"
                    : "bg-white border-pink-200 text-gray-700 hover:bg-pink-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div> */}

        {/* Buttons */}
        <div className="flex justify-center">
         {/* <Link to="/create_account" className="w-1/3"> 
            <button
              className="
                w-full
                py-3
                rounded-2xl
                border
                border-pink-300
                bg-white
                text-pink-700
                font-medium
                hover:bg-pink-50
                transition
              "
            >
              Back
            </button>
          </Link> */}

          <Link to="/questions_for_you" className="w-2/3">
            <button
              className="
                w-full
                py-3
                rounded-2xl
                text-white
                font-semibold
                bg-radial
                from-[#FF4D8D]
                to-[#E11D48]
                hover:scale-[1.02]
                transition-all
                shadow-lg
              "
            >
              Continue
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}