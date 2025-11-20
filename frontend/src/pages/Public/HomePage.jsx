// src/pages/Public/HomePage.jsx
import React, { useEffect, useRef, useState } from "react";
import Banner1 from "../../assets/img/Banner.png";
import Banner2 from "../../assets/img/Banner2.png";
import Banner3 from "../../assets/img/Banner3.png";
import Banner4 from "../../assets/img/Banner4.png";
import logo from "../../assets/img/logo.png";
import ManeshBankar from "../../assets/img/mahesh_bankar_sir.jpg";
import RenukaBhapkar from "../../assets/img/renuka_bhapkar.jpg";
import SachinSolat from "../../assets/img/sachin_solat_sir.jpg";
import SugitWagh from "../../assets/img/sugit_wagh_sir.jpg";
import Trupti_Mam from "../../assets/img/trupti_mam.jpg";
import Bhujbal_sir from "../../assets/img/bhujbal_sir.jpg";

import { Link } from "react-router-dom";

const images = [Banner1, Banner2, Banner3, Banner4];
const quotes = [
  "Believe in yourself and all that you are.",
  "The future belongs to those who prepare for it today.",
  "Education is most powerful weapon to change world.",
  "Dream big, work hard, and achieve greatness.",
];

const deliveryItems = [
  {
    title: "11th & 12th Science",
    desc: `Expert Coaching in <b>Physics, Chemistry, Mathematics, and Biology</b> 
           with Integrated Preparation for <b>CET, NEET, and JEE</b>.<br/><br/>
           Our institute is dedicated to nurturing young minds with a strong academic foundation 
           and advanced problem-solving skills.<br/>
           Students receive: <br/>
           • <b>Comprehensive Study Material</b> – Simplified notes, theory modules, and practice sheets.<br/>
           • <b>Regular Tests & Mock Exams</b> – CET, NEET, and JEE pattern-based practice for real exam readiness.<br/>
           • <b>Personalized Mentoring</b> – One-on-one doubt solving and guidance.<br/>`,
  },
  {
    title: "Test Series & Assessments",
    desc: `Our <b>Test Series & Assessments</b> are designed to help students develop exam temperament and time management skills. 
         We conduct <b>Regular Weekly Tests</b> and a <b>Monthly Mega Test</b> to simulate real exam conditions and build confidence.<br/><br/>
         Each test follows the <b>CET, NEET, and JEE</b> exam pattern, ensuring that students practice with the same level of difficulty and question styles 
         they will encounter in the actual exams.<br/><br/>
         After every test, students receive:<br/>
         • <b>Detailed Performance Analysis</b> – Section-wise reports to identify strengths and weaknesses.<br/>
         • <b>Ranking & Benchmarking</b> – Compare performance with peers to understand competitive standing.<br/>
         • <b>Personalized Feedback</b> – Faculty guidance on improving weak areas and refining problem-solving strategies.<br/>
         • <b>Time Management Training</b> – Tips and practice to attempt maximum questions accurately within the time limit.<br/><br/>
         This continuous cycle of testing and feedback helps students overcome exam fear, sharpen their concepts, and steadily improve their scores.`,
  },
  {
    title: "Personalized Mentoring",
    desc: `We believe that every student learns differently, which is why our <b>Personalized Mentoring</b> program is designed to provide 
         individual attention and customized support for success.<br/><br/>
         Students receive:<br/>
         • <b>One-on-One Doubt-Solving Sessions</b> – Immediate clarification of concepts to avoid backlogs.<br/>
         • <b>Study Planning & Strategy</b> – Tailored timetables and preparation plans based on individual goals.<br/>
         • <b>Performance Tracking</b> – Regular progress reviews and corrective action to improve weak areas.<br/>
         • <b>Motivational Guidance</b> – Personal counseling to reduce exam stress and build confidence.<br/>
         • <b>Direct Mentor Support</b> – Continuous communication with faculty for guidance and feedback.<br/><br/>
         With focused mentoring, students stay on the right path, stay motivated, and steadily progress towards excelling in 
         <b>CET, NEET, and JEE</b>.`,
  },
];

