import {
  Home,
  Search,
  Heart,
  MessageCircle,
  Bell,
  Settings,
  X,
} from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white border-r shadow-xl z-50 transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b">
          <h1 className="text-4xl font-bold font-serif text-pink-700">
            UniDate
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-pink-600"
          >
            <X size={30} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-5 space-y-3">
          <SidebarItem
            icon={<Home size={24} />}
            label="Home"
            active
          />

          <SidebarItem
            icon={<Search size={24} />}
            label="Discover"
          />

          <SidebarItem
            icon={<Heart size={24} />}
            label="Matches"
          />

          <SidebarItem
            icon={<MessageCircle size={24} />}
            label="Chats"
          />

          <SidebarItem
            icon={<Bell size={24} />}
            label="Notifications"
          />

          <SidebarItem
            icon={<Settings size={24} />}
            label="Settings"
          />
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
        active
          ? "bg-pink-100 text-pink-600"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}

      <span className="text-lg font-medium">
        {label}
      </span>
    </button>
  );
}