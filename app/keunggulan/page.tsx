"use client";

import React from "react";
import { PageHeader } from "../components/page-header";
import { CtaCardSection } from "../components/cta-card-section";
import {
  CheckCircle,
  XCircle,
  Lightning,
  ShieldCheck,
  Headset,
  Infinity as InfinityIcon,
  WifiHigh,
  Cpu,
  CloudCheck,
  Tag,
  Sparkle,
  ArrowsLeftRight,
} from "@phosphor-icons/react";

export default function KeunggulanPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* 1. Hero Header (Using new primary dark bg from PageHeader) */}
      <PageHeader
        eyebrow="INFRASTRUKTUR TERMUTAKHIR"
        title="Teknologi Fiber Optic"
        highlight="Murni Tanpa Kompromi."
        subtitle="Mengenal keunggulan nyata jaringan FTTH (Fiber to the Home) JMCNET yang dirancang khusus untuk kestabilan tinggi di cuaca apapun tanpa bahasa teknis yang berbelit."
      />

      {/* 2. KOMPARASI NYATA: JMCNET vs INTERNET BIASA (Direct, effortless scannability) */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-50/50 to-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
              <ArrowsLeftRight size={14} weight="bold" />
              <span>Perbandingan Langsung</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mengapa Pindah ke JMCNET?
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Perbedaan nyata yang langsung Anda rasakan saat beralih dari internet konvensional ke jaringan fiber optik murni kami.
            </p>
          </div>

          {/* VS Comparison Table / Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* JMCNET Card (The Winner) */}
            <div className="bg-gradient-to-br from-slate-900 via-brand-dark to-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
              <div className="absolute w-64 h-64 rounded-full bg-brand-light/15 blur-3xl -top-20 -right-20 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-brand-light uppercase block">
                      Rekomendasi Terbaik
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      JMCNET Fiber Optic
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light shrink-0">
                    <Sparkle size={22} weight="fill" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">100% Unlimited Tanpa FUP</strong>
                      <span className="text-slate-300 text-xs leading-relaxed">Bebas kuota pemakaian wajar. Kecepatan tidak akan pernah diturunkan di akhir bulan.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Stabilitas Tinggi 24 Jam</strong>
                      <span className="text-slate-300 text-xs leading-relaxed">Jalur kabel khusus ke rumah Anda. Speed konsisten tanpa turun saat jam sibuk malam hari.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Tahan Cuaca Ekstrem</strong>
                      <span className="text-slate-300 text-xs leading-relaxed">Kabel serat optik kebal terhadap gangguan gelombang magnet, anti petir, dan tahan hujan badai.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Ping Rendah (Anti-Lag)</strong>
                      <span className="text-slate-300 text-xs leading-relaxed">Respon jaringan sangat cepat, mulus untuk game online kompetitif &amp; Zoom meeting.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">CS &amp; Teknisi Lokal Cirebon</strong>
                      <span className="text-slate-300 text-xs leading-relaxed">Dukungan langsung via WhatsApp tanpa antrian robot. Penanganan kendala di hari yang sama.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 relative z-10">
                <span className="text-xs font-mono text-emerald-300 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Jaringan Terbukti Stabil &amp; Terpercaya
                </span>
              </div>
            </div>

            {/* Internet Biasa Card (The Contrast) */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                      Teknologi Konvensional
                    </span>
                    <h3 className="text-2xl font-bold text-slate-700 mt-1">
                      Kabel Tembaga / Wireless
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-200/80 flex items-center justify-center text-slate-500 shrink-0">
                    <XCircle size={22} weight="fill" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm md:text-base text-slate-600">
                  <li className="flex items-start gap-3.5">
                    <XCircle size={22} weight="fill" className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block font-bold">Ada Batas Kuota (FUP)</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">Kecepatan drastis diturunkan hingga 1 Mbps setelah pemakaian melewati batas kuota tertentu.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <XCircle size={22} weight="fill" className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block font-bold">Lambat Saat Jam Sibuk</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">Bandwidth dibagi-bagi di tiang jalan. Internet terasa sangat berat di malam hari atau hari libur.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <XCircle size={22} weight="fill" className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block font-bold">Rentan Gangguan Hujan</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">Sinyal mudah hilang, redaman membesar, dan rawan induksi petir saat cuaca buruk.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <XCircle size={22} weight="fill" className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block font-bold">Sering Lag &amp; Ping Melompat</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">Jitter tinggi dan sering terjadi packet loss yang sangat mengganggu kenyamanan bermain game.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <XCircle size={22} weight="fill" className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block font-bold">Call Center Robot &amp; Antrian</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">Pelayanan lambat melalui sistem tiket otomatis yang memakan waktu berhari-hari untuk diperbaiki.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-400">
                  Rentan penurunan performa seiring waktu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 PILAR JAMINAN MUTLAK (Asymmetrical Bento Grid - Clean, Punchy, Zero Redundancy) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase">
              Standar Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              4 Pilar Jaminan Mutlak
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Tanpa janji berlebihan, inilah empat komitmen teknis yang menjadi fondasi seluruh layanan SGC Network.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid gap-6 md:grid-cols-12 max-w-5xl mx-auto">
            {/* Pillar 1: FTTH Dedicated (Col-span 7) */}
            <div className="md:col-span-7 p-8 md:p-10 rounded-3xl bg-slate-900 text-white space-y-6 flex flex-col justify-between relative overflow-hidden shadow-lg group border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-dark/40 via-transparent to-transparent blur-2xl pointer-events-none" />
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform">
                  <WifiHigh size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                  01 / Infrastruktur
                </span>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-black tracking-tight">100% FTTH Dedicated</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Kabel serat optik ditarik langsung dari pusat server (ODC) eksklusif ke modem rumah atau bisnis Anda. Redaman serendah mungkin tanpa risiko rebutan bandwidth dengan tetangga.
                </p>
              </div>
            </div>

            {/* Pillar 2: Redundant Backbone (Col-span 5) */}
            <div className="md:col-span-5 p-8 md:p-10 rounded-3xl bg-brand-dark text-white space-y-6 flex flex-col justify-between shadow-lg group">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <CloudCheck size={26} weight="fill" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white">
                  02 / Proteksi
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black tracking-tight">Redundant Backbone</h3>
                <p className="text-brand-light text-sm leading-relaxed">
                  Jalur koneksi utama diproteksi oleh sistem cadangan otomatis <em className="underline decoration-white/40 not-italic font-semibold">(automatic failover)</em>, menjaga internet tetap aktif saat terjadi gangguan jalur.
                </p>
              </div>
            </div>

            {/* Pillar 3: Modem Dual-Band Gratis (Col-span 5) */}
            <div className="md:col-span-5 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-all group shadow-2xs">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                  <Cpu size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200/80 text-slate-600">
                  03 / Perangkat
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Modem Wi-Fi Dual-Band</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sudah termasuk peminjaman modem router berteknologi 2.4GHz &amp; 5GHz yang memancarkan sinyal kuat untuk banyak perangkat sekaligus tanpa lag.
                </p>
              </div>
            </div>

            {/* Pillar 4: Harga Flat Transparan (Col-span 7) */}
            <div className="md:col-span-7 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-all group shadow-2xs">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                  <Tag size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200/80 text-slate-600">
                  04 / Transparansi
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Tarif Flat &amp; Transparan</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tagihan bulanan pasti dan flat. Sudah mencakup PPN 11% dan sewa perangkat. Tanpa biaya jebakan atau kenaikan harga tiba-tiba di bulan berikutnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLOATING HERO CTA CARD */}
      <CtaCardSection
        eyebrow="Langkah Selanjutnya"
        title="Rasakan Sendiri Kecepatan JMCNET"
        description="Tinggalkan koneksi lambat yang membatasi produktivitas Anda. Pindah ke fiber optik murni sekarang dengan tarif flat dan transparan."
        actions={[
          {
            label: "Pilih Kecepatan Paket Anda",
            href: "/paket",
            variant: "primary",
          },
          {
            label: "Hubungi CS via WA",
            href: "https://wa.me/6285179997972",
            isExternal: true,
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
