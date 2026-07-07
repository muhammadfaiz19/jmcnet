"use client";

import React from "react";
import Link from "next/link";

import type { SiteSettings } from "@/types";

export function HeroSection({ settings }: { settings: SiteSettings | null }) {
  const companyName = settings?.companyName || "PT Jaringan Multimedia Cirebon";
  const heroHeadline = settings?.heroHeadline || "Koneksi Internet Fiber Optic Murni.";
  const heroSubtext = settings?.heroSubtext || "Jaringan backbone 100% fiber optic berkecepatan tinggi untuk hunian dan bisnis di Cirebon. Tanpa batas kuota (Unlimited), stabil, dan transparan.";

  return (
    <section className="relative min-h-[calc(100vh-6.5rem)] pt-8 pb-8 md:pt-12 md:pb-12 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white border-b border-slate-200/80 overflow-hidden flex flex-col">
      {/* Subtle Corporate Grid / Dot Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-blue-100/60 via-slate-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-between gap-12">
        {/* Editorial / Swiss Architectural Layout - Centered Vertically */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end my-auto py-8">
          {/* Kolom Judul Utama */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono tracking-[0.2em] text-brand-dark uppercase">
              <span className="w-6 h-[2px] bg-brand-dark" />
              <span className="font-bold tracking-[0.25em]">{companyName}</span>
              <span className="text-slate-400 font-light">{"//"}</span>
              <span className="text-slate-500">100% Fiber Optic</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
              {heroHeadline}
            </h1>
          </div>

          {/* Kolom Deskripsi & CTA */}
          <div className="lg:col-span-5 space-y-8 lg:pb-2">
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-md">
              {heroSubtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#paket"
                className="w-full sm:w-auto h-13 px-8 rounded-xl bg-brand-dark text-white font-bold text-sm tracking-wide hover:bg-brand-dark/90 transition-all flex items-center justify-center shadow-md shadow-brand-dark/15"
              >
                Lihat Pilihan Paket
              </Link>
              <Link
                href="/kontak"
                className="w-full sm:w-auto h-13 px-8 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm tracking-wide hover:border-slate-400 hover:bg-white transition-all flex items-center justify-center bg-white/80 shadow-sm"
              >
                Konsultasi Jaringan
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specs / Utilitarian Footer Bar - Docked at Bottom */}
        <div className="w-full pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono tracking-widest uppercase text-slate-500 mt-auto">
          <div>
            <span className="block text-slate-900 font-bold text-sm sm:text-base mb-1 tracking-normal font-sans">
              100% FIBER
            </span>
            Infrastruktur Murni
          </div>
          <div>
            <span className="block text-slate-900 font-bold text-sm sm:text-base mb-1 tracking-normal font-sans">
              UNLIMITED
            </span>
            Tanpa Batasan FUP
          </div>
          <div>
            <span className="block text-slate-900 font-bold text-sm sm:text-base mb-1 tracking-normal font-sans">
              SIMETRIS
            </span>
            Download &amp; Upload Setara
          </div>
          <div>
            <span className="block text-slate-900 font-bold text-sm sm:text-base mb-1 tracking-normal font-sans">
              SUPPORT CS
            </span>
            Senin - Sabtu (09.00 - 18.00)
          </div>
        </div>
      </div>
    </section>
  );
}
