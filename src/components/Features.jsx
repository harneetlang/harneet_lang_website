import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Target,
  SmileIcon,
  BicepsFlexedIcon,
  BugIcon,
  PartyPopperIcon,
  LandmarkIcon,
  Code2Icon,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PartyPopperIcon,
      title: "Built for easy usage",
      description: [
        "Intuitive syntax similar to Golang",
        "Minimal learning curve for developers",
        "Clear and readable code structure",
        "Comprehensive documentation and examples",
        "Built-in development tools"
      ],
    },
    {
      icon: LandmarkIcon,
      title: "Standard Library",
      description: [
        "Rich set of built-in packages",
        "File I/O and system operations",
        "Networking and HTTP clients/servers",
        "Data serialization (JSON, YAML, etc.)",
        "Concurrent programming support"
      ],
    },
    {
      icon: BugIcon,
      title: "Error Handling",
      description: [
        "Explicit error handling model",
        "Custom error types and assertions",
        "Stack traces and debugging support",
        "Panic and recover mechanisms",
        "Comprehensive error messages"
      ],
    },
    {
      icon: BicepsFlexedIcon,
      title: "Functional Programming",
      description: [
        "Strong static typing for functions",
        "First-class function support",
        "Higher-order function capabilities",
        "Function composition and chaining",
        "Type-safe functional programming"
      ],
    },
    {
      icon: Zap,
      title: "Type Safety Meets Flexibility",
      description: [
        "Strict, compile-time type checking",
        "`any` type for controlled flexibility",
        "Zero-cost abstractions",
        "Built for real-world applications"
      ],
    },
    {
      icon: Code2Icon,
      title: "Build Modular, Maintainable Code with Ease",
      description: [
        "Go-Like Imports - Familiar syntax with modern twists",
        "Relative Imports - `import \"../mylib\" as mylib`",
        "Package Management - Built-in support for local packages",
        "Structured Projects - Clear project organization",
        "Module Aliasing - Avoid naming conflicts"
      ],
    },
  ];

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              modern teams
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Harneet combines the power of a modern programming language with the
            simplicity you need in today's software world to get started. You
            should be working on your app, not figuring out borrow checkers and
            async programming. <SmileIcon className="inline w-6 h-6 ml-1" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/80 rounded-xl p-8 h-full hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col min-h-[320px]">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/30 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                </div>
                <div className="flex-grow">
                  {Array.isArray(feature.description) ? (
                    <ul className="space-y-3">
                      {feature.description.map((item, index) => (
                        <li key={index} className="text-gray-400 text-feature leading-relaxed flex items-start">
                          <span className="text-blue-400 mr-3 mt-1 font-bold">•</span>
                          <span className="flex-1 font-medium">{item.replace('→', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
