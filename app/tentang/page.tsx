"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaCardSection } from "../components/cta-card-section";
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
      {/* Hero Header */}
      <PageHeader
        eyebrow="TENTANG PERUSAHAAN"
        title="Dedikasi Menghubungkan"
        highlight="Cirebon Tanpa Batas."
        subtitle="PT Jaringan Multimedia Cirebon (JMCNET / SGC Network) hadir sebagai pelopor infrastruktur fiber optik murni dengan komitmen pelayanan cepat, stabil, dan transparan."
      />

      {/* Visi & Misi */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-y border-slate-100 relative">
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
      <section className="py-20 bg-white relative">
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
      <section className="py-20 bg-gradient-to-br from-brand-dark/5 via-sky-50/50 to-slate-50 border-y border-brand-dark/10 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
              <span>Pilar Utama Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Mengapa Kami Berbeda
            </h2>
            <p className="text-slate-600 text-base">
              Empat nilai dasar yang kami junjung tinggi dalam setiap koneksi yang kami pasang ke rumah Anda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-dark/40 transition-all group space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white flex items-center justify-center shadow-md shadow-brand-light/20 group-hover:scale-105 transition-transform">
                  <Lightning size={26} weight="fill" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Stabilitas Murni</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Tanpa penurunan kecepatan di jam sibuk berkat manajemen kapasitas bandwidth yang proporsional.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-dark/40 transition-all group space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white flex items-center justify-center shadow-md shadow-brand-light/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={26} weight="fill" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Jujur Tanpa FUP</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Kami tidak membatasi kuota Anda secara tersembunyi. Gunakan sepuasnya untuk pekerjaan maupun hiburan.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-dark/40 transition-all group space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white flex items-center justify-center shadow-md shadow-brand-light/20 group-hover:scale-105 transition-transform">
                  <UsersThree size={26} weight="fill" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Responsif 24/7</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Tim dukungan pelanggan yang bisa dihubungi kapan saja melalui WhatsApp dengan penyelesaian cepat.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-dark/40 transition-all group space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white flex items-center justify-center shadow-md shadow-brand-light/20 group-hover:scale-105 transition-transform">
                  <Heart size={26} weight="fill" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Kebanggaan Lokal</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Mengutamakan kontribusi positif bagi kemajuan ekonomi dan literasi digital di wilayah Cirebon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <CtaCardSection
        eyebrow="Mulai Berlangganan"
        title="Siap Bergabung dengan Jaringan JMCNET?"
        description="Lihat pilihan paket internet fiber optik kami atau konsultasikan langsung alamat pemasangan Anda dengan tim customer service kami."
        actions={[
          {
            label: "Lihat Paket Internet",
            href: "/paket",
            variant: "primary",
          },
          {
            label: "Hubungi Kami",
            href: "/kontak",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
