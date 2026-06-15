import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Landing() {

  return (

    <section className="min-h-screen flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] overflow-hidden relative">


  {/*  Card */}
  <div className="backdrop-blur-xl bg-white/15 border border-white/30 shadow-2xl rounded-[40px] px-10 py-16 max-w-2xl w-[90%] text-center">

    {/* Logo */}
    <h1  className=" font-serif text-7xl font-light text-pink-700 mb-6">
      UniDate
    </h1>

    {/* Tagline */}
    <p className="text-xl text-pink-800 mb-3">
      Date with people from your campus.
    </p>

    <p className="text-xl text-pink-800 mb-10">
      Make <span className="font-bold">real connections.</span>
    </p>

    {/* CTA */}
    <Link to="/login">
      <button
        className="px-10 py-4 rounded-full bg-radial from-[#FF4D8D] to-[#E11D48] text-white font-semibold text-lg shadow-lg hover:scale-105 transition">
        Let's Get Started →
      </button>
    </Link>

    {/* Footer Text */}
    <div className="mt-16 text-pink-700 flex items-center justify-center gap-2">
      <span>🛡️</span>
      <span>Only verified students</span>
    </div>

  </div>
</section>
  );

}