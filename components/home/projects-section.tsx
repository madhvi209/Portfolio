"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Z: Each project will now have an images array (one or more images).
const projects = [
  {
    id: 1,
    title: "Hallever E-Commerce Platform",
    description:
      "Full-stack e-commerce platform using Next.js for the frontend, Firebase as the database, and a backend powered by Node.js, Express, and JavaScript. Features include Stripe integration, JWT authentication, and a robust admin dashboard.",
    tech: ["Next.js", "Node.js", "Express.js", "JavaScript", "Firebase", "Stripe"],
    images: [
      "/images/project/hallever2.png",
      "/images/project/hallever1.png",
      "/images/project/hallever3.png",
    ],
    github: "github.com/madhvi209/hallever",
    demo: "hallever-ecru.vercel.app",
  },
  {
    id: 2,
    title: "GREEN ENERGY WEBSITE | Dynamic Business Platform",
    description: [
      "Responsive website for sustainability-focused company.",
      "Admin dashboard for blogs and products.",
      "Modular content supporting scalable updates."
    ].join('\n'),
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Admin Dashboard"],
    images: [
      "/images/project/green1.png",
      "/images/project/green2.png",
       "/images/project/green3.png",
      "/images/project/green4.png"
    ],
    github: "github.com/madhvi209/green_energy",
    demo: "https://green-energy-ruddy.vercel.app",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "Role-based job portal built with the MERN stack for students and companies. Students can search, filter, and apply for jobs with a personalized dashboard. Employers can post job listings and manage applications securely.",
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    images: [
      "/images/project/jobPortal1.png",
      "/images/project/jobPortal2.png"
    ],
    github: "github.com/madhvi209/JobPortal",
    demo: "jobportal-35u8.onrender.com",
  },
  {
    id: 4,
    title: "CHAT APP",
    description:
      "A real-time chat application where two users can send and receive messages instantly using Socket.io. Features a clean and responsive UI built with React, secure authentication workflow with JWT for login-based access, and a Node.js backend that manages chat rooms and message delivery. The application uses MongoDB for data storage and ensures a seamless messaging experience.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Javascript"],
    images: [
      "/images/project/chatApp2.png",
      "/images/project/chatApp1.png"
    ],
    github: "github.com/madhvi209/chatApp",
    demo: "https://chatapp-fp4r.onrender.com",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Weather forecasting application with geolocation, multiple weather sources, and detailed analytics.",
    tech: ["React.js", "REST API", "Tailwind CSS", "Context API"],
    images: [
      "/mongodb-database-design.jpg"
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "Content management system with markdown support, categories, comments, and admin panel.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Authentication"],
    images: [
      "/typescript-programming.png",
      "/blog-admin-preview.png"
    ],
    github: "#",
    demo: "#",
  },
  // Add more projects if needed for additional pages
];

// Helper: Gallery for project images
type ProjectImageGalleryProps = {
  images: string[];
  title: string;
};

function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [currentImg, setCurrentImg] = useState(0);

  if (!Array.isArray(images) || images.length === 0)
    return (
      <Image
        src={"/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-full object-cover"
      />
    );

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-48 overflow-hidden group">
      {/* Main Image */}
      <Image
        src={images[currentImg]}
        alt={`${title} Screenshot ${currentImg + 1}`}
        width={400}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        priority={currentImg === 0}
      />
      {/* Gallery Controls if multiple */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            aria-label="Previous image"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-orange-500 text-orange-600 hover:text-white p-1 rounded-full transition-colors z-20"
            tabIndex={0}
            type="button"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Right Arrow */}
          <button
            aria-label="Next image"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-orange-500 text-orange-600 hover:text-white p-1 rounded-full transition-colors z-20"
            tabIndex={0}
            type="button"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-2 h-2 rounded-full ${idx === currentImg
                    ? "bg-orange-500"
                    : "bg-white/70 dark:bg-zinc-500"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Helper: Properly resolve GitHub URL (ensures clickable, opens in new tab, and adds protocol)
function getValidGithubUrl(github: string) {
  if (!github || github === "#" || github.trim() === "") return "#";
  if (github.startsWith("http://") || github.startsWith("https://")) return github;
  // Accept links both with and without "www.", accept both "github.com" domain and "https://"
  // If it's just "github.com/USERNAME/REPO" or "www.github.com/USERNAME/REPO":
  if (/^github\.com\//i.test(github)) {
    return "https://" + github.replace(/^\/+/, "");
  }
  if (/^www\.github\.com\//i.test(github)) {
    return "https://" + github.replace(/^\/+/, "");
  }
  // Otherwise, fallback: if already a URL-like domain, just append protocol
  return "https://" + github.replace(/^\/+/, "");
}

// Helper: Set 'http' for demo links that are missing protocol and not just "#"
function getValidDemoUrl(demo: string) {
  if (!demo || demo === "#" || demo.trim() === "") return "#";
  if (demo.startsWith("http://") || demo.startsWith("https://")) return demo;
  return "https://" + demo.replace(/^\/*/, "");
}

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const paginatedProjects = useMemo(() => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  }, [currentPage]);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-background shadow-md hover:shadow-lg transition-all"
            >
              <ProjectImageGallery
                images={project.images}
                title={project.title}
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent text-xs rounded border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <a
                    href={getValidGithubUrl(project.github)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                    target={project.github && project.github !== "#" ? "_blank" : undefined}
                    rel={project.github && project.github !== "#" ? "noopener noreferrer" : undefined}
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                  <a
                    href={getValidDemoUrl(project.demo)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600"
                    target={project.demo && project.demo !== "#" ? "_blank" : undefined}
                    rel={project.demo && project.demo !== "#" ? "noopener noreferrer" : undefined}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${currentPage === index
                    ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg"
                    : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* Info about what is displayed, optional */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Showing {currentPage * projectsPerPage + 1} - {Math.min((currentPage + 1) * projectsPerPage, projects.length)} of{" "}
            {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
}
