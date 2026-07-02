"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  Speedometer,
  Infinity as InfinityIcon,
  ShieldCheck,
  Wrench,
  Headset,
  Clock,
  Check,
  Buildings,
  Cpu,
  GlobeHemisphereWest,
  CloudCheck,
  ArrowRight,
  XCircle,
} from "@phosphor-icons/react";

export default function KeunggulanPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-brand-dark/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-brand-light">
            Infrastruktur Termutakhir
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Teknologi <span className="text-brand-light">Fiber Optic Murni</span> Tanpa Kompromi
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dalam infrastruktur jaringan FTTH (Fiber to the Home) JMCNET yang dirancang khusus untuk kestabilan tinggi di cuaca apapun.
          </p>
        </div>
      </section>

      {/* Tech Architecture Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-3 items-stretch">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <GlobeHemisphereWest size={32} weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">100% FTTH Network</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kabel serat optik ditarik langsung dari pusat server (ODC/ODP) masuk hingga ke dalam rumah atau ruangan Anda, menjamin redaman sinyal serendah mungkin.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <Cpu size={32} weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Perangkat Modem Dual Band</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dukungan router berteknologi tinggi yang memancarkan sinyal Wi-Fi kuat dan stabil ke berbagai sudut ruangan untuk banyak perangkat sekaligus.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <CloudCheck size={32} weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Redundant Backbone</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Jalur koneksi utama didukung oleh sistem proteksi cadangan (backup route) untuk meminimalisir risiko gangguan atau putus koneksi secara tiba-tiba.
            </p>
          </div>
        </div>
      </section>

      {/* Perbandingan Tabel */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Komparasi Performa
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Mengapa Fiber Optic JMCNET Lebih Unggul?
            </h2>
            <p className="text-slate-600 text-base">
              Perbandingan nyata antara jaringan fiber optik murni JMCNET dengan teknologi internet konvensional lainnya.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="p-5 font-bold">Fitur &amp; Spesifikasi</th>
                    <th className="p-5 font-black bg-brand-dark text-white">JMCNET (Fiber Optic)</th>
                    <th className="p-5 font-bold text-slate-400">Kabel Tembaga / Wireless Biasa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr>
                    <td className="p-5 font-semibold text-slate-800">Kecepatan &amp; Stabilitas</td>
                    <td className="p-5 font-bold text-emerald-600 bg-emerald-50/30 flex items-center gap-2">
                      <Check size={18} weight="bold" />
                      <span>Sangat Stabil up to 56 Mbps</span>
                    </td>
                    <td className="p-5 text-slate-500">Rentan menurun saat jam sibuk</td>
                  </tr>
                  <tr>
                    <td className="p-5 font-semibold text-slate-800">Ketahanan Terhadap Cuaca</td>
                    <td className="p-5 font-bold text-emerald-600 bg-emerald-50/30 flex items-center gap-2">
                      <Check size={18} weight="bold" />
                      <span>Tahan Hujan Deras &amp; Petir</span>
                    </td>
                    <td className="p-5 text-slate-500">Sering terganggu saat hujan &amp; angin</td>
                  </tr>
                  <tr>
                    <td className="p-5 font-semibold text-slate-800">Batasan Kuota (FUP)</td>
                    <td className="p-5 font-bold text-emerald-600 bg-emerald-50/30 flex items-center gap-2">
                      <Check size={18} weight="bold" />
                      <span>100% Unlimited Tanpa FUP</span>
                    </td>
                    <td className="p-5 text-slate-500 flex items-center gap-2">
                      <XCircle size={18} className="text-rose-500" />
                      <span>Kecepatan diturunkan setelah kuota habis</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 font-semibold text-slate-800">Latensi Game / Zoom Call</td>
                    <td className="p-5 font-bold text-emerald-600 bg-emerald-50/30 flex items-center gap-2">
                      <Check size={18} weight="bold" />
                      <span>Ping Rendah &amp; Mulus</span>
                    </td>
                    <td className="p-5 text-slate-500">Sering mengalami lag atau putus-putus</td>
                  </tr>
                  <tr>
                    <td className="p-5 font-semibold text-slate-800">Dukungan Teknisi Lokal</td>
                    <td className="p-5 font-bold text-emerald-600 bg-emerald-50/30 flex items-center gap-2">
                      <Check size={18} weight="bold" />
                      <span>Standby 24/7 Cirebon</span>
                    </td>
                    <td className="p-5 text-slate-500">Proses antrian call center pusat lama</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Bento Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Keunggulan Utama
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              8 Alasan Utama Memilih Layanan Kami
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="md:col-span-2 p-8 rounded-3xl bg-brand-dark text-white space-y-4 flex flex-col justify-between shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Speedometer size={24} weight="fill" className="text-brand-light" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Fiber Optic Network</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Infrastruktur kabel serat optik murni dari pusat server hingga ke lokasi Anda, menjamin kecepatan transmisi data terbaik.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <InfinityIcon size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Tanpa FUP</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Bebas kuota pemakaian wajar. Kecepatan tetap stabil sepanjang bulan tanpa batas kuota.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <ShieldCheck size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Koneksi Stabil</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Latency rendah dan loss rate minimal yang menjamin kenyamanan bermain game, video call, dan streaming.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Wrench size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Teknisi Profesional</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Dukungan tim lapangan ahli yang siap melakukan penanganan fisik secara cepat dan berstandar keselamatan tinggi.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-brand-dark/95 to-slate-900 text-white space-y-4 flex flex-col justify-between shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Headset size={24} weight="fill" className="text-brand-light" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Support 24/7</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Customer support yang responsif dan siap membantu memecahkan kendala teknis Anda kapan saja, 24 jam sehari, 7 hari seminggu.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Clock size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Instalasi Cepat</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Proses registrasi instan dan penjadwalan kunjungan lapangan yang cepat untuk pemasangan baru.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Check size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Harga Terjangkau</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Tarif berlangganan flat bulanan yang kompetitif, transparan, dan tidak ada biaya tersembunyi.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Buildings size={24} weight="bold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Rumah &amp; Bisnis</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Skalabilitas layanan yang adaptif untuk keperluan produktivitas rumah tangga maupun kelancaran operasional usaha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Rasakan Sendiri Kecepatan JMCNET</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Tinggalkan koneksi lambat yang membatasi produktivitas Anda. Pindah ke fiber optik murni sekarang.
          </p>
          <div className="pt-4">
            <Link
              href="/paket"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark px-8 text-sm font-bold text-white hover:bg-brand-dark/95 shadow-lg shadow-brand-dark/20 transition-all"
            >
              <span>Pilih Kecepatan Paket Anda</span>
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
