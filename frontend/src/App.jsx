import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import SlotForm from './components/SlotForm';
import UsersList from './components/UsersList';
import SlotsList from './components/SlotsList';
import WelcomeModal from './components/WelcomeModal';
import Footer from './components/Footer';

function AppContent() {
  // Refresh triggers to update lists when new items are created
  const [userRefreshTrigger, setUserRefreshTrigger] = useState(0);
  const [slotRefreshTrigger, setSlotRefreshTrigger] = useState(0);
  
  const { isNewUser, markAsVisited, userRole, setRole } = useApp();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (isNewUser) {
      setShowWelcomeModal(true);
    }
  }, [isNewUser]);

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
    setRole(role);
    markAsVisited();
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

        {/* Forms Section - Show UserForm only for master */}
        <div className={`grid ${userRole === 'master' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-8 mb-12`}>
          {userRole === 'master' && <UserForm onUserCreated={handleUserCreated} />}
          <SlotForm onSlotCreated={handleSlotCreated} />
        </div>

        {/* Lists Section */}
        <div className="space-y-8">
          {userRole === 'master' && <UsersList refreshTrigger={userRefreshTrigger} />}
          <SlotsList refreshTrigger={slotRefreshTrigger} />
        </div>
      </main>
      
      {/* Footer Component */}
      <Footer />
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


