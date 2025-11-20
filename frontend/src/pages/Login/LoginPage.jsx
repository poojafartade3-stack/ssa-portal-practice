import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

import Logo from "../../assets/img/logo.png";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const form = new FormData();
      form.append("username", formData.username);
      form.append("password", formData.password);

      const res = await api.post("/auth/login", form);

      console.log("LOGIN RESPONSE:", res.data); // Debug log

      const { access_token, role, username } = res.data;

      // Save token, role & username to context + localStorage
      login(access_token, role, username);

      alert("Login successful!");

      // Allow context to update before redirect
      setTimeout(() => {
        if (role === "admin") navigate("/admin/dashboard");
        else if (role === "teacher") navigate("/teacher/dashboard");
        else if (role === "student") navigate("/student/dashboard");
        else navigate("/");
      }, 10);
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setError(err.response?.data?.detail || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b325e] to-[#0b2350] px-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <img src={Logo} alt="Logo" className="w-28 h-28 mb-6" />
          <h2 className="text-3xl font-bold text-center">Success Science Academy</h2>
          <p className="text-center mt-4 italic text-lg">
            “Where courage meets wisdom, and learning shapes the leaders of tomorrow.”
          </p>
          <p className="text-center mt-4 opacity-80">
            Empowering Students. Inspiring Futures. Achieving Excellence.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login to Success Science Academy
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
