"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

interface ParallaxSectionProps {
  backgroundImage: string;
  headline: string;
  subheadline: string;
}

export function ParallaxSection({
  backgroundImage,
  headline,
  subheadline,
}: ParallaxSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative h-[360px] md:h-[480px] overflow-hidden flex items-center justify-center border-y border-slate-100 bg-slate-950"
      style={{ clipPath: "inset(0px)" }}
    >
      {/* Fixed Background Image Container - creates pure fixed viewport parallax */}
      <div
        className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${
          shouldReduceMotion ? "absolute" : "fixed"
        }`}
      >
        <Image
          src={backgroundImage}
          alt="Parallax background network"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.22]"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-slate-950/80 z-10 pointer-events-none" />

      {/* Content scrolling over */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-200 text-sm md:text-base max-w-[65ch] mx-auto leading-relaxed"
        >
          {subheadline}
        </motion.p>
      </div>
    </section>
  );
}
