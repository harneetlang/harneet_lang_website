import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { toast } from "../ui/use-toast";

const Footer = () => {
  const handleLinkClick = (item) => {
    toast({
      description:
        "🚧 This feature isn't implemented yet!. We are currently working on this! Please expect an update soon! 🚀",
    });
  };

  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mt-4 text-center">
              The programming language you'll enjoy using. Built for modern
              software teams.
            </p>
            <div className="flex space-x-4 mt-6">
              {[{ icon: Github, label: "GitHub" }].map(
                ({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => handleLinkClick(label)}
                    className=""
                  >
                    <Icon className="h-5 w-5 text-gray-400" />
                  </button>
                ),
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gagan Janjua. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for developers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
