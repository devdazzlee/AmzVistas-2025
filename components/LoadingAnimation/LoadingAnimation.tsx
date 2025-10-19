"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const statusMessages = [
    "Initializing Systems...",
    "Loading Quantum Core...",
    "Syncing Data Streams...",
    "Calibrating Orbit...",
    "Ready for Launch..."
  ];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Show text after a brief delay
    const textTimer = setTimeout(() => setShowText(true), 300);
    
    // Show particles after text appears
    const particlesTimer = setTimeout(() => setShowParticles(true), 600);
    
    // Progress animation with status updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 3 + 1;
        
        // Update status based on progress
        if (newProgress > 80 && currentStatus < 4) {
          setCurrentStatus(4);
        } else if (newProgress > 60 && currentStatus < 3) {
          setCurrentStatus(3);
        } else if (newProgress > 40 && currentStatus < 2) {
          setCurrentStatus(2);
        } else if (newProgress > 20 && currentStatus < 1) {
          setCurrentStatus(1);
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Complete loading after progress reaches 100%
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(textTimer);
      clearTimeout(particlesTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete, currentStatus]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: `
        radial-gradient(circle at 50% 50%, #111827 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #6b7280 100%),
        linear-gradient(45deg, rgba(249, 115, 22, 0.15) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(147, 51, 234, 0.15) 100%)
      `,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'white',
      overflow: 'hidden',
      perspective: '2000px',
      transformStyle: 'preserve-3d'
    }}>
      {/* Holographic Background Matrix */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(249, 115, 22, 0.03) 2px, rgba(249, 115, 22, 0.03) 4px),
          repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.02) 15deg, transparent 30deg)
        `,
        animation: 'matrixShift 8s linear infinite, matrixRotate 20s linear infinite'
      }} />

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={`geo-${i}`} style={{
          position: 'absolute',
          width: `${20 + i * 10}px`,
          height: `${20 + i * 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: i % 4 === 0 ? 'linear-gradient(45deg, #f97316, transparent)' :
                     i % 4 === 1 ? 'linear-gradient(45deg, #3b82f6, transparent)' :
                     i % 4 === 2 ? 'linear-gradient(45deg, #9333ea, transparent)' :
                     'linear-gradient(45deg, #10b981, transparent)',
          borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '20%',
          animation: `geometricFloat${i % 3 + 1} ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
          boxShadow: `0 0 ${20 + i * 5}px rgba(${i % 4 === 0 ? '249, 115, 22' : i % 4 === 1 ? '59, 130, 246' : i % 4 === 2 ? '147, 51, 234' : '16, 185, 129'}, 0.4)`,
          transformStyle: 'preserve-3d'
        }} />
      ))}

      {/* DNA Helix Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(200px, 40vw, 400px)',
        height: 'clamp(300px, 60vw, 600px)',
        animation: 'dnaHelix 12s linear infinite'
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`dna-${i}`} style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: i % 2 === 0 ? '#f97316' : '#3b82f6',
            borderRadius: '50%',
            top: `${i * 5}%`,
            left: `${50 + Math.sin(i * 0.5) * 30}%`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#f97316' : '#3b82f6'}`,
            animation: `dnaPulse ${2 + Math.random()}s ease-in-out infinite ${i * 0.1}s`
          }} />
        ))}
      </div>

      {/* Energy Vortex System */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(1500px, 300vw, 3000px)',
        height: 'clamp(1500px, 300vw, 3000px)',
        background: `
          conic-gradient(from 0deg, 
            rgba(249, 115, 22, 0.2) 0deg,
            rgba(59, 130, 246, 0.2) 90deg,
            rgba(147, 51, 234, 0.2) 180deg,
            rgba(16, 185, 129, 0.2) 270deg,
            rgba(249, 115, 22, 0.2) 360deg
          )
        `,
        borderRadius: '50%',
        animation: 'vortexSpin 15s linear infinite',
        filter: isMobile ? 'blur(50px)' : 'blur(100px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(1000px, 200vw, 2000px)',
        height: 'clamp(1000px, 200vw, 2000px)',
        background: `
          conic-gradient(from 180deg, 
            rgba(59, 130, 246, 0.15) 0deg,
            rgba(249, 115, 22, 0.15) 90deg,
            rgba(147, 51, 234, 0.15) 180deg,
            rgba(16, 185, 129, 0.15) 270deg,
            rgba(59, 130, 246, 0.15) 360deg
          )
        `,
        borderRadius: '50%',
        animation: 'vortexSpin2 20s linear infinite reverse',
        filter: isMobile ? 'blur(40px)' : 'blur(80px)'
      }} />

      {/* Holographic Rings */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 80vw, 800px)',
        height: 'clamp(400px, 80vw, 800px)',
        border: '4px solid transparent',
        borderImage: 'conic-gradient(from 0deg, #f97316, #3b82f6, #9333ea, #10b981, #f97316) 1',
        borderRadius: '50%',
        animation: 'holographicRing 6s linear infinite',
        boxShadow: '0 0 100px rgba(59, 130, 246, 0.5), inset 0 0 100px rgba(249, 115, 22, 0.3)',
        filter: 'drop-shadow(0 0 50px rgba(59, 130, 246, 0.8))'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(600px, 120vw, 1200px)',
        height: 'clamp(600px, 120vw, 1200px)',
        border: '2px solid transparent',
        borderImage: 'conic-gradient(from 180deg, #3b82f6, #f97316, #9333ea, #10b981, #3b82f6) 1',
        borderRadius: '50%',
        animation: 'holographicRing2 10s linear infinite reverse',
        boxShadow: '0 0 120px rgba(249, 115, 22, 0.4), inset 0 0 120px rgba(59, 130, 246, 0.2)',
        filter: 'drop-shadow(0 0 60px rgba(249, 115, 22, 0.6))'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(800px, 160vw, 1600px)',
        height: 'clamp(800px, 160vw, 1600px)',
        border: '1px solid transparent',
        borderImage: 'conic-gradient(from 90deg, #f97316, #9333ea, #10b981, #3b82f6, #f97316) 1',
        borderRadius: '50%',
        animation: 'holographicRing3 14s linear infinite',
        boxShadow: '0 0 140px rgba(249, 115, 22, 0.3), inset 0 0 140px rgba(147, 51, 234, 0.2)',
        filter: 'drop-shadow(0 0 70px rgba(249, 115, 22, 0.5))'
      }} />

      {/* Quantum Particles */}
      {Array.from({ length: isMobile ? 30 : 60 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: isMobile ? 
            (i % 6 === 0 ? '8px' : i % 6 === 1 ? '6px' : i % 6 === 2 ? '4px' : i % 6 === 3 ? '3px' : i % 6 === 4 ? '2px' : '1px') :
            (i % 6 === 0 ? '12px' : i % 6 === 1 ? '8px' : i % 6 === 2 ? '6px' : i % 6 === 3 ? '4px' : i % 6 === 4 ? '3px' : '2px'),
          height: isMobile ? 
            (i % 6 === 0 ? '8px' : i % 6 === 1 ? '6px' : i % 6 === 2 ? '4px' : i % 6 === 3 ? '3px' : i % 6 === 4 ? '2px' : '1px') :
            (i % 6 === 0 ? '12px' : i % 6 === 1 ? '8px' : i % 6 === 2 ? '6px' : i % 6 === 3 ? '4px' : i % 6 === 4 ? '3px' : '2px'),
          background: i % 5 === 0 ? 'radial-gradient(circle, #f97316, transparent)' : 
                      i % 5 === 1 ? 'radial-gradient(circle, #3b82f6, transparent)' :
                      i % 5 === 2 ? 'radial-gradient(circle, #9333ea, transparent)' : 
                      i % 5 === 3 ? 'radial-gradient(circle, #10b981, transparent)' : 'radial-gradient(circle, #ffffff, transparent)',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `quantumParticle${i % 6 + 1} ${6 + Math.random() * 6}s ease-in-out infinite ${i * 0.1}s`,
          boxShadow: i % 5 === 0 ? '0 0 30px #f97316, 0 0 60px #f97316, 0 0 90px #f97316' : 
                     i % 5 === 1 ? '0 0 30px #3b82f6, 0 0 60px #3b82f6, 0 0 90px #3b82f6' :
                     i % 5 === 2 ? '0 0 30px #9333ea, 0 0 60px #9333ea, 0 0 90px #9333ea' :
                     i % 5 === 3 ? '0 0 30px #10b981, 0 0 60px #10b981, 0 0 90px #10b981' :
                     '0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #ffffff',
          transformStyle: 'preserve-3d'
        }} />
      ))}

      {/* Neural Network Lines */}
      {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
        <div key={`line-${i}`} style={{
          position: 'absolute',
          width: '2px',
          height: `${isMobile ? 100 + Math.random() * 200 : 200 + Math.random() * 400}px`,
          background: `linear-gradient(${Math.random() * 360}deg, 
            rgba(249, 115, 22, 0.8) 0%, 
            rgba(59, 130, 246, 0.8) 50%, 
            rgba(147, 51, 234, 0.8) 100%)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `neuralPulse ${3 + Math.random() * 4}s ease-in-out infinite ${i * 0.2}s`,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
          transformOrigin: 'center',
          borderRadius: '2px'
        }} />
      ))}

      {/* Main Holographic Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transformStyle: 'preserve-3d',
        animation: 'holographicFloat 8s ease-in-out infinite'
      }}>
        {/* Holographic ORBIT SYNDICATE Text */}
        <div style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          fontWeight: '900',
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 6vw, 6rem)',
          color: '#ffffff',
          letterSpacing: 'clamp(0.1em, 0.3vw, 0.3em)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          perspective: '2000px'
        }}>
          {/* Holographic Scan Lines */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
            animation: 'scanLines 3s linear infinite',
            zIndex: 1,
            pointerEvents: 'none'
          }} />

          {/* Holographic Glitch Effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.1) 50%, transparent 100%)',
            animation: 'glitchEffect 4s ease-in-out infinite',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
          {/* Holographic Glow Effects */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, -200px)',
            width: 'clamp(800px, 120vw, 1200px)',
            height: 'clamp(300px, 50vw, 500px)',
            background: `
              radial-gradient(ellipse, rgba(249, 115, 22, 0.4) 0%, transparent 70%),
              radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)
            `,
            borderRadius: '50%',
            animation: 'holographicGlow1 7s ease-in-out infinite',
            zIndex: -1,
            filter: isMobile ? 'blur(25px)' : 'blur(50px)'
          }} />

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, -400px)',
            width: 'clamp(700px, 100vw, 1000px)',
            height: 'clamp(250px, 40vw, 400px)',
            background: `
              radial-gradient(ellipse, rgba(147, 51, 234, 0.3) 0%, transparent 70%),
              radial-gradient(ellipse, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `,
            borderRadius: '50%',
            animation: 'holographicGlow2 6s ease-in-out infinite 1.5s',
            zIndex: -1,
            filter: isMobile ? 'blur(30px)' : 'blur(60px)'
          }} />

          <motion.div 
            style={{
              color: '#f97316',
              marginBottom: '0.05rem',
              textShadow: `
                0 0 10px rgba(249, 115, 22, 0.8),
                0 0 20px rgba(249, 115, 22, 0.6),
                0 0 30px rgba(249, 115, 22, 0.4)
              `,
              background: `
                linear-gradient(45deg, 
                  #f97316 0%, 
                  #fb923c 25%, 
                  #f97316 50%, 
                  #fb923c 75%, 
                  #f97316 100%
                )
              `,
              backgroundSize: '500% 500%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'holographicGradient1 6s ease-in-out infinite, holographicFloatUp 6s ease-in-out infinite, holographicShake 12s ease-in-out infinite, textGlitch 8s ease-in-out infinite',
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 0 15px rgba(249, 115, 22, 0.6))',
              position: 'relative',
              zIndex: 3
            }}
          >
            ORBIT
          </motion.div>
          
          <motion.div 
            style={{
              color: '#3b82f6',
              textShadow: `
                0 0 10px rgba(59, 130, 246, 0.8),
                0 0 20px rgba(59, 130, 246, 0.6),
                0 0 30px rgba(59, 130, 246, 0.4)
              `,
              background: `
                linear-gradient(45deg, 
                  #3b82f6 0%, 
                  #60a5fa 25%, 
                  #3b82f6 50%, 
                  #60a5fa 75%, 
                  #3b82f6 100%
                )
              `,
              backgroundSize: '500% 500%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'holographicGradient2 6s ease-in-out infinite, holographicFloatDown 6s ease-in-out infinite, holographicShake 12s ease-in-out infinite 3s, textGlitch 8s ease-in-out infinite 2s',
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))',
              position: 'relative',
              zIndex: 3
            }}
          >
            SYNDICATE
          </motion.div>
        </div>

        {/* Holographic Progress Bar */}
        <div style={{
          width: 'clamp(300px, 80vw, 800px)',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'holographicProgressFloat 5s ease-in-out infinite'
        }}>
          {/* Progress Bar Energy Field */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            background: `
              radial-gradient(ellipse at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 70%),
              radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)
            `,
            borderRadius: '20px',
            animation: 'energyFieldPulse 4s ease-in-out infinite',
            filter: 'blur(10px)'
          }} />
          {/* Holographic Progress Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, -100px)',
            width: 'clamp(320px, 82vw, 820px)',
            height: 'clamp(60px, 8vw, 80px)',
            background: `
              radial-gradient(ellipse, rgba(249, 115, 22, 0.4) 0%, transparent 70%),
              radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)
            `,
            borderRadius: '50%',
            animation: 'holographicProgressGlow 4s ease-in-out infinite',
            zIndex: -1,
            filter: isMobile ? 'blur(15px)' : 'blur(30px)'
          }} />

          {/* Holographic Progress Background */}
          <div style={{
            width: '100%',
            height: 'clamp(12px, 2vw, 20px)',
            background: `
              linear-gradient(90deg, 
                rgba(249, 115, 22, 0.2) 0%, 
                rgba(59, 130, 246, 0.2) 50%, 
                rgba(147, 51, 234, 0.2) 100%
              )
            `,
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: `
              inset 0 5px 10px rgba(0, 0, 0, 0.6), 
              0 0 40px rgba(249, 115, 22, 0.3), 
              0 0 80px rgba(59, 130, 246, 0.2),
              0 10px 30px rgba(0, 0, 0, 0.4)
            `,
            border: '3px solid transparent',
            borderImage: 'linear-gradient(90deg, #f97316, #3b82f6, #9333ea, #10b981) 1',
            position: 'relative',
            transformStyle: 'preserve-3d'
          }}>
            {/* Holographic Progress Fill */}
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: `
                linear-gradient(90deg, 
                  #f97316 0%, 
                  #fb923c 20%, 
                  #3b82f6 40%, 
                  #60a5fa 60%, 
                  #9333ea 80%, 
                  #f97316 100%
                )
              `,
              borderRadius: '10px',
              transition: 'width 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `
                0 0 50px rgba(249, 115, 22, 0.8), 
                inset 0 3px 6px rgba(255, 255, 255, 0.5), 
                0 5px 15px rgba(0, 0, 0, 0.3)
              `,
              transformStyle: 'preserve-3d'
            }}>
              {/* Holographic Shimmer Effects */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(90deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.8), 
                    transparent
                  )
                `,
                animation: 'holographicShimmer1 2s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(90deg, 
                    transparent, 
                    rgba(59, 130, 246, 0.6), 
                    transparent
                  )
                `,
                animation: 'holographicShimmer2 2.5s ease-in-out infinite 0.8s'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(90deg, 
                    transparent, 
                    rgba(249, 115, 22, 0.4), 
                    transparent
                  )
                `,
                animation: 'holographicShimmer3 3s ease-in-out infinite 1.6s'
              }} />
            </div>
          </div>
        </div>
        
        {/* Holographic Progress Text */}
        <div style={{
          fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)',
          color: '#ffffff',
          fontWeight: '800',
          textShadow: `
            0 0 8px rgba(255, 255, 255, 0.8),
            0 0 16px rgba(249, 115, 22, 0.6),
            0 0 24px rgba(59, 130, 246, 0.4)
          `,
          letterSpacing: 'clamp(0.1em, 0.25vw, 0.25em)',
          animation: 'holographicTextGlow 3s ease-in-out infinite alternate, holographicNumberPulse 1.5s ease-in-out infinite',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.4))'
        }}>
          {Math.round(progress)}%
        </div>

        {/* Holographic Loading Dots */}
        
      </div>

      <style jsx>{`
        @keyframes matrixShift {
          0% { transform: translateY(0px); opacity: 0.3; }
          100% { transform: translateY(-20px); opacity: 0.7; }
        }

        @keyframes vortexSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.1); }
        }

        @keyframes vortexSpin2 {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(-360deg) scale(0.9); }
        }

        @keyframes holographicRing {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes holographicRing2 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        @keyframes holographicRing3 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes quantumParticle1 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          25% { 
            transform: translate3d(50px, -60px, 80px) scale(1.6) rotate(90deg); 
            opacity: 1; 
          }
          50% { 
            transform: translate3d(-30px, -120px, 150px) scale(0.8) rotate(180deg); 
            opacity: 0.8; 
          }
          75% { 
            transform: translate3d(60px, -60px, 80px) scale(1.4) rotate(270deg); 
            opacity: 1; 
          }
        }

        @keyframes quantumParticle2 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.5; 
          }
          33% { 
            transform: translate3d(-45px, -40px, 100px) scale(1.8) rotate(120deg); 
            opacity: 1; 
          }
          66% { 
            transform: translate3d(35px, -80px, 180px) scale(0.6) rotate(240deg); 
            opacity: 0.7; 
          }
        }

        @keyframes quantumParticle3 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translate3d(65px, -70px, 120px) scale(1.5) rotate(180deg); 
            opacity: 1; 
          }
        }

        @keyframes quantumParticle4 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.4; 
          }
          25% { 
            transform: translate3d(-25px, -35px, 60px) scale(1.2) rotate(90deg); 
            opacity: 0.8; 
          }
          75% { 
            transform: translate3d(35px, -35px, 60px) scale(1.1) rotate(270deg); 
            opacity: 0.9; 
          }
        }

        @keyframes quantumParticle5 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          40% { 
            transform: translate3d(30px, -50px, 100px) scale(1.4) rotate(144deg); 
            opacity: 1; 
          }
          80% { 
            transform: translate3d(-40px, -100px, 160px) scale(0.7) rotate(288deg); 
            opacity: 0.8; 
          }
        }

        @keyframes quantumParticle6 {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg); 
            opacity: 0.3; 
          }
          20% { 
            transform: translate3d(-25px, -35px, 60px) scale(1.1) rotate(72deg); 
            opacity: 0.8; 
          }
          60% { 
            transform: translate3d(35px, -70px, 120px) scale(1.3) rotate(216deg); 
            opacity: 1; 
          }
        }


        @keyframes neuralPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scaleY(0.5); 
          }
          50% { 
            opacity: 0.9; 
            transform: scaleY(1.2); 
          }
        }

        @keyframes holographicFloat {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); 
          }
          50% { 
            transform: translate3d(0px, -15px, 15px) rotateX(3deg) rotateY(2deg); 
          }
        }

        @keyframes holographicGlow1 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translate3d(-50%, -50%, -200px) scale(0.8); 
          }
          50% { 
            opacity: 0.8; 
            transform: translate3d(-50%, -50%, -200px) scale(1.5); 
          }
        }

        @keyframes holographicGlow2 {
          0%, 100% { 
            opacity: 0.2; 
            transform: translate3d(-50%, -50%, -400px) scale(0.9); 
          }
          50% { 
            opacity: 0.7; 
            transform: translate3d(-50%, -50%, -400px) scale(1.3); 
          }
        }

        @keyframes holographicGradient1 {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 0%; }
          75% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes holographicGradient2 {
          0% { background-position: 100% 50%; }
          25% { background-position: 0% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes holographicFloatUp {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
          }
          50% { 
            transform: translate3d(0px, -40px, 30px) rotateX(20deg) rotateY(15deg) rotateZ(10deg); 
          }
        }

        @keyframes holographicFloatDown {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
          }
          50% { 
            transform: translate3d(0px, 40px, 30px) rotateX(-20deg) rotateY(-15deg) rotateZ(-10deg); 
          }
        }

        @keyframes holographicShake {
          0%, 90%, 100% { transform: translate3d(0px, 0px, 0px); }
          95% { transform: translate3d(4px, 0px, 3px); }
          97% { transform: translate3d(-4px, 0px, -3px); }
          99% { transform: translate3d(3px, 0px, 2px); }
        }

        @keyframes holographicProgressFloat {
          0%, 100% { 
            transform: translate3d(0px, 0px, 0px) rotateX(0deg); 
          }
          50% { 
            transform: translate3d(0px, -8px, 8px) rotateX(4deg); 
          }
        }

        @keyframes holographicProgressGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes holographicShimmer1 {
          0% { transform: translate3d(-100%, 0px, 0px); }
          100% { transform: translate3d(100%, 0px, 0px); }
        }

        @keyframes holographicShimmer2 {
          0% { transform: translate3d(-100%, 0px, 0px); }
          100% { transform: translate3d(100%, 0px, 0px); }
        }

        @keyframes holographicShimmer3 {
          0% { transform: translate3d(-100%, 0px, 0px); }
          100% { transform: translate3d(100%, 0px, 0px); }
        }

        @keyframes holographicTextGlow {
          0% { 
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(249, 115, 22, 0.6), 0 0 24px rgba(59, 130, 246, 0.4);
          }
          100% { 
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.8), 0 0 24px rgba(249, 115, 22, 0.6), 0 0 36px rgba(59, 130, 246, 0.4);
          }
        }

        @keyframes holographicNumberPulse {
          0%, 100% { transform: scale3d(1, 1, 1); }
          50% { transform: scale3d(1.2, 1.2, 1.2); }
        }

        @keyframes holographicDotPulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale3d(1, 1, 1); 
          }
          50% { 
            opacity: 1; 
            transform: scale3d(1.8, 1.8, 1.8); 
          }
        }

        @keyframes holographicDotOrbit {
          0% { transform: rotateX(0deg) rotateY(0deg) translate3d(35px, 0px, 0px) rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) translate3d(35px, 0px, 0px) rotateX(-360deg) rotateY(-360deg); }
        }

        @keyframes holographicTrailPulse {
          0%, 100% { 
            opacity: 0.4; 
            transform: translate3d(-50%, -50%, -30px) scale3d(0.8, 0.8, 0.8); 
          }
          50% { 
            opacity: 0.8; 
            transform: translate3d(-50%, -50%, -30px) scale3d(1.4, 1.4, 1.4); 
          }
        }

        /* NEW SPECTACULAR ANIMATIONS */
        @keyframes matrixRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes geometricFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.2); }
        }

        @keyframes geometricFloat2 {
          0%, 100% { transform: translateX(0px) rotate(0deg) scale(1); }
          50% { transform: translateX(30px) rotate(-180deg) scale(0.8); }
        }

        @keyframes geometricFloat3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          25% { transform: translate(20px, -20px) rotate(90deg) scale(1.1); }
          50% { transform: translate(0px, -40px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-20px, -20px) rotate(270deg) scale(1.1); }
        }

        @keyframes dnaHelix {
          0% { transform: translate(-50%, -50%) rotateY(0deg); }
          100% { transform: translate(-50%, -50%) rotateY(360deg); }
        }

        @keyframes dnaPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes scanLines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes glitchEffect {
          0%, 90%, 100% { opacity: 0; transform: translateX(0); }
          5% { opacity: 1; transform: translateX(-2px); }
          10% { opacity: 0; transform: translateX(2px); }
          15% { opacity: 1; transform: translateX(-1px); }
          20% { opacity: 0; transform: translateX(1px); }
        }

        @keyframes textGlitch {
          0%, 90%, 100% { transform: translateX(0) skewX(0deg); }
          5% { transform: translateX(-2px) skewX(1deg); }
          10% { transform: translateX(2px) skewX(-1deg); }
          15% { transform: translateX(-1px) skewX(0.5deg); }
          20% { transform: translateX(1px) skewX(-0.5deg); }
        }

        @keyframes energyFieldPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;