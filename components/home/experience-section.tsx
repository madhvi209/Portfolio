"use client";

import React from "react";

// --- TYPES ---
interface Experience {
  id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  role: string;
  description: string[] | string;
}

// --- INITIAL DATA ---
const INITIAL_EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "CMT AI",
    location: "Noida, IN",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    role: "Software Engineer (Full Stack)",
    description: [
      "Developed and delivered scalable full-stack web applications using React.js, Next.js, Node.js, and Express.js.",
      "Collaborated with cross-functional teams to improve requirement clarity, reducing front-end rework by 30%.",
      "Optimized backend APIs and database queries across MongoDB, Firebase, MySQL, and PostgreSQL, improving performance by up to 40%.",
      "Integrated authentication, payment gateways, and third-party APIs while maintaining clean, well-documented code.",
    ],
  },
  {
    id: "2",
    company: "VAISHNAV TECHNOLOGIESPVT.LTD.",
    location: "Patna, IN",
    startDate: "Oct 2024",
    endDate: "Feb 2025",
    role: "Software Engineer",
    description: [
      "Developed and delivered scalable full-stack web applications using React.js, Next.js, Node.js, and Express.js.",
      "Collaborated with cross-functional teams to improve requirement clarity, reducing front-end rework by 30%.",
      "Optimized backend APIs and database queries across MongoDB, Firebase, MySQL, and PostgreSQL, improving performance by up to 40%.",
      "Integrated authentication, payment gateways, and third-party APIs while maintaining clean, well-documented code.",
    ],
  },
  {
    id: "3",
    company: "Unified Mentors Private Limited",
    location: "Gurgaon, IN",
    startDate: "Jun 2024",
    endDate: "Oct 2024",
    role: "Full Stack Developer",
    description: [
      "Built and deployed a full-stack job portal using React.js, Node.js, and MongoDB with secure, role-based access control.",
      "Developed fully responsive and consistent UI layouts using Tailwind CSS across multiple devices.",
      "Implemented secure authentication (JWT, RBAC) and scalable backend APIs to support growing user and data volume.",
    ],
  },
];

// --- TimelineItem ---
interface TimelineItemProps {
  data: Experience;
  isLast: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, isLast, index }) => {
  // Defensive: Support both string[] and (rarely) string for data.description
  let descriptionList: string[] = [];
  if (Array.isArray(data.description)) {
    descriptionList = data.description;
  } else if (typeof data.description === "string") {
    descriptionList = [data.description];
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-8 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Left: Company */}
      <div className="md:text-right mb-2 md:mb-0 md:pt-1">
        <h3 className="font-serif font-bold text-white text-xl tracking-tight leading-tight">
          {data.company}
        </h3>
        {data.location && (
          <div className="text-white/70 font-normal mt-1 text-base md:text-right">
            {data.location}
          </div>
        )}
        <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mt-2 font-sans">
          {data.startDate} - {data.endDate}
        </p>
      </div>

      {/* Center: Timeline graphic */}
      <div className="hidden md:flex flex-col items-center relative mx-4">
        {/* The Circle */}
        <div className="w-5 h-5 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full border-4 border-[#232538] z-10 shadow group-hover:scale-110 transition-all duration-300"></div>
        {/* The Dotted Line */}
        {!isLast && (
          <div className="absolute top-5 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dotted border-white/20 -mb-8 group-hover:border-white/40 transition-colors duration-300 h-[calc(100%+2rem)]"></div>
        )}
      </div>

      {/* Right: Role and Description */}
      <div className="pb-12 md:pb-20 relative pl-4 md:pl-0 border-l-2 border-dotted border-white/15 md:border-l-0 ml-2 md:ml-0">
        {/* Mobile Circle indicator */}
        <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full md:hidden"></div>
        <h4 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-orange-500 transition-colors">
          {data.role}
        </h4>
        <ul className="text-sm text-white/70 leading-relaxed font-sans text-justify md:text-left list-disc pl-5">
          {descriptionList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- Main ExperienceSection ---
const ExperienceSection = () => {
  // Remove useState from here, as it isn't needed and not supported in non-client components
  const experiences = INITIAL_EXPERIENCES;

  return (
    <section
      id="experience"
      className="py-20 bg-[#232538] text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #181826 0%, #232538 60%, #232538 100%)",
      }}
    >
      {/* Orange light emit (blurred gradient similar to services-section) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-80px] left-[-100px] w-[340px] h-[260px] rounded-full bg-gradient-to-br from-[#fb703c66] via-[#fa7c2770] to-transparent blur-3xl opacity-70 z-0"
      />
      {/* Subtle Decorations */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] z-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--accent,rgba(255,255,255,0.85)) 1px,transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            My Work Experience
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30"></span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base mt-3">
            A chronological overview of my professional journey, roles, and achievements in the design and development industry.
          </p>
        </div>
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              data={exp}
              isLast={index === experiences.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
