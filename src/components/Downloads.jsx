import React, { useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Download, Github, Code, Terminal, Package, GitBranch, FileText } from 'lucide-react';
import Button from './ui/Button';
import {toast} from "../ui/use-toast"

const Downloads = () => {
  const [activeTab, setActiveTab] = useState('binaries');
  const containerRef = useRef(null);
  
  const downloads = [
    {
      id: 1,
      title: 'Harneet v1.0.0',
      description: 'Stable Release - If you dont want to build!',
      version: '1.0.0',
      date: '2024-09-30',
      downloads: [
        { os: 'Windows', arch: 'x86_64', ext: 'exe', size: '12.4 MB' },
        { os: 'macOS', arch: 'arm64', ext: 'dmg', size: '15.1 MB' },
        { os: 'Linux', arch: 'x86_64', ext: 'tar.gz', size: '10.8 MB' },
      ],
    },
  ];

  const getDownloadUrl = (os, version) => {
    toast({
      description:"Thanks for expressing interest!. We are still creating final builds. These links will start working shortly. Apologies for the inconvenience caused!"
    })
    return
    const baseUrl = 'https://github.com/harneetlang/harneet/releases';
    if (version === 'nightly') {
      return `${baseUrl}/nightly`;
    }
    return `${baseUrl}/download/v${version}/harneet-${os}-${version}.${os === 'windows' ? 'exe' : os === 'macos' ? 'dmg' : 'tar.gz'}`;
  };

  return (
    <div className="pt-28 pb-20 px-8 max-w-7xl mx-auto text-lg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-75"></div>
          <h1 className="relative text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get Harneet
          </h1>
        </div>
        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto relative">
          <span className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
            Choose your preferred method to get started with Harneet
          </span>
          <span className="absolute -bottom-1 left-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 -translate-x-1/2"></span>
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg bg-gray-900 p-1 border border-gray-800">
          <Button
            onClick={() => setActiveTab('binaries')}
            variant={activeTab === 'binaries' ? 'primary' : 'ghost'}
            size="md"
            icon={Package}
            className={`px-6 ${activeTab !== 'binaries' ? '!bg-transparent hover:!bg-gray-800' : ''}`}
          >
            Pre-built Binaries
          </Button>
          <Button
            onClick={() => setActiveTab('source')}
            variant={activeTab === 'source' ? 'primary' : 'ghost'}
            size="md"
            icon={Code}
            className={`px-6 ${activeTab !== 'source' ? '!bg-transparent hover:!bg-gray-800' : ''}`}
          >
            Build from Source
          </Button>
        </div>
      </div>

      {activeTab === 'binaries' && (
      <div className="space-y-8 max-w-4xl mx-auto">
        {downloads.map((release) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {release.title}
                  </h2>
                  <p className="text-gray-400 mt-1">{release.description}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
                    {release.version}
                  </span>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-800">
              {release.downloads.map((dl, idx) => (
                <div className="p-6 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-center space-x-6">
                      <div className="p-2 rounded-lg bg-gray-800/50">
                        <Download className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div>
                          <p className="font-medium text-white text-lg">{dl.os} ({dl.arch})</p>
                          <p className="text-gray-400">.{dl.ext} • {dl.size}</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      as="a"
                      onClick={()=>getDownloadUrl(dl.os.toLowerCase(), release.version)}
                      variant="primary"
                      size="sm"
                      icon={Download}
                      className="mt-3 sm:mt-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
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

      {activeTab === 'source' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Prerequisites */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
              <p className="text-gray-400 mt-2">Make sure you have the following installed before proceeding:</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Terminal className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">1. Install Just</h3>
                  <p className="text-gray-400 text-sm">
                    Just is a command runner that we use for builds and tests (similar to Make).
                  </p>
                  <div className="mt-2 bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code># macOS (using Homebrew)</code>
                      <code className="block">brew install just</code>
                      <code className="block mt-2"># Linux (using your package manager)</code>
                      <code className="block"># For Debian/Ubuntu: sudo apt install just</code>
                      <code className="block"># For Fedora: sudo dnf install just</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Code className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">2. Install Go</h3>
                  <p className="text-gray-400 text-sm">
                    Harneet is written in Go. Install the latest stable version from the official website.
                  </p>
                  <div className="mt-2 bg-gray-800/50 p-4 rounded-lg">
                    <Button
                      as="a"
                      href="https://golang.org/dl/"
                      variant="secondary"
                      size="sm"
                      className="!bg-gray-800 !text-blue-400 hover:!bg-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Go from golang.org
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Package className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">3. Install Goreleaser (Optional)</h3>
                  <p className="text-gray-400 text-sm">
                    Required if you plan to build release binaries.
                  </p>
                  <div className="mt-2 bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code># macOS (using Homebrew)</code>
                      <code className="block">brew install goreleaser</code>
                      <code className="block mt-2"># Using Go</code>
                      <code className="block">go install github.com/goreleaser/goreleaser@latest</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Build Instructions */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Build from Source</h2>
              <p className="text-gray-400 mt-2">Follow these steps to build Harneet from source:</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                    1
                  </div>
                  <h3 className="font-medium text-white">Clone the repository</h3>
                </div>
                <div className="ml-11">
                  <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>git clone https://github.com/harneetlang/harneet.git</code>
                      <code className="block">cd harneet</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                    2
                  </div>
                  <h3 className="font-medium text-white">Install dependencies</h3>
                </div>
                <div className="ml-11">
                  <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>go mod tidy</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                    3
                  </div>
                  <h3 className="font-medium text-white">Build and Run</h3>
                </div>
                <div className="ml-11 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Build Harneet</h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>just build</code>
                        <code className="block text-gray-500"># This creates the 'harneet' executable</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Start the REPL</h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>just repl</code>
                        <code className="block text-gray-500"># Type commands and see results immediately</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Run a program file</h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>./harneet examples/hello.ha</code>
                        <code className="block text-gray-500"># Runs code from a file (uses .ha extension)</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribute */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <GitBranch className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Contributing</h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    We welcome contributions! Check out our GitHub repository for more information on how to contribute to Harneet.
                  </p>
                  <a 
                    href="https://github.com/harneetlang/harneet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-purple-400 hover:text-purple-300 text-sm"
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
        className="relative mt-16 p-6 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur rounded-xl border border-gray-600/40 max-w-4xl mx-auto overflow-hidden"
        style={{ position: 'relative', height: '200px' }}
      >
        {/* Subtle grid overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -left-20 -top-20 w-60 h-60 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 10, 0, -10, 0],
            y: [0, -10, 0, 10, 0],
            scale: [1, 1.05, 1, 0.95, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div 
          className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -15, 0, 15, 0],
            y: [0, 15, 0, -15, 0],
            scale: [1, 0.95, 1, 1.05, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5
          }}
        />
        
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 0.9, 1.1, 1],
            opacity: [0.15, 0.2, 0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Need help?</h3>
          <p className="text-gray-400 mb-4">
            Check out our documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.open('https://docs.harneetlang.com', '_blank', 'noopener,noreferrer')}
              variant="secondary"
              size="md"
              icon={FileText}
              className="relative z-10"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Downloads;
