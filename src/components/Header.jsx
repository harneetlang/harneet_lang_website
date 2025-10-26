import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Github, Download, Menu, X } from "lucide-react";
import LogoMark from "../assets/logos/ha.png";
import Button from "./ui/Button";

const navItems = [
  { name: "Features", to: "/#features" },
  { name: "Docs", external: true, action: "http://docs.harneetlang.com" },
  { name: "Complete examples", external: true, action: "https://github.com/harneetlang/real_world_examples" },
  { name: "Downloads", to: "/downloads" },
  { name: "Video Tutorials", to: "/videos" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);
  const handleNavClick = (item, e) => {
    if (item.external) {
      window.open(item.action, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.name === "Features" && window.location.pathname === '/') {
      e?.preventDefault();
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c2c2e] bg-[#131315]/90 backdrop-blur-lg"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 w-full">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 sm:gap-4 text-lg font-semibold tracking-wider text-slate-100 hover:text-white transition-colors whitespace-nowrap"
              >
                <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#2b2b2f,#151517)] shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                  <div className="absolute inset-[1px] rounded-[6px] border border-[#3a3a3c]/70"></div>
                  <img src={LogoMark} alt="Harneet logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
                </div>
                <span className="font-mono text-sm sm:text-base uppercase tracking-[0.5em] text-slate-400">Harneet</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                item.to ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={(e) => handleNavClick(item, e)}
                    className="text-[#d1d1d6] hover:text-white transition-colors duration-200 px-3 py-2 text-sm whitespace-nowrap uppercase tracking-[0.2em] font-medium rounded-lg hover:bg-[#111112]/70"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(item, e)}
                    className="flex items-center gap-2 text-[#d1d1d6] hover:text-white transition-colors duration-200 px-3 py-2 text-sm whitespace-nowrap uppercase tracking-[0.2em] font-medium rounded-lg hover:bg-[#111112]/70"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#d1d1d6] hover:text-white hover:bg-[#111112]/70 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 pt-20 bg-[#0a0a0c] md:hidden overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-12 space-y-1">
              {navItems.map((item) => (
                item.to ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={(e) => handleNavClick(item, e)}
                    className="block px-4 py-4 text-base font-medium text-[#d1d1d6] hover:text-white hover:bg-[#1d1d1f] rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.name}
                    </div>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(item, e)}
                    className="w-full text-left px-4 py-4 text-base font-medium text-[#d1d1d6] hover:text-white hover:bg-[#1d1d1f] rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.name}
                    </div>
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
export default Header;
