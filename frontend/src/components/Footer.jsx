import React, { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-12 mt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">📅</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Schedulink
              </h2>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              Smart Appointment Scheduler for Modern Businesses. Streamline your scheduling process with our intuitive platform.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Powered by React & FastAPI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="https://editor.swagger.io/?url=http://localhost:8081/api/openapi.json"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
              >
                <span className="flex items-center gap-2">
                  📖 API Documentation
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
              <a
                href="https://github.com/Manicoder-code/appointment-booking-platform/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
              >
                <span className="flex items-center gap-2">
                  📋 Documentation (README)
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
              <button
                onClick={toggleAbout}
                className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group text-left w-full"
              >
                <span className="flex items-center gap-2">
                  ℹ️ About Schedulink
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{showAbout ? "▼" : "→"}</span>
                </span>
              </button>
              {showAbout && (
                <div className="mt-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 text-sm text-blue-100 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  <p className="mb-2">
                    <strong className="text-white">Schedulink</strong> is a comprehensive full-stack appointment booking platform designed to streamline scheduling for modern businesses.
                  </p>
                  <p className="mb-2">
                    Built with React, FastAPI, and Docker, it offers robust user management, flexible slot scheduling, and real-time appointment tracking.
                  </p>
                  <p className="text-blue-200">
                    Created as part of <span className="text-white font-medium">Cognizant Vibe Coding 2025</span> - empowering businesses with smart scheduling solutions.
                  </p>
                </div>
              )}
              <a
                href="https://vibecoding.cognizant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
              >
                <span className="flex items-center gap-2">
                  🚀 Vibe Coding
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Tech Stack</h3>
            <div className="space-y-3">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                <span className="flex items-center gap-2">
                  ⚛️ React.js
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                <span className="flex items-center gap-2">
                  🎨 Tailwind CSS
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                <span className="flex items-center gap-2">
                  ⚡ FastAPI
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                <span className="flex items-center gap-2">
                  🐳 Docker
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </a>
            </div>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  📅
                </span>
                <div>
                  <div className="text-sm text-blue-200">Launched</div>
                  <div>August 8th, 2025</div>
                </div>
              </div>
              <a
                href="https://github.com/Manicoder-code/appointment-booking-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <span>🔗</span>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-blue-100 font-medium">
                © {currentYear} Cognizant Technology Solutions. All rights reserved.
              </p>
              <p className="text-sm text-blue-200 mt-1">
                Schedulink - Empowering businesses with smart scheduling solutions
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                🎉 Vibe Coding 2025
              </span>
              <span className="hidden md:block">•</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                Built with ❤️
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

