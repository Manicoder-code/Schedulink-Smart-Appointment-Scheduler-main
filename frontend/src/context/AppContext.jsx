import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userRole, setUserRole] = useState('guest'); // 'master' or 'guest'
  const [isNewUser, setIsNewUser] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if authentication is still valid (24 hours or extended if remembered)
  const checkAuthValidity = () => {
    const authTimestamp = localStorage.getItem('authTimestamp');
    const isAuth = localStorage.getItem('isAuthenticated');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (isAuth && authTimestamp) {
      const timeDiff = Date.now() - parseInt(authTimestamp);
      const sessionLimit = rememberMe === 'true' ? 
        (30 * 24 * 60 * 60 * 1000) : // 30 days if remembered
        (24 * 60 * 60 * 1000); // 24 hours otherwise
      
      if (timeDiff < sessionLimit) {
        return true;
      } else {
        // Clear expired authentication
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('authTimestamp');
        localStorage.removeItem('rememberMe');
        localStorage.setItem('userRole', 'guest');
        return false;
      }
    }
    return false;
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedRole = localStorage.getItem('userRole');
    const visitedBefore = localStorage.getItem('visitedBefore');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Check authentication validity
    const isValidAuth = checkAuthValidity();
    setIsAuthenticated(isValidAuth);
    
    if (savedRole && isValidAuth) {
      setUserRole(savedRole);
    } else if (!isValidAuth) {
      setUserRole('guest');
    }
    
    if (visitedBefore) {
      setIsNewUser(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const setRole = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  const login = () => {
    setIsAuthenticated(true);
    setUserRole('master');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('guest');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authTimestamp');
    localStorage.removeItem('rememberMe');
    localStorage.setItem('userRole', 'guest');
  };

  const markAsVisited = () => {
    setIsNewUser(false);
    localStorage.setItem('visitedBefore', 'true');
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    userRole,
    setRole,
    isNewUser,
    markAsVisited,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

