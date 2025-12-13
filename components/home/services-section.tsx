"use client";

import { Monitor, Code, Smartphone } from "lucide-react";
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
];

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
      </div>
      {/* Decorative blurred orange glow bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-70px] right-[-90px] w-[320px] h-[200px] rounded-full bg-gradient-to-tl from-[#fa7c2755] via-[#fa7c2733] to-transparent blur-2xl opacity-70 z-0"
      />
    </section>
  );
}
