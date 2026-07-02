"use client";

import React from "react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Dipercaya oleh Masyarakat Cirebon
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Dengar langsung pengalaman dari pelanggan perumahan dan pemilik
            bisnis yang telah menggunakan JMCNET.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-6">
            <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
              &quot;Instalasi di rumah sangat cepat dan rapi. Kecepatan internet
              stabil meskipun seluruh anggota keluarga menggunakannya
              bersamaan untuk streaming dan sekolah online.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-xs">
                BS
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Budi Santoso
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Pelanggan Rumah Tangga (Arjawinangun)
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-6">
            <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
              &quot;Sangat terbantu untuk operasional toko online kami. Jaringan
              internetnya murni tanpa FUP, membuat proses upload katalog dan
              membalas chat pelanggan tanpa hambatan.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-xs">
                DL
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Dewi Lestari
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Pemilik UMKM Toko Pakaian (Sumber)
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-6">
            <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
              &quot;Koneksi internet JMCNET luar biasa stabil. Tim support
              teknisnya sangat sigap membantu ketika kami membutuhkan
              konfigurasi jaringan kantor tambahan.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-brand-dark font-extrabold text-xs">
                RW
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Rian Wijaya
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Manajer Operasional Kantor (Kesambi)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
