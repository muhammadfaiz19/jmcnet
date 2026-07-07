"use client";

import React, { useState } from "react";
import {
  Speedometer,
  Infinity as InfinityIcon,
  ShieldCheck,
  Wrench,
  Headset,
  Clock,
  Check,
  Buildings,
  Sparkle,
  CheckCircle,
  WifiHigh,
} from "@phosphor-icons/react";

export function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState<"semua" | "infrastruktur" | "layanan" | "harga">("semua");

  return (
    <section id="keunggulan" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header with Concise Editorial Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
              <Sparkle size={14} weight="fill" />
              <span>Keunggulan SGC Network</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Mengapa Memilih JMCNET?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Infrastruktur serat optik murni dengan transparansi layanan. Tanpa kuota tersembunyi, tanpa penurunan kecepatan.
            </p>
          </div>

          {/* Interactive Category Pills (Membuat informasi mudah dicerna & tidak flat) */}
          <div className="flex flex-wrap gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80 shrink-0 w-fit">
            <button
              onClick={() => setActiveTab("semua")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "semua"
                  ? "bg-brand-dark text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              Semua Pilar (8)
            </button>
            <button
              onClick={() => setActiveTab("infrastruktur")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "infrastruktur"
                  ? "bg-brand-dark text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              Infrastruktur
            </button>
            <button
              onClick={() => setActiveTab("layanan")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "layanan"
                  ? "bg-brand-dark text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              Support CS
            </button>
            <button
              onClick={() => setActiveTab("harga")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "harga"
                  ? "bg-brand-dark text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              Transparansi
            </button>
          </div>
        </div>

        {/* Asymmetrical Bento Grid - Clean, Scannable, No Text Slop */}
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-12">
          {/* 1. Fiber Optic Network - Large Highlight (Infrastruktur) */}
          {(activeTab === "semua" || activeTab === "infrastruktur") && (
            <div className="md:col-span-2 lg:col-span-7 p-8 rounded-3xl bg-slate-900 text-white space-y-6 flex flex-col justify-between relative overflow-hidden shadow-md group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-dark/40 via-transparent to-transparent blur-2xl pointer-events-none" />
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform">
                  <WifiHigh size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                  Infrastruktur Utama
                </span>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-black tracking-tight">100% Fiber Optic Murni</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Jaringan kabel serat optik mandiri langsung ke lokasi Anda. Menjamin transmisi data super cepat dengan latensi rendah untuk gaming dan WFH.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400 relative z-10">
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" weight="fill" /> FTTH Dedicated</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" weight="fill" /> Anti Cuaca Ekstrem</span>
              </div>
            </div>
          )}

          {/* 2. Support CS - Dark Brand Accent (Layanan) */}
          {(activeTab === "semua" || activeTab === "layanan") && (
            <div className="md:col-span-2 lg:col-span-5 p-8 rounded-3xl bg-brand-dark text-white space-y-6 flex flex-col justify-between shadow-md group">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Headset size={26} weight="fill" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white">
                  Siaga Jam Kerja
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black tracking-tight">Support Lokal Cirebon</h3>
                <p className="text-brand-light text-sm leading-relaxed">
                  Tim teknisi dan customer service lokal di Cirebon siap membantu memecahkan kendala teknis Anda di jam operasional (Senin - Sabtu: 09.00 - 18.00 WIB) via WhatsApp.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 text-xs font-bold text-white flex items-center justify-between">
                <span>SLA Jaringan 98%</span>
                <span className="underline decoration-white/40">Respon Cepat</span>
              </div>
            </div>
          )}

          {/* 3. Tanpa FUP (Infrastruktur) */}
          {(activeTab === "semua" || activeTab === "infrastruktur") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <InfinityIcon size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">100% Tanpa FUP</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Bebas kuota pemakaian wajar. Kecepatan tetap maksimal 30 hari penuh tanpa batas kuota atau penurunan speed.
                </p>
              </div>
            </div>
          )}

          {/* 4. Koneksi Stabil (Infrastruktur) */}
          {(activeTab === "semua" || activeTab === "infrastruktur") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <ShieldCheck size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Koneksi Stabil &amp; Ping Rendah</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Latensi minim dan loss rate sangat rendah, menjamin kenyamanan bermain game online, video conference, dan streaming 4K.
                </p>
              </div>
            </div>
          )}

          {/* 5. Teknisi Profesional (Layanan) */}
          {(activeTab === "semua" || activeTab === "layanan") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <Wrench size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Teknisi Ahli &amp; Rapi</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Dukungan tim lapangan profesional yang melakukan pemasangan kabel secara bersih, rapi, dan berstandar keselamatan tinggi.
                </p>
              </div>
            </div>
          )}

          {/* 6. Instalasi Cepat (Layanan) */}
          {(activeTab === "semua" || activeTab === "layanan") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <Clock size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Instalasi Instan</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Proses registrasi praktis via WhatsApp dan penjadwalan kunjungan lapangan yang cepat untuk pemasangan baru di rumah Anda.
                </p>
              </div>
            </div>
          )}

          {/* 7. Harga Terjangkau (Harga) */}
          {(activeTab === "semua" || activeTab === "harga") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <Check size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Harga Flat Transparan</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Tarif berlangganan kompetitif dan flat setiap bulan. Sudah termasuk PPN 11% dan sewa modem tanpa ada biaya tersembunyi.
                </p>
              </div>
            </div>
          )}

          {/* 8. Rumah & Bisnis (Harga/Infrastruktur) */}
          {(activeTab === "semua" || activeTab === "harga" || activeTab === "infrastruktur") && (
            <div className="md:col-span-2 lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                <Buildings size={24} weight="bold" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Fleksibel untuk Rumah &amp; Bisnis</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Skalabilitas layanan yang adaptif untuk keperluan produktivitas rumah tangga maupun kelancaran operasional kafe dan kantor.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
