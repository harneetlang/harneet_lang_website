import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Youtube, X } from "lucide-react";
import Button from "./ui/Button";
import ArrowFunctions from "../assets/thumbnails/arrow_functions.png";
import ReplImage from "../assets/thumbnails/repl.png";
import NestedFunctions from "../assets/thumbnails/nested_functions.png";
import FunctionComposition from "../assets/thumbnails/function_composition.png";
import DB from "../assets/thumbnails/db.png";
import OS from "../assets/thumbnails/OS.png";
import Webserver from "../assets/thumbnails/webserver.png";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videosPerPage = 9; // 3x3 grid

  // Video data - you can modify this as needed
  const videoCategories = [
    { id: "all", name: "All Videos" },
    { id: "functions", name: "Functions" },
    { id: "db", name: "Databases" },
    { id: "repl", name: "Repl" },
  ];

  // https://www.youtube.com/embed/
  const videos = [
    {
      id: 1,
      title: "Intro to Harneet",
      description: "Intro to Harneet",
      category: "tutorials",
      thumbnail: "https://img.youtube.com/vi/Y7kYZ9uZNZs/maxresdefault.jpg",
      videoId: "Y7kYZ9uZNZs", // Example YouTube video ID
      duration: "6:54",
      date: "2025-10-07",
    },
    {
      id: 2,
      title: "Arrow functions",
      description: "Arrow functions in Harneet",
      category: "functions",
      thumbnail: ArrowFunctions,
      videoId: "qqWtU8cG4o8",
      duration: "3:23",
      date: "2025-10-07",
    },
    {
      id: 3,
      title: "REPL",
      description: "Harneet's REPL",
      category: "repl",
      thumbnail: ReplImage,
      videoId: "BuhLKp3Bp1Y",
      duration: "1:20",
      date: "2024-09-15",
    },
    {
      id: 4,
      title: "Nested Functions",
      description: "Harneet has built in support for nested functions",
      category: "functions",
      thumbnail: NestedFunctions,
      videoId: "GQBqi8mLXO8",
      duration: "2:48",
      date: "2024-09-20",
    },
    {
      id: 5,
      title: "Function Compositions",
      description: "Combine two or more functions to create a new function",
      category: "functions",
      thumbnail: FunctionComposition,
      videoId: "qE4w-THz-xA", // Example YouTube video ID
      duration: "6:20",
      date: "2024-10-01",
    },
    {
      id: 6,
      title: "OS",
      description: "Learn to use the OS library",
      category: "tutorials",
      thumbnail: OS,
      videoId: "dQw4w9WgXcQ",
      duration: "24:15",
      date: "2024-10-02",
    },
    {
      id: 7,
      title: "Databases",
      description: "Build apps that interact with databaes using Harneet",
      category: "tutorials",
      thumbnail: DB,
      videoId: "dQw4w9WgXcQ",
      duration: "45:20",
      date: "2024-09-15",
    },
    {
      id: 8,
      title: "Webserver, eh",
      description: "Step-by-step guide to setup a Webserver.",
      category: "tutorials",
      thumbnail: Webserver,
      videoId: "dQw4w9WgXcQ",
      duration: "18:45",
      date: "2024-09-20",
    },
    {
      id: 9,
      title: "Getting Started with Harneet",
      description: "Learn the basics of Harneet in this introductory tutorial.",
      category: "tutorials",
      thumbnail: "https://via.placeholder.com/400x225",
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      duration: "12:34",
      date: "2024-10-01",
    }
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      activeCategory === "all" || video.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo,
  );
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Reset to first page when search or filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const openVideo = (video) => {
    setSelectedVideo(video);
    console.log(video.thumbnail);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Close modal when clicking outside the content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isModalOpen && event.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative"
      >
        <div className="relative inline-block">
          <h1 className="relative text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Video Tutorials!
          </h1>
        </div>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          <span className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
            Watch tutorials, talks, and showcases about Harneet
          </span>
          <span className="absolute -bottom-1 left-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 -translate-x-1/2"></span>
        </p>
      </motion.div>

      {/* Category Filter */}
      {/* Search and Filter Section */}
      <div className="max-w-3xl mx-auto mb-8 px-4 w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg
                className="h-5 w-5 text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {videoCategories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "primary" : "ghost"}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? "!bg-purple-600 hover:!bg-purple-700"
                : "!bg-gray-800 hover:!bg-gray-700"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              borderColor: [
                "rgba(55, 65, 81, 0.5)",
                "rgba(124, 58, 237, 0.3)",
                "rgba(55, 65, 81, 0.5)",
              ],
              transition: {
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 12,
                borderColor: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              },
            }}
            whileHover={{
              y: -4,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden cursor-pointer group"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            onClick={() => openVideo(video)}
          >
            <motion.div
              className="relative aspect-video overflow-hidden"
              style={{backgroundColor:"#000000"}}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.01, 1],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                },
              }}
            >
              <motion.div className="iflex items-center justify-center min-h-screen">
                <motion.img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-1/2 h-1/2 object-cover mx-auto"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 0.7, 0.6],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  <motion.div
                    className="bg-purple-600 p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(video);
                    }}
                  >
                    <Play className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {video.duration}
              </motion.div>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <motion.span
                  className="text-xs font-medium text-purple-400 uppercase tracking-wider"
                  whileHover={{ color: "#d8b4fe" }}
                  transition={{ duration: 0.2 }}
                >
                  {videoCategories.find((cat) => cat.id === video.category)
                    ?.name || video.category}
                </motion.span>
                <span className="text-xs text-gray-400">{video.date}</span>
              </div>
              <motion.h3
                className="text-lg font-semibold text-white mb-1 line-clamp-2"
                whileHover={{ color: "#e9d5ff" }}
                transition={{ duration: 0.2 }}
              >
                {video.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-400 line-clamp-2"
                whileHover={{ color: "#d1d5db" }}
                transition={{ duration: 0.2 }}
              >
                {video.description}
              </motion.p>
              <motion.div
                className="mt-3 flex items-center text-sm text-gray-400 group-hover:text-white transition-colors duration-200"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Youtube className="h-4 w-4 mr-1 text-red-500" />
                <span>Watch on YouTube</span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {filteredVideos.length > videosPerPage && (
        <div className="flex flex-wrap justify-center items-center mt-12 gap-2">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="ghost"
            className={`!px-4 !py-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </Button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            // Show first page, last page, and pages around current page
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            if (pageNum < 1 || pageNum > totalPages) return null;

            return (
              <Button
                key={pageNum}
                onClick={() => paginate(pageNum)}
                variant={currentPage === pageNum ? "primary" : "ghost"}
                className="!w-10 !h-10 !p-0 !min-w-0 !rounded-lg"
              >
                {pageNum}
              </Button>
            );
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span className="px-2 py-2 text-gray-400">...</span>
          )}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <Button
              onClick={() => paginate(totalPages)}
              variant={currentPage === totalPages ? "primary" : "ghost"}
              className="!w-10 !h-10 !p-0 !min-w-0 !rounded-lg"
            >
              {totalPages}
            </Button>
          )}

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            variant="ghost"
            className={`!px-4 !py-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </Button>
        </div>
      )}

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12 w-full">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
            <Youtube className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-medium text-gray-300 mb-2">
            {searchQuery ? "No videos match your search" : "No videos found"}
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            {searchQuery
              ? "Try adjusting your search or filter to find what you're looking for."
              : "We couldn't find any videos in this category. Check back later for new content!"}
          </p>
          {searchQuery && (
            <Button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              variant="ghost"
              className="mt-4"
            >
              Clear all filters
            </Button>
          )}
        </div>
      )}

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative pt-[56.25%] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <a
                    href={`https://youtube.com/watch?v=${selectedVideo.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Youtube className="h-4 w-4 mr-1 text-red-500" />
                    Watch on YouTube
                  </a>
                  <span className="mx-2">•</span>
                  <span>{selectedVideo.duration}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;
