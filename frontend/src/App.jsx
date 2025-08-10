import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import SlotForm from './components/SlotForm';
import UsersList from './components/UsersList';
import SlotsList from './components/SlotsList';
import WelcomeModal from './components/WelcomeModal';
import SessionWarning from './components/SessionWarning';
import Footer from './components/Footer';

function AppContent() {
  // Refresh triggers to update lists when new items are created
  const [userRefreshTrigger, setUserRefreshTrigger] = useState(0);
  const [slotRefreshTrigger, setSlotRefreshTrigger] = useState(0);
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(300); // 5 minutes
  
  const { isNewUser, markAsVisited, userRole, setRole, isAuthenticated, login, logout } = useApp();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (isNewUser) {
      setShowWelcomeModal(true);
    }
  }, [isNewUser]);

  // Session warning effect
  useEffect(() => {
    if (isAuthenticated && userRole === 'master') {
      const authTimestamp = localStorage.getItem('authTimestamp');
      const rememberMe = localStorage.getItem('rememberMe');
      
      if (authTimestamp) {
        const sessionLimit = rememberMe === 'true' ? 
          (30 * 24 * 60 * 60 * 1000) : // 30 days if remembered
          (24 * 60 * 60 * 1000); // 24 hours otherwise
        
        const expiryTime = parseInt(authTimestamp) + sessionLimit;
        const warningTime = expiryTime - (5 * 60 * 1000); // 5 minutes before expiry
        
        const checkSession = () => {
          const now = Date.now();
          if (now >= warningTime && now < expiryTime) {
            const timeLeft = Math.floor((expiryTime - now) / 1000);
            setSessionTimeRemaining(timeLeft);
            setShowSessionWarning(true);
          } else if (now >= expiryTime) {
            logout();
            setShowSessionWarning(false);
          }
        };

        // Check immediately and then every 30 seconds
        checkSession();
        const interval = setInterval(checkSession, 30000);
        
        return () => clearInterval(interval);
      }
    } else {
      setShowSessionWarning(false);
    }
  }, [isAuthenticated, userRole, logout]);

  const handleUserCreated = (newUser) => {
    console.log('New user created:', newUser);
    setUserRefreshTrigger(prev => prev + 1);
  };

  const handleSlotCreated = (newSlot) => {
    console.log('New slot created:', newSlot);
    setSlotRefreshTrigger(prev => prev + 1);
  };

  const handleWelcomeClose = () => {
    setShowWelcomeModal(false);
    markAsVisited();
  };

  const handleRoleSelect = (role) => {
    if (role === 'master') {
      // Master role selection will trigger login
      login();
    }
    setRole(role);
    markAsVisited();
  };

  const handleExtendSession = () => {
    // Extend session by resetting timestamp
    localStorage.setItem('authTimestamp', Date.now().toString());
    setShowSessionWarning(false);
  };

  const handleSessionLogout = () => {
    logout();
    setShowSessionWarning(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Welcome Modal */}
      <WelcomeModal 
        isOpen={showWelcomeModal}
        onClose={handleWelcomeClose}
        onRoleSelect={handleRoleSelect}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Schedulink
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Smart Appointment Scheduler for Modern Businesses
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Create and manage appointment slots efficiently. Allow users to view and select available times 
            with our responsive, containerized solution built with React and FastAPI.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
            🎉 Cognizant Vibe Coding 2025
          </div>
        </div>

        {/* Authentication Required Message for Master Role */}
        {userRole === 'master' && !isAuthenticated && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                  Authentication Required
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Please log in to access master features including user management and advanced controls.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Forms Section - Show UserForm only for authenticated master */}
        <div className={`grid ${userRole === 'master' && isAuthenticated ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-8 mb-12`}>
          {userRole === 'master' && isAuthenticated && <UserForm onUserCreated={handleUserCreated} />}
          <SlotForm onSlotCreated={handleSlotCreated} />
        </div>

        {/* Lists Section */}
        <div className="space-y-8">
          {userRole === 'master' && isAuthenticated && <UsersList refreshTrigger={userRefreshTrigger} />}
          <SlotsList refreshTrigger={slotRefreshTrigger} />
        </div>
      </main>
      
      {/* Footer Component */}
      <Footer />
      
      {/* Session Warning */}
      <SessionWarning
        isVisible={showSessionWarning}
        onExtend={handleExtendSession}
        onLogout={handleSessionLogout}
        timeRemaining={sessionTimeRemaining}
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;



