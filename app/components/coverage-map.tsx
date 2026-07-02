"use client";

import React, { useState } from "react";
import { MapPin, ShieldCheck, MapTrifold, CheckCircle } from "@phosphor-icons/react";
import { motion } from "motion/react";

interface Region {
  name: string;
  sub: string;
  status: "Active" | "Expanding";
  speed: string;
  x: number; // percentage coordinate on map SVG
  y: number;
}

const regions: Region[] = [
  { name: "Arjawinangun", sub: "Tegalgubug, Jungjang, dll.", status: "Active", speed: "Up to 100 Mbps", x: 35, y: 35 },
  { name: "Palimanan", sub: "Pegagan, Kepuh, dll.", status: "Active", speed: "Up to 100 Mbps", x: 45, y: 48 },
  { name: "Klangenan", sub: "Jemaras, Kreyo, dll.", status: "Active", speed: "Up to 100 Mbps", x: 55, y: 38 },
  { name: "Plumbon", sub: "Pangkalan, Karangasem, dll.", status: "Active", speed: "Up to 100 Mbps", x: 62, y: 55 },
  { name: "Weru", sub: "Megu Gede, Setu Kulon, dll.", status: "Active", speed: "Up to 100 Mbps", x: 72, y: 62 },
  { name: "Sumber", sub: "Kemantren, Sendang, dll.", status: "Active", speed: "Up to 100 Mbps", x: 68, y: 78 },
  { name: "Cirebon Kota", sub: "Kesambi, Harjamukti, dll.", status: "Active", speed: "Up to 100 Mbps", x: 85, y: 50 },
  { name: "Gegesik", sub: "Kedungdalem, dll.", status: "Expanding", speed: "Coming Soon", x: 28, y: 22 },
];

export function CoverageMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-12 items-center">
      {/* Left Info Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-xs font-semibold">
          <MapTrifold size={14} weight="bold" />
          <span>Jaringan Terluas</span>
        </div>
        
        <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Cakupan Area Fiber Optic JMCNET
        </h3>
        
        <p className="text-slate-600 text-base leading-relaxed">
          Melayani wilayah Cirebon dan sekitarnya dengan jaringan Fiber Optic yang terus berkembang. Kami menghadirkan koneksi stabil hingga ke pemukiman dan pusat bisnis Anda.
        </p>

        {/* Selected Region details */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Wilayah Terpilih</span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              selectedRegion.status === "Active" 
                ? "bg-emerald-50 text-emerald-700" 
                : "bg-amber-50 text-amber-700"
            }`}>
              <CheckCircle size={12} weight="fill" />
              {selectedRegion.status === "Active" ? "Aktif" : "Perluasan"}
            </span>
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-800">{selectedRegion.name}</h4>
            <p className="text-sm text-slate-500 mt-1">{selectedRegion.sub}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200/60">
            <div>
              <span className="text-xs text-slate-400 block">Ketersediaan</span>
              <span className="text-sm font-semibold text-slate-700">Fiber Optic</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Kapasitas Kecepatan</span>
              <span className="text-sm font-semibold text-slate-700">{selectedRegion.speed}</span>
            </div>
          </div>
        </div>

        {/* Region selector list */}
        <div className="grid grid-cols-2 gap-2 max-h-[160px] overflow-y-auto pr-2 scrollbar-thin">
          {regions.map((region) => (
            <button
              key={region.name}
              onClick={() => setSelectedRegion(region)}
              className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all ${
                selectedRegion.name === region.name
                  ? "border-brand-dark bg-brand-dark/5 text-brand-dark font-semibold shadow-sm"
                  : "border-slate-100 hover:border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <MapPin size={14} className={selectedRegion.name === region.name ? "text-brand-dark" : "text-slate-400"} />
              <span className="truncate">{region.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Map Visualizer */}
      <div className="lg:col-span-7 relative flex justify-center items-center p-6 bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[16/11]">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.4]" />
        
        {/* Abstract Map Canvas */}
        <div className="relative w-full h-full max-w-[500px] max-h-[380px]">
          {/* Cirebon Map Graphic Outline Placeholder (Stylized Vector) */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-200/80 fill-slate-200/30 stroke-slate-300 stroke-[0.5] drop-shadow-sm">
            {/* Outline of Cirebon Kabupaten/Kota */}
            <path d="M 15 20 Q 25 15 35 25 T 55 20 T 70 35 T 85 45 T 90 65 T 75 85 T 50 90 T 35 75 T 20 60 Z" />
            <path d="M 75 40 Q 80 42 82 48 T 80 55 T 72 50 Z" className="fill-brand-light/10 stroke-brand-light/30" /> {/* Cirebon Kota accent */}
          </svg>

          {/* Glowing Map Hotspots */}
          {regions.map((region) => {
            const isSelected = selectedRegion.name === region.name;
            return (
              <button
                key={region.name}
                onClick={() => setSelectedRegion(region)}
                style={{ left: `${region.x}%`, top: `${region.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10"
              >
                {/* Outer pulsing ring */}
                <span className={`absolute inline-flex h-8 w-8 rounded-full opacity-75 transform -translate-x-1/4 -translate-y-1/4 ${
                  region.status === "Active" 
                    ? "bg-emerald-400 animate-ping duration-1000" 
                    : "bg-amber-400 animate-ping duration-1000"
                }`} />

                {/* Inner dot */}
                <span className={`relative block rounded-full transition-all duration-300 ${
                  isSelected 
                    ? "h-4.5 w-4.5 border-2 border-white shadow-md shadow-brand-dark/20" 
                    : "h-3.5 w-3.5 group-hover:scale-125"
                } ${
                  region.status === "Active" 
                    ? "bg-emerald-500" 
                    : "bg-amber-500"
                }`} />

                {/* Micro Label */}
                <span className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded bg-slate-800 text-[9px] font-medium text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 ${
                  isSelected ? "opacity-100 scale-105" : ""
                }`}>
                  {region.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Small legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-100 px-3 py-2 rounded-xl flex gap-4 text-xs font-semibold shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-slate-600">Jaringan Aktif</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-slate-600">Perluasan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
