"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  useEffect(() => {
    // Ensure loading animation plays on initial load
    const timer = setTimeout(() => {
      // This ensures the loading animation shows for at least a minimum time
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 2500); // Minimum loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      <div className="relative">
        {isLoading && (
          <div className={`loading-overlay ${!isLoading ? 'fade-out' : ''}`}>
            <LoadingAnimation onComplete={handleLoadingComplete} />
          </div>
        )}
        
        <div 
          className={`main-content transition-all duration-700 ${
            showContent 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{ 
            visibility: showContent ? 'visible' : 'hidden',
            pointerEvents: showContent ? 'auto' : 'none'
          }}
        >
          {children}
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

