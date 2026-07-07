"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaCardSection } from "../components/cta-card-section";
import {
  Check,
  X,
  DownloadSimple,
  Buildings,
  House,
  ArrowRight,
  Ticket,
  Storefront,
  Timer,
} from "@phosphor-icons/react";
import { WhatsappLogo } from "../components/whatsapp-icon";

export default function PaketPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="DAFTAR PAKET RESMI"
        title="Pilihan Paket Internet"
        highlight="Tanpa Batas."
        subtitle="Kecepatan stabil murni 100% Fiber Optic. Harga flat setiap bulan, sudah termasuk PPN 11% dan sewa perangkat modem."
      />

      {/* Main Packages Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* 2. PRICING CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {/* Package 0: SGC HEMAT */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      Pemula / Hemat
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">SGC HEMAT</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Pilihan ekonomis untuk browsing harian &amp; sosial media.
                    </p>
                  </div>
                  <House size={28} className="text-slate-400 shrink-0" />
                </div>

                <div className="flex flex-col gap-1.5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">5</span>
                    <span className="text-xl font-bold text-slate-600">Mbps</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-dark">Rp 130.000</span>
                      <span className="text-xs text-slate-500 font-semibold">/ bulan</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 space-y-1">
                      <p className="flex justify-between">
                        <span>Biaya Aktivasi Awal:</span>
                        <span className="font-semibold text-slate-700">Rp 150.000</span>
                      </p>
                      <p className="flex justify-between font-bold text-slate-800 border-t border-slate-200/60 pt-1">
                        <span>Total Bayar Pertama:</span>
                        <span className="text-brand-dark">Rp 280.000</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Rekomendasi &amp; Fasilitas:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Lancarkan <strong>1 hingga 2 perangkat</strong> bersamaan</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Browsing, WhatsApp, &amp; media sosial lancar</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Streaming YouTube &amp; hiburan harian</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-500 font-medium">
                      <X size={16} className="text-rose-500 mt-0.5 shrink-0" weight="bold" />
                      <span><strong>Tanpa</strong> bonus hotspot member</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20HEMAT%205%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Daftar via WA</span>
                </a>
              </div>
            </div>

            {/* Package 1: SGC LITE */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      Rumah Tangga
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">SGC LITE</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Cocok untuk browsing harian, media sosial &amp; hiburan keluarga.
                    </p>
                  </div>
                  <House size={28} className="text-slate-400 shrink-0" />
                </div>

                <div className="flex flex-col gap-1.5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">16</span>
                    <span className="text-xl font-bold text-slate-600">Mbps</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-dark">Rp 166.500</span>
                      <span className="text-xs text-slate-500 font-semibold">/ bulan</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 space-y-1">
                      <p className="flex justify-between">
                        <span>Biaya Aktivasi Awal:</span>
                        <span className="font-semibold text-slate-700">Rp 150.000</span>
                      </p>
                      <p className="flex justify-between font-bold text-slate-800 border-t border-slate-200/60 pt-1">
                        <span>Total Bayar Pertama:</span>
                        <span className="text-brand-dark">Rp 316.500</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Rekomendasi &amp; Fasilitas:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Lancarkan <strong>1 hingga 3 perangkat</strong> bersamaan</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Browsing, WhatsApp, &amp; media sosial lancar</span>
                  </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Streaming YouTube HD &amp; hiburan keluarga</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span><strong>Bonus:</strong> Free Hotspot Member (2 Device)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20LITE%2016%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Daftar via WA</span>
                </a>
              </div>
            </div>

            {/* Package 2: SGC SOCIALLY (Terlaris) */}
            <div className="bg-white rounded-3xl border-2 border-brand-dark p-7 flex flex-col justify-between relative shadow-lg ring-4 ring-brand-dark/10 transition-all duration-300 hover:-translate-y-1 group">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-black tracking-widest text-white uppercase shadow-md">
                Paling Diminati
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark bg-brand-dark/10 border border-brand-dark/20 px-3 py-1 rounded-full">
                      Optimal &amp; Cepat
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">SGC SOCIALLY</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Koneksi ideal untuk streaming 4K, WFH, dan keluarga aktif.
                    </p>
                  </div>
                  <House size={28} className="text-brand-dark shrink-0" weight="fill" />
                </div>

                <div className="flex flex-col gap-1.5 bg-brand-dark/5 p-5 rounded-2xl border border-brand-dark/15">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">26</span>
                    <span className="text-xl font-bold text-slate-600">Mbps</span>
                  </div>
                  <div className="pt-3 border-t border-brand-dark/15 mt-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-dark">Rp 222.000</span>
                      <span className="text-xs text-slate-500 font-semibold">/ bulan</span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-2 space-y-1">
                      <p className="flex justify-between">
                        <span>Biaya Aktivasi Awal:</span>
                        <span className="font-semibold text-slate-800">Rp 150.000</span>
                      </p>
                      <p className="flex justify-between font-bold text-slate-900 border-t border-brand-dark/15 pt-1">
                        <span>Total Bayar Pertama:</span>
                        <span className="text-brand-dark">Rp 372.000</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Rekomendasi &amp; Fasilitas:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Lancarkan <strong>3 hingga 6 perangkat</strong> bersamaan</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Streaming film 4K &amp; Zoom meeting online mulus</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Work From Home &amp; download file besar cepat</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span><strong>Bonus:</strong> Free Hotspot Member (2 Device)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20SOCIALLY%2026%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 active:scale-[0.98] transition-all shadow-md shadow-brand-dark/20"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Daftar via WA</span>
                </a>
              </div>
            </div>

            {/* Package 3: SGC FAMILY */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                      Performa Tinggi
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">SGC FAMILY</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Untuk banyak perangkat bersamaan, gaming intensif &amp; operasional cafe/toko.
                    </p>
                  </div>
                  <Buildings size={28} className="text-slate-400 shrink-0" />
                </div>

                <div className="flex flex-col gap-1.5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">56</span>
                    <span className="text-xl font-bold text-slate-600">Mbps</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-dark">Rp 333.000</span>
                      <span className="text-xs text-slate-500 font-semibold">/ bulan</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 space-y-1">
                      <p className="flex justify-between">
                        <span>Biaya Aktivasi Awal:</span>
                        <span className="font-semibold text-slate-700">Rp 150.000</span>
                      </p>
                      <p className="flex justify-between font-bold text-slate-800 border-t border-slate-200/60 pt-1">
                        <span>Total Bayar Pertama:</span>
                        <span className="text-brand-dark">Rp 483.000</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Rekomendasi &amp; Fasilitas:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Lancarkan <strong>6 hingga 10+ perangkat</strong> intensif</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Gaming kompetitif latensi rendah (ping stabil)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Ideal untuk operasional cafe, toko, atau kantor usaha</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span><strong>Bonus:</strong> Prioritas Bandwidth &amp; 2 Hotspot Member</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20FAMILY%2056%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Daftar via WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voucher Hotspot & Reseller Section */}
      <section className="py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Ticket size={16} weight="fill" className="text-brand-dark" />
              <span>Tanpa Komitmen Bulanan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Voucher Wi-Fi Hotspot &amp; Peluang Reseller
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Dapatkan internet super cepat per 8 jam untuk kebutuhan instan Anda, atau jadilah Mitra Reseller SGC Network di lingkungan Anda dengan modal sangat ringan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Voucher Eceran */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
                      Pengguna Langsung
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-3">Voucher Eceran (8 Jam)</h3>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                    <Timer size={22} weight="bold" />
                  </div>
                </div>

                <div className="flex items-baseline gap-1.5 bg-white p-4 rounded-2xl border border-slate-200/60">
                  <span className="text-3xl font-black text-slate-900">Rp 3.000</span>
                  <span className="text-xs text-slate-500 font-medium">/ voucher (Masa aktif 8 jam sejak login)</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" weight="bold" />
                    <span>Langsung login di seluruh titik area Hotspot SGC Network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" weight="bold" />
                    <span>Tanpa syarat administrasi atau pemasangan alat di rumah</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20membeli%20Voucher%20Wi-Fi%20Hotspot%208%20Jam."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Beli Voucher Eceran via WA</span>
                </a>
              </div>
            </div>

            {/* Voucher Reseller */}
            <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-light bg-brand-dark/30 px-3 py-1 rounded-full border border-brand-light/20">
                      Harga Grosir Mitra
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3">Paket Reseller Voucher</h3>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light shrink-0">
                    <Storefront size={22} weight="bold" />
                  </div>
                </div>

                <div className="flex items-baseline justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div>
                    <span className="text-3xl font-black text-white">Rp 2.000</span>
                    <span className="text-xs text-slate-400 font-medium"> / voucher</span>
                  </div>
                  <span className="text-[11px] font-bold bg-brand-dark px-2.5 py-1 rounded-lg text-white">Min. 25 Pcs (Modal Rp 50k)</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-brand-light shrink-0" weight="bold" />
                    <span>Keuntungan Rp 1.000/voucher (Harga jual eceran Rp 3.000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-brand-light shrink-0" weight="bold" />
                    <span>Voucher bebas disimpan, masa aktif 8 jam baru hitung saat digosok</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20mendaftar%20jadi%20Mitra%20Reseller%20Voucher%20Wi-Fi%20(Min.%2025%20Voucher)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/90 transition-colors shadow-md shadow-brand-dark/20"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Gabung Jadi Reseller Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate / Dedicated Info */}
      <CtaCardSection
        eyebrow="Layanan Korporasi & Instansi"
        title="Membutuhkan Dedicated Bandwidth atau IP Public Khusus?"
        description="Kami menyediakan solusi Dedicated Internet Access (DIA), interkoneksi antar kantor (VPN/VLAN), serta paket kustom untuk instansi pemerintahan, sekolah, perhotelan, dan bisnis korporasi di Cirebon."
        bgClassName="py-20 bg-gradient-to-tr from-slate-50 via-indigo-50/20 to-slate-50 relative"
        actions={[
          {
            label: "Konsultasi Solusi Korporasi",
            href: "/kontak",
            variant: "primary",
          },
        ]}
      />

      {/* Dokumen & Syarat Pendaftaran */}
      <section className="py-20 bg-white border-t border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Persyaratan Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Proses Transparan &amp; Resmi
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Kami menjamin transparansi harga sejak awal pendaftaran. Calon pelanggan cukup melampirkan identitas KTP dan melunasi pembayaran awal sebelum instalasi dilakukan.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Biaya aktivasi Rp 150.000 mencakup sewa perangkat modem &amp; instalasi penuh.</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Pembayaran rutin jatuh tempo tanggal 5 (maksimal tgl 10 sebelum terkena isolir).</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Garansi perangkat modem gratis selama masa aktif berlangganan.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Unduh Formulir &amp; Kontrak
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Anda dapat mempelajari secara lengkap hak serta kewajiban pelanggan atau mengisi formulir pendaftaran secara offline melalui berkas berikut:
            </p>
            <div className="space-y-3">
              <a
                href="/doc/formulir-pendaftaran-jmcnet.pdf"
                download="Formulir_Berlangganan_JMCNET.pdf"
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 transition-all shadow-sm shadow-brand-dark/15"
              >
                <span className="flex items-center gap-2.5">
                  <DownloadSimple size={18} className="text-brand-light" weight="bold" />
                  <span>Formulir Berlangganan JMCNET (PDF)</span>
                </span>
                <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-slate-300">Unduh</span>
              </a>
              <a
                href="/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                download="KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-2xs"
              >
                <span className="flex items-center gap-2.5">
                  <DownloadSimple size={18} className="text-brand-dark" weight="bold" />
                  <span>Kontrak Berlangganan SGC Network (DOCX)</span>
                </span>
                <span className="text-[10px] bg-slate-200/80 px-2 py-0.5 rounded text-slate-600 font-mono">Unduh</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <CtaCardSection
        eyebrow="Butuh Bantuan?"
        title="Masih Bingung Memilih Paket?"
        description="Konsultasikan kebutuhan internet rumah, kafe, atau kantor Anda secara gratis dengan tim teknisi dan customer service kami via WhatsApp."
        actions={[
          {
            label: "Konsultasi Gratis via WA",
            href: "https://wa.me/6285179997972",
            isExternal: true,
            icon: <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />,
            variant: "primary",
          },
          {
            label: "Hubungi Kontak Resmi",
            href: "/kontak",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
