"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Sky blue palette only
    const colors = [
      "rgb(83, 192, 251)",   // #53c0fb primary accent
      "rgb(75, 188, 255)",   // #4bbcff link
      "rgb(98, 182, 226)",   // #62b6e2 muted accent
      "rgb(41, 107, 141)",   // #296b8d deep accent
      "rgb(31, 77, 103)",    // #1f4d67 elevated surface
    ];

    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
      opacity: Math.random() * 0.5 + 0.2,
    }));

    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y } = particle;
          const { velocity } = particle;

          x += velocity.x;
          y += velocity.y;

          if (x <= 0 || x >= window.innerWidth) velocity.x *= -1;
          if (y <= 0 || y >= window.innerHeight) velocity.y *= -1;

          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100;
            velocity.x -= Math.cos(angle) * force * 0.5;
            velocity.y -= Math.sin(angle) * force * 0.5;
          }

          velocity.x *= 0.99;
          velocity.y *= 0.99;

          return {
            ...particle,
            x: Math.max(0, Math.min(window.innerWidth, x)),
            y: Math.max(0, Math.min(window.innerHeight, y)),
            velocity,
          };
        })
      );
    };

    const intervalId = setInterval(animateParticles, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle sky-tint overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(83, 192, 251, 0.03)" }}
      />

      {/* Geometric ring shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 2 }}
          >
            <motion.div
              className={`w-${20 + i * 10} h-${20 + i * 10} rounded-full`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${5 + i * 10}%`,
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 20).map((particle, i) =>
          particles.slice(i + 1, 20).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 150) {
              return (
                <line
                  key={`line-${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="url(#sky-gradient)"
                  strokeWidth="1"
                  opacity={Math.max(0, 0.3 - distance / 500)}
                />
              );
            }
            return null;
          })
        )}
        <defs>
          <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#53c0fb" />
            <stop offset="100%" stopColor="#296b8d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
