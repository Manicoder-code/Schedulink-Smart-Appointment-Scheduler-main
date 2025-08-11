import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Users, Zap, Shield, Globe, Smartphone, Code, Database, Cloud, TrendingUp } from 'lucide-react';

const CaseStudy = () => {
  const navigate = useNavigate();

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
                src="/images/image.png" 
                alt="Schedulink System Architecture Diagram" 
                className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center text-sm text-gray-500 mt-4 italic">
                Comprehensive system architecture showcasing the complete Schedulink platform infrastructure
              </p>
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

