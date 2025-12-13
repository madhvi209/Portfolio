"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/blogs-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 6;

  const paginatedBlogs = useMemo(() => {
    const startIndex = currentPage * blogsPerPage;
    return blogs.slice(startIndex, startIndex + blogsPerPage);
  }, [currentPage]);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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
              My Blogs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore articles on web development, technology, and best practices.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedBlogs.map((blog) => (
            <div key={blog.id} className="flex flex-col h-full">
              <BlogCard blog={blog} />
              {/* "Read More" button removed as per instruction */}
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

        {/* Page Info */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Showing {currentPage * blogsPerPage + 1} - {Math.min((currentPage + 1) * blogsPerPage, blogs.length)} of{" "}
            {blogs.length} blogs
          </p>
        </div>
      </div>
    </section>
  );
}
