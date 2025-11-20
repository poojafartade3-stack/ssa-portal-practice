import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Logo from "../../assets/img/logo.png"; // ensure the path is correct

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Signup successful:", response.data);
      alert("Signup successful!");
      navigate("/login");

    } catch (error) {
      console.error("❌ Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.detail || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b325e] to-[#0b2350] px-4">

      {/* WRAPPER */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE - Branding */}
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-600 to-blue-400 text-white animate-slideLeft">

          <img
            src={Logo}
            alt="Logo"
            className="w-28 h-28 mb-6 animate-fadeInSlow"
          />

          <h2 className="text-3xl font-bold text-center animate-fadeInUp">
            Join Success Science Academy
          </h2>

          <p className="text-center mt-4 italic text-lg animate-fadeInUp delay-150">
            “Begin your journey towards excellence and endless possibilities.”
          </p>

          <p className="text-center mt-4 opacity-90 animate-fadeInUp delay-300">
            Quality Learning • Expert Guidance • Bright Futures
          </p>
        </div>

        {/* RIGHT SIDE - Signup Form */}
        <div className="p-8 flex flex-col justify-center animate-pageSlideIn">

          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 transition"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 transition"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 transition"
              required
            />

            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 transition"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm animate-fadeIn">{error}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition transform hover:scale-[1.02]"
            >
              Register
            </button>

            <p className="text-sm text-center mt-3">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
