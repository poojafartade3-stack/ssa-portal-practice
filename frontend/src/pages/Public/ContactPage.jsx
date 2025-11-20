import React from "react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-pageSlideIn">

      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#0b325e]">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT INFO + MAP */}
        <div className="bg-white p-6 shadow-md rounded-lg">

          <h5 className="text-xl font-semibold mb-4">Get in Touch</h5>

          <p className="mb-3 text-gray-700 flex items-start">
            <span className="text-[#0b325e] mr-2 text-xl">📍</span>
            <span>
              <strong>Address:</strong> Success Science Academy, Ahmednagar,
              Maharashtra, India
            </span>
          </p>

          <p className="mb-3 text-gray-700 flex items-start">
            <span className="text-[#0b325e] mr-2 text-xl">📞</span>
            <span>
              <strong>Phone:</strong> +91 98765 43210
            </span>
          </p>

          <p className="mb-4 text-gray-700 flex items-start">
            <span className="text-[#0b325e] mr-2 text-xl">✉️</span>
            <span>
              <strong>Email:</strong> academy.successnation@gmail.com
            </span>
          </p>

          {/* GOOGLE MAP */}
          <iframe
            title="Success Science Academy Ahmednagar"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30162.033437575512!2d74.69420971954723!3d19.096502005161472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssuccess%20science%20academy%20ahmednagar!5e0!3m2!1sen!2sin!4v1762253578936!5m2!1sen!2sin"
            className="w-full h-56 rounded-lg border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-6 shadow-md rounded-lg">

          <form className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0b325e] focus:ring-2 focus:ring-[#0b325e] transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0b325e] focus:ring-2 focus:ring-[#0b325e] transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0b325e] focus:ring-2 focus:ring-[#0b325e] transition"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0b325e] hover:bg-[#06254a] text-white py-2 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
