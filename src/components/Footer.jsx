import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { toast } from "../ui/use-toast";

const Footer = () => {
  const handleLinkClick = (item) => {
    window.open("https://github.com/harneetlang/");
  };

  return (
    <footer className="border-t border-[#2c2c2e] bg-[#131315]/90 backdrop-blur-lg">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[#aeaeb2] mt-4 text-center max-w-3xl">
              🎊 Harneet gives you 80% of Haskell's functional programming
              benefits with 50% of the complexity! It offers Haskell's
              functional programming power without the steep learning curve,
              adds imperative programming flexibility, and maintains the
              benefits of type safety.
            </p>
            <div className="flex space-x-4 mt-6">
              {[{ icon: Github, label: "GitHub" }].map(
                ({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => handleLinkClick(label)}
                    className=""
                  >
                    <Icon className="h-5 w-5 text-[#8e8e93] hover:text-[#f2f2f7] transition-colors" />
                  </button>
                ),
              )}
            </div>
          </div>
        </motion.div
>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[#2c2c2e] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-[#8e8e93] text-sm">
            © {new Date().getFullYear()} Gagan Janjua. All rights reserved.
          </p>
          <p className="text-[#8e8e93] text-sm mt-4 md:mt-0">
            Made with ❤️ for developers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
