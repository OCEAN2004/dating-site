import { useState } from "react";
import {
  Pencil,
  User,
  Heart,
  Star,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";

export default function ProfilePagePOV() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const questions = [
    {
      title: "My ideal first date is...",
      answer: "Coffee, a walk, and good conversation.",
    },
    {
      title: "A random fact about me...",
      answer: "I can solve a Rubik's cube in under a minute.",
    },
    {
      title: "I'll fall for you if...",
      answer: "You make me laugh.",
    },
    {
      title: "The quickest way to my heart is...",
      answer: "Being genuine and kind.",
    },
    {
      title: "You should message me if...",
      answer: "You're always up for trying new cafés.",
    },
  ];

  const interests = [
    "🎵 Music",
    "🎮 Gaming",
    "☕ Coffee",
    "✈️ Travel",
    "📚 Reading",
    "⚽ Sports",
  ];

  const photos = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navbar */}
      <Navbar setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeItem={null}
      />

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Cover Banner */}
         <div className="relative h-64 bg-radial from-pink-400 via-pink-300 to-purple-200">
            <img
              src="/cover.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Profile Section */}
          <div className="relative px-6 pb-10">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="-mt-20">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-pink-200 flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  <User
                    size={70}
                    className="text-pink-500"
                  />
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-pink-600">
                fisrt last, 20
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Computer Science and Engineering • Junior
              </p>

              <p className="text-pink-500 font-medium mt-1">
                ABC University
              </p>
               {/* <Link to="/edit_profile">  
              <button className="mt-5 px-8 py-3 border border-pink-500 text-pink-600 rounded-full flex items-center gap-2 mx-auto hover:bg-pink-50 transition">
                <Pencil size={16} />
                Edit Profile
              </button>
                  </Link> */}
            </div>

            {/* About + Interests */}
            <div className="grid lg:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <User size={18} />
                  About Me
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Coffee addict ☕, coding enthusiast 💻 and
                  always down for exploring new cafés around
                  campus.
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <Heart size={18} />
                  Interests
                </div>

                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <div
                      key={interest}
                      className="px-4 py-2 bg-white rounded-full border border-pink-100 text-gray-700"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="grid lg:grid-cols-2 gap-4 mt-6 max-w-6xl mx-auto">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-50 rounded-2xl p-5 border border-pink-100"
                >
                  <div className="flex items-center gap-2 text-pink-600 font-semibold mb-2">
                    <Star size={16} />
                    {item.title}
                  </div>

                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Photos */}
            <div className="mt-10 max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-pink-600 mb-5">
                Photos
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-4/3 rounded-2xl overflow-hidden shadow-md bg-pink-100 relative"
                  >
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display =
                          "flex";
                      }}
                    />

                    <div className="hidden absolute inset-0 items-center justify-center flex-col text-pink-500">
                      <Heart size={42} />

                      <span className="mt-2 font-medium">
                        Photo {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}