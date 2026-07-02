"use client";

import React from "react";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50/20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Langkah Mudah Berlangganan
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Nikmati akses internet berkecepatan tinggi dalam tiga langkah
            praktis berikut.
          </p>
        </div>

        {/* Stepper Flow Layout */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-sm">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-800">Pilih Paket</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tentukan paket kecepatan internet fiber optic yang paling sesuai
              dengan kebutuhan rumah atau bisnis Anda.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-sm">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              Hubungi Tim Kami
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tekan tombol Hubungi Kami untuk berkonsultasi mengenai
              ketersediaan jaringan fiber optic di alamat Anda.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-sm">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              Internet Siap Digunakan
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tim teknisi kami akan menjadwalkan kunjungan instalasi ke rumah
              Anda secara cepat, bersih, dan rapi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
