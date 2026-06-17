import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Interests() {
  const interests = [
    "🎵 Music",
    "🎬 Movies",
    "📚 Reading",
    "🎮 Gaming",
    "🏋️ Gym",
    "⚽ Sports",
    "🍕 Food",
    "☕ Coffee",
    "✈️ Travel",
    "📸 Photography",
    "🎨 Art",
    "🎤 Singing",
    "💃 Dancing",
    "🐶 Pets",
    "🎧 Podcasts",
    "💻 Coding",
    "🎭 Anime",
    "🧘 Fitness",
  ];

  const [selected, setSelected] = useState([]);

  const toggleInterest = (interest) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((item) => item !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">


        {/* Logo */}
        <h1 className="text-center text-5xl font-bold text-pink-700 font-serif">
          UniDate
        </h1>

        <p className="text-center text-gray-600 mt-3 text-lg">
          Choose Your Interests
        </p>

        <p className="text-center text-gray-500 text-sm mt-1 mb-4">
          Select at least 5 interests
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mb-4">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
        </div>

        {/* Interests */}
        <div className="flex flex-wrap gap-3 mb-4">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-full border font-medium transition-all
                ${
                  selected.includes(interest)
                    ? "bg-radial from-[#FF4D8D] to-[#E11D48] text-white border-transparent shadow-md"
                    : "bg-white border-pink-200 text-gray-700 hover:bg-pink-50"
                }`}
            >
              {interest}
            </button>
          ))}
        </div>

        {/* Selected Count */}
        <div className="text-center mb-4 text-pink-700 font-medium">
          {selected.length} selected
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link to="/questions_for_you" className="w-1/3">
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
          </Link>

          <Link to="/home" className="w-2/3">
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
              Complete Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}