
import { useState } from "react";
import {
  Camera,
  User,
  Heart,
  Star,
  Pencil,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";

export default function EditProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [interestedIn, setInterestedIn] = useState("");
  const [gender, setGender] = useState("Male");

  const [interests, setInterests] = useState([
    "Music",
    "Gaming",
    "Coffee",
    "Travel",
  ]);

  const allInterests = [
    "Music",
    "Movies",
    "Reading",
    "Gaming",
    "Gym",
    "Sports",
    "Food",
    "Coffee",
    "Travel",
    "Photography",
    "Art",
    "Singing",
    "Dancing",
    "Pets",
    "Podcasts",
    "Coding",
    "Anime",
    "Fitness",
  ];

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

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
            <label className="absolute top-4 right-4 cursor-pointer bg-white p-3 rounded-full shadow hover:scale-105 transition">
              <Camera size={18} className="text-pink-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          <div className="relative px-6 pb-10">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="-mt-20 relative">
                <div className="w-40 h-40 rounded-full bg-pink-200 border-4 border-white shadow" />

                <label className="absolute bottom-2 right-2 bg-pink-500 text-white p-3 rounded-full cursor-pointer hover:bg-pink-600 transition">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Name Section */}
            <div className="text-center mt-6">
              <h1 className="text-4xl font-bold text-pink-600 flex items-center justify-center gap-2">
                <Pencil size={22} />
                Edit Profile
              </h1>

             <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-8">

  <div className="flex flex-col">
    <label className="text-left text-gray-700 font-medium mb-2">
      First Name
    </label>

    <input
      defaultValue="Name"
      className="w-full px-4 py-3 border border-pink-200 rounded-xl"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-left text-gray-700 font-medium mb-2">
      Last Name
    </label>

    <input
      defaultValue="Name"
      className="w-full px-4 py-3 border border-pink-200 rounded-xl"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-left text-gray-700 font-medium mb-2">
      Age
    </label>

    <input
      type="number"
      defaultValue="20"
      className="w-full px-4 py-3 border border-pink-200 rounded-xl"
    />
  </div>

</div>

             <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-4">

  <div className="flex flex-col gap-2">
    <label className="text-left text-gray-700 font-medium">
      Department
    </label>

    <select className="w-full px-4 py-3 border border-pink-200 rounded-xl">
      <option>Computer Science and Engineering</option>
      <option>Electronics and Communication Engineering</option>
      <option>Mechanical Engineering</option>
      <option>Electrical Engineering</option>
      <option>Civil Engineering</option>
      <option>Mathematics and Computing</option>
      <option>Mining Engineering</option>
      <option>Mining Machinery Engineering</option>
    </select>
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-left text-gray-700 font-medium">
      Year of Study
    </label>

    <select className="w-full px-4 py-3 border border-pink-200 rounded-xl">
      <option>Freshman</option>
      <option>Sophomore</option>
      <option>Junior</option>
      <option>Senior</option>
    </select>
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-left text-gray-700 font-medium">
      Gender
    </label>

    <select className="w-full px-4 py-3 border border-pink-200 rounded-xl">
      <option>Male</option>
      <option>Female</option>
      <option>Non-Binary</option>
      <option>Other</option>
    </select>
  </div>

</div>
             
            
              {/* Interested In */}
              <div className="max-w-3xl mx-auto mt-6">
                <p className="font-medium text-gray-700 mb-3">
                  Interested In
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {["Men", "Women", "Everyone"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setInterestedIn(option)}
                      className={`py-3 rounded-xl font-medium transition ${
                        interestedIn === option
                          ? "bg-pink-500 text-white"
                          : "bg-white border border-pink-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* About + Interests */}
            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <User size={18} />
                  About Me
                </div>

                <textarea
                  rows={5}
                  maxLength={200}
                  defaultValue="Coffee addict ☕, coding enthusiast 💻 and always down for exploring new cafés around campus."
                  className="w-full bg-white border border-pink-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                  <Heart size={18} />
                  Interests
                </div>

                <div className="flex flex-wrap gap-3">
                  {allInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full border transition ${
                        interests.includes(interest)
                          ? "bg-pink-500 text-white border-pink-500"
                          : "bg-white border-pink-200"
                      }`}
                    >
                      {interest}
                    </button>
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
                  <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
                    <Star size={16} />
                    {item.title}
                  </div>

                  <input
                    type="text"
                    defaultValue={item.answer}
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
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

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button className="px-8 py-3 border border-pink-400 text-pink-600 rounded-full hover:bg-pink-50">
                Cancel
              </button>

              <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

