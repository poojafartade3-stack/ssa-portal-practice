import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar (hidden on small screens) */}
      <div
        className={`
    fixed md:static bg-white shadow-md z-50
    w-64 h-screen overflow-y-auto transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <AdminSidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with toggle */}
        <AdminNavbar toggleMenu={() => setMenuOpen(!menuOpen)} />

        {/* Main Content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
