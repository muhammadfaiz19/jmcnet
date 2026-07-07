import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { CtaCardSection } from "@/components/sections/cta-card-section";
import { settingsService } from "@/services/settings.service";
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
  ArrowsLeftRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Keunggulan Teknologi Fiber Optic JMCNET Cirebon",
  description:
    "Pelajari mengapa teknologi jaringan internet fiber optic murni (FTTH) JMCNET jauh lebih stabil dibanding internet biasa. Tanpa FUP, simetris, dan anti-cuaca buruk.",
};

export default async function KeunggulanPage() {
  // Ambil data settings dari backend API secara dinamis
  const settingsRes = await settingsService.get().catch(() => null);
  const settings = settingsRes?.data?.data || null;

  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* 1. Hero Header */}
      <PageHeader
        eyebrow="INFRASTRUKTUR TERMUTAKHIR"
        title="Teknologi Fiber Optic"
        highlight="Murni Tanpa Kompromi."
        subtitle="Mengenal keunggulan nyata jaringan FTTH (Fiber to the Home) JMCNET yang dirancang khusus untuk kestabilan tinggi di cuaca apapun tanpa bahasa teknis yang berbelit."
      />

      {/* 2. KOMPARASI NYATA: JMCNET vs INTERNET BIASA */}
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
                    <h3 className="text-2xl font-black text-white mt-1">JMCNET Fiber Optic</h3>
                  </div>
                  <CheckCircle size={32} className="text-brand-light shrink-0" weight="fill" />
                </div>

                <ul className="space-y-4 text-xs md:text-sm">
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-brand-light shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-white">100% Kabel Fiber Optic Murni</strong>
                      <p className="text-slate-400 text-xs mt-0.5">Kabel kaca menghantarkan data lewat cahaya, bukan listrik. Anti induksi petir dan karat.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-brand-light shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-white">Tanpa Batas Kuota (Murni Unlimited)</strong>
                      <p className="text-slate-400 text-xs mt-0.5">Bebas download bergiga-giga tanpa khawatir kecepatan turun tiba-tiba (Bebas FUP).</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-brand-light shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-white">Kecepatan Unggah &amp; Unduh Simetris</strong>
                      <p className="text-slate-400 text-xs mt-0.5">Kirim tugas sekolah/WFO secepat nonton streaming video 4K (1:1 Ratio).</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-brand-light shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-white">Anti Gangguan Cuaca</strong>
                      <p className="text-slate-600 text-xs mt-0.5 bg-brand-light/10 text-brand-light rounded-md px-1 py-0.5 font-mono inline-block">Hujan/Mendung?</p>
                      <p className="text-slate-400 text-xs mt-0.5">Sinyal tetap stabil karena kabel terlindung di dalam tanah/tiang khusus dan kebal cuaca.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Provider Konvensional / Biasa */}
            <div className="bg-slate-50 text-slate-800 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between border border-slate-200/80">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                      Koneksi Lama
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">Provider Kuota / GSM</h3>
                  </div>
                  <XCircle size={32} className="text-rose-400 shrink-0" weight="fill" />
                </div>

                <ul className="space-y-4 text-xs md:text-sm">
                  <li className="flex gap-3">
                    <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-slate-800">Modem Orbit / GSM Biasa</strong>
                      <p className="text-slate-500 text-xs mt-0.5">Bergantung penuh pada kekuatan sinyal pemancar seluler (BTS). Sering ngadat di jam padat.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-slate-800">Batasan FUP yang Mencekik</strong>
                      <p className="text-slate-500 text-xs mt-0.5">Kecepatan turun drastis (jadi 128Kbps) setelah pemakaian melebihi batas kuota harian/bulanan.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-slate-800">Upload Lambat (Asimetris)</strong>
                      <p className="text-slate-500 text-xs mt-0.5">Kecepatan upload biasanya dibatasi sangat kecil, menyulitkan backup data &amp; video call.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <strong className="text-slate-800">Sangat Sensitif Cuaca</strong>
                      <p className="text-slate-500 text-xs mt-0.5">Sinyal gampang terputus-putus atau hilang total saat terjadi hujan deras atau petir.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEKNOLOGI PENDUKUNG UTAMA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Detail Arsitektur Jaringan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mengapa Jaringan Kami Begitu Stabil?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Kami berinvestasi pada kualitas perangkat keras dan pengaturan server berskala industri demi menghantarkan internet terbaik ke rumah Anda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12 items-stretch max-w-6xl mx-auto">
            {/* Pillar 1: GPON (Col-span 7) */}
            <div className="md:col-span-7 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-all group shadow-2xs">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors shadow-2xs">
                  <WifiHigh size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200/80 text-slate-600">
                  01 / Arsitektur
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Teknologi FTTH &amp; GPON</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Kami menggunakan standardisasi jaringan serat optik FTTH (Fiber to the Home) dengan teknologi transmisi data GPON untuk menjaga integritas kecepatan tanpa degradasi sinyal dari pusat hingga titik ONT di dalam rumah Anda.
                </p>
              </div>
            </div>

            {/* Pillar 2: Redundancy (Col-span 5 - Highlighted Blue) */}
            <div className="md:col-span-5 p-8 md:p-10 rounded-3xl bg-slate-900 text-white space-y-6 flex flex-col justify-between hover:border-slate-800 transition-all group relative overflow-hidden shadow-md">
              <div className="absolute w-48 h-48 rounded-full bg-brand-light/10 blur-2xl -bottom-10 -left-10 pointer-events-none" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light">
                  <CloudCheck size={26} weight="bold" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-brand-light border border-white/10">
                  02 / Proteksi
                </span>
              </div>
              <div className="space-y-2 relative z-10">
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
            href: `https://wa.me/${whatsappCs1}`,
            isExternal: true,
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
