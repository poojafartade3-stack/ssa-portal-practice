import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="SSA Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold">Success Nation</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/courses" className="hover:text-blue-400 transition">
              Courses
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>

            {/* Profile Dropdown (Desktop) */}
            <div className="relative">
              <FaUserCircle
                size={24}
                className="cursor-pointer hover:text-blue-400"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-md shadow-lg py-1 animate-fadeIn">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden space-x-2">
            <FaUserCircle
              size={24}
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute top-14 right-4 w-40 bg-slate-800 rounded-md shadow-lg py-1 animate-fadeIn">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-inner animate-slideDown">
          <div className="space-y-2 px-4 py-3">
            <Link
              to="/"
              className="block py-2 px-3 rounded hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 rounded hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="block py-2 px-3 rounded hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-3 rounded hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
