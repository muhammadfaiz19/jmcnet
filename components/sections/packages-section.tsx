"use client";

import React from "react";
import {
  Check,
  X,
  Ticket,
  Storefront,
  Timer,
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react";
import { WhatsappLogo } from "../layout/whatsapp-icon";

import type { Package, VoucherPlan, SiteSettings } from "@/types";

export function PackagesSection({
  packages = [],
  voucherPlans = [],
  settings = null,
}: {
  packages?: Package[];
  voucherPlans?: VoucherPlan[];
  settings?: SiteSettings | null;
}) {
  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";

  return (
    <section id="paket" className="py-24 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
            <Sparkle size={14} weight="fill" />
            <span>Pilihan Kecepatan Transparan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Paket Internet Fiber Optic
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Pilih kecepatan sesuai kebutuhan Anda. Tanpa batasan kuota (Unlimited), stabil, dan transparan.
          </p>
        </div>

        {/* 2. PRICING CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {packages && packages.length > 0 ? (
            packages.map((pkg) => {
              // Parse features jika masih berupa string JSON
              let parsedFeatures: any[] = [];
              if (typeof pkg.features === "string") {
                try {
                  parsedFeatures = JSON.parse(pkg.features);
                } catch (_) {
                  parsedFeatures = [];
                }
              } else {
                parsedFeatures = pkg.features || [];
              }

              const isFeatured = pkg.isFeatured;
              const waMessage = `Halo JMCNET, saya tertarik mendaftar paket ${pkg.name}`;
              const waUrl = `https://wa.me/${whatsappCs1}?text=${encodeURIComponent(waMessage)}`;

              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border ${
                    isFeatured
                      ? "border-brand-dark ring-2 ring-brand-dark/10"
                      : "border-slate-200/80"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-dark to-brand-light text-white text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md border border-white/20 whitespace-nowrap z-10">
                      Rekomendasi
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 whitespace-nowrap" title={pkg.tierLabel}>
                        {pkg.tierLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-400 shrink-0">{pkg.tierNumber}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed min-h-[32px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                      {/* Kecepatan Mbps */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 tracking-tight">{pkg.speedMbps}</span>
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Mbps</span>
                      </div>
                      
                      {/* Biaya Bulanan Utama */}
                      <div className="pt-2 border-t border-slate-200/60">
                        <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-0.5">Biaya Bulanan:</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-brand-dark">Rp {pkg.priceMonthly.toLocaleString("id-ID")}</span>
                          <span className="text-xs text-slate-500 font-medium">/ bulan</span>
                        </div>
                      </div>
                      
                      {/* Rincian Pertama & Pasang */}
                      <div className="pt-2.5 border-t border-dashed border-slate-200 space-y-1.5 text-[11px] text-slate-600 leading-tight">
                        <div className="flex justify-between">
                          <span>Biaya Pasang Baru:</span>
                          <span className="font-semibold text-slate-800">Rp {pkg.activationFee.toLocaleString("id-ID")}</span>
                        </div>
                        <div className="pt-2 border-t border-dashed border-slate-200">
                          <div className="flex justify-between text-brand-dark font-extrabold text-xs">
                            <span>Bulan Pertama:</span>
                            <span>Rp {(pkg.priceMonthly + pkg.activationFee).toLocaleString("id-ID")}</span>
                          </div>
                          <span className="text-[9px] text-slate-400 block mt-0.5 text-right font-medium">
                            (Biaya bulanan + biaya pemasangan)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Fasilitas & Layanan:
                      </p>
                      <ul className="space-y-2.5">
                        {parsedFeatures.map((feat: any, idx: number) => (
                          <li key={idx} className={`flex items-start gap-2.5 text-xs font-medium ${feat.included ? "text-slate-700" : "text-slate-500"}`}>
                            {feat.included ? (
                              <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                            ) : (
                              <X size={16} className="text-rose-500 mt-0.5 shrink-0" weight="bold" />
                            )}
                            <span>{feat.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                    >
                      <WhatsappLogo size={16} weight="fill" />
                      <span>Daftar via WA</span>
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            // Fallback hardcoded packages
            <>
              {/* SGC HEMAT */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                      Pemula / Hemat
                    </span>
                    <span className="text-xs font-bold text-slate-400">Tier 1</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">SGC HEMAT</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Pilihan ekonomis untuk browsing harian &amp; sosial media.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">5</span>
                      <span className="text-lg font-bold text-slate-600">Mbps</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-brand-dark">Rp 130.000</span>
                        <span className="text-xs text-slate-500 font-medium"> / bln</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">Aktivasi awal: Rp 150.000 (Total bayar pertama: Rp 280.000)</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
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
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20HEMAT%205%20Mbps%20(Rp%20130.000/bulan).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Daftar via WA</span>
                  </a>
                </div>
              </div>

              {/* SGC LITE */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                      Populer / Keluarga Kecil
                    </span>
                    <span className="text-xs font-bold text-slate-400">Tier 2</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">SGC LITE</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Layanan ideal untuk rumah tinggal dengan kebutuhan internet standar.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">10</span>
                      <span className="text-lg font-bold text-slate-600">Mbps</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-brand-dark">Rp 166.500</span>
                        <span className="text-xs text-slate-500 font-medium"> / bln</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">Aktivasi awal: Rp 150.000 (Total bayar pertama: Rp 316.500)</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Rekomendasi &amp; Fasilitas:
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Lancarkan <strong>3 hingga 4 perangkat</strong> bersamaan</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Sangat pas untuk pembelajaran online &amp; WFH</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Streaming HD lancar bebas buffering</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <X size={16} className="text-rose-500 mt-0.5 shrink-0" weight="bold" />
                        <span><strong>Tanpa</strong> bonus hotspot member</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20LITE%2010%20Mbps%20(Rp%20166.500/bulan).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Daftar via WA</span>
                  </a>
                </div>
              </div>

              {/* SGC VALUE */}
              <div className="bg-white rounded-3xl border border-brand-dark p-7 flex flex-col justify-between relative shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-dark text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  Pilihan Populer
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-light/10 text-brand-dark border border-brand-light/20">
                      Rekomendasi Utama
                    </span>
                    <span className="text-xs font-bold text-slate-400">Tier 3</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">SGC VALUE</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Pilihan terbaik untuk keluarga aktif dengan banyak perangkat.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">20</span>
                      <span className="text-lg font-bold text-slate-600">Mbps</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-brand-dark">Rp 222.000</span>
                        <span className="text-xs text-slate-500 font-medium"> / bln</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">Aktivasi awal: Rp 150.000 (Total bayar pertama: Rp 372.000)</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Rekomendasi &amp; Fasilitas:
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Lancarkan <strong>4 hingga 6 perangkat</strong> bersamaan</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Sangat responsif untuk smart TV, game, &amp; laptop</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span>Unggah &amp; unduh data besar tanpa delay</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" weight="bold" />
                        <span><strong>Bonus:</strong> 1 Voucher Hotspot Member</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20VALUE%2020%20Mbps%20(Rp%20222.000/bulan).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 active:scale-[0.98] transition-all shadow-md shadow-brand-dark/20 cursor-pointer"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Daftar via WA</span>
                  </a>
                </div>
              </div>

              {/* SGC FAMILY */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-55 text-emerald-700 border border-emerald-200/60">
                      Performa Tinggi
                    </span>
                    <span className="text-xs font-bold text-slate-400">Tier 4</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">SGC FAMILY</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Performa maksimal untuk keluarga besar, gaming, &amp; bisnis.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">56</span>
                      <span className="text-lg font-bold text-slate-600">Mbps</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-brand-dark">Rp 333.000</span>
                        <span className="text-xs text-slate-500 font-medium"> / bln</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">Aktivasi awal: Rp 150.000 (Total bayar pertama: Rp 483.000)</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
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
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20FAMILY%2056%20Mbps%20(Rp%20333.000/bulan).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Daftar via WA</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 3. VOUCHER HOTSPOT & RESELLER */}
        <div className="pt-12 border-t border-slate-200/80 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Ticket size={16} weight="fill" className="text-brand-dark" />
              <span>Tanpa Komitmen Bulanan</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Voucher Wi-Fi Hotspot &amp; Peluang Reseller
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Butuh internet cepat harian atau ingin menambah penghasilan usaha? Kami menyediakan layanan voucher Wi-Fi SGC Network dengan masa aktif 8 jam yang super terjangkau.
            </p>
          </div>

          {voucherPlans && voucherPlans.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {voucherPlans.map((v) => {
                let parsedFeatures: string[] = [];
                if (typeof v.features === "string") {
                  try {
                    parsedFeatures = JSON.parse(v.features);
                  } catch (_) {
                    parsedFeatures = [];
                  }
                } else {
                  parsedFeatures = v.features || [];
                }

                const waMessage = v.type === "retail"
                  ? `Halo JMCNET, saya tertarik untuk membeli Voucher Wi-Fi Hotspot ${v.name}.`
                  : `Halo JMCNET, saya tertarik untuk mendaftar jadi Mitra Reseller Voucher Wi-Fi ${v.name}.`;
                const waUrl = `https://wa.me/${whatsappCs1}?text=${encodeURIComponent(waMessage)}`;

                const IconComponent = v.type === "retail" ? Timer : Storefront;

                return (
                  <div
                    key={v.id}
                    className={`rounded-3xl border p-6 md:p-8 flex flex-col justify-between transition-all ${
                      v.type === "retail"
                        ? "bg-slate-50 border-slate-200/80 hover:border-slate-300"
                        : "bg-slate-900 text-white border-slate-800"
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-2xs ${
                            v.type === "retail"
                              ? "text-slate-500 bg-white border-slate-200/60"
                              : "text-brand-light bg-brand-dark/30 border-brand-light/20"
                          }`}>
                            {v.tagLabel}
                          </span>
                          <h4 className="text-xl font-bold mt-3">{v.name}</h4>
                        </div>
                        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${
                          v.type === "retail"
                            ? "bg-white border-slate-200/80 text-slate-700"
                            : "bg-white/10 border-white/10 text-brand-light"
                        }`}>
                          <IconComponent size={22} weight="bold" />
                        </div>
                      </div>

                      <div className={`flex items-baseline justify-between p-4 rounded-2xl border ${
                        v.type === "retail"
                          ? "bg-white border-slate-200/60"
                          : "bg-white/5 border-white/10"
                      }`}>
                        <div>
                          <span className="text-3xl font-black">Rp {v.price.toLocaleString("id-ID")}</span>
                          <span className={`text-xs font-medium ${v.type === "retail" ? "text-slate-500" : "text-slate-400"}`}>
                            {v.priceUnit}
                          </span>
                        </div>
                        {v.minPurchase && (
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                            v.type === "retail" ? "bg-slate-100 text-slate-700" : "bg-brand-dark text-white"
                          }`}>
                            {v.minPurchase}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-2 text-xs">
                        {parsedFeatures.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check size={14} className="text-emerald-500 shrink-0" weight="bold" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl text-xs font-bold transition-all ${
                          v.type === "retail"
                            ? "bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 shadow-2xs"
                            : "bg-brand-dark text-white hover:bg-brand-dark/90 shadow-md shadow-brand-dark/20"
                        }`}
                      >
                        <WhatsappLogo size={16} weight="fill" className={v.type === "retail" ? "text-emerald-600" : ""} />
                        <span>{v.type === "retail" ? "Beli Voucher Eceran via WA" : "Gabung Jadi Reseller Sekarang"}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Fallback hardcoded vouchers
            <div className="grid gap-6 md:grid-cols-2">
              {/* Voucher Eceran */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
                        Pengguna Langsung
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mt-3">Voucher Eceran (8 Jam)</h4>
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
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20membeli%20Voucher%20Wi-Fi%20Hotspot%208%20Jam.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer"
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
                      <h4 className="text-xl font-bold text-white mt-3">Paket Reseller Voucher</h4>
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
                    href={`https://wa.me/${whatsappCs1}?text=Halo%20JMCNET,%20saya%20tertarik%20untuk%20mendaftar%20jadi%20Mitra%20Reseller%20Voucher%20Wi-Fi%20(Min.%2025%20Voucher).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/90 transition-colors shadow-md shadow-brand-dark/20 cursor-pointer"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Gabung Jadi Reseller Sekarang</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 md:p-5 text-xs text-slate-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-bold text-slate-700">Catatan Transparansi Harga:</p>
            <p>Harga bulanan di atas sudah termasuk PPN 11% dan sewa perangkat modem fiber optic. Tidak ada biaya tambahan yang tersembunyi.</p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 shrink-0">#SGCNetworkCirebon</span>
        </div>
      </div>
    </section>
  );
}
