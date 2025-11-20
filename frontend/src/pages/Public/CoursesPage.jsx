import React from "react";

export default function Courses() {
  const programs = [
    { title: "11th Science (PCM)", text: "Foundation for JEE & CET with strong Physics, Chemistry & Math concepts." },
    { title: "11th Science (PCB)", text: "Biology-centered learning with NEET-oriented problem solving." },
    { title: "12th Science (PCM)", text: "Board + Entrance integrated learning with problem-solving modules." },
    { title: "12th Science (PCB)", text: "Advanced concept strengthening and NEET-focused training." },
    { title: "NEET Coaching Program", text: "Complete medical entrance coaching including mock tests & mentoring." },
    { title: "JEE + MHT-CET Program", text: "Engineering entrance preparation with rank improvement strategy." }
  ];

  const reasons = [
    "Expert & Experienced Faculty",
    "Integrated Board + Entrance Preparation",
    "Regular Unit Tests & Personalized Feedback",
    "Smart Study Material Designed for Toppers",
    "Dedicated Doubt Solving Sessions",
    "Motivation & Mentorship Throughout the Journey",
  ];

  return (
    <div className="animate-pageSlideIn max-w-7xl mx-auto px-4 py-10">

      {/* HERO TEXT */}
      <section className="text-center mb-10">
        <p className="mt-3 text-gray-600 text-lg leading-relaxed">
          Where achievers are made! We shape the future of 11th & 12th Science students
          aspiring for top ranks in NEET, JEE & MHT-CET with expert guidance and
          continuous performance improvement.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0d1b3d]">
          Our Programs
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((course, i) => (
            <div
              key={i}
              className="bg-[#f4f7ff] rounded-xl p-6 shadow-sm text-center cursor-pointer 
                         transition-all duration-300 hover:scale-105 hover:-translate-y-2
                         hover:bg-[#e6edff] hover:shadow-xl"
            >
              <h5 className="text-xl font-semibold text-[#0d1b3d]">{course.title}</h5>
              <p className="text-gray-600 mt-3">{course.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-10 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#0d1b3d]">
          Why Success Science Academy?
        </h2>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-600">
          {reasons.map((item, i) => (
            <li key={i} className="text-lg">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ACADEMIC SUPPORT */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-[#0d1b3d]">
          Academic Excellence With Personal Focus
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We offer personalized mentorship, doubt-clearing sessions, study planning
          assistance, and performance tracking to ensure consistent improvement.
          Our faculty stays connected with students and parents to guide them toward
          their goals.
        </p>
      </section>

      {/* SUCCESS STRATEGY */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-[#0d1b3d]">
          Learning • Practice • Revise • Achieve
        </h3>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600">
          Our proven 4-Stage Success System helps students learn concepts deeply,
          practice efficiently, evaluate performance and become exam-ready.
        </p>
      </section>

    </div>
  );
}
