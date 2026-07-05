"use client";

import React from "react";
import { Star } from "@phosphor-icons/react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Instalasi di rumah sangat cepat dan rapi. Kecepatan internet stabil meskipun seluruh anggota keluarga menggunakannya bersamaan untuk streaming dan sekolah online.",
      name: "Budi Santoso",
      role: "Pelanggan Rumah Tangga (Arjawinangun)",
      initials: "BS",
    },
    {
      id: 2,
      quote:
        "Sangat terbantu untuk operasional toko online kami. Jaringan internetnya murni tanpa FUP, membuat proses upload katalog dan membalas chat pelanggan tanpa hambatan.",
      name: "Dewi Lestari",
      role: "Pemilik UMKM Toko Pakaian (Sumber)",
      initials: "DL",
    },
    {
      id: 3,
      quote:
        "Koneksi internet JMCNET luar biasa stabil. Tim support teknisnya sangat sigap membantu ketika kami membutuhkan konfigurasi jaringan kantor tambahan.",
      name: "Rian Wijaya",
      role: "Manajer Operasional Kantor (Kesambi)",
      initials: "RW",
    },
    {
      id: 4,
      quote:
        "Harga sangat terjangkau dengan kualitas kecepatan yang memuaskan. Saya bisa meeting online seharian tanpa gangguan putus-putus.",
      name: "Andi Saputra",
      role: "Freelancer (Kedawung)",
      initials: "AS",
    },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-tr from-slate-50 via-sky-50/25 to-white border-y border-slate-200/80 overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 space-y-12 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
            Testimoni Pelanggan
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Dipercaya oleh Masyarakat Cirebon
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dengar langsung pengalaman dari pelanggan perumahan dan pemilik bisnis yang telah menggunakan JMCNET.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-8 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[380px] p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-shadow cursor-default shrink-0"
            >
              <div className="space-y-4">
                <p className="text-slate-700 text-base italic leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand-dark font-extrabold text-sm border border-brand-light/30">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
