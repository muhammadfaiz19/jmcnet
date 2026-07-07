"use client";

import React from "react";

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-brand-dark/90 to-slate-900 text-white border-y border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow & grid */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-dark/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          <div className="space-y-1.5">
            <p className="text-4xl md:text-5xl font-black text-brand-light tracking-tight">
              98%
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-300 font-mono uppercase tracking-wider">
              SLA Jaringan
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-4xl md:text-5xl font-black text-brand-light tracking-tight">
              100%
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-300 font-mono uppercase tracking-wider">
              Fiber Optic Murni
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-3xl md:text-4xl font-black text-brand-light tracking-tight">
              09.00 - 18.00
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-300 font-mono uppercase tracking-wider">
              Jam Operasional CS
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-4xl md:text-5xl font-black text-brand-light tracking-tight">
              0 FUP
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-300 font-mono uppercase tracking-wider">
              Kuota Tanpa Batas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
