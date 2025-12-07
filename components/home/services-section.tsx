"use client";

import { Monitor, Code, Smartphone, BarChart, PenTool, Globe } from "lucide-react";
import React from "react";

// Define your services as before
const services = [
  {
    icon: <Monitor size={32} strokeWidth={1.5} />,
    title: "Web Designing",
    description: "Clean and pixel-perfect UI for every device.",
  },
  {
    icon: <Code size={32} strokeWidth={1.5} />,
    title: "Web Development",
    description: "Fast, scalable, and secure applications.",
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    title: "App Development",
    description: "Modern mobile-friendly app development.",
  },
  {
    icon: <BarChart size={32} strokeWidth={1.5} />,
    title: "SEO Marketing",
    description: "Rank higher and boost visibility.",
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "Creative Design",
    description: "Unique designs tailored to your brand.",
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "Global Marketing",
    description: "Grow your digital presence worldwide.",
  },
];

// Skills info for pie chart representation
const skills = [
  { title: "React.js", color: "#fd9644", percent: 93 },
  { title: "Next.js", color: "#26de81", percent: 90 },
  { title: "Node.js", color: "#45aaf2", percent: 85 },
  { title: "MongoDB", color: "#a55eea", percent: 78 },
  { title: "TypeScript", color: "#fa8231", percent: 75 },
  { title: "Tailwind CSS", color: "#20bf6b", percent: 88 },
];

// Pie chart SVG using conic arc
function SkillPieChart({
  percent,
  color,
  size = 92, // Increased the default size from 64 to 92
  stroke = 9, // Optionally, increase stroke width for a more balanced look at larger size
}: {
  percent: number;
  color: string;
  size?: number;
  stroke?: number;
}) {
  // For circular SVG progress (using stroke-dasharray)
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg width={size} height={size} className="block mx-auto" style={{ display: "block" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#eee"
        strokeWidth={stroke}
        fill="none"
        style={{ opacity: 0.22 }}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 1s cubic-bezier(0.9, 0.05, 0.4, 0.9)",
          filter: "drop-shadow(0 1px 5px #0001)",
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size * 0.28}
        fill="#fff"
        fontWeight={600}
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="py-12 flex justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #181826 0%, #232538 60%, #232538 100%)",
      }}
    >
      {/* Decorative blurred orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-80px] left-[-100px] w-[340px] h-[260px] rounded-full bg-gradient-to-br from-[#fb703c66] via-[#fa7c2770] to-transparent blur-3xl opacity-70 z-0"
      />
      <div
        className="w-full max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-8">
          <span className="text-orange-400/80 uppercase tracking-widest text-xs font-bold">
            What I Do
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Services &amp; Solutions
          </h2>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#232538]/90 border border-[#343653] rounded-xl shadow-sm hover:shadow-lg flex flex-col items-center text-center p-8 transition h-full"
            >
              <div className="mb-6 text-orange-500 p-3 border border-[#393952] rounded-full bg-[#232538] shadow-md">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Representation: Pie charts in grid */}
        <div className="text-center mb-8">
          <span className="text-orange-400/80 uppercase tracking-widest text-xs font-bold">
            Skill Proficiency
          </span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-4">
            My Main Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.title} className="flex flex-col items-center gap-2 p-3">
              <SkillPieChart percent={skill.percent} color={skill.color} />
              <div className="text-base font-semibold text-white/90">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative blurred orange glow bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-70px] right-[-90px] w-[320px] h-[200px] rounded-full bg-gradient-to-tl from-[#fa7c2755] via-[#fa7c2733] to-transparent blur-2xl opacity-70 z-0"
      />
    </section>
  );
}
