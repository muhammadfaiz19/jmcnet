"use client";

import React from "react";
import { CheckCircle, Headphones, RocketLaunch, Sparkle, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      id: "01",
      title: "Pilih Kecepatan",
      desc: "Tentukan paket internet fiber optik yang paling cocok untuk kebutuhan rumah tangga atau bisnis Anda.",
      icon: <CheckCircle size={28} weight="fill" className="text-brand-dark" />
    },
    {
      id: "02",
      title: "Cek Jangkauan via WA",
      desc: "Konsultasikan alamat lengkap Anda dengan tim CS kami melalui WhatsApp untuk konfirmasi jaringan.",
      icon: <Headphones size={28} weight="fill" className="text-brand-dark" />
    },
    {
      id: "03",
      title: "Instalasi & Aktif",
      desc: "Teknisi lokal kami datang melakukan penarikan kabel serat optik dan penyetelan modem hingga aktif 100%.",
      icon: <RocketLaunch size={28} weight="fill" className="text-brand-dark" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-xs font-bold text-brand-dark uppercase tracking-wider">
            <Sparkle size={14} weight="fill" />
            <span>Proses Registrasi Instan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            3 Langkah Mudah Berlangganan
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Tanpa birokrasi rumit. Dari konsultasi hingga internet aktif di rumah Anda dilakukan dengan praktis dan transparan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-3xl bg-white border border-slate-200/80 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:scale-105 group-hover:border-brand-dark/40 group-hover:shadow-md shadow-2xs">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-xs font-bold font-mono border-[3px] border-white shadow-xs">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/kontak"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-8 text-sm font-bold hover:bg-brand-dark transition-all shadow-md shadow-slate-900/10"
          >
            <span>Konsultasi Jangkauan Sekarang</span>
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
