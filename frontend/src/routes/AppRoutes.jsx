import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/Login/SignupPage";
import HomePage from "../pages/Public/HomePage";
import AboutPage from "../pages/Public/AboutPage";
import CoursesPage from "../pages/Public/CoursesPage";
import ContactPage from "../pages/Public/ContactPage";

import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AcademicSessionsPage from "../pages/Admin/AcademicSessionsPage";
import AdminLayout from "../pages/Admin/layouts/AdminLayout";

import AddSubjectPage from "../pages/Admin/AddSubjectPage";
import AddCoursePage from "../pages/Admin/AddCoursePage";
import AddClassPage from "../pages/Admin/AddClassPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Academic Sessions */}
      <Route
        path="/admin/sessions"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AcademicSessionsPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* ⭐ Add Class */}
      <Route
        path="/admin/add-class"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddClassPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* ⭐ Add Course */}
      <Route
        path="/admin/add-course"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddCoursePage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* ⭐ Add Subject */}
      <Route
        path="/admin/add-subject"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddSubjectPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Public Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Catch-all → redirect to login */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
