import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const [openMaster, setOpenMaster] = useState(false);

  return (
    <aside className="w-64 bg-white shadow-lg p-6 h-full overflow-y-auto">
      <h3 className="text-lg font-bold mb-6">Admin Menu</h3>

      <nav className="flex flex-col gap-3">
        {/* Dashboard */}
        <Link className="hover:text-blue-600" to="/admin/dashboard">
          Dashboard
        </Link>

        {/* ============================ */}
        {/*        MASTER DATA MENU       */}
        {/* ============================ */}
        <div>
          <button
            onClick={() => setOpenMaster(!openMaster)}
            className="w-full text-left font-semibold hover:text-blue-600"
          >
            Master Data {openMaster ? "▾" : "▸"}
          </button>

          {/* Collapsible Content */}
          <div
            className={`mt-2 ml-4 flex flex-col gap-2 transition-all overflow-hidden ${
              openMaster ? "max-h-60" : "max-h-0"
            }`}
          >
            <Link className="hover:text-blue-600" to="/admin/sessions">
              Academic Sessions
            </Link>

            <Link className="hover:text-blue-600" to="/admin/add-class">
              Add Class
            </Link>

            <Link className="hover:text-blue-600" to="/admin/add-course">
              Add Course
            </Link>

            <Link className="hover:text-blue-600" to="/admin/add-subject">
              Add Subject
            </Link>
          </div>
        </div>
        {/* ============================ */}

        {/* Example future items */}
        {/*
        <Link className="hover:text-blue-600" to="/admin/students">
          Manage Students
        </Link>

        <Link className="hover:text-blue-600" to="/admin/attendance">
          Attendance
        </Link>
        */}
      </nav>
    </aside>
  );
}
