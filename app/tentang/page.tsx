"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Lightning,
  UsersThree,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";

export default function TentangPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-dark/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-brand-light">
            Tentang Perusahaan
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Dedikasi Menghubungkan <span className="text-brand-light">Cirebon</span> Tanpa Batas
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            PT Jaringan Multimedia Cirebon (JMCNET / SGC Network) hadir sebagai pelopor infrastruktur fiber optik murni dengan komitmen pelayanan cepat, stabil, dan transparan.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-stretch">
          {/* Visi Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-brand-dark/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <Eye size={32} weight="fill" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Visi Kami
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Menjadi penyedia layanan internet fiber optik terdepan dan paling dipercaya di wilayah Cirebon dan sekitarnya, yang mampu mendorong percepatan transformasi digital bagi rumah tangga, instansi pendidikan, hingga pelaku bisnis UMKM dan korporasi.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Masa Depan Digital Cirebon</span>
            </div>
          </div>

          {/* Misi Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-brand-dark/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <Target size={32} weight="fill" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Misi Kami
              </h2>
              <ul className="space-y-3.5 text-slate-600 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" weight="fill" />
                  <span>Membangun jaringan 100% serat optik murni dengan stabilitas tinggi dan latensi rendah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" weight="fill" />
                  <span>Menyediakan tarif flat transparan tanpa batasan kuota tersembunyi (Bebas FUP).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" weight="fill" />
                  <span>Memberikan pelayanan teknis dan customer support lokal 24 jam sehari yang sigap dan solutif.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Komitmen Nyata Sehari-hari</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Visual Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Latar Belakang &amp; Legalitas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              PT Jaringan Multimedia Cirebon (SGC Network)
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Berawal dari semangat untuk menghadirkan konektivitas internet yang layak dan setara di berbagai sudut daerah Cirebon, PT Jaringan Multimedia Cirebon terus melakukan ekspansi jaringan infrastruktur kabel fiber optik mandiri.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Berkantor pusat di Arjawinangun, tim teknisi dan layanan pelanggan kami berakar kuat pada budaya lokal yang ramah, cepat tanggap, serta mengutamakan kepuasan jangka panjang setiap pelanggan.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="text-2xl font-black text-brand-dark">100%</h4>
                <p className="text-xs font-semibold text-slate-500 mt-1">Fiber Optic Infrastructure</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="text-2xl font-black text-brand-dark">Lokal</h4>
                <p className="text-xs font-semibold text-slate-500 mt-1">Dukungan Teknisi Cirebon</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 p-2 shadow-lg bg-slate-50">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/family_wifi.png"
                alt="JMCNET Connecting People"
                fill
                sizes="(max-w-7xl) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Utama */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-light uppercase block">
              Pilar Utama Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Mengapa Kami Berbeda
            </h2>
            <p className="text-slate-400 text-base">
              Empat nilai dasar yang kami junjung tinggi dalam setiap koneksi yang kami pasang ke rumah Anda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/20 text-brand-light flex items-center justify-center">
                <Lightning size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-bold">Stabilitas Murni</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Tanpa penurunan kecepatan di jam sibuk berkat manajemen kapasitas bandwidth yang proporsional.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/20 text-brand-light flex items-center justify-center">
                <ShieldCheck size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-bold">Jujur Tanpa FUP</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Kami tidak membatasi kuota Anda secara tersembunyi. Gunakan sepuasnya untuk pekerjaan maupun hiburan.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/20 text-brand-light flex items-center justify-center">
                <UsersThree size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-bold">Responsif 24/7</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Tim dukungan pelanggan yang bisa dihubungi kapan saja melalui WhatsApp dengan penyelesaian cepat.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/20 text-brand-light flex items-center justify-center">
                <Heart size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-bold">Kebanggaan Lokal</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Mengutamakan kontribusi positif bagi kemajuan ekonomi dan literasi digital di wilayah Cirebon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Siap Bergabung dengan Jaringan JMCNET?
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Lihat pilihan paket internet kami atau konsultasikan langsung alamat pemasangan Anda dengan tim CS kami.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/paket"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 text-sm font-bold text-white hover:bg-brand-dark/95 shadow-md shadow-brand-dark/15 transition-all"
              >
                <span>Lihat Paket Internet</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white border border-slate-300 px-6 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
