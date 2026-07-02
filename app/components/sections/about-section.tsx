"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-slate-50/20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Visual */}
        <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-lg bg-white p-2">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/family_wifi.png"
              alt="Keluarga menikmati internet cepat JMCNET"
              fill
              sizes="(max-w-7xl) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Menghubungkan Cirebon dengan Dunia Digital
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            PT Jaringan Multimedia Cirebon adalah penyedia layanan internet
            fiber optic yang berkomitmen memberikan koneksi internet cepat,
            stabil, dan handal. Dengan teknologi terkini serta dukungan
            teknisi profesional, JMCNET menghadirkan solusi internet terbaik
            untuk rumah, bisnis, sekolah, dan berbagai kebutuhan digital
            masyarakat Cirebon.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Misi kami adalah menghubungkan lebih banyak orang dengan dunia
            digital melalui layanan internet berkualitas, harga terjangkau,
            serta pelayanan yang responsif.
          </p>
          <div className="pt-2">
            <a
              href="/paket"
              className="inline-flex items-center gap-2 text-brand-dark font-bold hover:gap-3 transition-all"
            >
              <span>Pilih paket internet sekarang</span>
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
