import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar({ isOpen }) {
  const [openMaster, setOpenMaster] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "";

  return (
    <aside
      className={`fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)]
      bg-white shadow-lg z-50 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    `}
    >
      <div className="p-6">
        <h3 className="text-lg font-bold mb-6">Admin Menu</h3>

        <nav className="flex flex-col gap-3">
          {/* Dashboard */}
          <Link
            className={`${isActive("/admin/dashboard")} hover:text-blue-600`}
            to="/admin/dashboard"
          >
            Dashboard
          </Link>

          <div>
            <button
              onClick={() => setOpenMaster(!openMaster)}
              className="w-full text-left font-semibold hover:text-blue-600"
            >
              Master Data {openMaster ? "▾" : "▸"}
            </button>

            <div
              className={`ml-4 mt-2 flex flex-col gap-2 transition-all overflow-hidden
              ${openMaster ? "max-h-60" : "max-h-0"}`}
            >
              <Link className={`${isActive("/admin/sessions")} hover:text-blue-600`} to="/admin/sessions">
                Academic Sessions
              </Link>
              <Link className={`${isActive("/admin/add-class")} hover:text-blue-600`} to="/admin/add-class">
                Add Class
              </Link>
              <Link className={`${isActive("/admin/add-course")} hover:text-blue-600`} to="/admin/add-course">
                Add Course
              </Link>
              <Link className={`${isActive("/admin/add-subject")} hover:text-blue-600`} to="/admin/add-subject">
                Add Subject
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
