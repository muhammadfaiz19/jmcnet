"use client";

import React from "react";
import {
  Speedometer,
  Infinity as InfinityIcon,
  ShieldCheck,
  Wrench,
  Headset,
  Clock,
  Check,
  Buildings,
} from "@phosphor-icons/react";

export function WhyChooseUsSection() {
  return (
    <section id="keunggulan" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Mengapa Memilih JMCNET?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Kami menawarkan kelebihan layanan internet broadband murni yang
            dirancang untuk performa tanpa kompromi.
          </p>
        </div>

        {/* Bento Grid Layout - exactly 8 items with cell variation */}
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
          {/* 1. Fiber Optic Network - Large Highlight */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-brand-dark text-white space-y-4 flex flex-col justify-between shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Speedometer
                size={24}
                weight="fill"
                className="text-brand-light"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Fiber Optic Network</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Infrastruktur kabel serat optik murni dari pusat server hingga
                ke lokasi Anda, menjamin kecepatan transmisi data terbaik.
              </p>
            </div>
          </div>

          {/* 2. Tanpa FUP */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <InfinityIcon size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">Tanpa FUP</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Bebas kuota pemakaian wajar. Kecepatan tetap stabil sepanjang
                bulan tanpa batas kuota.
              </p>
            </div>
          </div>

          {/* 3. Koneksi Stabil */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <ShieldCheck size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">
                Koneksi Stabil
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Latency rendah dan loss rate minimal yang menjamin kenyamanan
                bermain game, video call, dan streaming.
              </p>
            </div>
          </div>

          {/* 4. Teknisi Profesional */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <Wrench size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">
                Teknisi Profesional
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Dukungan tim lapangan ahli yang siap melakukan penanganan
                fisik secara cepat dan berstandar keselamatan tinggi.
              </p>
            </div>
          </div>

          {/* 5. Support 24/7 - Accent Highlight */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-brand-dark/95 to-slate-900 text-white space-y-4 flex flex-col justify-between shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Headset size={24} weight="fill" className="text-brand-light" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Support 24/7</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Customer support yang responsif dan siap membantu memecahkan
                kendala teknis Anda kapan saja, 24 jam sehari, 7 hari
                seminggu.
              </p>
            </div>
          </div>

          {/* 6. Instalasi Cepat */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <Clock size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">
                Instalasi Cepat
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Proses registrasi instan dan penjadwalan kunjungan lapangan
                yang cepat untuk pemasangan baru.
              </p>
            </div>
          </div>

          {/* 7. Harga Terjangkau */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <Check size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">
                Harga Terjangkau
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Tarif berlangganan flat bulanan yang kompetitif, transparan,
                dan tidak ada biaya tersembunyi.
              </p>
            </div>
          </div>

          {/* 8. Cocok untuk Rumah & Bisnis */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 flex flex-col justify-between hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
              <Buildings size={24} weight="bold" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">
                Rumah & Bisnis
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Skalabilitas layanan yang adaptif untuk keperluan
                produktivitas rumah tangga maupun kelancaran operasional
                usaha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
