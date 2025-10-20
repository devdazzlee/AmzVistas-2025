"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Handle initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    // Show loading on route change
    setIsLoading(true);
    setShowContent(false);
    
    // Complete loading after a short delay
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 800); // Shorter delay for route changes

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      <div className="relative">
        {isLoading && (
          <div className={`loading-overlay ${!isLoading ? 'fade-out' : ''}`}>
            <LoadingAnimation onComplete={handleLoadingComplete} />
          </div>
        )}
        
        <div 
          className={`main-content transition-all duration-500 ${
            showContent 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-2'
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


