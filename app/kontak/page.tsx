"use client";

import React, { useState } from "react";
import { PageHeader } from "../components/page-header";
import { MapWrapper } from "../components/map-wrapper";
import {
  WhatsappLogo,
  MapPin,
  Envelope,
  Phone,
  PaperPlaneRight,
  Headset,
  Clock,
  ChatCircleText,
} from "@phosphor-icons/react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    noWhatsapp: "",
    kategori: "Pemasangan Baru",
    alamat: "",
    pesan: "",
  });

  const handleSendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo JMCNET,%0A%0A*Nama:* ${formData.nama}%0A*No WA:* ${formData.noWhatsapp}%0A*Kategori:* ${formData.kategori}%0A*Alamat:* ${formData.alamat}%0A*Pesan/Pertanyaan:* ${formData.pesan}`;
    window.open(`https://wa.me/6285179997972?text=${text}`, "_blank");
  };

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="LAYANAN PELANGGAN 24/7"
        title="Hubungi Tim"
        highlight="JMCNET Cirebon."
        subtitle="Punya pertanyaan ketersediaan jaringan atau mengalami kendala teknis? Tim kami siap memberikan solusi terbaik dengan cepat dan responsif."
      />

      {/* Contact Direct Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: CS 1 */}
          <a
            href="https://wa.me/6285179997972"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <WhatsappLogo size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Customer Service 1
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">0851-7999-7972</h3>
              <p className="text-xs text-slate-500 mt-1">Chat langsung untuk info pasang baru.</p>
            </div>
          </a>

          {/* Card 2: CS 2 */}
          <a
            href="https://wa.me/6285179997975"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <WhatsappLogo size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Customer Service 2
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">0851-7999-7975</h3>
              <p className="text-xs text-slate-500 mt-1">Bantuan kendala teknis &amp; tagihan.</p>
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:info@jmcnet.id"
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/10 text-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <Envelope size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Email Resmi
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">info@jmcnet.id</h3>
              <p className="text-xs text-slate-500 mt-1">Kemitraan &amp; surat menyurat resmi.</p>
            </div>
          </a>

          {/* Card 4: Support Hours */}
          <div className="bg-slate-900 text-white p-7 rounded-3xl flex flex-col justify-between space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center">
              <Clock size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Jam Operasional
              </span>
              <h3 className="text-lg font-bold mt-1">24 Jam / 7 Hari</h3>
              <p className="text-xs text-slate-300 mt-1">Layanan teknis siaga setiap hari.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Office Location Grid */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-start">
          {/* Form Konsultasi */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 p-8 md:p-10 rounded-3xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Kirim Pertanyaan Langsung
              </h2>
              <p className="text-slate-600 text-sm">
                Isi formulir di bawah ini untuk menghasilkan pesan WhatsApp terformat otomatis kepada tim CS kami.
              </p>
            </div>

            <form onSubmit={handleSendToWhatsapp} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08123456xxxx"
                    value={formData.noWhatsapp}
                    onChange={(e) => setFormData({ ...formData, noWhatsapp: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Kategori Keperluan
                  </label>
                  <select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
                  >
                    <option value="Pemasangan Baru">Pemasangan Baru</option>
                    <option value="Cek Jangkauan Area">Cek Jangkauan Area</option>
                    <option value="Laporan Kendala Teknis">Laporan Kendala Teknis</option>
                    <option value="Pertanyaan Umum / Pembayaran">Pertanyaan Umum / Pembayaran</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Alamat Lengkap / Wilayah Pasang
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Arjawinangun / Tegalgubug Lor"
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pesan / Detail Pertanyaan
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan pertanyaan atau kendala yang ingin Anda tanyakan..."
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-brand-dark text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-dark/95 active:scale-98 transition-all shadow-md shadow-brand-dark/15"
              >
                <PaperPlaneRight size={18} weight="fill" />
                <span>Kirim via WhatsApp CS 1</span>
              </button>
            </form>
          </div>

          {/* Alamat Kantor & Peta */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
                Lokasi Kantor Pusat
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Kunjungi Kantor Layanan Kami
              </h2>
              <div className="flex items-start gap-3.5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <MapPin size={26} className="text-brand-dark shrink-0 mt-0.5" weight="fill" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    PT Jaringan Multimedia Cirebon
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">
                    Blok 04 Assa&apos;idiyah RT.03 RW.03
                    <br />
                    Desa Tegalgubug Lor, Kecamatan Arjawinangun
                    <br />
                    Kabupaten Cirebon, Jawa Barat 45162
                  </p>
                </div>
              </div>
            </div>

            {/* Map Leaflet */}
            <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden p-2 sm:p-3 shadow-sm relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px]">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
