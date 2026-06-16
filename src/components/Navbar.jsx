import { useState } from "react";
import { Menu, User, LogOut } from "lucide-react";

export default function Navbar({ setSidebarOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="h-20 px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-pink-600 hover:bg-pink-50 p-2 rounded-lg transition"
          >
            <Menu size={32} />
          </button>

          <h1 className="text-4xl font-bold font-serif text-pink-700">
            UniDate
          </h1>
        </div>

        {/* Right */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-11 h-11 rounded-full bg-pink-200 flex items-center justify-center"
          >
            <User size={22} className="text-pink-700" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-lg border overflow-hidden">
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 text-left">
                <User size={18} />
                Profile
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 text-left text-red-500">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}