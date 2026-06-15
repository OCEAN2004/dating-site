import React, { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [gender, setGender] = useState("");
  const [interestedIn, setInterestedIn] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const years = [];
  for (let y = 2008; y >= 1980; y--) {
    years.push(y);
  }

  return (
   <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">

        {/* Logo */}
        <h1 className="text-center font-serif text-5xl font-bold text-pink-700">
          UniDate
        </h1>

        <p className="text-center text-gray-600 mt-2 text-lg">
          Join your campus community
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mt-3 mb-3">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
        </div>
   
        {/* Name Row */}
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-gray-700 mb-1">
              Enter First Name
            </label>

            <div className="flex items-center bg-white rounded-2xl px-4 py-4">
              <User size={18} className="text-pink-600 mr-2" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Enter Last Name  
            </label>

            <div className="flex items-center bg-white rounded-2xl px-4 py-4">
              <User size={18} className="text-pink-600 mr-2" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">
            Date of Birth
          </label>

          <div className="grid grid-cols-3 gap-3">
            <select className="bg-white rounded-2xl px-4 py-4 outline-none">
              <option>Month</option>

              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>

            <select className="bg-white rounded-2xl px-4 py-4 outline-none">
              <option>Day</option>

              {days.map((day) => (
                <option key={day}>{day}</option>
              ))}
            </select>

            <select className="bg-white rounded-2xl px-4 py-4 outline-none">
              <option>Year</option>

              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender */}
       <div className="mb-3">
          <label className="block text-gray-700 mb-2 font-medium">
            Gender
          </label>
          <select className="w-full bg-white rounded-2xl px-4 py-4 outline-none">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
            <option>Other</option>
          </select>
        </div>

        {/* Interested In */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-3">
            Interested In
          </label>

          <div className="grid grid-cols-3 gap-3">
            {["Men", "Women", "Everyone"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setInterestedIn(item)}
                className={`py-3 rounded-xl border transition-all font-medium
                  ${
                    interestedIn === item
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-white border-gray-200 hover:border-pink-500"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
         <Link to="/college_verification">
        <button
          type="button"
        className="w-full py-3 rounded-xl bg-radial  from-[#FF4D8D] to-[#E11D48] text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
      >
          Continue
        </button>
         </Link>

        {/* Login */}
        <p className="text-center mt-3 text-gray-600">
          Already have an account?{" "}
           <a
        href="/login"
        className="text-pink-700 font-semibold"
      >
        Login
      </a>
        </p>
      </div>
    </div>
  );
}