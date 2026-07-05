"use client";

import React from "react";
import {
  Check,
  Ticket,
  Storefront,
  WhatsappLogo,
  Timer,
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react";

export function PackagesSection() {
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
            Pilih kecepatan sesuai kebutuhan Anda. Tanpa tulisan kecil yang membingungkan—apa yang Anda lihat adalah apa yang Anda dapatkan.
          </p>
        </div>


        {/* 2. PRICING CARDS (Hanya menampilkan diferensiasi tiap paket agar cepat dicerna) */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {/* SGC LITE */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                  Rumah Tangga
                </span>
                <span className="text-xs font-bold text-slate-400">Tier 1</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">SGC LITE</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Ideal untuk kebutuhan internet dasar harian keluarga.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">16</span>
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
                href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20LITE%2016%20Mbps%20(Rp%20166.500/bulan)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs"
              >
                <span>Daftar SGC LITE via WA</span>
                <ArrowRight size={16} weight="bold" className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* SGC SOCIALLY (Terlaris) */}
          <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 flex flex-col justify-between relative shadow-lg ring-4 ring-brand-dark/10 transition-all duration-300 hover:-translate-y-1 group">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-brand-dark text-[10px] font-extrabold tracking-widest text-white uppercase shadow-sm">
              Paling Diminati
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-dark/10 text-brand-dark border border-brand-dark/20">
                  Optimal &amp; Cepat
                </span>
                <span className="text-xs font-bold text-brand-dark">Tier 2</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">SGC SOCIALLY</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Kecepatan favorit untuk streaming 4K, WFH, &amp; keluarga aktif.
                </p>
              </div>

              <div className="bg-brand-dark/5 p-5 rounded-2xl border border-brand-dark/15 space-y-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">26</span>
                  <span className="text-lg font-bold text-slate-600">Mbps</span>
                </div>
                <div className="pt-2 border-t border-brand-dark/15 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-brand-dark">Rp 222.000</span>
                    <span className="text-xs text-slate-500 font-medium"> / bln</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600">Aktivasi awal: Rp 150.000 (Total bayar pertama: Rp 372.000)</p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
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
                href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20SOCIALLY%2026%20Mbps%20(Rp%20222.000/bulan)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 active:scale-[0.98] transition-all shadow-md shadow-brand-dark/20"
              >
                <span>Daftar SGC SOCIALLY via WA</span>
                <ArrowRight size={16} weight="bold" className="text-brand-light" />
              </a>
            </div>
          </div>

          {/* SGC FAMILY */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  Performa Tinggi
                </span>
                <span className="text-xs font-bold text-slate-400">Tier 3</span>
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
                href="https://wa.me/6285179997972?text=Halo%20JMCNET,%20saya%20tertarik%20berlangganan%20paket%20SGC%20FAMILY%2056%20Mbps%20(Rp%20333.000/bulan)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-2xs"
              >
                <span>Daftar SGC FAMILY via WA</span>
                <ArrowRight size={16} weight="bold" className="text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. VOUCHER HOTSPOT & RESELLER (Dibuat ringkas dan modular) */}
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
