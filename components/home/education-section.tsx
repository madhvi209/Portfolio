"use client";

import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Gautam Buddha University, Greater Noida IN",
    year: "2022 - 2025",
  },
  {
    degree: "Diploma",
    institution: "Goverment Polytechnic, Jamui",
    year: "2019 - 2022",
  },
];

// Only gradient for blue text
const blueGradientTextStyle = {
  background: "linear-gradient(90deg, #ff9933 0%, #ff55bb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #232538 0%, #232538 100%)",
      }}
    >
      {/* Orange light shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          position: "absolute",
          top: "50%",
          left: "60%",
          width: "640px",
          height: "340px",
          transform: "translate(-50%, -50%)",
          filter: "blur(64px)",
          background:
            "radial-gradient(circle at 70% 60%, rgba(255,153,51,0.20) 0%, rgba(255,153,51,0.00) 80%)",
          opacity: 1,
          zIndex: 1,
        }}
      />
      {/* SVG DECOR similar to hero-section for visual consistency */}
      <div
        className="absolute top-0 left-0 h-full w-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Big blue arc (top left) */}
        <svg
          className="absolute top-0 left-0 h-full md:w-3/5 w-full"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minWidth: 500 }}
        >
          <path
            d="M0,0 Q350,0 590,250 Q800,400 800,800 L0,800 Z"
            fill="#232538"
          />
        </svg>
        {/* Remove Orange arc (bottom right) */}
        {/* Dots bottom right */}
        <svg
          className="absolute bottom-2 right-2 w-64 h-32"
          width="300"
          height="120"
          viewBox="0 0 300 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => (
              <circle
                key={`circle-br-${row}-${col}`}
                cx={22 + col * 24}
                cy={18 + row * 12}
                r="4"
                fill="#fff"
                opacity=".22"
              />
            ))
          )}
        </svg>
        {/* Dots top left */}
        <svg
          className="absolute top-4 left-5 w-36 h-16"
          width="150"
          height="60"
          viewBox="0 0 150 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`circle-tl-${row}-${col}`}
                cx={15 + col * 22}
                cy={10 + row * 12}
                r="2"
                fill="#fff"
                opacity=".2"
              />
            ))
          )}
        </svg>
        {/* Dots bottom left */}
        <svg
          className="absolute bottom-4 left-5 w-36 h-16"
          width="150"
          height="60"
          viewBox="0 0 150 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`circle-bl-${row}-${col}`}
                cx={15 + col * 22}
                cy={10 + row * 12}
                r="2"
                fill="#fff"
                opacity=".2"
              />
            ))
          )}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Education
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-blue-500/60 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
              <p
                className="font-semibold mb-1"
                style={blueGradientTextStyle}
              >
                {edu.institution}
              </p>
              <p className="text-white/70">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
