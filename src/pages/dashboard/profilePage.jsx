import { useState } from "react";
import {
  Camera,
  Pencil,
  User,
  Heart,
  Star,
  MessageCircle,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";

export default function ProfilePage() {
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
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeItem={null}
      />

      <main className="p-6">
        <div className="bg-white rounded-3xl shadow overflow-hidden">
          {/* Cover */}
          <div className="relative h-64 bg-radial from-pink-400 via-pink-300 to-purple-200">
            <label className="absolute top-4 right-4 cursor-pointer bg-white p-3 rounded-full shadow">
              <Camera size={18} className="text-pink-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Profile */}
          <div className="relative px-6 pb-10">
            <div className="flex justify-center">
              <div className="-mt-20 relative">
                <div className="w-40 h-40 rounded-full bg-pink-200 border-4 border-white shadow"></div>

                <label className="absolute bottom-2 right-2 bg-pink-500 text-white p-3 rounded-full cursor-pointer">
                  <Camera size={16} />

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="text-center mt-4">
              <h1 className="text-4xl font-bold text-pink-600">
                Alex Johnson, 20
              </h1>

              <p className="text-gray-500 mt-2">
                Computer Science • Junior
              </p>

              <p className="text-pink-500 font-medium">
                ABC University
              </p>

              <button className="mt-5 px-8 py-3 border border-pink-500 text-pink-600 rounded-full flex items-center gap-2 mx-auto hover:bg-pink-50">
                <Pencil size={16} />
                Edit Profile
              </button>
            </div>

            {/* About + Interests */}
            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <User size={18} />
                  About Me
                </div>

                <p className="text-gray-700">
                  Coffee addict ☕, coding enthusiast 💻 and
                  always down for exploring new cafés around
                  campus.
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <Heart size={18} />
                  Interests
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Music",
                    "Gaming",
                    "Coffee",
                    "Travel",
                    "Reading",
                    "Sports",
                  ].map((interest) => (
                    <div
                      key={interest}
                      className="px-4 py-2 bg-white rounded-full border"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="grid lg:grid-cols-2 gap-4 mt-6">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-50 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 text-pink-600 font-semibold mb-2">
                    {index === 4 ? (
                      <MessageCircle size={16} />
                    ) : (
                      <Star size={16} />
                    )}

                    {item.title}
                  </div>

                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Photos */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Photos
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((photo) => (
                  <label
                    key={photo}
                    className="aspect-4/3 rounded-2xl bg-pink-100 border-2 border-dashed border-pink-300 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-200 transition"
                  >
                    <Camera
                      size={32}
                      className="text-pink-600"
                    />

                    <span className="mt-2 text-pink-600 font-medium">
                      Upload Photo {photo}
                    </span>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}