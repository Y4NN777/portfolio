"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const particleCount = isMobile ? 5 : 12;

  const particles = useMemo(() => {
    if (!hasMounted) return [];
    return Array.from({ length: particleCount }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 4,
      delay: Math.random() * 3,
      travel: isMobile ? -50 : -100,
    }));
  }, [particleCount, hasMounted, isMobile]);

  const animationConfig = isMobile
    ? { duration: 12, ease: "linear" }
    : { duration: 8, ease: "easeInOut" };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient — light: sky tints / dark: navy scale */}
      <div className="absolute inset-0 bg-[#f0f7ff] dark:bg-[#061825]" />
      <div
        className="absolute inset-0 opacity-60 dark:opacity-100"
        style={{
          background: "linear-gradient(135deg, #e1f0fa 0%, #f0f7ff 50%, #ffffff 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(135deg, #1f4d67 0%, #0f2d40 35%, #061825 65%, #00214c 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full -z-10 ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
        style={{ background: "radial-gradient(circle, rgba(83,192,251,0.18) 0%, rgba(41,107,141,0.10) 100%)" }}
        animate={isMobile ? {
          x: [0, 50, 0],
          y: [0, -25, 0],
        } : {
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          ...animationConfig,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ willChange: 'transform' }}
      />

      <motion.div
        className={`absolute top-3/4 right-1/4 w-80 h-80 rounded-full ${isMobile ? 'blur-lg' : 'blur-3xl'}`}
        style={{ background: "radial-gradient(circle, rgba(75,188,255,0.15) 0%, rgba(83,192,251,0.08) 100%)" }}
        animate={isMobile ? {
          x: [0, -40, 0],
          y: [0, 30, 0],
        } : {
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: animationConfig.duration + 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: animationConfig.ease,
        }}
        style={{ willChange: 'transform' }}
      />

      {!isMobile && (
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(41,107,141,0.15) 0%, rgba(31,77,103,0.10) 100%)" }}
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ willChange: 'transform' }}
        />
      )}

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            background: "#53c0fb",
            opacity: 0.5,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, particle.travel],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid pattern overlay — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(83,192,251,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(83,192,251,0.07) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      )}

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(6,24,37,0.08) 100%)",
        }}
      />

      {/* Noise texture — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </div>
  );
}
