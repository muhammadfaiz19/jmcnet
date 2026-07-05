"use client";

import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function PageHeader({
  eyebrow = "PT Jaringan Multimedia Cirebon",
  title,
  highlight,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-950 text-white border-b border-slate-800/80 overflow-hidden">
      {/* Ambient luxury glows for high-end SaaS/editorial feel */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-light/15 blur-[140px] -top-40 -right-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-dark/30 blur-[100px] -bottom-32 -left-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-5">
          {/* Elegant Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-brand-light uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Clean Editorial Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {title}{" "}
            {highlight && (
              <span className="text-brand-light">
                {highlight}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
