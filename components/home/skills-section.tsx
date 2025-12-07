"use client";

import React from "react";

const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Redux Toolkit",
    "Chakra UI",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Auth",
    "Firebase",
    "Next API Routes",
  ],
  database: [
    "MongoDB",
    "Mongoose",
    "Firebase Firestore",
    "PostgreSQL",
  ],
  stateManagement: [
    "Redux Toolkit",
    "React Context API",
    "Zustand",
  ],
  tools: [
    "Git & GitHub",
    "Vercel",
    "Netlify",
    "Figma",
    "Postman",
    "VS Code",
    "NPM & Yarn",
    "Linux",
  ],
  other: [
    "OOP",
    "DSA",
    "Testing",
    "Agile Methodology",
    "API Integration",
    "Responsive Design",
  ],
};

const badgeClass =
  "px-4 py-2 bg-accent rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pink-500">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Database */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500">Database</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* State Management */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">State Management</h3>
            <div className="flex flex-wrap gap-2">
              {skills.stateManagement.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Tools & Platforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-500">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Other */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-500">Other</h3>
            <div className="flex flex-wrap gap-2">
              {skills.other.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
