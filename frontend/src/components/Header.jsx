import React, { useState } from 'react';
import { Calendar, Users, Clock, ExternalLink, Moon, Sun, LogOut, Shield, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header = () => {
  const { isDarkMode, toggleDarkMode, userRole, isAuthenticated, logout } = useApp();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    // The login modal will handle setting the authentication state
  };
  
  const openApiDocs = () => {
    window.open('https://editor.swagger.io/?url=http://localhost:8081/api/openapi.json', '_blank');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Schedulink</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Smart Appointment Scheduler</p>
              </div>
            </div>
          </div>

          {/* Stats and Auth Status */}
          <div className="hidden md:flex items-center space-x-6">
            {userRole === 'master' && isAuthenticated && (
              <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                <Shield className="w-4 h-4 mr-1" />
                <span>Master Access</span>
              </div>
            )}
            {userRole === 'master' && isAuthenticated && (
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Users className="w-4 h-4 mr-1" />
                <span>User Management</span>
              </div>
            )}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              <span>Real-time Tracking</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Login Button for guests */}
            {userRole === 'guest' && !isAuthenticated && (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center px-3 py-2 text-sm bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg transition-colors duration-200"
                title="Login as Master"
              >
                <Lock className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Master Login</span>
              </button>
            )}

            {/* Logout Button for authenticated master */}
            {userRole === 'master' && isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 text-sm bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg transition-colors duration-200"
                title="Logout from Master Access"
              >
                <LogOut className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* API Docs Link - Only for authenticated master */}
            {userRole === 'master' && isAuthenticated && (
              <button
                onClick={openApiDocs}
                className="flex items-center px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">API Docs</span>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
};

export default Header;

