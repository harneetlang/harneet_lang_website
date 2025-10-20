import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Download, TerminalSquare } from "lucide-react";
import Button from "./ui/Button";

const Header = () => {
  const handleNavClick = (item, e) => {
    e.preventDefault();
    
    if (item?.toLowerCase() === "github") {
      window.open("https://github.com/harneetlang/");
      return;
    } else if (item === "Playground") {
      window.open("https://github.com/harneetlang/playground");
      return;
    } else if (item === "Docs") {
      window.open("http://docs.harneetlang.com");
      return;
    } else if (item === "Complete examples") {
      window.open("https://github.com/harneetlang/real_world_examples");
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
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c2c2e] bg-[#131315]/90 backdrop-blur-lg"
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 w-full">
        <div className="flex items-center justify-between space-x-4 md:space-x-8">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 text-lg font-semibold tracking-wider text-slate-100 hover:text-white transition-colors whitespace-nowrap"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_18px_45px_RGBA(2,6,23,0.35)]">
                <div className="absolute inset-[1px] rounded-[6px] border border-slate-700/60"></div>
                <TerminalSquare className="h-5 w-5 text-slate-200" />
              </div>
              <span className="font-mono text-base uppercase tracking-[0.5em] text-slate-400">Harneet</span>
            </motion.div>
          </Link>

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-nowrap items-center gap-x-4 sm:gap-x-6 px-2">
              {["Features", "Docs", "Complete examples"].map((item) => (
                <Link
                  key={item}
                  to={item === "Features" ? "/#features" : "#"}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-[#d1d1d6] hover:text-white transition-colors duration-200 px-2.5 py-1 text-xs sm:text-sm whitespace-nowrap uppercase tracking-[0.24em] font-medium border border-transparent rounded-full hover:border-[#2c2c2e] hover:bg-[#111112]/70"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/downloads"
                className="text-[#d1d1d6] hover:text-white transition-colors duration-200 px-2.5 py-1 text-xs sm:text-sm whitespace-nowrap uppercase tracking-[0.24em] font-medium border border-transparent rounded-full hover:border-[#2c2c2e] hover:bg-[#111112]/70"
              >
                Downloads
              </Link>
              <Link
                to="/videos"
                className="text-[#d1d1d6] hover:text-white transition-colors duration-200 px-2.5 py-1 text-xs sm:text-sm whitespace-nowrap uppercase tracking-[0.24em] font-medium border border-transparent rounded-full hover:border-[#2c2c2e] hover:bg-[#111112]/70"
              >
                Video Tutorials
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
export default Header;
