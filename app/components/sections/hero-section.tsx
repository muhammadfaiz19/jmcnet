"use client";

import React from "react";
import Image from "next/image";
import { Speedometer } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden min-h-[90dvh] flex items-center bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center w-full">
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6 z-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
            PT Jaringan Multimedia Cirebon
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">
            Internet Fiber <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light relative">
              Cepat &amp; Tanpa Batas
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[50ch]">
            Hubungkan rumah dan bisnis Anda dengan koneksi internet fiber
            optic paling stabil di wilayah Cirebon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#kontak"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-dark px-6 text-sm font-bold text-white transition-all hover:bg-brand-dark/95 active:scale-98 shadow-md shadow-brand-dark/10"
            >
              Hubungi Kami
            </a>
            <a
              href="#paket"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-200 px-6 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-98"
            >
              Lihat Paket
            </a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-6 relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero_network.png"
                alt="JMCNET Fiber Optic Jaringan"
                fill
                sizes="(max-w-7xl) 100vw, 500px"
                priority
                className="object-cover"
              />
              {/* Visual Glassmorphism overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark/10 flex items-center justify-center text-brand-dark">
                    <Speedometer size={20} weight="bold" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold leading-none">
                      Kecepatan Maksimal
                    </p>
                    <p className="text-sm font-bold text-slate-800 mt-1">
                      Hingga 56 Mbps
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-slate-700 uppercase">
                    Jaringan Stabil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
