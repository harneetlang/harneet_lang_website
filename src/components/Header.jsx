import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "../ui/use-toast";
import { Github, Download } from "lucide-react";
import Button from "./ui/Button";

const Header = () => {
  const handleNavClick = (item, e) => {
    e.preventDefault();
    
    if (item?.toLowerCase() === "github") {
      window.open("https://github.com/harneetlang/");
      return;
    } else if (item === "Complete examples") {
      window.open("https://github.com/harneetlang/real_world_examples");
      return;
    } else if (item === "Docs") {
      window.open("http://docs.harneetlang.com");
      return;
    }
    
    // Handle Features navigation
    if (item === "Features") {
      // If we're already on the home page, just scroll to features
      if (window.location.pathname === '/') {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on another page, navigate to home first, then scroll
        window.location.href = '/';
        // The actual scroll will be handled by a useEffect in the Home component
        // that checks for a hash in the URL
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 w-full">
        <div className="flex items-center justify-between space-x-4 md:space-x-8">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold hover:text-white transition-colors whitespace-nowrap"
            >
              Harneet
            </motion.div>
          </Link>
          
          <div className="flex-1 flex items-center justify-center overflow-x-auto">
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-6 px-2">
              {["Features", "Docs", "Complete examples"].map((item) => (
                <Link
                  key={item}
                  to={item === "Features" ? "/#features" : "#"}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 px-1 py-1 text-sm sm:text-base whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/downloads"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center px-1 py-1 text-sm sm:text-base whitespace-nowrap"
              >
                <Download className="h-4 w-4 mr-1" />
                Downloads
              </Link>
              <Link
                to="/videos"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 px-1 py-1 text-sm sm:text-base whitespace-nowrap flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Video Tuorials
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Button
              onClick={() => handleNavClick("GitHub")}
              icon={Github}
              size="md"
              variant="primary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
export default Header;
