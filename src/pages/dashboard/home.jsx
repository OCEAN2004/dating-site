import { useState } from "react";
import { Bell, Users, Shield } from "lucide-react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import welcomeImage from "../../assets/collegecouple.png";

export default function DashboardHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const discoverCards = [1, 2, 3, 4];

  function StatCard({ title, value }) {
    return (
      <div className="bg-pink-50 rounded-2xl p-3">
        <div className="text-2xl font-bold text-pink-600">
          {value}
        </div>

        <div className="text-gray-500 mt-1">
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navbar */}
      <Navbar setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Page Content */}
      <main className="p-6">
        <div className="grid grid-cols-12 gap-6">

          {/* Profile Card */}
          <div className="col-span-12 lg:col-span-3 lg:row-span-2">
            <div className="bg-white rounded-3xl p-6 shadow h-full">
              <div className="w-28 h-28 bg-pink-200 rounded-full mx-auto"></div>

              <h2 className="text-center text-2xl font-bold mt-4">
                NAME
              </h2>

              <p className="text-center text-gray-500">
                Department, Year
              </p>

              <button className="w-full mt-6 border border-pink-500 text-pink-600 py-3 rounded-full hover:bg-pink-50">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="col-span-12 lg:col-span-9">
            <div
              className="rounded-3xl p-8 shadow min-h-60"
              style={{
                backgroundImage: `url(${welcomeImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FFF7F9",
              }}
            >
              <div className="max-w-[75%] lg:max-w-[60%]">
                <h1 className="text-2xl font-bold text-pink-600">
                  Welcome back, NAME! 👋
                </h1>

                <p className="text-gray-500 mt-2">
                  Ready to make real connections?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  <StatCard title="Matches" value="0" />
                  <StatCard title="Messages" value="0" />
                  <StatCard title="Profile Views" value="0" />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="col-span-12 lg:col-span-9">
            <div className="bg-white rounded-3xl p-5 shadow flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Bell className="text-pink-600" />

                <div>
                  <h3 className="font-semibold text-pink-600">
                    You have 0 new notifications
                  </h3>

                  <p className="text-gray-500">
                    New match, messages and more
                  </p>
                </div>
              </div>

              <button className="text-pink-600 font-semibold">
                View All
              </button>
            </div>
          </div>

          {/* Discover */}
          <div className="col-span-12 lg:col-span-9">
            <div className="bg-white rounded-3xl p-6 shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pink-600">
                  Discover People
                </h2>

                <button className="text-pink-600">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {discoverCards.map((card) => (
                  <div
                    key={card}
                    className="border rounded-2xl p-4 h-64 flex flex-col justify-between"
                  >
                    <div className="bg-gray-100 rounded-xl h-32"></div>

                    <div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded"></div>
                    </div>

                    <button className="w-full bg-pink-500 text-white py-2 rounded-full">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verified Students */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 shadow h-full">
              <div className="flex gap-4">
                <Shield className="text-pink-600" size={40} />

                <div>
                  <h3 className="font-bold">
                    Only verified students
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    We keep UniDate safe and exclusive for students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invite Friends */}
          <div className="col-span-12">
            <div className="bg-white rounded-3xl p-6 shadow flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Users className="text-pink-600" size={40} />

                <div>
                  <h3 className="font-bold text-xl">
                    Invite your friends
                  </h3>

                  <p className="text-gray-500">
                    The more friends you invite, the better your matches!
                  </p>
                </div>
              </div>

              <button className="bg-pink-500 text-white px-8 py-3 rounded-full">
                Invite Friends
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}