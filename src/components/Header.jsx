import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { Github } from "lucide-react";

const Header = () => {
  const handleNavClick = (item) => {
    if (item === "Features") {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item?.toLowerCase() === "github") {
      window.open("https://github.com/harneetlang/");
    } else if (item === "Complete examples") {
      window.open("https://github.com/harneetlang/real_world_examples");
    } else {
      window.open("http://docs.harneetlang.com");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold"
          >
            Harneet
          </motion.div>
          <div className="hidden md:flex items-center space-x-6">
            {["Features", "Docs", "Complete examples"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => handleNavClick("GitHub")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
