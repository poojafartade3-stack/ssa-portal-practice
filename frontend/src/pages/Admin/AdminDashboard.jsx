import React from "react";
import AdminLayout from "./layouts/AdminLayout";
import WelcomeCard from "./widgets/WelcomeCard";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <WelcomeCard />

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-gray-500 text-sm">Total Students</h3>
          <p className="text-2xl font-bold mt-1">312</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-gray-500 text-sm">Total Teachers</h3>
          <p className="text-2xl font-bold mt-1">12</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-gray-500 text-sm">Academic Sessions</h3>
          <p className="text-2xl font-bold mt-1">3</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-gray-500 text-sm">Active Classes</h3>
          <p className="text-2xl font-bold mt-1">18</p>
        </div>
      </div>

      {/* Placeholder Section */}
      <div className="mt-10 text-gray-500">
        <h2 className="text-xl font-semibold mb-2">Coming Soon:</h2>
        <ul className="list-disc ml-5">
          <li>Attendance Reports</li>
          <li>Fees Collection Charts</li>
          <li>Recent Activity Log</li>
        </ul>
      </div>
    </AdminLayout>
  );
}
