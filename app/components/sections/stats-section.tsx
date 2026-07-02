"use client";

import React from "react";

export function StatsSection() {
  return (
    <section className="py-12 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              98%
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-500">
              SLA Jaringan
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              100%
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-500">
              Fiber Optic Murni
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              24/7
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-500">
              Dukungan Teknis
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              0 FUP
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-500">
              Kuota Tanpa Batas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
