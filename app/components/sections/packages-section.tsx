"use client";

import React from "react";
import { Check } from "@phosphor-icons/react";

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
