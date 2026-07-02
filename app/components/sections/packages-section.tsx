"use client";

import React from "react";
import { Check, Ticket, Storefront, WhatsappLogo, Timer } from "@phosphor-icons/react";

export function PackagesSection() {
  return (
    <section id="paket" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
            Pilihan Kecepatan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Paket Internet Fiber Optic Unlimited
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pilih paket yang paling sesuai dengan kebutuhan digital keluarga
            maupun operasional bisnis Anda.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Package 1: SGC LITE */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">SGC LITE</h3>
                <p className="text-slate-500 text-xs mt-1">
                  Cocok untuk kebutuhan internet dasar harian.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">
                    16
                  </span>
                  <span className="text-xl font-semibold text-slate-600">
                    Mbps
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100/80">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black text-brand-dark">
                      Rp 166.500
                    </span>
                    <span className="text-xs text-slate-500">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                    <p>Biaya Aktivasi: Rp 150.000</p>
                    <p className="font-bold text-slate-700">
                      Total Bayar Awal: Rp 316.500
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Speed up to 16 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free Hotspot Member 2 Device</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free dipinjami Fiber Modem</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Bebas Kuota tanpa FUP</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>24 x 7 Support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>IP Dynamic Private</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>SLA 98%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8">
              <a
                href="#kontak"
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Package 2: SGC SOCIALLY (Terlaris) */}
          <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 flex flex-col justify-between relative shadow-md ring-4 ring-brand-dark/5">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-extrabold tracking-widest text-white uppercase shadow-sm">
              Terlaris
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  SGC SOCIALLY
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Kecepatan optimal untuk produktivitas & hiburan.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">
                    26
                  </span>
                  <span className="text-xl font-semibold text-slate-600">
                    Mbps
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100/80">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black text-brand-dark">
                      Rp 222.000
                    </span>
                    <span className="text-xs text-slate-500">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                    <p>Biaya Aktivasi: Rp 150.000</p>
                    <p className="font-bold text-slate-700">
                      Total Bayar Awal: Rp 372.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Speed up to 26 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free Hotspot Member 2 Device</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free dipinjami Fiber Modem</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Bebas Kuota tanpa FUP</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>24 x 7 Support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>IP Dynamic Private</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>SLA 98%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8">
              <a
                href="#kontak"
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-brand-dark text-sm font-bold text-white hover:bg-brand-dark/95 transition-all shadow-md shadow-brand-dark/15"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Package 3: SGC FAMILY */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  SGC FAMILY
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Performa maksimal untuk seluruh anggota keluarga.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">
                    56
                  </span>
                  <span className="text-xl font-semibold text-slate-600">
                    Mbps
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100/80">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black text-brand-dark">
                      Rp 333.000
                    </span>
                    <span className="text-xs text-slate-500">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                    <p>Biaya Aktivasi: Rp 150.000</p>
                    <p className="font-bold text-slate-700">
                      Total Bayar Awal: Rp 483.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Speed up to 56 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free Hotspot Member 2 Device</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Free dipinjami Fiber Modem</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>Bebas Kuota tanpa FUP</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>24 x 7 Support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>IP Dynamic Private</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                      weight="bold"
                    />
                    <span>SLA 98%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8">
              <a
                href="#kontak"
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>

        {/* Hotspot Voucher & Reseller Section */}
        <div className="pt-8 border-t border-slate-200/60 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
              <Ticket size={16} weight="fill" className="text-brand-dark" />
              <span>Tanpa Berlangganan Bulanan</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Voucher Wi-Fi Hotspot & Peluang Reseller
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Butuh internet cepat harian atau ingin menambah penghasilan usaha? Kami menyediakan layanan voucher Wi-Fi SGC Network dengan masa aktif 8 jam yang super terjangkau.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Voucher Eceran */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      Pengguna Langsung
                    </span>
                    <h4 className="text-xl font-bold text-slate-800 mt-3">Voucher Eceran (8 Jam)</h4>
                    <p className="text-slate-500 text-xs mt-1">
                      Solusi praktis internet cepat tanpa komitmen bulanan.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                    <Timer size={24} weight="bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 3.000</span>
                    <span className="text-sm font-semibold text-slate-500">/ voucher</span>
                  </div>
                  <div className="text-xs font-medium text-slate-600 pt-2 border-t border-slate-200/60 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Masa aktif: <strong>8 Jam</strong> sejak login pertama</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Kecepatan stabil &amp; lancar untuk streaming maupun browsing</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Dapat diakses di seluruh jaringan Hotspot SGC Network</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Tanpa syarat pemasangan alat / instalasi rumah</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20membeli%20Voucher%20Wi-Fi%20Hotspot%208%20Jam."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Beli Voucher via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Voucher Reseller */}
            <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 flex flex-col justify-between relative shadow-md ring-4 ring-brand-dark/5 group">
              <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-extrabold tracking-widest text-white uppercase shadow-sm">
                Peluang Usaha
              </div>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark bg-brand-dark/10 border border-brand-dark/20 px-3 py-1 rounded-full">
                      Harga Grosir Mitra
                    </span>
                    <h4 className="text-xl font-bold text-slate-800 mt-3">Paket Reseller Voucher</h4>
                    <p className="text-slate-500 text-xs mt-1">
                      Cocok untuk warung, kafe, konter pulsa, &amp; agen usaha lokal.
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
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Keuntungan Rp 1.000/voucher (Jual eceran seharga Rp 3.000)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Masa aktif voucher tidak akan hangus sebelum digosok/login</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                    <span>Dukungan penuh &amp; materi promosi dari tim JMCNET</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20mendaftar%20jadi%20Mitra%20Reseller%20Voucher%20Wi-Fi%20(Min.%2025%20Voucher)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 transition-all shadow-md shadow-brand-dark/15"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Gabung Jadi Mitra Reseller Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Package notice/details */}
        <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-xs text-slate-500 space-y-1.5 max-w-3xl">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark shrink-0" />
            <span>
              Harga bulanan di atas sudah termasuk PPN 11% dan sewa perangkat
              modem.
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark shrink-0" />
            <span>
              Free Biaya Maintenance / Perbaikan selama masa berlangganan.
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark shrink-0" />
            <span>
              Biaya aktivasi Rp 150.000 merupakan biaya sewa pakai perangkat
              (Router/modem dan Instalasi).
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
