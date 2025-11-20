import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white w-full mt-0 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-12">
        {/* About Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-green-400 text-xl font-semibold mb-4">
            Success Science Academy
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Building bright futures through quality education and guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4">
          <h4 className="text-green-400 text-lg font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-300 hover:text-green-400 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-green-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h4 className="text-green-400 text-lg font-semibold mb-4">
            Contact
          </h4>
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <FaPhone className="text-green-400" /> +91 70580 91185
          </p>
          <p className="flex items-center gap-2 text-gray-300 mb-4">
            <FaEnvelope className="text-green-400" />
            academy.successnation@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/SuccessNationAcademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition transform hover:scale-110"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/success_science_academy?igsh=MXZhMTlnanNiYXpkcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition transform hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwy1crD0QdFF6uCW8sXVt0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition transform hover:scale-110"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0b1220] py-4 border-t border-slate-800 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Success Science Academy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
