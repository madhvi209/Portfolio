"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import TypingAnimation from "@/components/typeing-animation";

// Social icons from contact-section.tsx (lines 6-52)
const socialIcons = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/madhavi32/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="7" y1="8.5" x2="7" y2="16.5" />
        <line x1="7" y1="7" x2="7" y2="7" />
        <path d="M12 12v4.5M12 13.5c0-1.104.79-1.5 1.71-1.5 1.11 0 2.29.67 2.29 2.1v3.4" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/madhvi209",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.88v2.79c0 .26.16.58.67.48A10.012 10.012 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/madhavi209",
    icon: (
      <svg width="24" height="24" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
        <g>
          <path d="M15 40 L35 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 34 Q22 37,25 34 Q28 31,31 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="25" cy="40" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </g>
      </svg>
    ),
  }
];

export default function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center pt-8 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #232538 0%, #232538 61%, #fb7c27 61%, #fb5c97 100%)",
                }}
            >
                {/* SVG and Pattern for Decor shape on left */}
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
                    {/* Pink-orange arc (bottom right) */}
                    <svg
                        className="absolute bottom-0 right-0 w-[60vw] h-auto"
                        width="600"
                        height="400"
                        viewBox="0 0 600 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ minWidth: 200 }}
                    >
                        <path
                            d="M0,400 Q400,400 600,120 Q600,0 480,0 Q200,160 0,400 Z"
                            fill="url(#hero-orange-pink)"
                            opacity="0.94"
                        />
                        <defs>
                            <linearGradient id="hero-orange-pink" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fb7c27" />
                                <stop offset="1" stopColor="#fb5c97" />
                            </linearGradient>
                        </defs>
                        <circle cx="540" cy="55" r="6" fill="#fff" opacity="0.9" />
                        <circle cx="575" cy="250" r="3" fill="#fff" opacity="0.5" />
                    </svg>
                    {/* Circle dots pattern (bottom right) */}
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
                    {/* Circle dots pattern (top left) */}
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
                    {/* Circle dots pattern (bottom left) */}
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 w-full py-16 relative z-10">
                    {/* Responsive: For small screens, stack and center text and image. On md+, two columns. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 lg:gap-0">
                        {/* Left Side - Text */}
                        <div className="space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
                            {/* Greeting and Name */}
                            <div>
                                <p className="text-xl sm:text-2xl text-white font-semibold mb-1 tracking-wide uppercase">
                                    Hello, My Name is
                                </p>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white via-orange-400 to-pink-500 bg-clip-text text-transparent uppercase">
                                    Madhavi Sharma{" "}
                                    <span className="text-white/80 font-normal text-lg md:text-2xl align-middle">
                                        &nbsp;And I&apos;m a
                                    </span>
                                </h1>
                            </div>
                            {/* Typing Animation */}
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                <TypingAnimation />
                            </div>
                            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-medium max-w-xl">
                                Crafting fast, scalable, and impactful web experiences that drive results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
                                <a
                                    href="#contact"
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 text-base"
                                >
                                    Get In Touch <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="/files/Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-7 py-3 text-base border border-orange-400 text-orange-400 font-semibold rounded-xl transition-all hover:bg-orange-50/40 dark:hover:bg-orange-900/20 hover:border-orange-600 bg-white/10"
                                >
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Animated Circular Image */}
                        <div className="relative flex flex-col items-center md:items-end justify-center md:justify-end h-[22rem] sm:h-[27rem] md:h-[30rem] md:h-full mt-10 md:mt-0">
                            <div className="relative w-64 h-64 sm:w-[22rem] sm:h-[22rem] md:w-[25rem] md:h-[25rem] flex items-center justify-center animate-bounce-smooth">
                                {/* BG: orange & pink gradient */}
                                <div
                                    className="absolute inset-0 rounded-full pointer-events-none border-8 border-white/30 z-0"
                                    style={{
                                        boxShadow:
                                            "0 20px 50px 0 rgba(251,113,60,0.18), 0 0 100px 15px rgba(251,92,151,0.17)",
                                        background: `
                                            radial-gradient(circle at 75% 20%, #ffa64233 0%, transparent 66%),
                                            radial-gradient(circle at 40% 80%, #fb7c2740 0%, transparent 82%),
                                            linear-gradient(135deg, #fb7c27a6 0%, #fb5c97 100%)
                                        `,
                                        filter: "blur(.5px)",
                                    }}
                                />
                                {/* The circular photo */}
                                <Image
                                    src="/images/dp.png"
                                    alt="Developer"
                                    fill
                                    className="rounded-full object-cover shadow-xl z-10 border-8 border-white/80"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(251,124,39,0.10) 0%, rgba(255,255,255,0.21) 40%, rgba(251,92,151,0.16) 100%)"
                                    }}
                                    priority
                                />
                            </div>
                            {/* Social Icons below and shifted left & center of Image */}
                            <div
                              className="flex gap-4 mt-7 md:mt-8"
                              style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "-3.2rem",
                                transform: "translateX(-10%)", // Shift the social icons a little to the right
                                zIndex: 20
                              }}
                            >
                                {socialIcons.map((icon) => (
                                  <a
                                    key={icon.name}
                                    href={icon.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={icon.name}
                                    className="group transition-transform hover:scale-110 hover:-translate-y-1 focus:outline-none"
                                  >
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/90 to-pink-500/80 text-white shadow-lg border-2 border-white/30 transition-all duration-200 group-hover:from-orange-600 group-hover:to-pink-600">
                                      {icon.icon}
                                    </span>
                                  </a>
                                ))}
                            </div>
                            {/* Keyframe for bounce-smooth */}
                            <style jsx>{`
                                @keyframes bounce-smooth {
                                    0% {
                                        transform: translateY(0);
                                    }
                                    50% {
                                        transform: translateY(-24px);
                                    }
                                    100% {
                                        transform: translateY(0);
                                    }
                                }
                                .animate-bounce-smooth {
                                    animation: bounce-smooth 2.7s ease-in-out infinite;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
