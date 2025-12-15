import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
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
        "Expressive type system",
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
    <section className="relative overflow-hidden bg-[#0d0d0f] py-28 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,82,84,0.14),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(46,46,48,0.18),transparent_55%),linear-gradient(180deg,rgba(13,13,15,0.92),rgba(8,8,10,0.88))]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(72,72,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(72,72,74,0.12)_1px,transparent_1px)] bg-[size:160px_160px] opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mx-auto mb-8 flex max-w-sm items-center justify-center gap-3 rounded-full border border-[#3a3a3c] bg-[#1d1d1f]/80 px-4 py-2 text-xs uppercase tracking-[0.45em] text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-[#8e8e93]"></span>
            Feature Highlights
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-50">
            Built for {" "}
            <span className="bg-gradient-to-r from-[#aeaeb2] via-[#8e8e93] to-[#636366] bg-clip-text text-transparent">
              modern teams
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Harneet combines the power of a modern programming language with the
            simplicity you need in today's software world to get started. You
            should be working on your app, not figuring out borrow checkers and
            async programming. <SmileIcon className="inline w-6 h-6 ml-1 text-[#8e8e93]" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <div className={`relative h-full overflow-hidden rounded-2xl border border-slate-800/70 ${index % 2 === 0 ? "bg-[#121214]" : "bg-[#101012]"} p-8 transition-all duration-300 group-hover:border-[#3a3a3c]/60`}>
                <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-[#3a3a3c]/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"></div>
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1c1c1e] via-[#2c2c2e] to-[#1c1c1e] border border-[#3a3a3c]/70 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                      <feature.icon className="h-7 w-7 text-[#aeaeb2]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-50">{feature.title}</h3>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
                  {Array.isArray(feature.description) ? (
                    <ul className="space-y-3 text-sm text-slate-300">
                      {feature.description.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8e8e93]"></span>
                          <span className="flex-1 leading-relaxed font-medium">{item.replace('→', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-300 leading-relaxed">
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
