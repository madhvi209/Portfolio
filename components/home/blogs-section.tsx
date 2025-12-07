"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/blogs-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description:
      "Learn the fundamentals of Next.js and build your first full-stack application with the latest features.",
    image: "/nextjs-developer-working.jpg",
  },
  {
    id: 2,
    title: "React Hooks Deep Dive",
    description: "Explore advanced React hooks and understand how to manage state effectively in your applications.",
    image: "/react-hooks-code.png",
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices",
    description: "Master Tailwind CSS with industry best practices and create beautiful responsive designs.",
    image: "/tailwind-css-design.png",
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js",
    description: "Create scalable and secure REST APIs using Node.js and Express.js with best practices.",
    image: "/nodejs-backend-development.jpg",
  },
  {
    id: 5,
    title: "MongoDB Database Design",
    description: "Learn how to design efficient MongoDB schemas and optimize your database queries.",
    image: "/mongodb-database-design.jpg",
  },
  {
    id: 6,
    title: "TypeScript for Beginners",
    description: "Get started with TypeScript and understand how it improves code quality and developer experience.",
    image: "/typescript-programming.png",
  },
  {
    id: 7,
    title: "State Management with Redux",
    description: "Master Redux Toolkit for predictable state management in large-scale React applications.",
    image: "/redux-state-management.png",
  },
  {
    id: 8,
    title: "Full Stack Authentication Guide",
    description: "Implement secure authentication systems using JWT and modern security practices.",
    image: "/authentication-security.png",
  },
  {
    id: 9,
    title: "Deploying Apps on Vercel",
    description: "Learn how to deploy your Next.js applications on Vercel with CI/CD pipelines.",
    image: "/vercel-deployment-cloud.jpg",
  },
  {
    id: 10,
    title: "Web Performance Optimization",
    description: "Optimize your web applications for speed and improve user experience metrics.",
    image: "/performance-optimization-web.jpg",
  },
  {
    id: 11,
    title: "CSS Grid Advanced Layouts",
    description: "Create complex responsive layouts using CSS Grid and master modern layout techniques.",
    image: "/css-grid-layout.png",
  },
  {
    id: 12,
    title: "Testing React Applications",
    description: "Write comprehensive tests for React components using Jest and React Testing Library.",
    image: "/testing-react-jest.jpg",
  },
];

export default function BlogsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 6;

  const paginatedBlogs = useMemo(() => {
    const startIndex = currentPage * blogsPerPage;
    return blogsData.slice(startIndex, startIndex + blogsPerPage);
  }, [currentPage]);

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

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
    <section id="blogs" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              My Blog Posts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore articles on web development, technology, and best practices.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
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
                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === index
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

        {/* Page Info */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Showing {currentPage * blogsPerPage + 1} - {Math.min((currentPage + 1) * blogsPerPage, blogsData.length)} of{" "}
            {blogsData.length} blogs
          </p>
        </div>
      </div>
    </section>
  );
}
