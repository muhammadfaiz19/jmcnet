"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  Check,
  WhatsappLogo,
  ShieldCheck,
  DownloadSimple,
  Buildings,
  House,
  ArrowRight,
  Info,
  Ticket,
  Storefront,
  Timer,
} from "@phosphor-icons/react";

export default function PaketPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-dark/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-brand-light">
            Daftar Paket Resmi
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Pilihan Paket Internet <span className="text-brand-light">Tanpa Batas</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Kecepatan stabil murni 100% Fiber Optic. Harga flat setiap bulan, sudah termasuk PPN 11% dan sewa perangkat modem.
          </p>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {/* Package 1: SGC LITE */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark bg-brand-dark/10 px-3 py-1 rounded-full">
                      Rumah Tangga
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">SGC LITE</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Cocok untuk browsing harian, media sosial &amp; hiburan ringan.
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
                        <span>Total Pembayaran Pertama:</span>
                        <span className="text-brand-dark">Rp 316.500</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Fasilitas Layanan:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Speed Download &amp; Upload up to 16 Mbps</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free Hotspot Member 2 Device</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free dipinjami Perangkat Fiber Modem/Router</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Bebas Kuota (100% Tanpa Batas FUP)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Customer Support 24/7 &amp; SLA 98%</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free Maintenance selama berlangganan</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20LITE%2016%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Daftar Sekarang via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Package 2: SGC SOCIALLY (Terlaris) */}
            <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 flex flex-col justify-between relative shadow-lg ring-4 ring-brand-dark/10 transition-all hover:-translate-y-1">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-black tracking-widest text-white uppercase shadow-md">
                Paling Diminati
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-slate-900 px-3 py-1 rounded-full">
                      Optimal
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
                        <span>Total Pembayaran Pertama:</span>
                        <span className="text-brand-dark">Rp 372.000</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Fasilitas Layanan:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Speed Download &amp; Upload up to 26 Mbps</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free Hotspot Member 2 Device</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free dipinjami Perangkat Fiber Modem/Router</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Bebas Kuota (100% Tanpa Batas FUP)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Customer Support 24/7 &amp; SLA 98%</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free Maintenance &amp; Prioritas Penanganan</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20SOCIALLY%2026%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 transition-all shadow-md shadow-brand-dark/20"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Daftar Sekarang via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Package 3: SGC FAMILY */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
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
                        <span>Total Pembayaran Pertama:</span>
                        <span className="text-brand-dark">Rp 483.000</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Fasilitas Layanan:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Speed Download &amp; Upload up to 56 Mbps</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free Hotspot Member 2 Device</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Free dipinjami Perangkat Fiber Modem/Router</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Bebas Kuota (100% Tanpa Batas FUP)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>Customer Support 24/7 &amp; SLA 98%</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                      <span>IP Dynamic Private &amp; Bandwidth Prioritas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20langganan%20paket%20SGC%20FAMILY%2056%20Mbps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Daftar Sekarang via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voucher Hotspot & Reseller Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
              <Ticket size={16} weight="fill" className="text-brand-dark" />
              <span>Akses Hotspot SGC Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Voucher Wi-Fi Hotspot & Peluang Reseller
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Dapatkan internet super cepat per 8 jam untuk kebutuhan instan Anda, atau jadilah Mitra Reseller SGC Network di lingkungan Anda dengan modal sangat ringan.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Voucher Eceran */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      Pengguna Langsung
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3">Voucher Eceran (8 Jam)</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Koneksi cepat tanpa ikatan kontrak bulanan.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                    <Timer size={24} weight="bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 3.000</span>
                    <span className="text-sm font-semibold text-slate-500">/ voucher</span>
                  </div>
                  <div className="text-xs font-medium text-slate-600 pt-2 border-t border-slate-200 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Masa aktif: <strong>8 Jam</strong> sejak login pertama</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Kecepatan tinggi stabil murni fiber optic</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Langsung login di seluruh titik area Hotspot SGC Network</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Tanpa syarat administrasi atau pemasangan router di rumah</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20membeli%20Voucher%20Wi-Fi%20Hotspot%208%20Jam."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors shadow-sm"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Beli Voucher Eceran via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Voucher Reseller */}
            <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 flex flex-col justify-between relative shadow-lg ring-4 ring-brand-dark/10 transition-all hover:-translate-y-1 group">
              <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-extrabold tracking-widest text-white uppercase shadow-md">
                Peluang Usaha
              </div>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark bg-brand-dark/10 border border-brand-dark/20 px-3 py-1 rounded-full">
                      Harga Mitra Grosir
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3">Paket Reseller Voucher</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Cocok untuk warung kopi, kafe, konter pulsa, &amp; pelajar.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                    <Storefront size={24} weight="bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 bg-brand-dark/5 p-5 rounded-2xl border border-brand-dark/15">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 2.000</span>
                    <span className="text-sm font-semibold text-slate-600">/ voucher</span>
                  </div>
                  <div className="text-xs text-slate-600 pt-2 border-t border-brand-dark/15 mt-1 flex justify-between items-center">
                    <span>Minimal pembelian: <strong className="text-slate-900 font-bold">25 Voucher</strong></span>
                    <span className="bg-brand-dark text-white px-2 py-0.5 rounded text-[10px] font-bold">Modal Rp 50.000</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Keuntungan Rp 1.000/voucher (Harga jual eceran Rp 3.000)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Masa aktif 8 jam baru dihitung saat kode digosok &amp; login</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Bebas risiko basi / hangus jika disimpan sebagai stok</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20mendaftar%20jadi%20Mitra%20Reseller%20Voucher%20Wi-Fi%20(Min.%2025%20Voucher)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 transition-all shadow-lg shadow-brand-dark/20"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Daftar Reseller via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate / Dedicated Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white grid gap-8 lg:grid-cols-12 items-center relative overflow-hidden">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-light uppercase">
                Layanan Korporasi &amp; Instansi
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Membutuhkan Dedicated Bandwidth atau IP Public Khusus?
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Kami juga menyediakan solusi Dedicated Internet Access (DIA), interkoneksi antar kantor (VPN/VLAN), serta paket kustom untuk instansi pemerintahan, sekolah, perhotelan, dan pabrik di Cirebon.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <Link
                href="/kontak"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 text-sm font-bold text-white hover:bg-brand-dark/95 shadow-lg shadow-brand-dark/20 transition-all w-full md:w-auto"
              >
                <span>Konsultasi Solusi Korporasi</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dokumen & Syarat Pendaftaran */}
      <section className="py-20 bg-slate-50 border-t border-slate-150">
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
                <span>Pembayaran rutin jatuh tempo setiap tanggal 1 setiap bulannya.</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Garansi perangkat modem gratis selama masa aktif berlangganan.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
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
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-sm"
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
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
              >
                <span className="flex items-center gap-2.5">
                  <DownloadSimple size={18} className="text-brand-dark" weight="bold" />
                  <span>Kontrak Berlangganan SGC Network (DOCX)</span>
                </span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-mono">Unduh</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
