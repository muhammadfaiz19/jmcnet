"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerProps {
  children: React.ReactNode[];
  delayStep?: number;
  duration?: number;
  y?: number;
  className?: string;
  gridClass?: string;
}

export function RevealStagger({
  children,
  delayStep = 0.08,
  duration = 0.6,
  y = 16,
  className = "",
  gridClass = "grid gap-6 md:grid-cols-3",
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={gridClass}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration,
            delay: i * delayStep,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={className}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
