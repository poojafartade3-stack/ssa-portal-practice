import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Menu } from "lucide-react";

export default function AdminNavbar({ toggleMenu }) {
  const { username, logout } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center bg-white shadow px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded"
          onClick={toggleMenu}
        >
          <Menu size={20} />
        </button>

        <h2 className="text-lg md:text-xl font-semibold">
          Admin Panel
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-gray-600">
          Welcome, <b>{username}</b>
        </span>

        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