export default function HomePage() {
  // HERO SLIDER
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateQuote, setAnimateQuote] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimateQuote(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimateQuote(true);
      }, 50);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // HONEYCOMB
  const defsRef = useRef(null);
  const gRef = useRef(null);

  useEffect(() => {
    const hexPoints = (cx, cy, a) => {
      let pts = [];
      for (let i = 0; i < 6; i++) {
        let ang = (i * 60 * Math.PI) / 180;
        pts.push(`${cx + a * Math.cos(ang)},${cy + a * Math.sin(ang)}`);
      }
      return pts.join(" ");
    };

    const drawHoneycomb = () => {
      const side = 110;
      const gap = 1.05;
      const cx = 375;
      const cy = 325;

      const defs = defsRef.current;
      const g = gRef.current;

      if (!defs || !g) return;

      defs.innerHTML = "";
      g.innerHTML = "";

      const imgs = [
        logo,
        SachinSolat,
        ManeshBankar,
        RenukaBhapkar,
        SugitWagh,
        Trupti_Mam,
        Bhujbal_sir,
      ];

      const baseDist = side * Math.sqrt(3);
      const dist = baseDist * gap;

      const positions = [
        [cx, cy],
        [cx, cy - dist],
        [cx, cy + dist],
        [cx + 1.5 * side * gap, cy - baseDist / 2 * gap],
        [cx + 1.5 * side * gap, cy + baseDist / 2 * gap],
        [cx - 1.5 * side * gap, cy - baseDist / 2 * gap],
        [cx - 1.5 * side * gap, cy + baseDist / 2 * gap],
      ];

      positions.forEach((pos, i) => {
        const [nx, ny] = pos;
        const id = `hex${i}`;
        const pts = hexPoints(nx, ny, side);

        defs.innerHTML += `
          <clipPath id="${id}">
            <polygon points="${pts}" />
          </clipPath>
        `;

        g.innerHTML += `
          <image href="${imgs[i]}" x="${nx - side}" y="${ny - side}"
                 width="${side * 2}" height="${side * 2}"
                 clip-path="url(#${id})"
                 preserveAspectRatio="xMidYMid slice" />
          <polygon points="${pts}" fill="none" stroke="#666" stroke-width="1.5"/>
        `;
      });
    };

    drawHoneycomb();
    window.addEventListener("resize", drawHoneycomb);
    return () => window.removeEventListener("resize", drawHoneycomb);
  }, []);

  // DELIVERY DROPDOWN
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full animate-pageSlideIn">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#00152e] to-[#01183a]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
              Welcome to <br /> Success Science Academy
            </h1>

            <p className={`text-lg text-gray-200 transition-opacity duration-700 ${
              animateQuote ? "opacity-100" : "opacity-0"
            }`}>
              {quotes[currentIndex]}
            </p>

            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full h-60 md:h-72 overflow-hidden">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HONEYCOMB */}
      <section className="bg-gradient-to-b from-[#F5F7FA] to-[#E4E7EB] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div className="flex justify-center">
            <svg viewBox="0 0 750 650" className="w-full max-w-[650px]">
              <defs ref={defsRef}></defs>
              <g ref={gRef}></g>
            </svg>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5">Our Faculty</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Success Science Academy, we take pride in having a highly
              qualified and dedicated team.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              They not only focus on academic excellence but also provide
              personalized mentoring.
            </p>

            <Link
              to="/about"
              className="bg-[#ff9800] text-white px-5 py-3 rounded-md font-semibold hover:scale-105 shadow transition"
            >
              Know More
            </Link>
          </div>

        </div>
      </section>

      {/* DELIVERY SECTION */}
      <section className="py-16 bg-gradient-to-b from-[#F5F7FA] to-[#E4E7EB]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-8">
            How we deliver your success
          </h2>

          <div className="flex flex-col gap-4">
            {deliveryItems.map((item, i) => (
              <div key={i} className="bg-white border rounded-lg shadow-sm">

                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 font-semibold hover:bg-gray-50"
                >
                  {item.title}
                  <span
                    className={`transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    ^
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                  className={`px-5 overflow-hidden transition-all duration-500 ${
                    openIndex === i ? "max-h-[300px] py-4" : "max-h-0"
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
