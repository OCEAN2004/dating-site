
import {Mail,Lock,Check,X} from "lucide-react";
import { Link } from "react-router-dom";
import profileSetup from "../onBoarding/profileSetup";

export default function CreateAccount() {
  return (
   <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">

        {/* Logo */}
        <h1 className="text-center text-5xl font-bold text-pink-700 font-serif">
          UniDate
        </h1>

        <p className="text-center text-gray-600 mt-3 text-lg">
          Create your account
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mt-3 mb-3">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Email
          </label>

          <div className="flex items-center bg-white rounded-2xl px-4 py-4">
            <Mail
              size={18}
              className="text-pink-600 mr-3"
            />

            <input
              type="email"
              placeholder="sagar@gmail.com"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Password
          </label>

          <div className="flex items-center bg-white rounded-2xl px-4 py-4">
            <Lock
              size={18}
              className="text-pink-600 mr-3"
            />

            <input
              type="password"
              placeholder="************"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="flex items-center bg-white rounded-2xl px-4 py-4">
            <Lock
              size={18}
              className="text-pink-600 mr-3"
            />

            <input
              type="password"
              placeholder="************"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

       
        {/* Agreements */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-pink-600"
            />

            <span className="text-gray-700">
              I agree to the{" "}
              <span className="text-pink-700 font-medium">
                Terms of Service
              </span>
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-pink-600"
            />

            <span className="text-gray-700">
              I agree to the{" "}
              <span className="text-pink-700 font-medium">
                Community Guidelines
              </span>
            </span>
          </label>
        </div>

        {/* Buttons */}
       <div className="flex gap-3 mt-6">
         <Link to="/college_verification">
           <button
             type="button"
             className="px-6 py-3 rounded-xl border border-pink-300 text-pink-700 font-medium"
           >
             Back
           </button>
         </Link>
       
         <Link to="/profile_setup" className="flex-1">
           <button
             type="submit"
             className="w-full py-3 rounded-xl bg-radial from-[#FF4D8D] to-[#E11D48] text-white font-semibold shadow-lg hover:scale-105 transition"
           >
             Submit
           </button>
         </Link>
       </div>
      </div>
    </div>
  );
}