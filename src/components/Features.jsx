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
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              modern teams
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Harneet combines the power of a modern programming language with the
            simplicity you need in today's software world to get started. You
            should be working on your app, not figuring out borrow checkers and
            async programming. <SmileIcon className="inline w-6 h-6 ml-1" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 h-full hover:border-gray-700 transition-all duration-300 flex flex-col">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                </div>
                <div className="flex-grow">
                  {Array.isArray(feature.description) ? (
                    <ul className="space-y-2">
                      {feature.description.map((item, index) => (
                        <li key={index} className="text-gray-400 text-sm leading-relaxed flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{item.replace('→', '').trim()}</span>
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
