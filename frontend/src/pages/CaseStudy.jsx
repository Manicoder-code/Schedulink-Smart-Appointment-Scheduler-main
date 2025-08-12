import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Users, Zap, Shield, Globe, Smartphone, Code, Database, Cloud, TrendingUp, ChevronDown, ChevronRight } from 'lucide-react';

const CaseStudy = () => {
  const navigate = useNavigate();
  const [expandedDocs, setExpandedDocs] = useState({});

  const toggleDoc = (docId) => {
    setExpandedDocs(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Management",
      description: "Comprehensive user registration and profile management system with role-based access control."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Intelligent appointment slot creation with real-time availability tracking and conflict prevention."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring seamless experience across all devices and screen sizes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Authentication",
      description: "Advanced security measures with session management and role-based permissions."
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React 18", description: "Modern UI framework with hooks and context" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid development" },
        { name: "Vite", description: "Next-generation frontend tooling for faster builds" },
        { name: "Lucide React", description: "Beautiful and consistent icon library" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "FastAPI", description: "High-performance Python web framework" },
        { name: "SQLAlchemy", description: "Powerful ORM for database operations" },
        { name: "Pydantic", description: "Data validation using Python type annotations" },
        { name: "Swagger UI", description: "Interactive API documentation" }
      ]
    },
    {
      category: "Infrastructure",
      technologies: [
        { name: "Docker", description: "Containerization for consistent deployments" },
        { name: "Docker Compose", description: "Multi-container application orchestration" },
        { name: "SQLite", description: "Lightweight database for development" },
        { name: "Nginx", description: "High-performance web server and reverse proxy" }
      ]
    }
  ];

  const metrics = [
    { label: "Performance Score", value: "95/100", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Mobile Responsive", value: "100%", icon: <Smartphone className="w-6 h-6" /> },
    { label: "API Response Time", value: "<50ms", icon: <Zap className="w-6 h-6" /> },
    { label: "Security Rating", value: "A+", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"></div>

        <div className="relative container mx-auto px-6 py-20">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Schedulink Case Study
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive examination of our modern appointment booking platform,
              showcasing innovative solutions and cutting-edge technology stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🎯 Full-Stack Solution
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🚀 Modern Architecture
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                📱 Mobile-First Design
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {metric.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{metric.label}</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern businesses need efficient appointment scheduling systems that can handle
                complex booking scenarios while providing an intuitive user experience. Traditional
                solutions often lack flexibility and modern UI/UX standards.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                Schedulink addresses these challenges with a modern, containerized appointment
                booking platform that combines React's dynamic frontend capabilities with FastAPI's
                high-performance backend, all wrapped in a Docker-ready deployment package.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Create an intuitive, responsive user interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Implement robust backend with comprehensive API</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ensure scalable and maintainable architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Provide containerized deployment solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {stack.category}
                </h3>
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Architecture</h2>

          {/* Architecture Image */}
          <div className="mb-8 flex justify-center">
            <div className="max-w-4xl w-full">
              <img
                src="/images/system_architecture_diagram.png"
                alt="Schedulink System Architecture Diagram"
                className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center text-sm text-gray-500 mt-4 italic">
                Comprehensive system architecture showcasing the complete Schedulink platform infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Project Structure Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Architecture & Documentation</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-600" />
                Project Structure
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-700">{`Schedulink_Project/
├── backend/                  # Backend service (FastAPI)
│   ├── app/                  # Application source code
│   │   ├── models.py         # Database models
│   │   ├── schemas.py        # Pydantic schemas
│   │   ├── database.py       # Database connection
│   │   └── main.py           # FastAPI entry point
│   ├── requirements.txt      # Python dependencies
│   └── Dockerfile            # Backend Docker image
├── frontend/                 # Frontend service (React)
│   ├── src/                  # React source code
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API integration
│   │   └── App.jsx           # Main React app
│   ├── package.json          # Node.js dependencies
│   └── Dockerfile            # Frontend Docker image
├── documentation/            # Technical documentation
│   ├── UML diagrams (.puml) # System design
│   └── Project docs (.pdf)  # Detailed specifications
└── docker-compose.yml        # Multi-container orchestration`}</pre>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-green-600" />
                API Endpoints
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">User Management</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex gap-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">POST</span> <span>/users</span></div>
                    <div className="flex gap-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">GET</span> <span>/users</span></div>
                    <div className="flex gap-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">GET</span> <span>/users/{`{id}`}</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Slot Management</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex gap-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">POST</span> <span>/slots</span></div>
                    <div className="flex gap-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">GET</span> <span>/slots</span></div>
                    <div className="flex gap-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">PUT</span> <span>/slots/{`{id}`}</span></div>
                    <div className="flex gap-2"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">PATCH</span> <span>/slots/{`{id}`}/book</span></div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Live API Documentation:</strong><br />
                    Interactive Swagger UI available at <code>/docs</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Validation</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pydantic schema validation</li>
                <li>• Input sanitization</li>
                <li>• CORS configuration</li>
                <li>• Role-based access control</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• FastAPI async support</li>
                <li>• React lazy loading</li>
                <li>• Optimized database queries</li>
                <li>• Compressed static assets</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deployment Ready</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Docker containerization</li>
                <li>• Multi-stage builds</li>
                <li>• Environment configuration</li>
                <li>• Production-ready setup</li>
              </ul>
            </div>
          </div>

          {/* Documentation Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Documentation</h3>
              <div className="space-y-4">
                {/* Schedulink - Document.pdf */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('schedulinkDocument')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">📄</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Schedulink – System Description</div>
                        <div className="text-sm text-gray-600">Information about Schedulink's webapp</div>
                      </div>
                    </div>
                    {expandedDocs.schedulinkDocument ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.schedulinkDocument && (
                    <div className="p-6 border-t bg-white">
                      <div className="prose max-w-none">
                        <h4 className="text-lg font-semibold mb-4">Schedulink - Case Study</h4>
                        <div className="space-y-4 text-sm">
                          <p>This system is an online appointment booking platform. It helps people and businesses organize and manage appointments easily, all in one place.</p>
                          <h5 className="font-semibold text-gray-900 mb-2">What it does:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 shadow-sm">
                              <CheckCircle className="text-blue-500 w-5 h-5" />
                              <span>Admin-created user accounts</span>
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3 shadow-sm">
                              <Zap className="text-green-500 w-5 h-5" />
                              <span>Book appointments for services or meetings</span>
                            </div>
                            <div className="flex items-center gap-3 bg-yellow-50 rounded-lg p-3 shadow-sm">
                              <Database className="text-yellow-500 w-5 h-5" />
                              <span>Businesses set up available time slots</span>
                            </div>
                            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3 shadow-sm">
                              <Smartphone className="text-purple-500 w-5 h-5" />
                              <span>Users see and book slots instantly</span>
                            </div>
                            <div className="flex items-center gap-3 bg-pink-50 rounded-lg p-3 shadow-sm">
                              <Cloud className="text-pink-500 w-5 h-5" />
                              <span>Keeps track of all appointments, users, and times</span>
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2 mt-4">Why it exists:</h5>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-orange-50 rounded-lg p-3 shadow-sm">
                              <ArrowLeft className="text-orange-500 w-5 h-5" />
                              <span>Eliminates confusion from phone calls, emails, or paper schedules</span>
                            </div>
                            <div className="flex items-center gap-3 bg-teal-50 rounded-lg p-3 shadow-sm">
                              <Users className="text-teal-500 w-5 h-5" />
                              <span>Makes booking easy for customers and businesses</span>
                            </div>
                            <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow-sm">
                              <Shield className="text-red-500 w-5 h-5" />
                              <span>Reduces double-booking and missed appointments</span>
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2 mt-4">How it works:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3 shadow-sm">
                              <Smartphone className="text-indigo-500 w-5 h-5" />
                              <span>Website for users to register, log in, and book</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm">
                              <Code className="text-gray-500 w-5 h-5" />
                              <span>Backend server manages all booking data</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 shadow-sm">
                              <Database className="text-blue-500 w-5 h-5" />
                              <span>Secure database for all information</span>
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3 shadow-sm">
                              <TrendingUp className="text-green-500 w-5 h-5" />
                              <span>Fast, reliable, and user-friendly for all</span>
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2 mt-4">Key benefits:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-yellow-50 rounded-lg p-3 shadow-sm">
                              <Globe className="text-yellow-500 w-5 h-5" />
                              <span>Book anytime, anywhere—no calls needed</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 shadow-sm">
                              <Zap className="text-blue-500 w-5 h-5" />
                              <span>Automated scheduling saves time</span>
                            </div>
                            <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow-sm">
                              <Shield className="text-red-500 w-5 h-5" />
                              <span>Prevents double-booking and missed appointments</span>
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3 shadow-sm">
                              <Users className="text-green-500 w-5 h-5" />
                              <span>Easy management for users and businesses</span>
                            </div>
                            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3 shadow-sm">
                              <CheckCircle className="text-purple-500 w-5 h-5" />
                              <span>Modern, professional online presence</span>
                            </div>
                            <div className="flex items-center gap-3 bg-pink-50 rounded-lg p-3 shadow-sm">
                              <TrendingUp className="text-pink-500 w-5 h-5" />
                              <span>Scales with your business growth</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm">
                              <Shield className="text-gray-500 w-5 h-5" />
                              <span>Data is always safe and secure</span>
                            </div>
                            <div className="flex items-center gap-3 bg-orange-50 rounded-lg p-3 shadow-sm">
                              <CheckCircle className="text-orange-500 w-5 h-5" />
                              <span>Faster, happier customer experience</span>
                            </div>
                          </div>
                          <p className="mt-4">In short, it’s a digital tool to make booking and managing appointments simple and stress-free for everyone.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Schedulink – Non-Functional Requirements */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('nonFunctionalRequirements')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Schedulink – Non-Functional Requirements</div>
                        <div className="text-sm text-gray-600">Non-functional requirements for the appointment booking platform</div>
                      </div>
                    </div>
                    {expandedDocs.nonFunctionalRequirements ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.nonFunctionalRequirements && (
                    <div className="p-6 border-t bg-white">
                      <div className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Requirement Cards */}
                          <div className="space-y-6">
                            {/* 1-5 */}
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-2"><TrendingUp className="inline w-5 h-5 text-blue-400" />1. Performance</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-200 text-blue-900 text-xs font-semibold"><TrendingUp className="w-4 h-4 mr-1" /> 1,000+ concurrent users, no delay</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold"><Zap className="w-4 h-4 mr-1" /> Page loads ≤ 2s</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> During peak hours, users can view and book slots with quick responses.</div>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-green-800 flex items-center gap-2 mb-2"><Cloud className="inline w-5 h-5 text-green-400" />2. Scalability</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-200 text-green-900 text-xs font-semibold"><Users className="w-4 h-4 mr-1" /> Easy onboarding for new businesses</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold"><Cloud className="w-4 h-4 mr-1" /> Horizontal scaling (servers, sharding)</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> If 10 new clinics join, the platform accommodates their slots and appointments seamlessly.</div>
                            </div>
                            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-yellow-800 flex items-center gap-2 mb-2"><CheckCircle className="inline w-5 h-5 text-yellow-400" />3. Availability & Reliability</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-200 text-yellow-900 text-xs font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> 99.9% uptime</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold"><Database className="w-4 h-4 mr-1" /> Auto failover & backup</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> If a server goes down, users still access the platform via a backup server.</div>
                            </div>
                            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-red-800 flex items-center gap-2 mb-2"><Shield className="inline w-5 h-5 text-red-400" />4. Security</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-200 text-red-900 text-xs font-semibold"><Shield className="w-4 h-4 mr-1" /> Encrypted data (TLS/SSL)</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold"><Users className="w-4 h-4 mr-1" /> Authenticated access</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> Role-based controls</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Sarah’s appointment details are protected from unauthorized access and interception.</div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2"><Database className="inline w-5 h-5 text-purple-400" />5. Data Integrity</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-200 text-purple-900 text-xs font-semibold"><Database className="w-4 h-4 mr-1" /> Atomic, consistent updates</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold"><Shield className="w-4 h-4 mr-1" /> No double-booking</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> If two users try to book the same slot simultaneously, only one succeeds; the other gets an error.</div>
                            </div>
                          </div>
                          <div className="space-y-6">
                            {/* 6-11 */}
                            <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-pink-800 flex items-center gap-2 mb-2"><Code className="inline w-5 h-5 text-pink-400" />6. Maintainability</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-200 text-pink-900 text-xs font-semibold"><Code className="w-4 h-4 mr-1" /> Modular, documented code</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> Automated testing</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Developers can quickly fix a bug or add a new notification type with minimal risk of breaking existing features.</div>
                            </div>
                            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-orange-800 flex items-center gap-2 mb-2"><Smartphone className="inline w-5 h-5 text-orange-400" />7. Usability</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-200 text-orange-900 text-xs font-semibold"><Smartphone className="w-4 h-4 mr-1" /> Intuitive, responsive UI</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold"><Zap className="w-4 h-4 mr-1" /> Minimal clicks to book/manage</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Sarah can book, reschedule, or cancel with just a few clicks, even on mobile.</div>
                            </div>
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2"><Globe className="inline w-5 h-5 text-gray-400" />8. Portability</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-900 text-xs font-semibold"><Globe className="w-4 h-4 mr-1" /> Works on all major browsers</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold"><Cloud className="w-4 h-4 mr-1" /> Deployable on AWS, Azure, GCP</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Users on both Windows and Mac devices have the same experience.</div>
                            </div>
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-2"><Database className="inline w-5 h-5 text-blue-400" />9. Backup & Disaster Recovery</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-200 text-blue-900 text-xs font-semibold"><Database className="w-4 h-4 mr-1" /> Daily backups</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> Recovery ≤ 2 hours</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> If data is lost due to a system crash, it can be restored from the latest backup.</div>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-green-800 flex items-center gap-2 mb-2"><Zap className="inline w-5 h-5 text-green-400" />10. Logging & Monitoring</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-200 text-green-900 text-xs font-semibold"><Zap className="w-4 h-4 mr-1" /> Logs errors, warnings, actions</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold"><Shield className="w-4 h-4 mr-1" /> Real-time monitoring</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Admins are alerted if there’s a spike in booking failures.</div>
                            </div>
                            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-xl p-5 shadow-md">
                              <h5 className="text-lg font-semibold text-yellow-800 flex items-center gap-2 mb-2"><Shield className="inline w-5 h-5 text-yellow-400" />11. Legal & Compliance</h5>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-200 text-yellow-900 text-xs font-semibold"><Shield className="w-4 h-4 mr-1" /> GDPR & data protection</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> User privacy & consent</span>
                              </div>
                              <div className="text-gray-500 italic text-xs"><span className="font-bold">Example:</span> Sarah sees a privacy notice and consents before creating her account.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Schedulink - Casual Problem Statement – Use Cases */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('schedulinkUseCases')}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">📝</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Schedulink – Use Case Scenarios</div>
                        <div className="text-sm text-gray-600">Real-world flows for users, businesses, and admins</div>
                      </div>
                    </div>
                    {expandedDocs.schedulinkUseCases ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.schedulinkUseCases && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4"></h5>
                      <div className="space-y-6">
                        {/* Use Case 1 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 1: Book an Appointment</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> User (Sarah)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> Sarah wants to book a dental checkup at BrightSmiles clinic.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full shadow text-xs">✓</span>
                              <span>Sarah logs into Schedulink.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full shadow text-xs">✓</span>
                              <span>She browses available slots for BrightSmiles.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full shadow text-xs">✓</span>
                              <span>She picks Tuesday at 11:30 AM and books it.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full shadow text-xs">✓</span>
                              <span>She gets a confirmation notification.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 2 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 2: Reschedule Appointment</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> User (Sarah)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> Sarah needs to reschedule her dental appointment because a conflict came up.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full shadow text-xs">↻</span>
                              <span>Sarah logs in and goes to her appointments.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full shadow text-xs">↻</span>
                              <span>She chooses her dental booking and clicks "Reschedule."</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full shadow text-xs">↻</span>
                              <span>She picks a new time for Wednesday at 10:00 AM.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full shadow text-xs">↻</span>
                              <span>The system updates her appointment and sends her a notification.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 3 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 3: Set Available Appointment Slots</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> Business (BrightSmiles Clinic Owner)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> The clinic wants to set up appointment slots for next week.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-green-500 text-white rounded-full shadow text-xs">⏰</span>
                              <span>The clinic owner logs into the business dashboard.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-green-500 text-white rounded-full shadow text-xs">⏰</span>
                              <span>They select days and set available time ranges.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-green-500 text-white rounded-full shadow text-xs">⏰</span>
                              <span>Schedulink generates appointment slots for those days.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-green-500 text-white rounded-full shadow text-xs">⏰</span>
                              <span>Slots show up for users to book.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 4 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 4: Create New User Account</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> Admin (John)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> A new employee joins BrightSmiles and needs a Schedulink account.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-yellow-500 text-white rounded-full shadow text-xs">👤</span>
                              <span>John logs into the admin dashboard.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-yellow-500 text-white rounded-full shadow text-xs">👤</span>
                              <span>He clicks “Create User” and fills in the new employee’s details.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-yellow-500 text-white rounded-full shadow text-xs">👤</span>
                              <span>Schedulink sends login credentials to the new user.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 5 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 5: Cancel Appointment</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> User (Sarah)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> Sarah decides to cancel her dental appointment.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full shadow text-xs">✗</span>
                              <span>Sarah logs in and goes to her appointments.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full shadow text-xs">✗</span>
                              <span>She selects the booking and clicks "Cancel."</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full shadow text-xs">✗</span>
                              <span>Schedulink updates the status and frees up the slot.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full shadow text-xs">✗</span>
                              <span>Both Sarah and the clinic get cancellation notifications.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 6 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 6: View Daily Schedule</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> Business (BrightSmiles Clinic Owner)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> The clinic wants to view today’s schedule.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-indigo-500 text-white rounded-full shadow text-xs">📅</span>
                              <span>The owner logs into the dashboard.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-indigo-500 text-white rounded-full shadow text-xs">📅</span>
                              <span>They select "Today’s Schedule."</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-indigo-500 text-white rounded-full shadow text-xs">📅</span>
                              <span>Schedulink shows all booked slots and client details for that day.</span>
                            </li>
                          </ul>
                        </div>
                        {/* Use Case 7 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow">
                          <h6 className="font-semibold mb-1">Use Case 7: Deactivate User Account</h6>
                          <div className="text-sm text-gray-700 mb-1"><b>Actor:</b> Admin (John)</div>
                          <div className="text-sm text-gray-700 mb-1"><b>Description:</b> An employee leaves BrightSmiles and their account needs to be deactivated.</div>
                          <ul className="ml-6 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-gray-500 text-white rounded-full shadow text-xs">🚫</span>
                              <span>John logs in and opens the user list.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-gray-500 text-white rounded-full shadow text-xs">🚫</span>
                              <span>He finds the employee and clicks "Deactivate."</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 w-4 h-4 flex items-center justify-center bg-gray-500 text-white rounded-full shadow text-xs">🚫</span>
                              <span>Schedulink disables the account, blocking access.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Schedulink - Use Case Diagram */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('useCaseDiagram')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">🔄</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Schedulink - Use Case Diagram</div>
                        <div className="text-sm text-gray-600">All PlantUML Files are checked in</div>
                      </div>
                    </div>
                    {expandedDocs.useCaseDiagram ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.useCaseDiagram && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4">Activity Diagram</h5>
                      <p className="text-gray-600 mb-4">Shows the workflow of activities and actions in the appointment booking process from start to finish.</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">User Registration Flow:</h6>
                          <ol className="text-sm space-y-1 list-decimal list-inside">
                            <li>User accesses the system</li>
                            <li>Provides registration details (name, email, phone)</li>
                            <li>System validates information</li>
                            <li>User account is created</li>
                            <li>User receives confirmation</li>
                          </ol>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Slot Creation Flow:</h6>
                          <ol className="text-sm space-y-1 list-decimal list-inside">
                            <li>Service provider logs in</li>
                            <li>Accesses slot creation form</li>
                            <li>Enters slot details (date, time, description)</li>
                            <li>System validates slot availability</li>
                            <li>Slot is created and published</li>
                          </ol>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Booking Flow:</h6>
                          <ol className="text-sm space-y-1 list-decimal list-inside">
                            <li>Customer views available slots</li>
                            <li>Selects desired slot</li>
                            <li>Confirms booking details</li>
                            <li>System processes booking</li>
                            <li>Booking confirmation sent</li>
                            <li>Slot status updated to booked</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* schedulink_state_transistion.puml */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('stateTransition')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">🔀</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">schedulink_state_transistion.puml</div>
                        <div className="text-sm text-gray-600">All PlantUML Files are checked in</div>
                      </div>
                    </div>
                    {expandedDocs.stateTransition ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.stateTransition && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4">State Transition Diagram</h5>
                      <p className="text-gray-600 mb-4">Depicts the various states of appointment slots and transitions between them throughout their lifecycle.</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Slot States:</h6>
                          <ul className="text-sm space-y-2">
                            <li><span className="font-medium text-blue-600">CREATED:</span> Initial state when slot is created</li>
                            <li><span className="font-medium text-green-600">AVAILABLE:</span> Slot is published and available for booking</li>
                            <li><span className="font-medium text-yellow-600">BOOKED:</span> Slot has been reserved by a customer</li>
                            <li><span className="font-medium text-red-600">CANCELLED:</span> Booking has been cancelled</li>
                            <li><span className="font-medium text-gray-600">COMPLETED:</span> Appointment has been completed</li>
                            <li><span className="font-medium text-purple-600">EXPIRED:</span> Slot time has passed without booking</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">State Transitions:</h6>
                          <ul className="text-sm space-y-1">
                            <li>• CREATED → AVAILABLE (when published)</li>
                            <li>• AVAILABLE → BOOKED (when customer books)</li>
                            <li>• BOOKED → CANCELLED (when booking cancelled)</li>
                            <li>• CANCELLED → AVAILABLE (if slot can be rebooked)</li>
                            <li>• BOOKED → COMPLETED (after appointment)</li>
                            <li>• AVAILABLE → EXPIRED (when time passes)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* schedulink-use_case.puml */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('useCaseDiagram')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">🎯</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">schedulink-use_case.puml</div>
                        <div className="text-sm text-gray-600">All PlantUML Files are checked in</div>
                      </div>
                    </div>
                    {expandedDocs.useCaseDiagram ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.useCaseDiagram && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4">Use Case Diagram</h5>
                      <p className="text-gray-600 mb-4">Illustrates the functional requirements and interactions between different types of users and the Schedulink system.</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Actors:</h6>
                          <ul className="text-sm space-y-1">
                            <li><strong>Guest User:</strong> Unauthenticated user browsing the system</li>
                            <li><strong>Customer:</strong> Registered user who can book appointments</li>
                            <li><strong>Service Provider:</strong> User who creates and manages slots</li>
                            <li><strong>Admin:</strong> System administrator with full access</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Use Cases for Customers:</h6>
                          <ul className="text-sm space-y-1">
                            <li>• Register account</li>
                            <li>• Login to system</li>
                            <li>• View available slots</li>
                            <li>• Book appointment slot</li>
                            <li>• Cancel booking</li>
                            <li>• View booking history</li>
                            <li>• Update profile</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Use Cases for Service Providers:</h6>
                          <ul className="text-sm space-y-1">
                            <li>• Create appointment slots</li>
                            <li>• Manage slot availability</li>
                            <li>• View booking requests</li>
                            <li>• Confirm/reject bookings</li>
                            <li>• Update slot details</li>
                            <li>• Generate reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* schedulink-system_sequence.puml */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('systemSequence')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">📞</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">schedulink-system_sequence.puml</div>
                        <div className="text-sm text-gray-600">All PlantUML Files are checked in</div>
                      </div>
                    </div>
                    {expandedDocs.systemSequence ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.systemSequence && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4">System Sequence Diagram</h5>
                      <p className="text-gray-600 mb-4">Shows the sequence of interactions between different system components over time during key operations.</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Booking Sequence:</h6>
                          <ol className="text-sm space-y-1 list-decimal list-inside">
                            <li>Customer → Frontend: Request available slots</li>
                            <li>Frontend → Backend API: GET /slots</li>
                            <li>Backend API → Database: Query available slots</li>
                            <li>Database → Backend API: Return slot data</li>
                            <li>Backend API → Frontend: JSON response with slots</li>
                            <li>Frontend → Customer: Display available slots</li>
                            <li>Customer → Frontend: Select and book slot</li>
                            <li>Frontend → Backend API: POST /slots/{`{id}`}/book</li>
                            <li>Backend API → Database: Update slot status</li>
                            <li>Database → Backend API: Confirm update</li>
                            <li>Backend API → Frontend: Booking confirmation</li>
                            <li>Frontend → Customer: Show success message</li>
                          </ol>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">User Registration Sequence:</h6>
                          <ol className="text-sm space-y-1 list-decimal list-inside">
                            <li>User → Frontend: Fill registration form</li>
                            <li>Frontend → Backend API: POST /users</li>
                            <li>Backend API: Validate user data</li>
                            <li>Backend API → Database: Create user record</li>
                            <li>Database → Backend API: Return user ID</li>
                            <li>Backend API → Frontend: Registration success</li>
                            <li>Frontend → User: Welcome message</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* schedulink-colloboration.puml */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('collaborationDiagram')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">🤝</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">schedulink-colloboration.puml</div>
                        <div className="text-sm text-gray-600">All PlantUML Files are checked in</div>
                      </div>
                    </div>
                    {expandedDocs.collaborationDiagram ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.collaborationDiagram && (
                    <div className="p-6 border-t bg-white">
                      <h5 className="font-semibold text-gray-900 mb-4">Collaboration Diagram</h5>
                      <p className="text-gray-600 mb-4">Demonstrates how different objects collaborate to achieve specific functionality in the Schedulink system.</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Component Collaboration:</h6>
                          <ul className="text-sm space-y-1">
                            <li><strong>Frontend Components:</strong> React components, forms, lists</li>
                            <li><strong>API Service Layer:</strong> Axios-based HTTP client</li>
                            <li><strong>Backend Controllers:</strong> FastAPI route handlers</li>
                            <li><strong>Business Logic:</strong> Service classes and validators</li>
                            <li><strong>Data Access:</strong> SQLAlchemy ORM and models</li>
                            <li><strong>Database:</strong> SQLite storage engine</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Collaboration Patterns:</h6>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>MVC Pattern:</strong> Model-View-Controller separation</li>
                            <li>• <strong>Repository Pattern:</strong> Data access abstraction</li>
                            <li>• <strong>Service Layer:</strong> Business logic encapsulation</li>
                            <li>• <strong>Observer Pattern:</strong> Real-time UI updates</li>
                            <li>• <strong>Factory Pattern:</strong> Object creation management</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="font-semibold mb-2">Message Flow:</h6>
                          <ul className="text-sm space-y-1">
                            <li>• User interactions trigger component events</li>
                            <li>• Components call API service methods</li>
                            <li>• API service sends HTTP requests to backend</li>
                            <li>• Backend processes requests through controllers</li>
                            <li>• Controllers delegate to business services</li>
                            <li>• Services interact with data repositories</li>
                            <li>• Repositories perform database operations</li>
                            <li>• Responses flow back through the same chain</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* API_INTEGRATION.md */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('apiIntegration')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">🔗</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">API_INTEGRATION.md</div>
                        <div className="text-sm text-gray-600">Complete API integration documentation</div>
                      </div>
                    </div>
                    {expandedDocs.apiIntegration ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.apiIntegration && (
                    <div className="p-6 border-t bg-white">
                      <div className="space-y-6 text-sm">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-4">🌐 API Integration Guide</h5>
                          <p className="text-gray-600 mb-4">This document provides comprehensive guidance on integrating with the Schedulink API, including backend endpoints, frontend service layer, data models, error handling, usage examples, and testing approaches.</p>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📋 Table of Contents</h6>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                            <li>Backend API Structure</li>
                            <li>API Endpoints</li>
                            <li>Frontend Service Layer</li>
                            <li>Data Models & Schemas</li>
                            <li>Error Handling</li>
                            <li>Usage Examples</li>
                            <li>Testing</li>
                            <li>Development Setup</li>
                          </ul>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🏗️ Backend API Structure</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-2">The backend API is built with <strong>FastAPI</strong> and follows REST principles:</p>
                            <ul className="text-sm space-y-1 ml-4">
                              <li>• <strong>Base URL:</strong> http://localhost:8000 (development)</li>
                              <li>• <strong>Documentation:</strong> http://localhost:8000/docs (Swagger UI)</li>
                              <li>• <strong>OpenAPI Spec:</strong> http://localhost:8000/openapi.json</li>
                              <li>• <strong>Content-Type:</strong> application/json</li>
                              <li>• <strong>CORS:</strong> Enabled for frontend development</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📌 API Endpoints</h6>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold text-green-700 mb-2">User Management Endpoints</h7>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-mono">POST</span>
                                  <code>/users</code>
                                  <span>Create a new user</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                                  <code>/users</code>
                                  <span>Get all users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                                  <code>/users/{`{user_id}`}</code>
                                  <span>Get specific user</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                                  <code>/users/{`{user_id}`}/slots</code>
                                  <span>Get slots created by user</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold text-blue-700 mb-2">Slot Management Endpoints</h7>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-mono">POST</span>
                                  <code>/slots</code>
                                  <span>Create a new slot</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                                  <code>/slots</code>
                                  <span>Get all slots (with optional filters)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                                  <code>/slots/{`{slot_id}`}</code>
                                  <span>Get specific slot</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-mono">PUT</span>
                                  <code>/slots/{`{slot_id}`}</code>
                                  <span>Update slot</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-mono">PATCH</span>
                                  <code>/slots/{`{slot_id}`}/book</code>
                                  <span>Book a slot</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-mono">DELETE</span>
                                  <code>/slots/{`{slot_id}`}</code>
                                  <span>Delete slot</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">⚛️ Frontend Service Layer</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-2">The frontend uses Axios for HTTP communication. Services are organized in <code>src/services/</code>:</p>
                            <div className="bg-gray-100 p-3 rounded font-mono text-xs mb-3">
                              <div>src/services/</div>
                              <div>├── api.js           # Main API service</div>
                              <div>├── api-optimized.js # Optimized version</div>
                              <div>└── axios.js        # Axios configuration</div>
                            </div>
                            <p className="text-sm">Key features:</p>
                            <ul className="text-sm space-y-1 ml-4 mt-2">
                              <li>• Base URL configuration from environment variables</li>
                              <li>• Request/response interceptors for logging</li>
                              <li>• Error handling and retry logic</li>
                              <li>• TypeScript-like JSDoc comments</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📊 Data Models & Schemas</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">User Model</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div>{`{`}</div>
                                <div>  "id": "integer",</div>
                                <div>  "name": "string",</div>
                                <div>  "email": "string",</div>
                                <div>  "phone": "string (optional)",</div>
                                <div>  "created_at": "datetime"</div>
                                <div>{`}`}</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Slot Model</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div>{`{`}</div>
                                <div>  "id": "integer",</div>
                                <div>  "date": "date",</div>
                                <div>  "time": "time",</div>
                                <div>  "duration": "integer (minutes)",</div>
                                <div>  "description": "string (optional)",</div>
                                <div>  "is_booked": "boolean",</div>
                                <div>  "user_id": "integer",</div>
                                <div>  "booked_by": "integer (optional)",</div>
                                <div>  "created_at": "datetime"</div>
                                <div>{`}`}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">⚠️ Error Handling</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-2">The API implements comprehensive error handling:</p>
                            <div className="space-y-2 text-sm">
                              <div><strong>400 Bad Request:</strong> Invalid request data or parameters</div>
                              <div><strong>404 Not Found:</strong> Resource not found</div>
                              <div><strong>422 Unprocessable Entity:</strong> Validation errors</div>
                              <div><strong>500 Internal Server Error:</strong> Server-side errors</div>
                            </div>
                            <div className="bg-gray-100 p-3 rounded font-mono text-xs mt-3">
                              <div>// Example error response</div>
                              <div>{`{`}</div>
                              <div>  "detail": "Validation error message",</div>
                              <div>  "status_code": 422</div>
                              <div>{`}`}</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">💻 Usage Examples</h6>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Creating a User</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div>// Frontend (JavaScript)</div>
                                <div>const newUser = await api.createUser({`{`}</div>
                                <div>  name: "John Doe",</div>
                                <div>  email: "john@example.com",</div>
                                <div>  phone: "+1234567890"</div>
                                <div>{`}`});</div>
                                <div><br /># Backend (curl)</div>
                                <div>curl -X POST "http://localhost:8000/users" \</div>
                                <div>  -H "Content-Type: application/json" \</div>
                                <div>  -d '{`{`}"name":"John Doe","email":"john@example.com"{`}`}'</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Creating a Slot</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div>// Frontend (JavaScript)</div>
                                <div>const newSlot = await api.createSlot({`{`}</div>
                                <div>  date: "2024-01-15",</div>
                                <div>  time: "14:00",</div>
                                <div>  duration: 60,</div>
                                <div>  description: "Medical consultation",</div>
                                <div>  user_id: 1</div>
                                <div>{`}`});</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🧪 Testing</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-2">Testing approaches and tools:</p>
                            <ul className="text-sm space-y-1 ml-4">
                              <li>• <strong>Backend:</strong> FastAPI's TestClient for API testing</li>
                              <li>• <strong>Frontend:</strong> React Testing Library for component tests</li>
                              <li>• <strong>Integration:</strong> End-to-end testing with API calls</li>
                              <li>• <strong>Manual:</strong> Swagger UI for interactive testing</li>
                            </ul>
                            <div className="bg-gray-100 p-3 rounded font-mono text-xs mt-3">
                              <div># Run backend tests</div>
                              <div>cd backend && python -m pytest</div>
                              <div><br /># Run frontend tests</div>
                              <div>cd frontend && npm test</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🔧 Development Setup</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                              <div># 1. Clone and setup</div>
                              <div>git clone &lt;repository-url&gt;</div>
                              <div>cd appointment-booking-platform</div>
                              <div><br /># 2. Start with Docker Compose</div>
                              <div>docker compose up --build</div>
                              <div><br /># 3. Access applications</div>
                              <div># Frontend: http://localhost:3000</div>
                              <div># Backend: http://localhost:8000</div>
                              <div># API Docs: http://localhost:8000/docs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* AWS_DEPLOYMENT_GUIDE.md */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleDoc('awsDeployment')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-xs font-mono">☁️</span>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">AWS_DEPLOYMENT_GUIDE.md</div>
                        <div className="text-sm text-gray-600">Complete AWS deployment documentation</div>
                      </div>
                    </div>
                    {expandedDocs.awsDeployment ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  {expandedDocs.awsDeployment && (
                    <div className="p-6 border-t bg-white">
                      <div className="space-y-6 text-sm">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-4">☁️ AWS Deployment Guide</h5>
                          <p className="text-gray-600 mb-4">This guide provides step-by-step instructions for deploying the Schedulink appointment booking platform on Amazon Web Services (AWS) using EC2 instances, covering everything from initial setup to SSL configuration and monitoring.</p>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📋 Table of Contents</h6>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                            <li>Prerequisites</li>
                            <li>EC2 Instance Setup</li>
                            <li>Security Group Configuration</li>
                            <li>Environment Setup</li>
                            <li>Application Deployment</li>
                            <li>SSL Configuration</li>
                            <li>Monitoring & Maintenance</li>
                            <li>Cost Optimization</li>
                            <li>Troubleshooting</li>
                          </ul>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📋 Prerequisites</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <ul className="text-sm space-y-1 ml-4">
                              <li>• AWS Account with appropriate permissions</li>
                              <li>• Domain name (optional, for custom domain)</li>
                              <li>• SSH key pair for EC2 access</li>
                              <li>• Basic understanding of Linux/Ubuntu commands</li>
                              <li>• Git repository access</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🖥️ EC2 Instance Setup</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Step 1: Launch EC2 Instance</h7>
                              <ol className="text-sm space-y-1 list-decimal list-inside ml-4">
                                <li>Go to AWS Console → EC2 → Launch Instance</li>
                                <li>Choose <strong>Ubuntu Server 22.04 LTS</strong></li>
                                <li>Select instance type: <strong>t2.micro</strong> (Free tier) or <strong>t2.small</strong> (Recommended)</li>
                                <li>Configure key pair for SSH access</li>
                                <li>Configure storage: 20GB minimum</li>
                                <li>Launch instance</li>
                              </ol>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Step 2: Instance Configuration</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Connect to your instance</div>
                                <div>ssh -i "your-key.pem" ubuntu@your-instance-ip</div>
                                <div><br /># Update system packages</div>
                                <div>sudo apt update && sudo apt upgrade -y</div>
                                <div><br /># Install required packages</div>
                                <div>sudo apt install -y git curl wget</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🔒 Security Group Configuration</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-2">Configure inbound rules for your security group:</p>
                            <div className="overflow-x-auto">
                              <table className="min-w-full border border-gray-300 text-xs">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="border px-2 py-1 text-left">Type</th>
                                    <th className="border px-2 py-1 text-left">Port</th>
                                    <th className="border px-2 py-1 text-left">Source</th>
                                    <th className="border px-2 py-1 text-left">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr><td className="border px-2 py-1">SSH</td><td className="border px-2 py-1">22</td><td className="border px-2 py-1">My IP</td><td className="border px-2 py-1">SSH access</td></tr>
                                  <tr><td className="border px-2 py-1">HTTP</td><td className="border px-2 py-1">80</td><td className="border px-2 py-1">0.0.0.0/0</td><td className="border px-2 py-1">Web traffic</td></tr>
                                  <tr><td className="border px-2 py-1">HTTPS</td><td className="border px-2 py-1">443</td><td className="border px-2 py-1">0.0.0.0/0</td><td className="border px-2 py-1">Secure web traffic</td></tr>
                                  <tr><td className="border px-2 py-1">Custom TCP</td><td className="border px-2 py-1">3000</td><td className="border px-2 py-1">0.0.0.0/0</td><td className="border px-2 py-1">Frontend dev</td></tr>
                                  <tr><td className="border px-2 py-1">Custom TCP</td><td className="border px-2 py-1">8000</td><td className="border px-2 py-1">0.0.0.0/0</td><td className="border px-2 py-1">Backend API</td></tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🐳 Environment Setup</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Docker Installation</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Install Docker</div>
                                <div>curl -fsSL https://get.docker.com -o get-docker.sh</div>
                                <div>sudo sh get-docker.sh</div>
                                <div>sudo usermod -aG docker ubuntu</div>
                                <div>newgrp docker</div>
                                <div><br /># Install Docker Compose</div>
                                <div>sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose</div>
                                <div>sudo chmod +x /usr/local/bin/docker-compose</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Environment Variables</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Create production environment file</div>
                                <div>cat &lt;&lt; EOF &gt; .env.production</div>
                                <div>VITE_API_URL=/api</div>
                                <div>VITE_APP_TITLE=Schedulink</div>
                                <div>VITE_ENVIRONMENT=production</div>
                                <div>VITE_CASE_STUDY_URL=https://your-domain.com/case-study</div>
                                <div>BACKEND_HOST=0.0.0.0</div>
                                <div>BACKEND_PORT=8000</div>
                                <div>EOF</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🚀 Application Deployment</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Code Deployment</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Clone the repository</div>
                                <div>git clone &lt;your-repository-url&gt;</div>
                                <div>cd appointment-booking-platform</div>
                                <div><br /># Build and start the application</div>
                                <div>docker-compose -f docker-compose.prod.yml up -d --build</div>
                                <div><br /># Check if containers are running</div>
                                <div>docker ps</div>
                                <div><br /># View logs</div>
                                <div>docker-compose -f docker-compose.prod.yml logs -f</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Verification</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Test the application</div>
                                <div>curl http://your-instance-ip:3000</div>
                                <div>curl http://your-instance-ip:8000/docs</div>
                                <div><br /># Check container health</div>
                                <div>docker-compose -f docker-compose.prod.yml ps</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🔐 SSL Configuration</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Let's Encrypt SSL</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Install Certbot</div>
                                <div>sudo apt install certbot python3-certbot-nginx</div>
                                <div><br /># Obtain SSL certificate</div>
                                <div>sudo certbot --nginx -d your-domain.com</div>
                                <div><br /># Setup auto-renewal</div>
                                <div>sudo crontab -e</div>
                                <div># Add: 0 12 * * * /usr/bin/certbot renew --quiet</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Nginx Configuration</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Install Nginx</div>
                                <div>sudo apt install nginx</div>
                                <div><br /># Configure reverse proxy</div>
                                <div>sudo nano /etc/nginx/sites-available/schedulink</div>
                                <div># Copy nginx-prod.conf configuration</div>
                                <div><br /># Enable site</div>
                                <div>sudo ln -s /etc/nginx/sites-available/schedulink /etc/nginx/sites-enabled/</div>
                                <div>sudo nginx -t && sudo systemctl restart nginx</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">📊 Monitoring & Maintenance</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Health Checks</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># Check application status</div>
                                <div>docker-compose -f docker-compose.prod.yml ps</div>
                                <div><br /># Monitor resource usage</div>
                                <div>docker stats</div>
                                <div><br /># Check disk space</div>
                                <div>df -h</div>
                                <div><br /># Monitor system resources</div>
                                <div>htop</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Log Management</h7>
                              <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                                <div># View application logs</div>
                                <div>docker-compose -f docker-compose.prod.yml logs -f --tail=100</div>
                                <div><br /># Rotate logs to prevent disk full</div>
                                <div>sudo nano /etc/logrotate.d/docker-containers</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">💰 Cost Optimization</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <div className="space-y-2 text-sm">
                              <div><strong>Instance Types:</strong></div>
                              <ul className="ml-4 space-y-1">
                                <li>• <strong>t2.micro:</strong> Free tier, 1 vCPU, 1GB RAM (~$0/month for 12 months)</li>
                                <li>• <strong>t2.small:</strong> 1 vCPU, 2GB RAM (~$16.79/month)</li>
                                <li>• <strong>t3.small:</strong> 2 vCPU, 2GB RAM (~$15.18/month, better performance)</li>
                              </ul>
                              <div className="mt-3"><strong>Additional Costs:</strong></div>
                              <ul className="ml-4 space-y-1">
                                <li>• <strong>EBS Storage:</strong> ~$2.40/month for 20GB</li>
                                <li>• <strong>Data Transfer:</strong> First 1GB/month free, then $0.09/GB</li>
                                <li>• <strong>Elastic IP:</strong> Free while attached to running instance</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🔧 Troubleshooting</h6>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Common Issues</h7>
                              <div className="space-y-2 text-sm">
                                <div><strong>Port Access Issues:</strong></div>
                                <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                                  <div># Check if ports are open</div>
                                  <div>sudo netstat -tlnp | grep :3000</div>
                                  <div>sudo netstat -tlnp | grep :8000</div>
                                </div>
                                <div><strong>Container Issues:</strong></div>
                                <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                                  <div># Restart containers</div>
                                  <div>docker-compose -f docker-compose.prod.yml restart</div>
                                  <div><br /># Rebuild if needed</div>
                                  <div>docker-compose -f docker-compose.prod.yml up -d --build</div>
                                </div>
                                <div><strong>SSL Certificate Issues:</strong></div>
                                <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                                  <div># Check certificate status</div>
                                  <div>sudo certbot certificates</div>
                                  <div><br /># Renew certificates</div>
                                  <div>sudo certbot renew --dry-run</div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                              <h7 className="font-semibold mb-2">Performance Optimization</h7>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>• Monitor CPU and memory usage with <code>htop</code></li>
                                <li>• Use <code>docker system prune</code> to clean up unused containers/images</li>
                                <li>• Enable gzip compression in Nginx for better performance</li>
                                <li>• Consider using CloudFront CDN for static assets</li>
                                <li>• Set up database connection pooling for better database performance</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3">🎯 Next Steps</h6>
                          <div className="bg-gray-50 p-4 rounded">
                            <ul className="text-sm space-y-1 ml-4">
                              <li>• Set up automated backups for your database</li>
                              <li>• Implement monitoring with CloudWatch or Prometheus</li>
                              <li>• Consider using Application Load Balancer for high availability</li>
                              <li>• Set up CI/CD pipeline for automated deployments</li>
                              <li>• Implement log aggregation with ELK stack or CloudWatch</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Documentation</h3>
              {/* Schedulink - System Description (Collapsible) */}
              <div className="border rounded-lg">
                <button
                  onClick={() => toggleDoc('schedulinkSystemDescription')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Schedulink – Functional Requirements</div>
                      <div className="text-sm text-gray-600">Functional requirements for the appointment booking platform</div>
                    </div>
                  </div>
                  {expandedDocs.schedulinkSystemDescription ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                {expandedDocs.schedulinkSystemDescription && (
                  <div className="p-6 border-t bg-white">
                    <div className="prose max-w-none">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Requirement Cards */}
                        <div className="space-y-6">
                          {/* 1-5 */}
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-2"><Users className="inline w-5 h-5 text-blue-400" />1. User Management</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Admins can create, edit, and deactivate user accounts. Users can log in and manage their profiles.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Admin John uses the admin panel to add a new user, Sarah, with her email address. Sarah receives her credentials, logs in, and updates her contact number.</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-green-800 flex items-center gap-2 mb-2"><Database className="inline w-5 h-5 text-green-400" />2. Time Slot Management</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Businesses or service providers can set up, modify, and delete available time slots for appointments. Slots can be recurring or one-time.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Dental Clinic “BrightSmiles” sets up appointment slots for Tuesday:<br />• 09:00, 09:30, 10:00, 10:30, ... until 17:00<br />If the 10:00 AM slot is booked, it is no longer available for other users.</div>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-yellow-800 flex items-center gap-2 mb-2"><CheckCircle className="inline w-5 h-5 text-yellow-400" />3. Appointment Booking</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Users can view available time slots and book appointments. The system prevents double-booking of slots and provides instant confirmation.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Sarah wants an appointment at BrightSmiles on Tuesday at 11:30 AM. She logs in, sees the available times, and books 11:30 AM. The system immediately confirms her booking and marks the slot as taken.</div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2"><Smartphone className="inline w-5 h-5 text-purple-400" />4. Appointment Management</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Users can view, reschedule, or cancel their appointments. Businesses can view and manage all bookings.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Sarah realizes she cannot make her 11:30 AM appointment, so she logs in and reschedules to 13:00 PM. The system updates her appointment and frees up the original slot.</div>
                          </div>
                          <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-pink-800 flex items-center gap-2 mb-2"><Zap className="inline w-5 h-5 text-pink-400" />5. Notifications</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Users receive notifications for booking confirmations, reminders, cancellations, and updates. Businesses get notified about new bookings and cancellations.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Sarah books an appointment and receives a confirmation email. She gets an SMS reminder one hour before her appointment. The clinic receives an email when Sarah reschedules.</div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          {/* 6-10 */}
                          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-indigo-800 flex items-center gap-2 mb-2"><Shield className="inline w-5 h-5 text-indigo-400" />6. Admin Dashboard</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Admins can manage all users, businesses, time slots, and appointments, but do not use 2FA for login.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Admin John logs into the dashboard, views statistics on appointments, adds a new user, and deactivates an inactive account.</div>
                          </div>
                          <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-teal-800 flex items-center gap-2 mb-2"><Users className="inline w-5 h-5 text-teal-400" />7. Business Dashboard</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> Businesses can view and manage their available slots and bookings.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> The owner of BrightSmiles views all upcoming appointments, adjusts slot availability for next week, and prints a daily schedule.</div>
                          </div>
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2"><Shield className="inline w-5 h-5 text-gray-400" />8. Security & Data Protection</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> All user and appointment data is stored securely. Only authenticated users can access their own information.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> Sarah’s personal information and appointment history are securely stored in the database. She can only see her own bookings.</div>
                          </div>
                          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-orange-800 flex items-center gap-2 mb-2"><TrendingUp className="inline w-5 h-5 text-orange-400" />9. Scalability</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> The system can support multiple businesses, thousands of users, and appointments without performance issues.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> During holiday periods, BrightSmiles receives hundreds of bookings in a day, but the platform remains fast and reliable.</div>
                          </div>
                          <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-400 rounded-xl p-5 shadow-md">
                            <h5 className="text-lg font-semibold text-red-800 flex items-center gap-2 mb-2"><Code className="inline w-5 h-5 text-red-400" />10. Audit & Logging</h5>
                            <div className="text-gray-700 mb-1"><span className="font-bold">Requirement:</span> All important actions (bookings, changes, logins) are logged for auditing and troubleshooting.</div>
                            <div className="text-gray-500 italic"><span className="font-bold">Example:</span> If there’s a dispute about a missed appointment, the admin checks the logs to see when the appointment was booked or changed.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Actors in Schedulink (Collapsible) */}
              <div className="h-4 md:h-12" />
              <div className="border rounded-lg">
                <button
                  onClick={() => toggleDoc('actorsInSchedulink')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Actors in Schedulink</div>
                      <div className="text-sm text-gray-600">Primary, secondary, and offstage actors in the platform</div>
                    </div>
                  </div>
                  {expandedDocs.actorsInSchedulink ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                {expandedDocs.actorsInSchedulink && (
                  <div className="p-6 border-t bg-white">
                    <div className="prose max-w-none">
                      {/* Primary Actors */}
                      <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-blue-400" />Primary Actors</h4>
                      <p className="text-gray-600 mb-2">These are the main users who interact directly with the system to achieve their goals.</p>
                      <ul className="ml-6 list-disc text-gray-700 mb-4">
                        <li><span className="font-bold">User (Customer):</span> Books, reschedules, cancels, and views appointments. Receives notifications and manages their profile.</li>
                        <li><span className="font-bold">Business / Service Provider:</span> Sets available time slots. Views and manages appointments. Interacts with their dashboard for daily operations.</li>
                        <li><span className="font-bold">Admin:</span> Creates, edits, and deactivates user accounts. Manages businesses, appointments, and slots. Accesses system-wide analytics and controls.</li>
                      </ul>
                      {/* Secondary Actors */}
                      <h4 className="text-lg font-semibold text-green-700 mb-2 flex items-center gap-2"><Cloud className="w-5 h-5 text-green-400" />Secondary Actors</h4>
                      <p className="text-gray-600 mb-2">These actors support the system or interact indirectly, often triggered by the actions of primary actors.</p>
                      <ul className="ml-6 list-disc text-gray-700 mb-4">
                        <li><span className="font-bold">Notification Service:</span> Sends emails/SMS for confirmations, reminders, and updates.</li>
                        <li><span className="font-bold">Database System:</span> Stores and retrieves appointments, users, slots, and logs.</li>
                        <li><span className="font-bold">Authentication Service:</span> Validates user credentials during login.</li>
                      </ul>
                      {/* Offstage Actors */}
                      <h4 className="text-lg font-semibold text-purple-700 mb-2 flex items-center gap-2"><Shield className="w-5 h-5 text-purple-400" />Offstage Actors</h4>
                      <p className="text-gray-600 mb-2">These are external entities or systems that influence or are influenced by the system but do not interact regularly.</p>
                      <ul className="ml-6 list-disc text-gray-700">
                        <li><span className="font-bold">System Administrator (IT/Support):</span> Maintains the platform, monitors logs, handles backups and disaster recovery. Performs maintenance and troubleshooting.</li>
                        <li><span className="font-bold">Regulatory Authorities:</span> Ensure system compliance with data protection laws (e.g., GDPR).</li>
                        <li><span className="font-bold">Third-Party Integrations (Optional):</span> External calendar services (Google Calendar, Outlook) if/when integrated. May sync appointments for users/businesses.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {/* Schedulink - Fully Dressed Use Cases */}
              <div className="h-4 md:h-12" />
              <div className="border rounded-lg">
                <button
                  onClick={() => toggleDoc('schedulinkFullyDressedUseCases')}
                  className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-xs font-mono">📝</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Schedulink – Fully Dressed Use Case Scenarios</div>
                      <div className="text-sm text-gray-600">Fully dressed use case scenarios for Schedulink</div>
                    </div>
                  </div>
                  {expandedDocs.schedulinkFullyDressedUseCases ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                {expandedDocs.schedulinkFullyDressedUseCases && (
                  <div className="p-6 border-t bg-white">
                    <h5 className="font-semibold text-gray-900 mb-4"></h5>
                    <div className="space-y-6">
                      {/* Use Case 1 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow">
                        <h6 className="font-semibold mb-1">Use Case 1: Book an Appointment</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Book an Appointment</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">Sarah books a dental checkup at BrightSmiles</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">User Goal</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">User selects "Book Appointment" after logging in</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">A user browses available slots and books an appointment at a clinic.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">User (Sarah), Business (BrightSmiles), System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">Appointment Booking</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>User: Wants easy booking and confirmation.</li>
                                  <li>Business: Wants efficient booking and no double-booking.</li>
                                  <li>Admin: Wants accurate system operation.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">User is logged in; Business has available slots.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Appointment is booked; Notifications sent to user and business.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Opens booking page</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Selects clinic and slot</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Confirms booking</td><td className="border px-2 py-1">Receives request, checks slot availability, books slot, sends confirmation</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">Slot becomes unavailable before confirmation: System prompts to select another slot.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>No slots available: System displays "No slots available."</li>
                                  <li>Network failure: Booking fails, user prompted to retry.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Web/Mobile interface; Email/SMS notifications; Slot/user data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                       {/* Use Case 2 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                        <h6 className="font-semibold mb-1">Use Case 2: Reschedule Appointment</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Reschedule Appointment</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">Sarah changes her dental appointment time</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">User Goal</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">User selects "Reschedule" on an existing appointment</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">A user changes the time of an existing appointment.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">User (Sarah), Business, System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">Appointment Management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>User: Wants to change timing easily.</li>
                                  <li>Business: Needs updated schedule.</li>
                                  <li>Admin: Wants accurate records.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">Appointment exists; User is logged in.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Appointment updated; Notifications sent.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Goes to appointments</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Selects appointment</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Picks new slot</td><td className="border px-2 py-1">Receives request, checks slot availability, updates appointment, sends notification</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">New slot unavailable: System prompts to choose another slot.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>No alternative slots: System displays "No slots available."</li>
                                  <li>Appointment already past: Cannot be rescheduled.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Web/Mobile interface; Email/SMS notifications; Appointment data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                        {/* Use Case 3 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                        <h6 className="font-semibold mb-1">Use Case 3: Set Available Appointment Slots</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Set Available Appointment Slots</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">BrightSmiles owner sets up slots for next week</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">Business Process</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">Business logs in and navigates to slot management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">Business defines days and times for appointments.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">Business Owner, System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">Slot Management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Business: Wants to manage availability.</li>
                                  <li>Users: Need up-to-date options.</li>
                                  <li>Admin: Wants real-time changes.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">Business account exists; Owner is logged in.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Slots are available for users to book.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">Owner</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Owner</td><td className="border px-2 py-1">Navigates to slot mgmt.</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Owner</td><td className="border px-2 py-1">Sets days/times</td><td className="border px-2 py-1">Receives request, generates slots, updates data, slots available to users</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">Overlapping slots: System prompts for correction.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Invalid time range: System displays error.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Web/Mobile interface; Slot data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                       {/* Use Case 4 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                        <h6 className="font-semibold mb-1">Use Case 4: Create New User Account</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Create New User Account</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">Admin adds a new employee to BrightSmiles</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">Admin Process</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">Admin selects "Create User"</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">Admin creates an account for a new staff member.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">Admin (John), System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">User Management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Admin: Wants to add users.</li>
                                  <li>Business: Wants staff access.</li>
                                  <li>New Employee: Needs credentials.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">Admin has dashboard access.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">User account created; Credentials sent.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Selects "Create User"</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Enters user details</td><td className="border px-2 py-1">Receives info, creates account, sends credentials via email</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">Duplicate email: System requests different email.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Email delivery fails: Credentials not received.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Admin dashboard; Email system for credentials; User data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* Use Case 5 */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                          <h6 className="font-semibold mb-1">Use Case 5: Cancel Appointment</h6>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm mb-6">
                              <tbody>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Cancel Appointment</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">Sarah cancels her scheduled dental appointment</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">User Goal</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">User selects "Cancel" on an appointment</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">Cancels an existing booking and frees up the slot.</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">User (Sarah), Business, System</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">Appointment Management</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                  <ul className="list-disc ml-6">
                                    <li>User: Needs to cancel easily.</li>
                                    <li>Business: Wants notification.</li>
                                    <li>Admin: Wants accurate records.</li>
                                  </ul>
                                </td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">Appointment exists; User is logged in.</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Appointment canceled; Notifications sent; Slot freed.</td></tr>
                                <tr>
                                  <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                  <td className="py-1">
                                    <table className="min-w-full text-xs border">
                                      <thead>
                                        <tr className="bg-blue-100">
                                          <th className="px-2 py-1 border">Actor</th>
                                          <th className="px-2 py-1 border">Action</th>
                                          <th className="px-2 py-1 border">System Response</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                        <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Goes to appointments</td><td className="border px-2 py-1"></td></tr>
                                        <tr><td className="border px-2 py-1">Sarah</td><td className="border px-2 py-1">Selects appointment to cancel</td><td className="border px-2 py-1">Receives request, cancels appointment, frees slot, sends notification</td></tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">Appointment past: Cannot be canceled.</td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                  <ul className="list-disc ml-6">
                                    <li>Network failure: Cancellation fails, user prompted to retry.</li>
                                  </ul>
                                </td></tr>
                                <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Web/Mobile interface; Email/SMS notifications; Appointment data in relational DB.</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                         {/* Use Case 6 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                        <h6 className="font-semibold mb-1">Use Case 6: View Daily Schedule</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">View Daily Schedule</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">BrightSmiles owner views today’s appointments</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">Business Process</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">Owner selects "Today’s Schedule" from dashboard</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">Shows all appointments for the current day.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">Business Owner, System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">Appointment Management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Business: Needs daily view.</li>
                                  <li>Users: Expect appointments honored.</li>
                                  <li>Admin: Wants accurate reporting.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">Owner is logged in.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Daily schedule displayed.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">Owner</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">Owner</td><td className="border px-2 py-1">Selects "Today’s Schedule"</td><td className="border px-2 py-1">Receives request, displays list of appointments and client details</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">No appointments: System displays "No appointments scheduled."</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Data sync error: Incomplete information shown.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Web dashboard; Appointment data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* Use Case 7 */}
                      <div className="bg-blue-50 p-4 rounded-xl shadow mt-8">
                        <h6 className="font-semibold mb-1">Use Case 7: Deactivate User Account</h6>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm mb-6">
                            <tbody>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Case Name</td><td className="py-1">Deactivate User Account</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Scenario Name</td><td className="py-1">Admin disables an employee’s access after they leave</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Level</td><td className="py-1">Admin Process</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Triggering Event</td><td className="py-1">Admin selects "Deactivate" on user list</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Brief Description</td><td className="py-1">Disables user’s access to the system.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Actors</td><td className="py-1">Admin (John), System</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Use Cases</td><td className="py-1">User Management</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Stakeholders</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Admin: Needs to remove access.</li>
                                  <li>Business: Wants staff removed.</li>
                                  <li>User: Account disabled.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Pre-Condition</td><td className="py-1">User account exists; Admin is logged in.</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Post-Condition</td><td className="py-1">Account deactivated; access blocked.</td></tr>
                              <tr>
                                <td className="font-semibold pr-4 py-1 text-gray-700 align-top">Flow of Events</td>
                                <td className="py-1">
                                  <table className="min-w-full text-xs border">
                                    <thead>
                                      <tr className="bg-blue-100">
                                        <th className="px-2 py-1 border">Actor</th>
                                        <th className="px-2 py-1 border">Action</th>
                                        <th className="px-2 py-1 border">System Response</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Logs in</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Opens user list</td><td className="border px-2 py-1"></td></tr>
                                      <tr><td className="border px-2 py-1">John</td><td className="border px-2 py-1">Selects employee to deactivate</td><td className="border px-2 py-1">Receives request, deactivates account, blocks access, shows success message</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Extensions</td><td className="py-1">Account already inactive: System displays "Already deactivated."</td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Exceptional Scenarios</td><td className="py-1">
                                <ul className="list-disc ml-6">
                                  <li>Error updating database: Deactivation fails, admin prompted to retry.</li>
                                </ul>
                              </td></tr>
                              <tr><td className="font-semibold pr-4 py-1 text-gray-700">Technology/Data Variations</td><td className="py-1">Admin dashboard; User data in relational DB.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">95+ Performance Score</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">100% Mobile Responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Sub-50ms API Response Times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Docker-Ready Deployment</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Value</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Streamlined Appointment Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Reduced Manual Scheduling Overhead</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Enhanced User Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Scalable Enterprise Solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
