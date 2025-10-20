"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simple progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Complete loading after progress reaches 100%
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-50">
      {/* Simple animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            <span className="text-orange-500 drop-shadow-lg">ORBIT</span>
            <span className="text-blue-500 drop-shadow-lg ml-2">SYNDICATE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Your Premier E-commerce Automation Partner
          </p>
        </motion.div>

        {/* Simple progress bar */}
        <div className="w-80 max-w-full mx-auto mb-6">
          <div className="bg-gray-700/50 rounded-full h-3 overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Progress percentage */}
        <motion.div
          key={Math.round(progress)}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl font-bold text-white tracking-wide"
        >
          {Math.round(progress)}%
        </motion.div>

        {/* Simple loading dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;