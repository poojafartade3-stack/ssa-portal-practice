import React from "react";
import logo from "../../assets/img/logo.png";
import sachinImg from "../../assets/img/sachin_solat_sir.jpg";
import sugitImg from "../../assets/img/sugit_wagh_sir.jpg";
import maheshImg from "../../assets/img/mahesh_bankar_sir.jpg";
import renukaImg from "../../assets/img/renuka_bhapkar.jpg";
import truptiImg from "../../assets/img/trupti_mam.jpg";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Sachin Solat",
      role: "Biology",
      desc: "MBBS, MD — 16+ Years Experience",
      img: sachinImg,
    },
    {
      name: "Eng Sugit Wagh",
      role: "Physics",
      desc: "GATE Qualified — 13+ Years Experience",
      img: sugitImg,
    },
    {
      name: "Eng Mahesh Bankar",
      role: "Mathematics",
      desc: "University Gold Medalist — 13+ Years Experience",
      img: maheshImg,
    },
    {
      name: "Renuka Bhopkar",
      role: "Chemistry",
      desc: "M.Sc. (Chemistry)",
      img: renukaImg,
    },
    {
      name: "Trupti Katariya",
      role: "Chemistry",
      desc: "M.Sc. (Chemistry), D Pharma — 12+ Years Experience",
      img: truptiImg,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="text-center mb-10 animate-fadeInSlow">
        <img src={logo} alt="Academy Logo" className="w-28 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#0b325e]">About Us</h2>
      </div>

      {/* Academy Intro */}
      <div className="text-center mx-auto max-w-3xl mb-12 animate-slideLeft">
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Success Science Academy</strong> — where education meets
          innovation. We are dedicated to nurturing young minds and empowering
          them to achieve academic excellence through science and creativity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        <div className="animate-slideLeft">
          <h4 className="text-2xl font-semibold text-[#0b325e] mb-2">
            Our Mission
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide high-quality education that fosters
            scientific curiosity, critical thinking, and lifelong learning.
            We aim to create a learning environment where every student can
            reach their fullest potential.
          </p>
        </div>

        <div className="animate-slideLeft">
          <h4 className="text-2xl font-semibold text-[#0b325e] mb-2">
            Our Vision
          </h4>
          <p className="text-gray-700 leading-relaxed">
            To be a leading educational institution that inspires innovation
            and excellence in science education, shaping the leaders and
            innovators of tomorrow.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-10">
        <h4 className="text-2xl font-semibold text-[#0b325e] mb-6">
          Meet Our Team
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center
                         hover:shadow-xl transform hover:-translate-y-2 transition-all
                         animate-fadeInUp"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition"
                />
              </div>

              <h5 className="text-lg font-semibold">{member.name}</h5>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-600 mt-1">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center max-w-3xl mx-auto animate-slideLeft">
        <p className="text-gray-600">
          At Success Science Academy, we believe that learning is a lifelong
          journey. Join us as we continue to inspire, educate, and empower
          the next generation of thinkers.
        </p>
      </div>
    </div>
  );
}
