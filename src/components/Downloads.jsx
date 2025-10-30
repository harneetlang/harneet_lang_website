import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Code,
  Terminal,
  Package,
  GitBranch,
  FileText,
  ExternalLinkIcon,
} from "lucide-react";
import Button from "./ui/Button";
import useDownloadFile from "../ui/hooks/useDownloadHook";

const Downloads = () => {
  const [activeTab, setActiveTab] = useState("binaries");
  const { downloadFile, isDownloading, error } = useDownloadFile();

  const handleDownload = (downloadFileUrl, downloadFileName) => {
    downloadFile(downloadFileUrl, downloadFileName);
  };

  const containerRef = useRef(null);
  const Version = "4.6.0";

  const downloads = [
    {
      id: 1,
      title: `Harneet v${Version}`,
      description: "Early Alpha Release - If you dont want to build!",
      version: Version,
      date: "2025-10-20",
      downloads: [
        { os: "macOS", arch: "amd64", ext: "tar.gz", size: "6.57 MB" },
        { os: "macOS", arch: "arm64", ext: "tar.gz", size: "6.15 MB" },
        { os: "Linux", arch: "386", ext: "tar.gz", size: "6.09 MB" },
        { os: "Linux", arch: "amd64", ext: "tar.gz", size: "6.47 MB" },
        { os: "Linux", arch: "arm64", ext: "tar.gz", size: "5.93 MB" },
        { os: "Windows", arch: "amd64", ext: "tar.gz", size: "6.63 MB" },
       
      ],
    },
  ];

  const getDownloadUrl = (os, version, arch, extension) => {
    const baseUrl = "/assets/"+Version;
    let OS = "windows";
    if (os.toLowerCase() === "macos") {
      OS = "darwin";
    } else OS = os;
    const downloadFileName = `harneet_${version}_${OS}_${arch}.${extension}`;
    const downloadFileUrl = `${baseUrl}/${downloadFileName}`;

    console.log("Download File Name → ", downloadFileName);
    console.log("DownloadFileUrl → ", downloadFileUrl);
    handleDownload(downloadFileUrl, downloadFileName);
  };

  return (
    <div className="relative overflow-hidden bg-[#0d0d0f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,82,84,0.14),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(46,46,48,0.18),transparent_55%),linear-gradient(180deg,rgba(13,13,15,0.92),rgba(8,8,10,0.88))]"></div>
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(72,72,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(72,72,74,0.12)_1px,transparent_1px)] bg-[size:160px_160px]"></div>

      <div className="relative z-10 pt-28 pb-24 px-6 sm:px-8 max-w-6xl mx-auto text-base text-slate-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-3 rounded-full border border-[#3a3a3c] bg-[#1d1d1f]/80 px-4 py-2 text-xs uppercase tracking-[0.45em] text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-[#8e8e93]"></span>
            Downloads
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50">
            <span className="bg-gradient-to-r from-[#aeaeb2] via-[#8e8e93] to-[#636366] bg-clip-text text-transparent">
              get
            </span>{" "}
            Harneet
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Choose your preferred method to get started with Harneet. Grab
            pre-built binaries or follow our source build guide.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-[#1c1c1e]/80 p-1 border border-[#2c2c2e] shadow-[0_0_25px_rgba(0,0,0,0.35)]">
            <Button
              onClick={() => setActiveTab("binaries")}
              variant={activeTab === "binaries" ? "primary" : "ghost"}
              size="md"
              icon={Package}
              className={`px-6 font-mono text-sm ${
                activeTab !== "binaries"
                  ? "!bg-transparent !text-slate-300 hover:!bg-[#2c2c2e]"
                  : "bg-gradient-to-r from-[#2c2c2e] via-[#3a3a3c] to-[#1d1d1f]"
              }`}
            >
              Pre-built Binaries
            </Button>
            <Button
              onClick={() => setActiveTab("source")}
              variant={activeTab === "source" ? "primary" : "ghost"}
              size="md"
              icon={Code}
              className={`px-6 font-mono text-sm ${
                activeTab !== "source"
                  ? "!bg-transparent !text-slate-300 hover:!bg-[#2c2c2e]"
                  : "bg-gradient-to-r from-[#2c2c2e] via-[#3a3a3c] to-[#1d1d1f]"
              }`}
            >
              Build from Source
            </Button>
          </div>
        </div>

        {activeTab === "binaries" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {downloads.map((release) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]/80 backdrop-blur-sm"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 border-b border-[#2c2c2e]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-50">
                        {release.title}
                      </h2>
                      <p className="text-slate-400 mt-1">
                        {release.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#1d1d1f]/70 text-slate-300 border border-[#3a3a3c]/60">
                        {release.version}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-[#2c2c2e]">
                  {release.downloads.map((dl, idx) => (
                    <div
                      key={idx}
                      className="p-6 transition-all duration-200 hover:bg-[#2c2c2e]/70"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="flex items-center space-x-6">
                          <div className="p-2 rounded-lg bg-[#1d1d1f]/70 border border-[#2c2c2e]">
                            <Download className="h-6 w-6 text-[#8e8e93]" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-100 text-lg">
                              {dl.os} ({dl.arch})
                            </p>
                            <p className="text-slate-400">
                              .{dl.ext} • {dl.size}
                            </p>
                          </div>
                        </div>
                        <Button
                          as="a"
                          onClick={() =>
                            getDownloadUrl(
                              dl.os.toLowerCase(),
                              release.version,
                              dl.arch,
                              dl.ext
                            )
                          }
                          variant="primary"
                          size="sm"
                          icon={Download}
                          className="mt-3 sm:mt-0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "source" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Prerequisites */}
            <div className="rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]/80 backdrop-blur-sm overflow-hidden">
              <div className="p-6 border-b border-[#2c2c2e]">
                <h2 className="text-xl font-semibold text-slate-50">
                  Prerequisites
                </h2>
                <p className="text-slate-400 mt-2">
                  Make sure you have the following installed before proceeding:
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg border border-[#3a3a3c] bg-[#1d1d1f]">
                    <Terminal className="h-5 w-5 text-[#8e8e93]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-100">
                      1. Install Just
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Just is a command runner that we use for builds and tests
                      (similar to Make). For more on Just please see the
                      official just documentation at the following link -
                      <a
                        href="https://just.systems/man/en/"
                        className="relative text-[#8e8e93] font-medium no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8e8e93] after:to-[#4a4a4c] after:transition-all after:duration-300 hover:after:w-full hover:text-[#aeaeb2]"
                      >
                        {" "}
                        the official Just documentation.{" "}
                        <ExternalLinkIcon className="inline w-4 h-4" />{" "}
                      </a>
                    </p>
                    <div className="mt-2 border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-slate-300">
                        <code># macOS (using Homebrew)</code>
                        <code className="block">brew install just</code>
                        <code className="block mt-2">
                          # Linux (using your package manager)
                        </code>
                        <code className="block">
                          # For Debian/Ubuntu: sudo apt install just
                        </code>
                        <code className="block">
                          # For Fedora: sudo dnf install just
                        </code>
                        <code className="block mt-2"># Curl</code>
                        <code className="block">
                          curl --proto '=https' --tlsv1.2 -sSf
                          https://just.systems/install.sh | bash -s -- --to
                          DEST{" "}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4">
                  <div className="p-2 rounded-lg border border-[#3a3a3c] bg-[#1d1d1f]">
                    <Code className="h-5 w-5 text-[#8e8e93]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-100">
                      2. Install Go
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Harneet is written in Go. Install the latest stable
                      version from the official website.
                    </p>
                    <div className="mt-2 border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg">
                      <Button
                        onClick={() => window.open("https://golang.org/dl/")}
                        variant="secondary"
                        size="sm"
                        className="!bg-[#1d1d1f] !text-[#aeaeb2] hover:!bg-[#2c2c2e]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Go from golang.org
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4">
                  <div className="p-2 rounded-lg border border-[#3a3a3c] bg-[#1d1d1f]">
                    <Package className="h-5 w-5 text-[#81e299]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-100">
                      3. Install Goreleaser (Optional, but recommended!)
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Required if you plan to build release binaries. Also
                      required to run the examples in an easy fashion! For more
                      information on GoReleaser, please see{" "}
                      <a
                        href="https://goreleaser.com/quick-start/"
                        className="relative text-[#8e8e93] font-medium no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8e8e93] after:to-[#4a4a4c] after:transition-all after:duration-300 hover:after:w-full hover:text-[#aeaeb2]"
                      >
                        {" "}
                        official GoReleaser documentation.{" "}
                        <ExternalLinkIcon className="inline w-4 h-4" />{" "}
                      </a>
                    </p>
                    <div className="mt-2 border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-slate-300">
                        <code># macOS (using Homebrew)</code>
                        <code className="block">brew install goreleaser</code>
                        <code className="block mt-2"># Using Go</code>
                        <code className="block">
                          go install github.com/goreleaser/goreleaser@latest
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Build Instructions */}
            <div className="rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]/80 backdrop-blur-sm overflow-hidden">
              <div className="p-6 border-b border-[#2c2c2e]">
                <h2 className="text-xl font-semibold text-slate-50">
                  Build from Source
                </h2>
                <p className="text-slate-400 mt-2">
                  Follow these steps to build Harneet from source:
                </p>
              </div>
              <div className="p-6 space-y-6">
                {/* Step 1 */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2c2c2e]/40 text-[#d1d1d6] text-sm font-medium border border-[#3a3a3c]/60">
                      1
                    </div>
                    <h3 className="font-medium text-slate-100">
                      Clone the repository
                    </h3>
                  </div>
                  <div className="ml-11">
                    <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-slate-300">
                        <code>
                          git clone https://github.com/harneetlang/harneet.git
                        </code>
                        <code className="block">cd harneet</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2c2c2e]/40 text-[#d1d1d6] text-sm font-medium border border-[#3a3a3c]/60">
                      2
                    </div>
                    <h3 className="font-medium text-slate-100">
                      Install dependencies
                    </h3>
                  </div>
                  <div className="ml-11">
                    <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-slate-300">
                        <code>go mod tidy</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2c2c2e]/40 text-[#d1d1d6] text-sm font-medium border border-[#3a3a3c]/60">
                      3
                    </div>
                    <h3 className="font-medium text-slate-100">
                      Build and Run
                    </h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">
                        Build Harneet
                      </h4>
                      <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-slate-300">
                          <code>just build</code>
                          <code className="block text-gray-500">
                            # This creates the 'harneet' executable
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">
                        Run Examples
                      </h4>
                      <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-slate-300">
                          <code>just test</code>
                          <code className="block text-gray-500">
                            # Run all the examples in the examples folder.
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">
                        Start the REPL
                      </h4>
                      <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-slate-300">
                          <code>just repl</code>
                          <code className="block text-gray-500">
                            # Type commands and see results immediately
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">
                        Run a program file
                      </h4>
                      <div className="border border-[#2c2c2e] bg-[#111112]/70 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-slate-300">
                          <code>./harneet examples/hello.ha</code>
                          <code className="block text-gray-500">
                            # Runs code from a file (uses .ha extension)
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribute */}
            <div className="rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]/80 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg border border-[#3a3a3c] bg-[#1d1d1f]">
                    <GitBranch className="h-5 w-5 text-[#8e8e93]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-100">Contributing</h3>
                    <p className="text-slate-400 mt-1 text-sm">
                      We welcome contributions! Check out our GitHub repository
                      for more information on how to contribute to Harneet.
                    </p>
                    <a
                      href="https://github.com/harneetlang/harneet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-[#8e8e93] hover:text-[#aeaeb2] text-sm"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          ref={containerRef}
          className="relative mt-16 p-6 rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]/80 backdrop-blur max-w-4xl mx-auto overflow-hidden"
          style={{ position: "relative", minHeight: "220px" }}
        >
          {/* Subtle grid overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -left-20 -top-20 w-60 h-60 bg-[#3a3a3c]/20 rounded-full filter blur-3xl"
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.05, 1, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -right-20 -bottom-20 w-48 h-48 bg-[#2c2c2e]/20 rounded-full filter blur-3xl"
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 15, 0, -15, 0],
              scale: [1, 0.95, 1, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#1d1d1f]/25 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.1, 0.9, 1.1, 1],
              opacity: [0.15, 0.2, 0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold text-slate-100 mb-3">
              Need help?
            </h3>
            <p className="text-slate-400 mb-4">Check out our documentation.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.harneetlang.com",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                variant="secondary"
                size="md"
                icon={FileText}
                className="relative z-10 !bg-[#1d1d1f]/90 !text-[#aeaeb2] hover:!bg-[#2c2c2e]"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Downloads;
